<script>
	import { base } from '$app/paths'
	import CreateUser from "$lib/CreateUser.svelte";
	import SelectSingleDropdown from '$lib/SelectSingleDropdown.svelte';
	import { goto } from '$app/navigation';

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


		// TODO - let's do this explicitly ... just doing it here for now as hot reload is annoying
		data.service.snapshotDatabase();

		// and now log the new user in
		logUserIn(newUserData.name);
	}

	function onUserSelected(event) {
		const userName = event.detail;
		logUserIn(userName);
	}

	function logUserIn(userName) {
		console.log("username is "+ userName);
		var user = data.service.getUser(userName);

		if (user && user.name) {
			data.currentUser.set(user);
			currentUser = user;
			goto(`${base}/dashboard`);
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
		<button on:click={onCreateNewUser}>Create New User</button>
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