<script lang="ts">
	import { Canvas } from "@threlte/core";
	import Scene from "./Scene.svelte";
</script>

<div id="main">
	<Canvas>
		<Scene/>
	</Canvas>
</div>

<style>
	#main {
		background-color: #0f1320;
		width: 100%;
		height: 100%;
		position: absolute;
	}
</style>
