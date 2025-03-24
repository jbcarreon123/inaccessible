<script>
    import { onMount } from "svelte";

    onMount(() => {
        document.querySelectorAll("#flood")?.forEach((el) => el.remove());
        document.querySelectorAll("#flood-menu")?.forEach((el) => el.remove());
        console.log(nav.to?.params.slug);
    });
</script>

<svelte:head>
    <meta content="width=device-width; initial-scale=1.0;" name="viewport" />
</svelte:head>

<main>
    <h1>The Most Inaccessible Website (in Nekoweb at Least)</h1>
    <h2><b> This is currently work in progress. </b></h2>
    <p>
        Note that unfortunately, this site requires JavaScript to properly
        showcase the inaccessibleness of this website.
    </p>
    <p>
        This site is born just to prove a point, of why accessible sites should
        be considered nowadays, and and why you shouldn't leave out people that
        don't share the same perspectives as you.
    </p>
    <p>
        Note that this site may also have some nitpicks which we may have
        different views on, but please make sure to focus more on the
        accessibility-focused comments.
    </p>
    <p>
        That's it, and here's some things you might wanna see before seeing
        this:
    </p>
    <p>
        This site is very much inspired from
        <a
            href="https://www.beepbird.net/articles/accessibility/inaccessible.html"
            target="_blank">Beepbird's Inaccessible article</a
        >
        (<a
            href="https://www.beepbird.net/articles/accessibility/inaccessible-accessible.html"
            >accessible version</a
        >) so give that a read if you want to!
    </p>
    <p>
        and huge thanks on some folks at the Nekoweb Discord Server (especially <a
            href="https://layercake.nekoweb.org/">Layercake</a
        >, <a href="https://toasty.place/">ToastofTheSewn</a> and
        <a href="https://moosyu.com">moosyu</a>) for helping me and giving me
        some ideas for this website.
    </p>
    <p>
        If you like or hate this site, consider <a
            href="https://inaccessible.atabook.org/">signing our guestbook</a
        >
        or
        <a href="https://nekoweb.org/follow/inaccessible"
            >following us on Nekoweb</a
        >!
    </p>
    <p>
        And that's all folks! - jbcarreon123 @ <a
            href="https://jbcarreon123.nekoweb.org">jbcarreon123.nekoweb.org</a
        >
    </p>
    <p>
        Some technical info: This site is made using SvelteKit and deploys to
        Nekoweb using
        <code>svelte-adapter-nekoweb</code>.
    </p>
    <div>
        This site is part of jbcarreon123's SSGRing:
        <script
            src="https://jbcarreon123.nekoweb.org/webrings/ssgring/pmoring.js"
        ></script>
    </div>
    <h2><a href="/main">Go see it!</a></h2>
    <br />
    <a href="https://nekoweb.org/"
        ><img
            src="https://nekoweb.org/assets/buttons/button5.gif"
            alt="Nekoweb"
            title="Nekoweb (button by max.nekoweb.org)"
        /></a
    >
    <a href="https://jbcarreon123.nekoweb.org"
        ><img
            src="https://jbcarreon123.nekoweb.org/sitebuttonv2.png"
            alt="jb's site"
            title="jbcarreon123: the webmaster of this site"
            style="image-rendering: pixelated;"
        /></a
    >
    <a href="https://toasty.place/" target="_blank" rel="noopener"
        ><img
            src="https://toastofthesewn.nekoweb.org/images/buttons/pagebutton1.gif"
            loading="lazy"
            title="ToastofTheSewn: another webmaster"
            alt="ToastofTheSewn"
        /></a
    >
    <a href="https://layercake.nekoweb.org/"
        ><img
            style="image-rendering: pixelated"
            src="https://files.catbox.moe/h7nelz.gif"
            alt="layercake"
            title="Layercake"
        /></a
    >
    <a href="https://moosyu.nekoweb.org/"
        ><img
            src="https://moosyu.nekoweb.org/assets/button.png"
            alt="moosyus awesome button"
        /></a
    >
</main>
