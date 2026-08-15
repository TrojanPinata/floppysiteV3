---
title: "Designing My Own Synthesizer"
date: "2026-07-03"
---

<img src="https://i.imgur.com/dv3T7lK.jpeg" alt="keybed" />

## Background

For as long as I can remember, I have been interested in <a href="https://en.wikipedia.org/wiki/Moog_synthesizer">modular synthesizers</a>. <a href="https://en.wikipedia.org/wiki/Modular_synthesizer">Moog modulars</a> and <a href="https://en.wikipedia.org/wiki/Eurorack">Eurorack</a>, but also <a href="https://www.moogmusic.com/synthesizers/matriarch/">Moog Matriarchs</a>, <a href="https://www.muzines.co.uk/articles/casio-pt-30/4686">Casio PT-30s</a>, and your favorite <a href="https://en.wikipedia.org/wiki/Roland_TR-707">Roland drum machines</a>. I like them all, but they are also wildly expensive. I am not enough into making music that I can justify the high price tag they have, but I keep an eye on them since it is something I am interested in and would gladly buy and dive into if I had a 20k lying around (which will literally never happen in <a href="https://www.sca.isr.umich.edu/">this economy</a>).

There is one synthesizer/keyboard which I do keep a very strict eye on: the <a href="https://en.wikipedia.org/wiki/Teenage_Engineering_OP-1">Teenage Engineering OP-1</a>. I **hate** this product with a passion. I hate it because I really like what it is and how the software is executed. It’s functionality and workflow are a masterclass in design. The physical device is a work of art. Everything about those two things are why it will be remembered as an all time great. But it is the same thing as all of the other synths except a step worse. It is over priced by a significant margin even though it has been out for a decade, it lacks real keys which allow a skilled keyboardist to have muscle memory, it is so form over function it forgoes any ergonomics for it’s design ideology, I can go on. I don’t hate it because I really dislike what it is as a product. I hate it because it’s so close to begin great and fumbles the bag by simply trying to be a bougie musical product for people who want to be seen as someone who plays music and is cool.

The thing that kills me the most though, is <a href="https://teenage.engineering/store/op-1-field">the price</a>. I do not understand how that price is possible for what it is. Like they have to be making a 90% margin to keep the price that high while also improving their manufacturing and design efficiency. My dream is to be able to make a product which can do everything the OP-1 does, but with a more refined keyboard, a more standardized and flexible workflow, and a price which is low enough that any high school kid would see and not immediately dismiss it. I think something that I’ve noticed is that a lot of young people who want to make music start by learning a <a href="https://en.wikipedia.org/wiki/Digital_audio_workstation">DAW</a>, which is fine and rational by all practical means, but because a DAW is <a href="https://www.image-line.com/fl-studio/pricing">effectively cheap</a> compared to a physical device, they learn everything in their DAW and don’t actually learn buy any equipment other then *maybe* a <a href="https://www.sweetwater.com/store/detail/MiniLabMk3-37W--arturia-minilab-37-mk3-slim-key-controller-white">MIDI keyboard</a>. I think it would be cool to be able to afford cool music equipment that makes you feel more connected to the things you are making without spending a ridiculously high amount on something that is effectively unnecessary for most people in a early stage of learning music production.

## What is going on here

That is my dream, but unfortunately dreams of products are made without thinking of each specific part of the final product. Computer keyboards need switches, keycaps, housing, PCB, code, etc. They are all necessary to think about before something of quality can be made. Even deeper, you have to think about the microcontroller you use, the power circuitry, communication with the computer, etc.

Synthesizers are much more complicated then that, and by extension I would not be able to make a project write up like this if I tried to learn everything all at once. Instead, what I have tried to do is break the project down into smaller realistic chunks which are feasible for me to actually do over a couple of months (kind of, you will see how ridiculous this gets). For this page, all I am trying to do is develop a working keybed and get some sound out of a off the shelf audio library.

<img src="https://i.imgur.com/3maW4dT.jpeg" alt="ready?" />

## Making a keybed

As I decided to break this project down, I first had to decide a goal. I started wide, reaching for all of the things I wanted the final product to have, but I ended up just writing a list of all of those things and starting from the simplest part of all – the keyboard. If you are at the top of the audio equipment work, a <a href="https://syntaur.com/shop/keybed-parts/5565-keybed-assembly-yamaha">Yamaha</a> or <a href="https://syntaur.com/shop/keybed-parts/keybed-korg-88-note">Korg</a>, the keybed is a solved game. I, however, am not at the top, I am at the bottom. Therefore, I decided I would homebrew my own design completely independent of anything already on the market – though I wouldn’t know, I also forbade myself from doing any research to keep my design as unique as possible.

