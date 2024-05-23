<script>
    let count = 0;

	function handleClick() {
		count += 1;
	}
</script>


<h1>This is my onboarding componet! You clicked  {count} times!</h1>

<button on:click={handleClick}>
	clicks: {count}
</button>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
