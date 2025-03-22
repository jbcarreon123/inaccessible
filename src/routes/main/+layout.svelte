<script>
    import { afterNavigate } from "$app/navigation";
    import TextView from "$lib/components/TextView.svelte";
    import { slug as Slug } from "$lib/stores/slugStore.js";
    import { onMount } from "svelte";
    export let data;
    let {texts} = data;
    $: slug = $Slug;
</script>
<div id="main-container" class="main-container">
    {#key slug}
    <div class="hide-button" onclick={function() {document.querySelector('#main-container')?.classList.toggle('hide-text')}}>
        <span id="hide">Hide</span><span id="show">Show</span> text
    </div>
    <article class="text-view">
        <TextView texts={texts} />
    </article>
    <aside class="page-view">
        <slot></slot>
    </aside>
    {/key}
</div>
<style>
    #hide, #show {
        display: none;
    }

    .main-container:not(.hide-text) {
        #hide {
            display: inline;
        }
        #show {
            display: none;
        }
        .page-view {
            padding:6px;
        }
        @media screen and (min-width:600px) {
            .page-view {
                padding-left:442px;
            }
        }
        @media screen and (min-width:500px) {
            .hide-button {
                left: 432px;
            }
        }
    }

    .main-container :global {
        &.hide-text {
            #hide {
                display: none;
            }
            #show {
                display: inline;
            }
            .hide-button {
                left:6px;
            }
            .page-view {
                padding:6px;
            }
        }
    }

    .hide-button {
        position: fixed;
        opacity:25%;
        top:6px;
        padding: 6px !important;
        border: 2px solid var(--grv-subtext0);
        cursor:pointer;
        background-color: var(--grv-base);
        z-index: 99999;
    }

    .main-container {
        gap: 6px;
        height: 100vh;
    }

    .main-container :global {
        &.hide-text {
            grid-template-columns: 0% 100%;
        }

        &.hide-text .text-view {
            visibility: collapse;
        }
    }
    .page-view {
        width: 100vw;
        height: 100vh;
    }
    .text-view {
        z-index: 99999;
        padding-right: 6px;
        padding: 12px;
        border-right: 2px solid var(--grv-subtext0);
        background-color: var(--grv-base);
        height: 100%;
        width:400px;
        position: fixed;
        overflow-y: scroll;
    }

    @media screen and (max-width:500px) {
        .text-view, .page-view {
            width:100%;
        }
        .hide-button {
            left:6px;
            opacity: 50%;
        }
    }
    .main-container div {
        padding: 12px;
    }

    .hide-button:hover {
        opacity: 100%;
    }
</style>