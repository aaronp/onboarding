<script lang="ts">
    import { mdiPencil, mdiCancel, mdiAlert, mdiInformation } from '@mdi/js';
    import { currentUser, appBackend} from '$lib/stores/backend.js';
    import { Shine, ExpansionPanel, Notification, Icon, Button, Card  } from 'svelte-ux';
    import { goto } from '$app/navigation';
    import { base } from '$app/paths'

  
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
  
    function onEdit(draftId) {
      goto(`${base}/onboard?id=${draftId}`);
    }
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
            <div class="grid gap-2">
              <div class="info">Listed for £{draft.data.price}</div>
            </div>

            {#if draft.data.approved}
              <div class="grid grid-cols-4 gap-2">
                <Notification open >
                  <div slot="icon" >
                    <Icon data={mdiInformation} />
                  </div>
                  <div slot="title" >Live</div>
                  <div slot="description" >This product was approved at {draft.data.lastUpdated}</div>
                </Notification>
              </div>
            {/if}
            {#if draft.data.withdrawn}
            <div class="grid grid-cols-4 gap-2">
              <Notification open >
                <div slot="icon" >
                  <Icon data={mdiAlert} class="text-warning-200" />
                </div>
                <div slot="title" >Withdrawn</div>
                <div slot="description" >This product was withdrawn on {draft.data.lastUpdated}</div>
              </Notification>
            </div>
            {/if}


            <div class="grid grid-cols-4 gap-2">
              <ExpansionPanel>
                <div slot="trigger" class="flex-1 p-3">Detail...</div>
                <div>
                  <pre>{JSON.stringify(draft, null, 2)}</pre>
                </div>
              </ExpansionPanel>
              </div>
  
          </div>
          <div slot="actions">

            <Button icon={mdiPencil} variant="fill-outline" size="lg" color="primary" on:click={(e) => onEdit(draft._id)}>Edit</Button>
            {#if !draft.data.withdrawn}
            <Button iconf={mdiCancel} variant="fill-outline" size="lg" color="secondary" on:click={(e) => onWithdraw(draft._id)}>Withdraw</Button>
            {/if}
          
        </div>

        </Card>
      </div>
    {/each}
  </div>


<style>
.info {
  font-size: large;
  text-align: left;
  align-items: start;
}
</style>