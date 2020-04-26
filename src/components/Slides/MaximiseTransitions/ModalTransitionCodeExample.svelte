<div class="slide-container">
  <Layout>
    <AnimatedP x={400}>Modal with transition code</AnimatedP>

    <ExampleRow>
      <Prism code={jsCode} />
      <Prism code={htmlCode} />
    </ExampleRow>
  </Layout>
</div>

<script>
  import Layout from './Layout.svelte'
  import Prism  from 'components/Prism.svelte'
  import Example  from 'components/Example.svelte'
  import ExampleRow  from 'components/ExampleRow.svelte'
  import AnimatedH2  from 'components/Animated/AnimatedH2.svelte'
  import AnimatedH3  from 'components/Animated/AnimatedH3.svelte'
  import AnimatedP  from 'components/Animated/AnimatedP.svelte'
  import ModalTransition from 'examples/Modal/ModalTransition.svelte'

  const jsCode = `<script>
  import { fly, slide, scale, fade } from "svelte/transition"
  import { bounceOut, cubicIn, cubicInOut, circOut } from "svelte/easing"

  let modalVisible = false
  let accepted = false
  const event = "Hello World"

  const accept = () => {
    accepted = true;
    setTimeout(() => {
      modalVisible = false
      accepted = false
    }, 2500)
  }
<\/script>`

  const htmlCode = `<section class="app">
	{#if modalVisible}
	<div class="modal" transition:scale>
		<div class="modal-container">
			{#if accepted}
			<div in:scale={{ delay: 200 }}>
				<p>Successfully accepted James's invite.</p>
			</div>
			{:else}
			<div out:slide>
				<img class="modal-img" src="/img/0hn2-classic-blue-coupe-die-cast-model-1037995.jpg"
				 alt="Classic blue coupe die cast car model" />
				<p>James sent an invite to <strong>{event}</strong></p>

				<div class="modal-actions">
					<button class="modal-btn modal-ignore" on:click={()=> modalVisible = !modalVisible}>Ignore</button>
					<button class="modal-btn modal-accept" on:click={accept}>Accept</button>
				</div>
			</div>
			{/if}
		</div>
	</div>
  {/if}
</section>`
</script>

<style>
  .slide-container :global(.slide) {
    --color: #fff;
    --background-color: #308cce;
    --align-items: flex-start;
  }
  .slide-container :global(.content) {
    --content-height: auto;
  }
</style>