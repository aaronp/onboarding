<script>
	import { base } from '$app/paths'
	import { currentUser } from './stores/backend';
    import { goto } from '$app/navigation';
    import { Tooltip, Avatar, Icon } from 'svelte-ux';
    import { writable } from "svelte/store";

    let avatarData = writable("");
    export let user = null;

    currentUser.subscribe(value => {
        user = value;
    });

    let open = false;

    function toggleDropdown() {
        open = !open;
    }
    function closeDropdown() {
        console.log("closeDropdown");
        open = false;
    }

    function logout(event) {
        event.preventDefault();
        currentUser.set(null);
        goto(`${base}/`);
    }
</script>

<!-- if the user clicks away, turn off the drop-down -->
<svelte:document on:click={closeDropdown} />

{#if user}
    <Tooltip title={user.name}>
        
            {#if user.avatar}
            <img src="{user.avatar}" alt={user.name} class="user-avatar" on:click|preventDefault={toggleDropdown} />
            {:else}
                <span on:click|stopPropagation|preventDefault={toggleDropdown} >
                    <Avatar class="border bg-secondary" size="md" >
                        <Icon svgUrl="https://api.iconify.design/mdi:account.svg" />
                    </Avatar>   
                </span>
            {/if}
            <div class:open={open} class="dropdown-menu">
                <a href="{ base }/profile">Profile</a>
                <a href="{ base }/logout" on:click={logout}>Logout</a>
            </div>

    </Tooltip>
{/if}

<style>
    .user-avatar {
        max-width: 40px; 
        max-height: 40px;
        border-radius: 50%;
        object-fit: cover;
        display: inline-block;
    }
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