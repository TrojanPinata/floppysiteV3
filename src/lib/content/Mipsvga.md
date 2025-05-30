---
title: "MIPS VGA"
date: "2023-03-19"
---

This is a quick writeup for a project I could have finished but ultimately ended up running out of time. The goal was to use a <a href="https://digilent.com/reference/programmable-logic/basys-3/start">Digilent Basys 3</a> board to display a video onto a standard VGA display using the built in VGA port. I have been learning about MIPS processors lately and have been having a really good time designing my own processors, so I thought I would give it a shot. 

Before I sat down to do this, there were a few things I saw which inspired me. First, probably 3ish years ago at this point, I read and watched <a href="https://eater.net/vga">Ben Eater’s DIY video card</a>. It was one of the first projects I have ever tried on my own to replicate. I ended up using KiCAD to run the traces long before I started my degree or related projects. I now understand the protocols and methodology behind why he did some of the things the way he did, and I used the same controller concepts from here to make my basic controller. The second was a video and corresponding repository by <a href="https://github.com/T-K-233/RISC-V-Single-Cycle-CPU">T-K-233</a>, outlining a single-cycle RISC-V processor which played Bad Apple! onto an 8x8 display. This <i>clearly</i> was my inspiration for this because you can guess what I wanted to play on this. 

<img src="https://i.imgur.com/4fQTgnh.png" alt="my original schematic I made in 2020" />

As the Basys 3 has a Artix-7 on it, that’s what I was planning on designing around. The goal was to design a single-cycle MIPS processor in VHDL which would take frames stored in the data memory and store them to the frame buffer (aka another place in memory, notably the first block). The frame buffer would be overwritten each time a new frame was loaded. An image could be displayed by simple not changing the buffer’s contents.

<img src="https://i.imgur.com/54FTGCI.png" alt="vga controller" />

This plan seemed doable. I had already designed a basic MIPS processor for my computer organization class and implementing it with a custom controller outlined by the common VGA standards was easy enough. I planned to make the entire video/image binary color in order to save on space and overhead, as well as making it much more similar to the <a href="https://brianchill.us/#/Oled">OLED project</a> I did mid last year. These things combined made for a simple controller which worked well in testing. 

<img src="https://i.imgur.com/5pJ3FLj.png" alt="my mips processor" />

To get the data for my data memory module, I wrote a python script to convert a image/video into usable text which could easily be stored in the .vhd file. The result was one of the more decently written scripts I have written and taught me how unbelievably inefficient storing video in such a discrete way was. One look at the file size made me very skeptical of the Artix-7 line’s possible LUT cells (foreshadowing).

Regardless, I pushed on. I designed a simple top level design using Vivado’s block design tool, and learned another valuable lesson about why VHDL is not the preferred language of Vivado. I will be learning Verilog after this to make my life easier. The finished product was a sort of hack job, as a few <i>difficulties</i> made designing this a chore and somewhat reliant on the <a href="https://www.youtube.com/watch?v=lIFE7h3m40U">Art of the Bodge.</a>

As I said earlier, I was concerned that I would not have enough cells for the entire memory. I was correct, I was unable to run this project in its full glory because of it. The result is a sort of anti-climactic end. I wrote this entire thing in ~3 days during my break, and I will not continue it after. There is no real point to wasting my time on this while my classes beat me to death. The proper solution to make this work is to directly connect the memory to the controller and reduce the image resolution to 320x240. It would not be what I set out to do, but as always, simple is better. It is what it is.

Until next time.

<h3>Quick update</h3>

I wrote all of this down expecting return to my classes and be immediately swamped with assignments and projects. Somehow though, that has not happened (almost frustratingly). I worked some more on this, and I have something that <i>almost</i> works. Here is the <a href="https://github.com/TrojanPinata/MIPS-VGA">Github</a> repository for it. 