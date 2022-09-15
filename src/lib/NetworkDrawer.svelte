<script>
	import Drawer from "svelte-drawer-component";
	import Select from "svelte-select";
    import { showMenu } from "./../stores";
    import UploadButton from "./UploadButton.svelte"

    const items = [
		{value: './assets/kinases.json', label: 'All Kinases'}
	];
</script>

<Drawer open={$showMenu} size="30%" on:clickAway={() => ($showMenu = false)}>
	<div class="header">
		<div class="fakebutton" />
		<div class="title">Network Options</div>
	</div>
	<div class="drawerbody">
		Network Select
		<Select {items}></Select>
        <br>
        Fold-Change Data
        <UploadButton></UploadButton>
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
</style>
