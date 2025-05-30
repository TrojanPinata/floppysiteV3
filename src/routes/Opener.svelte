<script lang="ts">
	import '../app.css';
   import { typewriter_header } from '$lib/typewriter.js';
</script>

<div>
	<section class="bg-neutral-100 h-screen flex items-center justify-center">
      <div class="text-center">
         <h1 use:typewriter_header={{ speed: 50 }} class="typewriter-header text-6xl font-mono"><!-- i know what i'm doing --></h1>
         <div class="text-2xl font-mono relative w-1/2 mx-auto mt-2">
            <p>
               This is my personal website written in Svelte and is the third iteration of my FloppySite project, a website which was made to run off of a floppy disk.
            </p>
            <p>All of the projects I have done are below.</p>
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