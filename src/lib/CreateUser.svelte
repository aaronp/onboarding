<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Form, TextField, Button, Checkbox } from 'svelte-ux';

  import { writable } from "svelte/store";

  let data;
  let fileName = writable("");
  let avatarData = writable("");
  let isEngineering = false;
  let isOperations = false;
  let isAuthenticatedUser = false;
  let name = "";

  //avatarData will be something like: data:image/webp;base64,UklGRrwhAQBXRUJQVl
  $: eventData = {
      name,
      avatar : $avatarData,
      isEngineering,
      isOperations,
      isAuthenticatedUser
    };

  function handleDrop(event) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      fileName.set(file.name);

      const reader = new FileReader();
      reader.onload = () => {
        avatarData.set(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
    const dispatch = createEventDispatcher();

    function onSubmit(event) {
        event.preventDefault();
        dispatch('submit', eventData);
    }


    function onCancel(event) {
        event.preventDefault();
        dispatch('cancel');
    }


  function handleDragOver(event) {
    event.preventDefault();
  }
</script>

<div class="grid gap-2 "  >
  
<div>
    <Form
    initial={data}
    on:change={(e) => (data = e.detail)}
    let:draft
    let:state
    let:current
    let:refresh
  >
    <TextField
      class="mb-4 username"
      autofocus
      label="Username"
      value={name}
      on:change={(e) => {
        draft.name = e.detail.value;
        name = draft.name;
        // Call "refresh" as often as you want "current" updated (on:blur, etc)
        refresh();
      }}
    />

    <h3>This user should be a member of:</h3>
    <p>
  <Checkbox fullWidth bind:checked={isOperations}>Operations</Checkbox>
  <Checkbox fullWidth bind:checked={isAuthenticatedUser} >Authenticated User</Checkbox>
  <Checkbox fullWidth bind:checked={isEngineering} >Engineering</Checkbox>

</p>
    <Button variant="fill-outline" size="lg" color="primary" on:click={onSubmit} disabled={current.name == null}
      >Create</Button
    >
    <Button  variant="fill-outline" size="lg" color="secondary" on:click={onCancel}>Cancel</Button>

  </Form>
  

</div>
</div>


<div class="button-container">
  <div
      class="drop-area"
      role="button"
      on:drop="{handleDrop}"
      on:dragover="{handleDragOver}">
      Drag and drop an avatar image here
  </div>
</div>

{#if $fileName}
  <div class="button-container">
    <img src="{$avatarData}" alt="Dropped image" style="max-width: 100px; max-height: 100px;" />
  </div>
{/if}





<style>
  h3 {
    font-size: large;
  }
  p {
    width:800px;
  }
  Checkbox {

    font-size: large;
  }
  .username {
    width : 20em;
  }
  .button-container {
      padding-top: 1em;
      display: flex;
      flex-direction: row;
      gap: 10px; /* Adjust the space between the buttons as needed */
  }
  .drop-area {
    border: 2px dashed #ccc;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
  }
  .drop-area:hover {
    border-color: #666;
  }


  button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      border: 1px solid #ccc;
      border-radius: 4px;
      transition: background-color 0.3s;
  }

  button.primary-button {
      background-color: #7ad038;
  }

  button.secondary-button {
      background-color: #e0e0e0;
  }

  button:hover {
      background-color: #d0d0d0;
  }

  button.secondary-button:hover {
      background-color: #c0c0c0;
  }

  button:active {
      background-color: #b0b0b0;
  }

  button.secondary-button:active {
      background-color: #a0a0a0;
  }

  button:focus {
      outline: none;
      box-shadow: 0 0 0 2px #bbb;
  }
</style>
