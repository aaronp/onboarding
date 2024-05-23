<script>
    import InputField from '$lib/InputField.svelte';
    import TextArea from '$lib/TextArea.svelte';
    import SelectDropdown from '$lib/SelectDropdown.svelte';
    import Checkbox from '$lib/Checkbox.svelte';
    import RadioButton from '$lib/RadioButton.svelte';
    import FormLayout from '$lib/FormLayout.svelte';
  
    let name = '';
    let bio = '';
    let gender = '';
    let termsAccepted = false;
    let subscription = '';
  
    const handleInputChange = (event) => {
      console.log(event.target.value);
    };
  </script>
  
  <main>
    <h1>Example Form</h1>
    <FormLayout />

    <h2>Another Form</h2>

    <form>
        <InputField label="Name" bind:value={name} placeholder="Enter your name" on:input={handleInputChange} />
        <TextArea label="Bio" bind:value={bio} placeholder="Tell us about yourself" on:input={handleInputChange} />
        <SelectDropdown label="Gender" bind:value={gender} options={[{ value: 'male', text: 'Male' }, { value: 'female', text: 'Female' }]} on:change={handleInputChange} />
        <Checkbox label="Accept Terms" bind:checked={termsAccepted} on:change={handleInputChange} />
        <RadioButton label="Monthly Subscription" name="subscription" value="monthly" bind:group={subscription} on:change={handleInputChange} />
        <RadioButton label="Yearly Subscription" name="subscription" value="yearly" bind:group={subscription} on:change={handleInputChange} />
      </form>
      
  </main>
  
  <style>
    main {
      padding: 2rem;
      font-family: Arial, sans-serif;
    }
  </style>
  