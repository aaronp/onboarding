<script>
	import { base } from '$app/paths'
	import CreateUser from "$lib/CreateUser.svelte";
	import SelectSingleDropdown from '$lib/SelectSingleDropdown.svelte';
	import { goto } from '$app/navigation';
	import { AppBar, AppLayout, Card, Button, NavItem, Tooltip, settings } from 'svelte-ux';

	// we have a little boolean toggle to show either the log in or create
	// user content
	let createNewUserClicked= false;

	let selectedUser = {};
	let currentUser = {};

	export let data;

	function onCancelNewUser() {
		createNewUserClicked = false;
	}
	function onCreateNewUser() {
		createNewUserClicked = true;
	}

	function onAddUser(event) {
		createNewUserClicked = false;
		const newUserData = event.detail;
		const result = data.service.createNewUser(JSON.stringify(newUserData));

		// and now log the new user in
		logUserIn(newUserData.name);
	}

	function onUserSelected(event) {
		const userName = event.detail;
		logUserIn(userName);
	}

	function logUserIn(userName) {
		var result = data.service.getUser(userName);


		console.log('getUser ', userName ,' is ', typeof result, ' which is ', result);

		if (result && result.name) {
			console.log('log in ', userName, ' got ', result);
			data.currentUser.set(result);
			currentUser = result;
			// goto(`${base}/categories`);
			goto(`${base}/categories`);
		} else {
			console.log('failed to log in ', userName);
		
		}
	}
</script>
<div class="centered-div">
	{#if createNewUserClicked}
		<CreateUser on:cancel={onCancelNewUser} on:submit={onAddUser}/>
	{:else}
		<SelectSingleDropdown label="Log In As:" bind:options={data.users} bind:value={selectedUser} on:update={onUserSelected}/>

		<br/>
		<hr class="styled-hr"/>

	    <p>or</p>

		<Button variant="fill-outline" size="lg" color="secondary" on:click={onCreateNewUser}>Create New User</Button>
	{/if}
</div>

<style>
.centered-div {
    display: flex;
	flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
}
.styled-hr {
    width: 60%;
    height: 0.2em;
    border: none; /* Remove the default border */
    background-color: currentColor; /* Set the background color to the current text color */
    margin: 0 auto; /* Center the hr element */
  }
</style>