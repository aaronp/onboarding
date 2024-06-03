<script lang="ts">
    import { mdiPencil, mdiCancel } from '@mdi/js';
    import { currentUser } from '$lib/stores/backend.js';
    import { Shine, Drawer, ListItem, Button, Card  } from 'svelte-ux';
    import { appBackend } from '$lib/stores/backend.js';
    import { goto } from '$app/navigation';
    import { base } from '$app/paths'
  
  
    let service;
    let page;
    let user = null;
    let drafts = [];
    currentUser.subscribe(value => {
        user = value;
    });
  
    // Subscribe to the store
    appBackend.subscribe(value => {
      service = value;
      page = service.newDashboardPage();
      drafts = page.draftsForUser(user.name);
    });
  
  </script>


<div class="grid gap-8">

  <Shine>
    <Card title="Dashboard" />
  </Shine>
  
    {#each drafts as draft}

      <div class="grid  gap-3">

        <Card title={draft.data.name} subheading="{draft.data.category} / {draft.data.subCategory} : {draft._id}">

          <div slot="contents" class="bg-danger/10 h-40">
            Contents
          </div>
          <div slot="actions">
            <Button icon={mdiPencil} variant="fill-outline" size="lg" color="primary">Edit</Button>
            <Button iconf={mdiCancel} variant="fill-outline" size="lg" color="secondary">Withdraw</Button>
          </div>
        </Card>
      </div>
    {/each}
  </div>
