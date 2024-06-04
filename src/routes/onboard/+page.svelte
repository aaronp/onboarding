<script lang="ts">
  
  import { mdiCurrencyGbp } from '@mdi/js';
  import { currentUser } from '$lib/stores/backend.js';
  import { Form, TextField, SelectField, Button, Card, Field, DateField, Tooltip, Icon } from 'svelte-ux';
  import { appBackend } from '$lib/stores/backend.js';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths'
  import { page } from '$app/stores';
    
  const isEdit = $page.url.searchParams.has('id');
  const editId = $page.url.searchParams.get('id');

  // const urlParams = new URLSearchParams(window.location.search);
  // const editId = urlParams.has('id');

  let service;
  let thisPage;
  let selectedCategory;
  let selectedSubCategory;
  let categories;
  let user = null;
  let savedProduct = null;
  export let data = {};

  currentUser.subscribe(value => {
      user = value;
  });

  function loadProduct(draftId) {
    savedProduct = thisPage.loadProduct(`${draftId}`);
    if (savedProduct.ownerUserId !== user.name) {
      // TODO  - proper alerts and server-side checks
      console.log(`Product ${savedProduct.name} is owned by ${savedProduct.ownerUserId}, not ${user.name}`);
      // goto(`${base}/dashboard`);
    } else {
      selectedCategory = savedProduct.category;
      selectedSubCategory = savedProduct.subCategory;

      // the draft in the form is taken from 'data'
      data = savedProduct;
      // data.name = savedProduct.name;
      // data.listDate = savedProduct.listDate;
      // data.endDate = savedProduct.endDate;
      // data.price = savedProduct.price;
    }
  }

  // Subscribe to the store
  appBackend.subscribe(value => {
    service = value;
    thisPage = service.newOnboardingPage();
    categories = thisPage.categoryOptions();
    if (isEdit) {
      loadProduct(editId);
    }
  });

  function saveDraft(draft) {

    // clean up our draft document from our state:
    delete draft.categories;
    delete draft.subCategories;
    draft.category = selectedCategory;
    draft.subCategory = selectedSubCategory;
    draft.ownerUserId = user.name;
    const response = thisPage.onSaveDraft(draft);

    console.log("response: ", response);
    if (response.result.success) {
      goto(`${base}/dashboard`);
    }

  }

  $: subCategories = thisPage.subCategoryOptions(selectedCategory);

</script>

<Card title="Create a new Product" />

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
    <div/>
    <div class="grid grid-cols-4 gap-4">
      <Field label="Category" let:id>
        <div class="border field-div" style="border:solid red 2"><SelectField options={categories} bind:value={selectedCategory} clearable={false} /></div>
      </Field>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <Field label="Subcategory" let:id>
        <div class="border field-div"><SelectField options={subCategories}  bind:value={selectedSubCategory} clearable={false} /></div>
      </Field>
    </div>
</div>
 
<div class="grid grid-cols-1 gap-4">
  <div />
  <div class="grid grid-cols-4 gap-4">
  <TextField
  label="Product Name"
  value={draft.name}
  on:change={(e) => {
  draft.name = e.detail.value;
  refresh();
  }}
/></div>


  <div class="grid grid-cols-4 gap-4">
    <div>
      <Tooltip title="The date the product should be listed">
        
        <Field label="Listing Date:" let:id>
          <div class="field-div"><DateField value={draft.listDate} on:change={(e) => { draft.listDate = e.detail.value; refresh(); }} picker /></div>
        </Field>
      </Tooltip>
    </div>
    <div>
      <Tooltip title="The date the product should stop being listed">
        <Field label="End Date:" let:id>          
          <div class="field-div"><DateField value={draft.endDate} on:change={(e) => { draft.endDate = e.detail.value; refresh(); }} picker /></div>
        </Field>
      </Tooltip>
    </div>
    <div />
    <div />
  </div>


  <div class="grid grid-cols-4 gap-4">
    <div>
      <Tooltip title="The asking price">
        <Field label="Price:" let:id>
          <div slot="prepend">
            <Icon data={mdiCurrencyGbp} class="text-surface-content/50 mr-2" />
          </div>


          <div class="border field-div">
          <TextField
          value={draft.price}
          on:change={(e) => {
          draft.price = e.detail.value;
          refresh();
          }} />
        </div>
          </Field>
          
      </Tooltip>
    </div>
    <div />
    <div />
    <div />
  </div>

  <div>
  <Button variant="fill" size="lg" color="primary" on:click={() => {
      saveDraft(draft);
     }} disabled={current.name == null || selectedCategory == null || selectedSubCategory == null }
    >Save</Button
  >
</div>

<!--
  <div class="mt-2">
    <div>current: {JSON.stringify(current)}</div>
    <div>state: {JSON.stringify(state)}</div>
  </div>
-->
</Form>

<style>
  .field-div {
    width: 100%;
  }
</style>