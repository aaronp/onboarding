<script>
    import UserDropdown from '$lib/UserDropdown.svelte';
    import { appBackend, currentUser } from '$lib/stores/backend.js';

    let user = null;
    currentUser.subscribe(value => {
        user = value;
    });
</script>

<header>
    <h1>Header</h1>

    {#if user }
        <UserDropdown {user} class="user-dropdown" />
    {/if}
</header>

<style>

header {
    grid-area: header;
    background-color: #4CAF50;
    color: white;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem; /* optional: adds some padding to the sides */
}

h1 {
    margin: 0; /* ensures there's no extra margin around the h1 */
}

.user-dropdown {
    margin: 4em;
}
UserDropdown {
    margin-left: auto; /* pushes the dropdown to the right */
 }

</style>