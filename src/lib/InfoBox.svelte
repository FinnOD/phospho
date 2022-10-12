<script type="ts">
	import { fly } from "svelte/transition";
	import { G, selectedNode } from "./../stores";

	let nodeAttr = undefined;
    let hovered = false;

	$: if ($selectedNode) {
        hovered = true;
		nodeAttr = $G.getNodeAttributes($selectedNode);
	} else {
        hovered = false;
        console.log('unselected')
	}

	
</script>

{#if hovered}
	<div
		class="infobox"
		in:fly={{ y: 200, duration: 1000 }}
		out:fly={{ y: 200, duration: 1000, delay: 1000 }}
		on:mouseenter={() => {
			hovered = true;
		}}
		on:mouseleave={() => {
			hovered = false;
		}}
        on:transitionend={nodeAttr = undefined}
	>
		<div class="title"><h1>{nodeAttr.name}</h1></div>
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
		max-height: 30%;
		right: 0px;
		bottom: 0px;
		overflow: scroll;

		padding: 10px;
	}
</style>
