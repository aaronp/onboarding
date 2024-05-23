<script>
    export let label = "";
    export let options = [];
    export let value = "";
    export let onChange;
  </script>
  
  <div class="form-group">
    {#if label}
      <label>{label}</label>
    {/if}
    <select bind:value on:change={onChange}>
      {#each options as option}
        <option value={option.value}>{option.text}</option>
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
  </style>
  