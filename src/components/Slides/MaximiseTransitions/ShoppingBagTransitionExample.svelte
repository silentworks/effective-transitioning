<div class="slide-container">
  <Layout>
    <AnimatedP x={400}>Shopping Bag with transition</AnimatedP>

    <ExampleRow>
      <Prism {code} />
      <ShoppingBagTransition />
    </ExampleRow>
  </Layout>
</div>

<script>
  import Layout from './Layout.svelte'
  import Prism  from 'components/Prism.svelte'
  import ExampleRow  from 'components/ExampleRow.svelte'
  import AnimatedH2  from 'components/Animated/AnimatedH2.svelte'
  import AnimatedH3  from 'components/Animated/AnimatedH3.svelte'
  import AnimatedP  from 'components/Animated/AnimatedP.svelte'
  import ShoppingBagTransition from 'examples/ShoppingBag/ShoppingBagTransition.svelte'

  const code = `<script>
	import { fly } from 'svelte/transition'
	
	let items = []
	let itemsChanged = false
	
	const addToBag = () => {
		items = [...items, items.length + 1]
		itemsChanged = false
		setTimeout(() => {
			itemsChanged = true
		}, 100)
	}
<\/script>

<div class="shopping-bag">
    <svg xmlns="http://www.w3.org/2000/svg"><path d="M8 14L4 49h42l-4-35H8z" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path fill="none" d="M0 0h50v50H0z"/><path d="M34 19v-8c0-4.971-4.029-9-9-9s-9 4.029-9 9v8" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><circle cx="34" cy="19" r="2"/><circle cx="16" cy="19" r="2"/></svg>
    {#if itemsChanged}
    <div class="shopping-bag-count" transition:fly={{ y: 15 }}>{items.length}</div>
    {/if}
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