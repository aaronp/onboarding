<script>
import { appBackend } from '$lib/stores/backend.js';
import { Button, ButtonGroup, Card } from 'svelte-ux';
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

<div class="grid gap-8">
    <div ><Card title="Doc Store" subheading="This is the back-end database"/></div>
    <div >
        <ButtonGroup color="primary">
        <Button
        variant="fill-outline" size="lg" color="secondary"
        class="text-surface-content/50 p-2"
        on:click={persist}
        >Persist State</Button>
        </ButtonGroup> 
    </div>
    <div class="border"><pre>{page.formatted()}</pre></div>
    <div ><hr /></div>
    <div ><Card title="Json"/></div>
    <div class="border"><pre>{JSON.stringify(page.jason(), null, 2)}</pre></div>
  </div>







