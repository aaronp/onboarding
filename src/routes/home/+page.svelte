<script>
        import { Shine, ExpansionPanel, Notification, Icon, Button, Card  } from 'svelte-ux';

        import { mdiCheckCircleOutline, mdiCog, mdiPacMan } from '@mdi/js';
</script>
<Card title="Welcome!" />

<p>
    This simple application supports creating and listing products for sale.
</p>

<p>
    It includes three personas:
</p>

<div class="w-[400px] spaced">
    <Notification open >
      <div slot="icon">
        <Icon data={mdiCheckCircleOutline} class="text-success-500" />
      </div>
      <div slot="title">Authenticated users</div>
      <div slot="description">People who can create and list new products to sell.</div>
    </Notification>
  </div>


  
<div class="w-[400px] spaced">
    <Notification open >
      <div slot="icon">
        <Icon data={mdiPacMan} class="text-success-500" />
      </div>
      <div slot="title">Operations</div>
      <div slot="description">These people control the categories and can approve the listed products.</div>
    </Notification>
  </div>
  
<div class="w-[400px] spaced">
    <Notification open >
      <div slot="icon">
        <Icon data={mdiCog} class="text-success-500" />
      </div>
      <div slot="title">Engineers</div>
      <div slot="description">People who can view the application architecture and database.</div>
    </Notification>
  </div>

<style>

p {
    font-size: large;
    padding-top: 1em;
}

.spaced {
    padding-top: 2em;
}
</style>