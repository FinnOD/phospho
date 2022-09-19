<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import Drawer from "svelte-drawer-component";
	import Select from "svelte-select";
	import { showMenu, rotate, showSubstrates, baseNetwork, minimumFC } from "./../stores";
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

<Drawer open={$showMenu} size="30%" on:clickAway={() => ($showMenu = false)}>
	<div class="header">
		<div class="fakebutton" />
		<div class="title">Network Options</div>
	</div>
	<div class="drawerbody">
		Network Select
		<Select {items} bind:value={selectedNetwork} />
		<br />
		Fold-Change Data
		<UploadButton bind:value={hasUpload}/>
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
		<br>
		<input disabled={!hasUpload} style="width: 100%;" type=range step=0.1 bind:value={$minimumFC} min={-0.1} max=4>

	</div>
</Drawer>

<style>
	.header {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: row;
		padding: 10px 10px 10px 10px;
		border-bottom: 1px solid #f0f0f0;
		border-radius: 2px 2px 0 0;
	}
	.title {
		flex-grow: 1;
		padding-left: 15px;

		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial;
		color: rgba(0, 0, 0, 0.85);
		font-size: 16px;
		font-weight: 500;
		line-height: 22px;
		/* margin: 0; */
	}

	.fakebutton {
		color: white;
		border: 0px solid;
		height: 30px;
		width: 34px;
	}

	.drawerbody {
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
    .switchElement{
        margin-bottom: 12px;
    }
    .switch{
		
        float: right
    }
</style>
