<script lang="ts">
    import GoX from 'svelte-icons/go/GoX.svelte'
	import { G, selectedNodes } from "../stores";

	export let nodeID;
</script>

<li>
	<div>{$G.getNodeAttributes(nodeID).name}</div>
	<button
		on:click={() => {
			$selectedNodes.delete(nodeID);
			$selectedNodes = $selectedNodes;
		}}><GoX /></button
	>
</li>

<style>
	li {
		display: flex;
		flex-direction: row;
        align-items: center;
        background-color: #f0f0f0;
        padding: 0.25rem 0.5rem 0.25rem 0.5rem;
        margin-bottom: 0.25rem;
        border-radius: 0.25rem;
        transition: 120ms background-color ease;
	}

    li:hover{
        background-color: #e0e0e0;
    }

	div {
		flex: 1;
	}

	button {
		height: 1rem;
		display: inline-flex;
        align-items: center; 
	}
</style>
