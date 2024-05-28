<script>
    export let url;
</script>

<h1>Sorry dude -  Page Not Found.</h1>
<p>The page you're looking for does not exist.</p>
{#if url}

<p>URL: {url.pathname}</p>
{/if}

<a href="/">Go back to the homepage</a>
