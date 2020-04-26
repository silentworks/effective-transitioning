<div class="slide-container">
  <Layout>
    <AnimatedP x={400}>Shopping Bag without transition</AnimatedP>

    <ExampleRow>
      <Prism {code} />
      <ShoppingBagSimple />
    </ExampleRow>
  </Layout>
</div>

<script>
  import Layout from './Layout.svelte'
  import Prism  from 'components/Prism.svelte'
  import ExampleRow  from 'components/ExampleRow.svelte'
  import Example  from 'components/Example.svelte'
  import AnimatedH2  from 'components/Animated/AnimatedH2.svelte'
  import AnimatedH3  from 'components/Animated/AnimatedH3.svelte'
  import AnimatedP  from 'components/Animated/AnimatedP.svelte'
  import ShoppingBagSimple from 'examples/ShoppingBag/ShoppingBagSimple.svelte'

  const code = `<script>
	let items = []
	
	const addToBag = () => {
		items = [...items, items.length + 1]
	}
<\/script>

<div class="shopping-bag">
    <svg xmlns="http://www.w3.org/2000/svg"><path d="M8 14L4 49h42l-4-35H8z" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path fill="none" d="M0 0h50v50H0z"/><path d="M34 19v-8c0-4.971-4.029-9-9-9s-9 4.029-9 9v8" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><circle cx="34" cy="19" r="2"/><circle cx="16" cy="19" r="2"/></svg>
    <div class="shopping-bag-count">{items.length}</div>
</div>`
</script>

<style>
  .slide-container :global(.slide) {
    --align-items: flex-start;
  }
  .slide-container :global(.content) {
    --content-width: 50%;
  }
</style>