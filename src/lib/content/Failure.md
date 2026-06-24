---
title: "A Lesson in Failure"
date: "2026-03-28"
---

<a href=""></a>

I will begin by saying this project was not a success. The events of this story started in September 2025 and completely burnt me out on any and all projects to the point that I am only now finding the motivation to do these kinds of things again. 

A while back, I made the <a href="https://brianchill.us/projects/TinyKeeb">TinyKeeb</a> for a friend and while I was designing it, I found the process to be really fun and unique. The final product was also pretty well built, but my biggest complaint was that it was 3d printed, and by extension there is a upper limit to how good the final result could look. I tried pretty hard to sand and clean up the one I made for them, but I always felt that I could make it significantly better if I invested into optimizing the design for production at scale.

My idea stemmed from talking to my friend one day and thinking about how I would actually produce more than one at a time, while also increasing the quality to be a feasible retail product. I started by tackling the issues with the housing and keys, flattening as much as possible to make the keys easier to print and easier to press, then I redesigned the housing to improve the print quality, and devised a solution of sanding, spraying with body filler, sanding some more, painting, and finishing to make the bodies look significantly better than the first prototype. I was really happy with this, so I also designed a new PCB compared to the first one which would make putting them together easier and overall streamline the process. The hardest part of the first design was that I had to manually solder every switch in by hand, and I had to have wires running to a Pi Pico behind the board to make it function. I designed everything to get away from that, and I was super excited to try my new production methods and make a couple of these to sell. I’ve always wanted to get into selling the things I make, but I don’t want them to feel cheap or break easily, so this felt like a good time to try it out.

<img src="https://i.imgur.com/s78jCXY.jpeg" alt="improved housing and keycaps" />

A couple of things happened at this stage in development. I am a very budget conscious person, and by extension I keep very detailed spreadsheets of costs and potential returns for projects like this. The biggest issue with my design, was that it was time intensive (for the housing). Paints did cost a bit, but that was by no means the bulk of the cost. Also, the PCB was only ~$36, so crunching all of the numbers, I could sell these for $80 and make a cool $40 per keyboard I make after selling a small run of 10. Scaling definitely helps offset costs, and I felt like this was a good amount to make back my investment. I should note, I was fully okay with losing this money on this project, all of my projects are losses, and this was no different in my head. I am really just doing this the love of the game and I wanted to see if it was even possible to sell something I made.

Here is where the issues start. The plan looked good. In my head, it made sense to increase the quality, charge a little more, and make something I was proud of. However, this increase in quality also increased the amount of time working on the housing from a couple of hours, to a couple of days. My calculations did not account for labor, and at the rate I was going at, I was only paying myself $2.29 per hour. But not only that, there were things outside of my control which would end up killing this project’s feasibility completely.

Earlier in 2025, the US imposed a 145% tariff on everything coming from China. This includes PCBs. Like the ones I needed for this project. With the price after assembly being $50, the total ended up not being $122, but rather $454 to get ten PCBs made for this project. The reason for this increase was the cost of getting components increasing combined with the need for a different shipping method since all of the existing shipping lanes closed down. Through some finagling, I was able to reduce the board footprint and costs down to $131, and I just sent it. I figured I would at least do the project and solder everything by hand. This way, even though the amount I was paying myself was effectively $0, I could at least make a cool post here about how I sold something and learned business.

(Note: I received criticism for not using a PCB manufacturer in the US, but they are more expensive then manufacturers in China with the tariffs so why would I do that? Oshpark is constantly recommended to me but they are significantly more expensive and they only offer purple. Other services wouldn’t accept my design because of the low quantity (which is crazy since that is basically all hobbyist business). These companies need to have lower minimums, a comparable selection of options, and a user friendly UI like some of the companies in China for me to actually want to use them, not to mention acceptable pricing for hobbyists like me who don’t need quick turnaround.)

So I ordered the boards, my pockets significantly lighter, and I manufactured all of the housings. I’m really proud of the quality of the painting I did on these housings, but it’s really made me want a SLS printer to just make a finished product without too much post processing. I think in the future I am going to try resin casting so I only need to make one master and copy it all into a better plastic, but that will not be for a while since the equipment is expensive.

Once the PCBs arrived, I then soldered all of the switches down (I was using the super low force Omron switches and they were like $100 for 650, yes I was pretty in the red at this point). I then soldered on the Pi Picos onto the back like sort of backpacks to the primary PCB so I could reduce the amount of wires I needed to run.

<img src="https://i.imgur.com/tApasgT.jpeg" alt="all colors in a row" />

And with that, the boards were complete! Except, none of them work. Why? Because the Pi Pico’s being soldered to the back of the PCBs were too large for the tiny cases, and pressed up against the housing, disconnecting the contacts with the compression force. In other words, if the user presses a key too hard the keyboard sometimes stops working. Great! This was fixable on most keyboards, but not all. I managed to get seven fixed up, and I was still going to sell them, but just to friends.

<img src="https://i.imgur.com/7Yj9ipQ.jpeg" alt="peter, what are you doing!?" />

Except what’s this? A crack? How did this get there??? Well it turns out, the amount of body filler and paint I had to use to fix the housings was so much larger than expected, that the generous tolerances I left for the fit of the board into the case were too small, and the PCBs put so much outward pressure on the cases that they split along the layer lines. Not only that, I didn’t notice because this wasn’t an issue inside my house, but the cold temperatures of November caused the housings to contract around the PCB and become more brittle.

At this point, I now have four uncracked housings and seven working boards, so I combined them and gave a few away to some friends. I can’t sell them because they are effectively broken, and the PCBs are unreliable due to the compression such that I would not trust someone unrelated to me to care to fix it if it breaks.

So where does this leave me? Well, I definitely think I am going to invest in a better 3d printer. If my printer was better, I wouldn’t have needed to do so much post processing, but not only that, I am going to try to do some more novel production techniques like casting and laser cutting. I need to get better at designing for manufacturing and understanding how to simplify production to reduce costs and time.

This has been one of the most valuable learning experiences I have had with a project like this. I hope that one day when I have a great idea which is marketable and well thought out, I will have the knowledge and experience to make it the way I envision it and in a way that other people can enjoy it as a serious product. 

Until next time.

<img src="https://i.imgur.com/gCOVbbG.jpeg" alt="they are very pretty though" />