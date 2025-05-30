<script>
	let current = 0;
  	let images = [ '/BH.jpg' ];

	/* If you click on my face, it will show you a different picture. */
  	function next() { current = (current + 1) % images.length; }
  	function prev() { current = (current - 1 + images.length) % images.length; }
</script>

<div>
	<section class="bg-neutral-100 flex flex-col lg:flex-row items-center mt-15 mb-15 w-full max-w-6xl mx-auto justify-center font-mono px-4 light:bg-neutral-100">
  		<div class="w-full flex justify-center">
    		<button on:click={next}>
      		<img src={images[current]} alt="Brian Hill" class="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-[48em] h-auto rounded shadow" />
    		</button>
  		</div>

  		<div class="mt-6 lg:mt-0 lg:pl-16 text-center lg:text-left">
    		<h3 class="text-3xl font-mono font-bold inline-block">Who am I?</h3>
    		<p class="about_desc text-lg font-mono mt-2 mb-8">
				Hi, I'm Brian Hill, a Software Developer and Computer Engineer with a focus on embedded systems and hardware design. I spend a lot of time outside of work/school doing projects I find fun - which is what ends up here. All of my projects are on Github and if you have any specific questions, shoot me an email.
			</p>
    		<a href="/bhill_resume.pdf" class="button bg-black text-neutral-100 inline-block px-6 py-2 font-mono text-sm font-bold transition-colors duration-200" target="_blank" rel="noopener noreferrer">Resume PDF</a>
  		</div>
	</section>
</div>
