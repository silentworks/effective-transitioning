{#if animate}
  {#if transitionType == 'fly'}
  <header transition:fly={{ x, y, delay, duration, easing }}><slot /></header>
  {/if}
  
  {#if transitionType == 'fade'}
  <header transition:fade={{ delay, duration, easing }}><slot /></header>
  {/if}

  {#if transitionType == 'blur'}
  <header transition:blur={{ delay, duration, amount, opacity, easing }}><slot /></header>
  {/if}

  {#if transitionType == 'slide'}
  <header transition:slide={{ delay, duration, easing }}><slot /></header>
  {/if}

  {#if transitionType == 'scale'}
  <header transition:scale={{ delay, duration, opacity, start, easing }}><slot /></header>
  {/if}
{/if}

<script>
  import { onMount } from 'svelte'
  import { fly, fade, blur, slide, scale } from 'svelte/transition'
  import { cubicOut } from 'svelte/easing'
  import { onInterval } from 'utils/interval'

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
  export let repeat = false

  onMount(() => {
		animate = true
  })
  
  if (repeat) {
    onInterval(() => animate = !animate, 1500)
  }
</script>