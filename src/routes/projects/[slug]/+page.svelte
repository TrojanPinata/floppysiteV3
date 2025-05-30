<script>
	export let data;
	import Footer from '../../Footer.svelte';
</script>

<a href="/projects">
   <button class="fixed top-4 left-4 text-sm px-4 py-2 rounded hover:bg-cyan-100  transition">
      ← Back
   </button>
</a>

<div class="bg-neutral-100 font-mono px-4 py-12 min-h-screen">
	<section class="max-w-4xl mx-auto">
		<h1 class="text-4xl font-bold mb-2">{data.meta.title}</h1>
		<p class="text-sm text-gray-500 mb-6">{data.meta.date}</p>
		<div class="content space-y-6 text-base text-neutral-800 leading-relaxed">{@html data.content}</div>
	</section>
</div>

<Footer />

<style>
	:global(.content img) {
		display: block;
		margin-left: auto;
		margin-right: auto;
		max-width: 100%;
		height: auto;
		border-radius: 0.2rem;
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
	}

  	:global(.content a) {
		color: #008fc7;
	}
	:global(.content a:visited) {
		color: #c341ff;
	}
</style>

