---
title: "Pico HDMI"
date: "2023-01-14"
---

This project is sort of similar to my previous <a href="/projects/Oled">OLED screen project</a>, so I recommend reading that before for some context.

I want to start this project a little bit differently than my previous ones by defining my initial goals and then as we go forwards, I'll describe the compromises and changes I made to get something that works. Initially, my goal was to display a video over HDMI using a Pi Zero. The project would be another data transfer program where I connect the pi via USB and force feed it bits until I can display what I want. I even went as far as designing a sort of bit banged version which improved efficiency. This project was simple enough and I think it may work so I may do it in the future. The problem I ran into is that there is a <a href="https://www.adafruit.com/product/5291">shortage of Pi Zeros</a> on the market for reasonable prices right now.

<img src="https://i.imgur.com/5YEp9oP.png" alt="Original conceptual map for project" />

But don't worry, I can pivot. I have worked with both Arduino and CircuitPython on microcontrollers before, so I just needed to find one that had a high enough frequency to take color data over serial. The <a href="https://www.raspberrypi.com/products/raspberry-pi-pico/">Pi Pico</a> is probably the best choice currently as it has a 133MHz base clock and <a href="https://forums.raspberrypi.com/viewtopic.php?t=301902">can be overclocked</a> (albeit flash and UART become unusable). So that was the plan (for now). My new goal was to compress video data and send it to a Pi Pico over SPI and play video over some form of HDMI/VGA connection. This was a good plan in theory. If you're curious why this seems doable, search <a href="https://www.google.com/search?client=firefox-b-1-d&q=pi+pico+hdmi">"pi pico hdmi"</a> on Google and look at the results. The results show working examples and in my head this project was open and shut.

The caveat was that the library the Pico uses to run HDMI and VGA (I used HDMI which is called <a href="https://github.com/Wren6991/PicoDVI">PicoDVI</a>) is heavily overclocked and relied on a backend of C code. I had never coded in C for microcontrollers before, but I didn't see this as too much of an issue, so decided to write a python script to convert images and handle the computer side of the operation. I like python, it's super inefficient in certain ways but allows me to write code really quickly and get an idea into production really fast. I ended up writing <a href="https://github.com/TrojanPinata/hdmipico/blob/main/adapt.py">adapt.py</a> (on <a href="https://github.com/TrojanPinata/hdmipico">GitHub</a> if you want to see it) which was supposed to be a pair like the OLED project but ended up consuming itself and handling everything. The final program is a mix of failed ideas and functions that don't have a purpose because of goal changes, but I love it nonetheless.

There is a lot to this project and it is very fresh in my mind so I have to cut my thoughts a bit, but the short of it is that my code converts an image into <a href="https://en.wikipedia.org/wiki/High_color">rgb565</a> (please look it up I do not want to botch an explanation here). This compression scheme matches what the PicoDVI library uses in its examples and can display. My script saves the output and optionally sends it over a defined port as well.

<img src="https://i.imgur.com/hhXTVRU.jpg" alt="Pico w/ DVI sock (but the Adafruit version) on HDMI interface" />

The python side ended up working fine for its use, as it is very similar to the OLED project, but the Pico side fell apart. My idea was pretty much immediately smashed but the need to compile code and the shockingly low amount of ram the Pico has. That, as well as many other factors such as compression and useless flash memory diced this project up. I have pretty much given up on making this project work. I found that the PicoDVI project was too niche and the things I wanted to do required a level of low-level understanding and know how I was unprepared for. I learned a lot from trying to force this such as more <a href="https://opencv.org/">OpenCV</a>, <a href="https://cmake.org/">Cmake</a>, <a href="https://github.com/raspberrypi/pico-sdk">pico-sdk</a>, and just how awful windows is for doing any of this.

I kind of gave up on my goal of getting serial video to work, and even trying to transmit one single image was slashed as well. I wanted something to show <i>I'm not a total idiot</i>, so I modified one of the examples to display static images converted to rgb565. As a result of some of the issues, the Pico can only hold a single 320x240 image in ram uncompressed, which gives results like this.

<img src="https://i.imgur.com/v8TTk0P.jpg" alt="Henry on Pico" />

Picture of my cat Henry downsized to 320x240 and compressed to RGB565, displayed on Pico

It's not much but it's something. I try and do one project every break when I'm not at school or work. This one kind of beat me up. Hopefully it wasn't too bad of a read, I tried not to get too into the weeds. <a href="https://github.com/TrojanPinata/hdmipico">Github if you want it.</a>

Until next time.

<img src="https://i.imgur.com/P727gxV.jpg" alt="me having a breakdown after figuring out how complicated the PicoDVI codebase is" />