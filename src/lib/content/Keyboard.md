---
title: "Keyboards"
date: "2022-07-28"
---

I have a keyboard. It is very nice. I got it on sale in spring 2016 from amazon. I don't know what else to say about it. It's a Corsair K70 (MK1 with the Cherry MX Speed keys). It's got the RGB, the media keys, the 100% layout what more could you want?

There really is only so much you can really do with a keyboard. It is essential for using a computer, or at least it was for a while when touch screens weren’t popular. I think keyboards are really nice, and that’s why I have more than just one. I also have a IBM Model M. It's very old, loud, and very, very clicky. I like it too. It lives on my side desk and runs on my secondary PC. The thing these two have in common is that they <i>are</i> common. Not too common, but enough that other people have them. This is where I started getting interested in mechanical keyboards. I saw them on reddit for the longest time and I thought they were cool but way too expensive. Like you can literally find some averaging upwards of $400, and that immediately prices most people out. There are some kits for much cheaper, but I feel like they take the reins away from the user and give you everything too prepackaged. The <a href="https://www.pcgamingrace.com/products/glorious-gmmk-pro-75-barebone-black?_fd=0">GMMK Pro</a> is about $300 (with everything) and looks good. I was going to buy one for a while, but when you’re spending the big bucks like that you might as well get everything, y’know?

So, I forgot about all of this and set it aside for a year before I decided to make my own. <a href="https://github.com/ruiqimao/keyboard-pcb-guide">This guide</a> is really helpful. It breaks everything down into easy-to-understand blocks and explains the proper form for designing and simplifying PCBs and general layouts. This is where I started. I was messing around trying to decide on what I wanted to do. I actually gave up after reading this because I didn’t know.

This hobby has so many different things and styles to build off of it is overwhelming. Initially, I gave up and just wanted to buy a kit, where all you need to do is solder everything together. But in my head, I couldn’t justify buying anything. There are too many different styles that exist. I eventually narrowed it down to the <a href="https://www.cftkb.com/shop/mysterium-tkl-diy-keyboard-kit">CFTKB Mysterium</a> because of how exposed the PCB is or <a href="https://cannonkeys.com/products/gb-satisfaction-75-keyboard-round-2">CannonKeys Satisfaction75</a> for its rotary encoder and OLED screen, but they are both out of stock. This is a common trend in the market, and I hate it. I refuse to wait a year for a person with very little incentive to rerelease to put out more, so I now had a reason to do it myself.

My game plan was to use the knowledge from the guide and combine the features of the two together to make something better than the sum of their parts. I knew I liked how the Mysterium was built, and it had <a href="https://github.com/coseyfannitutti/mysterium">open-source files</a>, so I got to work. There are many iterations that will never see the light of day. Never. They are bad. I would spend an entire day working on one and then at the end discard the whole thing.

I then discovered <a href="https://github.com/Envious-Data/Env-KB">Envious-Data’s Delierium</a>. It is a unique keyboard in that it utilizes a Raspberry Pi Pico, a relatively new microcontroller on the market, and merges it with the Mysterium to get a easy to design result with my style. So, I decided to merge all three keyboards into something I could actually use. I ended up with a 75% keyboard with all of the features I wanted on one PCB with some bonus’s like having a button for the power LED and a through-hole (THT) USB-C connector. I am skipping a lot of the finer details, so I do apologize if some stuff gets left out. This project took literally months.

<img src="https://i.imgur.com/imwtyWo.png" alt="PCB" />

At this point, I was disenchanted with the whole project, and I didn’t really want to continue working on it, so I started fiddling around with the firmware side of everything. I had initially wanted to use <a href="https://github.com/qmk/qmk_firmware">QMK</a>, but after seeing that it did not support the Pico yet, I was forced to use <a href="https://github.com/KMKfw/kmk_firmware">KMK</a>, which in the end was actually easier to use and bug fix. There is so much on this side, but what it comes down to is that their <a href="http://kmkfw.io/">documentation</a> is a bit rough around the edges, but superb in providing examples and information about what features you want to add.

