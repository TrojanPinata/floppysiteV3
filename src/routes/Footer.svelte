<script lang="ts">
	import '../app.css';

	const icons = [
    	{
      	name: 'GitHub',
      	href: 'https://github.com/TrojanPinata',
      	icon: 'mdi:github'
    	},
    	{
      	name: 'LinkedIn',
      	href: 'https://www.linkedin.com/in/brian-hill-0082161a3/',
      	icon: 'mdi:linkedin'
    	},
    	{
      	name: 'Email',
      	href: 'mailto:hillbr20@gmail.com',
      	icon: 'mdi:email'
    	}
  	];
</script>

<div>
	<footer class="bg-black text-neutral-600 w-full h-[4em] flex flex-col items-center justify-center px-4 font-mono">
		<div class="flex gap-4 mt-1">
			<p class="text-sm">Made With Floppy Disks • ©2025 Brian Hill •</p>
			{#each icons as { name, href, icon }}
				<a href={href} target="_blank" rel="noopener noreferrer" aria-label={name} class="text-lg hover:text-gray-400 transition-colors">
					<iconify-icon icon={icon}></iconify-icon>
				</a>
			{/each}
			<!-- I would have hardcoded this but every example I found did this, so I did this the right way on accident -->
		</div>
	</footer>
</div>

<style>
  	iconify-icon {
   	display: block;
  	}
</style>