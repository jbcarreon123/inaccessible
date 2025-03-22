import { json } from '@sveltejs/kit'
import { getTexts } from '$lib/pages/get-texts'
import { dev } from '$app/environment';
import { slug } from '$lib/stores/slugStore.js';

export async function load({ fetch, params }) {
    let texts = await Promise.all(
        getTexts().map(async (textName) => {
            const text = await import(`$lib/pages/${textName}/text.svx`);
            const { title, category, author } = text.metadata;
            const textUrl = `/main/${textName}`
            const textSlug = textName

            return {
                metadata: text.metadata,
                textUrl,
                textSlug
            };
        })
    )

    slug.set(params.slug)
    return { texts, slug: params.slug }
}