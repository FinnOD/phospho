<script lang="ts">
	import { tweened } from "svelte/motion";
	import { derived } from "svelte/store";
	import { Instance} from "@threlte/core";
	import { Color} from "three";

	import type MultiDiGraph from "graphology";

	// export let position: Position;
	export let graph: MultiDiGraph;
	export let edgeID: string;
	export let width: number;

	let edgeAttrs = graph.getEdgeAttributes(edgeID);
	let hovering = false;

	const colorTween = tweened(0);
	$: if (hovering) {
		colorTween.set(1, {
			duration: 0,
		});
	} else {
		colorTween.set(0, {
			duration: 250,
		});
	}
	
	const baseColor = new Color(0xaaaaaa);
	const endColor = new Color(0xff3e00);

	const color = derived(colorTween, (c) => {
		return new Color().lerpColors(baseColor, endColor, c)
	});
</script>

<Instance
	position={{...edgeAttrs.cylPos}}
	scale={{x:width, y:edgeAttrs.cylLength, z:width}}
	rotation={{...edgeAttrs.cylRot}}
	color={$color}
	on:pointerenter={() => (hovering = true)}
	on:pointerleave={() => (hovering = false)}
/>
