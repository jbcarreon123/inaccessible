<script>
    import { goto, invalidateAll, replaceState } from "$app/navigation";
    import { slug as Slug } from "$lib/stores/slugStore";
    import { text } from "@sveltejs/kit";

    export let texts;

    function groupArrayByCategory(arr) {
        const result = {};
        arr.forEach((item) => {
            const category = item.metadata.category;

            if (!result[category]) {
                result[category] = {
                    category: category,
                    pages: [],
                };
            }

            result[category].pages.push(item);
        });
        return Object.values(result);
    }

    let textCats = groupArrayByCategory(texts).sort((a, b) => {
        return a.category.localeCompare(b.category);
    });

    $: slug = $Slug;
</script>

{#if !slug && texts}
    <div style="font-size:32px;font-weight:600;">
        Hey there! This is the homepage!
    </div>
    <div style="padding-top:6px;">
        Select a page below to see what it looks like!
    </div>
    <div style="padding-top:6px;padding-bottom:12px;">
        If you like or hate this site, consider <a
            href="https://inaccessible.atabook.org/">signing our guestbook</a
        >
        or
        <a href="https://nekoweb.org/follow/inaccessible"
            >following us on Nekoweb</a
        >!
    </div>
    {#each textCats as textCat}
        <div style="padding-top:12px">
            <div style="font-size:28px;font-weight:600;">
                {textCat.category}
            </div>
            {#each textCat.pages as text}
                {console.log(text.textUrl)}
                <div>
                    <a class="a" onclick={function() { goto(text.textUrl) }}>
                        <div 
                            style="padding-top:6px;font-size:24px;font-weight:600;"
                        >
                            {text.metadata.title}
                        </div>
                        by {text.metadata.author}
                    </a>
                </div>
            {/each}
        </div>
    {/each}
{:else if slug}
    {#await import(`$lib/pages/${slug.replace(".svx", "")}/text.svx`)}
        <p>Loading...</p>
    {:then post}
        <div style="padding-bottom:12px" class="a">
            <a href="/main">Go to homepage</a>
            <a href="https://inaccessible.atabook.org/">Sign our guestbook</a>
            <a href="https://nekoweb.org/follow/inaccessible"
                >Follow us on Nekoweb</a
            >
        </div>
        <div style="font-size:32px;font-weight:600;">
            {post.metadata.title}
        </div>
        <div style="padding-top:6px;padding-bottom:12px;">
            by {post.metadata.author} in {post.metadata.category}
        </div>
        <svelte:component this={post.default} />
    {/await}
{/if}

<style>
    blockquote:not(.nf) {
        border-left: 3px var(--grv-mantle) solid;
        margin: 8px 0;
        padding: 5px 0;
        padding-left: 16px;
    }
</style>
