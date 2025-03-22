import { slug } from "$lib/stores/slugStore.js";

export async function load({ params }) {
    try {
        console.log(params.slug)
        const page = await import(`$lib/pages/${params.slug}/page.svelte`);
        console.log(page)
        slug.set(params.slug)

        return { page };
    } catch {
        const page = await import(`$lib/nf/NotFound.svelte`);
        slug.set(undefined)

        return { page };
    }
}