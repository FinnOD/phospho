import { type Writable, writable, derived } from 'svelte/store';
import { calculateGraphAttributes, dataGraphToGraphology } from './lib/graphLoading';

export let showMenu = writable(false);
export let rotate = writable(false);
export let fcData = writable(undefined); // [{}, {}, ...]
export let baseNetwork = writable(undefined);

export let G = derived(baseNetwork, $baseNetwork => 
    $baseNetwork === undefined? undefined :calculateGraphAttributes(dataGraphToGraphology($baseNetwork), 100)
);