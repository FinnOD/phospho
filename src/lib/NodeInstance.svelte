<script lang="ts">
	import { sineInOut } from "svelte/easing";
	import { tweened } from "svelte/motion";
	import { derived } from "svelte/store";
	import { fade } from "svelte/transition";
	import { Instance, type Position } from "@threlte/core";
	import { HTML } from "@threlte/extras";
	import type MultiDiGraph from "graphology";
	import { Color } from "three";

	export let graph: MultiDiGraph;
	export let nodeID: string;
	export let greyedOut: boolean;

	let nAttrs = graph.getNodeAttributes(nodeID);

	const position: Position = { x: nAttrs.x, y: nAttrs.y, z: nAttrs.z };
	const radius = nAttrs.radius ?? 1;
	let hovering = false;

	const scale = tweened(radius);
	const colorTween = tweened(0);
	$: if (!greyedOut && hovering) {
		scale.set(radius * 3, {
			duration: 50,
			easing: sineInOut,
		});
		colorTween.set(1, {
			duration: 0,
		});
	} else {
		scale.set(radius, {
			duration: 250,
			easing: sineInOut,
		});
		colorTween.set(0, {
			duration: 250,
		});
	}

	let baseColor = new Color(0xff3e00);
	let endColor = new Color(0xfed000);

	const color = derived(colorTween, (c) => {
		return new Color().lerpColors(baseColor, endColor, c);
	});
</script>

<Instance
	position={{ ...position }}
	scale={$scale}
	color={greyedOut ? new Color(0x505050) : $color}
	on:pointerenter={() => (hovering = true)}
	on:pointerleave={() => (hovering = false)}
>
	{#if !greyedOut && $scale > 1}
		<HTML transform sprite scale={1.5 * $scale} pointerEvents={"none"}>
			<h1 transition:fade>{nAttrs.name}</h1>
		</HTML>
	{/if}
</Instance>

<style>
	h1 {
		background-color: rgba(77, 75, 75, 0.5);
		color: white;
	}
</style>
