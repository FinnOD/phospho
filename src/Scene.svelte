<script lang="ts">
	import {
		MeshLambertMaterial,
		IcosahedronGeometry,
		CylinderGeometry
	} from "three";
	import {
		PerspectiveCamera,
		OrbitControls,
		InstancedMesh,
		DirectionalLight,
		AmbientLight,
	} from "@threlte/core";

    import Nodes from "./lib/Nodes.svelte";

	import { G, rotate, showSubstrates } from "./stores";
	import ThreeInstancedEdges from "./lib/ThreeInstancedEdges.svelte";
	//full graph has 3292 nodes, 17080 edges

	const nodeRadius = 2;
	const nodeGeometry = new IcosahedronGeometry(nodeRadius, 2);
	const nodeMaterial = new MeshLambertMaterial({
		opacity: 0.8,
		transparent: false,
        // wireframe: true
	});

	const width = 0.5;
	const nSeg = 5;
	const lineGeometry = new CylinderGeometry(1, 1, 1, nSeg, 1, false);
	const lineMaterial = new MeshLambertMaterial({
		opacity: 0.6,
		transparent: true,
		color: "#9DAABC",
	});
    const transparentMaterial = new MeshLambertMaterial({
		opacity: 0.1,
		transparent: true,
		color: "#9DAABC",
        // color: "#00ff00",
	});

</script>

<!-- For Orthographic 2D style animate fov going down while position goes out-->
<!-- Freeze rotation of orbit controls and maybe map left click to pan -->
<!-- <PerspectiveCamera fov={0.0001} far={10e20} position={{ x: scale * 4, y: 2* scale, z: scale * 4 }} lookAt={{}}> -->

<PerspectiveCamera
	fov={50}
	far={1e10}
	position={{ x: 40, y: 20, z: 40 }}
	lookAt={{}}
>
	<OrbitControls autoRotate={$rotate} enableZoom={true} enableDamping={false} />
</PerspectiveCamera>
<DirectionalLight color={0xffffff} intensity={0.6} position={{ x: 500, y: 500, z: 500 }} />
<AmbientLight color={0x999999} />

{#if ($G)}
	<ThreeInstancedEdges geometry={lineGeometry} material={lineMaterial} {width} graph={$G} showSubstrates={$showSubstrates}/>
    <Nodes {nodeGeometry} {nodeMaterial} {transparentMaterial} />
{/if}