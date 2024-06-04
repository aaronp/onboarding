<script lang="ts">
    import { mdiCancel, mdiAlert, mdiCheck } from '@mdi/js';
    import { currentUser, appBackend} from '$lib/stores/backend.js';
    import { Shine, ExpansionPanel, Notification, Icon, Button, Card  } from 'svelte-ux';

  
    let service;
    let thisPage;
    let user = null;
    let drafts = [];
    
    function refreshList() {
        drafts = thisPage.listUnapprovedDrafts();
    }

    currentUser.subscribe(value => {
        user = value;
    });
  
    // Subscribe to the store
    appBackend.subscribe(value => {
      service = value;
      thisPage = service.newOperationsDashboardPage();
      refreshList();
    });
  

    function onApprove(draftId) {
      const result = thisPage.approveDraft(draftId);
      console.log("result: ", result);
      refreshList();
    }

</script>

<div class="grid gap-8">

<Shine>
    <Card title="Submitted (Draft) Products" />
</Shine>

    {#each drafts as draft}

    <div class="grid  gap-3">

        <Card title={draft.data.name} subheading="{draft.data.category} / {draft.data.subCategory} : {draft._id}">

        <div slot="contents" >
            <div class="grid gap-2">
            <div class="info">Listed for £{draft.data.price}</div>
            </div>

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

            {#if !draft.data.approved}
            <Button iconf={mdiCheck} variant="fill" size="lg" color="secondary" on:click={(e) => onApprove(draft._id)}>Approve</Button>
            {/if}
            {#if !draft.data.withdrawn}
            <Button iconf={mdiCancel} variant="fill-outline" size="lg" color="secondary" on:click={(e) => onWithdraw(draft._id)}>Withdraw</Button>
            {/if}
        
        </div>

        </Card>
    </div>
    {/each}
</div>