<script>
	import ThemeButton from "$lib/ThemeButton.svelte";

</script>
<svelte:head>
   <title>&lt;404&gt;</title>
   <meta name="description" content="" />
</svelte:head>

<ThemeButton />

<div class="bg-neutral-100 dark:bg-neutral-900 h-screen flex items-center justify-center text-center font-mono font-semibold pb-40 transition-colors">
   <div class="nopage">
      <h3 class="mb-2 bg-black text-neutral-100 dark:bg-neutral-100 dark:text-black px-1 py-1 w-fit mx-auto text-xl transition-colors">&lt404&gt</h3>
      <img src="/taiho.gif" alt="uh oh"/>
      <p class="mt-2 text-xl text-black dark:text-neutral-100 transition-colors">Uh Oh. This page isn't available.</p>
      <p class="mt-2 text-xl bg-black text-neutral-100 dark:bg-neutral-100 dark:text-black hover:text-gray-900 dark:hover:text-neutral-100 hover:bg-cyan-400 dark:hover:bg-fuchsia-400 px-1 py-1 w-fit mx-auto transition-colors"><a href="/">Home</a></p>
   </div>
</div>