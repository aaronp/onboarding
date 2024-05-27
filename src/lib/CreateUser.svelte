<script>
  import InputField from '$lib/InputField.svelte';
  import TextArea from '$lib/TextArea.svelte';
  import SelectDropdown from '$lib/SelectDropdown.svelte';
  import { createEventDispatcher } from 'svelte';


  import { writable } from "svelte/store";

  let name = "";
  let nameMessage = "";
  let description = "";
  let descriptionMessage = "";
  let fileName = writable("");
  let avatarData = writable("");
  let password = ""
  let passwords = [
    {'label' : 'All your base are belong to me', value: 'All your base are belong to me'},
    {'label' : 'Let me in', value: 'Let me in'},
    {'label' : 'password123', value: 'password123'} 
  ]


  $: isValid = description !== "" && name !== "";

  //avatarData will be something like: data:image/webp;base64,UklGRrwhAQBXRUJQVl
  $: eventData = {
      name,
      description,
      password,
      avatar : $avatarData
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

    function validateName() {
        if (name === "") {
            nameMessage = "Name is required";
        } else {
            nameMessage = "";
        }
    }

    function validateDescription() {
        if (description === "") {
            descriptionMessage = "Description is required";
        } else {
            descriptionMessage = "";
        }
    }
    function validate() {
      validateName();
      validateDescription();
    }

    function onSubmit(event) {
        event.preventDefault();
        
        validate();
        if (isValid === true) {
            dispatch('submit', eventData);
        }
        
    }


    function onCancel(event) {
        event.preventDefault();
        dispatch('cancel');
    }


  function handleDragOver(event) {
    event.preventDefault();
  }
</script>

<form >
  
    <InputField label="Name:" bind:value={name} bind:errorMessage={nameMessage}  on:onUpdate={validateName}/>
    <TextArea label="Title:" bind:value={description}  bind:errorMessage={descriptionMessage} on:onUpdate={validateDescription}/>
    <SelectDropdown label="Password:" bind:options={passwords} bind:value={password} />
  
  </form>
  <div class="button-container">
        <div
            class="drop-area"
            role="button"
            on:drop="{handleDrop}"
            on:dragover="{handleDragOver}">
            Drag and drop an avatar image here
        </div>
</div>

<div class="button-container">
    <button type="submit"  on:click={onSubmit}>Submit</button>
    <button type="submit" class="secondary-button" on:click={onCancel}>Cancel</button>
</div>
{#if $fileName}
  <div>
    <p>File name: {$fileName}</p>
    <img src="{$avatarData}" alt="Dropped image" style="max-width: 100px; max-height: 100px;" />
  </div>
{/if}


<style>
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
  