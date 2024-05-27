<script>
  import { generateUUID } from './utils.js';
  let inputId = generateUUID();

  export let label = "";
  export let options = [];
  export let value = "";
</script>

<div class="form-group">
  {#if label}
    <label for={inputId}>{label}</label>
  {/if}
  <select id={inputId} bind:value >
    {#each options as option}
      <option value={option.value}>{option.label}</option>
    {/each}
  </select>
</div>

<style>
  .form-group {
    margin-bottom: 1rem;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  select {
    width: 100%;
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