The constraints I set for my keybed were that is needed to be close to the size of a normal keyboard, it had to be slim enough to not stick out in a bag too much, it can’t have travel about the highest plane of the board, and it had to have <a href="https://en.wikipedia.org/wiki/Keyboard_expression">velocity sensitivity</a>. This does not seem too difficult if you know how normal keyboards solve this problem, but remember, no research and also I am a computer engineer who likes mechanics and not a proper mechanical engineer.

My problem solving took about three months. I started with a very simple elastic band pulling the key back to rest, and that idea would eventually make it to the final version. The big difference is that I went through 25 iterations, moving the anchor points around, using different elastic materials, trying different stopper types. The biggest issues I had were that the keyboard at rest was not level, as in keys adjacent to each other were not at the same height at rest. Another was a bend in the key due to a lever action that was put on the key due to where I put the stops. The biggest issue was with the pivoting axle, which was originally 5mm plastic, but would bend so I replaced it with 3mm aluminum. All of these issues were eventually worked out and the final product was essentially as simple as four parts which could be put together by hand pretty quickly. If I wanted to make something like this for manufacturing, I would probably change the stop mechanism again to a screw and heat insert, but it is fine for now (I will eventually do exactly this when making a final version of this keybed – this project is not over).

You might have noticed that this is pretty simple. <a href="https://en.wikipedia.org/wiki/KISS_principle">KISS (keep it simple stupid)</a> is a good motto to have in most cases. You also might have noticed that I didn’t talk about how this would actually register the keys. Typically, keyboards use two switches per key and the difference in timing between each press to determine the velocity of the key. That’s pretty smart, but also is kind of limited. <a href="https://technicskeyboard.com/what-is-aftertouch-on-keyboard/">Aftertouch</a> and pressure sensitivity is something really high end keyboards do that I actually don’t think is too hard to implement. Instead of using switches to get the timing, you could also do this with a <a href="https://en.wikipedia.org/wiki/Hall_effect_sensor">Hall sensor</a>. Hall sensors detect magnetism, so if the key has a magnet on it, and the sensor is below it, the distance between the key and magnet will change when pressed and the microcontroller can detect that.

This is a vast oversimplification, but what you need to know is that this extra complexity is not free. Where switches can be tied to interrupts, analog sensors like hall sensors cannot. What I chose to do is tie each key to an <a href="https://www.digikey.com/en/product-highlight/t/texas-instruments/tmux6104-analog-multiplexer">analog multiplexer</a> and simply scan each sensor using the microcontroller’s onboard ADC and use that value as the position (after a whole calibration process I made). Now I am going to state the obvious, this is not really a good idea. It solves the problem, but is also a product of me doing this project on a shoestring budget. This entire project has ended up costing me less then $100, which mostly went to the microcontroller (we will talk about in a minute), a cheap display, some O rings, and the multiplexers. If I had more money for this I would have chose to make a PCB for the base of the keybeds and embed the hall sensors there instead of whatever the hell this is.

<img src="https://i.imgur.com/8Sk5WVJ.jpeg" alt="oh, that's gore" />

I also would have added multiple regional ADCs which could be accessed over SPI, so that reading would be less reliant on a slow onboard ADC and more on a faster piece of dedicated hardware. Then SPI would be the limitation, which is more then acceptable.

The keybed itself does need calibration, though I kind of solved that by doing it in the boot process and doing the lower bound at manufacturing and saving it to a virtual EEPROM. That is to say, it need to tuned as well, something a dual switch board does not. I will say, it is very fast, with 2kHz scanning, but that is the target, and I am nearly certain the interrupt strategy I have used to get there is very forgiving.

## But does it make sound?

Yes, it does. I chose to use a <a href="https://www.pjrc.com/store/teensy41.html">Teensy 4.1</a> for my microcontroller for a variety of reasons with this project. The biggest was that it has phenomenal audio libraries and works well with <a href="https://platformio.org/">PlatformIO</a>. This made my life a lot easier. I really wouldn’t like to have to make my own audio library (this is foreshadowing). It is also fast enough, and has all of the necessities I would like. I typically use my go to microcontroller the <a href="https://en.wikipedia.org/wiki/RP2040">RP2040</a> or it’s big brother the <a href="https://en.wikipedia.org/wiki/RP2350">RP2350</a> (which I have not used in a project yet, but will soon because the RP2354A has embedded flash which is super sick and I imagine will make for a cool small form factor project). The only issues with them is that they are dog slow at 150MHz. The <a href="https://www.nxp.com/products/i.MX-RT1060">NXP i.MX RT1060</a> on the Teensy is much faster at 600MHz and low latency, which is desirable. Programming it was easy, and I was able to make a basic synth with multiple oscillators, ADSR, filters, and reverb for somewhat low effort while learning everything about how it works. There will be a full demo at the end with me playing it.

