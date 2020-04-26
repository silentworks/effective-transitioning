<Slide>
  <AnimatedH2 transitionType='fade' delay={50}>Thank You</AnimatedH2>
  <div class="thankYou-content">
    <AnimatedP transitionType='fade' delay={100}>You can find me on Twitter <a href="twitter.com/silentworks">@silentworks</a> or in the Svelte Discord under the same screen name.</AnimatedP>
    <AnimatedP transitionType='fade' delay={100}>Also check out the Svelte transition tutorials <a href="https://svelte.dev/tutorial/transition">https://svelte.dev/tutorial/transition</a></AnimatedP>
  </div>
</Slide>

<script>
  import Slide  from 'components/Slide.svelte'
  import AnimatedH2  from 'components/Animated/AnimatedH2.svelte'
  import AnimatedP  from 'components/Animated/AnimatedP.svelte'
</script>

<style>
  .thankYou-content {
    margin-top: 30px;
    width: 840px;
  }
  .thankYou-content :global(p) {
    margin: 0 0 20px;
  }
</style>