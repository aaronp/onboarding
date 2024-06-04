<script>
import { appBackend } from '$lib/stores/backend.js';
import { Button, ButtonGroup, Card, ExpansionPanel, Form, TextField } from 'svelte-ux';

let service;
let page;
let data;
// Subscribe to the store
appBackend.subscribe(value => {
    service = value;
    page = service.newDocstorePage();
});

let saveAsName = "";
function saveAs(name) {
    saveAsName = name;
}

function persist() {
    service.snapshotDatabase();
}
</script>

<div class="grid gap-8">
    <div ><Card title="Doc Store" subheading="This is the back-end database"/></div>
    <p>saveAsName: {saveAsName}</p>
    <div>
        <Form
            initial={data}
            on:change={(e) => (data = e.detail)}
            let:draft
            let:state
            let:commit
            let:revert
            let:revertAll
            let:undo
            let:current
            let:refresh
            >
            <TextField
                label="Save Database As:"
                value={draft.name}
                on:change={(e) => {
                draft.name = e.detail.value;
                // Call "refresh" as often as you want "current" updated (on:blur, etc)
                refresh();
                }}
            />
            <Button on:click={saveAs(draft.name)} disabled={current.name == null}
                >Apply</Button
            >
            <div class="mt-2">
                <div>current: {JSON.stringify(current)}</div>
                <div>state: {JSON.stringify(state)}</div>
            </div>
            </Form>

     </div>
    <div >
        <ButtonGroup color="primary">
        <Button
        variant="fill-outline" size="lg" color="secondary"
        class="text-surface-content/50 p-2"
        on:click={persist}
        >Persist State</Button>
        </ButtonGroup> 
    </div>
    <div class="border overflow bg-highlight-1"><pre>{page.formatted()}</pre></div>
    <div ><hr /></div>
    
    <div class="border">
        <ExpansionPanel>
            <div slot="trigger"><Card title="Json"/></div>
            <pre>{JSON.stringify(page.jason(), null, 2)}</pre>
        </ExpansionPanel>
    </div>
  </div>


<style>
.overflow {
    width: 100%;
    overflow-x: auto; /* or 'scroll' */
    white-space: nowrap;
}
</style>
