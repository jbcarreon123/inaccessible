import { writable, type Writable } from "svelte/store";

export let slug: Writable<string | undefined> = writable(undefined);