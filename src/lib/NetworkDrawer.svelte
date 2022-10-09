<script lang="ts">
	import GoSearch from 'svelte-icons/go/GoSearch.svelte';
	import GoSettings from 'svelte-icons/go/GoSettings.svelte'
	import GiMeshNetwork from 'svelte-icons/gi/GiMeshNetwork.svelte';
	
	import SettingsPanel from "./SettingsPanel.svelte";
	import InfoPanel from './InfoPanel.svelte';
	import SearchPanel from './SearchPanel.svelte';
	import DrawerTab from "./DrawerTab.svelte";
	import { selectedTab } from "../stores";

	let tabs = [
		{id: "fakeButton", title: "", icon: undefined, selectable: false},
		{id: "settings", title: "Network Options", icon: GoSettings, selectable: true},
		{id: "info", title: "Node Information", icon: GiMeshNetwork, selectable: true},
		{id: "search", title: "Search", icon: GoSearch, selectable: true},
	];
	


</script>

<div class="drawer">
	<nav>
		{#each tabs as tab}
			<DrawerTab id={tab.id} selectable={tab.selectable}>
				{#if tab.icon}
					<svelte:component this={tab.icon} />
				{/if}
			</DrawerTab>
		{/each}
	</nav>
	<div class="drawerBody">
		<div class="header">
			<div class="title">{tabs.find((t) => $selectedTab === t.id).title}</div>
		</div>
		<SettingsPanel active={'settings' === $selectedTab}/>
		<InfoPanel active={'info' === $selectedTab}/>
		<SearchPanel active={'search' === $selectedTab}/>
	</div>
</div>

<style>
	nav {
		background: #f0f0f0;
	}

	.drawerBody {
		height: 100%;
	}

	.drawer {
		background-color: #f5f5f5;
		display: flex;
		flex-direction: row;
		overflow-x: hidden;
		height: 100vh;
	}

	.header {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: center;
		padding: 18px 18px 10px 10px;
		border-bottom: 1px solid #f0f0f0;
		border-radius: 2px 2px 0 0;
	}
	.title {
		flex-grow: 1;
		padding-left: 15px;

		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial;
		color: rgba(0, 0, 0, 0.85);
		font-size: 18px;
		font-weight: 500;
		line-height: 22px;
	}
</style>
