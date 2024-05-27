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
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        background-color: #333;
        color: white;
    }
    .nav-links {
        display: flex;
        gap: 1rem;
    }
</style>