<img src="https://i.imgur.com/f9mqS9I.jpeg" alt="breadboard wiring nightmare" />

I want to do a better job of amplification and DAC in the future since I think that is pretty important and I would like to get studio quality out of this device, but for now I am just using a <a href="https://learn.adafruit.com/adafruit-max98357-i2s-class-d-mono-amp/pinouts">MAX98357A</a> the I2S thing they have going on with that. There are much better DACs then this, and I think I could do proper stereo audio and handle a full size XLR jack and quarter inch jack for that (along with USB-C and 3.5mm). I also think this should be a capable MIDI keyboard for plugging into a computer, since I think this should be accessible for anyone of any equipment level.

## User Interfaces

Something that became apparent very early on was that I will never be able to make a UI as well known and liked as the OP-1. I simply do not have the skills to be able to do that. However, what I do have the skills to do is buy a <a href="https://esp32io.com/tutorials/esp32-tft-lcd-touch-display-spi">cheap ILI9488 TFT display from China</a>, and use a off the shelf library to draw on it all nice and such. So that’s what I did, I made what I think is a pretty cool boot screen and mode screens with dynamic sprites based on what you want to change.

In the future, I want to learn how to make a display attach directly to a PCB. That is not something I have ever done due to how expensive it is to make a mistake, but I think it makes for a more unified design. I really like single PCB products. In other words products where everything is on a single board, and I think to do this I need to learn how to make each component myself.

<img src="https://i.imgur.com/kZfbp6z.jpeg" alt="display module" />

## Demo

Here is the final result. Yes, the wires are a mess and it is on a breadboard, but this is not a final result, but merely a proof of concept for a larger project.

<div class="aspect-video">
   <iframe
      class="w-full h-full"
      src="https://www.youtube.com/embed/xYh5hiy672o?si=47g7U0o1Zn306pXJ"
      title="Keybed Audio Demo"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
   ></iframe>
</div>

And here is a tour of the UI.

<div class="aspect-video">
   <iframe
      class="w-full h-full"
      src="https://www.youtube.com/embed/XVslh03fMZE?si=Q7U7DsK6tjL-Sydp"
      title="Keybed Display Demo"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
   ></iframe>
</div>

## Going forward

Something I value a lot with projects is being able to make everything myself and do everything hardware related without needing to buy things from other manufactures when I decide to go all in. That does not mean making my own microprocessors, but it does mean that I like it when the board feels more professional then a collection of other people’s work. The <a href="https://brianchill.us/projects/ModelB">Model-B</a> is a perfect example of this.

Going forward I will not be using the Teensy 4.1. I like the Teensy’s libraries, but I heavily dislike needing to use the entire Teensy board because of a custom bootloader. This is literally just DRM for a library in a world of open source. I don’t really respect that at all and I don’t really think it makes sense to buy a $32 development board for something I may one day sell if it is good enough. I have also made things with daughterboards before and I think they look bad, so I would much rather use a STM32 or something, get higher clock speeds and make my own library then put up with whatever Paul Stoffregen wants to lock everything behind.

I think I may try to fit <a href="https://github.com/pichenettes/stmlib/tree/master">stmlib</a> to my project since the MCU I want to target is a <a href="https://www.st.com/en/microcontrollers-microprocessors/stm32h7-series.html">STM32H7</a>S and is in the same general family. I will likely initially develop around the <a href="https://www.st.com/en/microcontrollers-microprocessors/stm32f446re.html">STM32F446RE</a> since it is nearly drop in and I can change some things with a reasonable level of confidence it isn’t an issue with porting. I am also going to swap displays to something nicer and faster. Ideally I want to use a <a href="https://en.wikipedia.org/wiki/OLED">OLED</a>, but after using the cheap TFT, I almost don’t think the blacks are washed out as bad as I thought on such a tiny screen. An <a href="https://en.wikipedia.org/wiki/AMOLED">AMOLED</a> or <a href="https://en.wikipedia.org/wiki/MicroLED">MicroLED</a> would be cool, but if it means keeping prices down, then I am fine with this.

The keybed as I mentioned earlier should be modular, and have ADCs that can communicate over SPI. I designed the keybed to be in octaves that can simply squish together to make larger keyboards. Because of this, I think it’s actually in a pretty good position as it is. I would like to add more general UI things, and more functionality like sampling, sequencing, saving audio, and MIDI, though that is for the future.

<img src="https://i.imgur.com/sgy4WYg.jpeg" alt="thanks for reading" />

## Conclusion

I have learned a lot about the limitations of microcontrollers, programming on a CPU budget, and iterative design. This is not over. I promise I will eventually come back to this after a break. I have been working on this for six months now, mostly between programming, keybed design, and false leads about the direction I want to take the project. This has been fun.

As always, until next time.