<script>
  import { generateUUID } from './utils.js';
  let inputId = generateUUID();

  export let label = "";
  export let value = "";
  export let placeholder = "";
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function onChange(event) {
    value = event.target.value;
    dispatch('update', value);
  }  
</script>

<div class="form-group">
  {#if label}
    <label for={inputId}>{label}</label>
  {/if}
  <input id={inputId} type="text" bind:value placeholder={placeholder} on:input={onChange} />
  <p style="">current value: {value} of {inputId}</p>
</div>

<style>
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
  p {
    font-size: 0.8rem;
    color: #e7dfff;
  }
</style>
