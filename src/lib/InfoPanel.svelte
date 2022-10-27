<script lang="ts">
	import { derived } from "svelte/store";
	import { G, selectedNodes } from "./../stores";
    
	export let active;

    let info = derived([G, selectedNodes], (values, set) => {
        if(!values[1]){
            // set(undefined);
            return;
        }
        
		let ids = [...values[1]]
		let data = ids.map((id) => values[0].getNodeAttributes(id));
        set(data);
    });
</script>

<div class="{'info' + (!active ? ' inactive' : '')}">
    {#if $info}
		{#each $info as attrs, i (attrs.id)}
			{#if (i !== 0)} <hr/> {/if}
			<div class="title"><h2>{attrs.name}</h2></div>
			<div class="content">
				<p>{attrs.type}</p>
				<p>UniprotID: {attrs.id}</p>
				<p>{attrs.desc}</p>
			</div>
		{/each}
	{:else}
	<div class="content">
		No nodes selected.
	</div>
    {/if}
</div>

<style>
	.info {
		padding: 16px;
		color: rgba(0, 0, 0, 0.85);
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial,
			Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
			Noto Color Emoji;
		font-size: 14px;
		font-variant: tabular-nums;
		word-wrap: break-word;
		line-height: 1.5715;
	}

	.info.inactive {
		display: none;
	}
	
	h2 {
		margin: auto;
	}
</style>
