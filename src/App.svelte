<script lang="ts">
	import { onMount } from 'svelte';
	import { Canvas } from "@threlte/core";
	import Scene from "./Scene.svelte";
	import NetworkDrawer from "./lib/NetworkDrawer.svelte";
	import MenuButton from "./lib/MenuButton.svelte";
	import InfoBox from "./lib/InfoBox.svelte";
	import { showMenu } from "./stores";

	let clientWidth, clientHeight;
	let cW, cH;

	let isTransitioning = false;
	let canvas, wrapper;
	let handler: ReturnType<typeof requestAnimationFrame> | undefined = undefined
	function render(){
		// get avaialble width and height and set the canvas size
		wrapper = document.getElementsByClassName("drawerWrapper")[0];
		canvas = document.getElementsByClassName("canvas")[0];
		// console.log(canvas.getBoundingClientRect());
		let rect = canvas.getBoundingClientRect()
		cW = rect.width;
		cH = rect.height;

		canvas.setAttribute("style","width:100px");
		handler = requestAnimationFrame(render);
	}

	$: if (isTransitioning) {
		render()
	} else {
		if (handler) {
		cancelAnimationFrame(handler)
		}
	}

	onMount(async () => {
		wrapper = document.getElementsByClassName("drawerWrapper")[0];
		canvas = document.getElementsByClassName("canvas")[0];
		wrapper.addEventListener("transitionstart", (e) => (isTransitioning = true));
		wrapper.addEventListener("transitionend", (e) => (isTransitioning = false));
		clientWidth = cW;
		clientHeight = cH;
	});
	

	// 
</script>

<MenuButton />
<div id="main">
	<div class="drawerWrapper {$showMenu ? 'active' : ''}">
		<NetworkDrawer />
	</div>
	<InfoBox />
	
	<div class="canvas" bind:clientWidth={clientWidth} bind:clientHeight={clientHeight}>
		<Canvas size={{ width: clientWidth, height: clientHeight }}>
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
		width: 0px;
		height: 100vh;
		transition: width 0.3s;
	}

	.drawerWrapper.active {
		width: min(25%, 260px);
	}

	.canvas {
		position: relative;
		flex: 1;
		color: #444;
		width: 1px;
	}
</style>
