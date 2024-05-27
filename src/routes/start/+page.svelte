<script type="module">
  import { appBackend } from '$lib/stores/backend.js';
  import { goto } from '$app/navigation';
  import PrivateFund from '$lib/assets/PrivateFund.svelte';
  import Bond from '$lib/assets/Bond.svelte';
  import { base } from '$app/paths'
  import InputField from '$lib/InputField.svelte';
  import SelectDropdown from '$lib/SelectDropdown.svelte';

	export let data;
  let selectedAsset;
  let service;
  
  // Subscribe to the store
  appBackend.subscribe(value => {
    service = value;
  });

  export let assets = data.assets;

  // Define the variables to bind to the form inputs
  let messages = '';
  let name = '';
  let about = '';
  let description = '';

  $: formData = {
    selectedAsset,
    about,
    name,
    description
  };

 $: formJson = JSON.stringify(formData, null, 2);

  function handleSubmit(event) {
    event.preventDefault();


    // Log the JSON object to the console (or send it to an API)
    console.log(JSON.stringify(formData));

    var result = service.submitOnboardingForm(formJson);
    messages = `result was ${result}, which is ${typeof(result)}`;
    // goto('/submitted');
  }
</script>

<main>
  <p>Service has been created: {service ? 'Yes' : 'No'}</p>
</main>


<h3>Basic Information</h3>

<form on:submit|preventDefault={handleSubmit}>
  
  <InputField label="Name:" bind:value={name} />
  <InputField label="About:" bind:value={about} />
  <SelectDropdown label="Values:" bind:options={assets} bind:value={selectedAsset} />

  <button type="submit">Submit</button>
</form>
<hr />

<a href="{base}/dashboard">next</a>

{#if selectedAsset === 'Private Fund'}
<PrivateFund />
{:else if selectedAsset === 'Bond'}
<Bond />
{/if}

<p >{formJson}</p>
<p>{messages}</p>

<!-- see https://www.w3schools.com/cssref/tryit.php?filename=trycss_play_grid-template-areas -->
<style>
  .form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  .form-group {
    display: flex;
    flex-direction: column;
  }
  .form-grid select {
    width: 100%; /* Make all input and select elements take the full width of their grid cell */
    box-sizing: border-box; /* Ensure padding and border are included in the element's total width and height */
  }
</style>

