<script lang="ts">
    import { mdiPencil, mdiCancel, mdiAlert, mdiInformation } from '@mdi/js';
    import { currentUser, appBackend} from '$lib/stores/backend.js';
    import { Shine, ExpansionPanel, Notification, Icon, Button, Card  } from 'svelte-ux';
    import { goto } from '$app/navigation';
    import { base } from '$app/paths'

  
    let service;
    let thisPage;
    let user = null;
    
    currentUser.subscribe(value => {
        user = value;
    });
  
    // Subscribe to the store
    appBackend.subscribe(value => {
      service = value;
      thisPage = service.newOperationsDashboardPage();
    });
  
</script>

Operations Dashboard