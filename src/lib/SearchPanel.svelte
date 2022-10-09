<script lang="ts">
    import { derived } from "svelte/store";
	import { G, selectedNode } from "../stores";
	
	export let active;

    let info = derived([G, selectedNode], (values, set) => {
        if(!values[1]){
            // set(undefined);
            return;
        }
        
        set(values[0].getNodeAttributes(values[1]));
    });
</script>

<div class="{'search' + (!active ? ' inactive' : '')}">
    howdy this is info
    {#if $info}
    <div class="title"><h1>{$info.name}</h1></div>
		<div class="content">
			<p>{$info.type}</p>
			<p>UniprotID: {$info.id}</p>
			<p>{$info.desc}</p>
		</div>
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
</style>
