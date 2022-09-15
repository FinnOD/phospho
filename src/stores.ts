import { type Writable, writable, derived } from 'svelte/store';

export let showMenu = writable(false);
export let fcData = writable(undefined); // [{}, {}, ...]