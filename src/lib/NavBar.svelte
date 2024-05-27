<script>
	import { base } from '$app/paths'
    import UserDropdown from './UserDropdown.svelte';
    let user = null;
    // let user = { name: "John Doe", loggedIn: true };
</script>

<nav class="navbar">
    <div class="nav-links">
        <a href="{base}/">Home</a>
        <a href="{base}/about">About</a>
        <a href="{base}/start">Create Fund</a>
        <a href="{base}/dashboard">Dashboard</a>
    </div>
    {#if user }
        <UserDropdown {user} />
    {/if}
</nav>


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
