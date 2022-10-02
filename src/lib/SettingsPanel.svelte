<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import Select from "svelte-select";
	import {
		showMenu,
		rotate,
		showSubstrates,
		showUnselected,
		baseNetwork,
		minimumFC,
	} from "./../stores";
	import UploadButton from "./UploadButton.svelte";
	import Switch from "./Switch.svelte";

	let hasUpload;

	const items = [
		{ value: "../assets/networkTiny.json", label: "Tiny Network", data: undefined },
		{ value: "../assets/kinases.json", label: "All Kinases", data: undefined },
		{ value: "../assets/network.json", label: "Full Network", data: undefined },
	];
	let selectedNetwork = items[0];

	let mounted = false;
	$: if (mounted && selectedNetwork) {
		baseNetwork.set(selectedNetwork.data);
	}
	onMount(async () => {
		items[0].data = (await import("../assets/networkTiny.json")).default;
		items[1].data = (await import("../assets/kinases.json")).default;
		items[2].data = (await import("../assets/network.json")).default;
		mounted = true;
	});

	onDestroy(() => {
		mounted = false;
	});
</script>

<div class="settings">
	Network Select
	<Select {items} bind:value={selectedNetwork} />
	<br />
	Fold-Change Data
	<UploadButton bind:value={hasUpload} />
	<br />
	<hr />
	<br />

	<div class="switchElement">
		Auto-rotate
		<div class="switch">
			<Switch bind:checked={$rotate} />
		</div>
	</div>

	<div class="switchElement">
		Show substrates
		<div class="switch">
			<Switch bind:checked={$showSubstrates} />
		</div>
	</div>
	<br />
	Fold-change selection
	<input
		disabled={!hasUpload}
		style="width: 100%;"
		type="range"
		step="0.1"
		bind:value={$minimumFC}
		min={-0.1}
		max="4"
	/>
	<p />
	<div class="switchElement">
		Show unselected elements
		<div class="switch">
			<Switch bind:checked={$showUnselected} />
		</div>
	</div>
</div>

<style>
	.settings {
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
	.switchElement {
		margin-bottom: 12px;
	}
	.switch {
		float: right;
	}
</style>
