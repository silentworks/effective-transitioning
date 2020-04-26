<Layout>
  <AnimatedP x={400}>Delays are great, when used wisely.</AnimatedP>
  {#if showExample}
  <button transition:fade on:click={() => withDelay = !withDelay}>Toggle Delay Example</button>
  <Example>
    {#if withDelay}
    <ul>
      <li transition:fly={{ x: 200, delay: 200 }}>Preparing Presentation</li>
      <li transition:fly={{ x: 200, delay: 400 }}>Creating Slides</li>
      <li transition:fly={{ x: 200, delay: 600 }}>Recording Presentation</li>
    </ul>
    {:else}
    <ul>
      <li transition:fly={{ x: 200 }}>Preparing Presentation</li>
      <li transition:fly={{ x: 200 }}>Creating Slides</li>
      <li transition:fly={{ x: 200 }}>Recording Presentation</li>
    </ul>
    {/if}
  </Example>
  {/if}
</Layout>

<script>
  import Layout from './Layout.svelte'
  import Example  from 'components/Example.svelte'
  import { fly, fade } from 'svelte/transition'
  import AnimatedH2  from 'components/Animated/AnimatedH2.svelte'
  import AnimatedP  from 'components/Animated/AnimatedP.svelte'

  let showExample = false
  let withDelay = false

  setTimeout(() => {
    showExample = true
  }, 400)
</script>

<style>
  .slide-container :global(.slide) {
    --color: #fff;
    --background-color: #308cce;
  }
  .example {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    height: 500px;
    width: 100%;
    position: relative;
  }
  ul {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 70px;
    /* margin-left: 70px; */
  }
</style>