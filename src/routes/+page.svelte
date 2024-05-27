<script>
	import CreateUser from "$lib/CreateUser.svelte";
	import SelectSingleDropdown from '$lib/SelectSingleDropdown.svelte';
	
	let createNewUserClicked= false;
	let selectedUser;
	export let data;

	$: debug = createNewUserClicked;

	function onCancelNewUser() {
		console.log("cancel");
		createNewUserClicked = false;
	}
	function onCreateNewUser() {
		console.log("cancel");
		createNewUserClicked = true;
	}

	function handleSubmit(event) {
    	event.preventDefault();
	}

</script>

<div class="centered-div">

	{#if createNewUserClicked}
		<CreateUser on:cancel={onCancelNewUser} />
	{:else}
		<form on:submit|preventDefault={handleSubmit}>
			<SelectSingleDropdown label="Log In As:" bind:options={data.users} bind:value={selectedUser} />

		</form>

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