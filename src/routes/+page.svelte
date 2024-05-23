<script>
    let count = 0;

	function handleClick() {
		count += 1;
	}
</script>

<h1>home</h1>

<h1>This is my onboarding componet! You clicked  {count} times!</h1>

<button on:click={handleClick}>
	clicks: {count}
</button>

