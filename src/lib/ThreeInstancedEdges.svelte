<script lang="ts">
	import { MeshInstance } from "@threlte/core";
	import {
		Vector3,
		Spherical,
		Matrix4,
		Quaternion,
		InstancedMesh as ThreeInstancedMesh,
		MeshLambertMaterial,
		Color
	} from "three";
	import type MultiDiGraph from "graphology";
	import { minimumFC } from "./../stores";

	export let graph: MultiDiGraph;
	export let width: number;
	export let showSubstrates: boolean;
	export let geometry;
	export let material;

	let instancedEdges;
	let transparentInstancedEdges;

	$: if (graph) {

		const transparentMaterial = new MeshLambertMaterial({
			opacity: 0.05,
			transparent: true,
			color: "#9DAABC",
		});

		instancedEdges = new ThreeInstancedMesh(geometry, material, 10000);
		transparentInstancedEdges = new ThreeInstancedMesh(
			geometry,
			transparentMaterial,
			10000,
		);

		let hasFC: boolean = graph.getAttribute("hasFC");
		let color = new Color();

		let i = 0;
		let ti = 0;
		graph.forEachEdge((edge, attr, source, target, sAttr, tAttr) => {
			if (!attr.isFirstLink || source === target) return;
			if (!showSubstrates && !(sAttr.isKinase && tAttr.isKinase)) return;

			const sPos = new Vector3(sAttr.x, sAttr.y, sAttr.z);
			const tPos = new Vector3(tAttr.x, tAttr.y, tAttr.z);

			const middle = sPos.clone().lerp(tPos.clone(), 0.5);
			const angleVec = tPos.clone().add(sPos.clone().multiplyScalar(-1));
			const spherical = new Spherical().setFromVector3(angleVec);

			const direction = new Vector3().subVectors(tPos, sPos);
			// const arrow = new ArrowHelper(direction.clone().normalize(), tPos);

			let m = new Matrix4();
			let q = new Quaternion();
			q.setFromUnitVectors(new Vector3(0, 1, 0), direction.normalize());
			m.compose(middle, q, new Vector3(width, spherical.radius, width));

			
			if (!hasFC) {
				instancedEdges.setMatrixAt(i, m);
				instancedEdges.setColorAt(i, color.setHex(0x9DAABC));
				i++;
			} else {
				let fc = attr?.fc ?? 0;
				let newWidth = width * Math.min(Math.abs(fc), 0.5);
				m.compose(middle, q, new Vector3(width, spherical.radius, width));

				if (Math.abs(fc) > $minimumFC) {
					instancedEdges.setMatrixAt(i, m);
					instancedEdges.setColorAt(i, fc > 0 ? color.setHex(0xFF690d) : fc < 0 ? color.setHex(0x2A729A) : color.setHex(0x9DAABC));
					i++;
				} else {
					transparentInstancedEdges.setMatrixAt(ti, m);
					ti++;
				}

			}
		});


		// instancedEdges.instanceColor.needsUpdate = true;
	}
</script>

<MeshInstance mesh={transparentInstancedEdges} ignorePointer />
<MeshInstance mesh={instancedEdges} ignorePointer />
