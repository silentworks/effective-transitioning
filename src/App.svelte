{#if $current === 'start'}
  <div class="container" transition:fade><Start /></div>
{/if}

{#if $current === 'what'}
  <div class="container" transition:fade><What /></div>
{/if}

<DifferentTransitionsIndex />
<MaximiseTransitionsIndex />

{#if $current === 'noCss'}
  <div class="container" transition:scale={{ duration: 200 }}>
    <NoCSS />
  </div>
{/if}

{#if $current === 'events'}
  <div class="container" transition:scale={{ duration: 200 }}>
    <TransitionEvents />
  </div>
{/if}

{#if $current === 'thankYou'}
  <div class="container" transition:scale={{ duration: 200 }}>
    <ThankYou />
  </div>
{/if}

<script>
  import { fade, fly, scale } from 'svelte/transition'
  import { current } from 'utils/routing-machine.js'
  import Start from 'components/Slides/Start.svelte'
  import What from 'components/Slides/What.svelte'
  import DifferentTransitionsIndex from 'components/Slides/DifferentTransitions/Index.svelte'
  import MaximiseTransitionsIndex from 'components/Slides/MaximiseTransitions/Index.svelte'
  import NoCSS from 'components/Slides/NoCSS.svelte'
  import TransitionEvents from 'components/Slides/TransitionEvents.svelte'
  import ThankYou from 'components/Slides/ThankYou.svelte'

  $: {
    if ($current) console.log($current)
  }
</script>