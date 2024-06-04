<script>
    import { mdiDelete, mdiPlus } from '@mdi/js';

    import { Form, Field, TextField, SelectField, Button, Toggle, Dialog, Card, ListItem } from 'svelte-ux';
    import { appBackend } from '$lib/stores/backend.js';
    import { base } from '$app/paths'
	
    // TODO - we could probably export this from page.js, but getting some weird circular reference thing
    let service;

    let page;
    let options = [ ];
    let subCategories = [ ];
    let selectedCategoryName;
    
    appBackend.subscribe(value => {
      service = value;
      page = service.newCategoryPage();
      options = page.options;
      selectedCategoryName = page.selectedCategoryName;
    });
  
    let currentCategory;
    export let data = {};

   function onCategorySelectionChanged(event) {
     const newValue = event.detail.value;
     page.selectedCategoryName = `${newValue}`;
     refresh();
   }

   function removeSubCategory(name) {
     page.onRemoveSubCategory(name);
     refresh();
   }

   function refresh() {
    subCategories = page.subCategories;
    options = page.options;
   }

   function addSubCategory(draft) {
      const name = draft.subcategory;
      draft.subcategory = '';
      page.onAddSubCategory(name);
      refresh();
      selectedCategoryName = page.selectedCategoryName;
   }

    function onAddCategory(draft) {
      page.onAddCategory(draft.label);
      draft.label = '';
      refresh();
      selectedCategoryName = page.selectedCategoryName;
    }
</script>


<div class="grid gap-8">
  <Card title="Update Categories"  subheading="This page allows you to update the categories/subcategories for onboarding."/>
  <div>These categories are for <a href="{ base }/onboard">onboarding new products</a>.</div>
  <div/>
</div>

<Toggle let:on={open} let:toggle>

    <div class="grid grid-cols-3 gap-4" >
        <Field label="Category" let:id>
            <SelectField {id} {options} on:change={onCategorySelectionChanged} bind:value={selectedCategoryName}>
            <span slot="append" on:click|stopPropagation>
                <Button
                icon={mdiPlus}
                class="text-surface-content/50 p-2"
                on:click={toggle}
                />
            </span>
            </SelectField>
            
        </Field>
        {#if page.selectedCategoryName }

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

        <div class="grid gap-4">
          {#each subCategories as subCategory}
          <div>
            <ListItem title={subCategory} >
              <div slot="actions">
                <Button
                  icon={mdiDelete}
                  class="text-surface-content/50 p-2"
                  on:click={removeSubCategory(subCategory)}
                  />
                </div>
            </ListItem>
          </div>
          {/each}
          <div>
            <TextField label="Sub-Category" clearable value={draft.subcategory}
            on:keypress={(e) => {
             if (e.key === 'Enter') {
               addSubCategory(draft);
             }
           }}
           on:change={(e) => {
             draft.subcategory = e.detail.value;
             // Call "refresh" as often as you want "current" updated (on:blur, etc)
             refresh();
           }}>
           </TextField>
          </div>
        </div>
 
                
                <Button on:click={addSubCategory(draft)} disabled={current.subcategory == null}>Add</Button >
            </Form>
        {/if}
    </div>
    <Form
      let:draft
      let:commit
      let:revert
    >
      <Dialog {open} on:close={toggle}>
        <div slot="title">New Product Category</div>
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
          <Button on:click={onAddCategory(draft)} color="primary">Add option</Button>
          <Button on:click={() => revert()}>Cancel</Button>
        </div>
      </Dialog>

    </Form>

  </Toggle>


  <style>
    :global(:root) {
        --ux-heading-font-size: 2em;
        --ux-heading-color: #333;
    }

</style>