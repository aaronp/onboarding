<script>
import { appBackend } from '$lib/stores/backend.js';
import { Button, ButtonGroup, Card, ExpansionPanel, Form, TextField, SelectField, Toggle, Dialog, Tooltip } from 'svelte-ux';
import { onMount } from 'svelte';
import { mdiPlus } from '@mdi/js';
let service;
let page;
let data;
let storageKeys = [];
let dbFormatted = "";
let dbJson = "";
let saveAsName = "";
let currentDB;

// Subscribe to the store
appBackend.subscribe(value => {
    service = value;
    page = service.newDocstorePage();
    [dbFormatted, dbJson] = page.dump();
    const name = service.currentDatabaseName();
    saveAsName = name
    currentDB = service.currentDatabase();
});

onMount(() => {
    storageKeys = service.listDatabaseKeys();
});

function saveAs(name) {
    saveAsName = name;
    service.saveDatabaseAs(saveAsName);

    storageKeys = service.listDatabaseKeys();
}

function onDbChange(name) {
  if (name) {
    saveAsName = name;
    [dbFormatted, dbJson] = page.changeDbName(`${name}`);
  }

}

function reloadServiceFromStorage(name) {
    const newService = service.reloadService(name);
    appBackend.set(newService);
}

</script>

<div class="grid gap-8">
    <div ><Card title="Doc Store" subheading="This is the back-end database"/></div>
    <div>

        <Toggle let:on={open} let:toggle>
            <SelectField bind:selected={currentDB} bind:options={storageKeys} on:change={(e) => onDbChange(e.detail.value)} >
                <span slot="append" on:click|stopPropagation>
                    <Tooltip title="Create a new database snapshot">
                        <Button
                        icon={mdiPlus}
                        class="text-surface-content/50 p-2"
                        on:click={toggle}
                        />
                    </Tooltip>
                  </span>
            </SelectField>
            <Form
            initial={ {label: "", value: ""} }
            let:draft
            let:commit
            let:revert
          >
            <Dialog {open} on:close={toggle}>
              <div slot="title">Create new option</div>
              <div class="px-6 py-3 w-96 grid gap-2">
                <TextField
                  label="Label"
                  value={draft.label}
                  on:change={(e) => {
                    draft.label = e.detail.value;
                  }}
                  autofocus
                />
              </div>
              <div slot="actions">
                <Button on:click={() => {
                    saveAs(draft.label);
                    commit();
                }} color="primary">Snapshot Database</Button>
                <Button on:click={() => revert()}>Cancel</Button>
              </div>
            </Dialog>
          </Form>
        </Toggle>
     </div>
     <div >
        <Tooltip title="This will reload the service using the {saveAsName ? saveAsName : "selected"} database">
            <Button variant="fill-outline" size="lg" color="primary" on:click={(e) => reloadServiceFromStorage(saveAsName)} disabled={!saveAsName} >Load "{saveAsName}" Database</Button>
        </Tooltip>
         <Tooltip title="This save the {saveAsName ? saveAsName : "selected"} database">
             <Button variant="fill-outline" size="lg" color="secondary" on:click={(e) => saveAs(saveAsName)} >Overwrite "{saveAsName}"</Button>
         </Tooltip>
       </div>
    <div class="border overflow bg-highlight-1" ><pre>{dbFormatted}</pre></div>
    <div ><hr /></div>
    
    <div class="border">
        <ExpansionPanel>
            <div slot="trigger"><Card title="Json"/></div>
            <pre>{dbJson}</pre>
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
