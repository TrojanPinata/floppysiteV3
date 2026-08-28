<script lang="ts">
	import ThemeButton from '$lib/ThemeButton.svelte';
    import Footer from '../Footer.svelte';

    import justifiedLayout from 'justified-layout';
    import type { Photo } from './+page.server';
    export let data: { photos: Photo[] };

    let containerWidth = 0;
    let innerWidth = 0;

    $: targetRowHeight = innerWidth < 640 ? 140 : innerWidth < 1024 ? 180 : 220;

    $: geometry = containerWidth    /* I don't fully get how this bit works but I want this to be justified instead of a stupid grid */
        ? justifiedLayout(
            data.photos.map((p) => ({ width: p.width, height: p.height })),
            {
                containerWidth,
                targetRowHeight,
                boxSpacing: 12,
                containerPadding: 0
            }
        )
    : null;
</script>

<svelte:window bind:innerWidth />

<div class="min-h-screen pt-32 bg-neutral-100 dark:bg-neutral-900 transition-colors">
    <a href="/"><button class="fixed top-4 left-4 text-sm px-4 py-2 rounded hover:text-cyan-400 dark:hover:text-fuchsia-400 text-neutral-900 dark:text-neutral-100 transition">← Back</button></a>

    <ThemeButton />

    <div class="mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div class="w-full sm:w-2/3 md:w-1/2 mx-auto rounded-xl border-2 border-dashed border-gray-400 dark:border-gray-600 flex items-center justify-center text-center transition">
            <div class="p-4">
                <p class="typewriter-header text-4xl font-semibold text-neutral-900 dark:text-neutral-100 transition-colors">Photos</p>
            </div>
        </div>
        <div class="mx-auto px-4 sm:px-6 md:px-8 lg:px-40">
            <div class="relative my-16 py-6 sm:py-10 md:py-16" bind:clientWidth={containerWidth} style={geometry ? `height: ${geometry.containerHeight}px` : 'min-height: 300px'}>
                {#if geometry}
                    {#each data.photos as photo, i (photo.slug)}
                        {@const box = geometry.boxes[i]}
                            <a href={`/photos/${photo.slug}`} class="absolute rounded-sm shadow-md overflow-hidden bg-white dark:bg-neutral-800 hover:shadow-xl transition hover:scale-101" style="left: {box.left}px; top: {box.top}px; width: {box.width}px; height: {box.height}px;">
                                <img src={photo.thumbnail} alt={photo.slug} loading="lazy" class="w-full object-cover" />
                            </a>
                    {/each}
                {/if}
            </div>
        </div>
    </div>

    <Footer />
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
</style>