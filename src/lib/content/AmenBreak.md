---
title: "Amen Break Machine"
date: "2024-03-05"
---

Let's start from the top. I wanted to make a device similar to the <a href="https://cromagnontech.blogspot.com/2018/04/the-yeah-woo-machine.html?m=1">Yeah! Woo! Machine</a> which has been ever present in my youtube recommended. This device uses two micro controllers to play a drum loop on one and allow for actionable buttons to deliver the fated Yeah!s and Woo!s. This is a very elegant solution, especially when put inside such a nice aluminum chassis with such good design. I would hope I could design something of that quality one day.

Regardless, I did want to try my hand at something similar. As I am writing and developing this during my spring break, I thought I would try and knock this out in a week similar to my past spring break projects. This time, I decided I would try and make something more physical and similar to the YWM. I chose to use a <a href="https://www.hammfg.com/part/1590BB">1590BB</a> aluminum box, which have previously used when making guitar pedals. I find them extremely easy to work with and not horrible to look at. However, in this case, I decided on a design element before starting work and realized I had no way of implementing it with my available tools (for context, this is the synth slider we will discuss later and the tool I would need is a CNC router).

At first, when I was conceptualizing what this should do, I was listening to a track from 1080 Snowboarding called <a href="https://www.youtube.com/watch?v=NQ70k4Zt-Nw">White Out</a> which features the <a href="https://en.wikipedia.org/wiki/Amen_break">Amen Break</a>. Now I am not going to go over the history of electronic music here because it is not my place, but this a extremely influential and highly sampled four bars of music. It is widely mixed and modified piece of music that I thought would be cool to be able to mix and match in a sort of drum machine style. Mix in the YWM and you can see where I got this idea from.

<img src="https://i.imgur.com/8MGpDfV.jpeg" alt="overdrive pedal i made" />

I am going to keep the complicated technical aspects of why I made certain decisions short to keep this palatable, but understand that I using micropython and a Raspberry Pi Pico to make this work. I using I2S to output the audio to a MAX98357 DAC/amp chip and in the package, I included a second DAC in case I wanted to use both I2S channels on the Pico (which I later would find out is impossible because of how micropython implemented PIO). The reason I did it this way is because I did not want to spend a month writing C code for this dumb project.

<img src="https://i.imgur.com/sP3LGRn.jpeg" alt="guts" />

And with that, let me explain all of the feature creep things that made it into the final design. As you can see below, the shell is 3D printed as I wanted to include a synth slider. This would be possible using the uasynchio micropython package but is <i>buggy</i> to say the least. A knob was included to control the tempo and two switches control the separate mute controls. Six buttons are on the face, one for each bar/instrument and one for each Yeah! and Woo!. A aux out and speaker are also included, but not isolated and two leds for status are located on the front.

<img src="https://i.imgur.com/HCTraJs.jpeg" alt="topside" />

With that, I don't think there is really much I want to go over. There were a lot of compromises with this project, but to be able to play audio one a microcontroller is such a large leap in technology. Here is a demo of the device with my shoddy code running.

<div class="aspect-video">
   <iframe
      class="w-full h-full"
      src="https://www.youtube.com/embed/taxZBTZs0io"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
   ></iframe>
</div>

Until next time.