<script type="module">
  import { createService } from '$lib/service.js';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths'
  import { onMount } from 'svelte';
  import InputField from '$lib/InputField.svelte';
  import TextArea from '$lib/TextArea.svelte';
  import SelectDropdown from '$lib/SelectDropdown.svelte';

  let service;

  // Create the service when the component is mounted
  onMount(() => {
    service = createService();
  });


  export let options = [
    { 'label': 'Option 1', 'value': 'option1' },
    { 'label': 'Option 2', 'value': 'option2' },
    { 'label': 'Option 3', 'value': 'option3' }
  ];

  // Define the variables to bind to the form inputs
  let messages = '';
  let name = '';
  let about = '';
  let info2 = '';
  let info3 = '';
  let description = '';
  let useProd = false;

  $: formData = {
    about,
    name,
    info2,
    info3,
    description,
    useProd
  };

 $: formJson = JSON.stringify(formData, null, 2);

  // Function to handle form submission
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
  <SelectDropdown label="Values:" bind:options={options} />

  <button type="submit">Submit</button>
</form>
<hr />
<form on:submit|preventDefault={handleSubmit} class="form-grid">
  <InputField label="More Info" placeholder="More Info" bind:value={info2} />
  <InputField label="Additional Info" placeholder="And Again" bind:value={info3} />
</form>

<a href="{base}/dashboard">next</a>

<p >{formJson}</p>
<p>{messages}</p>

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
</style>

