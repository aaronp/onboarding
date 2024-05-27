<script>
	import NavBar from '$lib/NavBar.svelte';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
    import { currentUser } from '$lib/stores/backend.js';

    let user = null;
    currentUser.subscribe(value => {
        user = value;
    });
</script>


<div class="container">
    {#if user }
        <Header />
        <NavBar />
        
    {/if}

    <main>
        <slot />
    </main>
    
    {#if user }
    <Footer />
    {/if}
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
        margin: 0;
    }

    main {
        grid-area: main;
        padding: 1rem;
    }
</style>
