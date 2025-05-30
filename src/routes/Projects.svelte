<script>
  	import projects from '$lib/content/projects.json';

  	const sorted = [...projects].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  	const latest = sorted.slice(0, 7);

	/* What is going on here:
		In order to make this page easy to manage while maintaining control, I have a directory of markdown files
		and a file called projects.json which contain the content of a project writeup and some metadata about the 
		project respecively. This allows me to do some custom styling inside the markdown files (believe it or not 
		it's not actually because I am lazy that I use <img> and youtube <div> there - but that is part of it)
		while also being able to display the links and 'bubbles' containing the image and title with some degree of 
		control. I understand this is probably unnecessary, but fuck you I am not a web developer and I want to go
		back to making calculators or whatever ¯\_(ツ)_/¯. 

		The thing above is just sorting the dates and only displaying the exact amount I want for the showcase.
		Maybe if I want to show off my keyboard some more and it gets buried I'll switch this to manually assigned,
		but for now this is fine.
	*/
</script>

<div class="mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-30">
  		{#each latest as project}
    		<a href={`/projects/${project.slug}`} class="rounded-xl shadow-md overflow-hidden bg-white hover:shadow-lg transition duration-200">
      	<img src={project.image} alt={project.title} class="w-full h-64 sm:h-48 md:h-64 lg:h-64 2xl:h-82 object-cover rounded-xl"/>
      	<div class="p-4">
        		<h3 class="text-lg font-semibold">{project.title}</h3>
        		<p class="text-sm text-gray-500">{project.date}</p>
      	</div>
    	</a>
  		{/each}

  		<a href="/projects" class="rounded-xl border-2 border-dashed border-gray-400 flex items-center justify-center text-center hover:bg-gray-50 transition duration-200">
   		<div class="p-4">
      		<p class="text-lg font-medium">View All Projects →</p>
   		</div>
  		</a>
	</div>
</div>