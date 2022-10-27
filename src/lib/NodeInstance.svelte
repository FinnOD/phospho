<script lang="ts">
	import { sineInOut } from "svelte/easing";
	import { tweened } from "svelte/motion";
	import { derived } from "svelte/store";
	import { fade } from "svelte/transition";
	import { Instance, type Position } from "@threlte/core";
	import { HTML } from "@threlte/extras";
	import type MultiDiGraph from "graphology";
	import { Color } from "three";
	import { hoveredNode, selectedNodes, G, minimumFC } from "./../stores";

	export let graph: MultiDiGraph;
	export let nodeID: string;
	export let greyedOut: boolean;

	const colorMap = {
		kinase: "#FF3E00",
		substrate: "#008080",
		selected: "#FED000",

		Kinase: undefined,
		"Ser/Thr/Tyr Kinase": undefined,
		"Tyr Kinase": undefined,
		"Ser/Thr Kinase": undefined,
		Unclassified: undefined,
		Transcription: undefined,
		Regulatory: "#FFC0CB",
		Structural: undefined,
		Metabolic: undefined,
		Phosphatase: undefined,
		"Adapter/scaffold": undefined,
		Cytosketetal: undefined,
	};

	const nAttrs = graph.getNodeAttributes(nodeID);
	const neighbours = graph.neighbors(nodeID);
	let neighbourHover = false;
	$: if ($hoveredNode) {
		let hasFC = $G.getAttribute("hasFC");
		neighbourHover = neighbours.includes($hoveredNode);
		if (hasFC && neighbourHover) {
			neighbourHover =
				$G.reduceEdges(
					$hoveredNode,
					nodeID,
					(acc, edge, eAttr) => {
						return Math.abs(eAttr.fc) > $minimumFC;
					},
					false
				) ||
				$G.reduceEdges(
					nodeID,
					$hoveredNode,
					(acc, edge, eAttr) => {
						return Math.abs(eAttr.fc) > $minimumFC;
					},
					false
				);
		}
	} else {
		neighbourHover = false;
	}

	const position: Position = { x: nAttrs.x, y: nAttrs.y, z: nAttrs.z };
	const radius = nAttrs.radius ?? 1;
	let hovering = false;

	const scale = tweened(radius);
	const colorTween = tweened(0);
	$: if (!greyedOut && (hovering || neighbourHover || $selectedNodes.has(nodeID))) {
		scale.set(radius * 3, {
			duration: 50,
			easing: sineInOut,
		});
		if (hovering) {
			colorTween.set(1, {
				duration: 0,
			});
		}
	} else {
		scale.set(radius, {
			duration: 250,
			easing: sineInOut,
		});
		colorTween.set(0, {
			duration: 250,
		});
	}

	let colorString = undefined;
	if (nAttrs.isKinase) colorString = colorMap["kinase"];
	else colorString = colorMap["substrate"];

	let baseColor = new Color(colorMap[nAttrs.type] ?? colorString);
	let endColor = new Color(colorMap["selected"]);

	const color = derived(colorTween, (c) => {
		return new Color().lerpColors(baseColor, endColor, c);
	});
</script>

<Instance
	position={{ ...position }}
	scale={$scale}
	color={greyedOut ? new Color(0x505050) : $color}
	on:pointerenter={() => {
		hovering = true;
		$hoveredNode = nodeID;
	}}
	on:pointerleave={() => {
		hovering = false;
		$hoveredNode = undefined;
	}}
	on:click={() => {
		if($selectedNodes.has(nodeID))
			$selectedNodes.delete(nodeID);
		else
			$selectedNodes.add(nodeID);

		//update
		$selectedNodes = $selectedNodes;
	}}
>
	{#if !greyedOut && ($scale > 1 || neighbourHover || $selectedNodes.has(nodeID))}
		<HTML transform sprite scale={2 * $scale} pointerEvents={"none"}>
			<div
				class={"base " +
					(neighbourHover ? "neighbour " : "") +
					($selectedNodes.has(nodeID) ? "clicked " : "") +
					(hovering ? "hovering " : "")}
			>
				<h1 transition:fade>{nAttrs.name}</h1>
			</div>
		</HTML>
	{/if}
</Instance>

<style>
	.base {
		background-color: rgba(77, 75, 75, 0.5);
		font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode",
			Geneva, Verdana, sans-serif;
		color: white;
		filter: blur(5);
	}
	.neighbourHover {
		z-index: 100;
	}
	.click {
		z-index: 101;
	}
	.hovering {
		z-index: 102;
	}
</style>
