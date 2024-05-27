<script>
    import { generateUUID } from './utils.js';
    export let label = "";
    export let value = "";
    export let placeholder = "";
    export let errorMessage = "";

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    function onChange(event) {
      value = event.target.value;
      dispatch('onUpdate', value);
    }  
    let inputId = generateUUID();
  </script>
  
  <div class="form-group">
    {#if label}
      <label for={inputId}>{label}</label>
    {/if}
    <textarea class:error={errorMessage !== ''} id={inputId} bind:value placeholder={placeholder} on:input={onChange} ></textarea>
    {#if errorMessage}
      <p class="error-message">{errorMessage}</p>
    {/if}
  </div>
  
  <style>

  .error-message {
    color: red;
    font-weight: bold;
  }
    textarea.error {
      border-color: red;
      background-color: #ffe6e6;
    }
    .form-group {
      margin-bottom: 1rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
    }
    textarea {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  </style>
  