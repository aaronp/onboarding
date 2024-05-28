<script>
    import Icon from 'svelte-awesome';
  
    /// *** Embedded Icons ***
    // Recommended - import just the icon you need
    import beer from 'svelte-awesome/icons/beer';
    import refresh from 'svelte-awesome/icons/refresh';
    import codeFork from 'svelte-awesome/icons/codeFork';
    import camera from 'svelte-awesome/icons/camera';
    import ban from 'svelte-awesome/icons/ban';
  
    // EDGECASE ICONS - different names due to reserved names / starting with numbers
    import fa500px from 'svelte-awesome/icons/fa500px'; // '500px' icon
    import faTry from 'svelte-awesome/icons/faTry'; // 'try' icon
  
    
</script>

Beer:
<Icon data="{beer}" />
<!-- codeFork is camelCase, unlike the js file, code-fork.js -->
Fork:
<Icon data="{codeFork}" />

<!-- with options -->
Refresh:
<Icon data="{refresh}" scale=2 />
<Icon data="{codeFork}" label="Forked Repository" />

<!-- stacked icons [WIP] -->

<Icon data="{camera}" />
Alert:
<Icon name="{ban}" scale=2 class="alert" />
