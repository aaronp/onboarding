<script>
	import { base } from '$app/paths'
    import { appBackend, currentUser } from '$lib/stores/backend.js';
    let user = null;
    currentUser.subscribe(value => {
        console.log("Current User is " + value);
        user = value;
    });
</script>

{#if user }
<nav class="navbar">
    <div class="nav-links">
        <a href="{base}/start">Create Fund</a>
        <a href="{base}/dashboard">Dashboard</a>
    </div>
</nav>
{/if}


<style>
   .navbar {
        grid-area: nav;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
        background-color: #333;
        color: white;
        height: 90%;
    }

    .nav-links {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .nav-links a {
        color: white;
        text-decoration: none;
        padding: 0.5rem 0;
    }

    .nav-links a:hover {
        background-color: #444;
    }
</style>
