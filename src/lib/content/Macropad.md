---
title: "Pico-based 12-key Macropad"
date: "2024-08-28"
---

Hear me out: what if there was a reasonably easy to follow guide and kit for building keyboards with a low barrier of entry which anyone can build with the right materials and a desire to learn?

<img src="https://github.com/TrojanPinata/Macropad-Pico/blob/main/images/DSC_0714.JPG?raw=true" alt="a pretty nice photo" />

A few months ago I developed a <a href="https://github.com/TrojanPinata/Pico">custom Raspberry Pi Pico</a> with the intention of learning how to develop boards with microcontrollers and have them manufactured with PCBA. The main changes I made were for quality of life with USB-C, a reset button, and black soldermask (which is really just me being annoyed the pico on the Model-K wasn't black). This was a wild success and left me with ~30 Pi Picos which I gave to a few of my friends and use for development. Safe to say I will likely never buy another Pico.  One of my friends wanted to make a keyboard out of his and while I think that is a great I idea, it is really difficult to manufacture keyboards with traditional cases using 3D printers as the bed plate is usually too small, or extremely costly if shipped out to another company. Once I saw he wanted to make a macropad and showed me some of the things he was looking at, I started looking into what guides people follow online. To put it briefly, I was not happy.

Most of the guides online don't really make anything simple. They expect the builder to have a lot of experience soldering and manufacturing which creates a sort of barrier for those who just want to make something cool but don't have the skills. I really dislike that most of these guides don't use traditional layouts which miss things from diodes to USB-C, relying on bad placement and software fixes to fix them. What bothers me the most is the unnecessary reliance on using custom code. I don't think that is bad in a vacuum, but the people wanting to build these want to use tools and software they would actually be using to develop real keyboards (QMK, KMK, etc.).

Because of these things, I wanted to design a simple 12-key macropad which represents the F13-F24 keys and can be put together with a bit of soldering skill and access to any volume 3D printer. As pictured, the switchplate and case can both be printed on a Prusa Mini and put together using glue or M2 screws. The PCB can be bought from JLC for ~$12 or handwired, using the schematics provided in KiCad. I wanted to make the entire system accessable for anyone with different levels of access without requiring them to make modifications to my designs.

I've listed the materials and a short guide on <a href="https://github.com/TrojanPinata/Macropad-Pico">GitHub</a> as well as a <a href="https://youtu.be/6qyvscmvLPk">short video guide</a>. I hope this will make getting into the manufacturing side of the keyboard hobby easier, as well as act as a introduction for some people into soldering and possibly CAD through modifying my designs for further customization.

<img src="https://i.imgur.com/e50AqeJ.png" alt="Render" />

<img src="https://github.com/TrojanPinata/Macropad-Pico/blob/main/images/DSC_0733.JPG?raw=true" alt="on desk" />

That's it. Until next time.