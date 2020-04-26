<script>
	import Prism from 'prismjs'
  import 'prismjs/themes/prism.css'
	import 'prism-svelte'
	
	export let language = 'svelte'
	export let code = ``

	const highlighted = Prism.highlight(code, Prism.languages[language], language)
</script>

<div class="code-highlight">
  <pre>
    <code class="language-{language}">
    {@html highlighted}
    </code>
  </pre>
</div>

<style>
  .code-highlight {
    width: 100%;
    background-color: #f7f7f7;
    padding: 0;
    overflow-x: auto;
  }
</style>