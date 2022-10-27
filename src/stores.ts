import { writable, derived } from "svelte/store";
import { calculateGraphAttributes, dataGraphToGraphology, addFCtoG } from "./lib/graphLoading";

export let showMenu = writable(false);
export let selectedTab = writable("settings");

export let rotate = writable(false);
export let showSubstrates = writable(true);
export let showUnselected = writable(true);
export let minimumFC = writable(2);

export let hoveredNode = writable(undefined);
export let selectedNodes = writable(new Set());

export let scale = writable(100);
export let fcData = writable(undefined); // [{}, {}, ...]
export let baseNetwork = writable(undefined);

export let G = derived([baseNetwork, fcData, scale], ($values, set) => {
	if (!$values[0]) {
		set(undefined);
	} else {
		let newG = calculateGraphAttributes(dataGraphToGraphology($values[0]), $values[2]);
		newG.setAttribute("hasFC", false);
        newG.setAttribute("id", $values[0]['id']);
        console.log('reload');
        console.log('id: ', $values[0]['id']);
		set(newG);
	}

	if ($values[0] && $values[1]) {
        console.log('setting FC');
		let newG = calculateGraphAttributes(
			addFCtoG(dataGraphToGraphology($values[0]), $values[1]),
			100
		);
		newG.setAttribute("hasFC", true);
        newG.setAttribute("id", $values[0]['id']+'_'+$values[1]['id']);
        console.log('reload');
        console.log('id-2: ', $values[0]['id']+'_'+$values[1]['id']);
		set(newG);
	}
});
