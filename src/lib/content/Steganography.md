---
title: "Quick Steganography"
date: "2024-05-14"
---

I wasn't planning on making a dedicated page for this so let me give you the quick of it: I made a simple tool for encoding messages into images and generating basic encryption. It works by turning a message into a series of bits and changing out the least important bit of each color in a pixel to effectively encode the message with minimal loss (and change of a third party noticing). 

I made this mostly to prove a point of how easy it is to make something like this and create an external form of a covert channel. The tool could be better, but overall, I think that it demonstrates the point of how simple yet effective something like this can be.

See my <a href="https://github.com/TrojanPinata/steganopy">Github</a> for more info if you are interested.

<img src="/stegpic.png" alt="you are missing out" />