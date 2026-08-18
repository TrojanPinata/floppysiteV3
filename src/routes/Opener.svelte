<script lang="ts">
	import '../app.css';
   import { typewriter_header } from '$lib/typewriter.js';

   const icons = [
    	{
      	name: 'GitHub',
      	href: 'https://github.com/TrojanPinata',
      	icon: 'simple-icons:github'
    	},
		{
      	name: 'Codeberg',
      	href: 'https://codeberg.org/Trojan_Pinata',
      	icon: 'simple-icons:codeberg'
    	},
    	{
      	name: 'LinkedIn',
      	href: 'https://www.linkedin.com/in/brian-hill-0082161a3/',
      	icon: 'simple-icons:linkedin'
    	},
    	{
      	name: 'Email',
      	href: 'mailto:hillbr20@gmail.com',
      	icon: 'mdi:email'
    	}
  	];
</script>

<div>
	<section class="bg-neutral-100 h-screen flex items-center justify-center">
      <div class="text-center">
         <h1 use:typewriter_header={{ speed: 50 }} class="typewriter-header text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono"><!-- i know what i'm doing --></h1>
         <div class="text-base sm:text-lg md:text-xl lg:text-2xl font-mono relative w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto mt-2">
            <p>
               This is my personal website written in Svelte and is the third iteration of my FloppySite project, a website which was made to run off of a floppy disk.
            </p>
            <p>All of the projects I have done are below.</p>
            <div class="flex justify-center gap-4 mt-4">
               {#each icons as { name, href, icon } (name)}
				      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name} class="text-lg text-neutral-400 hover:text-black transition-colors">
					      <iconify-icon icon={icon}></iconify-icon>
				      </a>
               {/each}
            </div>
         </div>
         
      </div>
   </section>
</div>

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

   /* I stole this from here: https://css-tricks.com/snippets/css/typewriter-effect/ */
</style>