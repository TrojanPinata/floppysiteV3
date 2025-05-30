<script lang="ts">
	import Opener from './Opener.svelte';
	import Projects from './Projects.svelte';
	import About from './About.svelte';
   import Footer from './Footer.svelte';
</script>

<svelte:head>
  <title>&lt;Brian Hill's FloppySite&gt;</title>
  <meta name="description" content="" />
</svelte:head>

<!-- I think I have brain damage because I see this and the only thing I can think of are React components (how I built FSV2) -->
<div class="app">
	<Opener />
	<Projects />
	<About />
	<Footer />
</div>