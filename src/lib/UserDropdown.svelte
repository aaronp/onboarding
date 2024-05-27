<script>
    export let user;

    let open = false;

    function toggleDropdown() {
        open = !open;
    }
</script>

<style>
    .user-dropdown {
        position: relative;
    }
    .dropdown-menu {
        display: none;
        position: absolute;
        right: 0;
        top: 100%;
        padding: 0.5rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .dropdown-menu.open {
        display: block;
    }
</style>

<div class="user-dropdown" on:click|preventDefault={toggleDropdown}>
    <span>{user.name}</span>
    <div class:open={open} class="dropdown-menu">
        <a href="/profile">Profile</a>
        <a href="/settings">Settings</a>
        <a href="/logout">Logout</a>
    </div>
</div>
