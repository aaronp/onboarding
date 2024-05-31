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

    
</script>
  
<Mermaid bind:chart={diagram} />
  
<style>
 .mermaid {
  text-align: center;
  margin: 20px 0;
}   
</style>