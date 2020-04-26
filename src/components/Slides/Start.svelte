<Slide>
  <div class="start">
    <AnimatedH1>Effective Transitioning</AnimatedH1>
    <AnimatedH3 transitionType='fade'>with Svelte</AnimatedH3>
    <AnimatedP transitionType='fade'>presented by Andrew Smith</AnimatedP>
  </div>
</Slide>

<script>
  import Slide  from 'components/Slide.svelte'
  import AnimatedH1  from 'components/Animated/AnimatedH1.svelte'
  import AnimatedH3  from 'components/Animated/AnimatedH3.svelte'
  import AnimatedP  from 'components/Animated/AnimatedP.svelte'
</script>

<style>
  .start {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .start :global(h1) {
    margin: 0;
    text-align: center;
  }
</style>