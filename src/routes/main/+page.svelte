<script>
    import { afterNavigate, beforeNavigate } from '$app/navigation';
    import { slug } from '$lib/stores/slugStore.js';
    import { onMount } from 'svelte';
    import { get } from 'svelte/store';

    export const event = new Event('inaccessible.PageLoadEvent')

    let { data } = $props();

    async function getTexts() {
        return await Promise.all(
            data.texts.map(async (v) => {
                let t = await import(`$lib/pages/${v}/page.svelte`);
                return t.default;
            })
        )
    }

    onMount(() => {
        setTimeout(() => {
            window.dispatchEvent(event)
        }, 500)
    })

    afterNavigate(() => 
        {

            slug.set(undefined);
            window.dispatchEvent(event)
        }
    )
</script>

{#await getTexts()}
    <p>Loading</p>
    {:then texts}
    {#each texts as text}
        <svelte:component this={text} />
        {console.log(text)}
    {/each}
    {:catch}
    <p>Error occured</p>
{/await}