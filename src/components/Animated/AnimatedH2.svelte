<AnimatedHeader {transitionType} {delay} {duration} {x} {y} {amount} {opacity} {start} {easing}>
  <h2><slot /></h2>
</AnimatedHeader>

<script>
  import { onMount } from 'svelte'
  import { fly, fade, blur } from 'svelte/transition'
  import { cubicOut } from 'svelte/easing'
  import AnimatedHeader from './AnimatedHeader.svelte'

  let animate = false
  export let delay = 0
  export let duration = 400
  export let x = -200
  export let y = 0
  export let amount = 5
  export let opacity = 0
  export let start = 0
  export let easing = cubicOut
  export let transitionType = 'fly'

  onMount(() => {
		animate = true
	});
</script>

<style>
  h2 {
    font-size: 40px;
    font-weight: 200;
    padding: 0 1em;
  }
</style>