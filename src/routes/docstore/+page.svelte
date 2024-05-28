<script>
import { appBackend } from '$lib/stores/backend.js';
import { Form, Field, TextField, SelectField, Button, Toggle, Dialog } from 'svelte-ux';
let service;
let page;
// Subscribe to the store
appBackend.subscribe(value => {
    service = value;
    page = service.newDocstorePage();
});

function persist() {
    service.snapshotDatabase();
}
</script>

<h1>Doc Store</h1>

<Button
class="text-surface-content/50 p-2"
on:click={persist}
>Persist State</Button>

<pre>{page.formatted()}</pre>

<hr />

<h2>As Json</h2>
<pre>{JSON.stringify(page.jason(), null, 2)}</pre>