I posted all of my firmware to <a href="https://github.com/TrojanPinata/Model-K-Pico">Github</a>, and as you can see, I wanted to implement a lot of stuff. I ended up making my own keymaps and layers. Overall, I think it works pretty well. Once I put CircuitPython onto my Pico and built a little proto mechanical keyboard off a breadboard. It became real. I did more bug testing, and then I decided on a whim to run it. I designed a switchplate and backplate, very similar to Envious-Data’s, and sent them out.

It was stressful, but after a long wait, here is the result:

<img src="https://i.imgur.com/sm7P6aJ.jpg" alt="the best shot" />

<img src="https://i.imgur.com/8z9aFxO.jpg" alt="top down" />

<img src="https://i.imgur.com/TcUVaum.jpg" alt="back" />

Overall, everything runs very smoothly, and I haven’t seen any major problems yet. During assembly, I cracked the 1.5mm acrylic switchplate in a few spots, which sucks, but is primarily hidden by the keycaps so I don’t really notice that much. I couldn’t find the right size screws which forced me to drill out all of the holes. Stuff like that was annoying, but in the end, it left me with a fantastic result I can type stuff like this page with. 

I ended up posting this whole thing on <a href="https://github.com/TrojanPinata/Model-K-Pico">Github</a>, so you can see it there. It's called the Model K-Pico as I thought it would be cute to call it something sililar to the Model M, which I love deeply and have had for a really long time. A lot more went into this than I am describing, but I think that would be too much content for this to be interesting. It’s not really necessary for the general audience to know or care why I chose 1.5mm acrylic vs 3mm acrylic or Delrin (cost lol). Anyway, cool project, cool result.

<img src="https://i.imgur.com/U2uxMqs.jpg" alt="logo/components" />

<img src="https://i.imgur.com/WDH4Dx8.jpg" alt="oled screen" />

<img src="https://i.imgur.com/dubV2il.jpg" alt="credit + stabilizer + bare PCB" />

Until next time.

<br />

### Model A & Model C

It has been around a year and a half since I wrote this page, so I thought I’d check in with some updates and other projects which are related, but do not have their own pages here for one reason or another.

To start with an update, I still use this keyboard every day and I have no plans of stopping. This board is still in fantastic condition and performs extremely well for what I use it for. I updated some of the OLED display images pretty soon after posting this to a pixelated bitmap of some mountains, but other than that everything is in the same condition. If I crack the acrylic more, I might make another, but for now it will continue doing its thing.

As obvious by the title, there are two other keyboard and keyboard adjacent projects I have been working on which I want to talk about here. The <i>keyboard</i> project I have done since has been the Model A, a 75% keyboard which I want to be the successor to the Model K. It would be primarily SMD based with hot swappable keys and an integrated RP2040. The only thing holding me back from making this a reality is the cost of getting acrylic made. If I do this, I am going to do a small run of 8-10 and make some for my friends. Each keyboard using Ponoko for laser cutting is ~$200, and its significantly more cost efficient for me to wait and buy a CNC router/laser cutter. As it stands currently, this project is postponed.

<img src="https://camo.githubusercontent.com/a98fec7b19c04b181c8c38a7c600c55fe55cbe1be50655b4e6d271184a2e6125/68747470733a2f2f692e696d6775722e636f6d2f3064454a5054592e706e67" alt="Model A PCB Layout" />

Model C on the other hand, is certainly doable, but much more technically complicated and ambitious than I had originally planned. Model C is not a keyboard, but a calculator powered by a ATmega32A and mechanical switches. The goal was to make it very similar to the <a href="https://www.switchkeys.com.au/products/tentaku-mechanical-calculator">Tentaku Mechanical Calculator</a>. This, in theory, is not very difficult, but requires some deeper understanding of microcontrollers which I do not currently have. Combine that with a bit of scope creep and this too will be postponed (I also need a laser cutter for this lmao).

<img src="https://i.imgur.com/cONYI2J.png" alt="Model C PCB Layout" />

There you go, that’s what I have been doing in the world of keyboards the past few months. I will probably do more work on the Model A in the future so look forward to that.

And as always, until next time.