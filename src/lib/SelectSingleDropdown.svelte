<script>
  import { generateUUID, asLableValue } from './utils.js';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();


  function onChange(event) {
    value = event.target.value;
    dispatch('update', value);
  }  
  let inputId = generateUUID();

  export let label = "";
  export let options = [];
  export let value = "";
  
</script>

<div class="form-group">
  {#if label}
    <label for={inputId}>{label}</label>
  {/if}
  <select id={inputId} bind:value on:change={onChange} >
    {#each options as option}
      <option value={asLableValue(option).value}>{asLableValue(option).label}</option>
    {/each}
  </select>
</div>

<style>
  .form-group {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  label {
    margin-right: 0.5rem;
  }
  select {
    width:  20em;
    flex-grow: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  select {
    color: var(--fg-1);
  }

  select option {
    color: var(--fg-1); /* This may not work consistently across all browsers */
  }
</style>
