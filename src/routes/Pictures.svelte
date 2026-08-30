<script lang="ts">
    import justifiedLayout from 'justified-layout';
    import type { Photo } from './+page.server';
    export let data : { latest: Photo[] };

    let containerWidth = 0;
    let innerWidth = 0;

    $: maxNumRows = innerWidth < 640 ? 2 : innerWidth < 1024 ? 2 : 2;   // was 4, but I think that is too much for the front page
    $: targetRowHeight = innerWidth < 640 ? 140 : innerWidth < 1024 ? 180 : 220;    // 220 for web, 180 for small screen, 140 for phones all based on screen width

    // justified layout may be the wrong tool for this job, but I wanted a google photos-esk output and I didn't want to do it myself
    $: geometry = containerWidth 
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

    // lightbox viewer - literally pass the photo object in to set the open photo variable, then unset it when closing. click on the image/in the black runs key handler
    let selectedPhoto: Photo | null = null;

    function openPhoto(photo: Photo) {
        selectedPhoto = photo;
    }

    function closePhoto() {
        selectedPhoto = null;
    }

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === 'Escape') closePhoto();
    }

	/* What is going on here:
		I want to be able to show off some of the photos I have taken, right? My solution to this is to make a sort of static grid of ~8 images on click will
        take you to an image viewer on a separate page. That page will be a photo wall which lazy loads the thumbnails and on click, pulls up a overlay image viewer component.
        This section will be the carosel and will read off the most recent/showcase images and display those 
	*/
</script>

<svelte:window bind:innerWidth on:keydown={handleKeydown} />

<div class="mx-auto my-36 px-4 sm:px-6 md:px-8 lg:px-12 bg-neutral-100 dark:bg-neutral-900 transition-colors">
	<div class="relative py-6 sm:py-10 md:py-16" bind:clientWidth={containerWidth} style={geometry ? `height: ${geometry.containerHeight}px` : 'min-height: 300px'}>
        {#if geometry}
  		    {#each data.latest.slice(0, geometry.boxes.length) as photo, i (photo.slug)}
                {@const box = geometry.boxes[i]}
                <button type="button" on:click={() => openPhoto(photo)} class="absolute rounded-sm shadow-md overflow-hidden bg-white dark:bg-neutral-800 hover:shadow-xl transition hover:scale-101" style="left: {box.left}px; top: {box.top}px; width: {box.width}px; height: {box.height}px;">
                    <img src={photo.thumbnail} alt={photo.slug} loading="lazy" class="w-full object-cover" />
                </button>
  		    {/each}
        {/if}
	</div>
    <div class="lg:my-2 py-4">
        <a href="/photos" class="w-full sm:w-2/3 md:w-1/2 mx-auto rounded-xl border-2 border-dashed border-gray-400 dark:border-gray-600 flex items-center justify-center text-center hover:bg-gray-50 dark:hover:bg-neutral-700 transition">
            <div class="">
                <p class="py-4 mx-16 text-lg font-medium text-black dark:text-neutral-100 transition-colors">View All Photos →</p>
            </div>
        </a>
    </div>
    
</div>

{#if selectedPhoto}
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
        <button type="button" class="absolute inset-0 w-full h-full flex items-center justify-center cursor-default" aria-label="Close image" on:click={closePhoto}>
            <img src={selectedPhoto.image} alt={selectedPhoto.slug} class="max-w-[90vw] max-h-[90vh] object-contain" />
        </button>
    </div>
{/if}