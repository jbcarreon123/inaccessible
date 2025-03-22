import { json } from '@sveltejs/kit'
import { getTexts } from '$lib/pages/get-texts'
import { dev } from '$app/environment';
import { slug } from '$lib/stores/slugStore.js';

export async function load({ fetch, params }) {
    let texts = getTexts()
    slug.set(undefined)

    return { texts }
}