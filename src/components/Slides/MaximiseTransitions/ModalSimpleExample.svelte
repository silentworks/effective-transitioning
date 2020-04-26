<div class="slide-container">
  <Layout>
    <AnimatedP x={400}>Modal without transition</AnimatedP>

    <Example>
      <ModalSimple />
    </Example>
  </Layout>
</div>

<script>
  import Layout from './Layout.svelte'
  import Example  from 'components/Example.svelte'
  import AnimatedH2  from 'components/Animated/AnimatedH2.svelte'
  import AnimatedH3  from 'components/Animated/AnimatedH3.svelte'
  import AnimatedP  from 'components/Animated/AnimatedP.svelte'
  import ModalSimple from 'examples/Modal/ModalSimple.svelte'
</script>

<style>
  .slide-container :global(.slide) {
    --color: #fff;
    --background-color: #308cce;
  }
  .slide-container :global(.content) {
    --content-height: auto;
  }
</style>