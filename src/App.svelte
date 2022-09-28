<script lang="ts">
	import { Canvas } from "@threlte/core";
	import Scene from "./Scene.svelte";
	import NetworkDrawer from "./lib/NetworkDrawer.svelte";
	import MenuButton from "./lib/MenuButton.svelte";
	import InfoBox from "./lib/InfoBox.svelte";

</script>

<div id="main">
	<MenuButton />
	<NetworkDrawer />
	<InfoBox />
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
