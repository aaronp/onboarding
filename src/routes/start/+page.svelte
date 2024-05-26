<script type="module">
  import { createService } from '$lib/service.js';
  import { base } from '$app/paths'
  import { onMount } from 'svelte';

  let service;

  // Create the service when the component is mounted
  onMount(() => {
    service = createService();
  });
</script>

<main>
  <p>Service has been created: {service ? 'Yes' : 'No'}</p>
</main>


<h3>Basic Information</h3>
<form>
  <label for="name">Name</label>
  <input type="text" id="name" name="name" required>
  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>
</form>

<a href="{base}/dashboard">submit</a>