<script lang="ts">
	import { MeshInstance } from "@threlte/core";
	import { Vector3,
        Spherical, 
        Matrix4,
        Quaternion,
        InstancedMesh as ThreeInstancedMesh } from "three";
	import type MultiDiGraph from "graphology";
	// import { G } from "./../stores";

	export let graph: MultiDiGraph;
	export let width: number;
	export let geometry;
	export let material;

	let instancedEdges;
	$: if (graph) {
		instancedEdges = new ThreeInstancedMesh(geometry, material, graph.size);

		let i = 0;
		graph.forEachEdge((edge, attr, source, target, sAttr, tAttr) => {
			if (!attr.isFirstLink || source === target) return;
			

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

			instancedEdges.setMatrixAt(i, m);
			i++;
		});
	}
</script>

<MeshInstance mesh={instancedEdges} ignorePointer />
