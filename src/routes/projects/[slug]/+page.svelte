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

	:global(.content h2) {
		font-size: 1.5rem;
		font-weight: 700;
		margin-top: 2.5rem;
		margin-bottom: 0.75rem;
		color: #171717;
	}
	:global(.content h3) {
		font-size: 1.25rem;
		font-weight: 600;
		margin-top: 2rem;
		margin-bottom: 0.5rem;
		color: #171717;
	}
	:global(.content h4) {
		font-size: 1.1rem;
		font-weight: 600;
		margin-top: 1.5rem;
		margin-bottom: 0.5rem;
		color: #262626;
	}

	:global(.content h5) {
		font-size: 1rem;
		font-weight: 600;
		margin-top: 1.25rem;
		margin-bottom: 0.5rem;
	}

	:global(.content ul),
	:global(.content ol) {
		padding-left: 1.5rem;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}
	:global(.content li) {
		margin-bottom: 0.25rem;
	}
	:global(.content ul) {
		list-style-type: disc;
	}
	:global(.content ol) {
		list-style-type: decimal;
	}

	:global(.content code) {
		font-family: inherit; 
		background-color: #e5e5e5;
		padding: 0.15rem 0.4rem;
		border-radius: 0.25rem;
		font-size: 0.9em;
	}
	:global(.content pre) {
		background-color: #1e1e1e;
		color: #e5e5e5;
		padding: 1rem;
		border-radius: 0.4rem;
		overflow-x: auto;
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
	}
	:global(.content pre code) {
		background-color: transparent;
		padding: 0;
		color: inherit;
	}

	:global(.content blockquote) {
		border-left: 3px solid #008fc7;
		padding-left: 1rem;
		margin-left: 0;
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
		color: #525252;
		font-style: italic;
	}

	:global(.content strong) {
		font-weight: 700;
		color: #171717;
	}
	:global(.content em) {
		font-style: italic;
	}

	:global(.content hr) {
		border: none;
		border-top: 1px solid #d4d4d4;
		margin-top: 2.5rem;
		margin-bottom: 2.5rem;
	}

	:global(.content table) {
		width: 100%;
		border-collapse: collapse;
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
		font-size: 0.9rem;
	}
	:global(.content th),
	:global(.content td) {
		border: 1px solid #d4d4d4;
		padding: 0.5rem 0.75rem;
		text-align: left;
	}
	:global(.content th) {
		background-color: #e5e5e5;
		font-weight: 700;
	}
</style>

