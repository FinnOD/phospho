<script lang="ts">
	import { G, selectedNodes } from "../stores";
	import Typeahead from "svelte-typeahead";
	import Nodes from "./Nodes.svelte";

	import SelectedNodeListItem from "./SelectedNodeListItem.svelte";
	
	export let active;
	
	let data;

	$: if($G){
		let fullGraph = $G.export();

		// Process $G into key:selector pairs as nodeID:nodeID and name:nodeID
		data = fullGraph["nodes"].map((n) => (
			{
				key: n['key'],
				selector: n['key']
			} 
		)).concat(fullGraph["nodes"].map((n) => (
			{
				key: n['key'],
				selector: n["attributes"]["name"]
			}
		)));
	}

	function onSel(results){
		if(results !== "clear"){
			$selectedNodes.add(results.original.key);
			$selectedNodes = $selectedNodes;
		}
	}
</script>

<div class={"search" + (!active ? " inactive" : "")}>
	{#if $G}
		<Typeahead
			hideLabel={true}
			placeholder={"Search Nodes"}
			extract={(item) => item.selector}
			on:select={({ detail }) => onSel(detail)}
			on:clear={() => (onSel("clear"))}
			inputAfterSelect={"clear"}
			{data}
		/>
		{#if $selectedNodes.size}
			<ul>
				{#each [...$selectedNodes] as n (n)}
					<SelectedNodeListItem nodeID={n} />
				{/each}
			</ul>
		{/if}
	{/if}
</div>

<style>
	.search {
		padding: 16px;
		color: rgba(0, 0, 0, 0.85);
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial,
			Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
			Noto Color Emoji;
		font-size: 14px;
		font-variant: tabular-nums;
		word-wrap: break-word;
		line-height: 1.5715;
		/* overflow:auto; */
	}

	.search.inactive {
		display: none;
	}

	ul {
		list-style: none;
		padding-left:0;
	}

	li {

	}
</style>
