<script>
    export let label = "";
    export let checked = false;
    export let onChange;
  </script>
  
  <div class="form-group">
    <label>
      <input type="checkbox" bind:checked on:change={onChange} /> {label}
    </label>
  </div>
  
  <style>
    .form-group {
      margin-bottom: 1rem;
    }
    label {
      display: flex;
      align-items: center;
    }
    input[type="checkbox"] {
      margin-right: 0.5rem;
    }
  </style>
  