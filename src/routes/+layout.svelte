<script>
	import NavBar from '$lib/NavBar.svelte';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
    import { currentUser } from '$lib/stores/backend.js';
    import "../app.css";

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