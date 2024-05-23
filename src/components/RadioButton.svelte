<script>
    export let label = "";
    export let name = "";
    export let value = "";
    export let checked = false;
    export let onChange;
  </script>
  
  <div class="form-group">
    <label>
      <input type="radio" name={name} value={value} bind:group={checked} on:change={onChange} /> {label}
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
    input[type="radio"] {
      margin-right: 0.5rem;
    }
  </style>
  