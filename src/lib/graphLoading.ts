import { MultiDirectedGraph } from "graphology";
import { ArrowHelper, Spherical, Vector3 } from "three";

export type NodeInput = {
	id: string;
	desc: string;
	name: string;
	isKinase: boolean;
	type: string;
};

export type LinkInput = {
	key: string;
	source: string | NodeInput;
	target: string | NodeInput;
	substratePhosphosite: string;
	effectCode: string; // "+" | "-" | "",
	fullPhosphorylationEffect: string;
};

export interface GraphData {
	nodes: NodeInput[];
	links: LinkInput[];
}

export function dataGraphToGraphology(graphData: GraphData): MultiDirectedGraph {
	let G = new MultiDirectedGraph();

	G.import({
		attributes: {
			name: graphData["id"] ?? "name-" + Math.floor(Math.random() * 1000000000),
			id: graphData["name"],
		},
		options: {
			allowSelfLoops: true,
			multi: true,
			type: "directed",
		},
		nodes: graphData.nodes.map((n) => {
			return { key: n.id, attributes: { ...n } };
		}),
		edges: graphData.links.map((l) => {
			let sourceID = typeof l.source === "string" ? l.source : l.source.id;
			let targetID = typeof l.target === "string" ? l.target : l.target.id;
			return {
				key: l.key,
				source: sourceID,
				target: targetID,
				undirected: false,
				attributes: { ...l },
			};
		}),
	});

	return G;
}

export function calculateGraphAttributes(G: MultiDirectedGraph, scale: number): MultiDirectedGraph {
	// Node Positions
	G.updateEachNodeAttributes((node, a) => {
		return { ...a, x: a.x * scale, y: a.y * scale, z: a.z * scale, maxAbsFC: a?.maxAbsFC ?? 0 };
	});

	//Edge rotation and position etc
	const collator = new Intl.Collator("en", {
		numeric: true,
		sensitivity: "base",
	});

	let beenTo: Array<string> = [];

	G.forEachNode((node) => {
		G.forEachNeighbor(node, (neighbor) => {
			if (beenTo.includes(neighbor)) return;

			let edgeCount = 0;
			G.someEdge(node, neighbor, (edge) => {
				G.setEdgeAttribute(edge, "multiNumber", edgeCount);
				edgeCount++;
			});
			G.someEdge(node, neighbor, (edge) => {
				G.setEdgeAttribute(edge, "multiTotal", edgeCount);
			});
		});

		beenTo.push(node);
	});

	G.updateEachEdgeAttributes((edge, attr, source, target, sourceAttr, targetAttr) => {
		const isAntiAlphabetical = collator.compare(source, target);
		const numMatches: number = attr.multiTotal;
		const numBefore: number = attr.multiNumber;

		let curve = 0;
		let rot = 0;
		if (numMatches > 1) {
			curve = 0.5;
			rot = (numBefore / numMatches) * 2 * Math.PI;

			if (isAntiAlphabetical === 1) {
				// if it IS backwards (b -> a) another 180 degree rotation works
				rot = Math.PI - rot;
			}
		}
		if (isAntiAlphabetical === 0) {
			// if self loop
			curve = 0.5;
		}

		let sPos = new Vector3(sourceAttr.x, sourceAttr.y, sourceAttr.z);
		let tPos = new Vector3(targetAttr.x, targetAttr.y, targetAttr.z);

		let middle = sPos.lerp(tPos, 0.5);
		let angleVec = tPos.clone().add(sPos.clone().multiplyScalar(-1));
		let spherical = new Spherical().setFromVector3(angleVec);

		const direction = new Vector3().subVectors(tPos, sPos);
		const arrow = new ArrowHelper(direction.clone().normalize(), tPos);
		const cylinderRot = new Vector3(arrow.rotation.x, arrow.rotation.y, arrow.rotation.z);

		// console.log(sPos, tPos)
		// console.log(tPos.dot(sPos));

		return {
			curve: curve,
			curveRotation: rot,
			isFirstLink: numBefore === 0,
			cylLength: 2 * spherical.radius,
			cylPos: middle,
			cylRot: cylinderRot,
			dotForwards: tPos.dot(sPos),
			...attr,
		};
	});

	return G;
}

export function splitGraphEdges(G: MultiDirectedGraph): {
	single: string[];
	multi: string[];
	self: string[];
} {
	let single: string[] = [];
	let multi: string[] = [];
	let self: string[] = [];

	G.forEachEdge((edge, attr, source, target) => {
		if (source === target) self.push(edge);
		else if (attr.multiTotal > 1) multi.push(edge);
		else single.push(edge);
	});

	return { single: single, multi: multi, self: self };
}

export type FCEntry = {
	targetid: string;
	site: string;
	fc: number;
	err: number;
};
export type FCData = { id: string; data: Array<FCEntry> };

export function addFCtoG(G: MultiDirectedGraph, fc: FCData | undefined): MultiDirectedGraph {
	let fcData = fc.data;
	if (fcData === undefined) {
		G.updateEachEdgeAttributes((edge, attr) => {
			attr.fc = undefined;
			attr.err = undefined;
			return attr;
		});
		return G;
	} else {
		let panSpecificFirst = fcData.sort((x, y) =>
			x.site === y.site ? 0 : x.site === "Pan-specific" ? -1 : 1
		);

		let maxFCbyNode = Object.fromEntries(G.mapNodes((nodeID) => [nodeID, 0]));

		G.updateEachEdgeAttributes((edge, attr, source, target, sourceAttr, targetAttr) => {
			let foundFC = panSpecificFirst
				.slice()
				.find((fcEntry: any) => fcEntry.targetid === target);
			let betterMatch = panSpecificFirst
				.slice()
				.find(
					(fcEntry: any) =>
						fcEntry.targetid === target && fcEntry.site === attr.substratePhosphosite
				);
			if (betterMatch !== undefined) foundFC = betterMatch;

			attr.fc = foundFC?.fc;
			attr.err = foundFC?.err;

			let absFC = Math.abs(attr?.fc ?? 0);

			if (absFC > maxFCbyNode[source]) {
				maxFCbyNode[source] = absFC;
			}

			if (absFC > maxFCbyNode[target]) {
				maxFCbyNode[target] = absFC;
			}

			return attr;
		});

		G.updateEachNodeAttributes((node, attr) => {
			return { ...attr, maxAbsFC: maxFCbyNode[node] };
		});

		return G;
	}
}
