<AnimatedHeader {transitionType} {delay} {duration} {x} {y} {amount} {opacity} {start} {easing} {repeat}>
  <h1><slot /></h1>
</AnimatedHeader>

<script>
  import { onMount } from 'svelte'
  import { fly, fade, blur, slide, scale } from 'svelte/transition'
  import { cubicOut } from 'svelte/easing'
  import AnimatedHeader from './AnimatedHeader.svelte'

  export let delay = 0
  export let duration = 400
  export let x = -200
  export let y = 0
  export let amount = 5
  export let opacity = 0
  export let start = 0
  export let easing = cubicOut
  export let transitionType = 'fly'
  export let repeat = false
</script>

<style>
  h1 {
    font-size: 100px;
    font-weight: 200;
    padding: 0 1em;
  }
</style>