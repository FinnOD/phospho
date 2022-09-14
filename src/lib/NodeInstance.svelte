<script lang="ts">
	import { sineInOut } from "svelte/easing";
	import { tweened } from "svelte/motion";
	import { derived } from "svelte/store";
	import { Instance, type Position } from "@threlte/core";
	import type MultiDiGraph from "graphology";
	import { Color } from "three";

	export let graph: MultiDiGraph;
	export let nodeID: string;

	let nAttrs = graph.getNodeAttributes(nodeID);
	const position: Position = { x: nAttrs.x, y: nAttrs.y, z: nAttrs.z };

	let hovering = false;

	const scale = tweened(1);
	const colorTween = tweened(0);
	$: if (hovering) {
		scale.set(3, {
			duration: 50,
			easing: sineInOut,
		});
		colorTween.set(1, {
			duration: 0,
		});
	} else {
		scale.set(1, {
			duration: 250,
			easing: sineInOut,
		});
		colorTween.set(0, {
			duration: 250,
		});
	}

	const baseColor = new Color(0xff3e00);
	const endColor = new Color(0xfed000);

	const color = derived(colorTween, (c) => {
		return new Color().lerpColors(baseColor, endColor, c);
	});
</script>

<Instance
	position={{ ...position }}
	scale={$scale}
	color={$color}
	on:pointerenter={() => (hovering = true)}
	on:pointerleave={() => (hovering = false)}
/>
