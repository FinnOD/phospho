<script lang="ts">
	import { selectedTab } from "../stores";

	export let id;
	export let selectable = true;

	let hovered = false;
</script>

<div
	class={"tab" + (id === $selectedTab ? " selected" : "") + (hovered ? " hovered" : "")}
	on:click={() => {
		if (selectable) $selectedTab = id;
	}}
	on:mouseenter={() => (hovered = true)}
	on:mouseleave={() => (hovered = false)}
>
	<div class={"icon" + (hovered ? " hovered" : "")}>
		<slot />
	</div>
</div>

<style>
	.icon {
		transform: scale(1);
		will-change: filter;
		transition: all 0.2s ease;
	}
	.icon.hovered {
		transform: scale(1.1);
		filter: drop-shadow(2px 1px 1px rgba(51, 51, 51, 0.7));
	}

	.tab {
		/* margin-top: 3em; */
		margin-bottom: 0.125rem;
		padding: 10px 10px 13px 10px;
		/* color: rgba(0, 0, 0, 0.85); */
		/* border-right: 1px solid rgba(221, 221, 221, 1); */
		/* border-bottom: 1px solid rgba(221, 221, 221, 1); */
		height: 30px;
		width: 34px;
		/* justify-content: center;
  		align-items: center; */
		/* transition: background-color 150ms ease; */
	}

	.tab.selected {
		/* border-right: 1px solid #f5f5f5; */
		border-radius: 8px 0px 0px 8px;
		background: #f5f5f5;
		/* background-color: red; */
	}

	.tab.hovered {
	}
</style>
