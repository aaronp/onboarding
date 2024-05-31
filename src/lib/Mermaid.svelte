<!-- src/lib/Mermaid.svelte -->
<script>
    import { onMount } from 'svelte';
    import mermaid from 'mermaid';
  
    export let chart;
  
    onMount(() => {
      mermaid.initialize({ startOnLoad: true });
      mermaid.contentLoaded();
    });
  </script>
  
  <div class="mermaid">
    {@html chart}
  </div>