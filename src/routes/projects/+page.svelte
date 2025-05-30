<script>
  import projects from '$lib/content/projects.json';
  import Footer from '../Footer.svelte';

  const sorted = [...projects].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
</script>


<a href="/">
   <button class="fixed top-4 left-4 text-sm px-4 py-2 rounded hover:bg-cyan-100  transition">
      ← Back
   </button>
</a>

<div class="mx-auto px-12">
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-30">

      <!-- Cool intro box that just says 'Projects' -->
      <div class="rounded-xl border-2 border-dashed border-gray-400 flex items-center justify-center text-center hover:bg-gray-50 transition duration-200">
   		<div class="p-4">
      		<p class="typewriter-header text-4xl font-semibold">Projects</p>
   		</div>
  		</div>

      <!-- List all projects from newest -->
  		{#each sorted as project}
    		<a href={`/projects/${project.slug}`} class="rounded-xl shadow-md overflow-hidden bg-white hover:shadow-lg transition duration-200">
      	<img src={project.image} alt={project.title} class="w-full h-64 sm:h-48 md:h-64 lg:h-64 2xl:h-82 object-cover"/>
      	<div class="p-4">
        		<h3 class="text-lg font-semibold">{project.title}</h3>
        		<p class="text-sm text-gray-500">{project.date}</p>
      	</div>
    	</a>
  		{/each}
	</div>
</div>

<Footer />

<style lang="postcss"> 
   @reference "tailwindcss"; 

   :global(html) { 
      background-color: theme(--color-gray-100); 
   }

   .typewriter-header::after {
      content: '|';
      animation: blink 1s step-end infinite;
      margin-left: 0.2em;
   }

   @keyframes blink {
      50% { opacity: 0; }
   }
</style>