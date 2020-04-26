<div class="slide-container">
  <Slide>
    <AnimatedH2 x={400}>Svelte's Built-in Transitions</AnimatedH2>
    <ul>
      {#if animate}
      <li transition:fly={{ x: 200 }}>Fade</li>
      <li transition:fly={{ x: 200, delay: 40 }}>Blur</li>
      <li transition:fly={{ x: 200, delay: 80 }}>Fly</li>
      <li transition:fly={{ x: 200, delay: 120 }}>Slide</li>
      <li transition:fly={{ x: 200, delay: 160 }}>Scale</li>
      <li transition:fly={{ x: 200, delay: 200 }}>Draw*</li>
      <li transition:fly={{ x: 200, delay: 240 }}>Crossfade*</li>
      {/if}
    </ul>
  </Slide>
</div>

<script>
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import Slide  from 'components/Slide.svelte'
  import AnimatedH2  from 'components/Animated/AnimatedH2.svelte'
  import AnimatedP  from 'components/Animated/AnimatedP.svelte'

  let animate = false;

  setTimeout(() => {
    animate = true;
  }, 400)
</script>

<style>
  .slide-container :global(.content) {
    /* justify-content: space-evenly; */
    align-items: flex-start;
  }
  ul {
    width: 100%;
    height: 140px;
    /* margin-left: 70px; */
  }
</style>