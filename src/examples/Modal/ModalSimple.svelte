<section class="app">
	{#if modalVisible}
	<div class="modal">
		<div class="modal-container">
			{#if accepted}
			<div>
				<p>Successfully accepted James's invite.</p>
			</div>
			{:else}
			<div>
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

  {#if !modalVisible}
	<button class="btn" on:click={()=> modalVisible = !modalVisible}>
		Show Modal
	</button>
  {/if}
</section>

<script>
  let modalVisible = false
  let accepted = false
  const event = "Hello World"

  const accept = () => {
    accepted = true
    setTimeout(() => {
      modalVisible = false
      accepted = false
    }, 2500)
  }
</script>

<style>
  .app {
    background: #308cce;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }
  .modal {
    width: 400px;
    background: #fff;
    color: #333;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 40px 20px;
    text-align: center;
    position: absolute;
  }
  .modal-container {
    padding: 5px 0;
  }
  .modal-img {
    width: 100%;
  }
  .modal-actions {
    display: flex;
    justify-content: space-evenly;
  }
  .modal-btn {
    width: 140px;
    background: #eee;
    color: #575757;
    font-size: 16px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    outline: none;
    border-radius: 3px;
    padding: 10px 0;
  }
  .modal-accept {
    background-color: #308cce;
    color: #fff;
  }
  .btn {
    font-size: 16px;
    padding: 10px 14px;
    border-radius: 5px;
    border: none;
  }
</style>
