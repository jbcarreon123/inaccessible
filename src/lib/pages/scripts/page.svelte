<script>
    import { afterNavigate, beforeNavigate } from "$app/navigation";
    import { slug as Slug } from "$lib/stores/slugStore";
    import { onMount } from "svelte";

    beforeNavigate((nav) => {
        if (nav.to?.params.slug !== undefined && nav.to?.params.slug !== "annoying-stuff") {
            document.querySelectorAll('#flood')?.forEach((el) => el.remove())
            document.querySelectorAll('#flood-menu')?.forEach((el) => el.remove())
            console.log(nav.to?.params.slug)
        }
    })

    export const event = new Event('inaccessible.PageLoadEvent')

    afterNavigate(() => {
        window.dispatchEvent(event)
    })

    $: slug = $Slug;
</script>

{#key slug}
    <script src="/assets/flood.js"></script>
    <link href="/assets/flood.css" rel="stylesheet" type="text/css" media="all" />
{/key}

<audio src="/audio/_____disfigure_blank.mp3" autoplay loop></audio>