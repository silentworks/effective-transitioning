{#if $current === 'maximise'}
  <div class="container" in:scale={{ duration: 200 }}>
    <Start />
  </div>
{/if}

{#if $current === 'shoppingBagSimple'}
  <div class="container">
    <ShoppingBagSimpleExample />
  </div>
{/if}

{#if $current === 'shoppingBag'}
  <div class="container">
    <ShoppingBagTransitionExample />
  </div>
{/if}

{#if $current === 'delay'}
  <div class="container" transition:fade>
    <Delay />
  </div>
{/if}

{#if $current === 'modalSimple'}
  <div class="container" transition:fade>
    <ModalSimpleExample />
  </div>
{/if}

{#if $current === 'modal'}
  <div class="container" transition:fade>
    <ModalTransitionExample />
  </div>
{/if}

{#if $current === 'modalCode'}
  <div class="container" transition:fade>
    <ModalTransitionCodeExample />
  </div>
{/if}

<script>
  import { fade, fly, scale } from 'svelte/transition'
  import { current } from 'utils/routing-machine.js'
  import Start from './Start.svelte'
  import ShoppingBagSimpleExample from './ShoppingBagSimpleExample.svelte'
  import ShoppingBagTransitionExample from './ShoppingBagTransitionExample.svelte'
  import ModalSimpleExample from './ModalSimpleExample.svelte'
  import ModalTransitionExample from './ModalTransitionExample.svelte'
  import ModalTransitionCodeExample from './ModalTransitionCodeExample.svelte'
  import Delay from './Delay.svelte'
</script>