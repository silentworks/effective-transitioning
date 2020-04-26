<Layout>
  <div class="start-content">
    <AnimatedP transitionType='fade' opacity={1}>Make more with the simple built-in transitions Svelte provides us with by applying some basic techniques</AnimatedP>
  </div>
</Layout>

<script>
  import Layout from './Layout.svelte'
  import AnimatedH2  from 'components/Animated/AnimatedH2.svelte'
  import AnimatedP  from 'components/Animated/AnimatedP.svelte'
</script>

<style>
  .start-content {
    margin-top: 30px;
    width: 660px;
  }
  .start-content :global(p) {
    margin: 0;
  }
</style>