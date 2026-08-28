<script lang="ts">
    import justifiedLayout from 'justified-layout';
    import type { Photo } from './+page.server';
    export let data : { latest: Photo[] };

    let containerWidth = 0;
    let innerWidth = 0;

    $: maxNumRows = innerWidth < 640 ? 2 : innerWidth < 1024 ? 2 : 2; 
    $: targetRowHeight = innerWidth < 640 ? 140 : innerWidth < 1024 ? 180 : 220;

    $: geometry = containerWidth    /* I don't fully get how this bit works but I want this to be justified instead of a stupid grid */
        ? justifiedLayout(
            data.latest.map((p) => ({ width: p.width, height: p.height })),
            {
                containerWidth,
                targetRowHeight,
                boxSpacing: 12,
                maxNumRows,
                containerPadding: 0
            }
        )
    : null;

	/* What is going on here:
		I want to be able to show off some of the photos I have taken, right? My solution to this is to make a sort of static grid of ~8 images on click will
        take you to an image viewer on a separate page. That page will be a photo wall which lazy loads the thumbnails and on click, pulls up a overlay image viewer component.
        This section will be the carosel and will read off the most recent/showcase images and display those 
	*/
</script>

<svelte:window bind:innerWidth />

<div class="mx-auto my-48 px-4 sm:px-6 md:px-8 lg:px-12 bg-neutral-100 dark:bg-neutral-900 transition-colors">
	<div class="relative py-6 sm:py-10 md:py-16" bind:clientWidth={containerWidth} style={geometry ? `height: ${geometry.containerHeight}px` : 'min-height: 300px'}>
        {#if geometry}
  		    {#each data.latest.slice(0, geometry.boxes.length) as photo, i (photo.slug)}
                {@const box = geometry.boxes[i]}
                <a href={`/photos/${photo.slug}`} class="absolute rounded-sm shadow-md overflow-hidden bg-white dark:bg-neutral-800 hover:shadow-xl transition hover:scale-101" style="left: {box.left}px; top: {box.top}px; width: {box.width}px; height: {box.height}px;">
                    <img src={photo.thumbnail} alt={photo.slug} loading="lazy" class="w-full object-cover" />
                </a>
  		    {/each}
        {/if}
	</div>
    <div class="my-8">
        <a href="/photos" class="w-full sm:w-2/3 md:w-1/2 mx-auto rounded-xl border-2 border-dashed border-gray-400 dark:border-gray-600 flex items-center justify-center text-center hover:bg-gray-50 dark:hover:bg-neutral-700 transition">
            <div class="">
                <p class="py-4 mx-16 text-lg font-medium text-black dark:text-neutral-100 transition-colors">View All Photos →</p>
            </div>
        </a>
    </div>
    
</div>