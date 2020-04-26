{#if showExample}
  <div class="example" transition:fade>
    <slot />
  </div>
{/if}

<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'

  let showExample = false

  onMount(() => {
    showExample = true
  })
</script>

<style>
  .example {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
    height: 500px;
    width: 100%;
    position: relative;
  }
</style>