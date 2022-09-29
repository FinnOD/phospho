<script lang="ts">
	import { Canvas } from "@threlte/core";
	import Scene from "./Scene.svelte";
	import NetworkDrawer from "./lib/NetworkDrawer.svelte";
	import MenuButton from "./lib/MenuButton.svelte";
	import { showMenu } from "./stores";

	let cW, cH;
</script>

<MenuButton />
<div id="main">
	<div class="drawerWrapper {$showMenu ? 'active' : ''}">
		<NetworkDrawer />
	</div>

	<div class="canvas" bind:clientWidth={cW} bind:clientHeight={cH}>
		<Canvas size={{ width: cW, height: cH }}>
			<Scene />
		</Canvas>
	</div>
</div>

<style>
	#main {
		/* overflow-x: hidden; */
		display: flex;
	}

	.drawerWrapper {
		background: #444;
		width: 0px;
		height: 100vh;
		transition: width 0.3s;
	}

	.drawerWrapper.active {
		width: 20%;
	}

	.canvas {
		position: relative;
		flex: 1;
		color: #444;
		width: 1px;
	}
</style>
