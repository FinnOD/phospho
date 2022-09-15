<script lang="ts">
	import UploadIcon from "./UploadIcon.svelte";
	import { fcData } from "./../stores";

	let isFocused = false;
	function onFocus() {
		isFocused = true;
	}
	function onBlur() {
		isFocused = false;
	}

	let files;

	$: if (files) {
		let reader = new FileReader();
        reader.onload = function (event: any) {

            let dataObj = undefined;
            try {
                dataObj = JSON.parse(event.target.result);
            } catch (error) {
                console.error(error);
                files = undefined;
            }

            fcData.set(dataObj)
        };

        reader.readAsText(files[0]);
	} else {
		fcData.set(undefined);
	}
</script>

<div class="upload-btn-wrapper">
	<button class={isFocused || files ? "active" : ""}>
		{#if files === undefined}
			<UploadIcon hovered={isFocused} /> Upload a file
		{:else}
			{files[0].name}
		{/if}
	</button>
	<input type="file" name="fileghost" on:mouseenter={onFocus} on:mouseleave={onBlur} bind:files />
</div>

<style>
	button {
		display: inline-flex;
		align-items: center;
		width: 100%;
		background-color: transparent;
		padding: 14px 16px;
		font-size: 14px;
		cursor: pointer;
		text-align: left;
		overflow: auto;

		border-width: 1px;
		border-radius: 6px;
		border-color: rgba(134, 134, 153, 0.33);
		color: rgba(15, 30, 69, 0.54);

		transition: all 0.1s;
	}

	button.active {
		border-color: rgba(50, 139, 255, 1);
	}

	.upload-btn-wrapper {
		position: relative;
		border-radius: 6px;
	}

	input[type="file"] {
		position: absolute;
		left: 0;
		top: 0;
		pointer-events: fill;
		width: 100%;
		height: 100%;
		border-radius: 6px;
		opacity: 0;
		background: green;
	}
</style>
