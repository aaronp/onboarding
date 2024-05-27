<script>
	import CreateUser from "$lib/CreateUser.svelte";
	import SelectSingleDropdown from '$lib/SelectSingleDropdown.svelte';
	
	let createNewUserClicked= false;
	let selectedUser = {};
	let doLogIn = false;
	export let data;

	let newUserData = {};

	$: newUserDataJson = JSON.stringify(newUserData);
	$: debug = createNewUserClicked;

	function onCancelNewUser() {
		console.log("cancel");
		createNewUserClicked = false;
	}
	function onCreateNewUser() {
		console.log("cancel");
		createNewUserClicked = true;
	}

	function onAddUser(event) {
		createNewUserClicked = false;
		newUserData = event.detail;
	}

	function logUserIn(newValue) {
		doLogIn = true;
	}
</script>
<p>doLogIn = {doLogIn} with {selectedUser}</p>
<div class="centered-div">

	{#if createNewUserClicked}
		<CreateUser on:cancel={onCancelNewUser} on:submit={onAddUser}/>
	{:else}
		<SelectSingleDropdown label="Log In As:" bind:options={data.users} bind:value={selectedUser} on:update={logUserIn}/>

		<br/>
		<hr class="styled-hr"/>

	    <p>or</p>
		<button on:click={onCreateNewUser}>Create New User</button>
	{/if}
	<pre>{newUserDataJson}</pre>
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