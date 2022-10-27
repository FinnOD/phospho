<script type="ts">
	import { fly } from "svelte/transition";
	import { G, hoveredNode, showMenu, selectedTab, selectedNodes } from "./../stores";

	let nodeAttr = undefined;
	let hovered = false;
	let timer;

	$: if ($hoveredNode && !$showMenu) {
		hovered = true;
		nodeAttr = $G.getNodeAttributes($hoveredNode);
		clearTimeout(timer);
	} else {
		timer = setTimeout(() => {
			hovered = false;
		}, 2000);
	}
</script>

{#if hovered && !$showMenu}
	<div
		class="infobox"
		in:fly={{ y: 200, duration: 1000 }}
		out:fly={{ y: 200, duration: 1000 }}
		on:mouseenter={() => {
			clearTimeout(timer);
		}}
		on:mouseleave={() => {
			timer = setTimeout(() => {
				hovered = false;
				console.log("unselected");
			}, 500);
		}}
		on:transitionend={(nodeAttr = undefined)}
	>
		<button
			class="title"
			on:click={() => {
				$selectedNodes.add(nodeAttr.id);
				$selectedNodes = $selectedNodes;
				$showMenu = true;
				$selectedTab = "info";
			}}><h2>{nodeAttr.name}</h2></button
		>
		<div class="content">
			<p>{nodeAttr.type}</p>
			<p>UniprotID: {nodeAttr.id}</p>
			<p>{nodeAttr.desc}</p>
		</div>
	</div>
{/if}

<style>
	.infobox {
		background-color: rgb(100, 100, 100);
		color: #111;
		/* rgba(128, 128, 128, 0.8); */
		position: absolute;
		z-index: 200;
		opacity: 0.95;
		border-radius: 10px 0px 0px 0px;
		max-width: 40%;
		min-width: 40%;
		max-height: 25%;
		min-height: 25%;
		right: 0px;
		bottom: 0px;
		overflow: scroll;

		padding: 10px;
	}

	.title {
		background:none;
		border:none;
		padding: 0px;

		text-decoration: underline;
	}

	.title:hover {
		color: #eee;
	}

	.title h2 {
		margin: auto;
	}
</style>
