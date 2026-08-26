<script>
    import { theme } from './cookies';
    import { onMount } from 'svelte';

    onMount(() => theme.init());
</script>

<button on:click={theme.toggle} class="fixed top-4 right-4 p-2 rounded-full bg-transparent hover:text-cyan-400 dark:hover:text-fuchsia-400 text-gray-800 dark:text-gray-100 transition sm:text-sm md:text-md lg:text-lg" aria-label="Toggle theme">
  {#if $theme === 'dark'}
    <iconify-icon icon='ic:baseline-light-mode'></iconify-icon>
  {:else}
    <iconify-icon icon='ic:round-dark-mode'></iconify-icon>
  {/if}
</button>