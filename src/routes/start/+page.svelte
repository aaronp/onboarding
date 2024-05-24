<script type="module">
  import { createService } from '$lib/service.js';
  var svc = createService();


</script>
<h2>I want to onboard</h2>

service is {svc}

<h3>Basic Information</h3>
<form>
  <label for="name">Name</label>
  <input type="text" id="name" name="name" required>
  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>
</form>

<a href="/dashboard">submit</a>