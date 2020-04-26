{#if $current === 'differentTransitions'}
  <div class="container" transition:fade={{ duration: 200 }}>
    <Start />
  </div>
{/if}

{#if $current === 'fade'}
  <div class="container" transition:scale={{ duration: 200 }}>
    <Fade />
  </div>
{/if}

{#if $current === 'blur'}
  <div class="container" transition:scale={{ duration: 200 }}>
    <Blur />
  </div>
{/if}

{#if $current === 'fly'}
  <div class="container" transition:scale={{ duration: 200 }}>
    <Fly />
  </div>
{/if}

{#if $current === 'slide'}
  <div class="container" transition:scale={{ duration: 200 }}>
    <Slide />
  </div>
{/if}

{#if $current === 'scale'}
  <div class="container" transition:scale={{ duration: 200 }}>
    <Scale />
  </div>
{/if}

<script>
  import { fade, fly, scale } from 'svelte/transition'
  import { current } from 'utils/routing-machine.js'
  import Start from './Start.svelte'
  import Fade from './Fade.svelte'
  import Blur from './Blur.svelte'
  import Fly from './Fly.svelte'
  import Slide from './Slide.svelte'
  import Scale from './Scale.svelte'
</script>