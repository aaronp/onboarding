<!-- src/routes/index.svelte -->
<script>
import Mermaid from '$lib/Mermaid.svelte';
import { appBackend } from '$lib/stores/backend.js';
import { Form, Field, TextField, SelectField, Button, Toggle, Dialog } from 'svelte-ux';
let service;
let page;
let diagram;
// Subscribe to the store
appBackend.subscribe(value => {
    service = value;
    page = service.newFlowPage();
    diagram = page.markdown();
});

function reset() {
  appBackend.set(service.resetService());
}
    
</script>
<div>
  <Button variant="fill-outline" size="lg" color="secondary" on:click={reset}>Reset</Button>
</div>  
<Mermaid bind:chart={diagram} />
  
<style>
.mermaid {
  text-align: center;
  margin: 20px 0;
}   
</style>