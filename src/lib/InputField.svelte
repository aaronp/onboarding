<script>
  import { generateUUID } from './utils.js';
  let inputId = generateUUID();

  export let label = "";
  export let value = "";
  export let errorMessage = "";
  export let placeholder = "";
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function onChange(event) {
    value = event.target.value;
    dispatch('onUpdate', value);
  }  
</script>

<div class="form-group">
  {#if label}
    <label for={inputId}>{label}</label>
  {/if}
  <input class:error={errorMessage !== ''} id={inputId} type="text" bind:value placeholder={placeholder} on:input={onChange} />
  {#if errorMessage}
    <p class="error-message">{errorMessage}</p>
  {/if}
</div>

<style>
  .error-message {
    color: red;
    font-weight: bold;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  input.error {
    border-color: red;
    background-color: #ffe6e6;
  }
  p {
    font-size: 0.8rem;
    color: #e7dfff;
  }
</style>
