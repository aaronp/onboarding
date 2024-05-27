<script>
	import { base } from '$app/paths'
	import { currentUser } from './stores/backend';
    import { goto } from '$app/navigation';

    let user = null;
    currentUser.subscribe(value => {
        user = value;
    });

    let open = false;

    function toggleDropdown() {
        open = !open;
    }

    function logout(event) {
        event.preventDefault();
        currentUser.set(null);
        goto('/');
    }
</script>

<div class="user-dropdown" on:click|preventDefault={toggleDropdown}>
    <span>{user.name}</span>
    <div class:open={open} class="dropdown-menu">
        <a href="{ base }/profile">Profile</a>
        <a href="{ base }/logout" on:click={logout}>Logout</a>
    </div>
</div>


<style>
    .user-dropdown {
        position: relative;
        padding-right: 5em;
        cursor: pointer;
    }
    .dropdown-menu {
        display: none;
        position: absolute;
        right: 0;
        top: 100%;
        padding: 0.5rem;
        padding-right: 5em;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .dropdown-menu.open {
        display: block;
    }
</style>