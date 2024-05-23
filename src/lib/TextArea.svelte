<script>
    export let label = "";
    export let value = "";
    export let placeholder = "";
    export let onChange;
  </script>
  
  <div class="form-group">
    {#if label}
      <label>{label}</label>
    {/if}
    <textarea bind:value placeholder={placeholder} on:input={onChange}></textarea>
  </div>
  
  <style>
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
  