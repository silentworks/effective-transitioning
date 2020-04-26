<Slide>
  {#if showHeading}
  <AnimatedH1 x={-300} y={-100} delay={400}>Fly</AnimatedH1>
  {/if}
  <button on:click={flyAgain}>Fly Again</button>
</Slide>

<script>
  import Slide  from 'components/Slide.svelte'
  import AnimatedH1  from 'components/Animated/AnimatedH1.svelte'
  import AnimatedP  from 'components/Animated/AnimatedP.svelte'

  let showHeading = true

  const flyAgain = () => {
    showHeading = false
    setTimeout(() => {
      showHeading = true
    }, 800)
  }
</script>

<style>
  button {
    background: transparent;
    border: none;
    position: absolute;
    width: 100%;
    height: 60%;
    text-indent: -140%;
    overflow: hidden;
  }
</style>