<script>
    import InputField from './InputField.svelte';
    
    let firstName = '';
    let lastName = '';
    let email = '';
    let phoneNumber = '';
  
    const handleInputChange = (event) => {
      console.log(event.target.value);
    };
  </script>
  
  <form class="form-grid">
    <InputField label="First Name" bind:value={firstName} placeholder="Enter first name" on:input={handleInputChange} />
    <InputField label="Last Name" bind:value={lastName} placeholder="Enter last name" on:input={handleInputChange} />
    <InputField label="Email" bind:value={email} placeholder="Enter email" on:input={handleInputChange} />
    <InputField label="Phone Number" bind:value={phoneNumber} placeholder="Enter phone number" on:input={handleInputChange} />
  </form>
  
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
  