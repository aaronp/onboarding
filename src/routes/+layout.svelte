<script>
	import NavBar from '$lib/NavBar.svelte';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
</script>


<div class="container">
    <Header />
	<NavBar />
    
    <main>
        <slot />
    </main>
    
    <Footer />
</div>

<style>
    .container {
        display: grid;
        grid-template-areas: 
            "header header"
            "nav main"
            "footer footer";
        grid-template-rows: auto 1fr auto;
        grid-template-columns: 200px 1fr;
        height: 100vh;
    }

    main {
        grid-area: main;
        padding: 1rem;
    }
</style>
