---
title: "Zipf's Law"
date: "2022-07-18"
---

This is going to be a different kind of page for this little personal site. I’m currently in the middle of a much larger project, but I was recently going over some abstract ways of sorting data for a different kind of project than I’ve ever done before, when I was reminded of a very strange natural law. In language, alphabets, physics, and natural distributions, there is sometimes, no, a lot of the time, a tendency for data to fall into what is called a Zipfian distribution, and thus Zipf’s Law. 

To explain in a somewhat digestible manner, these natural and even man-made concepts and tools will more likely than not fall into a close to perfect logarithmic distribution, where the most common item in a set is twice as likely to appear as the second most common, and three times as likely to appear as the third most, and so on and so forth. And this is a harsh generalization of the law. (<a href="https://en.wikipedia.org/wiki/Zipf%27s_law">Wikipedia link so I don’t have to explain it all</a>) Just know that the number of instances of an item in a set of data follows a number n1(1/nr), where n1 is the most common item, and nr is the number at a given rank. To me, this is interesting as it is, but I am more interested in applying this. 

The first thing I thought to do was to break down large data sets like the using all of the information from Wikipedia or something. But I really don’t want to spend all of the time and energy trying to figure out a way to get every single Wikipedia page’s word breakdown and sort it all into a excel spreadsheet. That sounds… rough. But I did still want to use a larger piece of literature, so I chose Ulysses by Janice Joyce. Honestly, I have gotten about one fifth the way through this (it’s really tough), and I thought that instead of finishing it, why don’t I just take the break down and see if it satisfies the law? 

In order to do this, I decided to use a python script to break it into its individual words, clean them up, sort, and rank them. Which does in fact work. I will say this, however. If I were to do this again, I would use C or something faster. The script is on <a href="https://github.com/TrojanPinata/zipf">github</a> if you want to check it out, but it is very slow, breaking this whole thing apart in 15 minutes. That’s mostly because I wrote sloppy code (I guess), but the way python preforms and the sheer amount of data to be sorted (263,346 words) made this slightly annoying. 

But in the end, my relatively simple code outputs some really interesting, but expected results. Here is the list of the <a href="https://en.wikipedia.org/wiki/Most_common_words_in_English">top 50 most common words</a> and here is my <a href="https://i.imgur.com/Hy7Zogu.png">output list</a>. Pretty similar, eh? In fact, it even aligns with the logarithmic principle Zipf’s law applies to. Here is the curve when plotted with Excel. 

<img src="https://i.imgur.com/bDfezKQ.png" alt="Zipfian curve" />

I find this really interesting in both the principle and how easy it was for me to get my own data. I wanted to see how professional sources stack up and I was planning to post all of the trials I ran, but in reality, the data is kind of boring. Its all the exact same thing, same rank, with a few outliers and different total word count. The most interesting thing I put through my script was my own <a href="https://i.imgur.com/tV8hCd9.png">paper from high school</a>, and sure enough it had the exact same result. Overall, it’s kind of scary. There is the common saying that if a chimpanzee were to sit at a typewriter long enough, it could write Shakespeare. Probably. It would also probably take a long time. But if that very same chimpanzee were to use this law when typing random words, it would most likely accomplish this very same thing in half of the time.

Anyway, as one final note on this aside, <a href="https://i.imgur.com/ph800wI.png">here is the breakdown of all of the words on this page.</a> Pretty creepy, huh? 

Until next time.