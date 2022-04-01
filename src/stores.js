import {writable} from "svelte/store";

export const numbers = writable(5)
window.numbers = numbers