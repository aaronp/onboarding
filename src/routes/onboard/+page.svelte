<script lang="ts">

    import { mdiMagnify, mdiPlus, mdiPencil, mdiAccount } from '@mdi/js';
    import { Form, TextField, SelectField, Button, Card } from 'svelte-ux';
    
    import { appBackend } from '$lib/stores/backend.js';

    let service;
    let page;
    let selectedCategory;
    let selectedSubCategory;
    let categories;

    // Subscribe to the store
    appBackend.subscribe(value => {
      service = value;
      page = service.newOnboardingPage();
      categories = page.categoryOptions();
      
    });

    // function onSelectedCategoryChanged(event) {
    //   console.log("onSelectedCategoryChanged", selectedCategory, ' detail is ', event.detail);
    //   subCategories = page.subCategoryOptions(selectedCategory);
    // }

    $: subCategories = page.subCategoryOptions(selectedCategory);

    export let data = {};

    // let options = [
    //   { label: 'One', value: 1, icon: mdiMagnify },
    //   { label: 'Two', value: 2, icon: mdiPlus },
    //   { label: 'Three', value: 3, icon: mdiPencil },
    //   { label: 'Four', value: 4, icon: mdiAccount },
    // ];
</script>

<Card title="Create a new Product" />

<p>Data: {JSON.stringify(data)}</p>
category Options: {JSON.stringify(categories)}
<p>subCategories: {subCategories}</p>
<p>subCategories: {JSON.stringify(subCategories)}</p>

<!--
    product-type: drop-down: (e.g. tool, toy, service, etc)
    sub-type: drop-down (e.g. hammer, screwdriver, etc)

    then, based on the above, some additional fields, but also:


    -------------------------
    Name: (this is full width)
    -------------------------

    Make: (drop-down based on product-type)

    Location: country select

    Tags: input field with chips

    Offer date: date picker

    List until date: smae

    Suggested Price: input field with a currency symbol in the field

    Actions are:

    Submit and cancel
-->

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
    <div />
    <div class="grid grid-cols-2 gap-4">
        <div class="border"><SelectField options={categories} bind:value={selectedCategory} clearable={false} /></div>
        <div class="border"><SelectField options={subCategories}  bind:value={selectedSubCategory} clearable={false} /></div>
    </div>
    <div />
</div>
 


<div class="grid grid-cols-1 border">

  <TextField
  label="Name"
  value={draft.last}
  on:change={(e) => {
  draft.last = e.detail.value;
  // Call "refresh" as often as you want "current" updated (on:blur, etc)
  refresh();
  }}
/>

</div>

  <Button on:click={() => commit()} disabled={current.name == null}
    >Apply</Button
  >
  <Button on:click={() => revert()}>Cancel</Button>
  <Button on:click={() => undo()}>Undo</Button>
  <Button on:click={() => revertAll()}>Reset</Button>
  <div class="mt-2">
    <div>current: {JSON.stringify(current)}</div>
    <div>state: {JSON.stringify(state)}</div>
  </div>
</Form>

