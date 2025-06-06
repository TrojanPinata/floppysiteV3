---
title: "Lights"
date: "deprecated"
---

So let's get this straight first. Why do I care about my lights so much?

Believe it or not, I didn't just buy my lights off of amazon and call it a day. No no no. I, <i>for some reason,</i> thought it would be a good idea to try and replicate <a href="https://nanoleaf.me/en-US/">nanoleaves</a> (spoiler alert: it took me way more time, filament, and burn fingers then I think was worth it, so it gets a spot here, so I can at least show off my, albeit not that great, jerry rigging and soldering skills).

Before anything, <a href="https://www.thingiverse.com/thing:4686921">here are the stl files I used</a>. Now, I had a general idea of how I wanted to accomplish this recreation, and I knew there were a few trade offs I had to get over first. First thing: for usability and longevity, I built this to work with 12V, 4 wire lights (<a href="https://www.amazon.com/Daybetter-Lights-Control-Bedroom-Changing/dp/B08JSFH1G6">like these</a>). This means I use a junction box which has a IR receiver and remote to control everything. This removes all of the complexity of using Arduino, Pis, or my favorite ESP8266s. A old mentor of mine once said, <i>keep it simple stupid,</i> and while I hate to admit it, KISS is one of the best mottos I have ever implemented in any of my projects. I have a switched power strip which I connect the main LED controller, and when something needs to turn off, I flick a switch. *click* Done. So, by utilizing this sort of backend, I can make complex single-color LED fixtures without much redesigning and fruitless coding. And the second important thing: everything non-electrical must be 3D printed.

Nanoleaf. Yes, back to Nanoleaf. I really liked the design and style the $300 panels, but who can afford that? So my build utilized already existing STLs and parts I already owned. Thus, no overhead and long prints made this project a backburner project while I ran the DIY Mic project. Project went fine, yada yada go read the write-up on Github (sidenote: I wrote the original version of that in a YouTube comment section and I will never do that again). After I finished that project, I kind of really hated the idea of soldering, so I put it on break until Thanksgiving. I spent a whole week soldering the LED strips together and taping them to their triangles. There weren't really any upsets during this, it was just really, <i>really</i> boring. And then at the very end, I slapped some hot glue between the panels and ran a cable to the main controller. I don't think any of my soldering is exactly the safest, per say, but it hasn't gotten hot since I have finished it. The fixture only works on red due to my inability at the time to buy new soldering tips and accidently bridging a joint somewhere, but I never change it off red so ¯\_(ツ)_/¯.

<img src="https://i.imgur.com/OTyI22f.jpg" alt="n an o" />

But what's that? You don't think that's enough to be worth a portfolio post? Well guess what, I use this backend literally everywhere. In fact, right before I sat down to write this, I finished my Nintendo sign and started work on something new (this time with custom files!).

<img src="https://i.imgur.com/3nsyONY.jpg" alt="a dmca claim in the making" />

As you can probably tell, this is my background project which I do whenever I have a flash of inspiration. I don't think this is anything too cool, but idk I think it's pretty neat.

Edit: As of 03/29/2022, I have finished the project I was working on. It is just a simple light bar that runs on the same backend and everything. It's cheap to be honest. I literally used a old apple iPod touch charger to run the 12v cable (which hopefully won't burn down my house) and it's pretty nice. I won't post any pictures because why would I, but take my word for it, I like how they came out and I think it was a neat project.</Fade>