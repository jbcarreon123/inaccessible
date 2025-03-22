import { getTexts } from '$lib/pages/get-texts';
import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
    const pages = getTexts()

    return pages.map((v) => {
        return {
            slug: v
        }
    })
}

export const prerender = true;