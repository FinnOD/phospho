<script lang="ts">
	import { Canvas } from "@threlte/core";
	import Scene from "./Scene.svelte";
	import NetworkDrawer from "./lib/NetworkDrawer.svelte";
	import MenuButton from "./lib/MenuButton.svelte";

	let open = false;
</script>

<div id="main">
	<MenuButton
		active={open}
		on:click={() => {
			console.log("dddd");
			open = !open;
		}}
	/>
	<NetworkDrawer {open} />
	<Canvas>
		<Scene />
	</Canvas>
</div>

<style>
	#main {
		background-color: #0f1320;
		width: 100%;
		height: 100%;
		position: absolute;
	}
	#main :global(.drawer .overlay) {
		background: rgba(100, 100, 100, 0.5);
	}

	#main :global(.drawer .panel) {
		background: white;
		color: black;
	}
</style>
