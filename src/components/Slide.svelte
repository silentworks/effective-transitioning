<svelte:window on:keydown={handleKeydown} />
<section class="slide">
  <div class="content">
    <slot />
  </div>
</section>

<script>
  import { send, service } from 'utils/routing-machine.js'
  const child = service.child

  export let next = (send) => { send('next') }
  export let previous = (send) => { send('previous') }
  export let nextIn = ({send, child}) => { 
    if (child !== undefined) child.send('nextIn') 
  }
  export let previousIn = ({send, child}) => { 
    if (child !== undefined) child.send('previousIn') 
  }

  function handleKeydown(event) {
    console.log(`event key ${event.key}`);
    switch(event.key) {
      case 'ArrowRight':
        next(send)
        break;
      case 'ArrowLeft':
        previous(send)
        break;
      case 'ArrowUp':
        previousIn({send, child})
        break;
      case 'ArrowDown':
        nextIn({send, child})
        break;
    }
  }
</script>

<style>
  .slide {
    color: var(--color);
    background-color: var(--background-color);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: var(--align-items, center);
  }
  .content {
    display: flex;
    flex-direction: column;
    height: var(--content-height, 400px);
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: var(--content-width, auto);
    z-index: 10;
  }
</style>