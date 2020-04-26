<script>
	let items = []
	
	const addToBag = () => {
		items = [...items, items.length + 1]
	}
</script>

<style>
	.shopping-bag {
    position: relative;
    width: 55px;
    height: 62px;
    overflow: hidden;
	}
	.shopping-bag-count {
		position: absolute;
		left: 0;
		top: 0;
		padding: 24px 16px;
		width: 20px;
		text-align: center;
	}
</style>

<div class="shoppingbag-wrapper">
  <button on:click={addToBag}>
    Add To Bag
  </button>


  <div class="shopping-bag">
    <svg xmlns="http://www.w3.org/2000/svg"><path d="M8 14L4 49h42l-4-35H8z" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path fill="none" d="M0 0h50v50H0z"/><path d="M34 19v-8c0-4.971-4.029-9-9-9s-9 4.029-9 9v8" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><circle cx="34" cy="19" r="2"/><circle cx="16" cy="19" r="2"/></svg>
    <div class="shopping-bag-count">{items.length}</div>
  </div>
</div>
