<script lang="ts">
    import { mdiPencil, mdiCancel, mdiAlert } from '@mdi/js';
    import { currentUser, appBackend} from '$lib/stores/backend.js';
    import { Shine, ExpansionPanel, Notification, Icon, Button, Card  } from 'svelte-ux';
  
  
    let service;
    let page;
    let user = null;
    let drafts = [];
    currentUser.subscribe(value => {
        user = value;
    });
  
    function refreshList() {
      if (user && page) {
        drafts = page.draftsForUser(user.name);
      }
    }
    // Subscribe to the store
    appBackend.subscribe(value => {
      service = value;
      page = service.newDashboardPage();
      refreshList();
    });
  
    function onWithdraw(draftId) {
      const result = page.withdrawDraft(draftId);
      console.log("result: ", result);
      refreshList();
    }
  </script>


<div class="grid gap-8">

  <Shine>
    <Card title="Dashboard" />
  </Shine>
  
    {#each drafts as draft}

      <div class="grid  gap-3">

        <Card title={draft.data.name} subheading="{draft.data.category} / {draft.data.subCategory} : {draft._id}">

          <div slot="contents" >

            <ExpansionPanel>
              <div slot="trigger" class="flex-1 p-3">Detail...</div>
              <div>
                <pre>{JSON.stringify(draft, null, 2)}</pre>
              </div>
            </ExpansionPanel>
            {#if draft.data.withdrawn}
            <Notification open >
              <div slot="icon" >
                <Icon data={mdiAlert} class="text-warning-200" />
              </div>
              <div slot="title" >Withdrawn</div>
              <div slot="description" >This product has been withdrawn</div>
            </Notification>
            {/if}
          </div>
          <div slot="actions">

            <Button icon={mdiPencil} variant="fill-outline" size="lg" color="primary">Edit</Button>
            {#if !draft.data.withdrawn}
            <Button iconf={mdiCancel} variant="fill-outline" size="lg" color="secondary" on:click={(e) => onWithdraw(draft._id)}>Withdraw</Button>
            {/if}
          
        </div>

        </Card>
      </div>
    {/each}
  </div>
