<script>
	import NewUser from "$lib/NewUser.svelte";
	import SelectDropdown from '$lib/SelectDropdown.svelte';
	
	let selectedUser;
	export let data;
	

	function handleSubmit(event) {
    	event.preventDefault();

	}

</script>

<div class="centered-div">
	<form on:submit|preventDefault={handleSubmit}>
		<SelectDropdown label="Log In As:" bind:options={data.users} bind:value={selectedUser} />

	</form>

	<br/>
	<hr />
	<NewUser />
	</div>

<style>
.centered-div {
    display: flex;
	flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh; /* 100% of the viewport height */
}
</style>