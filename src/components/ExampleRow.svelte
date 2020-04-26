{#if showExample}
  <div class="example" style="--grid-template-columns: {codeOnly ? '100% 0' : '50% auto'}" transition:fade>
    <slot />
  </div>
{/if}

<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'

  let showExample = false
  export let codeOnly = false

  onMount(() => {
    showExample = true
  })
</script>

<style>
  .example {
    display: grid;
    padding: 0 10px;
    width: 100%;
    position: relative;
    grid-template-columns: var(--grid-template-columns, 50% auto);
    grid-column-gap: 10px;
  }
</style>