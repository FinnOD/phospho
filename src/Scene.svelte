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

	import EdgeInstance from "./lib/EdgeInstance.svelte";
	import NodeInstance from "./lib/NodeInstance.svelte";

	import { G, rotate, showSubstrates } from "./stores";
	import ThreeInstancedEdges from "./lib/ThreeInstancedEdges.svelte";

	const scale = 100;
	//full graph has 3292 nodes, 17080 edges

	const nodeRadius = 2;
	const geometry = new IcosahedronGeometry(nodeRadius, 2);
	const material = new MeshLambertMaterial({
		opacity: 0.8,
		transparent: false,
	});

	const width = 0.5;
	const nSeg = 3;
	const lineGeometry = new CylinderGeometry(1, 1, 1, nSeg, 1, false);
	const lineMaterial = new MeshLambertMaterial({
		// opacity: 0.05,
		// transparent: true,
		color: "#9DAABC",
	});

</script>

<!-- For Orthographic 2D style animate fov going down while position goes out-->
<!-- Freeze rotation of orbit controls and maybe map left click to pan -->
<!-- <PerspectiveCamera fov={0.0001} far={10e20} position={{ x: scale * 4, y: 2* scale, z: scale * 4 }} lookAt={{}}> -->

<PerspectiveCamera
	fov={50}
	far={1e10}
	position={{ x: scale * 4, y: 2 * scale, z: scale * 4 }}
	lookAt={{}}
>
	<OrbitControls autoRotate={$rotate} enableZoom={true} enableDamping={false} />
</PerspectiveCamera>
<DirectionalLight color={0xffffff} intensity={0.6} position={{ x: 500, y: 500, z: 500 }} />
<AmbientLight color={0x999999} />

{#if $G}
	<ThreeInstancedEdges geometry={lineGeometry} material={lineMaterial} {width} graph={$G} showSubstrates={$showSubstrates}/>

	<InstancedMesh {geometry} {material} interactive>
		{#each Object.entries($G.nodes()) as [i, n] (n)}
            {#if ($showSubstrates || $G.getNodeAttribute(n, 'isKinase'))}
                <NodeInstance graph={$G} nodeID={n} />
            {/if}
		{/each}
	</InstancedMesh>
{/if}
