Chapter 1: Introduction
0:00- So I was trying to figure out how to do photorealistic AI photos and it was... Stable Diffusion by itself is not doing that well. The faces look all mangled- - Yeah.
0:088 seconds- And it doesn't have enough resolution or something to do that well. But I started seeing these base models, these fine tune models, and people would train them on porn,
0:1616 secondsand I would try them, and they would be very photorealistic. They would have bodies that actually made sense, like body anatomy.
0:2525 secondsBut if you look at the photo realistic models that people use now, still, there's still core of porn there, of naked people- - Yeah. - So I need to prompt out the naked,
0:3232 secondsand everyone needs to do this with AI startups with imaging. You need to prompt out the naked stuff.
0:3636 seconds- You have to keep reminding the model you need to put clothes on the thing. - Yeah, don't put naked 'cause it's very risky. I have Google Vision- - Yeah.
0:4242 seconds- That checks every photo before it's shown to the user to like check for NSWF. - Like nipples detector? Oh, NSFW detector. (chuckles) - Because the journalist gets very angry.
0:5252 seconds- The following is a conversation with Pieter Levels, also known on X as levelsio.
0:5959 secondsHe is a self-taught developer and entrepreneur who designed programs shipped and ran over 40 startups,
1:061 minute, 6 secondsmany of which are hugely successful.
1:091 minute, 9 secondsIn most cases, he did it all by himself while living the digital nomad life in over 40 countries, in over 150 cities,
1:191 minute, 19 secondsProgramming on a laptop while chilling on a couch,
1:221 minute, 22 secondsusing Vanilla HTML, jQuery, PHP, and SQLite He builds and ships quickly and improves on the fly,
1:321 minute, 32 secondsall in the open, documenting his work,
1:351 minute, 35 secondsboth his successes and failures with a raw honesty of a true indie hacker.
1:401 minute, 40 secondsPieter is an inspiration to a huge number of developers and entrepreneurs who love creating cool things in the world that are hopefully useful for people.
1:501 minute, 50 secondsThis was an honor and a pleasure for me. This is the "Lex Fridman Podcast."
1:551 minute, 55 secondsTo support it, please check out our sponsors in the description. And now, dear friends, here's Pieter Levels.
Chapter 2: Startup philosophy
2:032 minutes, 3 secondsYou've launched a lot of companies and built a lot of products. As you say, most failed, but some succeeded.
2:102 minutes, 10 secondsWhat's your philosophy behind building the startups that you did?
2:142 minutes, 14 seconds- I think my philosophy is very different than most people in startups. 'Cause most people in startups, they build a company and they raise money, right? And they hire people,
2:222 minutes, 22 secondsand then they build a product, and they find something that makes money. I don't really raise money. I don't use VC funding. I do everything myself. I'm a designer.
2:302 minutes, 30 secondsI'm the developer. I make everything, I make the logo. So for me, I'm much more scrappy. And because I don't have funding, I need to go fast.
2:382 minutes, 38 secondsI need to make things fast to see if an idea works, right? I have an idea in my mind and I build it, build like a micro, mini startup.
2:472 minutes, 47 secondsAnd I launch it very quickly, like within two weeks or something of building it, and I check if there's demand. And if people actually sign up, and not just sign up,
2:542 minutes, 54 secondsbut if people actually pay money, right? They need to take out their credit cards, pay me money, and then I can see if the idea is validated.
3:023 minutes, 2 secondsAnd most ideas don't work, like as you say, most fail.
3:053 minutes, 5 seconds- So there's this rapid iterative phase where you just build a prototype that works, launch it. - Yeah. - See if people like it,
3:133 minutes, 13 secondsimproving it really, really quickly to see if people like it a little bit more enough to pay, and all that. That whole rapid process is how you think of.
3:203 minutes, 20 seconds- Yeah, I think it's very rapid, and it's like if I compare to, for example, Google, like big tech companies. Especially Google right now is kind of struggling.
3:293 minutes, 29 secondsThey made transformers. They invented all the AI stuff years ago, and they never really shipped. They could have shipped ChatGPT, for example, I think I heard in 2019,
3:373 minutes, 37 secondsand they never shipped it because they were so stuck in bureaucracy. But they had everything, they had the data, they had the tech, they had the engineers, and they didn't do it.
3:463 minutes, 46 secondsAnd it's because these big organizations, it can make you very slow. So being alone by myself on my laptop, in my underwear in a hotel room or something,
3:553 minutes, 55 secondsI can ship very fast, and I don't need to ask legal for like, "Oh, can you vouch for this?" I can just go and ship.
4:024 minutes, 2 seconds- Do you always code in your underwear? Your profile picture, you're slouching-
4:074 minutes, 7 seconds- Yeah. - On a couch in your underwear, chilling on a laptop. - No, but I do wear shorts a lot,
4:114 minutes, 11 secondsand I usually just wear shorts and no T-shirt 'cause I'm always too hot. I'm always overheating.
4:164 minutes, 16 seconds- Thank you for showing up not just in your underwear but- - Yeah. - Wearing shorts. - And I'm still wearing this for you, but- - Thank you. Thank you for dressing up.
4:234 minutes, 23 seconds(Pieter chuckles) - Since I go to the gym, I'm always too hot. - What's your favorite exercise in the gym? - Man, overhead press. - Overhead press like shoulder press? - Yeah. - Okay.
4:314 minutes, 31 seconds- But it feels good 'cause you win, 'cause when you- (Lex laughs) I do 60 kilos. - Yeah. - So it's like 120 pounds or something.
4:384 minutes, 38 secondsIt's my only thing I can do well in the gym. And you stand like this and you're like, "I did it," like a winner pose. - It's victory thing. Yeah. - The victory pose.
4:464 minutes, 46 secondsI do bench press, squat, deadlifts. (Lex and Pieter laughs) - Hence the mug. - Yes. - Talking to my therapist. - Yeah. - It's a deadlift. - Yeah. Because it acts like therapy for me.
4:544 minutes, 54 seconds- [Lex] Yeah, yeah, it is. - Which is controversial to say. If I say this on Twitter, people get angry, - Physical hardship is a kind of therapy.
4:594 minutes, 59 seconds- Yeah. - I just rewatched "Happy People" A Year In The Taiga," that Werner Herzog film,
5:075 minutes, 7 secondswhere they document people that are doing trapping.
5:105 minutes, 10 secondsThey're essentially just working for survival in the wilderness year round. - Yeah. - And there's a deep happiness to their way of life-
5:175 minutes, 17 seconds- Yeah. - Because they're so busy in it, in nature. - Yeah, 100%. - There's something about that physical- - Physical, yeah. - Toil.
5:255 minutes, 25 seconds- Yeah, my dad taught me that. My dad always did construction in the house. He's always renovating the house.
5:315 minutes, 31 secondsHe breaks through one room and then he goes to the next room,
5:345 minutes, 34 secondsand he is just going in a circle around the house for the last 40 years.
5:385 minutes, 38 secondsSo he is always doing construction in the house and it's his hobby. He taught me, when I'm depressed or something, he says, "Get a big," what do you call it?
5:475 minutes, 47 secondsLike a big mountain of sand or something from construction,
5:495 minutes, 49 secondsand just get a shovel and bring it to the other side and just do physical labor, do hard work,
5:575 minutes, 57 secondsand do something. Set a goal, do something. And I kind of did that with startups too. - Yeah, construction is not about the destination, man.
6:056 minutes, 5 secondsIt's about the journey. - Yeah. (chuckles)
6:076 minutes, 7 seconds- Sometimes I wonder people who are always remodeling their house. Is it really about the remodeling or- - [Pieter] No, no, its not. - Is it about the project? - It's the journey. - The puzzle of it.
6:146 minutes, 14 seconds- No, he doesn't care about the results. Well, he shows me, he's like, "It's amazing." I'm like, "Yeah, it's amazing." But then he wants to go to the next room.
6:216 minutes, 21 secondsBut I think it's very metaphorical for work, 'cause I also, I never stop work. I go to the next website, or I make a new one, right? or I make a new startup.
6:306 minutes, 30 secondsSo I'm always like... To give you something to wake up in the morning,
6:336 minutes, 33 secondsand like, have coffee and then kiss your girlfriend, and then you have like a goal. Today I'm gonna fix this . Today I'm gonna fix this bug or something.
6:426 minutes, 42 secondsI'm gonna do something. You have something to wake up to.
6:446 minutes, 44 secondsAnd I think maybe especially as a man, also women, but you need a hard work. You need like an endeavor, I think.
6:526 minutes, 52 seconds- How much of the building that you do is about money? How much is it about just a deep internal happiness? - It's really about fun,
7:007 minutes'cause I was doing it when I didn't make money, right? That's the point. So I was always coding, I was making music. I made electronic music, drum bass music 20 years ago,
7:087 minutes, 8 secondsand I was always making stuff.
7:117 minutes, 11 secondsSo I think creative expression is like a meaningful work that's so important. It's so fun.
7:167 minutes, 16 secondsIt's so fun to have like a daily challenge where you try figure stuff out.
7:207 minutes, 20 seconds- But the interesting thing is you built a lot of successful products and you never really wanted to take it to that level where you scale real big- - Yeah.
7:307 minutes, 30 seconds- And sell it to a company or something like this. - Yeah, the problem is I don't dictate that, right? If more people start using it,
7:357 minutes, 35 secondsif millions of people suddenly start using it and it becomes big, I'm not gonna say, "Oh, stop signing up to my website and pay me money." But I never raised funding for it.
7:447 minutes, 44 secondsAnd I think, 'cause I don't like the stressful life that comes with it.
7:477 minutes, 47 secondsI have a lot of founder friends and they tell me secretly. With hundreds of millions of dollars in funding and stuff,
7:567 minutes, 56 secondsthey tell me, "Next time, if I'm gonna do it,
7:587 minutes, 58 secondsI'm gonna do it like you because it's more fun, it's more indie, it's more chill, it's more creative." They don't like to be manager, right?
8:068 minutes, 6 secondsYou become like a CEO, you become a manager. And I think a lot of people that start startups, when they become a CEO, they don't like that job actually,
8:148 minutes, 14 secondsbut they can't really exit it. But they like to do the groundwork, the coding. So I think that keeps you happy,
8:228 minutes, 22 secondsdoing something creative. - Yeah, it's interesting how people are pulled towards that, to scale to go really big,
8:298 minutes, 29 secondsand you don't have that honest reflection with yourself, like what actually makes you happy? 'Cause for a lot of great engineers, what makes them happy is the building,
8:388 minutes, 38 secondsthe quote, unquote, "individual contributor."
8:408 minutes, 40 seconds- Yeah. - like where you're actually still coding or you're- - Yeah. - Actually still building. And they let go of that, and then they become unhappy,
8:488 minutes, 48 secondsbut some of that is the sacrifice needed to have a impact at scale if you truly believe in a thing you're doing. - But look at Elon.
8:568 minutes, 56 secondsHe's doing things million times bigger than me, and would I wanna do that? I don't know, you can't really choose these things, right?
9:039 minutes, 3 secondsBut I really respect that. I think Elon's very different from VC founders. VC, it's like software. There's a lot of bullshit in this world, I think. There's a lot of there's dodgy,
9:129 minutes, 12 secondsfinance stuff happening there, I think. And I never have concrete evidence about it,
9:169 minutes, 16 secondsbut your gut tells you something's going on with companies getting sold to- - Yeah. - Friends and VCs,
9:219 minutes, 21 secondsand then they do reciprocity and this shady financial dealings. With Elon, that's not.
9:279 minutes, 27 secondsHe's just raising money from investors and he's actually building stuff. He needs the money to build stuff, hard hardware stuff, and that I really respect.
Chapter 3: Low points
9:349 minutes, 34 seconds- You said that there's been a few low points in your life. You've been depressed, and building is one of the ways you get out of that. Can you talk to that?
9:429 minutes, 42 secondsCan you take me to that place, that time when you were at a low point? - So I was in Holland and I graduated university, and I didn't wanna get a normal job,
9:519 minutes, 51 secondsand I was making some money with YouTube 'cause I had this music career and I uploaded my music to YouTube. And YouTube started paying me with AdSense, like $2,000 a month, $3,000 a month.
10:0010 minutesAnd all my friends got normal jobs, and we stopped hanging out, 'cause people would, like in university, hang out, chill at each other's houses,
10:0810 minutes, 8 secondsyou go party. But when people get jobs, they only party in the weekend,
10:1210 minutes, 12 secondsand they don't hang anymore in the week 'cause you need to be at the office. And I was like, "This is not for me. I wanna do something else." And I was starting getting this like,
10:1910 minutes, 19 secondsI think it's like Saturn return when you turn 27.
10:2210 minutes, 22 secondsIt's like some concept where Saturn returns to the same place in the orbit that it was when you're born. - I'm learning so many things. - [Pieter] It's some astrology thing.
10:3010 minutes, 30 seconds- So many truly special artists died when they were 27. - [Pieter] Exactly, there's something with 27, man. And it was for me. I started going crazy- - Yeah.
10:3810 minutes, 38 seconds- Because I didn't really see my future in Holland, buying a house, going living in the suburbs, and stuff. So I flew out, I went to Asia, started digital nomading,
10:4610 minutes, 46 secondsand did that for a year. And then that made me feel even worse, 'cause I was like alone in hotel rooms, looking at the ceiling.
10:5410 minutes, 54 secondsWhat am I doing with my life? I was working on startups and stuff on YouTube, but what is the future here?
11:0411 minutes, 4 secondsWhile my friends in Holland were doing really well and living normal life.
11:0911 minutes, 9 secondsSo I was getting very depressed and I'm like an outcast. My money was shrinking. I wasn't making money anymore a lot. I was making $500 a month or something,
11:1611 minutes, 16 secondsAnd I was looking at the ceiling thinking like, "Now I'm 27, I'm a loser." And that's the moment when I started building startups.
11:2511 minutes, 25 secondsAnd it was because my dad said, "If you're depressed, you need to get sand, get shovel, start shoveling, doing something. You can't just sit still."
11:3211 minutes, 32 secondsWhich is kinda like a interesting way to deal with depression. It's not like, "Oh, let's talk about it." It's more like, "Let's go do something."
11:3911 minutes, 39 secondsAnd I started doing a project called 12 Startups in 12 Months where every month I would make something, like a project, and I would launch it with Stripe,
11:4811 minutes, 48 secondsso people could pay for it. - So the basic format is try to build a thing,
11:5211 minutes, 52 secondsput it online, and put Stripe to where you can pay money for it. - Yeah, add a Stripe... I'm not sponsored by Stripe, but add a Stripe checkout button.
11:5811 minutes, 58 seconds- Is that still the easiest way to just like pay for stuff, Stripe? - 100%, I think so, yeah. - It's a cool company. They just made it so easy. You can just click and- - Yeah.
12:0712 minutes, 7 secondsAnd they're really nice. The CEO, Patrick, is really nice.
12:0912 minutes, 9 seconds- Behind the scenes, it must be difficult to actually make that happen because that used to be a huge problem. - [Pieter] Merchant.
12:1612 minutes, 16 seconds- Just adding a thing, a button where you can pay for a thing. - Dude. - It's- - Dude, I know this because when I was- - Trustworthy. - Nine years old,
12:2412 minutes, 24 secondsI was making websites also, and I tried to open a merchant account. There was like before Stripe you would have like, I think it was called Worldpay.
12:3312 minutes, 33 secondsSo I had to fill out all these forms,
12:3512 minutes, 35 secondsand then I had to fax them to America from Holland with my dad's fax. It was on my dad's name, and he had to sign for this,
12:4312 minutes, 43 secondsand he started reading these terms and conditions, which is he's liable for 100 million in damages. And he's like, "I don't wanna sign this." I'm like, "Dad, come on, I need a merchant account.
12:5112 minutes, 51 secondsI need to make money on the internet." - Yeah. (chuckles) - And he signed it, and we faxed it to America, and I had a merchant accounts, but then nobody paid for anything, so that was the problem,
12:5912 minutes, 59 secondsBut it's much easier now. You can sign up, you add some codes, and yeah. - So 12 startups in 12 months. - [Pieter] Yeah.
Chapter 4: 12 startups in 12 months
13:0713 minutes, 7 seconds- Startup number one, what was that? What were you feeling? Were you sitting behind the computer,
13:1413 minutes, 14 secondshow much do you actually know about building stuff at that point?
13:1813 minutes, 18 seconds- Well, I could code a little bit 'cause I did the YouTube channel and I made a website for... I would make websites for the YouTube channel. It was called "Panda Mix Show."
13:2613 minutes, 26 secondsAnd it was like these electronic music mixes, like dubstep, or drum bass, or techno house. - [Lex] I saw one of them had Flash. Were you using Flash? - Yeah, my album, my CD album was using Flash.
13:3413 minutes, 34 secondsYeah, yeah. - Yeah. - I sold my CD, yeah. - Kids, Flash was a- - Flash was cool. - Software. This is the break that- - Yeah, like grandpa, but Flash was cool. - Yeah, and there was...
13:4313 minutes, 43 secondsWhat it is called? Boy, I should remember this ActionScript.
13:4513 minutes, 45 secondsThere's some kind of programming language - Script, yeah, yeah, ActionScript. - Oh, yeah. - It was in Flash. Back then that was the JavaScript. - The JavaScript, yeah. - Yeah. And I thought that's gonna,
13:5313 minutes, 53 secondsthat's supposed to be the dynamic thing that takes over the internet. - Yeah. - I invested so many hours in learning that. - And Steve Jobs killed it. - Steve Jobs. - Steve Jobs said, "Flash Sucks, stopped using it."
14:0114 minutes, 1 secondEveryone is like, "Okay." - That guy was right though, right? - Yeah, I don't know, yeah. Well, it was a closed platform I think and-
14:0814 minutes, 8 seconds- Closed. - But this is ironic 'cause Apple, they're not very open.
14:1114 minutes, 11 seconds- Right. - But back then Steve want was like, this is closed. We should not use it. And it's a security problems I think, which sounded like a cop out.
14:1714 minutes, 17 secondsI just wanted to say that to make it look kind of bad. But Flash was cool, yeah. - Yeah, it was cool for a time. - Yeah. - Listen,
14:2514 minutes, 25 secondsanimated GIFs were cool for a time too.
14:2614 minutes, 26 seconds- Yeah. - They came back in a different way. - Yeah. - As a meme though.
14:3014 minutes, 30 secondsI mean like, I even remember when GIFs were actually cool, not ironically cool. - Yeah. - There's like,
14:3714 minutes, 37 secondson the internet you would have like a dancing rabbit or something like this. - [Pieter] Yeah. - And that was really exciting. - No, you had like the Lex homepage.
14:4514 minutes, 45 secondsEverything was centered. - Yeah.
14:4614 minutes, 46 seconds- And you had like Pieter's homepage and on the construction.
14:5014 minutes, 50 seconds- Yeah. - GIF which was like a guy with a helmet and the lights. It was amazing. - And there banners. Yeah, that's before like Google AdSense,
14:5814 minutes, 58 secondsyou would've like banners for advertising. - It was amazing, yeah. - And a lot of links to porn I think. - Yeah. - Or porny type things. - I think that devil's squared,
15:0515 minutes, 5 secondsand merchant accounts people would use for, people would make money a lot. Only money made on internet was like porn or a lot of it. - Yeah, it was a dark place.
15:1415 minutes, 14 secondsIt's still a dark place. - Yeah. - But there's beauty in the darkness. Anyway, so you did some basic HTML.
15:2015 minutes, 20 seconds- Yeah, yeah, but I had to learn the actual like coding. So this was good. It was a good idea to like launch startup,
15:2715 minutes, 27 secondsso I could learn the codes, learn basic stuff.
15:3115 minutes, 31 secondsBut it was still very scrappy 'cause I didn't have time to, which is on purpose. I didn't have time to spend a lot of, I had a month to do something, so I couldn't spend more than a month.
15:3815 minutes, 38 secondsAnd I was pretty strict about that. And I published it as a blog post.
15:4115 minutes, 41 secondsSo people, I think I put it on Hacker News and people would check kinda like, oh, did you actually, you know. I felt like accountability, 'cause I put it public, that I actually had to do it.
15:5015 minutes, 50 seconds- Do you remember the first one you did? - I think it was Play My Inbox, 'cause back then my friends, we would send like cool...
15:5715 minutes, 57 secondsIt was before Spotify, I think, we would send like... 2013, we would send music to each other, like YouTube links. This is a cool song, this is a cool song.
16:0516 minutes, 5 secondsAnd it was these giant email threads on Gmail. And they were like unnavigable. So I made an app that would log into your Gmail,
16:1216 minutes, 12 secondsget them emails and find ones of YouTube links and then make kinda like a gallery of your songs. Essentially Spotify,
16:2016 minutes, 20 secondsand my friends loved it. - Was it scraping it? Like what was API? - No, it uses like a POP like POP or IMAP, Actually check your email,
16:2816 minutes, 28 secondsso that like privacy concerns, 'cause it would get all your emails to find YouTube links. But then I wouldn't save anything. But that was fun.
16:3716 minutes, 37 secondsAnd that first product already would get pressed, when think like some tech media and stuff. And I was like, that's cool. It didn't make money,
16:4416 minutes, 44 secondsthere was no payment button, but actually people using it. I think tens of thousands of people used it. - That's a great idea.
16:5216 minutes, 52 secondsI wonder why, why don't we have that?
16:5516 minutes, 55 secondsWhy don't we have things that access Gmail and extract some useful aggregate information. - Yeah, yeah, you could tell Gmail,
17:0317 minutes, 3 secondsdon't give me all the emails, just give me the ones with YouTube links- - Yeah. - Or something like that.
17:0617 minutes, 6 seconds- Yeah, I mean there is a whole ecosystem of apps you can build on top of the Google. - Yeah. - But people don't really- - [Pieter] Never do this, I've ever see them. - They build...
17:1417 minutes, 14 secondsI've seen a few, like Boomerang, there's a few apps that are like good, but just- - Yeah. - I wonder what... Maybe it's not easy to make money.
17:2217 minutes, 22 seconds- I think it's hard to get people to pay for these like extensions and plugins, you know. - Yeah. - 'Cause it's not a real app, so it's not like people don't value it. People value, oh this...
17:2917 minutes, 29 secondsAnd a plugin should be free.
17:3017 minutes, 30 secondsWhen I want to use a plugin in Google Sheets or something, I'm not gonna pay for it. It should be free.
17:3517 minutes, 35 secondsBut if you go to a website and you actually, okay, I need this product, I'm gonna pay for this 'cause it's a real product. So even though it's the same code in the back. It's a plugin.
17:4417 minutes, 44 seconds- Yeah, I mean you could do it through extensions, like Chrome extensions through from the browser. - Yeah, but who pays for Chrome extensions, right? - Nobody. - Barely anybody. - [Lex] Nobody.
17:5217 minutes, 52 seconds- That's not a good place to make money, probably. - Yeah, that sucks. - Chrome extension should be a extension for your startup. You know, you have a product. - Yeah. - Oh, we also have a Chrome extension.
18:0118 minutes, 1 second- I wish the Chrome extension would be the product. I wish Chrome would support that. - [Pieter] Yeah. - Where you could pay for it easily.
18:0818 minutes, 8 secondsBecause imagine, I can imagine a lot of products that would just live as extensions, like improvements for social media. - Yeah. - A thing that-
18:1618 minutes, 16 seconds- It's GPTs. - GPTs, yeah. - Like these ChatGPTs, they're gonna charge money for now. And you get a rev share, I think from OpenAI. I made a lot of them also.
18:2418 minutes, 24 seconds- Why? We'll talk about it. - Yeah. - So let's rewind back. (Pieter laughs) It's a pretty cool idea to do 12 startups in 12 months. What's it take to build a thing in 30 days?
18:3418 minutes, 34 secondsAt that time, how hard was that?
18:3718 minutes, 37 seconds- I think the hard part is figuring out what you shouldn't add, right? Which you shouldn't build because you don't have time. So you need to build a landing page. Well, you need to make the... (Lex laughs)
18:4518 minutes, 45 secondsYou need to build the product actually, 'cause it need to be something they pay for. Do you need to build a login system? Maybe no, maybe you can build some scrappy login system.
18:5418 minutes, 54 secondsFor Photo AI, you sign up, you pay, Stripe checkout, and you get a login link. And when I started out,
19:0019 minutesthere was only a login link with a hash and that's just a static link. So it's very easy to log in. - Yeah. - It's not so safe.
19:0519 minutes, 5 secondsWhat if you link the link and now I have real Google login, but that took like a year. So keeping it very scrappy is very important too, because you don't have time.
19:1319 minutes, 13 secondsYou need to focus on what you can build fast. So money, Stripe, build a product, build a landing page.
19:2219 minutes, 22 secondsYou need to think about how are people gonna find this? So are you gonna put it on Reddit or something?
19:2619 minutes, 26 secondsHow are you gonna put it on Reddit without being looked at as a spammer, right? If you say, "Hey, this is my new startup, you should use it." No, nobody gets deleted.
19:3519 minutes, 35 secondsMaybe if you find a problem that a lot of people on Reddit already have and sub-Reddit, and you solve that problem and say,
19:4119 minutes, 41 seconds"Sub-people, I made this thing that might solve your problem and maybe it's free for now." That could work.
19:4819 minutes, 48 secondsBut you need to be very narrow it down, what you're building. - Time is limited. - Yeah. - Actually, can we go back to the,
Chapter 5: Traveling and depression
19:5719 minutes, 57 secondsyou laying in a room feeling like a loser? - [Pieter] Yeah.
20:0020 minutes- I still feel like a loser sometimes Can you speak to that feeling, to that place of just like,
20:1020 minutes, 10 secondsfeeling like a loser?
20:1220 minutes, 12 secondsBecause I think a lot of people in this world are laying in a room right now listening to this. - Yeah, yeah, yeah. - And feeling like a loser.
20:1820 minutes, 18 seconds- Okay, so I think it's normal if you're young that you feel like a loser, first of all. - Especially, when you're 27. - Yes. Yeah, especially. - There's like a peak. - Yeah, yeah, I think 20 is the peak.
20:2720 minutes, 27 secondsAnd so I would not kill yourselves. It's very important. Just get through it. Because you have nothing, probably no money,
20:3520 minutes, 35 secondsyou have no business, you have no job yet. Jordan Peterson said this, I saw it somewhere, people are depressed because they have nothing. They don't have a girlfriend.
20:4320 minutes, 43 secondsThey don't have a boyfriend. They don't have a... You need stuff, you need like, or a family. You need things around you. You need to build a life for yourself. If you don't build a life for yourself, you'll be depressed.
20:5120 minutes, 51 secondsSo if you're alone in Asia in a hostel looking at the ceiling, and you don't have any money coming in, you don't have a girlfriend, you don't, of course, you're depressed.
20:5820 minutes, 58 secondsIt's logic. But back then, if you're in a moment, you think there's not logic, there's something wrong with me. - [Lex] Yeah. - And also I think I started getting like anxiety,
21:0721 minutes, 7 secondsand I think I started going a little bit crazy where I think travel can make you sane.
21:1221 minutes, 12 secondsAnd I know this because I know that there's like digital nomads that they kill themselves.
21:1721 minutes, 17 secondsI haven't checked the comparison with baseline people, like suicide rate. But I have a hunch,
21:2221 minutes, 22 secondsespecially in the beginning when it was a very new thing like 10 years ago, that it can be very psychologically taxing.
21:2921 minutes, 29 secondsAnd you're alone a lot, back then when you travel alone, there was no other digital nomads back then, a lot. So you're in a strange culture.
21:3821 minutes, 38 secondsYou look different in everybody. I was in Asia, everybody's really nice in Thailand, but you're not part of the culture. You're traveling around,
21:4521 minutes, 45 secondsyou're hopping from city to city. You don't have a home anymore. You feel disrooted.
21:5121 minutes, 51 seconds- And you're constantly in the outcast and that you're different from everybody else. - Yes, exactly. Like Thailand, people are so nice. - [Lex] Yes. - But you still feel like outcast.
21:5921 minutes, 59 secondsAnd then I think the digital nomads I met then were all kinda like, it was like shady business.
22:0422 minutes, 4 secondsBut they were like vigilantes 'cause it was a new thing. And one guy was selling illegal drugs. It was an American guy.
22:0922 minutes, 9 secondsIt was selling illegal drugs via UPS to Americans on this website. There were a lot of dropshippers doing shady stuff. There's a lot of shady things going on there.
22:1822 minutes, 18 secondsAnd they didn't look like very balanced people. They didn't look like people I wanted to hang with.
22:2322 minutes, 23 secondsSo I also felt outcast from other foreigners in Thailand, other digital nomads. And I was like, "Man, I made a big mistake."
22:2922 minutes, 29 secondsAnd then I went back to Holland and then I got even more depressed. - You said digital nomad. What is digital nomad? What is that way of life? What is the philosophy there?
22:3722 minutes, 37 secondsAnd the history of the movement. - I struck upon it on accident.
22:4022 minutes, 40 seconds'Cause I was like, I'm gonna graduate university and then I need to get out of here. I'll fly to Asia, 'cause I've been before in Asia. I studied in Korea in 2009. Study exchange.
22:4822 minutes, 48 secondsI was like, Asia is easy. Thailand is easy. And I'll just go there, figure things out. And it's cheap. It's very cheap. Chiang Mai, I would live like for $150 per month rent. - Yeah. - For like a private room.
22:5622 minutes, 56 secondsPretty good. So I struggled on this on accident.
22:5822 minutes, 58 secondsI was like, okay, there's other people on laptops working on their startup or working remotely. Back then nobody worked remotely, but they worked on their businesses, right?
23:0723 minutes, 7 secondsAnd they would live in Columbia or Thailand or Vietnam or Bali. They would live kind of like in more cheap places.
23:1623 minutes, 16 secondsAnd it looked a very adventurous life. You travel around, you build your business. There's no pressure from your home society, right? You're American.
23:2423 minutes, 24 secondsSo you get pressure from American society telling you kind of what to do. You need to buy a house or you need to do this stuff. I had this in Holland too. And you can get away from this pressure.
23:3223 minutes, 32 secondsYou can kind of feel like you're free. There's nobody telling you what to do.
23:3623 minutes, 36 secondsBut that's also why you start feeling like you go crazy 'cause you are free, you're disattached from anything and anybody,
23:4523 minutes, 45 secondsyou're disattached from your culture. You're disattached from the culture you're probably in, 'cause you're staying very short. - I think Franz Kafka said, "I'm free, therefore I'm lost."
23:5323 minutes, 53 seconds- Man, that's so true. Yeah, that's exactly the point. And yeah, freedom is like, it's the definition of no constraints, right? Anything is possible.
24:0124 minutes, 1 secondYou can go anywhere. And everybody's like, "Oh, that must be super nice." Freedom, you must be very happy. And it's opposites, I don't think that makes you happy.
24:0924 minutes, 9 secondsI think constraints probably make you happy, and that's a big lesson I learned then. - But what were they making for money? So you're saying they were doing shady stuff at that time?
24:1824 minutes, 18 seconds- For me, 'cause I was more like a developer. I wanted to make startups kind of, and it was like drugs being shipped to America,
24:2724 minutes, 27 secondslike diet pills and stuff. Non-FDA proof stuff. And they would like let...
24:3224 minutes, 32 secondsThey would say with beers and they would laugh about like all the dodgy shit kind of they're doing. - That part of, okay. - That kind of vibe. Kind of sleazy, e-comm vibe.
24:4124 minutes, 41 secondsI'm not saying all e-comm is these. - Right. - But, you know, this vibe.
24:4424 minutes, 44 seconds- It could be a vibe and your vibe was more build cool shit. - Make cool stuff. - That's ethical. - You know, the guys with sports cars in Dubai, these people, you know. - Yes.
24:5324 minutes, 53 seconds- E-comm like, oh bro, you gotta drop ship. - Yeah. - And you'll make 100 million a month. Those people was this shit. And I was like, this is not my people.
25:0125 minutes, 1 second- Yeah, I mean there's nothing wrong with any of those individual components. - No, no judgment. - But there's a foundation that's not quite ethical.
25:1025 minutes, 10 secondsWhat is that? I don't know what that is, but yeah, I get you. - No, I don't wanna judge. I noted for me, it wasn't my world, it wasn't my subculture. I wanted to make cool shit.
25:1825 minutes, 18 secondsBut they also think their shit is cool. But I wanted to make real startups and that was my thing. I would read Hacker News, like Y Combinator,
25:2725 minutes, 27 secondsand they were making cool stuff. So I wanted to make cool stuff. - I mean, that's a pretty cool way of life. Just if you romanticize it for a moment. - It's very romantic man.
25:3625 minutes, 36 secondsIt's colorful. If I think about the memories. - What are some happy memories? Just like working,
25:4225 minutes, 42 secondsworking in cafes or working in just the freedom that envelopes you from that way of life,
25:5125 minutes, 51 seconds'cause anything is possible, you can just get off of. - I think it was amazing. We would work.
25:5525 minutes, 55 secondsI would make friends and we would work until 6:00 AM in Bali, for example,
26:0426 minutes, 4 secondswith Andre, my best friend was still my best friend and another friend,
26:0826 minutes, 8 secondsand we would work until the morning when the sun came up. Because at night, the coworking space was silence. There was nobody else.
26:1526 minutes, 15 secondsAnd I would wake up 6:00 PM or 5:00 PM. I would drive to the coworking space on a motorbike. I would buy 30 hot lattes from a cafe.
26:2426 minutes, 24 seconds- How many? - 30.
26:2626 minutes, 26 seconds'Cause there was like six people coming or we didn't know. Sometimes people would come in. - Did you say three, zero, 30? - Yeah. - Nice.
26:3326 minutes, 33 seconds- And we would drink like four per person or something. - Yeah. - Man, it's Bali. I don't know if they were powerful lattes,
26:3926 minutes, 39 secondsbut they were lattes and we'd put 'em in a plastic bag and then we'd drive there and all the coffee was like falling everywhere. - [Lex] Yeah.
26:4526 minutes, 45 seconds- And then we'd go negotiate and have these coffees here and we'd work all night. We'd play like techno music, and everybody would just work in there.
26:5326 minutes, 53 secondsThis was literally like business people.
26:5426 minutes, 54 secondsThey would work in their startup and we'd all try and make something.
26:5726 minutes, 57 secondsAnd then the sun would come up and the morning people, the yoga,
27:0327 minutes, 3 secondsyoga girls and yoga guys would come in after the yoga class at six, and they'd say, "Hey, good morning." And we're like, we look like this. - Yeah. - And we're like, what's up, how are you doing?
27:1127 minutes, 11 secondsAnd we didn't know how bad we looked, but it was very bad.
27:1427 minutes, 14 secondsAnd then we'd go home, sleep in a hostel or a hotel and do the same thing and again and again and again. And it was this lock-in mode, like working.
27:2527 minutes, 25 secondsAnd that was very fun.
27:2627 minutes, 26 seconds- So it's just a bunch of you techno music blasting all through the night, yeah. - More like (imitates techno music) Like industrial. - Rap chase.
27:3327 minutes, 33 seconds- Not like this cheesy.
27:3527 minutes, 35 seconds- For me, it's such an interesting thing because the speed of the beat affects how I feel about a thing. - Yeah. - So the faster it is,
27:4327 minutes, 43 secondsthe more anxiety I feel. But that anxiety is channeled into productivity. But if it's a little too fast, the anxiety overpowers that.
27:5027 minutes, 50 seconds- So you don't like drum bass music? - No, probably not. - No, it's too fast. - I mean, for working, I have to play with it. - Yeah. - It's like you can actually,
27:5827 minutes, 58 secondsI can adjust my- - Yeah. - Level of anxiety. There's a must be a better word than anxiety.
28:0328 minutes, 3 secondsIt's like productive anxiety that I like. - Yeah. - Whatever that is. - It also depends what kind of work you do, right? If you're writing,
28:1028 minutes, 10 secondsyou probably don't want drum bass music. I think for codes like industrial techno, this kind of stuff, kind of fast.
28:1628 minutes, 16 secondsIt works well, 'cause you really get locked in and combined with caffeine, you go deep. - (laughs) Yeah.
28:2328 minutes, 23 seconds- And I think you balance on this edge of anxiety, 'cause this caffeine is also hitting your anxiety.
28:2728 minutes, 27 secondsAnd you want to be on the edge of anxiety with this techno running. Sometimes it gets too much. It's like stop the techno, stop the music is like, but those are good memories.
28:3628 minutes, 36 secondsAnd also like travel memories. You go from city to city. - Yeah. - And it feels like, it's kinda like jet set life. It's feels very beautiful.
28:4428 minutes, 44 secondsYou're seeing a lot of cool cities.
28:4628 minutes, 46 seconds- What was your favorite place that you remember, you visited? - I think still Bangkok is the best place.
28:5528 minutes, 55 secondsAnd Bangkok and Chiang Mai. I think Thailand is very special. I've been to the other place.
28:5928 minutes, 59 secondsI've been to Vietnam and I've been to South America and stuff. I still think Thailand wins in how nice people are. How easy of a life people have there.
29:0829 minutes, 8 seconds- Everything is cheap. - Yeah. - And good. - Well, Bangkok is getting expensive now, but Chiang Mai is still cheap. I think when you're starting out. It's a great place.
29:1629 minutes, 16 secondsMan, the air quality sucks. It's a big problem. And it's quite hot. But that's a very cool place. - [Lex] Pros and cons.
29:2329 minutes, 23 seconds- I love Brazil also. My girlfriend is Brazilian. Not just because of that, but I like Brazil. The problem still is the safety issue.
29:3229 minutes, 32 secondsIt's like in America, like it's localized. It's hard for Europeans to understand. Safety is localized to specific areas. So if you go to the right areas, it's amazing.
29:3929 minutes, 39 secondsBrazil is amazing. If you go to wrong areas, maybe you die. Right? - Yeah. Yeah, I mean that's true. - But it's not true in Europe. In Europe it's much more- - That's true.
29:4829 minutes, 48 secondsThat's true. - More average. - You're right, you're right. It's more averaged out. - Yeah. - I like it when there's strong neighborhoods,
29:5429 minutes, 54 secondswhen you're like, you cross a certain street and you're in a dangerous part of town. - Man, yeah. - I like it.
30:0230 minutes, 2 secondsI like there's certain cities in the United States like that. - Yeah. - I like that. And you're saying Europe is more about that. - But you don't feel scared? - Well, I don't, I like danger. - Well, you BJJ.
30:1130 minutes, 11 seconds- No, not even just that. I think dangers interesting. - Yeah. - Danger reveals something about yourself, about others. Also, I like the full range of humanity.
30:2030 minutes, 20 seconds- Yeah. - So I don't like the mellowed out aspects of humanity. - I have friends like, nomad friends that are exactly like this. They go to the kind of broken areas.
30:2930 minutes, 29 secondsThey like this reality. They like the authenticity more. They don't like luxury. They don't like- - Oh, yeah, I hate luxury. - Yeah. - Yeah. - It's very European view, right? (laughs)
30:3730 minutes, 37 seconds- Wait, was that? (Lex and Pieter laughs) That's a whole nother conversation. - Yeah. - So you quoted Freya Stark quote,
30:4630 minutes, 46 seconds"To awaken quite alone in a strange town is one of the most pleasant sensations in the world."
30:5230 minutes, 52 seconds- Yeah. - Do you remember a time you had woken in a strange town and felt like that? We're talking about small towns or big towns or?
31:0031 minutes- Man, anywhere. I think I wrote it in some blog posts and like...
31:0531 minutes, 5 secondsIt was a common thing when you would wake up and this was like... I have this website. I started a website about this digital nomads, called nomadlist.com. And this was a community,
31:1231 minutes, 12 secondsso it was like 3,000 other digital nomads, 'cause I was feeling lonely. So I built this website and I stopped feeling lonely.
31:1831 minutes, 18 secondsI started organizing meetups and making friends and it was very common that people would say, they would wake up and they would forget where they are.
31:2631 minutes, 26 seconds- Yeah. - For the first half minute. And I had to look outside like, where am I? Which country? Which sounds really like privileged, but it was more like funny.
31:3431 minutes, 34 secondsYou literally don't know where you are because you're so disrooted. But there's something... Man, it's like Anthony Bourdain.
31:4131 minutes, 41 secondsThere's something pure about this kinda vagabond travel thing. It's behind me, I think.
31:4931 minutes, 49 secondsNow I travel with my girlfriend, right? It's very different. But it is a romantic, memories of this kind of like vagabond, individualistic solo life.
31:5831 minutes, 58 secondsBut the thing, it didn't make me happy, but it was very cool. But it didn't make me happy, right? It made me anxious. - There's something about it that make you anxious. I don't know, I still feel like that,
32:0632 minutes, 6 secondsit's a cool feeling. It's scary at first, but then you realize where you are.
32:1232 minutes, 12 secondsI don't know, it's like you awaken to the possibilities of this place- - That's it. - When you feel like that. - That's it. - That's great. And it's even when you're doing some basic travel.
32:2032 minutes, 20 seconds- [Pieter] Yeah. - Go to San Francisco or something else. - Yeah, you have like the novelty effect. You're in a new place. Here things are possible. You don't get bored yet.
32:3032 minutes, 30 secondsAnd that's why people get addicted to travel. - Back to startups.
Chapter 6: Indie hacking
32:3432 minutes, 34 secondsYou wrote a book on how to do this thing and gave a great talk on it, how to do startups. The book is called "Make: Bootstrapper's Handbook."
32:4432 minutes, 44 seconds- Yeah. - I was wondering if you could go through some of the steps. It's idea, build, launch, grow, monetize, automate, and exit. There's a lot of fascinating ideas in each one.
32:5232 minutes, 52 secondsSo idea stage. - Yeah. - How do you find a good idea? - So I think you need to be able to spot problems. So for example, you can go in your daily life,
33:0033 minuteswhen you wake up and you're like, what are stuff that I'm really annoyed with? In my daily life that doesn't function well,
33:0833 minutes, 8 secondsand that's a problem that you can see. Okay, maybe that's something I can add, write code about, code for and it will make my life easier.
33:1633 minutes, 16 secondsSo I would say make like a list of all these problems you have and like an idea to solve it, and see which one is like viable. You can actually do something and then start building it.
33:2433 minutes, 24 seconds- So that's a really good place to start. Become open to all the problems in your life. Like actually start noticing them.
33:3233 minutes, 32 seconds- Yeah. - I think that's actually not a true real thing to do,
33:3533 minutes, 35 secondsto realize that some aspects of your life could be done way, way better.
33:3933 minutes, 39 seconds- Yeah. - Because we kinda very quickly get accustomed to discomforts. - [Pieter] Exactly. - Like for example, like doorknobs.
33:4733 minutes, 47 seconds- [Pieter] Yeah. - Design of certain things. (laughs) - I knew you like scream and doorknob. - Yeah. - 50 tons.
33:5233 minutes, 52 seconds- Well, that one I know how much incredible design work has gone into. It's a really interesting. - Yeah. - Doors and doorknobs.
34:0034 minutesJust the design of everyday things. - Yeah. - Forks and spoons.
34:0434 minutes, 4 secondsIt's gonna be hard to come up with a fork that's better than the current- - Yeah. - Fork designs.
34:0834 minutes, 8 seconds- Yeah. - And the other aspect of it is you're saying like, in order to come up with interesting ideas, you gotta try to live a more interesting life.
34:1534 minutes, 15 seconds- Yeah, but that's where travel comes in. - [Lex] Yeah. - Because when I started traveling,
34:1934 minutes, 19 secondsI started seeing stuff in other countries that you didn't have in Europe, for example, or America even. If you go to Asia, dude, especially 10 years ago,
34:2834 minutes, 28 secondsnobody knew about this WeChats,
34:3034 minutes, 30 secondsall these apps that they already had before we had them, these everything apps, right? Now Elon's trying to make X, this everything app like WeChat, same thing.
34:3834 minutes, 38 secondsIn Indonesia or Thailand, you have one app that you can order food, if you can order groceries, you can order massage,
34:4534 minutes, 45 secondsyou can order car mechanic. Anything you can think of is in the app. And that stuff, for example, that's called arbitrage.
34:5334 minutes, 53 secondsYou can go to back to your country and build that same app for your country, for example. So you start seeing problems,
35:0135 minutes, 1 secondyou start seeing solutions that other people already did in the rest of the world.
35:0535 minutes, 5 secondsAnd also traveling in general just gives you more problems, 'cause travel is uncomfortable. Airports are horrible.
35:1335 minutes, 13 secondsAirplanes are not comfortable either. There's a lot of problems you start seeing, just getting outta your house, you know.
35:1935 minutes, 19 seconds- But also you can, I mean in the digital world you can just go into different communities and see what can be improved- - Yes. - In that. - Yeah, yeah, yeah.
35:2835 minutes, 28 seconds- What specifically is your process of generating ideas? Do you like do idea dumps? Do you have a document where you just keep writing stuff? - Yeah, I used to have like a...
35:3635 minutes, 36 seconds'Cause when I wasn't making money, I was trying to like make this list of ideas to see like, so I need to build... I was thinking statistically already, like I need to build all these things,
35:4335 minutes, 43 secondsand one of these will work out probably. So I need to have a lot of things to try. And I did that. Right now I think like, because I already have money,
35:5235 minutes, 52 secondsI can do more things based on technology. So for example, AI,
35:5735 minutes, 57 secondswhen I found out about when Stable Diffusion came or ChatGPT and stuff, all these things were like, I didn't start working with them because I had a problem.
36:0636 minutes, 6 secondsI had no problems.
36:0736 minutes, 7 secondsBut I was very curious about technology and I was like playing with it and figuring out like...
36:1436 minutes, 14 secondsFirst just playing with it and then you find something like, okay, this generates...
36:1836 minutes, 18 secondsStable Diffusion generates houses very beautiful and interiors. - So it's less about problem solving,
36:2236 minutes, 22 secondsit's more about the possibilities of new things you can create.
36:2536 minutes, 25 seconds- Yeah, but that's very risky because that's the famous like solution trying to find a problem. - Yeah. - And usually, it doesn't work. And that's very common with startup funds.
36:3336 minutes, 33 secondsI think they have tech, but actually people don't need the tech, right? - Can you actually explain, it'd be cool to talk about some of the stuff you've created.
Chapter 7: Photo AI
36:4136 minutes, 41 secondsCan you explain the photoai.com? - Yeah, yeah, so it's like fire your photographer. The idea is like, you don't need a photography anymore.
36:4936 minutes, 49 secondsYou can train yourself as AI model and you can take as many photos as you want anywhere in any clothes with facial expressions,
36:5836 minutes, 58 secondslike happy or sad, or poses, all this stuff. - So how does it work? - Yeah. - (laughs) You send me.
37:0637 minutes, 6 seconds- So you could press- - A link to a gallery of ones done on me. - Yeah. - Which is? - So on the left you have the prompt, the box. Yeah, so you can write like, so model is your model, this Lex Fridman.
37:1437 minutes, 14 seconds- Yeah. - So you can write like model as a blah, blah, blah, whatever you want.
37:1837 minutes, 18 seconds- Yep. - Then press the button and it will take photos. It will take one minute.
37:2137 minutes, 21 seconds- Photos, what are you using for the hosting for the compute? - Replicate. - Okay. - Replicate.com. They're very, very good. - Okay, it's cool like this interface wise.
37:3037 minutes, 30 secondsIt's cool that you're showing how long it's gonna take. This is amazing.
37:3337 minutes, 33 secondsSo I'm presuming you just loaded in a few pictures from the internet. - Yeah, so I went to Google Images, typed in Lex Fridman. I added like 10 or 20 images.
37:4137 minutes, 41 secondsYou can open 'em in the gallery, and you can use your cursor to, yeah. So some don't look like you, so the hit and miss rate is like,
37:5037 minutes, 50 secondsI don't know, I'd say like 50/50 or something. - But when I was watching it tweet, like it's been getting better and better and better. - It was very bad in the beginning. It was so bad.
37:5837 minutes, 58 secondsBut still people sign up to it, you know. - (laughs) There's two Lex is great. It is getting more and more sexual.
38:0638 minutes, 6 secondsIt's making me very uncomfortable. - Man, but that's the problem with these models. 'cause (Lex laughs) we need to talk about this, 'cause the models- - I'm sure. - In Stable Diffusion.
38:1338 minutes, 13 seconds- Yeah. - So the photo realistic models that are like fine tunes. - [Lex] Yeah. - They were all trained on porn in the beginning. And it was a guy called Hassan.
38:2038 minutes, 20 secondsSo I was trying to figure out how to do photo realistic AI photos. Stable Diffusion by itself is not doing that well. The faces look all mangled. - Yep.
38:2838 minutes, 28 seconds- And it doesn't have enough resolution or something to do that well. But I started seeing these base models,
38:3438 minutes, 34 secondsthese fine models and people would train on porn and I would try them and they would be very photorealistic.
38:3938 minutes, 39 secondsThey would have bodies that actually made sense like body anatomy.
38:4538 minutes, 45 secondsBut if you look at the photo realistic models that people use now, still, there's still core of porn there, of naked people. - Yeah.
38:5138 minutes, 51 seconds- So I need to prompt out the naked and everyone needs to do this with AI startups, with imaging. You need to prompt out the naked stuff. You need to put a naked-
38:5938 minutes, 59 seconds- You have to keep reminding the model. You need to put clothes on the thing. - Yeah, don't put naked 'cause it's very risky. I have Google Vision that checks-
39:0539 minutes, 5 seconds- Yeah. - Every photo before it's shown to the user to like check for NSFW. - Like the nipple detector. Oh, NSFW detector.
39:1139 minutes, 11 seconds- Because the journalists get very angry if they, you know. - If you sexualized. - There was a journalist I think, that would got angry to use this. And it was like, oh, it showed like a nipple,
39:1939 minutes, 19 seconds'cause Google Vision didn't detect it.
39:2139 minutes, 21 secondsSo that's like these kind of problems you need to deal with, that's what I'm talking about. This is with cats. But look at the cat face.
39:2939 minutes, 29 secondsIt's also kind of mangled. (Lex laughs) - I'm a little bit disturbed. - Can zoom in on the cat if you want.
39:3839 minutes, 38 secondsYeah, it's a very sad cut. (Lex laughs) It doesn't have a nose. - It doesn't have a nose. Wow.
39:4439 minutes, 44 seconds- Man, but this is the problem with AI startup 'cause they all act like it's perfect. This is groundbreaking. But it's not perfect. - Yeah. - It's like really bad half the time.
39:5339 minutes, 53 seconds- So if I wanted to sort of update model as?
39:5539 minutes, 55 seconds- Yeah, so you remove this stuff and you write whatever you want, like in Thailand or something, or in Tokyo. - In Tokyo? - Yeah.
40:0640 minutes, 6 seconds- And then- - You could say like at night with neon lights, you can add more detail to make you. - I'll go in Austin. Do you think you'll know in Texas? - Yeah, Austin. - In Austin, Texas.
40:1440 minutes, 14 seconds- With cowboy hats. - In Texas, yeah. - As a cowboy. - As a cowboy.
40:2240 minutes, 22 secondsIt's gonna go towards the porn direction. Man, I hope not. It's the end of my career. (Pieter and Lex laughs) - Or the beginning, it depends.
40:3040 minutes, 30 secondsWe can send you a push notification when your photos are done. Yeah, all right, cool. - Yeah, let's see. - Oh, wow. So this whole interface you've built.
40:3740 minutes, 37 seconds- Yeah. - This is really well done. - It's so jQuery. - So I still use jQuery. - Yes. - The only one. - Still. - After 10 years. - To this day. You're not the only one, the entire of the web.
40:4640 minutes, 46 seconds- Yeah. - This PHP. - PHP and jQuery. Yeah, SQLite.
40:4940 minutes, 49 seconds- You're just like one of the top performers from a programming perspective that are still openly talking about it.
40:5740 minutes, 57 secondsBut everyone's using PHP. Most of the web is still probably PHP and jQuery. - I think 70%, 'cause of WordPress, right? 'Cause the blogs are- - Yeah, that's true.
41:0541 minutes, 5 seconds- Yeah. - That's true. - I'm seeing a revival now. People are getting sick of frameworks.
41:1041 minutes, 10 secondsLike all the JavaScript frameworks are so like, what do you call it? Like wieldy,
41:1441 minutes, 14 secondsso it takes so much work to just maintain this code and then it updates to a new version. You need to change everything. PHP just stays the same and works.
41:2341 minutes, 23 seconds- Yeah, can you actually just speak to that stack? You build all your websites, apps, startups, projects,
41:3041 minutes, 30 secondsall of that with mostly vanilla HTML. - [Pieter] Yeah, yeah.. - JavaScript, jQuery, PHP, and SQLite.
41:3941 minutes, 39 secondsAnd so that's a really simple stack, and you get stuff- - Yeah. - Done really fast. Can you just speak to the philosophy behind that?
41:4741 minutes, 47 seconds- I think it's accidental, 'cause that's the thing I knew, like I knew PHP, I knew HTML, CSS,
41:5241 minutes, 52 seconds'cause you make websites and when my startups started taking off, I didn't have time to... I remember putting on my to-do list like learn Node.js,
42:0142 minutes, 1 second'cause it's important to switch, 'cause- - Yeah. - This obviously is much better language than PHP, and I never learned it. I never did it, 'cause I didn't have time.
42:1042 minutes, 10 secondsThese things were growing like this, and I was launching more project and I never had time. It's like one day, I'll start coding properly and I never got to it.
42:1942 minutes, 19 seconds- I sometimes wonder if I need to learn that stuff.
42:2242 minutes, 22 secondsIt's still to do for me to really learn Node.js or Flask or these kind of- - React. - Yeah, React.
42:3242 minutes, 32 secondsIt feels like a responsible software engineer should know how to use these,
42:3842 minutes, 38 secondsbut you can get stuff done so fast with vanilla versions of stuff.
42:4442 minutes, 44 seconds- Yeah, it's like software developers if you wanna get a job and it's like, you know, people making stuff like startups and if you want to be entrepreneur probably maybe shouldn't, right?
42:5342 minutes, 53 seconds- I wonder if there's like, I really wanna measure performance and speed. I think there's a deep wisdom in that.
43:0043 minutes- Yeah. - I do think that frameworks and just constantly wanting to learn the new thing that's complicated way of software engineering gets in the way.
43:0843 minutes, 8 secondsI'm not sure what to say about that because definitely like you shouldn't build everything from just vanilla JavaScript or vanilla C, for example.
43:1643 minutes, 16 seconds- Yeah. - C++ when you're building systems engineering is like,
43:2043 minutes, 20 secondsthere's a lot of benefits for a pointer safety and all that kind of stuff. So I don't know,
43:2443 minutes, 24 secondsbut it just feels like you can get so much more stuff done if you don't care about how you do it.
43:3343 minutes, 33 seconds- Man, this is my most controversial take, I think, and maybe I'm wrong, but I feel like there's frameworks now that raise money. They raise a lot of money.
43:4143 minutes, 41 secondsThey raise 50 million, 100 million, $30 million. And the idea is that you need to make the developers, the new developers,
43:4743 minutes, 47 secondslike when you're 18 or 20 years old, right? Get them to use this framework and add a platform to it.
43:5543 minutes, 55 secondsWhere the framework can... It's open source,
43:5843 minutes, 58 secondsbut you probably should use the platform which is paid to use it.
44:0244 minutes, 2 secondsAnd the cost of the platforms to host it are a thousand times higher than just hosting it on a simple AWS server or a VPS on DigitalOcean, right?
44:1344 minutes, 13 secondsSo there's obviously like a monetary incentive here.
44:1544 minutes, 15 secondsWe wanna get a lot of developers to use this technology and then we need to charge them money 'cause they're gonna use it in startups and then the starters can pay for the bills.
44:2544 minutes, 25 secondsIt kind of destroys the information out there about learning to code because they pay YouTubers,
44:3244 minutes, 32 secondsthey pay influencers, developer influencers is a big thing to like...
44:3744 minutes, 37 secondsAnd same thing what happens with like nutrition and fitness or something. Same thing happens in developing, they pay this influencer to promote this stuff, use it, make stuff with it, make demo products with it.
44:4644 minutes, 46 secondsAnd then a lot of people are like, "Wow, use this."
44:4844 minutes, 48 secondsAnd I started noticing this 'cause when I would ship my stuff, people would ask me, "What are you using?" I would say, "Just PHP, jQuery, why does it matter?" And people would start kind of attacking me like,
44:5744 minutes, 57 seconds"Why are you not using this new technology, this new framework, this new thing?"
45:0145 minutes, 1 secondAnd I say, "I don't know, 'cause this PHP thing works and I'm optimizing for anything, it just works." And I never understood like why,
45:1045 minutes, 10 secondsI understand there's new technologies that are better and there should be improvement, but I'm very suspicious of money. Just like lobbying.
45:1745 minutes, 17 secondsThere's money in this developer framework scene.
45:2045 minutes, 20 secondsThere's hundreds of millions that goes to ads or influencer or whatever. It can't all go to developers. You don't need so many developers for a framework,
45:2845 minutes, 28 secondsand it's open source. To make a lot of more money on these startups. - So that's a really good perspective. But in addition to that is like, when you say better,
45:3745 minutes, 37 secondsit's like, can we get some data on the better? (Pieter laughs)
45:4245 minutes, 42 secondsBecause I wanna know from the individual developer perspective and then from a team of five, team of 10, team of 20 developers- - Yeah.
45:5145 minutes, 51 seconds- Measure how productive they are in shipping features. How many bugs they create, how many security holes result.
46:0046 minutes- PHP was not good with security for a while, but now it's good. - In theory, in theory- - Yeah. - Is it though? - Now it's good. - No, now as you're saying it,
46:0946 minutes, 9 secondsI wanna know if that's true because PHP was just the majority- - Yeah. - Of websites on the internet. - [Pieter] Could be true. - Is it just overrepresented?
46:1846 minutes, 18 secondsSame with WordPress? - Yeah.
46:1846 minutes, 18 seconds- Yes, there's a reputation that WordPress has a gigantic number of security holes. I don't know if that's true. I know it gets attacked a lot because it's so popular.
46:2846 minutes, 28 seconds- [Pieter] Yeah. - It definitely does have security holes,
46:3046 minutes, 30 secondsbut maybe a lot of other systems have security holes as well.
46:3346 minutes, 33 secondsAnyway, I just sort of questioning the conventional wisdom that keeps wanting to push software engineers towards frameworks, towards complex.
46:4146 minutes, 41 seconds- [Pieter] Yeah, yeah, yeah, yeah.
46:4246 minutes, 42 seconds- Like super complicated sort of software engineering approaches that stretch out the time it takes to actually build a thing.
46:5046 minutes, 50 seconds- Man, 100%. And it's the same thing with big corporations. 80% of the people don't do anything. It's like- - Right. - It's not efficient.
46:5846 minutes, 58 secondsYour benchmark is like people building stuff that actually gets done and like for society, right? If we wanna save time,
47:0647 minutes, 6 secondswe should probably use technology that's simple, that's pragmatic, that works, that's not overly complicated.
47:1447 minutes, 14 secondsIt doesn't make your life like a living hell. - And use a framework one that obviously solves a problem, a direct problem that you- - Of course, yeah, of course.
47:2347 minutes, 23 secondsI'm not saying you should code without a framework. You should use whatever you want. Yeah, think it's suspicious. (Lex laughs)
47:3147 minutes, 31 secondsAnd I think it's suspicious. When I talk about it on the Twitter, there's this army comes out. - Yeah. - There's these framework armies. - [Lex] Yeah. - Man, something... My gut tells me.
47:4047 minutes, 40 seconds- I wanna ask the framework army, what have they built this week? It's the Elon question. What did you do this week? - Yeah, did you make money with it? Did you charge users?
47:4747 minutes, 47 secondsIs it a real business? Yeah. - So going back to the cowboy. - First of all, some never look like you, right?
47:5547 minutes, 55 secondsBut some do. - Every aspect of this is pretty incredible. I'm also just looking at the interface. It's really well done. So this is all just jQuery. - Yeah. - This is really well done.
48:0448 minutes, 4 secondsSo take me through the journey of Photo AI.
48:1048 minutes, 10 secondsMost of the world doesn't know much about Stable Diffusion or any of this- - Yeah. - Any of the generative AI stuff. And so you're thinking, okay, how can I build cool stuff with this?
48:1848 minutes, 18 seconds- [Pieter] Yeah. - So what was the origin story of Photo AI? - I think it started, 'cause Stable Diffusion came out. So Stable Diffusion is like this-
48:2448 minutes, 24 seconds- Yeah. - The first like generative image model, AI model. And I started playing with it, like you could install it on your Mac, somebody forked it and made it work for MacBooks.
48:3348 minutes, 33 secondsSo I downloaded it and cloned the Repo,
48:3648 minutes, 36 secondsstarted using it to generate images and it was like amazing.
48:4248 minutes, 42 secondsI found it on Twitter because you see things happen on Twitter and I would post what I was making on Twitter as well and you could make any image,
48:5048 minutes, 50 secondsyou could write a prompt.
48:5148 minutes, 51 secondsSo essentially write a prompt and then it generates a photo of that or image of that in any style.
48:5748 minutes, 57 secondsThey would use like artist names to make like a Picasso kind of style and stuff. And I was trying to see like what is it good at?
49:0649 minutes, 6 secondsIs it good at people? No, it's really bad at people, but it was good at houses. So architecture, for example, I would generate like architecture houses.
49:1449 minutes, 14 secondsSo I made a website called thishousedoesnotexist.org. And it generated like, they called it like house porn at that one. (Lex laughs)
49:2349 minutes, 23 secondsHouse porn is like a subreddit. And this was Stable Diffusion like the first version. So it looks really... You can click for another photo.
49:2949 minutes, 29 secondsSo it generates all these kind of non-existing houses. - It is house porn. - But it looked kind of good. Especially back then.
49:3749 minutes, 37 seconds- It looks really good. - Now things look much better. - That's really, really well done.
49:4649 minutes, 46 secondsWow. - And it also generates like a description. - And you can upvote. Is it nice? - Yeah. - Upvote it. - Yeah. - Man, there's so much to talk to you about.
49:5449 minutes, 54 secondsLike the choices here. (Pieter chuckles) It's really well done. - This is very scrappy.
49:5849 minutes, 58 secondsIn the bottom, there's like a ranking of the most upvoted houses. So these are the top vote. And if you go to old time, you see quite beautiful ones. Yeah, so this one is my favorite.
50:0750 minutes, 7 secondsThe number one, it's kinda like a. - How is this not more popular? - It was really popular for like a while,
50:1450 minutes, 14 secondsbut then people got so bored of it, I think, 'cause I was getting bored of it too. Just continuous house porn. Everything starts looking the same.
50:2250 minutes, 22 secondsBut then I saw it was really good at interior,
50:2550 minutes, 25 secondsso I pivoted to interiorai.com where I tried to like upload first generate interior designs.
50:3250 minutes, 32 secondsAnd then I tried to do like,
50:3450 minutes, 34 secondsthere was a new technology called Image to Image where you can input an image, like a photo, and it would kind of modify the thing.
50:4150 minutes, 41 secondsSo you see it looks almost the same as Photo AI. It's the same code essentially. - Nice. - So I would upload a photo of my interior where I lived,
50:5050 minutes, 50 secondsand I would ask like change this into like a, I don't know, like maximalist design. And it worked and it worked really well.
50:5950 minutes, 59 secondsSo I was like, okay, this is a startup, 'cause obviously interior design AI, and nobody's doing that yet.
51:0451 minutes, 4 secondsSo I launched this and I was successful and made like within a week, made 10K, 20K a month, and now still makes like 40K, 50K a month.
51:1351 minutes, 13 secondsAnd it's been like two years. So then I was like, how can I improve this interior design? I need to start learning fine tuning.
51:1851 minutes, 18 secondsAnd fine tuning is where you have this existing AI model and you fine tune it on a specific goal you wanted to do. So I would find really beautiful interior design,
51:2651 minutes, 26 secondsmake a gallery and train a new model that was very good at interior design. And it worked and I used that as well.
51:3351 minutes, 33 secondsAnd then for fun, I uploaded photos of myself, and here's where it happened. And to train myself like, and this would never work obviously.
51:4251 minutes, 42 secondsAnd it worked. And actually it started understanding me as a concept. So my face worked, and you could do like different styles,
51:4951 minutes, 49 secondsme as like very cheesy, medieval warrior, all this stuff. So I was like, this is another startup. So now I did avatarai.me.
51:5851 minutes, 58 secondsI couldn't get to.com And this was- - This still up? - Yeah, avatarai.me. Well, now it's forwards to photo AI, 'cause it pivoted.
52:0652 minutes, 6 seconds- Got it. - But this was more like cheesy thing. So this is very interesting 'cause this went so viral. It made like, I think 150K in a week or something.
52:1652 minutes, 16 secondsSo most money I ever made. And then big, this is very interesting, the big VC companies like Lenze,
52:2352 minutes, 23 secondswhich are much better at iOS and stuff than me, I didn't have iOS app. They quickly built an iOS app that does the same. And they found technology,
52:3052 minutes, 30 secondsand it's all open technology. So it's good. And I think they made like $30 million with it. - [Lex] Yeah. - They became like the top grossing app after that.
52:4052 minutes, 40 seconds- How do you feel about that? - I think it's amazing, honestly. And it's not like- - You didn't have like a feeling like, ah, fuck. - No, I was a little bit like sad,
52:4852 minutes, 48 seconds'cause all my products would work out and I never had like real fierce competition.
52:5252 minutes, 52 secondsAnd now I have fierce competition from like a very skilled high talent. I was developer studio or something that,
52:5952 minutes, 59 secondsand they already had an app. They had an app, an App Store for like, I think retouching your face or something. So they were very smart. They add these avatars to there. It's a feature. They had the users,
53:0853 minutes, 8 secondsthey do a push notification to everybody. We have this avatars. - Yeah. - Man, they create, I think they made so much money. I think they did a really great job.
53:1653 minutes, 16 secondsAnd I also made a lot of money with it. But I quickly realized it wasn't my thing, 'cause it was so cheesy. It was like Kitch,
53:2453 minutes, 24 secondsit's kind of like me as a Barbie or me as a... - Yeah. - It was too cheesy. I wanted to go for like, what's a real problem we can solve? 'Cause this is gonna be a hype.
53:3253 minutes, 32 secondsThis is gonna be, and it was a hype, these avatars. It's like let's do real photography. How can you make people look really photo realistic?
53:4153 minutes, 41 secondsAnd it was difficult. And that's why these avatars work, 'cause they were all like in a cheesy Picasso style, and art is easy 'cause you interpret...
53:5053 minutes, 50 secondsAll the problems that AI has with your face are like artistic. If you call it Picasso. But if you make a real photo, all the problems with your face, you look wrong.
53:5953 minutes, 59 secondsSo I started making Photo AI,
54:0054 minuteswhich was like a pivot of it where it was like a photo studio where you could take photos without actually needing,
54:0854 minutes, 8 secondsa photographer, needing a studio. You just type it. And I've been working on it for like the last year. - Yeah, it's really incredible.
54:1554 minutes, 15 secondsThat journey is really incredible. Let's go to the beginning of Photo AI though, 'cause I remember seeing a lot of really, (laughs) really hilarious photos.
54:2454 minutes, 24 secondsI think you were using yourself as a case study. Right? - Yeah. - Yeah, so there's a tweet here.
54:3154 minutes, 31 secondsSold $100,000 in AI generated avatars. - Yeah, and it's a lot like, it's a lot for anybody. It's a lot for me.
54:4054 minutes, 40 seconds(Lex laughs) Making 10K a day on this, you know. - That's amazing. That's amazing. - And then the nested tweet,
54:4854 minutes, 48 secondslike that's the launch tweet, and then the before that it's like the me hacking on it. - Oh, I see. So that...
54:5654 minutes, 56 secondsOkay, so October 26th, 2022. - Yeah. - I trained an ML model on my face. - Because my eyes are quite far apart.
55:0655 minutes, 6 secondsI learned when I did YouTube, I would put a photo of like my DJ photo, my mixture. And people would say I look like a hammerhead shark.
55:1455 minutes, 14 secondsIt was like the top comment. So then I realized my eyes are far apart.
55:1755 minutes, 17 seconds- Yeah, the internet helps you figure out who you look like. - Yeah, helps realize how you look. - Boy, do I love the internet. - So first trap.
55:2655 minutes, 26 seconds- Well what is, is this? Wait. - It's water from the waterfall, but the waterfalls in the back, you know, so what's going on?
55:3355 minutes, 33 seconds- So how much of this is real? - It's all AI. - It's all AI. - Yeah. - That's pretty good, though, for the early days. - Exactly.
55:4155 minutes, 41 secondsBut this was hit or miss, so you had to do a lot of curation, 'cause 99% of it was really bad. So these are the photos I uploaded. - How many photos did you use?
55:4955 minutes, 49 secondsOnly these, I will try more up to date picks later. These are the only photos you uploaded? - Yeah, yeah. - Wow.
55:5855 minutes, 58 secondsWow, okay, so you were learning all this super quickly. - [Pieter] Yeah.
56:0256 minutes, 2 seconds- What are some interesting details you remember from that time for what you had to figure out to make it work? And for people just listening,
56:0956 minutes, 9 secondshe uploaded just a handful of photos that don't really have a good capture of the face. And he is able to- - I think it's cropped,
56:1756 minutes, 17 secondsit's like a cropped by the layout. But they're square photos. So they're 512 by 512, because that's Stable Diffusion.
56:2456 minutes, 24 seconds- But nevertheless not great capture the face. - Yeah.
56:2756 minutes, 27 seconds- It's not like a collection of several hundred photos that are like 360 overview. - Exactly. I would imagine that too when I started I was like,
56:3656 minutes, 36 secondsoh, this must be like some 3D scan technology, right?
56:3956 minutes, 39 seconds- Yeah. - So I think the cool thing with AI, it trains the concept of you. So it's literally like learning, just like any AI model learns, it learns how you look.
56:4756 minutes, 47 secondsSo I did this and then I was getting DMs, like Telegram messages, how can I do the same thing? I want these photos.
56:5556 minutes, 55 secondsMy girlfriend wants these photos. So I was like, okay, this is obviously a business, but I didn't have time to code it, make a whole like app about it.
57:0357 minutes, 3 secondsSo I made a HTML page, registered domain name. It was a Stripe payment link,
57:1157 minutes, 11 secondswhich means you have literally a link to Stripe to pay, but there's no code in the back. So all you know is you have customers that paid money.
57:1957 minutes, 19 secondsThen I added like some a Typeform link.
57:2257 minutes, 22 secondsSo Typeform is a site where you can create your own input form like Google forms.
57:2757 minutes, 27 secondsSo they would get a email with a link to the Typeform or actually just a link after the checkout and they could upload their photos.
57:3357 minutes, 33 secondsSo enter the email, upload the photos and I launched it, and I was like, here first sale, so it's October 2022.
57:4257 minutes, 42 secondsAnd I think within the first 24 hours was like, I'm not sure it was a thousand customers or something. But the problem was I didn't have code to automate this.
57:5157 minutes, 51 secondsSo I had to do manually. So the first few hundred, I just literally took their photos, train them, and then I would generate the photos with the prompts,
57:5957 minutes, 59 secondsand I had this text file with the prompts, and I would do everything manually. And this quickly became way too much. But that's another constraint.
58:0558 minutes, 5 secondsI was forced to code something up that would do that.
58:0958 minutes, 9 secondsAnd that was essentially making it into a real website, right?
58:1258 minutes, 12 seconds- So at first it was the Typeform and they uploaded through the Typeform. - [Pieter] Stripe checkout platform, yeah. - And then you were like, that image is downloaded. Did you write a script to export downloaded?
58:2058 minutes, 20 seconds- No, it downloaded the images myself. It was a zip file, to unzipped the zip file. - Literally, and you unzipped it. One by one. - Yes. No, because you know, do things that don't scale.
58:2958 minutes, 29 secondsPaul Graham says, right? And then I would train, and I would email them the photos, I think from my personal email say, "Here's your avatars."
58:3758 minutes, 37 secondsAnd they liked it. They were like, "Wow, it's amazing." - You emailed them with your personal email. - So I didn't have an email address on this- - Yeah. - Domain.
58:4558 minutes, 45 seconds- And this is like a hundred people. - Yeah, and then you know who signed up like, man, I cannot say it, but really famous people, like really, really billionaires,
58:5458 minutes, 54 secondsfamous tech billionaires did it. And I was like, "Wow, this is crazy." And I was like so scared to mess them. So I said, "Thanks so much for using my sites."
59:0259 minutes, 2 secondsAnd he's like, "Yeah, amazing app. Great work." So I was like, this is different than normal reaction. - It's Bill Gates isn't, it?
59:1059 minutes, 10 seconds- Cannot say anything. (Lex laughs) - Just like shirtless picks. - GDPR like privacy. - Right, right. - European regulation. - Right. - Cannot share anything.
59:1859 minutes, 18 secondsI was like, wow. But this shows like...
59:2259 minutes, 22 secondsSo you make something and then if it takes off very fast, you're like, it's validated. You're like, here's something that people really want. But then also thought, this is a hype,
59:3059 minutes, 30 secondsthis is gonna die down very fast, and it did because it's too cheesy. - But you had to automate the whole thing. How'd you automate it? So what's the AI component?
59:3959 minutes, 39 secondsHow hard was that to figure out? - Okay, so that's actually in many ways the easiest thing, 'cause there is all these platforms already back then.
59:4559 minutes, 45 secondsThere was platforms for fine tune, Stable Diffusion. Now I use Replicate, back then I use different platforms,
59:5459 minutes, 54 secondswhich was funny 'cause that platform when this thing took off, I would tweet,
59:5759 minutes, 57 seconds'cause I tweet always like how much money these websites make. You call it vendor, right? The platform that did the GPUs,
1:00:051 hour, 5 secondsthey increased their price for training from $3 to $20. After they saw that I was making so much money. So immediately my profit is gone,
1:00:121 hour, 12 seconds'cause I was selling them for $30 and I was in a Slack with them like saying, "What is this?" Can you just put it back to $3? They say, "Yeah, maybe in the future,
1:00:201 hour, 20 secondswe're looking at it right now." I'm like, "What are you talking about?" You just took all my money, and they're smart.
1:00:241 hour, 24 seconds- Well, they're not that smart because like you also have a large platform and a lot of people respect you. So you can literally come out and say that.
1:00:321 hour, 32 seconds- I think it's like kind of dirty to cancel a company or something. I prefer just bringing my business elsewhere. But there was no elsewhere- - Right. - Back then.
1:00:401 hour, 40 seconds- [Lex] Right. - So I started talking to other AI model, ML platforms. So Replicate was one of those platforms. And I started DMing, the CEO say,
1:00:491 hour, 49 seconds"Can you please create," it's called Dream Booth, this fine tuning of yourself. Can you add this to your site? 'Cause I need this, 'cause I'm being price guard.
1:00:571 hour, 57 secondsAnd he said "No, because it takes too long to run. It takes half an hour to run, and we don't have the GPUs for it." I said, "Please, please, please, and then after a week he said,
1:01:041 hour, 1 minute, 4 seconds"We're doing it, we're launching this." And then this company became, it was like not very famous company. It became very famous with this stuff,
1:01:121 hour, 1 minute, 12 seconds'cause suddenly everybody was like, oh, we can build similar apps like avatar apps.
1:01:161 hour, 1 minute, 16 secondsAnd everybody started building avatar apps and everybody started using Replicate for it.
1:01:201 hour, 1 minute, 20 secondsAnd it was from these early DMs with like the CEO, like Ben Firshman. Very nice guy. And he was like, they never prized media. They never treated me bad.
1:01:281 hour, 1 minute, 28 secondsThey always been very nice. It's a very cool company. So you can run any AI model, LLMs, you can run on here.
1:01:361 hour, 1 minute, 36 seconds- And you can scale? - Yes, they scale, yeah, yeah. And I mean you can do now, you can click on the model and just run it already. It's like super easy.
1:01:431 hour, 1 minute, 43 secondsYou log in with GitHub. - That's great. - And by running it on the website, then you can automate with the API, you can make a website that runs the model.
1:01:501 hour, 1 minute, 50 seconds- Generate images, generate text, generate videos, generate music, generate speech. - Video. - Fine tune models. - They do anything, yeah. It's a very cool company. - Nice.
1:01:581 hour, 1 minute, 58 secondsAnd you're like growing with them, essentially. They grew because of you, because it's like a big use case. - Yeah, the website even looks weird now.
1:02:061 hour, 2 minutes, 6 secondsIt started as a machine learning platform that was like, I didn't even understand what it did. It was just too ML.
1:02:131 hour, 2 minutes, 13 secondsYou would understand 'cause you're in the ML world. I wouldn't understand - Now it's newb friendly. - Yeah, exactly. (Lex laughs)
1:02:191 hour, 2 minutes, 19 secondsAnd I didn't know how it worked but I knew that they could probably do this and they did it. They built the models and now I use them for everything.
1:02:251 hour, 2 minutes, 25 secondsAnd we trainedlike, I think now 36,000 models, 36,000 people already.
1:02:321 hour, 2 minutes, 32 seconds- But is there some tricks to fine tuning to like the collection of photos that are provided? - Yes. - Like how do you? - Yes, man, there's so many hacks. - The hacks. - Yeah,
1:02:401 hour, 2 minutes, 40 secondsit's like 100 hacks to make it work. (Lex and Pieter laughs) - It get my secrets now. - Well, not the secrets, but the more like,
1:02:471 hour, 2 minutes, 47 secondsinsights maybe about the human face and the human body. What kind of stuff get messed up a lot? - I think people, well man, as a living,
1:02:551 hour, 2 minutes, 55 secondspeople don't know how they look. - [Lex] Yeah.
1:02:581 hour, 2 minutes, 58 seconds- They generate photos of themselves and then they say, "Ah, it doesn't look like me." - [Lex] Yeah. - You can check the training photos. It does look like you. - Yeah.
1:03:061 hour, 3 minutes, 6 seconds- But you don't know how you look.
1:03:081 hour, 3 minutes, 8 secondsSo there's a face dysmorphia of yourself that you have known idea how you look. - Yeah, that's hilarious.
1:03:131 hour, 3 minutes, 13 secondsI mean I've got to one of the least pleasant activities in my existence is having to listen to my voice and look on my face. So I get to like really,
1:03:231 hour, 3 minutes, 23 secondsreally have to sort of come into terms with the reality of how I look and how I sound. - Man, everybody. - But people often don't,
1:03:311 hour, 3 minutes, 31 secondsright? - Really? - You have a distorted view perspective.
1:03:351 hour, 3 minutes, 35 seconds- I know that like if I would make a selfie how I think I look that, that's nice. Other people think that's not nice. But then they make a photo of me,
1:03:431 hour, 3 minutes, 43 secondsI'm like that's super ugly. But then they're like, no, that's how you look. And you look nice. So how other people see you is nice. So you need to ask other people to choose your photos.
1:03:521 hour, 3 minutes, 52 seconds- Yeah, yeah, yeah.
1:03:531 hour, 3 minutes, 53 seconds- You shouldn't choose them yourself 'cause you don't know how you look. - Yeah, you don't know what makes you interesting, what makes you attractive or all this kind of stuff. - Yeah, exactly. - And a lot of us,
1:04:001 hour, 4 minutesthis is dark aspect of psychology. We focus on some small flaws. - Yeah. - This is why I hate plastic surgery, for example.
1:04:081 hour, 4 minutes, 8 seconds- Yeah. - People try to remove the flaws when the flaws are the thing that makes you interesting and attractive. - I learned from the hammerhead shark eyes this, the stuff about you that looks ugly to you.
1:04:171 hour, 4 minutes, 17 secondsAnd it's probably what makes you, original makes you nice and people like it about you. - [Lex] Yeah. - And it's not like, oh my god. And people notice it.
1:04:241 hour, 4 minutes, 24 secondsPeople notice your hammerhead eyes. But it's like, that's me, that's my face. I love myself. And that's confidence, and confidence is attractive. - Yes. - Right?
1:04:321 hour, 4 minutes, 32 seconds- Confidence is attractive. But yes, understanding what makes you beautiful. It's the breaking of symmetry makes you beautiful. It's the breaking of the average face makes you beautiful.
1:04:421 hour, 4 minutes, 42 secondsAll that.
1:04:421 hour, 4 minutes, 42 seconds- Yeah. - And obviously different from men and women, a different age. It's all this kind of stuff. - Yeah, 100%. - But underneath it all the personality, all of that.
1:04:501 hour, 4 minutes, 50 secondsWhen the face comes alive, that also is the thing that makes you beautiful. - Yeah. - But anyway, you have to figure all that out with AI.
1:04:581 hour, 4 minutes, 58 seconds- Yeah, one thing that worked was like people would upload full body photos themselves. So I would crop the face, right?
1:05:051 hour, 5 minutes, 5 secondsAnd then the model knew better that we're training mostly the face here. But then I started losing resemblance of the body, 'cause some people are skinny, some people are muscular, whatever.
1:05:141 hour, 5 minutes, 14 secondsSo you want to have that too. So now I mix full body in the training with face photos, face crops, and it's all automatic.
1:05:221 hour, 5 minutes, 22 secondsAnd I know that other people,
1:05:231 hour, 5 minutes, 23 secondsthey use again AI models to detect like what are the best photos in this training set? And then train on those.
1:05:291 hour, 5 minutes, 29 secondsBut it's all about training data and it's with everything in AI. How good your training data is,
1:05:351 hour, 5 minutes, 35 secondsis in many ways more important than how many steps you train for like how many months or whatever with these GPUs. The goals.
1:05:431 hour, 5 minutes, 43 seconds- Do you have any guidelines for people of how to get good data? How to give good data to fine tune on? - The photos should be diverse.
1:05:501 hour, 5 minutes, 50 secondsSo for example, if I only upload photos with a brown shirt or green shirts, the model will think that I'm training the green shirts.
1:05:581 hour, 5 minutes, 58 secondsSo the things that are the same every photo are the concepts that are trained.
1:06:031 hour, 6 minutes, 3 secondsWhat you want is your face to be the concept that's trained and everything else to be diverse, like different. - So diverse lighting as well, diverse everything.
1:06:121 hour, 6 minutes, 12 seconds- Yeah, outside, inside. But there's no, like, this is the problem. There's no like manual for this, and nobody knew. We were all just... Especially two years ago,
1:06:191 hour, 6 minutes, 19 secondswe're all hacking, trying to test anything. Anything you can think of. And it's frustrating.
1:06:261 hour, 6 minutes, 26 secondsIt's one of the most frustrating and also fun and challenging things to do because with AI, 'cause it's a black box. And like Karpathy, I think says this.
1:06:351 hour, 6 minutes, 35 secondsWe don't really know how this thing works, but it does something. But nobody really knows why, right? We cannot look into the model of an LLM,
1:06:441 hour, 6 minutes, 44 secondslike what is actually in there. We just know it's a 3D matrix of numbers, right? So it's very frustrating,
1:06:521 hour, 6 minutes, 52 seconds'cause some things you...
1:06:541 hour, 6 minutes, 54 secondsYou think they're obvious that they will improve things will make them worse. And there's so many parameters you can tweak. So you're testing everything to improve things.
1:07:041 hour, 7 minutes, 4 seconds- I mean there's a whole field novel of mechanistic interpretability that like studies that tries to figure out,
1:07:091 hour, 7 minutes, 9 secondstries to break things apart and understand how it works.
1:07:121 hour, 7 minutes, 12 secondsBut there's also the data side and the actual like consumer facing product side of figuring out how you get it to generate a thing that's beautiful or interesting or naturalistic,
1:07:231 hour, 7 minutes, 23 secondsall that kind of stuff. - Yeah.
1:07:241 hour, 7 minutes, 24 seconds- And you're like at the forefront of figuring that out about the human face.
1:07:271 hour, 7 minutes, 27 seconds- Yeah. - And humans really care about the human face. - They're very vain. (Lex laughs) - Like me, I want to look good on your podcast- - Yeah. - For example. - Yeah, for sure.
1:07:361 hour, 7 minutes, 36 seconds- And then one of the things I actually would love to like rigorously use Photo AI, because for the thumbnails,
1:07:441 hour, 7 minutes, 44 secondsI take portraits of people. I don't a shit about photography. I basically used your approach for photography. I like Google.
1:07:521 hour, 7 minutes, 52 secondsHow do you take photographs? - Yeah. - Camera, lighting.
1:07:561 hour, 7 minutes, 56 secondsAnd also it's tough because maybe you could speak to this also, but with photography, no offense, Danny,
1:08:041 hour, 8 minutes, 4 secondsthey're true artists, great photographers. But people take themselves way too seriously. Think you need a whole lot of equipment.
1:08:131 hour, 8 minutes, 13 secondsYou definitely don't want one light, you need like five lights. - Man, I know this. - And you have to have like the lenses.
1:08:221 hour, 8 minutes, 22 secondsAnd I talked to a guy, an expert of shaping the sound in a room, okay?
1:08:311 hour, 8 minutes, 31 secondsBecause I was thinking, I'm gonna do a podcast studio, whatever, I should probably treat, do a sound treatment on the room.
1:08:401 hour, 8 minutes, 40 secondsAnd when he showed up and analyzed the room, he thought everything I was doing was horrible. And then that's when I realized like, you know what?
1:08:481 hour, 8 minutes, 48 secondsI don't need experts in my life. - You kick him outta the house. - No, I didn't kick them. I mean, I said thank you, thank you very much. - Thank you. Great tips, bye.
1:08:561 hour, 8 minutes, 56 seconds- I just felt like there is... Focus on whatever the problems are. Use your own judgment, use your own instincts.
1:09:041 hour, 9 minutes, 4 secondsDon't listen to other people,
1:09:061 hour, 9 minutes, 6 secondsand only consult other people when there's a specific problem. And you consult them, not to offload the problem onto them, but to gain wisdom from their perspective.
1:09:141 hour, 9 minutes, 14 secondsEven if their perspective is ultimately one you don't agree with, you're gonna gain wisdom from that. I ultimately come up with like a PHP solution.
1:09:231 hour, 9 minutes, 23 secondsPHP and jQuery solution- - PHP studio. - PHP studio. I have a little suitcase, I use just the basic sort of consumer type of stuff.
1:09:341 hour, 9 minutes, 34 secondsOne light, it's great. - Yeah, and look at you,
1:09:371 hour, 9 minutes, 37 secondsyou're like one of the top podcasts in the world and you get millions of views and it works.
1:09:411 hour, 9 minutes, 41 secondsAnd the people that spend so much money on optimizing for the best sound for the best studio, they get like 300 views. So what is this about?
1:09:481 hour, 9 minutes, 48 secondsThis is about that either you do really well or also that a lot of these things don't matter. What matters is probably the content of the podcast. - [Lex] Yeah.
1:09:561 hour, 9 minutes, 56 seconds- You get the interesting guests - Focus on stuff that matters. - Yeah, and I think that's very common. They call it Gear Acquisition Syndrome. Guests, like people in any industry do this,
1:10:051 hour, 10 minutes, 5 secondsthey just buy all the stuff. There was a meme recently.
1:10:071 hour, 10 minutes, 7 secondsWhat's the name for the guy that buys all the stuff before he even started doing the hobby, right? Marketing. Marketing does that to people.
1:10:151 hour, 10 minutes, 15 secondsThey wanna buy this stuff. - Yeah. - But like, man, you can make a Hollywood movie on an iPhone.
1:10:221 hour, 10 minutes, 22 secondsIf the content is good enough,
1:10:251 hour, 10 minutes, 25 secondsand it will probably be original because you would be using an iPhone for it.
1:10:291 hour, 10 minutes, 29 seconds- That said, so the reason I brought that up with photography.
1:10:341 hour, 10 minutes, 34 secondsThere is wisdom from people and one of the things I realized, you probably also realized this,
1:10:411 hour, 10 minutes, 41 secondsbut how much power light has to convey emotion. Just take one light and move it around.
1:10:491 hour, 10 minutes, 49 secondsSee you're sitting in the darkness, move it around your face.
1:10:521 hour, 10 minutes, 52 secondsThe different positions are having a second light potentially,
1:10:551 hour, 10 minutes, 55 secondsyou can play with how a person feels just from a generic face. - Yeah. - It's interesting. You can make people attractive, you can make 'em ugly, you can make them scary,
1:11:031 hour, 11 minutes, 3 secondsyou can make them lonely. All of this. - Yeah. - And so you kind of start to realize this.
1:11:091 hour, 11 minutes, 9 secondsAnd I would definitely love AI help in creating great portraits of people. - Guest photos, yeah. - Guest photos, for example.
1:11:181 hour, 11 minutes, 18 secondsThat's a small use case. But for me,
1:11:231 hour, 11 minutes, 23 secondsI suppose it's an important use case because I want people to look good but I also wanna capture who they are.
1:11:301 hour, 11 minutes, 30 secondsMaybe my conception of who they are, what makes them beautiful.
1:11:331 hour, 11 minutes, 33 seconds- Yeah. - What makes their appearance powerful in some ways. Sometimes it's the eyes, oftentimes it's the eyes,
1:11:391 hour, 11 minutes, 39 secondsbut there's certain features of the face can sometimes be really powerful. It's also kind of awkward for me to take. - Yeah, yeah, yeah. - Photographs.
1:11:471 hour, 11 minutes, 47 secondsSo I'm not collecting enough. - Yeah.
1:11:491 hour, 11 minutes, 49 seconds- Photographs for myself to do it with just those photographs.
1:11:541 hour, 11 minutes, 54 secondsIf I can load that off onto AI and then start to play with lighting all that stuff. - Man, you should do, and you should probably do it yourself. You can use Photo AI,
1:12:021 hour, 12 minutes, 2 secondsbut it's even more fun if you do it yourself. So you train models, you can learn about like control nets. Control net is where, for example,
1:12:081 hour, 12 minutes, 8 secondsyour photos in your podcast are usually like from the angle, right?
1:12:111 hour, 12 minutes, 11 secondsSo you can create a control net face post that's always like this.
1:12:151 hour, 12 minutes, 15 secondsSo every model, every photo you generate uses this control net photos, for example. I think would be very fun for you to try out that something. - Do you play with lighting at all?
1:12:241 hour, 12 minutes, 24 secondsDo you play with lighting, with pose with the?
1:12:251 hour, 12 minutes, 25 seconds- Man, actually, like this week or recently, there's some new model came out that can adjust the light of any photo.
1:12:321 hour, 12 minutes, 32 secondsBut also AI image with Stable Diffusion. I think it's called Relight. And it's amazing.
1:12:391 hour, 12 minutes, 39 secondsYou can upload kinda like a light map. So for example, red, purple, blue,
1:12:461 hour, 12 minutes, 46 secondsand use the light map to change the light on the photo you input. It's amazing. So there's for sure a lot of stuff you can do.
Chapter 8: How to learn AI
1:12:541 hour, 12 minutes, 54 seconds- What's your advice for people in general on how to learn all this state-of-the-art AI tools available? You mentioned the new models coming out all the time.
1:13:021 hour, 13 minutes, 2 seconds- Yeah. - How do you pay attention? How do you stay on top of everything? - I think you need to join Twitter X.
1:13:101 hour, 13 minutes, 10 secondsX is amazing now and the whole AI industry is on X, and they're all like anime avatars. So (chuckles) it's funny,
1:13:171 hour, 13 minutes, 17 seconds'cause my friends ask me this. Who should I follow to stay up to date? And I say go to X,
1:13:231 hour, 13 minutes, 23 secondsand follow all the AI anime models that this person is following or follows. And I send them something URL, and they all start laughing like, what is this?
1:13:301 hour, 13 minutes, 30 secondsBut they're real like people hacking around in AI. They get hired by big companies and they're on X, and most of 'em are anonymous. It's very funny.
1:13:381 hour, 13 minutes, 38 secondsThey use anime avatar, I don't,
1:13:431 hour, 13 minutes, 43 secondsbut those people hack around and then they publish what they're discovering. They talk about papers, for example. So yeah, definitely X.
1:13:501 hour, 13 minutes, 50 seconds- It's great. I almost exclusively all the people I follow are AI people. - Yeah, it's a good time now.
1:13:571 hour, 13 minutes, 57 seconds- Well, but also just brings happiness to my soul, 'cause there's so much turmoil on Twitter.
1:14:061 hour, 14 minutes, 6 seconds- Yeah, politics and stuff. - There's battles going on. It's like a war zone,
1:14:101 hour, 14 minutes, 10 secondsand it's nice to just go into this happy place to where people are building stuff. - Yeah, 100%. I like Twitter for that most like building stuff,
1:14:181 hour, 14 minutes, 18 secondslike seeing other.
1:14:191 hour, 14 minutes, 19 seconds'Cause it inspires you to build and it's just fun to see other people share what they're discovering and then you're like, okay, I'm gonna make something too.
1:14:271 hour, 14 minutes, 27 secondsIt's just super fun.
1:14:281 hour, 14 minutes, 28 secondsAnd so if you wanna start going X and then I would go to Replicate, and start trying to play with models. And when you have something that kind of,
1:14:361 hour, 14 minutes, 36 secondsyou manually enter stuff, you set the parameters, something that works, you can make an app out of it or a website.
1:14:421 hour, 14 minutes, 42 seconds- Can you speak a little bit more to the process of it becoming better and better and better Photo AI. - So I had this Photo AI, and a lot of people using it.
1:14:491 hour, 14 minutes, 49 secondsThere was like a million or more photos a month being generated.
1:14:531 hour, 14 minutes, 53 secondsAnd I discovered I was testing parameters like increase the step count of generating a photo or chasing the sampler, like a scheduler.
1:15:021 hour, 15 minutes, 2 secondsYou have DPM++2 Karras all these things I don't know anything about,
1:15:051 hour, 15 minutes, 5 secondsbut I know that you can choose them and you generate image and they have different resulting images. But I didn't know which one were better. So I would do it myself, test it.
1:15:131 hour, 15 minutes, 13 secondsBut then I was like, why dot I test on these users? 'Cause I have a million photos generated anyway. So unlike 10% of the users, I would randomly test parameters,
1:15:221 hour, 15 minutes, 22 secondsand then I would see if they would, 'cause you can favor the photo or you can download it. I would measure if they favorite or like the photo.
1:15:291 hour, 15 minutes, 29 secondsAnd then I would AB test, and you test for significance and stuff, which parameters were were better and which were worse?
1:15:371 hour, 15 minutes, 37 seconds- So you start starting to figure out which models are actually working well. - Exactly, and then if it's significant enough data, you switch to that for the whole, you know, all the users.
1:15:451 hour, 15 minutes, 45 secondsAnd so that was like the breakthrough to make it better. Just use the users to improve themselves. And I tell them when they sign up, we do sampling, we do testing on your photos of random parameters,
1:15:541 hour, 15 minutes, 54 secondsand that worked really well.
1:15:551 hour, 15 minutes, 55 secondsI don't do a lot of testing anymore because it's like, I kind of reached a diminishing point where it's like, it's kind of good, but there was a breakthrough, yeah.
1:16:031 hour, 16 minutes, 3 seconds- So it's really about the parameters,
1:16:041 hour, 16 minutes, 4 secondsthe models that choose and letting the users help do the search in the space of models and parameters for you. - Yeah, yeah.
1:16:131 hour, 16 minutes, 13 secondsBut actually, so like Stable Diffusion,
1:16:151 hour, 16 minutes, 15 secondsI used 1.52, 2.0 came out as Stable Diffusion Excel came out, all these new versions and they're all worse.
1:16:211 hour, 16 minutes, 21 secondsAnd so the core scene of people are still using 1.5 because it's also not like, what do you call neutered? They neutered to make it super like,
1:16:301 hour, 16 minutes, 30 secondswith safety features and stuff.
1:16:321 hour, 16 minutes, 32 seconds- Yeah. - So most of the people are still on Stable Diffusion 1.5 and meanwhile Stable Diffusion,
1:16:381 hour, 16 minutes, 38 secondsthe company went like, the CEO left. A lot of drama happened. - Yeah. - Because they couldn't make money,
1:16:451 hour, 16 minutes, 45 secondsand yeah, so it's very interesting, they gave us this open source model that everybody uses. They raised like hundreds of millions of dollars.
1:16:541 hour, 16 minutes, 54 secondsThey didn't make any money, there are not a lot. And they did amazing job. And now everybody uses open source model for free. It's amazing.
1:17:031 hour, 17 minutes, 3 secondsIt's amazing. - You're not even using the latest one, you're saying?
1:17:061 hour, 17 minutes, 6 seconds- No, and the strange thing is that this company raised hundreds of millions, but the people that are benefiting from it are really small.
1:17:101 hour, 17 minutes, 10 secondsPeople like me who make these small apps that are using the model. And now they're starting to charge money for the new models. But the new models are not so good for people.
1:17:191 hour, 17 minutes, 19 secondsThey're not sell open source, right?
1:17:201 hour, 17 minutes, 20 seconds- Yeah, it is interesting because open source is so impactful in the AI space, but you wonder like what is the business model behind that?
1:17:281 hour, 17 minutes, 28 secondsBut it's enabling this whole ecosystem of companies that- - [Pieter] Yeah, yeah. - They're using the open source models. - So it's kinda like this frameworks,
1:17:341 hour, 17 minutes, 34 secondsbut then they didn't bribe enough influence to use it, and they didn't charge money for the platform.
1:17:411 hour, 17 minutes, 41 seconds- Okay, so back to your book and the ideas. We didn't even get to the first step. Generating ideas, so you had notebook,
1:17:511 hour, 17 minutes, 51 secondsand you're filling it up. How do you know when an idea is a good one? You have this just flood of ideas.
1:17:581 hour, 17 minutes, 58 secondsHow do you pick the one that you actually try to build? - Man, mostly you don't know.
1:18:021 hour, 18 minutes, 2 secondsMostly, I choose the ones that are most viable for me to build. I cannot build a space company now, right? It would be quite challenging. But I can build something. - Did you actually write down like space company?
1:18:111 hour, 18 minutes, 11 seconds- No, I think asteroid mining would be very cool. 'Cause like you go to an asteroid, you take some stuff from there, you bring it back, you sell it, you know.
1:18:201 hour, 18 minutes, 20 secondsBut then you need to do... And you can hire someone to launch the thing. So all you need is like the robot that goes to the asteroid, and the robotic is interesting.
1:18:281 hour, 18 minutes, 28 secondsI wanna also learn robotics. So maybe that could be.
1:18:301 hour, 18 minutes, 30 seconds- I think both the asteroid mining and the robotics is- - Yeah. - Together. - I feel like.
1:18:391 hour, 18 minutes, 39 seconds- No, exactly, this is it.
1:18:411 hour, 18 minutes, 41 seconds- It says- - We do this not because it's easy, but because we thought it would be easy. Exactly- - Asteroid mining. - That's me with asteroid mining.
1:18:481 hour, 18 minutes, 48 secondsExactly. (Lex laughs) That's why I should do this. - It's not nomadlist.com. (laughs) - No, it's not. - It's asteroid mining. You have to like build stuff.
1:18:571 hour, 18 minutes, 57 secondsGravity is really hard to overcome. - Yeah, but it seems... Man, I sound like idiots, probably not. But it sounds quite approachable, relatively approachable.
1:19:041 hour, 19 minutes, 4 secondsYou don't have to build a rocket issue. - Oh, you use something like SpaceX to get out the space. - Yeah, you hire SpaceX to send your, you know, this dog robot or whatever.
1:19:121 hour, 19 minutes, 12 seconds- So is there actually existing notebook where you wrote down asteroid mining? - No, back then I used Trello. - Trello. - Yeah. But now I don't really, I used Telegram.
1:19:191 hour, 19 minutes, 19 secondsI rather than like saved messages and I have like idea, I write it down. - You type to yourself on Telegram? - 'Cause you use WhatsApp, right? I think, so you have messages to yourself,
1:19:271 hour, 19 minutes, 27 secondsthing also, yeah, it's like a notepad. - So you're talking to yourself on Telegram. - Yeah, you use like a Notepad, to not forget stuff. And then I pin it.
1:19:331 hour, 19 minutes, 33 seconds- I love how like you're not using super complicated systems or whatever. People use Obsidian now. There's a lot of these-
1:19:401 hour, 19 minutes, 40 seconds- A notion where you have systems for note taking. Your notepad, your notepad.exe guy. If you're those user- - Yeah.
1:19:481 hour, 19 minutes, 48 secondsMan, I saw some YouTubers doing this. There's a lot of these productivity gurus also. And they do this whole iPad with a pencil.
1:19:561 hour, 19 minutes, 56 secondsAnd then I also had an iPad and I also got the pencil and I got this app where you can like draw on paper. Like a calendar. - Yeah.
1:20:041 hour, 20 minutes, 4 seconds- People's students uses and you do coloring and stuff. And I'm like, dude, I did this for a week. And then I'm like, what am I doing in my life?
1:20:101 hour, 20 minutes, 10 secondsI could just write it as a message to myself and it's good enough.
1:20:141 hour, 20 minutes, 14 seconds- Speaking of ideas, you shared a tweet explaining why the first idea sometimes might be a brilliant idea.
1:20:201 hour, 20 minutes, 20 secondsThe reason for this you think is the first idea submerges from your subconscious, and was actually boiling your brain for weeks, months, sometimes years in the background.
1:20:281 hour, 20 minutes, 28 secondsThe eight hours of thinking can never compete with a perpetual subconscious background job.
1:20:331 hour, 20 minutes, 33 secondsSo this is the idea that if you think about an idea for eight hours versus like the first idea that pops into your mind.
1:20:381 hour, 20 minutes, 38 seconds- Yeah. - And sometimes there is subconscious, like stuff that you've been thinking about for many years. That's really interesting. - Yeah, I mean like emerges.
1:20:461 hour, 20 minutes, 46 secondsI wrote it wrong because I'm not native English, but it emerges from your subconscious, right? It comes from the like a water, your subconscious in here, it's boiling,
1:20:551 hour, 20 minutes, 55 secondsand then when it's ready it's like ding.
1:20:581 hour, 20 minutes, 58 secondsIt's like a microwave comes out and there you have your idea. - You think you have ideas like that? - Yeah, all the time, 100%. - It's just stuff that's been like there.
1:21:051 hour, 21 minutes, 5 seconds- Yes. - Yeah. - And also, it comes up and I bring it, I send it back, like send it back to the kitchen- - Not ready yet. - To boil more.
1:21:121 hour, 21 minutes, 12 seconds- Yeah. - And it's like a soup of ideas that's cooking. It's 100%. This is how my brain works, and I think most people. - But it's also about the timing.
1:21:201 hour, 21 minutes, 20 secondsSometimes you have to send it back, not just because you're not ready, but the world is not ready. - Yeah, so many times, startup founders are too early with their idea.
1:21:281 hour, 21 minutes, 28 secondsYeah, 100%.
Chapter 9: Robots
1:21:301 hour, 21 minutes, 30 seconds- Robotics is an interesting one for that because like there's been a lot of robotics companies that failed. - [Pieter] Yeah. - Because it's been very difficult to build, a robotics company, make money,
1:21:381 hour, 21 minutes, 38 seconds'cause there's the manufacturing, like the cost of everything. The intelligence of the robot is enough,
1:21:431 hour, 21 minutes, 43 secondsis not sufficient to create a compelling enough product from which to make money.
1:21:491 hour, 21 minutes, 49 secondsSo there's this long line of robotics companies that have tried, they had big dreams and they failed. - Yeah, like Boston Dynamics. I still don't know what they're doing,
1:21:561 hour, 21 minutes, 56 secondsbut they always upload YouTube videos, and it's amazing. But I feel like a lot of these companies don't have a, it's like a solution looking for a problem for now.
1:22:041 hour, 22 minutes, 4 secondsMilitary obviously use this, do I need like a robotic dog now for my house? I don't know.
1:22:101 hour, 22 minutes, 10 secondsIt's fun, but it doesn't really solve anything yet. I feel the same kinda VR, like it's really cool. Apple Vision Pro is very cool. It doesn't really solve something for me yet.
1:22:191 hour, 22 minutes, 19 secondsAnd that's kind of the tech looking for a solution, right? But one day, will. - When the personal computer, when the Mac came along,
1:22:261 hour, 22 minutes, 26 secondsthere's a big switch that happened.
1:22:291 hour, 22 minutes, 29 secondsIt somehow captivated everybody's imagination and like the application, the killer apps became apparent, you can type in a computer.
1:22:371 hour, 22 minutes, 37 seconds- But take became apparent like immediately. Back then they also had like this thing where like, we don't need these computers. They're like a hype.
1:22:451 hour, 22 minutes, 45 secondsAnd it also went like in kinda like waves.
1:22:491 hour, 22 minutes, 49 seconds- Yeah, yeah, but the hype is the thing that allowed the thing to proliferate sufficiently to where people's minds would start opening up to it a little bit.
1:22:561 hour, 22 minutes, 56 seconds- Yeah. - The possibility of it. Right now, for example, with the robotics, there's very few robots in the homes of people. - Exactly, yeah.
1:23:041 hour, 23 minutes, 4 seconds- The robots that are Roombas, so the vacuum cleaners or they're Amazon Alexa. - Yeah, or dishwasher.
1:23:121 hour, 23 minutes, 12 secondsI mean it's essentially a robot. - Yes, but the intelligence is very limited. - Yeah. - I guess is one way we can summarize all of them. Except Alexa, which is pretty intelligent,
1:23:201 hour, 23 minutes, 20 secondsbut is limited with the kind of ways it interacts with you. That's just one example. - Yeah.
1:23:291 hour, 23 minutes, 29 seconds- I sometimes think about that as like,
1:23:311 hour, 23 minutes, 31 secondsif some people in this world were kind of born in the whole existence is like they were meant to build the thing.
1:23:401 hour, 23 minutes, 40 seconds- Yeah. - I think I sometimes wonder like what I was meant to do. Because you have these plans for your life, you have these dreams.
1:23:491 hour, 23 minutes, 49 seconds- I think you're meant to build robots. - Okay, me personally. (Pieter and Lex laughs) Maybe, maybe. That's a sense of habit,
1:23:581 hour, 23 minutes, 58 secondsbut it could be other things.
1:24:001 hour, 24 minutesIt could hilariously not be the thing I was meant to be is to talk to people. - Yeah. - Which is weird, because I always was anxious about talking to people.
1:24:081 hour, 24 minutes, 8 secondsIt's like a- - Really? - Yeah, I'm scared of this. I was scared is (laughs) yeah, exactly. - I'm scared of you as well. (Lex laughs)
1:24:151 hour, 24 minutes, 15 seconds- It's just anxiety throughout, social interaction in general. I'm an introvert that hides from the world, so yeah. It's really strange. - Yeah, but that's also kinda life.
1:24:241 hour, 24 minutes, 24 secondsLife brings you to,
1:24:251 hour, 24 minutes, 25 secondsit's very hard to super intently kind of choose what you're gonna do with your life. It's more like surfing. You're surfing the waves.
1:24:331 hour, 24 minutes, 33 secondsYou go in the ocean, you see where you end up. - Yeah, yeah. And there's universe has a kind of sense of humor.
1:24:411 hour, 24 minutes, 41 seconds- [Pieter] Yeah. - I guess you have to just, yeah, allow yourself to be carried away by the ways. Yeah. - Exactly, yeah, yeah. - Have you felt that way in your life?
1:24:501 hour, 24 minutes, 50 seconds- Yeah, all the time. Yeah, I think that's the best way to live your life. - So allow whatever to happen. Do you know what you're doing in the next few years?
1:24:571 hour, 24 minutes, 57 secondsIs it possible that it'll be completely, like changed? - Possibly. I think relationships, you wanna hold relationships, right? You wanna hold your girlfriend, you wanna become wife and all this stuff.
1:25:081 hour, 25 minutes, 8 secondsI think you should stay open to where, like for example, where you wanna live. I don't know, we don't know where we wanna live, for example. That's something that will figure itself out.
1:25:171 hour, 25 minutes, 17 secondsIt will crystallize where you will get sent by the waves to somewhere where you only live, for example, what you're gonna do.
1:25:241 hour, 25 minutes, 24 secondsI think that's a really good way to live your life. I think most stress comes from trying to control, like hold things... It's kind of Buddhist.
1:25:321 hour, 25 minutes, 32 secondsYou need to like lose control, let it loose. And things will happen. When you do mushrooms, when you do drugs, like psychedelic drugs. The people that start,
1:25:401 hour, 25 minutes, 40 secondsthat are like control freaks get bad trips, right? 'Cause you need to let go. I'm pretty control freak actually. When I did mushrooms when I was 17,
1:25:501 hour, 25 minutes, 50 secondsit was very good. And then at the end it wasn't so good, 'cause I tried to control it was like, ah, now it's going too much. Let's stop. Bro, you can't stop it. You need to go through with it.
1:26:001 hour, 26 minutesAnd I think it's a good metaphor for life. I think that's very tranquil way to lead your life. - Yeah, actually when I took Ayahuasca,
1:26:091 hour, 26 minutes, 9 secondsthat lesson is deeply within me already that you can't control anything. - [Pieter] Yes. - I think I probably learned that the most in jiu-jitsu.
1:26:171 hour, 26 minutes, 17 secondsSo just let go and relax. - Yeah. - And that's why I had just an incredible experience.
1:26:221 hour, 26 minutes, 22 secondsThere's like literally no negative aspect of my Ayahuasca experience or any psychedelics I've ever had.
1:26:281 hour, 26 minutes, 28 secondsSome of that could be with my biology and my genetics, whatever. But some of it was just not trying to control. - Yeah. - Just surf the wave. - For sure.
1:26:351 hour, 26 minutes, 35 secondsI think most stress in life comes from trying to control. - So once you have the idea- - Yeah. - Step two, build.
1:26:421 hour, 26 minutes, 42 secondsHow do you think about building the thing once you have the idea?
1:26:451 hour, 26 minutes, 45 seconds- I think you should build with the technology that you know. So for example, Nomad List,
1:26:501 hour, 26 minutes, 50 secondswhich is like this website I made to figure out the best cities to live and work as digital nomad. It wasn't a website, it launched as a Google spreadsheets.
1:26:591 hour, 26 minutes, 59 secondsSo it was a public Google spreadsheet. Anybody could edit.
1:27:021 hour, 27 minutes, 2 secondsAnd I was like, I'm collecting cities where we can live with as nomads, with the internet speeds, the cost of living, other stuff.
1:27:101 hour, 27 minutes, 10 secondsAnd I tweeted it, and back then I didn't have a lot of followers. I had like a few thousand followers or something. And I went like viral for my skill viral back then,
1:27:181 hour, 27 minutes, 18 secondsyou know, which was like five retweets. And a lot of people started editing it. And there was like hundreds of cities in this list, from all over the world with all the data.
1:27:251 hour, 27 minutes, 25 secondsIt was very crowdsourced. And then I made that into a website.
1:27:291 hour, 27 minutes, 29 secondsSo figuring out like what technology you can use that you already know. So if you cannot code, you can use a spreadsheet. If you cannot use a spreadsheet, like whatever,
1:27:381 hour, 27 minutes, 38 secondsyou can always use a, for example,
1:27:401 hour, 27 minutes, 40 secondsa website generator like Wix or something or Squarespace, right? You don't need to code to build a startup. All you need is idea for a product.
1:27:491 hour, 27 minutes, 49 secondsBuild something like a landing page or something. Put a Stripe button on there and then make it. And if you can code,
1:27:561 hour, 27 minutes, 56 secondsuse the language that you already know and start coding with that and see how far you can get. You can always rewrite the code later. The tech stack is not actually,
1:28:041 hour, 28 minutes, 4 secondsit's not the most important of a business when you're starting on a business.
1:28:071 hour, 28 minutes, 7 secondsThe important thing is that you validate that there's a market, that there's a product that people wanna pay for. So use whatever you can use. And if you cannot code,
1:28:151 hour, 28 minutes, 15 secondsuse spreadsheets, landing page generators, whatever. - Yeah, and the crowdsourcing element is fascinating.
1:28:241 hour, 28 minutes, 24 secondsIt's cool, it's cool when a lot of people start using it. You get to learn so fast. - Yeah. - I've actually did the spreadsheet thing.
1:28:331 hour, 28 minutes, 33 secondsYou share a spreadsheet publicly and I made it editable. - Yeah. - It's so cool. - [Pieter] Interesting things start happening. - Yeah, I did it for like a workout thing,
1:28:411 hour, 28 minutes, 41 seconds'cause I was doing a large amount of pushups and pull ups every day. - Yeah, I remember this man, yeah.
1:28:461 hour, 28 minutes, 46 seconds- (laugh) And well, I had Google Sheets is pretty limited and that everything is allowed.
1:28:521 hour, 28 minutes, 52 secondsSo people could just write anything in any cell and they can create new sheets. - Yeah. - New tabs. And it just exploded.
1:29:001 hour, 29 minutesAnd one of the things that I really enjoyed is there's very few trolls because actually other people would delete the trolls.
1:29:101 hour, 29 minutes, 10 secondsThere would be like this weird war- - Army, yeah. - Of like. They want like to protect the thing. It's an immune system that's inherent to the thing. - It comes to society. - Yeah.
1:29:191 hour, 29 minutes, 19 seconds- In the spreadsheets.
1:29:201 hour, 29 minutes, 20 seconds- And then there's the outcast who go to the bottom of the spreadsheet and they would try to hide messages,
1:29:241 hour, 29 minutes, 24 secondsand they like, I don't wanna be with the cool kids up at the top of the spreadsheet, so I'm gonna at the bottom. - Self-harmonizing. - Yes. - It's insane. - It's fast.
1:29:311 hour, 29 minutes, 31 secondsI mean, but that kind of crowdsourcing element is really powerful.
1:29:341 hour, 29 minutes, 34 secondsAnd if you can create a product that use that to his benefit, that's really nice.
1:29:411 hour, 29 minutes, 41 secondsAny kind of voting system, any kind of rating system for A and B testing is really- - Yeah. - Really, really fascinating. So anyway, so Nomad List is great. I would love for you to talk about that.
Chapter 10: Hoodmaps
1:29:501 hour, 29 minutes, 50 secondsBut one sort of way to talk about it is through you building Hoodmaps.
1:29:581 hour, 29 minutes, 58 seconds- Yeah. - So you did an awesome thing,
1:30:001 hour, 30 minuteswhich is document yourself building the thing and doing so in just a handful of days, like three, four, five days.
1:30:081 hour, 30 minutes, 8 secondsSo people should definitely check out the video in the blog post.
1:30:131 hour, 30 minutes, 13 secondsCan you explain what Hoodmaps is and what this whole- - Yeah. - This process was? - So I was traveling, and I was still trying to find problems, right?
1:30:201 hour, 30 minutes, 20 secondsI would discover that like everybody's experience of a city is different because they stay in different areas.
1:30:251 hour, 30 minutes, 25 seconds- Yeah. - So I'm from Amsterdam and when I grew up in Amsterdam or I didn't grow up, but I lived there, in university, I knew that center is like in Europe,
1:30:331 hour, 30 minutes, 33 secondsthe centers are always tourist areas. So they're super busy, they're not very authentic. They're not really Dutch culture, it's Amsterdam tourist culture.
1:30:421 hour, 30 minutes, 42 secondsSo when people would travel to Amsterdam would say,
1:30:441 hour, 30 minutes, 44 secondsdon't go to the center, go to Southeast of the center, Jordaan or the De Pijp or something, more hipster areas.
1:30:511 hour, 30 minutes, 51 secondsA little more authentic culture of Amsterdam. That's where I would live, and where I would go.
1:30:581 hour, 30 minutes, 58 secondsAnd I thought this could be like an app where you can have like a Google maps and you put colors over it. You have areas that are like color code. Red is tourists, green is rich,
1:31:071 hour, 31 minutes, 7 secondsgreen money, yellow is hipster.
1:31:091 hour, 31 minutes, 9 secondsYou can figure out where you need to go in the city when you travel, 'cause I was traveling a lot. I wanted to go to the cool spots. - So just use color. - Yeah. Color, yeah. Yeah, and I would use a Canvas.
1:31:171 hour, 31 minutes, 17 secondsSo I thought, okay, what do I need? I need to- - Did you know that you would be using a Canvas? - No, I didn't know it was possible, 'cause I didn't know. - So this is the cool thing.
1:31:251 hour, 31 minutes, 25 secondsPeople should really check out. - This is how it started. - Because you're honestly capture so beautifully, the humbling aspects,
1:31:331 hour, 31 minutes, 33 secondsthe embarrassing aspects of like not knowing what to do. It's like how do I do this? And you document yourself. Yeah, you're right.
1:31:421 hour, 31 minutes, 42 secondsDude, I feel embarrassed about myself. (laughs) - Oh, really, yeah. - It's called being alive. Nice. So you're like, you don't know anything about,
1:31:501 hour, 31 minutes, 50 secondsso Canvas is a HTML5 thing that allows you to draw shapes.
1:31:581 hour, 31 minutes, 58 seconds- Yeah, draw images. Just draw pixels essentially so. - Yeah. - And that was special back then. Because before you could only have like elements, right? So you wanna draw a pixel, use a Canvas.
1:32:071 hour, 32 minutes, 7 secondsAnd I knew I needed to draw pixels 'cause I need to draw these colors. And I felt like, okay, I'll get like a Google maps iframe embed,
1:32:141 hour, 32 minutes, 14 secondsand then I'll put a Dave on top of it with the colors, and I'll do like opacity 50, so it kind of shows. So I did that with Canvas.
1:32:231 hour, 32 minutes, 23 secondsAnd then I started drawing, and then I felt like,
1:32:261 hour, 32 minutes, 26 secondsobviously, other people need to edit this 'cause I cannot draw all these things myself. So I crowdsource it again,
1:32:321 hour, 32 minutes, 32 secondsand you would draw on the map and then it would send the pixel data to the server. It would put it in the database, and then I would have a robot running like a cron job,
1:32:401 hour, 32 minutes, 40 secondswhich every week would calculate, or every day would calculate. Okay, so Amsterdam Center, there's like six people say, it's tourist, this part of the center,
1:32:481 hour, 32 minutes, 48 secondsbut two people say, it's like hipster. Okay, so the tourist part wins, right? It's just an array.
1:32:531 hour, 32 minutes, 53 secondsSo find the most common value in a little pixel area on a map. So if most people say it's tourists, it's tourists, and it becomes red.
1:33:021 hour, 33 minutes, 2 secondsAnd I would do that for all the GPS corners in the world. - Can we just clarify- - Yeah. - As a human that's contributing to this,
1:33:091 hour, 33 minutes, 9 secondsdo you have to be in that location to make the label or do you? - No, people just type in cities and go like, go berserk and start drawing everywhere. - Would they draw shapes or would they draw pixels?
1:33:181 hour, 33 minutes, 18 seconds- Man, they drew like crazy stuff. Like offensive symbols. I cannot mention they would draw penises. - I mean, that's obviously a guy thing.
1:33:251 hour, 33 minutes, 25 seconds- I would do the same thing, draw penises. - That's the first thing. (Pieter laughs) When I show up to Mars and there's no cameras, I'm drawing penis on the sand. - Man, I did it in the snow, you know,
1:33:331 hour, 33 minutes, 33 secondsbut the penises did not become a problem,
1:33:351 hour, 33 minutes, 35 seconds'cause I knew that not everybody would draw a penis and not in the same place. So most people would use it fairly. So just if I had enough crowdsource data.
1:33:421 hour, 33 minutes, 42 secondsSo you have all these pixels on top of it. It's like a layer of pixels. - Yeah. - And then you choose the most common pixel. So yeah, it's just like a bowl, but in visual format.
1:33:511 hour, 33 minutes, 51 secondsAnd it worked and within a week got enough data, and it was like cities that did really well, like Los Angeles, a lot of people started using it.
1:34:001 hour, 34 minutesLike most data's in Los Angeles. - Because Los Angeles has defined neighborhoods.
1:34:051 hour, 34 minutes, 5 seconds- Yeah. - And not just in terms of the official labels, but like what they're known for. - [Pieter] Yeah.
1:34:131 hour, 34 minutes, 13 seconds- Did you provide the categories that they were allowed to use as labels? - The colors, yeah. - As colors. - So I think you can see there,
1:34:211 hour, 34 minutes, 21 secondsthere's like hipster, tourist, rich, business. There's always a business area, right? And then there's a residential. Residential is gray.
1:34:291 hour, 34 minutes, 29 secondsSo I thought those were the most common things in the city kind of. - And a little bit meme,
1:34:331 hour, 34 minutes, 33 secondslike it's almost fun to label it as that, right? - Yeah. I mean obviously, it's simplified, but you need to simplify this stuff. You don't wanna have too many categories.
1:34:401 hour, 34 minutes, 40 secondsAnd it's essentially just like using a paint brush where you select the color in a bottom, you stick the category and you start drawing. There's no instruction.
1:34:481 hour, 34 minutes, 48 secondsThere's no manual.
1:34:491 hour, 34 minutes, 49 secondsAnd then I also added tagging so people could like write something on a specific location. So don't go here or here's like nice cafe and stuff.
1:35:001 hour, 35 minutesAnd man, the memes that came from that. And I also had upvoting, so that the tags could be upvoted. So the memes that came from that is like amazing.
1:35:081 hour, 35 minutes, 8 secondsPeople in Los Angeles would write crazy stuff. It would go viral in all these cities.
1:35:121 hour, 35 minutes, 12 secondsYou can allow your location and will probably send you to Austin. - (laughs) Okay, so we're looking,
1:35:181 hour, 35 minutes, 18 seconds(laughs) oh boy, drunk hipsters.
1:35:281 hour, 35 minutes, 28 seconds- AirBroNBros. - AirBroNBros. - Gentrifiers. - Hipster girls who do cocaine. - I saw a guy in a fish costume get beaten up here.
1:35:361 hour, 35 minutes, 36 seconds- Yep, that seems also accurate. - Overpriced and underwhelming. - (laughs) Let me see, let me make sure this is accurate.
1:35:461 hour, 35 minutes, 46 secondsLet's see. Dirty Sixth for people who know Austin know that that's important to label.
1:35:541 hour, 35 minutes, 54 secondsSixth Street is famous in Austin. Dirty Sixth drunk frat boys, accurate. Drunk frat bros. Continued on sixth, very well -known.
1:36:031 hour, 36 minutes, 3 seconds- West Sixth douchebros. - West Sixth douchebros. - They go from frat to douche. - Douche. I mean it's very accurate so far. - Really.
1:36:111 hour, 36 minutes, 11 seconds- They only let hot people live here. (laughs) I think that might be accurate. - It's like the district.
1:36:211 hour, 36 minutes, 21 secondsExercise freaks on the river. Yeah, that's true. - Dog runners accurate. - Yeah. - Saw a guy in the fish costume get beat up here. - I wanna know the story.
1:36:291 hour, 36 minutes, 29 seconds- So that's all user contributed. - Yeah, and that's like stuff I couldn't come up with it, 'cause I don't know Austin, I don't know the memes here in the subcultures.
1:36:371 hour, 36 minutes, 37 seconds- And then me as a user can upload or down vote this. - [Pieter] Yes. - So this is completely crowdsourced. - It's like 'cause of Reddit upvote, downvote, took it from there.
1:36:451 hour, 36 minutes, 45 seconds- That's really, really, really powerful. Single people with dogs, accurate.
1:36:491 hour, 36 minutes, 49 secondsAt which point did it go from colors to the actually showing the text? - I think I added the text like a week after. And so here's like the pixels.
1:36:591 hour, 36 minutes, 59 seconds- So that's really cool. The pixels, how do you go from that? That's a huge amount of data. - Yeah.
1:37:041 hour, 37 minutes, 4 seconds- Now looking at an image where it's just a sea of pixels that call it different colors. - Yeah. - In a city.
1:37:101 hour, 37 minutes, 10 secondsSo how do you combine that to be a thing that actually makes it some sense? - I think here the problem was that you have this data, but it's like it's not locked to one location.
1:37:191 hour, 37 minutes, 19 seconds- Yeah. - So I had to normalize it. So when you click, when you draw on a map,
1:37:231 hour, 37 minutes, 23 secondsit will show you the specific pixel location and you can convert the pixel location to a GPS coordinate, right? Like latitude, longitudes.
1:37:291 hour, 37 minutes, 29 secondsBut the number will have a lot of commas or a lot of decimals, right? Because it's very specific, it's like this specific part of the table.
1:37:351 hour, 37 minutes, 35 secondsSo what you wanna do is you wanna take that pixel and you wanna normalize it by removing like decimals, which I discovered, so you're talking about this neighborhood,
1:37:431 hour, 37 minutes, 43 secondsor this street, right? And so that's what I did.
1:37:451 hour, 37 minutes, 45 secondsI just took the decimals off and then I saved it like this. And then it starts going to like a grid. And then you have like a grid of data.
1:37:541 hour, 37 minutes, 54 secondsYou get like a pixel map kind of. - And then you said it looks kind of ugly, so then you smooth it. - Yeah, I started adding blurring and stuff.
1:38:021 hour, 38 minutes, 2 secondsI think now it's not smooth again, 'cause I liked it better. People like the pixel look kinda. Yeah, a lot of people use it and it keeps going viral.
1:38:091 hour, 38 minutes, 9 secondsAnd every time my maps bill like Mapbox, I had to stop using... You first use Google Maps, it went viral, and Google Maps, it was out of credits.
1:38:201 hour, 38 minutes, 20 secondsIt's so funny, when I launched it, it went viral. Google Maps, the map didn't load anymore. It says over the limits, you need to contact enterprise sales.
1:38:301 hour, 38 minutes, 30 secondsBut I need now like a map. And I don't wanna contact enterprise sales. I don't wanna go on a call schedule with some calendar. So I switched to Mapbox,
1:38:381 hour, 38 minutes, 38 secondsand then had Mapbox for years,
1:38:391 hour, 38 minutes, 39 secondsand then it went viral and I had a bill of $20,000 was like last year. So they helped me with the bill. They said, "You can pay less."
1:38:481 hour, 38 minutes, 48 secondsAnd then I now switched to like a open source kind of map platform.
1:38:521 hour, 38 minutes, 52 secondsSo it's a very expensive product and never made any dollar money. But it's very fun. But it's very expensive. - What do you learn from that?
1:38:591 hour, 38 minutes, 59 secondsSo like from that experience, 'cause when you leverage somebody else's through the API.
1:39:061 hour, 39 minutes, 6 seconds- Yeah, I mean I don't think a map hosting service should cost this much. But I could host it myself,
1:39:131 hour, 39 minutes, 13 secondsbut that would be... I dunno how to do that, but I could do that. - Yeah, it's super complicated. - I think that the thing is more about like, you can't make money with this project.
1:39:221 hour, 39 minutes, 22 secondsI tried to do many things to make money with it and it hasn't worked.
1:39:261 hour, 39 minutes, 26 secondsYou talked about like possibly doing advertisements on it or some somehow. - [Pieter] Yeah. - Or people sponsoring it, yeah.
1:39:321 hour, 39 minutes, 32 secondsIt's really surprising to me that people don't want to advertise on it. - I think map apps are very hard to like monetize. Google Maps also doesn't really make money.
1:39:411 hour, 39 minutes, 41 secondsSometimes you see these ads, but I don't think there's a lot of money there. You could put like a banner ad but it's kind of ugly, and the product is kind of like, it's kind of cool.
1:39:501 hour, 39 minutes, 50 secondsSo it's kinda fun to like subsidize it. And it's kinda a little bit part of Nomad List. I put it on Nomad List in the cities as well. But I also realized,
1:39:581 hour, 39 minutes, 58 secondsyou don't need to monetize everything.
1:40:001 hour, 40 minutesSome products are just cool and it's cool to have Hoodmaps exist. I want this to exist, right?
1:40:081 hour, 40 minutes, 8 seconds- Yeah, there's a bunch of stuff you've created that I'm just glad exists in this world. That's true. And it's a whole nother puzzle. And I'm surprised to figure out how to make money off of it.
1:40:171 hour, 40 minutes, 17 secondsI'm surprised maps don't make money, but you're right, it's hard. It's hard to make money. - Yeah.
1:40:221 hour, 40 minutes, 22 seconds- 'Cause there's a lot of compute required to actually bring it to life. - Also, where do you put the ad, right?
1:40:271 hour, 40 minutes, 27 secondsIf you have a website, you can put an ad box or you can do a product placement or something.
1:40:321 hour, 40 minutes, 32 secondsBut you're talking about a map app that where 90% of the interface is a map. So what are you gonna do? It's hard to figure out where is this?
1:40:401 hour, 40 minutes, 40 seconds- Yeah, and people don't wanna pay for it. - No, exactly, because if you make people pay for it,
1:40:451 hour, 40 minutes, 45 secondsyou lose 99% of the user base and you lose the crowdsource data. So it's not fun anymore. It stops being accurate, right?
1:40:521 hour, 40 minutes, 52 secondsThey pay for it by crowdsourcing the data, but then, yeah, it's fine. It doesn't make money, but it's cool.
1:40:591 hour, 40 minutes, 59 seconds- But that said, Nomad List makes money. - Yeah. - So what was the story behind Nomad List?
1:41:051 hour, 41 minutes, 5 secondsSo Nomad List started because I was in Chiang Mai in Thailand, which is now like the second city here. And I was working on my laptop.
1:41:151 hour, 41 minutes, 15 secondsI met like other nomads there, and I was like, okay, this seems like a cool thing to do, like working on your laptop in a different country, kinda travel around.
1:41:231 hour, 41 minutes, 23 secondsBut back then the internet everywhere was very slow. So the internet was fast in, for example, Holland or United States,
1:41:281 hour, 41 minutes, 28 secondsbut in a lot of parts in South America or Asia was very slow, like 0.5 megabits. So you couldn't watch a YouTube video.
1:41:361 hour, 41 minutes, 36 secondsThailand weirdly had like quite fast internet.
1:41:391 hour, 41 minutes, 39 secondsBut I wanted to find like other cities where I could go to like work on my laptop, whatever, and travel. But we needed like fast internet.
1:41:481 hour, 41 minutes, 48 secondsSo I was like, let's crowdsource this information with a spreadsheet. And I also needed to know the cost of living, 'cause I didn't have a lot of money. I had $500 a month.
1:41:561 hour, 41 minutes, 56 secondsSo I had to find a place where the rent was $200 per month or something where I had some money that I could actually rent something and there was Nomad List.
1:42:061 hour, 42 minutes, 6 secondsAnd it still runs. I think it's now almost 10 years. - So it's just to describe how it works. - [Pieter] Yeah. - I'm looking at Chiang Mai here.
1:42:131 hour, 42 minutes, 13 secondsThere's a total score, rank number two. - Yeah, that's a number score. - 4.82 like by members. But it's looking at the internet.
1:42:231 hour, 42 minutes, 23 secondsIn this case, it's fast. - Yeah. - Fun, temperature, humidity, air quality,
1:42:281 hour, 42 minutes, 28 secondssafety, food safety, crime, racism or lack of crime, lack of racism, educational level,
1:42:361 hour, 42 minutes, 36 secondspower grid, vulnerability, to climate change, income level. - It's a little much. - English. It's awesome. It's awesome. Walkability. - Keep getting stuff.
1:42:451 hour, 42 minutes, 45 seconds- Because for certain groups of people, certain things really matter. And this is really cool. - Yeah. - Happiness. I'd love to ask you about that. Nightlife, free Wi-Fi, AC,
1:42:561 hour, 42 minutes, 56 secondsfemale friendly, freedom of speech. - Yeah, not so good in Thailand. - Values derived from national statistics. (laughs) I like how that one.
1:43:041 hour, 43 minutes, 4 seconds- I need to do that because the data sets are usually national. They're not on city level, right? - Yes.
1:43:081 hour, 43 minutes, 8 seconds- So I dunno about the freedom of speech between Bangkok or Chiang Mai. I know them in Thailand. - I mean this is really fascinating. So this is for city? - Yeah.
1:43:151 hour, 43 minutes, 15 seconds- Is basically rating all the different things that matter to you and internet. And this is all crowdsourced. - Well, so started crowdsourced,
1:43:221 hour, 43 minutes, 22 secondsbut then I realized that you can download more accurate data sets from like public source,
1:43:301 hour, 43 minutes, 30 secondslike World Bank. They have a lot of public data sets, United Nations, and you can download a lot of data there, which you can freely use.
1:43:381 hour, 43 minutes, 38 secondsI started getting frauds crowdsource data where, for example, people from India, they really love India,
1:43:431 hour, 43 minutes, 43 secondsand they would submit the best scores for everything in India. And not just like one person, but like a lot of people, they would love to pump India.
1:43:511 hour, 43 minutes, 51 secondsAnd I'm like, I love India too, but that's not valid data.
1:43:551 hour, 43 minutes, 55 secondsSo you started getting discrepancies in the data between where people where from and stuff. So I started switching to data sets, and now it's mostly data sets,
1:44:041 hour, 44 minutes, 4 secondsbut one thing that's still crowdsourced is, so people add where they are,
1:44:071 hour, 44 minutes, 7 secondsthey add their travels to their profile and use that data to see which places are upcoming and which places are popular now.
1:44:151 hour, 44 minutes, 15 secondsSo about half the ranking you see here is based on actual digital nomads who are there. You can click on the city, you can click on people, and you can see the people,
1:44:221 hour, 44 minutes, 22 secondsthe users that are actually there. And it's like 30,000, 45,000 members. So these people are in Austin now. - 1,800 remote workers in Austin now.
1:44:301 hour, 44 minutes, 30 seconds- Yeah. - Of which 8+ members checked in. Members who will be here soon and go. - Yeah, so we have meetups. - It's amazing.
1:44:371 hour, 44 minutes, 37 seconds- So people organize their own meetups and we have about, I think like 30 per month. So it's like one meetup a day. And I don't do anything.
1:44:451 hour, 44 minutes, 45 secondsThey organize themselves. It's a whole black box. It just runs and I don't do a lot on it. It pulls data from everywhere and it just works.
1:44:561 hour, 44 minutes, 56 seconds- Cons of Austin. It's too expensive, very sweaty, and humid now. Difficult to make friends. - Difficult to make friends. Interesting, right? I didn't know that. - Difficult to make friends- - In Austin.
1:45:041 hour, 45 minutes, 4 seconds- But its all crowdsource, but mostly it's pros. - Yeah, Austin's very- - Pretty safe, fast internet.
1:45:091 hour, 45 minutes, 9 seconds- I understand why it says not safe for women to check the dataset. It feels safe.
1:45:141 hour, 45 minutes, 14 secondsThe problem with a lot of places like United States is that it depends per area, right? - Yeah.
1:45:191 hour, 45 minutes, 19 seconds- So if you get like city level data or nation level data,
1:45:211 hour, 45 minutes, 21 secondsit's like Brazil is the worst because the range in like safe and wealthy and not safe is like huge.
1:45:291 hour, 45 minutes, 29 secondsSo you can't say many things about Brazil. - So once they actually show up to the city, how do you figure out what area? Like where to get fast Internet.
1:45:371 hour, 45 minutes, 37 secondsFor example, for me, it's consistently a struggle to figure out like- - Still. - Hotels with fast Wi-Fi, for example, like a place.
1:45:451 hour, 45 minutes, 45 secondsOkay, okay, I show up to a city. There's a lot of fascinating puzzles,
1:45:491 hour, 45 minutes, 49 secondsand I haven't figured out a way to actually solve this puzzle. When I show up to a city,
1:45:541 hour, 45 minutes, 54 secondsfiguring out where I can get fast internet connection and for podcasting purposes where I can find a place with a table that's quiet.
1:46:041 hour, 46 minutes, 4 seconds- Right, yeah, yeah. - That's not easy. - Construction sounds. - All kinds of sounds.
1:46:081 hour, 46 minutes, 8 secondsYou get to learn about all the sources of sounds in the world,
1:46:111 hour, 46 minutes, 11 secondsand also the quality of the room because the emptier the room
1:46:181 hour, 46 minutes, 18 secondsand if it's just walls without any curtains or any of this kind of stuff, then there's echoes in the room anyway.
1:46:251 hour, 46 minutes, 25 secondsBut you figure out that a lot of hotels don't have tables. They don't have like normal. - They have this weird desk, right? - Yeah, they have- - But it's not a center table.
1:46:331 hour, 46 minutes, 33 seconds- Yep, and if you want get a nicer hotel where it is more spacious and so on. They usually have these like boutique,
1:46:411 hour, 46 minutes, 41 secondsfancy looking, modernist- - Annoying tables. - Tables, that don't- - Yeah, it's too designy. - It's too designy. - Yeah. - They're not really real tables. - What if you get Ikea?
1:46:491 hour, 46 minutes, 49 seconds- Buy Ikea? - Yeah, before you arrive you order an Ikea. - Yeah. - Nomads do this. They get desks.
1:46:541 hour, 46 minutes, 54 seconds- I feel like you should be able to show up to a place and have the desk. Unless you stay in there for a long time. Just the entire assembly, all that.
1:47:021 hour, 47 minutes, 2 secondsAirbnb is so unreliable. The range in quality that you get- - Yeah. - Is huge.
1:47:101 hour, 47 minutes, 10 secondsHotels have a lot of problems, pros and cons. Hotels have the problem that the pictures,
1:47:151 hour, 47 minutes, 15 secondssomehow never have good representative pictures of what's actually going to be in the room. - And that's the problem. Fake photos, man.
1:47:231 hour, 47 minutes, 23 seconds- If I could have the kind of data you have on Nomad List for hotels. - Yeah, yeah, man. - And I feel like you can make a lot of money on that too. - Yeah, the booking fees affiliate, right?
1:47:311 hour, 47 minutes, 31 secondsI thought about this idea, 'cause we have the same problem. I go to hotels,
1:47:341 hour, 47 minutes, 34 secondsand there's specific ones that are very good and I know now the chains and stuff,
1:47:391 hour, 47 minutes, 39 secondsbut even if you go to some chains are very bad in a specific city and very good in other cities. - And each individual hotel has a lot of kinds of rooms.
1:47:471 hour, 47 minutes, 47 seconds- Yeah. - Some are more expensive, some are cheaper, and so on. But you can get the details of what's in the room.
1:47:551 hour, 47 minutes, 55 secondsWhat's the actual layout of the room, what is the view of the room. - You scan it. - I feel like as a hotel you can win a lot.
1:48:011 hour, 48 minutes, 1 secondSo first, you create a service that allows you to have high resolution data about a hotel, then one hotel signs up for that.
1:48:091 hour, 48 minutes, 9 secondsI would 100% use that website to look for a hotel instead of the crappy alternatives that don't give any information.
1:48:161 hour, 48 minutes, 16 secondsAnd I feel like there'll be this pressure for all the hotels to join that site and you could make a ton of money, 'cause hotels make a lot of money. - I think it's true.
1:48:241 hour, 48 minutes, 24 secondsBut the problem is with these hotels, like it's same with airline industry.
1:48:271 hour, 48 minutes, 27 secondsWhy does every airline website suck when you try book a flights? - Yeah. - It's very strange. Why does it have to suck? Obviously, there's competition here. Why doesn't the best website win?
1:48:351 hour, 48 minutes, 35 seconds- What's the explanation of that? - Man, I thought about this for years. So I think it's like I have to book the flight anyway.
1:48:411 hour, 48 minutes, 41 secondsI know there's a route that they take and I need to book, for example, Qatar Airlines, and I need to get through this process.
1:48:501 hour, 48 minutes, 50 secondsAnd with a hotel similar, you need a hotel anyway. So do you have time to like figure out the best one? Not really.
1:48:561 hour, 48 minutes, 56 secondsYou kind of just need to get the place booked and you need to get the flight and you'll go through the pain of this process.
1:49:031 hour, 49 minutes, 3 secondsAnd that's why this process always sucks so much for hotels and airline websites and stuff. Because they don't have an incentive to improve it,
1:49:091 hour, 49 minutes, 9 secondsbecause generally only for a super upper segment of the market, I think super high luxury, it affects the actual booking, right?
1:49:171 hour, 49 minutes, 17 seconds- I don't know. I think that's an interesting theory. I think that must be a different theory. My theory would be that great engineers,
1:49:251 hour, 49 minutes, 25 secondsgreat software engineers are not allowed to make changes. - [Pieter] Yeah. - Basically, there's some kind of bureaucracy, there's way too many managers. There's a lot of bureaucracy.
1:49:341 hour, 49 minutes, 34 secondsAnd great engineers show up,
1:49:361 hour, 49 minutes, 36 secondsthey try to work there and they're not allowed to really make any contributions and then they leave. And so you have a lot of mediocre software engineers, they're not really interested in improving any other thing.
1:49:441 hour, 49 minutes, 44 seconds- [Pieter] Yeah. - And literally, they would like to improve the stuff, but the bureaucracy of the place, plus all the bosses,
1:49:531 hour, 49 minutes, 53 secondsall the high up people are not technical people probably. - [Pieter] Yeah. - They don't know much about web dev. They don't know much about programming.
1:50:001 hour, 50 minutesSo they just don't give any respect.
1:50:021 hour, 50 minutes, 2 seconds- Yeah. - You have to give the freedom and the respect to great engineers as they try to do great things. That feels like an explanation.
1:50:111 hour, 50 minutes, 11 secondsIf you were a great programmer, would you wanna work at America Airlines or? - No, no.
1:50:181 hour, 50 minutes, 18 seconds- I'm torn on that 'cause I actually as somebody who loves program,
1:50:231 hour, 50 minutes, 23 secondswould love to work at America Airlines so I can make the thing better. - Yeah, I would work there just to fix it for myself. - Yeah, for yourself.
1:50:311 hour, 50 minutes, 31 secondsAnd then you just know how much suffering you're alleviated. - [Pieter] Yeah, yeah, for the world, for society. - Just imagine all the thousands,
1:50:391 hour, 50 minutes, 39 secondsmaybe millions of people that go to that website.
1:50:411 hour, 50 minutes, 41 seconds- Yeah. - And have to click like a million times. It often doesn't work. It's clunky, all that kind of stuff. You're making their life just so much better.
1:50:501 hour, 50 minutes, 50 seconds- Much better, yeah. - Yeah.
1:50:511 hour, 50 minutes, 51 secondsThere must be an explanation that has to do with managers and bureaucracies. - I think it's money. Do you know booking.com? - Sure. - So it's a booking. It's the biggest booking website in the world.
1:51:001 hour, 51 minutes- Yeah. - It's Dutch actually.
1:51:011 hour, 51 minutes, 1 secondAnd they have teams because my friend worked there. They have teams for a specific part of the website, like a 10 by 10 pixels area where they run tests on this.
1:51:111 hour, 51 minutes, 11 secondsSo they run tests like, and they're famous for this stuff. Oh, there's only one room left, right? Which is red letters. One room left book now.
1:51:171 hour, 51 minutes, 17 secondsAnd they got a fine from the European Union about this, kind of interesting.
1:51:211 hour, 51 minutes, 21 secondsSo they have all these teams and they run the test for 24 hours. They go to sleep. They wake up next day they come to the office, and they see, okay, this performed better. This website has become a monster,
1:51:291 hour, 51 minutes, 29 secondsbut it's the most revenue generating hotel booking website in the world. It's number one. So that shows that it's not about user experience,
1:51:371 hour, 51 minutes, 37 secondsit's about like, I don't know about making more money, not every company. It's a public company,
1:51:451 hour, 51 minutes, 45 secondsif they're optimizing for money. - But you can optimize for money by disrupting, like making it way better. - Yeah, but it's always start, they start with disrupting.
1:51:521 hour, 51 minutes, 52 secondsBooking all started as a startup 1997. And then they become like the old shit again. Uber now starts to become a taxi again, right?
1:52:001 hour, 52 minutesIt was very good in the beginning. Now it's kind of like taxis now in many places are better. They're nicer than Ubers, right? So it's like this circle.
1:52:081 hour, 52 minutes, 8 seconds- I think some of it is also just, it's hard to have ultra competent engineers. - Yeah.
1:52:151 hour, 52 minutes, 15 seconds- Stripe seems like a trivial thing, but it's hard to pull off. - Yeah.
1:52:191 hour, 52 minutes, 19 seconds- Why was it so hard for Amazon to have buy with one click? Which I think is a genius idea. - Yeah. - Make buying easier.
1:52:281 hour, 52 minutes, 28 secondsMake it as frictionless as possible. Just click a button once thing you bought the thing. - [Pieter] Yeah.
1:52:341 hour, 52 minutes, 34 seconds- As opposed to most of the web was a lot of clicking, and it often doesn't work. - Yeah. - Like with the Airlines. - Remember the forms would delete, you could click Next, Submit,
1:52:421 hour, 52 minutes, 42 secondsand 404 or something where your internet would go down. - Yeah. - Your modem. - Yeah. - That, man. - And I would have an existential crisis.
1:52:491 hour, 52 minutes, 49 secondsThe frustration would take over my whole body. - [Pieter] Yes.
1:52:521 hour, 52 minutes, 52 seconds- And I would just wanted to quit life for a brief moment there. - Yeah. - Yeah.
1:52:551 hour, 52 minutes, 55 seconds- I'm so happy to form stays in Google Chrome now when something goes wrong.
1:53:001 hour, 53 minutesSo Google, somebody at Google improve society with that, right?
1:53:031 hour, 53 minutes, 3 seconds- Yeah, and one of the challenges of Google is to have the freedom to do that. - They don't anymore. - There's a bunch of bureaucracy, yeah. - Yeah, at Google.
1:53:111 hour, 53 minutes, 11 seconds- There's so many brilliant, brilliant people there. - Yeah. - But it just moves slowly. - Yeah. - And I wonder why that is, and maybe that's the natural way of a company,
1:53:191 hour, 53 minutes, 19 secondsbut you have people like Elon who rolls in and just fires most of the folks and always operate, like push the company to operate as a startup,
1:53:271 hour, 53 minutes, 27 secondseven what's already big. - Yeah, I mean, Apple does this. I like I started in business school, Apple does competing product teams that operate as startups.
1:53:351 hour, 53 minutes, 35 secondsSo three to five people, they make something, they have multiple teams do make the same thing. The best team wins.
1:53:411 hour, 53 minutes, 41 secondsI think you need to emulate like a free market inside a company to make it entrepreneurial.
1:53:461 hour, 53 minutes, 46 seconds- Yeah. - And you need entrepreneurial mentality in a company to come up with new ideas and do it better.
Chapter 11: Learning new programming languages
1:53:521 hour, 53 minutes, 52 seconds- So one of the things you do really, really well is learn. And you think like you're trying to... You have an idea, you try to build it,
1:53:591 hour, 53 minutes, 59 secondsand then you learn everything you need to in order to build it. You have your current skills, but you need learn just the minimal amount of stuff. So you're a good person to ask like,
1:54:091 hour, 54 minutes, 9 secondshow do you learn?
1:54:111 hour, 54 minutes, 11 secondsHow do you learn quickly and effectively and just the stuff you need? Just by way of example, you did a 30 days learning session on 3D.
1:54:201 hour, 54 minutes, 20 seconds- [Pieter] Yeah. - Where you documented yourself,
1:54:221 hour, 54 minutes, 22 secondsgiving yourself only 30 days to learn everything you can about 3D.
1:54:251 hour, 54 minutes, 25 seconds- Yeah, I tried to learn virtuality 'cause I was like... This was same as AI, it came up suddenly like 2016, 2017, with I think HTC VIVE,
1:54:321 hour, 54 minutes, 32 secondsthis big VR glasses before Apple Vision Pro. I was like, oh, this is gonna be big, so I need to learn this. I know nothing about 3D.
1:54:391 hour, 54 minutes, 39 secondsI installed like, I think Unity, and Blender and stuff.
1:54:431 hour, 54 minutes, 43 secondsAnd I started learning all this stuff because I thought this was like a new nascent technology that was gonna be big.
1:54:511 hour, 54 minutes, 51 secondsAnd if I had the skills for it, I could use this to build stuff. And so I think with learning for me,
1:54:581 hour, 54 minutes, 58 secondsI think learning is so funny 'cause people always ask me, "How do you learn to code?" Should I learn to code?" And I'm like, "I don't know." Every day I'm learning.
1:55:061 hour, 55 minutes, 6 secondsIt's kind of cliche, but every day I'm learning new stuff.
1:55:081 hour, 55 minutes, 8 secondsSo every day I'm searching on Google or asking out ChatGPT, how to do this thing, how to do this thing. Every day, I'm getting better at my skill. So you never stop learning.
1:55:171 hour, 55 minutes, 17 secondsSo the whole concept of like how do you learn? Well, you never ends. So where do you want to be? Do you wanna know a little bit? Or do you wanna know a lot? Do you wanna do it for your whole life?
1:55:251 hour, 55 minutes, 25 secondsSo I think taking action is the best step to learn. So making things like, you know nothing, just start making things. Okay, so like how to make a website?
1:55:341 hour, 55 minutes, 34 secondsSearch how to make a website. Or nowadays you ask ChatGPT, how do I make a website? Where do I start? It generates codes for you, right? Copy the code, put it in a file, save it,
1:55:411 hour, 55 minutes, 41 secondsopen it in Google Chrome or whatever. You have a website and then you start tweaking with it, and you start, okay, how do I add a button? How do I add AI features, right, nowadays.
1:55:501 hour, 55 minutes, 50 secondsSo it's like by taking action, you can learn stuff much faster than I'm reading books, or tutorials. - Actually, I'm curious, let me ask perplexity.
1:56:001 hour, 56 minutesHow do I make a website? I'm just curious what it would say. I hope it goes with like really basic vanilla solutions.
1:56:091 hour, 56 minutes, 9 secondsDefine your website's purpose. Choose a domain name. Select a web hosting provider. Choose a website or builder or CMS, website build a platform Wix.
1:56:181 hour, 56 minutes, 18 seconds- Tells that Wix or Squarespace is what I said. - Yeah. - The landing page. - How do I say if I wanna program it myself?
1:56:271 hour, 56 minutes, 27 secondsDesign your website, create essential pages. - Yeah, even tells you to launch it, right? Start promoting it. - Launch your website. - Cool. - Well, I mean you could do that. - Yeah, but this is literally it.
1:56:361 hour, 56 minutes, 36 seconds- [Lex] If you wanna make a website. - This is the basic like Google Analytics, - Well, you can't make Nomad List with this way. - You can. - With Wix. - No, you can get pretty far, I think.
1:56:441 hour, 56 minutes, 44 seconds- You get pretty far. - These website builders are pretty advanced. All you need is a grid of images, right? - Yeah. - That are clickable. That open like another page. - Yeah. - You can get quite far.
1:56:531 hour, 56 minutes, 53 seconds- How do I learn to program? Choose a programming language to start with.
1:57:031 hour, 57 minutes, 3 seconds- Yeah, FreeCodeCamp is good. - Work through resources systematically,
1:57:091 hour, 57 minutes, 9 secondspractice coding regularly for 30, 60 minutes a day. Consistency is key. Join programming communities like Reddit's. Yeah, yeah.
1:57:181 hour, 57 minutes, 18 secondsYeah, it is pretty good. - Yeah. - It's pretty good. - So I think it's a very good starting ground,
1:57:231 hour, 57 minutes, 23 seconds'cause imagine you know nothing and you wanna make a website, you wanna make a startup. This is like, that's why, man,
1:57:291 hour, 57 minutes, 29 secondsthe power of AI for education is gonna be insane.
1:57:331 hour, 57 minutes, 33 secondsPeople anywhere can ask this question and start building stuff. - Yeah, it clarifies it for sure, and just start building. Like keep- - Yeah.
1:57:411 hour, 57 minutes, 41 seconds- Build, build. Like actually apply the thing, whether it's AI, or any of the programming for web development. - Yeah. - Just have a project in mind,
1:57:501 hour, 57 minutes, 50 secondswhich I love the idea of like 12 startups in 12 months or like build a project almost every day.
1:57:581 hour, 57 minutes, 58 seconds- Yeah. - Just build a thing. - Yeah. - And get it to work, and finish it every single day. That's a cool experiment. - I think that was the inspiration.
1:58:061 hour, 58 minutes, 6 secondsThere was a girl who did 160 websites and 160 days or something. Literally mini websites. - Yeah. - And she learned to code that way.
1:58:151 hour, 58 minutes, 15 secondsSo I think it's good to set yourself challenges. You can go to some coding bootcamp, but I don't think they actually work.
1:58:221 hour, 58 minutes, 22 secondsI think it's better to do,
1:58:241 hour, 58 minutes, 24 secondsfor me, how to deduct like self-learning and setting yourself like challenges and just getting in, but you need discipline.
1:58:311 hour, 58 minutes, 31 secondsYou need to discipline to keep doing it. And coding is very, it's a steep learning curve to get in. It's very annoying.
1:58:381 hour, 58 minutes, 38 secondsWorking with computers is very annoying. So it can be hard for people to keep doing it.
1:58:451 hour, 58 minutes, 45 seconds- Yeah, that thing of just keep doing it and don't quit, that urgency that's required to finish a thing. That's why it's really powerful when you documented this,
1:58:541 hour, 58 minutes, 54 secondsthe creation of Hoodmaps or like a working prototype that there is just a constant frustration I guess.
1:59:011 hour, 59 minutes, 1 secondIt's like oh, okay, how do I do this? And then you look it up, and you're like, okay, you have to interpret the different options you have.
1:59:091 hour, 59 minutes, 9 seconds- Yeah, man. - And then just try it, and then there's a dopamine rush of like, "Ooh, it works cool." - Man, it's amazing.
1:59:171 hour, 59 minutes, 17 secondsI live streamed it. It's on YouTube and stuff. People can watch it, and it's amazing when things work. Look, it's just like a main that you,
1:59:251 hour, 59 minutes, 25 secondsI look very not... I don't look far ahead. So I only look, okay, what's the next problem to solve, and then the next problem?
1:59:301 hour, 59 minutes, 30 secondsAnd at the end, you have a whole app or website or thing. But I think most people look way too far ahead.
1:59:391 hour, 59 minutes, 39 secondsIt's like this poster again. You don't know hard it's gonna be,
1:59:431 hour, 59 minutes, 43 secondsso you should only look like for the next thing, the next little challenge, the next step. And then see where you end up. - And as assume it's gonna be easy. (laughs)
1:59:511 hour, 59 minutes, 51 seconds- Yeah, exactly. Be naive about it. Because you're gonna have very difficult problems. A lot of the big problems won't be even tech, will be like public, right?
2:00:002 hoursMaybe people don't like your website. You will get canceled for a website, for example. A lot of things can happen. - What's it like building in public, like you do?
2:00:092 hours, 9 secondsOpenly, where you're just iterating quickly and you getting people feedback. So there's the power of the crowdsourcing,
2:00:152 hours, 15 secondsbut there's also the negative aspects of people being able to criticize. - So man, I think haters are actually good, 'cause I think a lot of haters have good points.
2:00:242 hours, 24 seconds- Yeah. - And it takes like stepping away from the emotion of like, ah, your website sucks because blah, blah, blah. And you're like, okay, just remove this.
2:00:312 hours, 31 secondsYour website sucks 'cause it's personal. What did he say? Why did he didn't not like it?
2:00:352 hours, 35 secondsAnd you figure out, okay, he didn't like it 'cause the signup was difficult or something, or it wasn't the data. They say, no, this data is not accurate or something, right? Okay, I need to improve the quality of data.
2:00:432 hours, 43 secondsThis hater has a point, because it's dumb to completely ignore your haters.
2:00:482 hours, 48 secondsAnd also, man, I think I've been there when I was like 10 years old or something.
2:00:522 hours, 52 secondsYou're on the internet just shouting crazy stuff that's like most of Twitter, or the half Twitter. So you have to take it with grain of salt.
2:01:022 hours, 1 minute, 2 secondsYeah, man, you need to grow a very thick skin on Twitter, on X. But I'm mute a lot of people.
2:01:092 hours, 1 minute, 9 secondsI found out I muted already 15,000 people recently, I checked. So in 10 years, I muted 15,000 people. So that's like- - That's one by one manual.
2:01:172 hours, 1 minute, 17 seconds- Yeah. - Oh, wow. - So 1,500 people per year. And I don't like to block, 'cause then they get angry, they make a screenshot and they say, ah, ah, you block me.
2:01:252 hours, 1 minute, 25 secondsSo I just mute and it disappear and it's amazing. - So you mentioned Reddit. So Hoodmaps, did that make it to the front page of Reddit?
2:01:342 hours, 1 minute, 34 seconds- Yeah, yeah it did, yeah, yeah, yeah it did. It was amazing. And my server almost went down,
2:01:392 hours, 1 minute, 39 secondsand I was checking like Google Analytics was like 5,000 people on the website or something crazy. And it was at night and it was amazing. Man, I think nowadays, honestly, TikTok,
2:01:502 hours, 1 minute, 50 secondsYouTube reels, Instagram reels.
2:01:522 hours, 1 minute, 52 secondsA lot of apps get very big from people making TikTok videos about it. So let's say you make your own app, you can make a video for yourself.
2:02:002 hours, 2 minutesOh, I made this app. This is how it works, blah, blah, blah. And this is why I made it, for example. And this is why you should use it.
2:02:072 hours, 2 minutes, 7 secondsAnd if it's a good video, we'll take off,
2:02:082 hours, 2 minutes, 8 secondsand you will get, man, I got like $20,000 extra per month or something from a TikTok from one TikTok video.
2:02:152 hours, 2 minutes, 15 secondsIt made a Photo AI. - By you or somebody else? - By some random guy. So there's all these AI influencers that they write about.
2:02:222 hours, 2 minutes, 22 secondsThey show AI apps and then they ask money later, like when a video goes viral. I can do it again, and send me $4,000 or something.
2:02:292 hours, 2 minutes, 29 secondsI'm like, okay, I did that, for example. But it works. TikTok is a very big platform for user acquisition, yeah.
2:02:382 hours, 2 minutes, 38 secondsAnd Organic, like the best user acquisition I think is Organic. You don't need to buy ads. You probably don't have money when you start to buy ads. So use Organic or write a banger, tweet, right?
2:02:472 hours, 2 minutes, 47 secondsThat's can make an app take off as well.
2:02:502 hours, 2 minutes, 50 seconds- Well, I mean yeah, fundamentally create cool stuff and have just a little bit of a following enough to like for the cool thing to be noticed.
2:02:592 hours, 2 minutes, 59 secondsAnd then it becomes viral if it's cool enough.
2:03:002 hours, 3 minutes- Yeah, and you don't need a lot of followers anymore on X and a lot of platforms 'cause TikTok X, I think in reels also, they have the same algorithm now.
2:03:082 hours, 3 minutes, 8 secondsIt's not about followers anymore, it's about they test your content on a small subset, like 300 people. If they like it,
2:03:152 hours, 3 minutes, 15 secondsit will gets tested to a thousand people and on and on. So if the thing is good, it will rise anyway.
2:03:202 hours, 3 minutes, 20 secondsIt doesn't matter if you have half a million followers or a thousand followers or hundred.
Chapter 12: Monetize your website
2:03:242 hours, 3 minutes, 24 seconds- What's your philosophy of monetizing how to make money from the thing you build? - Yeah, so a lot of starters, they do like free users.
2:03:302 hours, 3 minutes, 30 secondsSo you could sign up and could use an app for free, which is... It never worked for me well, because I think free users generally don't convert.
2:03:392 hours, 3 minutes, 39 secondsAnd I think if you have VC funding, it makes sense to get free users,
2:03:422 hours, 3 minutes, 42 secondsbecause you can spend your funding on ads and you can get like millions of people come in predictably how much they convert and give them like a free trial, whatever,
2:03:502 hours, 3 minutes, 50 secondsand then they sign up.
2:03:512 hours, 3 minutes, 51 secondsBut you need to have that flow worked out so well for you to make it work, that you need like... It's very difficult.
2:03:572 hours, 3 minutes, 57 secondsI think it's best to start and just start asking people for money in the beginning. So show your app, what are you doing on your landing page?
2:04:042 hours, 4 minutes, 4 secondsMake a demo or whatever video. And then if you wanna use it, pay me money, pay $10, $20, $40. I would ask more than $10 per month.
2:04:122 hours, 4 minutes, 12 secondsNetflix, like $10 per month. But Netflix is a giant company, they can afford to make it so cheap, relatively cheap. If you're an individual, like an indie hacker,
2:04:212 hours, 4 minutes, 21 secondsyou are making your own app.
2:04:232 hours, 4 minutes, 23 secondsYou need to make like at least $30 or more on a user to make it worthy for you. You need to make money.
2:04:312 hours, 4 minutes, 31 seconds- And it builds a community of people that actually really care about the product. - Also, yeah. Making a community, making a discord very normal now.
2:04:372 hours, 4 minutes, 37 secondsEvery AI app has a discord and you have the developers and the users together in a discord, and they talk about, they ask for features they build together. It is very normal now.
2:04:462 hours, 4 minutes, 46 secondsAnd you need to imagine like if you're starting out, getting a thousand users is quite difficult, getting a thousand pages is quite difficult.
2:04:532 hours, 4 minutes, 53 secondsAnd if you charge them like $30, you have 30K a month, and it's a lot of money. - That's enough to like- - Live a good life.
2:05:012 hours, 5 minutes, 1 second- Yeah, live a pretty good life. I mean that could be a lot of costs associated with hosting. - Yeah, so that's another thing. I make sure my profit margin are very high. So I try to keep the cost very low.
2:05:092 hours, 5 minutes, 9 secondsI don't hire people. I try to negotiate with AI vendors now, can you make it cheaper?
2:05:172 hours, 5 minutes, 17 secondsI discovered this, you can just email companies and say, "Can you give me discount? It's too expensive." And they say, "Sure, 50%."
2:05:242 hours, 5 minutes, 24 secondsI'm like, "Wow, very good." (Lex laughs) And I didn't know this, you can just ask. And especially in like now it's kind of recession,
2:05:322 hours, 5 minutes, 32 secondsyou can ask companies like, I need a discount or I kind of need to like, you don't need to be asshole about it.
2:05:372 hours, 5 minutes, 37 secondsSay, "I kind of need a discount or I need to go maybe to another company, maybe discount here and there." And they say, "Sure." A lot of them will say yes.
2:05:452 hours, 5 minutes, 45 secondsLike 25% discount, 50% discounts,
2:05:472 hours, 5 minutes, 47 seconds'cause you think the price on the website is the price of the API or something. It's not. - And also you're a public facing person.
2:05:562 hours, 5 minutes, 56 seconds- Oh, that helps also.
2:05:572 hours, 5 minutes, 57 seconds- And there's love and good vibes that you put out into the world.
2:05:592 hours, 5 minutes, 59 secondsYou're actually legitimately trying to build cool stuff.
2:06:022 hours, 6 minutes, 2 secondsSo a lot of companies probably wanna associate with you because you're trying to do. - Yeah, it's like a secret hack, but I think even without- - Secret hack. Be a good person.
2:06:102 hours, 6 minutes, 10 seconds- It depends how much discount they will give. They'll maybe give more,
2:06:132 hours, 6 minutes, 13 secondsbut you know that's why you should post on Twitter so you get discounts maybe. (Lex and Pieter laughs) - Yeah, yeah.
2:06:212 hours, 6 minutes, 21 secondsAnd also when it's crowdsourced,
2:06:252 hours, 6 minutes, 25 secondsI mean paying does prevent spam or help prevent spam. - Also, yeah. Yeah, it gives you high quality users. - High quality users. - Free users are sure,
2:06:342 hours, 6 minutes, 34 secondsbut they're horrible. It's just like millions of people, especially with AI startups, you get a lot of abuse.
2:06:382 hours, 6 minutes, 38 secondsSo you get millions of people from anywhere just abusing your app, just hacking it and whatever. - There's something on the internet.
2:06:462 hours, 6 minutes, 46 secondsYou mentioned like 4chan discovered Hoodmaps. - Yeah, but I love 4chan. I don't love 4chan, but you know what I mean, like they're so crazy, especially back then.
2:06:552 hours, 6 minutes, 55 secondsIt's kind of funny what they do. - I actually, what is it? This new documentary on Netflix "Antisocial Network" or something like that that was really-
2:07:042 hours, 7 minutes, 4 seconds- Interesting. - Was fascinating. Just 4chan, the spirit of the thing, 4chan. - And people just understand 4chan.
2:07:102 hours, 7 minutes, 10 seconds- It's so much about freedom and also like the humor involved and fucking with the system and fucking, man. - That's it.
2:07:182 hours, 7 minutes, 18 secondsIt's just anti-system for fun. - The dark aspect of it is you're having fun, you're doing anti-system stuff,
2:07:272 hours, 7 minutes, 27 secondsbut like the Nazis always show up and it somehow- - Really bad shit started happening. - It drifting somehow, yeah. - It like school shootings and stuff.
2:07:342 hours, 7 minutes, 34 secondsSo it's a very difficult topic, but I do know, especially early on, I think 2010, I would go to 4chan for fun,
2:07:422 hours, 7 minutes, 42 secondsand they would post crazy offensive stuff. And this was just to scare off people. So we show to other people say, "Hey, do you know this internet website 4chan? Just check it out." - Yeah. (laughs)
2:07:502 hours, 7 minutes, 50 seconds- And they'd be, "Dude, what the fuck is that?" I'm like, no, no, you don't understand. - Yeah. - That's to scare you away. But actually when you go through scroll, there's like deep conversations. - Yes. - And they would already be,
2:07:582 hours, 7 minutes, 58 secondsthis was like a normie filter, like to stop. - Yeah. - So kind of cool. But yeah- - It goes dark. - It goes dark, yeah. - And if you have those people show up,
2:08:072 hours, 8 minutes, 7 secondsfor the fun of it, do a bunch of racist things and all that kind of stuff you were saying. - Yeah, but everything is, I think it was never, man, I'm not at 4chan, but it was always about provoking.
2:08:152 hours, 8 minutes, 15 secondsIt's just provocateur.
2:08:172 hours, 8 minutes, 17 seconds- But the provoking in the case of Hoodmaps or something like this can- - Oh, man.
2:08:212 hours, 8 minutes, 21 seconds- Can damage a good thing like (laughs) a little poison in a town is always good.
2:08:292 hours, 8 minutes, 29 secondsIt's like the Tom Waits thing,
2:08:312 hours, 8 minutes, 31 secondsbut you don't want too much otherwise it destroys the town. It destroys the thing. - Yeah, they're kind like pen testers, like penetration testers, hackers. - Yeah.
2:08:382 hours, 8 minutes, 38 seconds- They just test your app for you and then you add some stuff, like I add like a NSFW word list. They would say like bad words.
2:08:462 hours, 8 minutes, 46 secondsSo when they would write like a bad words, they would get forwarded to YouTube, which was like a video.
2:08:512 hours, 8 minutes, 51 secondsIt was like a very relaxing video that like kind of ASMR with like glowing jelly streaming like this to relax them,
2:08:592 hours, 8 minutes, 59 secondsor cheese melting on the toast. - Cheese melting, nice. - And to chill them out. - Yeah, yeah. - I like it. - Yeah.
2:09:052 hours, 9 minutes, 5 seconds- But actually a lot of stuff I didn't realize how much originated in 4chan in terms of memes. Rickroll, I didn't understand. I did not know that Rickroll originated 4chan.
2:09:132 hours, 9 minutes, 13 seconds- Really? - There's so many memes, like most of the memes that you think- - The word roll I think comes from 4chan, like not the word roll, but in this case,
2:09:212 hours, 9 minutes, 21 secondsin the meme use. - Yeah. - You would get like roll doubles, 'cause there was like post IDs on 4chan. So they were kinda like random.
2:09:292 hours, 9 minutes, 29 secondsSo if I get doubles, this happens or something. So you'd get like two, two. Anyway, it's like a betting market kind of on these doubles,
2:09:362 hours, 9 minutes, 36 secondson these post IDs, this so much funny stuff. - Yeah, I mean that's the internet, that's purist. But yeah, again, the dark stuff kind of seeps in. - [Pieter] Yeah.
2:09:442 hours, 9 minutes, 44 seconds- It's nice to keep the dark stuff to some low amount. It's nice to have a bit of noise of the darkness, but not too much. - Yeah.
2:09:532 hours, 9 minutes, 53 seconds- But again, you have to pay attention to that with, I mean I guess spam in general. You have to fight that with Nomad List. How do you fight spam?
Chapter 13: Fighting SPAM
2:10:012 hours, 10 minutes, 1 second- Man, I use GPT-4 now. It's amazing. (laughs) So I have like user input have reviews, people can review cities.
2:10:092 hours, 10 minutes, 9 secondsAnd I don't need to actually sign up. It's anonymous reviews.
2:10:122 hours, 10 minutes, 12 secondsAnd they write whole books about cities and what's good and bad. So I run into GPT-4 now, and I ask like, "Is this a good review?
2:10:212 hours, 10 minutes, 21 secondsIs this offensive? Is this race is this or some stuff?"
2:10:232 hours, 10 minutes, 23 secondsAnd then send me message on Telegram when it rejects reviews and I check it, and man, it's so on point. It's so- - Automated.
2:10:312 hours, 10 minutes, 31 seconds- Yes, and it's so accurate. It understands double meanings. I have GPT-4 running on the chat community.
2:10:392 hours, 10 minutes, 39 secondsIt's a chat community of 10,000 people, and they're chatting, and they start fighting with each other. And I used to have human moderators was very good,
2:10:472 hours, 10 minutes, 47 secondsbut they would start fighting the human moderator. This guy's biased or something. I have GPT-4. And it's really, really, really, really good.
2:10:552 hours, 10 minutes, 55 secondsIt understands humor. It understands like you could say something bad, but it's kinda a joke, and it's kind of not offensive so much, so it shouldn't be deleted, right?
2:11:042 hours, 11 minutes, 4 secondsIt understands that. - I would love to have a GPT-4 based filter of different kinds for like X.
2:11:152 hours, 11 minutes, 15 seconds- Yeah, I thought this week like, I tweeted like a fact check. You can click Fact Check and then GPT-4. Look, GPT-4 is not always right about stuff, right?
2:11:222 hours, 11 minutes, 22 secondsBut it can give you a general fact check on a tweet.
2:11:262 hours, 11 minutes, 26 secondsUsually, what I do now when I write something like difficult about economics or something about AI. I put in GPT-4 say, "Can you fact check it?" 'Cause I might have said something stupid.
2:11:342 hours, 11 minutes, 34 secondsAnd the stupid stuff always gets taken out by the replies. Oh, you said this wrong.
2:11:392 hours, 11 minutes, 39 secondsAnd then the whole tweet kind of doesn't make sense anymore. So I ask GPT-4 the fact check a lot of stuff. - So fact check is a tough one. - Yeah.
2:11:472 hours, 11 minutes, 47 seconds- But it would be interesting to sort of rate a thing based on how well-thought out it is and how well-argued it is.
2:11:552 hours, 11 minutes, 55 seconds- Yeah. - That seems more doable. That seems like more doable.
2:11:592 hours, 11 minutes, 59 secondsIt seems like a GPT thing because that that's less about the truth and it's more about the rigor of the thing. - Exactly, and you can ask that, you can ask in the prompt like,
2:12:072 hours, 12 minutes, 7 secondsI don't know, for example, do you think...
2:12:092 hours, 12 minutes, 9 secondsCreate like a ranking score for X Twitter applies where I should dispose be, if we rank on like, I dunno, integrity, reality,
2:12:182 hours, 12 minutes, 18 secondslike fundamental deepness or something, interestingness. And it will give you with a pretty good score probably. I mean Elon can do this with Grok, right?
2:12:262 hours, 12 minutes, 26 secondsHe can start using that to check replies, because the reply section is like chaos.
2:12:322 hours, 12 minutes, 32 seconds- Yeah, and actually the ranking and the replies is not great. - Doesn't make any sense. - Doesn't make sense.
2:12:362 hours, 12 minutes, 36 seconds- No. - And I would like to sort in different kinds of ways. - Yeah, and you get too many replies now, if you have a lot of followers. I get too many replies.
2:12:432 hours, 12 minutes, 43 secondsI don't see everything and a lot of stuff I just miss and I wanna see the good stuff. - And also the notifications or whatever,
2:12:512 hours, 12 minutes, 51 secondsis just complete chaos. - Yeah.
2:12:532 hours, 12 minutes, 53 seconds- It'd be nice to be able to filter that in interesting ways, sorted in interesting ways.
2:12:582 hours, 12 minutes, 58 seconds'Cause I feel like I miss a lot and what's surfaced for me is just a random comment by a person with no followers.
2:13:062 hours, 13 minutes, 6 seconds- Yeah, yeah. - That's positive or negative. It's like, okay, - If it's a very good comment, it should happen, but it should probably look a little bit more, do these people have followers,
2:13:142 hours, 13 minutes, 14 seconds'cause they're probably more engaged in the platform, right? - Oh, no. I don't even care about how many followers. If you're ranking by the quality of the comment, great.
2:13:222 hours, 13 minutes, 22 seconds- Yeah. - But not just randomly, like chronological, just a sea of comments. - Yeah, yeah, yeah, it does make sense. - Yeah. - Yeah.
2:13:312 hours, 13 minutes, 31 secondsX could be very proof of that, I think. - One thing you espouse a lot, which I love is the automation step.
Chapter 14: Automation
2:13:382 hours, 13 minutes, 38 secondsSo once you have a thing... Once you have an idea and you build it, and it actually starts making money. And it's making people happy,
2:13:462 hours, 13 minutes, 46 secondsthere's a community of people using it.
2:13:492 hours, 13 minutes, 49 secondsYou want to take the automation step of automating the things you have to do as little work as possible for it to keep running indefinitely.
2:13:552 hours, 13 minutes, 55 seconds- Yeah. - Can you explain your philosophy there? What do you mean by automate?
2:14:002 hours, 14 minutes- Yeah, so the general theory of starters would be that when it starts, you start making money, you start hiring people to do stuff, right? Do stuff that you, like marketing, for example.
2:14:082 hours, 14 minutes, 8 secondsDo stuff that you would do in the beginning yourself,
2:14:122 hours, 14 minutes, 12 secondsand whatever community management and organizing meetups for Nomad List, for example, that would be a job, for example.
2:14:182 hours, 14 minutes, 18 secondsAnd I felt like I don't have the money for that and I don't really wanna run a big company with a lot of people,
2:14:252 hours, 14 minutes, 25 seconds'cause there's a lot of work managing these people.
2:14:272 hours, 14 minutes, 27 secondsSo I've always tried to automate these things as much as possible. And this can literally be like for Nomad List, it's literally like a...
2:14:362 hours, 14 minutes, 36 secondsIt's not a different other sources.
2:14:372 hours, 14 minutes, 37 secondsIt was like a webpage where you can organize your own meetup, set a schedule, a date, whatever. You could see how many nomads will be there at that date.
2:14:442 hours, 14 minutes, 44 secondsSo there will be actually enough nomads to meet up, right? And then when it's done, it sends a tweet out on the Nomad List account. There's a meetup here.
2:14:522 hours, 14 minutes, 52 secondsIt sends a direct message to everybody in the city who are there, who are gonna be there.
2:14:572 hours, 14 minutes, 57 secondsAnd then people show up on a bar and there's a meetup and that's fully automated. And for me, it's so obvious to make this automatic,
2:15:042 hours, 15 minutes, 4 secondswhy would you have somebody organize this? It makes more sense to automate it. And with most of my things,
2:15:112 hours, 15 minutes, 11 secondslike I figure out how to do it with codes. And I think especially now with AI, you can automate so much more stuff than before.
2:15:182 hours, 15 minutes, 18 seconds'Cause AI understands things so well. Like before I would use if statements, right? Now you ask GPT, you put something on GPT-4, and in the API and it sends back like,
2:15:272 hours, 15 minutes, 27 secondsthis is good, this is bad.
2:15:292 hours, 15 minutes, 29 seconds- Yeah, so you basically can now even automate sort of subjective type of things. This is the difference now. - Yeah.
2:15:362 hours, 15 minutes, 36 seconds- And that's very recent, right? - But it's still difficult to,
2:15:392 hours, 15 minutes, 39 secondsI mean that's step of automation is difficult to figure out how to... Is you're basically delegating everything to code.
2:15:472 hours, 15 minutes, 47 seconds- Yeah.
2:15:482 hours, 15 minutes, 48 seconds- And it's not trivial to take that step for a lot of people. So when you say automate, are you talking about like CronJob?
2:15:562 hours, 15 minutes, 56 seconds- Yes, man, a lot of CronJob. - A lot of CronJobs. - Yeah.
2:16:002 hours, 16 minutes- I literally, I log into the server and I do like sudo crontab-e,
2:16:052 hours, 16 minutes, 5 secondsand then I go into editor and I write like hourly and then I write PHP, dothisthing.php, and that's a script.
2:16:142 hours, 16 minutes, 14 secondsAnd that script does a thing and it does it then hourly. That's it. And that's how all my websites work.
2:16:192 hours, 16 minutes, 19 seconds- Do you have a thing where it like emails you or something like this? Or emails somebody managing the thing, if something goes wrong? - I have these webpage that make,
2:16:262 hours, 16 minutes, 26 secondsthey're called like healthchecks. It's like healthcheck.php, and then it has emojis, it has a green check mark if it's good,
2:16:332 hours, 16 minutes, 33 secondsand a read one if it's bad. And then it does like database cures, for example. Like what's the internet speed in, for example, Amsterdam. Okay, it's a number.
2:16:422 hours, 16 minutes, 42 secondsIt's like 27 point megabits. So it's accurate number. Okay, check, good. And it goes to the next, and it goes on all the data points. Did people sign up in it last 24 hours?
2:16:512 hours, 16 minutes, 51 secondsIt's important 'cause maybe the sign up broke. Okay, check, somebody sign up. Then I have uptimerobot.com, which is like for Uptime, but it can also check keywords.
2:16:592 hours, 16 minutes, 59 secondsIt checks for an emoji, which is like the red X, which is if something is bad.
2:17:042 hours, 17 minutes, 4 secondsAnd so it opens that health check page every minute to check if something's bad. Then if it's bad,
2:17:092 hours, 17 minutes, 9 secondsit sends a message to me on Telegram saying, "Hey, what's up?" Or it doesn't say, "Hey, what's up?" It sends me like alert. (Lex laughs) - Hey, hey, sweetie. - This thing is down and then I check.
2:17:172 hours, 17 minutes, 17 secondsSo within a minute of something breaking, I know it and then I can open my laptop and fix it.
2:17:222 hours, 17 minutes, 22 seconds- Yeah. - But the good thing is like the last few years, things don't break anymore. And definitely 10 years ago, when I started, everything was breaking all the time.
2:17:312 hours, 17 minutes, 31 secondsAnd now it's like almost, last week was like a 100.000% Uptime. And these health checks are part of the Uptime percentage.
2:17:392 hours, 17 minutes, 39 secondsSo it's like everything works.
2:17:412 hours, 17 minutes, 41 seconds- You're actually making me realize I should have a page for myself. Like one page that has all the healthchecks,
2:17:492 hours, 17 minutes, 49 secondsjust so I can go to it and see all the green check marks. - It feels good to look at, you know. - It just be like, okay. - Yeah. - All right, we're okay. Everything's okay. - Yeah.
2:17:582 hours, 17 minutes, 58 seconds- And like you can see like, when was the last time something wasn't okay, and it'll say like never. - Yeah.
2:18:042 hours, 18 minutes, 4 seconds- Or meaning like you've checked since you've last cared to check, it's all been okay. - For sure.
2:18:112 hours, 18 minutes, 11 secondsIt used to send me the good healthchecks. - Yeah. - It all works, it all works. - But it's been- - It all works. - [Lex] So often. (laughs) - And I'm like, this feels so good.
2:18:192 hours, 18 minutes, 19 secondsBut then I'm like, okay, obviously, it's not gonna, we need to hide the good ones and show only the bad ones, and now that's the case. - I need to integrate everything into one place.
2:18:262 hours, 18 minutes, 26 secondsI automate like everything. - Yeah, yeah. - Also just a large set of CronJob. A lot of the publication of this podcast is done all,
2:18:362 hours, 18 minutes, 36 secondseverything's just on automatically, it's all clipped up. All this kind of stuff. - Wow, yeah. - But it would be nice to automate even more. - Yeah. - Like translation,
2:18:442 hours, 18 minutes, 44 secondsall this kind of stuff would be nice to automate. - Yeah, every JavaScript, every PHP error gets sent to my Telegram as well. So every user, whatever user it is,
2:18:522 hours, 18 minutes, 52 secondsdoesn't have to be page user. If they run into a error,
2:18:562 hours, 18 minutes, 56 secondsthe JavaScript sends the JavaScript error to the server and then it sends to my Telegram, from all my websites.
2:19:042 hours, 19 minutes, 4 seconds- So you get like a message. - So I get like a uncut, variable error, whatever, blah, blah, blah. And then I'm like, "Okay, interesting." And then I go check it out.
2:19:122 hours, 19 minutes, 12 secondsAnd that's like a way to get to zero errors, 'cause you get flooded with errors in the beginning, and now it's like nothing almost. - So that's really cool.
2:19:202 hours, 19 minutes, 20 secondsThat's really cool. - But this is the same stuff people, they pay like very big SaaS companies. New Relic for right?
2:19:282 hours, 19 minutes, 28 secondsTo manage this stuff. So you can do that too. You can use off the shelf. I like to build myself. It's easier. - Yeah, it's nice. It's nice to do that kind of automation.
2:19:372 hours, 19 minutes, 37 secondsI'm starting to think of like,
2:19:382 hours, 19 minutes, 38 secondswhat are the things in my life I'm doing myself that could be automated in addition.
2:19:432 hours, 19 minutes, 43 seconds- You can ask GPT, give your daily your day and then ask you what parts you to automate.
2:19:482 hours, 19 minutes, 48 seconds- Well, one of the things I would love to automate more is my consumption and social media. - [Pieter] Yeah. - Both the output and the input.
2:19:552 hours, 19 minutes, 55 seconds- Man, I think there's some startups that do that. They summarize the cool shit happening on Twitter, with AI, I think the guy called SWYX or something,
2:20:062 hours, 20 minutes, 6 secondshe does like a newsletter that's completely AI generated. We have the cool new stuff in AI. - Yeah, I mean I would love to do that.
2:20:132 hours, 20 minutes, 13 secondsBut also like across Instagram, Facebook- - Yeah. - LinkedIn. - Yeah. - All this kind of stuff. Just like, okay,
2:20:192 hours, 20 minutes, 19 secondscan you summarize the internet for me (Pieter chuckles) For today? - Summarize internet.com. - Yeah, dot com.
2:20:242 hours, 20 minutes, 24 seconds- Yeah. - Because I feel like it pulls into way too much time,
2:20:292 hours, 20 minutes, 29 secondsbut also like, I don't like the effect it has some days on my psyche.
2:20:332 hours, 20 minutes, 33 seconds- Because of like haters or just general content and politics? - Just general. No, no, just general. Like for example, TikTok is a good example of that for me.
2:20:412 hours, 20 minutes, 41 secondsI sometimes just feel dumber after I use TikTok. I just feel like- - [Pieter] Yeah, I don't use it anymore. - Empty somehow and I'm like uninspired.
2:20:492 hours, 20 minutes, 49 seconds- Yeah. - It's funny in the moment I'm like, ha-ha, look at that cat doing a funny thing. And then you're like,
2:20:562 hours, 20 minutes, 56 secondsoh, look at that person dancing in a funny way to that music. And then you're like,
2:21:012 hours, 21 minutes, 1 second10 minutes later you're like, I feel way dumber and I don't really wanna do much. - Yeah. - For the rest of the day. - My girlfriend said, she saw me like watching some dumb video.
2:21:102 hours, 21 minutes, 10 secondsShe's like, "Dude, your face looks so dumb as well." (Lex laughs) Your whole face starts going like, oh, interesting. - I mean with social media,
2:21:192 hours, 21 minutes, 19 secondswith X sometimes for me too,
2:21:212 hours, 21 minutes, 21 secondsI think I'm probably naturally gravitating towards the drama. - Yeah, hard wheel. - Yeah, and so with following AI people,
2:21:292 hours, 21 minutes, 29 secondsespecially AI people that only post technical content and it's been really good, 'cause then I just look at them,
2:21:342 hours, 21 minutes, 34 secondsand then I go on down rabbit holes of like learning new papers that have been published or- - Yeah. - Git repos,
2:21:402 hours, 21 minutes, 40 secondsor just any kind of cool demonstration of stuff and the kind of things that they retweet.
2:21:462 hours, 21 minutes, 46 secondsAnd that's the rabbit hole I go and I'm learning and I'm inspired, all that kind of stuff. But it's been tough. It's been tough to control that. - It's difficult.
2:21:532 hours, 21 minutes, 53 secondsYou need to like manage your platforms. I have a mute board list as well, so I mute like politics stuff, 'cause I don't really want it on my feed.
2:22:012 hours, 22 minutes, 1 secondAnd I think I've muted so much that now my feed is good. I see interesting stuff, (Lex laughs) but the fact that you need to modify,
2:22:092 hours, 22 minutes, 9 secondsyou need to like mod your app, your social media platform- - Yeah. - Just to function and not be toxic for you, for your mental health, right? That's like a problem.
2:22:172 hours, 22 minutes, 17 secondsIt should be doing that for you.
2:22:182 hours, 22 minutes, 18 seconds- It's some level of automation that would be interesting. I wish I could access X and Instagram through API easier.
2:22:272 hours, 22 minutes, 27 seconds- You need to spend $42,000 a month, which my friends do. Yeah, you can do that. - But still, even if you do that, that you're not getting,
2:22:352 hours, 22 minutes, 35 secondsI mean there's limitations that don't make it easy to do like- - Yeah. - Automate. The thing that they're trying to limit,
2:22:412 hours, 22 minutes, 41 secondslike abuse or for you to steal all the data from the app to then train an LLM, or something like this. - Yeah.
2:22:462 hours, 22 minutes, 46 seconds- But if I just wanna figure out ways to automate my interaction with the X system, or with Instagram, they don't make that easy.
2:22:552 hours, 22 minutes, 55 secondsBut I would love to sort of automate that and explore different ways to how to leverage LLMs to control the content I consume,
2:23:022 hours, 23 minutes, 2 secondsand maybe publish that and maybe they themselves can see how that could be used to improve their system. - Yeah. - But there's not enough access.
2:23:102 hours, 23 minutes, 10 seconds- Yes, if you could screen cap your phone, right? It could be an app that watches your screen with you. - You could, yeah. - But I don't even know like what it would do.
2:23:192 hours, 23 minutes, 19 secondsMaybe it's can hide stuff before you see it. Scroll down. - I have that, I have Chrome extensions.
2:23:232 hours, 23 minutes, 23 secondsI write a lot of Chrome extensions that hide parts of different pages and so on. - Yeah. - For example,
2:23:292 hours, 23 minutes, 29 secondson my main computer, I hide all views and likes and all that on YouTube content that I create. So that I don't- - Smart, doesn't affect you.
2:23:382 hours, 23 minutes, 38 seconds- It doesn't, yeah. So you don't pay attention to it. - Yeah. - I also hide parts there. I have a mode for X where I hide most of everything.
2:23:462 hours, 23 minutes, 46 secondsSo there's no, it's same with YouTube. - I have the same, I have this extension. - Well, I wrote my own 'cause it's easier. - Yeah. - 'Cause it keeps changing.
2:23:522 hours, 23 minutes, 52 secondsIt's not easy to keep it dynamically changing,
2:23:562 hours, 23 minutes, 56 secondsbut they're really good at like getting you to be distracted and like starting to- - Related accounts, related post. - Related stuff. - I'm like, I don't want related.
2:24:032 hours, 24 minutes, 3 seconds- And like 10 minutes later you're like, or something that's trending. I have a weird amount of friends addicted to YouTube, and I'm not addicted.
2:24:102 hours, 24 minutes, 10 secondsI think 'cause my attention span is too short for YouTube. (Lex and Pieter laughs) But I have this extension to like YouTube Unhook, which it hides all the related stuff.
2:24:192 hours, 24 minutes, 19 secondsI can just see the video and it's amazing. But sometimes I need to like, I need to search a video how to do something.
2:24:262 hours, 24 minutes, 26 secondsAnd then I go to YouTube and then I had these YouTube shorts. These YouTube shorts are like,
2:24:312 hours, 24 minutes, 31 secondsthey're algorithmically designed to just make you tap them. And I tap and I then I'm like five minutes later, with this face,
2:24:392 hours, 24 minutes, 39 secondsand you're just stuck. And it's like, what happened? I was gonna open, I was gonna play like the coffee mix,
2:24:452 hours, 24 minutes, 45 secondsthe music mix for drinking coffee together in the morning, like jazz, I didn't wanna go to shorts. So it's very difficult.
2:24:542 hours, 24 minutes, 54 seconds- I love how we're actually highlighting all kinds of interesting problems that all could be solved at a startup. Okay, so what about the exit?
Chapter 15: When to sell startup
2:25:012 hours, 25 minutes, 1 secondWhen and how to exit?
2:25:032 hours, 25 minutes, 3 seconds- Man, you shouldn't ask me 'cause I never sold my company, and I've- - So you've never... All the successful stuff you've done, you've never sold it. - Yeah, it's kind of sad, right?
2:25:112 hours, 25 minutes, 11 secondsSo I've been in a lot of acquisition like deals and stuff, and I learned a lot about finance people as well there,
2:25:182 hours, 25 minutes, 18 secondslike manipulation and due diligence and then changing the valuation. People change the valuation after.
2:25:262 hours, 25 minutes, 26 secondsA lot of people string you on to acquire you and then it takes six months. It's a classic. It takes six to 12 months. They wanna see everything.
2:25:332 hours, 25 minutes, 33 secondsThey wanna see your Stripe and your code and whatever. And then in the end, they'll change the price to lower,
2:25:412 hours, 25 minutes, 41 seconds'cause you're already so invested. So it's a negotiation tactic, right? I'm like, no, then I don't want to sell, right? And the problem with my companies is like,
2:25:482 hours, 25 minutes, 48 secondsthey make 90% profit margin. So the multiple, companies get sold with multiples, kind of multiples of profit or revenue.
2:25:572 hours, 25 minutes, 57 secondsAnd often the multiple is like three times,
2:25:592 hours, 25 minutes, 59 secondsthree times or four times or five times revenue or profit. So in my case, they're all automated.
2:26:062 hours, 26 minutes, 6 secondsSo I might as as well wait three years and I get the same money as when I sell and then I can still sell the same company. You know what I mean? I can still sell for three, five times.
2:26:132 hours, 26 minutes, 13 secondsSo financially, it doesn't really make sense to sell. - Yeah. - Unless the price high enough. If the price gets to six or seven or eight,
2:26:222 hours, 26 minutes, 22 secondsI don't wanna wait six years for the money. But if you give me three, like three years is nothing. I can wait.
2:26:272 hours, 26 minutes, 27 seconds- So that means they're really valuable stuff about the companies you created is not just the interface and the crowdsource content,
2:26:362 hours, 26 minutes, 36 secondsbut the people themselves, like the user base. - Yeah. So Nomad List, it's a community, yeah. - So I could see that being extremely valuable. - Yeah. - I'm surprised that has not.
2:26:442 hours, 26 minutes, 44 seconds- But Nomad List, it's like my baby. It's like my first project I took off, and I don't really know if I wanna sell it. It's like something you- - Yeah.
2:26:502 hours, 26 minutes, 50 seconds- Would be nice when you're old to just still work on this. It has like a mission,
2:26:552 hours, 26 minutes, 55 secondswhich is like people should travel anywhere and they can work from anywhere and they can meet different cultures. And that's a good way to make the world get better.
2:27:032 hours, 27 minutes, 3 secondsIf you go to China and live in China, you'll learn that they're nice people. And a lot of stuff you hear about China's propaganda, a lot of stuff is true as well.
2:27:102 hours, 27 minutes, 10 secondsBut it's more, you know, you learn a lot from traveling. And I think that's why it's a cool product to not sell.
2:27:172 hours, 27 minutes, 17 secondsAI products, I have less emotional feeling with AI products like photo AI, which I could sell, yeah.
2:27:222 hours, 27 minutes, 22 seconds- Yeah, the thing you also mentioned is you have to price in the fact that you're going to miss. - Yeah. - The company you created.
2:27:302 hours, 27 minutes, 30 seconds- And the meaning it gives you, right?
2:27:322 hours, 27 minutes, 32 secondsThere's a very famous depression after start finding a solar company. They're like, this was me. Like who am I? And they immediately start building another one.
2:27:402 hours, 27 minutes, 40 seconds(Lex laughs) They never can stop. So I think it's good to keep working until you die.
2:27:462 hours, 27 minutes, 46 secondsJust keep working on cool stuff and you shouldn't retire. I think retirement's bad probably. - So you usually build this stuff solo and mostly work solo.
Chapter 16: Coding solo
2:27:562 hours, 27 minutes, 56 secondsWhat's the thinking behind that? - I think I'm not so good working with other people. Not like I'm crazy, but I don't trust other people. - To clarify,
2:28:042 hours, 28 minutes, 4 secondsyou don't trust other people to do a great job.
2:28:072 hours, 28 minutes, 7 seconds- Yeah, and I don't wanna have this consensus meeting where we all like,
2:28:122 hours, 28 minutes, 12 secondsyou have a meeting of three people and then you kind of get this compromise results, which is very European. In Holland, we call pull them whatever.
2:28:202 hours, 28 minutes, 20 secondsYou put people the room and you only let 'em out when they agree on the compromise, right? In politics. I think it breeds like averageness,
2:28:282 hours, 28 minutes, 28 secondsyou get an average idea, average company, average culture, you need to have a leader or you need to be solo and just do it, do it yourself, I think.
2:28:392 hours, 28 minutes, 39 secondsAnd I trust some people, now with my best friend Andre, I'm making a new AI startup.
2:28:442 hours, 28 minutes, 44 secondsBut it's because we know each other very long and he's one of the few people I would build something with but almost never, yeah.
2:28:512 hours, 28 minutes, 51 seconds- So what does it take to be successful when you have more than one? How do you build together with Andre? How do you build together with other people?
2:28:592 hours, 28 minutes, 59 seconds- So he codes, I should post on Twitter. Literally, I promoted on Twitter. We set product strategy.
2:29:062 hours, 29 minutes, 6 secondsI said, this should be better, this should be better. But I think you need to have one person coding it. He codes in Ruby so was like cannot do Ruby, I'm in PHP.
2:29:142 hours, 29 minutes, 14 seconds- So have you ever coded with another person for prolonged periods of time? - Never in my life. (Lex laughs)
2:29:242 hours, 29 minutes, 24 seconds- What do you think is behind that? - I know it was always just me sitting on my laptop, like coding.
2:29:302 hours, 29 minutes, 30 seconds- No, like you've never had another developer who like rolls in and like? - I've had once with Photo AI, there's an AI developer, Philip, I hired him to do the...
2:29:372 hours, 29 minutes, 37 seconds'Cause I can't write Python. - Yeah. - And AI stuff is Python. And I needed to get models to work and replicate and stuff. And I needed to improve Photo AI.
2:29:452 hours, 29 minutes, 45 secondsAnd he helped me a lot for 10 months he worked, and man, I was trying Python working with NumPy,
2:29:502 hours, 29 minutes, 50 secondsand package manager and it was too difficult for me to figure this shit out. And I didn't have time. I think 10 years ago I would've time to sit,
2:29:582 hours, 29 minutes, 58 secondsgo do all-nighters to figure this stuff out with Python. I don't have the... It's not my thing, - But it's not your thing. It's another programming language, I get it.
2:30:072 hours, 30 minutes, 7 secondsAI, new thing, got it. But you never had a developer roll in, look at your PHP, jQuery code and yes,
2:30:142 hours, 30 minutes, 14 secondslike in conversation or improv- - Yeah. - They talk about yes, and, like basically, alright. - I had for one week. - Understand. - And that ended.
2:30:232 hours, 30 minutes, 23 seconds- What happened? - Because he wanted to rewrite everything in the- - No, that's the wrong guy.
2:30:272 hours, 30 minutes, 27 seconds- I know. - He wanted to rewrite and what? - He wanted to rewrite, he said this jQuery, we cannot do this. I'm like, okay.
2:30:322 hours, 30 minutes, 32 secondsHe's we need to rewrite a thing in Vue, vue.js I'm like, "Are you sure? Can we just like, you know, keep jQuery?" He's like, "No, man." And we need to change a lot of stuff.
2:30:412 hours, 30 minutes, 41 secondsAnd I'm like, "Okay." And I was kinda feeling it like this, you know, we're gonna clean up shit. But then after week, this is gonna take way too much time.
2:30:492 hours, 30 minutes, 49 seconds- I think I like working with people where when I approach them,
2:30:552 hours, 30 minutes, 55 secondsI pretend in my head that they're the smartest person who has ever existed.
2:30:592 hours, 30 minutes, 59 seconds- Wow. - So I look at their code or I look at the stuff they've created and try to see the genius of their way. You really have to understand people,
2:31:072 hours, 31 minutes, 7 secondslike really notice them.
2:31:112 hours, 31 minutes, 11 secondsAnd then from that place have a conversation about what is the better approach. - Yeah, but those are the top tier developers. - [Lex] Yeah.
2:31:182 hours, 31 minutes, 18 seconds- Those are the ones that are tech ambiguous. So they can work with,
2:31:222 hours, 31 minutes, 22 secondsthey can learn any tech stack and they can- - Yeah. - And that's like really few, it's like- - Really? - Top 5%. - Damn. - Because if you try higher devs, no offense to devs, but most devs are not.
2:31:302 hours, 31 minutes, 30 secondsMan, most people in general jobs are not so good at the job, even doctors and stuff. - That's too sad. - When you realize this, people are very average at the job. - Yeah.
2:31:382 hours, 31 minutes, 38 seconds- Especially with dev with coding, I think. So sorry for-
2:31:412 hours, 31 minutes, 41 seconds- I think that's a really important skill for a developer to roll in and understand the musicality, the style. - That's it, man.
2:31:492 hours, 31 minutes, 49 secondsEmpathy, it's like code empathy, right? - It's code empathy. - Yeah, it's new word, but that's it. You need to understand,
2:31:552 hours, 31 minutes, 55 secondsgo over the code, get a holistic view of it and man, you can suggest we change stuff, for sure. And look, jQuery is crazy.
2:32:032 hours, 32 minutes, 3 secondsIt's crazy, I'm using jQuery. We can change that. - It's not crazy at all. jQuery is also beautiful- - Yeah. - And powerful, and PHP is beautiful and powerful.
2:32:102 hours, 32 minutes, 10 secondsEspecially as you said recently, as the versions evolved, it's much more serious programming language now.
2:32:192 hours, 32 minutes, 19 secondsIt's super fast. - For sure. - Like PHP is really fast now. - Yeah, yeah, yeah. - It's crazy JavaScripts- - Much faster than Ruby, yeah. - Really fast now. - Yeah.
2:32:262 hours, 32 minutes, 26 seconds- So if speed is something you care about, it's super fast. - Yeah. - And there's gigantic communities of people- - [Pieter] Yeah. - Using those program languages, and there's frameworks if you like the framework.
2:32:352 hours, 32 minutes, 35 secondsSo whatever, it doesn't really matter what you use, but also you, if I was like a developer working with you,
2:32:422 hours, 32 minutes, 42 secondslike you are extremely successful. You've shipped a lot. - Yeah. - So like if I roll in, I'm gonna be like,
2:32:502 hours, 32 minutes, 50 secondsI don't assume you know nothing. Assume Pieter is a genius, like the smartest developer ever. And like learn, learn from it. - Yeah. - And yes and.
2:32:592 hours, 32 minutes, 59 secondsNotice parts in the code where like, okay, okay, okay. I got it. - Yeah. - Here's how he's thinking. And now if I want to add another,
2:33:082 hours, 33 minutes, 8 secondslike a little feature, definitely needs to have emoji. (laughs) - Yeah, man. - In front of it. And then like just follow the same style and add it.
2:33:162 hours, 33 minutes, 16 seconds- [Pieter] Yeah. - And my goal is to make you happy, to make you smile, to make you, ha-ha, fuck, I get it. And now you're going to start respecting me.
2:33:252 hours, 33 minutes, 25 seconds- Yeah. - And like trusting me, and you start working together in this way. I don't know. I don't know how hard it's to find developers. - No, I think they exist.
2:33:332 hours, 33 minutes, 33 secondsI think I need to hire more people. I need to try more people. - Try people, yeah. - But that costs a lot of my energy and time. - Yeah. - But it's 100% possible. - Yeah. - But do I want it?
2:33:412 hours, 33 minutes, 41 secondsI don't know, things kind of run fine for now. (Lex laughs) And I mean like, okay. You could say like, okay, Nomad List looks kind of clunky. People say the design's gonna clunky.
2:33:482 hours, 33 minutes, 48 secondsOkay, I'll improve the design. It's like next to my to-do list, for example. I'll get there eventually. - But it's true. I mean you're also extremely good at what you do.
Chapter 17: Ship fast
2:33:572 hours, 33 minutes, 57 secondsI'm just looking at the interfaces of Photo AI. You with jQuery, right? How amazing is jQuery?
2:34:052 hours, 34 minutes, 5 secondsThese cowboys are getting, these are... There's these cowboys. This is a lot, this is a lot.
2:34:132 hours, 34 minutes, 13 secondsBut I'm glad they're all wearing shirts. Anyway, the interface here is just really, really nice.
2:34:182 hours, 34 minutes, 18 secondsI could tell you know what you're doing and with Nomad List extremely nice, the interface. - Thank you, man. - And that's all you.
2:34:272 hours, 34 minutes, 27 seconds- [Pieter] Yeah, that's everything is me. - So all of this and every little feature.
2:34:312 hours, 34 minutes, 31 secondsAll of this. - People say it looks kind of ADHD or ADD,
2:34:332 hours, 34 minutes, 33 secondslike it's so much because it has so many things and designs these days is minimalist. Right? - Right, right, I hear you.
2:34:412 hours, 34 minutes, 41 secondsBut this is a lot of information and it's useful information,
2:34:452 hours, 34 minutes, 45 secondsand it's delivered in a clean way while still stylish and fun to look at.
2:34:502 hours, 34 minutes, 50 secondsSo like minimalist design is about when you want to convey no information whatsoever- - Yeah. - And look cool. - Yeah, it's very cool. It's pretentious, right?
2:34:572 hours, 34 minutes, 57 seconds- Pretentious or not, the function is useless.
2:35:002 hours, 35 minutesThis is about a lot of information delivered to you in a clean, and when it's clean you can't be too sexy. So it's sexy enough.
2:35:082 hours, 35 minutes, 8 seconds- Yeah, this is I think how my brain looks. It's a lot of shit going on. It's like drawing bass music. It's like very (imitates bass music)
2:35:152 hours, 35 minutes, 15 seconds- Yeah, but it's this still... The spacing of everything is nice. The fonts are really nice. Like very readable, very small. - Yeah, I like it, you know,
2:35:242 hours, 35 minutes, 24 secondsbut I made it so I don't trust my own judgment. - No, this is really nice. - Thank you, man. - Emojis are somehow, like this is a style, it's a thing.
2:35:322 hours, 35 minutes, 32 seconds- I need to pick the emoji. It takes a while to pick them. - Something about the emoji is a really nice memorable, like placeholder for the idea.
2:35:412 hours, 35 minutes, 41 seconds- Yeah. - If it was just text, it would actually be overwhelming if you was just text. The emoji really helps. That's a brilliant addition.
2:35:492 hours, 35 minutes, 49 secondsSome people might look at it, why do you have emojis everywhere? It's actually really, for me, it's really- - People tell me to remove the emojis. - Yeah, well, people don't know what they're talking about. - Makes it immature.
2:35:582 hours, 35 minutes, 58 seconds- I'm sure people will tell you a lot of things. This is really nice. And then using color is nice. Small font but not too small.
2:36:062 hours, 36 minutes, 6 secondsAnd obviously, you have to show maps, which is really tricky. - Yeah. - Yeah. - This is nice. - No, this is really, really, really nice.
2:36:152 hours, 36 minutes, 15 secondsI mean, okay, how this looks when you hover over it? - Yeah, it's easy as transitions. - No, I understand that.
2:36:232 hours, 36 minutes, 23 secondsI'm sure there's like,
2:36:242 hours, 36 minutes, 24 secondshow long does that take you to figure out how you want it to look?
2:36:272 hours, 36 minutes, 27 secondsDo you ever go down a rabbit hole where you spent like two weeks? - No, it's all iterative. It's like 10 years of, you know, added C transition here or do this or.
2:36:352 hours, 36 minutes, 35 seconds- Well, let's say like, see these are rounded now. - Yeah. - If you wanted to like round is probably the better way. But if you want it to be rectangular,
2:36:422 hours, 36 minutes, 42 secondslike sharp corners, what would you do? You just? - So go to the index at CSS. - Yeah. - And I do Command + F. and I search border radius 12 px.
2:36:512 hours, 36 minutes, 51 seconds- [Lex] Yeah. - And then I replace with border radius zero. And then I do Command + Enter- - Yeah. - And it's get deploys,
2:36:582 hours, 36 minutes, 58 secondsit pushes to the git hub and then sends a WebBook and then deploys to my server, and it's live in five seconds. - Oh, you often deployed to production.
2:37:062 hours, 37 minutes, 6 secondsYou don't have like a testing ground? - No. (Lex laughs) So I'm like famous for this,
2:37:132 hours, 37 minutes, 13 seconds'cause I'm too lazy to set up a staging server on my laptop every time. So nowadays I just deploy to production. - [Lex] Yeah.
2:37:212 hours, 37 minutes, 21 seconds- Man, I'm gonna be canceled for this. But it works very well for me, 'cause I have a lot of...
2:37:252 hours, 37 minutes, 25 secondsI have PHP Lint and djLint so it tells me when there's error. So I don't deploy. - Yeah. - But literally,
2:37:302 hours, 37 minutes, 30 secondsI have like 37,000 git commits in the last 12 months or something.
2:37:342 hours, 37 minutes, 34 secondsSo I make small fix and then Command + Enter, and sends to GitHub. GitHub sends a web to server, web server pulls it, deploys the production,
2:37:442 hours, 37 minutes, 44 secondsand is there.
2:37:442 hours, 37 minutes, 44 seconds- What's the latency of that from you pressing Command + Enter? - One second, can be one two seconds. - So you just make a change and then you-
2:37:512 hours, 37 minutes, 51 seconds- That's right. - Getting really good at like not making mistakes basically. - Man, 100%, you're right. People are like, how can you do this?
2:37:552 hours, 37 minutes, 55 secondsWell, you get good at not taking the server down. - Yeah. - 'Cause you need to code more carefully. Look, it's idiotic in any big company.
2:38:022 hours, 38 minutes, 2 secondsBut for me, it works 'cause it makes me so fast.
2:38:052 hours, 38 minutes, 5 secondsSomebody will report a bug on Twitter and I kind of did do a stopwatch. How fast can I fix this bug?
2:38:122 hours, 38 minutes, 12 secondsAnd then two minutes later, for example, it's fixed. - [Lex] Yeah.
2:38:162 hours, 38 minutes, 16 seconds- And it's fun 'cause it's annoying for me to work with companies where you report a bug and it takes like six months. - Yeah. - It's like horrible.
2:38:232 hours, 38 minutes, 23 secondsAnd it makes people really happy when you can really quickly solve their problems. But it's crazy, I admit. - I don't think it's crazy.
2:38:312 hours, 38 minutes, 31 secondsI mean, I'm sure there's a middle ground,
2:38:332 hours, 38 minutes, 33 secondsbut I think that whole thing where there's a phase of like testing and there's the staging,
2:38:392 hours, 38 minutes, 39 secondsand there's a development and then there's like multiple tables and databases that you use for the stage. Like it's- - Filing. - It's a mess. - Yeah.
2:38:462 hours, 38 minutes, 46 seconds- And there's different teams involved. It's not good. - I'm like a good funny extreme on the other side. - But just a little bit safer but not too much.
2:38:542 hours, 38 minutes, 54 secondsIt would be great. - Yeah, yeah. - And I'm sure that's actually like how X now, how they're doing rapid improvement.
2:39:002 hours, 39 minutesIt's exactly. - No, they do because there's more bugs. - Yeah. - And people complain about like, oh look, he bought this Twitter. Now it's full of bugs. Dude, these shipping stuff-
2:39:062 hours, 39 minutes, 6 seconds- Yeah. - Things are happening now and it's a dynamic app now.
2:39:102 hours, 39 minutes, 10 seconds- Yeah, the bugs is actually a sign of a good thing happening.
2:39:122 hours, 39 minutes, 12 seconds- Yes. - The bugs of the feature because it shows- - Yes. - That the team is actually building shit. - 100%, yeah.
2:39:172 hours, 39 minutes, 17 seconds- Well, one of the problems is like I see with YouTube there's so much potential to build features, but I just see how long it takes.
2:39:262 hours, 39 minutes, 26 secondsSo I've gotten a chance to interact with many other teams. But one of the teams is MLA, multi-language audio.
2:39:342 hours, 39 minutes, 34 seconds- Yeah. - I dunno if you know this,
2:39:352 hours, 39 minutes, 35 secondsbut in YouTube you can have audio tracks in different languages. - Yeah. - For over dubbing. And there's a team, and not many people are using it,
2:39:432 hours, 39 minutes, 43 secondsbut like every single feature, they have to meet and agree, and there's allocate resources. Engineers have to work on it.
2:39:512 hours, 39 minutes, 51 secondsBut I'm sure it's a pain in the ass for the engineers to get approval to like, - [Pieter] I know. - Because it has to not break the rest of the site, whatever they do.
2:39:582 hours, 39 minutes, 58 secondsBut if you don't have enough dictatorial, like top down, like we need this now,
2:40:042 hours, 40 minutes, 4 secondsit's gonna take forever to do anything multi-language audio.
2:40:072 hours, 40 minutes, 7 secondsBut multi-language audio is a good example of a thing that seems niche right now, but it quite possibly could change the entire world.
2:40:162 hours, 40 minutes, 16 secondsWhen I upload this conversation right here, if instantaneously, it dubs it into 40 languages.
2:40:242 hours, 40 minutes, 24 seconds- [Pieter] Yeah, man.
2:40:252 hours, 40 minutes, 25 seconds- And everybody consume every single video can be watched and listened to in those different, it changes everything.
2:40:322 hours, 40 minutes, 32 secondsAnd YouTube is extremely well-positioned to be the leader in this. - Yeah. - They got the compute, they got the user base,
2:40:412 hours, 40 minutes, 41 secondsthey have the experience of how to do this. So like multi-language audio should be- - High priority feature, right? - Yeah, that's high priority. - Yeah, yeah.
2:40:492 hours, 40 minutes, 49 seconds- And it's a way, Google is obsessed with AI right now. They wanna show off that they could be dominant in AI. That's a way for Google to say like, we used AI.
2:40:572 hours, 40 minutes, 57 secondsThis is a way to break down the walls that language creates.
2:41:012 hours, 41 minutes, 1 second- The preferred outcome for them is probably their career and not the overall result of the cool product. - I think they're not like selfish or whatever,
2:41:092 hours, 41 minutes, 9 secondsthey wanna do good. There's something about the machine- - The organization, yeah. - The organizational stuff that's just so I happens.
2:41:132 hours, 41 minutes, 13 seconds- I have this when I report bugs on like big companies I work with.
2:41:182 hours, 41 minutes, 18 secondsI talk to a lot of different people in DM and they're all really trying hard to do something. They're all really nice. And I'm the one being kind of asshole- - Yeah. - 'Cause I'm like,
2:41:262 hours, 41 minutes, 26 secondsguys, I'm talking to 20 people about this for six months and nothing's happening. I say, "Man, I know but I'm trying my best." Yeah, so it's systemic.
2:41:342 hours, 41 minutes, 34 seconds- Yeah, it requires, again, I don't know if there must be a nicer word,
2:41:382 hours, 41 minutes, 38 secondsbut like dictatorial type of top down the CEO rolls in and just says like, for you two, it's like MLA. - Yeah. - Get this done now.
2:41:462 hours, 41 minutes, 46 secondsThis is the highest priority. - I think big companies, especially in America, a lot of it's legal, right? They need to pass everything through legal. - Yeah. - And you can't like,
2:41:542 hours, 41 minutes, 54 secondsman, the things I do, I could never do that in a big corporation,
2:41:572 hours, 41 minutes, 57 seconds'cause it's everything has to be probably Git deploy has to go through legal. - Well, again, dictatorial, you basically say Steve Jobs did this quite a lot.
2:42:062 hours, 42 minutes, 6 secondsI've seen a lot of leaders do this. Ignore the lawyers. Ignore comms. - Exactly, yeah. - Ignore PR, ignore everybody. Give power to the engineers.
2:42:142 hours, 42 minutes, 14 secondsListen to the people on the ground, get this shit done, and get it done by Friday. - Yeah. - That's it. - And the law can change.
2:42:202 hours, 42 minutes, 20 secondsFor example, let's say you launch this AI dubbing and there's some legal problems with lawsuits. Okay, so the law changes, there will be appeals, there will be some Supreme Court thing, whatever.
2:42:292 hours, 42 minutes, 29 secondsAnd the law changes. So just by shipping it you change society, you change the legal framework. And by not shipping, being scared of the legal framework all the time.
2:42:372 hours, 42 minutes, 37 secondsYou're not changing things. - Just outta curiosity, what ID do you use? Let's talk about like your whole setup.
Chapter 18: Best IDE for programming
2:42:442 hours, 42 minutes, 44 secondsGiven how ultra productive you are and that you often program in your underwear slouching on the couch.
2:42:522 hours, 42 minutes, 52 secondsDoes it matter to you in general? Is there like a specific ID you use you use VS Code? - Yeah, VS Code. Before I used Sublime Text,
2:43:002 hours, 43 minutesI don't think it matters a lot.
2:43:012 hours, 43 minutes, 1 secondI think I'm very skeptical of like tools when people think it... They say it matters, right? I don't think it matters. I think whatever tool you know very well,
2:43:102 hours, 43 minutes, 10 secondsyou go very, very fast and the shortcuts, for example, IDE. I love Sublime Text 'cause I could use multi-cursor,
2:43:182 hours, 43 minutes, 18 secondsyou search something and I could just like make mass replaces in a foul- - Yeah. - With the cursor thing, and VS Code doesn't really have that as well.
2:43:262 hours, 43 minutes, 26 seconds- It's actually interesting. Sublime is the first editor where I've learned that. - [Pieter] Yeah. - And I think they just make that super easy. So what would that be called?
2:43:342 hours, 43 minutes, 34 secondsMulti-edit, multi-cursors edit- - Yeah. - Thing whatever. - [Pieter] That's so good. - I'm sure like almost every editor can do that.
2:43:412 hours, 43 minutes, 41 secondsIt is just probably hard to set up. - Yeah. - And why so why need it? - VS Code is not so good, I think, Or at least I try it.
2:43:482 hours, 43 minutes, 48 secondsBut I would use that to like process data. Data sets, for example, from World Bank. I would just multi-cursor mass change everything,
2:43:562 hours, 43 minutes, 56 secondsbut yeah, VS Codes. Man, I was bullied into using VS Code,
2:44:002 hours, 44 minutes'cause Twitter would always see my screenshots of Sublime Text and say, "Why are you still using Sublime Text?" Boomer, you need to use VS codes. - Yeah. - And I'm like, yeah, I'll try it.
2:44:082 hours, 44 minutes, 8 secondsI got a new MacBook and then I never installed, I never copied the old MacBook. I just make it fresh, you know, like a clean, like format C Windows.
2:44:172 hours, 44 minutes, 17 secondsClean starts and I'm like, 'Okay, I'll try VS Code." And it stuck, you know, but I don't really care. It's not so important for me. - Wow, you know the format C reference, huh?
2:44:252 hours, 44 minutes, 25 seconds- Dude, it was so good.
2:44:262 hours, 44 minutes, 26 secondsYou would install Windows and then after three or six months it would start breaking and everything was like get slow. Then you would restart, go to Dos,
2:44:342 hours, 44 minutes, 34 secondsformat C, you would delete your hard drive and then install the Windows 95 again, that was so good times. And you would design everything.
2:44:432 hours, 44 minutes, 43 secondsNow I'm gonna install it properly. now I'm gonna design my desktop properly. - Yeah, I don't know if it's peer pressure,
2:44:482 hours, 44 minutes, 48 secondsbut like I used E-MAX for many, many years and I know, you know, I love Lisp. So a lot of the customization is done in Lisp.
2:44:562 hours, 44 minutes, 56 secondsIt's a programming language. And partially, it was peer pressure.
2:44:582 hours, 44 minutes, 58 secondsBut part of it's realizing like you need to keep learning stuff. The same issue with jQuery. I still think I need to learn Node.js, for example.
2:45:082 hours, 45 minutes, 8 seconds- [Pieter] Yeah.
2:45:082 hours, 45 minutes, 8 seconds- Even though that's not my main thing or even close to the main thing. But I feel like you need to keep learning this stuff. And even if you don't choose to use it long term,
2:45:192 hours, 45 minutes, 19 secondsyou need to give it a chance. So your understanding of the world expands.
2:45:232 hours, 45 minutes, 23 seconds- Yeah, you wanna understand the new technological concepts and see if they can benefit you. It would be stupid not to even try it.
2:45:292 hours, 45 minutes, 29 seconds- It's more about the concepts I would say than the actual tools. Like expanding, and that could be a challenging thing. So going to VS Code and like really learning it,
2:45:382 hours, 45 minutes, 38 secondslike all the shortcuts, all the extensions, and actually installing different stuff and playing with it. That was a interesting challenge. It was uncomfortable at first.
2:45:452 hours, 45 minutes, 45 seconds- Yeah, for me too, yeah. - Yeah, but you just dive in. - It's like neuro flex, like you keep your brain fresh, like this kind of stuff. - I gotta do that more.
2:45:532 hours, 45 minutes, 53 secondsHave you given React a chance? (laughs)
2:45:562 hours, 45 minutes, 56 seconds- No, but I wanna learn and I understand the basics, right? I don't really know where to start.
2:46:032 hours, 46 minutes, 3 seconds- But would you like, I guess you gotta use your own model, which is like build the thing using it. - No, man, so I kind of did that.
2:46:112 hours, 46 minutes, 11 seconds- Yeah. - The stuff I do in jQuery is essentially, a lot of it is like, I start rebuilding whatever tech is already out there.
2:46:202 hours, 46 minutes, 20 secondsNot based on that, but just on accident. - Yeah. - I keep coding long enough that I built the same, I start getting the same problems everybody else has, and you start building the same frameworks kind of.
2:46:272 hours, 46 minutes, 27 secondsSo essentially, I use my own kind of framework of.
2:46:292 hours, 46 minutes, 29 seconds- So you basically build a framework from scratch that's your own, that you understand it? - Kinda yeah. With HX calls, but essentially it's the same thing. Look, I don't have the time.
2:46:382 hours, 46 minutes, 38 secondsI think saying you don't have the time is like always a lie, 'cause you just don't prioritize it enough.
2:46:432 hours, 46 minutes, 43 secondsMy priority is still like the running the businesses and improving that and AI.
2:46:472 hours, 46 minutes, 47 secondsI think learning AI is much more valuable now than learning a front end framework. Yeah, It's just more impact.
2:46:532 hours, 46 minutes, 53 seconds- I guess you should be just learning every single day a thing. - Yeah, you can learn a little bit every day. - Yeah. - Like a little bit of React,
2:47:012 hours, 47 minutes, 1 secondor I think now, like Next very big. So learn a little bit of Next. But I call them the military industrial complex. But you need to know,
2:47:092 hours, 47 minutes, 9 secondsyou need to know it anyway.
2:47:112 hours, 47 minutes, 11 seconds- You gotta learn how to use the weapons of war and then you can be peacenik. - Yeah, yeah. - Yeah, I mean,
2:47:172 hours, 47 minutes, 17 secondsbut you gotta learn it in the same exact way as we were talking about,
2:47:212 hours, 47 minutes, 21 secondswhich is learning by trying to build something with it and actually deploy it.
2:47:252 hours, 47 minutes, 25 seconds- The frameworks are so complicated and it changes so fast. So it's like, where do I start?
2:47:302 hours, 47 minutes, 30 secondsAnd I guess it's the same thing when you're starting out making websites. Where do you start? Ask GPT-4, I guess. Yeah, it's just so dynamic.
2:47:382 hours, 47 minutes, 38 secondsIt changes so fast that, and I dunno if it would be a good idea for me to learn it. Maybe some combination of like, few Next with PHP Laravel.
2:47:482 hours, 47 minutes, 48 secondsLaravel is like a framework for PHP. I think that would be... It could benefit me. Maybe Tailwind for CSS, like a styling engine.
2:47:562 hours, 47 minutes, 56 secondsThat stuff could probably save me time.
2:47:582 hours, 47 minutes, 58 seconds- Yeah, but like you won't know until you really give it a try. And it feels like you have to build, if maybe I'm talking to myself,
2:48:052 hours, 48 minutes, 5 secondsbut I should probably recode like my personal one page in Laravel. - [Pieter] Yeah.
2:48:132 hours, 48 minutes, 13 seconds- And even though it might not have almost any dynamic elements, maybe have one dynamic element, but it has to go end to end in that framework.
2:48:212 hours, 48 minutes, 21 seconds- Yeah. - Or like end to end build in Node.js. Some of it is, I don't... Figuring out how to even deploy the thing. - I have no idea. - Full stack.
2:48:292 hours, 48 minutes, 29 seconds- All I know is right now I would send it to GitHub and it sends it to my server. I don't know how to get JavaScript running. I have no clue. - Yeah.
2:48:362 hours, 48 minutes, 36 seconds- So I guess I need like a pass, like first an array, or Heroku kind of those kind of platforms.
2:48:432 hours, 48 minutes, 43 seconds- I actually kind of just gave myself the idea of like, I kind of just wanna build a single webpage.
2:48:512 hours, 48 minutes, 51 secondsLike one webpage that has one dynamic element and just do it in every single, in a lot of frameworks.
2:48:582 hours, 48 minutes, 58 secondsLike just- - Ah, on the same page. - Same exact page. - All the same? - Kinda page. - It's smart. That's a cool project. You can learn all these frameworks.
2:49:052 hours, 49 minutes, 5 seconds- Yeah. - And you can see the differences. - Yeah. - That's interesting, right? - That how long it takes to do it. - Yeah, stopwatch, yeah, yeah.
2:49:102 hours, 49 minutes, 10 seconds- I have to figure out actually something sufficiently complicated, 'cause it should probably do,
2:49:162 hours, 49 minutes, 16 secondsit should probably do some kind of thing where it accesses the database and dynamically changing stuff. - Some AI stuff, some LLM stuff.
2:49:252 hours, 49 minutes, 25 seconds- Yeah, maybe some, it doesn't have to be AI LLM but maybe- - Do an API call. - API call to something. - Yeah, to replicate, for example. And then that would be a very cool project.
2:49:332 hours, 49 minutes, 33 seconds- Yeah, yeah. And like time it and also report on my happiness. - Yeah.
2:49:392 hours, 49 minutes, 39 seconds- I'm gonna totally do this - Because nobody benchmarks this. Nobody's benchmark developer happiness with frameworks.
2:49:442 hours, 49 minutes, 44 seconds- [Lex] Yeah - Nobody's benchmarked the shipping time. - Just take like a month and do this. How many frameworks are there? How many?
2:49:522 hours, 49 minutes, 52 secondsThere's like five main ways of doing it. So there's like, this is no... There's backend, frontend. - And this stuff confused me too. Like React now apparently has become backend.
2:50:012 hours, 50 minutes, 1 second- [Lex] Yeah. - Or something used to be on frontend, and you're forced to do now backend also. I don't know. But there's not really, you're not really forced to do anything.
2:50:092 hours, 50 minutes, 9 secondsSo according to the internet, so like there's no...
2:50:132 hours, 50 minutes, 13 secondsIt's actually not trivial to find the canonical way of doing things. So like the standard vanilla- - Yeah. - You go to the ice cream shop,
2:50:212 hours, 50 minutes, 21 secondsthere's like a million flavors. I want vanilla. If I've never had ice cream in my life, can we just like learn about ice cream?
2:50:292 hours, 50 minutes, 29 seconds- Yeah. - I want vanilla. Nobody actually, sometimes they'll literally name it vanilla. But I wanna know what's the basic way,
2:50:382 hours, 50 minutes, 38 secondsbut not like dumb, but the standard canonical common. - Yeah, I know the dominant way- - [Lex] Yeah, the dominant way. - 60% of developers do it like this.
2:50:462 hours, 50 minutes, 46 seconds- [Lex] Yeah. - It's hard to figure that out, that's the problem. - Yeah, maybe LLMs can help. Maybe you should explicitly ask what is the dominant?
2:50:542 hours, 50 minutes, 54 seconds- Because they usually know the dominant, they give answers- - Yeah. - That are like the most probable kind of.
2:50:592 hours, 50 minutes, 59 seconds- Yeah. - So that makes sense to ask LLM.
2:51:022 hours, 51 minutes, 2 secondsI think honestly, maybe what would help is if you wanna learn or I would wanna learn a framework.
2:51:082 hours, 51 minutes, 8 secondsHire somebody that already does it and just sit with them and make something together. I've never done that, but I've thought about it.
2:51:152 hours, 51 minutes, 15 secondsSo it would be a very fast way to take their knowledge put them in my brain. - I've tried these kinds of things. What happens is it depends what kind of,
2:51:232 hours, 51 minutes, 23 secondsif they're like a world class developer, yes.
2:51:252 hours, 51 minutes, 25 secondsOftentimes they themselves are used to that thing and they have not themselves explored in other options.
2:51:322 hours, 51 minutes, 32 secondsSo they're have this dogmatic talking down to you, - [Pieter] Yeah. (laughs) - This is the right way to do it. - Yeah. - It's like, no, no, no. We're just like exploring together.
2:51:402 hours, 51 minutes, 40 secondsOkay, show me the cool thing you've tried, which is like, it has to have open-mindedness to like,
2:51:492 hours, 51 minutes, 49 secondsNode.js is not the right way to do web development. It's like one way. And there's nothing wrong with the old lamp, PHP,
2:52:002 hours, 52 minutesjQuery, vanilla JavaScript way. It just has its pros and cons, and like- - Yeah. - You really you need to know what the pros and cons. - Those people exist. You could find those people probably.
2:52:082 hours, 52 minutes, 8 seconds- Yeah. - If you wanna learn AI, imagine you have Karpathy sitting next to you- - Yeah. - Teach you, like he does these YouTube videos. It's amazing.
Chapter 19: Andrej Karpathy
2:52:152 hours, 52 minutes, 15 secondsHe can teach it to like a five-year-old about how to make LLM. It's amazing.
2:52:202 hours, 52 minutes, 20 secondsImagine this guy sitting next to you and just teaching you like, let's make LLM together. Holy shit, it would be amazing.
2:52:262 hours, 52 minutes, 26 seconds- Yeah, I mean, well, Karpathy has its own style and is like, I'm not sure he's for everybody, for example, a five-year-old.
2:52:342 hours, 52 minutes, 34 secondsIt depends on the five-year-old. - Yeah. - He's like super technical, - But he's amazing,
2:52:382 hours, 52 minutes, 38 seconds'cause he's super technical and he's the only one who can explain- - Yes. - The stuff in a simple way, which shows his complete genius.
2:52:442 hours, 52 minutes, 44 seconds- Yes. - 'Cause if you can explain without jargon- - No BS. - You're like, wow. - And build it from scratch. - Yeah. it's like top tier.
2:52:522 hours, 52 minutes, 52 secondsWhat a guy!
2:52:532 hours, 52 minutes, 53 seconds- But he might be anti-framework 'cause he builds from scratch. - Actually, exactly, yeah. Actually he probably is, yeah. - He's like you, but for AI.
2:53:012 hours, 53 minutes, 1 second- Yeah, so maybe learning a framework is a very bad idea for us. Maybe we should stay in PHP, and like Script kiddie and the- - But you have to...
2:53:092 hours, 53 minutes, 9 secondsMaybe by learning the framework, you learn what you want to yourself, build from scratch. - Yeah, maybe you learn concepts,
2:53:152 hours, 53 minutes, 15 secondsbut you don't actually have to start using it for your life, right? Yeah, yeah. - And you're still a Mac guy or was a Mac guy? - Yeah, yeah, I switched to Mac in 2014,
2:53:242 hours, 53 minutes, 24 seconds'cause when I wanted to start traveling and my brother was like, "Dude, get a MacBook. It's like the standard now." I'm like, wow, I need to switch from Windows. And I had like three screens, Windows.
2:53:332 hours, 53 minutes, 33 seconds- [Lex] Yeah. - I had this whole setup for music production. I had to sell everything. And then I had a MacBook, and I remember opening up this MacBook box,
2:53:412 hours, 53 minutes, 41 secondslike aah, and it was so beautiful. It was like this aluminum, and then I opened it, I removed the screen protector thing. And it's so beautiful.
2:53:492 hours, 53 minutes, 49 secondsAnd I didn't touch it for three days. I was just like, looking at it. - Yeah. - Really. And I was still on the Windows computer. And then I went traveling with that.
2:53:562 hours, 53 minutes, 56 secondsAnd all my great things started when I switched to Mac, which sounds very dogmatic, right? - What great things are you talking about? - All the business started working out.
2:54:042 hours, 54 minutes, 4 secondsI started traveling. I started building startups. I started making money. It all started when I switched to Mac. - Listen, I kinda...
2:54:132 hours, 54 minutes, 13 secondsYou're making me wanna switch to Mac.
2:54:152 hours, 54 minutes, 15 secondsSo I either use Linux inside Windows with WSL or just- - Yeah. - Ubuntu, Linux. But Windows for most stuff,
2:54:222 hours, 54 minutes, 22 secondslike editing or any Adobe products. - Adobe stuff, right? - Yeah, yeah, yeah. Well you could use, I guess you could do Mac stuff there.
2:54:302 hours, 54 minutes, 30 seconds- Yeah. - I wonder if I should switch. What do you miss about Windows? What was the pros and cons? - I think the Finder is horrible in Mac. - What is horrible? - The Finder.
2:54:392 hours, 54 minutes, 39 secondsOh, you don't know the Finder? So there's the Windows Explorer. - Yeah. - Windows Explorer is amazing. - Thank you for talking down. - Finder is strange, man. There's like strange things. There's this bug where if you send,
2:54:482 hours, 54 minutes, 48 secondslike, attach a photo in WhatsApp or Telegram,
2:54:502 hours, 54 minutes, 50 secondsit just selects the whole folder and you almost accidentally can click Enter and you send all your photos, all your files to this chat group, happened to my girlfriend.
2:54:582 hours, 54 minutes, 58 secondsShe starts sending me photo, photo, photo, photo, photo. So Finder is very unusable, but it has Linux. The whole thing is like, it's Unix based, right?
2:55:062 hours, 55 minutes, 6 seconds- So you use the command like? - Yeah, all the time. Like all the time. And the cool thing is you can run, I think it's like Unix, like Debian or whatever.
2:55:142 hours, 55 minutes, 14 secondsYou can run most Linux stuff on macOS, which makes this very good for developments. I have my Nginx server,
2:55:222 hours, 55 minutes, 22 secondsif I'm not lazy and set up my staging on my laptop, it's just the Nginx server. The same as I have on my cloud server, right? The same way the websites run.
2:55:312 hours, 55 minutes, 31 secondsAnd I can use almost everything, the same config files, configuration files, and it just works.
2:55:362 hours, 55 minutes, 36 secondsAnd that makes Mac a very good platform for Linux stuff, I think. - Yeah, yeah. - Real Ubuntu is like better of course.
2:55:452 hours, 55 minutes, 45 seconds- Yeah, I'm in this weird situation where I'm somewhat of a power user in Windows,
2:55:532 hours, 55 minutes, 53 secondsand let's say Android and all the much smarter friends I have all using Mac and iPhone.
2:56:022 hours, 56 minutes, 2 secondsAnd it's like- - If you don't wanna go through the peer pressure. - It's not peer pressure.
2:56:072 hours, 56 minutes, 7 secondsIt's like one of the reasons I wanna have kids is that there's a lot of... I would love to have kids as a baseline,
2:56:152 hours, 56 minutes, 15 secondsbut there's like a concern. Maybe there's gonna be a trade off, or all this kind of stuff.
2:56:192 hours, 56 minutes, 19 secondsBut you see like these extremely successful smart people who are friends of mine, who have kids and are really happy they have kids. So that's not peer pressure,
2:56:272 hours, 56 minutes, 27 secondsthat's just like a strong signal. - Yeah, it works for people. - That works for people. - Yeah, yeah, yeah. And the same thing with Mac. It's like- - Yeah. (Lex exhales)
2:56:352 hours, 56 minutes, 35 seconds- I don't see fundamentally, I don't like closed systems.
2:56:382 hours, 56 minutes, 38 secondsSo fundamentally, I like Windows more because there's much more freedom. Same with Android, there's much more freedom. - Yeah. - It's much more customizable.
2:56:462 hours, 56 minutes, 46 secondsBut like all the cool kids, the smart kids are using Mac and iPhones.
2:56:542 hours, 56 minutes, 54 secondsAll right, I need to really, I need to give it a real chance. Especially for development, since more and more stuff is done in the cloud anyway. - Yeah. - Well, anyway.
2:57:022 hours, 57 minutes, 2 secondsBut it's funny to hear you say all the good stuff started happening. Maybe I'll be like that guy too. When I switched to Mac, all the good stuff- - Yeah. - Started happening.
2:57:102 hours, 57 minutes, 10 seconds- I think it's just about the hardware. It's just much about the software that-
2:57:122 hours, 57 minutes, 12 seconds- Yeah. - The hardware is so well built, right? A keyboard and- - Yeah. But look at the keyboard I use. - Yeah, that's pretty cool. - That's one word for it.
2:57:212 hours, 57 minutes, 21 secondsWhat's your favorite place to work? - On the couch. Does the couch matter? Is the couch at home or is it any couch? - No, like hotel couch also.
2:57:302 hours, 57 minutes, 30 secondsIn the room, right? - In the room.
2:57:312 hours, 57 minutes, 31 seconds- Yeah, but I used to work like very ergonomically with like a standing desk. - Yeah. - And everything like perfect, like eye height, screen, blah, blah, blah.
2:57:382 hours, 57 minutes, 38 secondsAnd I felt like, man, this has to do with lifting too. I started getting RSI like repetitive strain injury, like tingling stuff. And it would go all the way on my back.
2:57:462 hours, 57 minutes, 46 secondsAnd I was sitting in a coworking space like 6:00 AM, sun comes up and I'm working and I'm coding, and I hear like a sound or something.
2:57:532 hours, 57 minutes, 53 secondsSo I do like, I look left and my neck gets stuck like (imitates cracking) and I'm like, wow, fuck! (Lex laughs)
2:58:022 hours, 58 minutes, 2 secondsAnd I'm like, am I dying? And I thought, (Lex laughs) I'm probably dying. - Yeah, probably dying. - I don't wanna die in a cowork space. I'm gonna go home and die in like- - Yeah. - Peace and honor.
2:58:102 hours, 58 minutes, 10 seconds- Yeah. - So I closed my laptop, and I put it in my backpack. - Yeah. - And I walked to the street. I got on my motorbike, went home.
2:58:172 hours, 58 minutes, 17 seconds- Yeah. - And I lie down on like a pillow, with my legs up and stuff, to get rid of this like, 'cause it was my whole back.
2:58:252 hours, 58 minutes, 25 secondsAnd it was because I was working like this all the time. - Yeah. - So I started getting like a, a laptop stand, everything. Ergonomically correct.
2:58:332 hours, 58 minutes, 33 secondsBut then I started lifting and since then, it seems like everything gets straightened out. Your posture kinda, you're more straight.
2:58:412 hours, 58 minutes, 41 secondsAnd I never have RSI anymore, repetitive injury. I never have tingling anymore. No pains and stuff.
2:58:492 hours, 58 minutes, 49 secondsSo then I started working on the sofa and it's great. It feels close to the...
2:58:562 hours, 58 minutes, 56 secondsI sit like this.
2:58:582 hours, 58 minutes, 58 seconds- Yeah. - Legs together and then a pillow and then a laptop. And then I work. - Are you like leaning back? - I'm kind of like, together like legs,
2:59:072 hours, 59 minutes, 7 secondsand then- - Where's the mouse? - No, so everything is tracked on the macOs, the MacBook. I used to have the Logitech MX mouse,
2:59:152 hours, 59 minutes, 15 secondsthe perfect ergonomic mouse. So you're just doing like this little thing with the thing. - Yes. - One screen. - One screen. And I used to have three screens.
2:59:232 hours, 59 minutes, 23 secondsI know where people come from. - Yeah, yeah, yeah. - I had all the stuff,
2:59:262 hours, 59 minutes, 26 secondsbut then I realized that having it all condensed in one laptop, it's a 16 inch MacBook. So it's quite big. But having it one there is amazing,
2:59:332 hours, 59 minutes, 33 seconds'cause you're so close to the tools, you're so close to what's happening. It's like working on a car or something.
2:59:422 hours, 59 minutes, 42 secondsMan, if you have trees, you to look here, look there, you get also neck injury actually. - Well, I don't know. This sounds like you're part of a cult,
2:59:492 hours, 59 minutes, 49 secondsand you're just trying to convince me.
2:59:522 hours, 59 minutes, 52 secondsI mean, but it's good to hear that you can be ultra productive on a single screen. - Yeah. - I mean that's crazy. - Come on tap, you all tap, Windows is all up tap, macros Command + Tap,
3:00:013 hours, 1 secondyou switch very fast. - So you have like one, the entire screen is taken out by VS Code. Say you look at the code and then- - Yeah. - And then if you deploy like a website, you what?
3:00:103 hours, 10 secondsSwitch screens. - Command + Tap to Chrome. I used to have this swipe screen, you could do like different screen. - Yeah, yeah. - Spaces. - Yeah. - I was like,
3:00:173 hours, 17 seconds"Ah, it's too difficult." Let's just put it all on one screen on the MacBook and then. - And you can be productive that way? - Yeah, very productive, yeah.
3:00:253 hours, 25 secondsMore productive than before. - Interesting. Because I have three screens, then two of them are vertical. Like on the size? - Yeah, code, right, yeah. - For the code,
3:00:333 hours, 33 secondsyou can see a lot. - Yeah. No man, I love it. I love seeing it with friends. They have amazing like battle stations, right? - Yeah. - It's called. It's amazing. I want it but I don't want it, right?
3:00:413 hours, 41 seconds- So you like the constraints. - [Pieter] That's it. - There's some aspect of the constraints, which like once you get good at it, you can focus your mind and you can.
3:00:493 hours, 49 seconds- Man, I'm suspicious of like more. - Yeah. - Do you really need all the stuff? It might slow me down, actually. - It's a good way to put it. I'm suspicious of more, me too.
3:00:583 hours, 58 seconds- [Pieter] Yeah. - I'm suspicious of more in all ways, in all walks of life. - 'Cause you can defend more, right? You can defend. Yeah, I'm a developer, I make money. I need to get more screens, right?
3:01:063 hours, 1 minute, 6 secondsI need to be more efficient. And then you read stuff about "Mythical Man-Month,"
3:01:113 hours, 1 minute, 11 secondswhere like hiring more people slows down a software project that's famous. Think you can use a metaphor maybe for tools as well.
3:01:183 hours, 1 minute, 18 secondsThen I see friends just with gear acquisition syndrome that buying so much stuff, but they're not that productive. They have the best, most beautiful battle stations,
3:01:273 hours, 1 minute, 27 secondsdesktops, everything. They're not that productive. And it's also like kind of fun. It's all from my laptop in a backpack, right? - Yeah. - It's kinda nomad minimalist.
Chapter 20: Productivity
3:01:353 hours, 1 minute, 35 seconds- Take me through like the perfect ultra productive day in your life. Say like where you get a lot of shit done.
3:01:433 hours, 1 minute, 43 seconds- Yeah. - And it's all focused on getting shit done. When are you waking up? Is it a regular time?
3:01:513 hours, 1 minute, 51 secondsSuper early, super late? - Yes, so I go to sleep like 2:00 AM usually, something like that. And before 4:00 AM, but my girlfriend would go sleep midnight.
3:02:003 hours, 2 minutesSo we did a compromise like 2:00 AM you know, so I wake up around 10, 11. The more like 10, shower, make coffee,
3:02:083 hours, 2 minutes, 8 secondsI make coffee, like drip coffee, like the V60, you know the filter. And I'd boil water and then I put the coffee in,
3:02:153 hours, 2 minutes, 15 secondsand then chill, live with my girlfriend and then open laptops, start coding, check what's going on, like bugs or whatever.
3:02:223 hours, 2 minutes, 22 seconds- How long are you, like how stretches of time are you able to just sit behind the computer coding?
3:02:283 hours, 2 minutes, 28 seconds- So I used to need like really long stretches where I would do like all nighters and stuff to get shit done.
3:02:333 hours, 2 minutes, 33 secondsBut I've gotten trained to like have more interruptions where I can like- - Because you have to. - This is life. There's a lot of distractions.
3:02:413 hours, 2 minutes, 41 secondsYour girlfriend asks stuff, people come over, whatever. - Yeah. - So I'm very fast now, I can lock in and lock out quite fast.
3:02:473 hours, 2 minutes, 47 secondsAnd heard people, developers or entrepreneurs with kids have the same thing. Before they're like, ah, I cannot work, but they get used to it, and they get really productive in like short time,
3:02:563 hours, 2 minutes, 56 secondsbecause they only have like 20 minutes and then shit goes crazy again. So another constraint, right? - Yeah, it's funny.
3:03:033 hours, 3 minutes, 3 seconds- So I think that works for me, but yeah. And then cook food and stuff, like have lunch, steak and chicken and whatever.
3:03:103 hours, 3 minutes, 10 seconds- Do you eat a bunch of times a day? So you said coffee. - Yeah. - What are you doing? - Yeah, so a few hours later cook foods.
3:03:163 hours, 3 minutes, 16 secondsWe get like locally stores like meat and stuff and vegetables and cook that, and then second coffee and then go some more.
3:03:243 hours, 3 minutes, 24 secondsMaybe go outside for lunch. You can mix fun stuff. - How many hours are you saying a perfectly productive day? Are you doing programming? If you were like to kill it?
3:03:333 hours, 3 minutes, 33 secondsAre you doing like all day basically?
3:03:343 hours, 3 minutes, 34 seconds- You mean like the special days where like- - Special days. - Girlfriend leaves to like bears or something, and you're alone for a week at home. Which is amazing. - Yes.
3:03:423 hours, 3 minutes, 42 seconds- You can just code. And you stay up all night and eat chocolate and- - Yeah, chocolate. - Yeah, you know. - Yeah, yeah, okay, okay. Let's remove girlfriend from picture.
3:03:493 hours, 3 minutes, 49 secondsSocial life from picture. It's just you. - Man, then goes shit crazy. - Yeah, because when shit goes crazy. - Yeah, now shit goes crazy. - Okay, good.
3:03:593 hours, 3 minutes, 59 secondsLet's rewind. Are you still waking up? There's coffee, there's no girlfriend to talk to.
3:04:033 hours, 4 minutes, 3 secondsThere's no- - Now we wake up (Lex and Pieter laughs) Like 1:00 PM or 2:00 PM. (Lex laughs)
3:04:113 hours, 4 minutes, 11 seconds- Because you went to bed at 6:00 AM. - Yeah, because I was coding, I was finding some new AI shit. - Yeah, yeah. - And I was studying it, and it was amazing. And I cannot sleep 'cause it's too important.
3:04:203 hours, 4 minutes, 20 secondsWe need to stay awake. - Yeah, yeah. - We need to see all of this. We need to make something now. But that's the times I do make new stuff more,
3:04:273 hours, 4 minutes, 27 secondsso I think I have a friend, he actually books a hotel for like a week to leave his, and he has a kid too,
3:04:343 hours, 4 minutes, 34 secondsand his girlfriend and his kids stay in the house and he goes to another hotel. Sounds a little suspicious, right? Going to the hotel. But all he does (Lex laughs) is like writing or coding. - Yeah.
3:04:413 hours, 4 minutes, 41 seconds- He's a writer, and he needs like this alone time, this silence. And I think for this flow state, it's true.
3:04:473 hours, 4 minutes, 47 secondsI'm better maintaining stuff when there's a lot of disruptions then like creating new stuff. I need this. And it's common, it's close.
3:04:553 hours, 4 minutes, 55 secondsIt's this uninterrupted period of time. So yeah, I wake up like one, 2:00 PM, still coffee, shower.
3:05:033 hours, 5 minutes, 3 secondsWe still shower, you know, and then this code like nonstop. Maybe my friends comes over anyway. - Just some distraction.
3:05:113 hours, 5 minutes, 11 seconds- Yeah, Andre, he codes too. So he comes over, we code together, we listen... It starts going back to like the Bali days, you know, like- - Yeah. - Coworking days.
3:05:193 hours, 5 minutes, 19 seconds- You're not really working with him, but you're just both working.
3:05:213 hours, 5 minutes, 21 seconds- Because it's nice to have like the vibe where you both sit together on the couch and coding on something and you actually, it's mostly silent or there's music,
3:05:293 hours, 5 minutes, 29 secondsand sometimes you ask something. But generally, you are really locked in. - What music are you listening to?
3:05:373 hours, 5 minutes, 37 seconds- I think like techno, like YouTube techno. There's a channel called HOR with Umlaut,
3:05:443 hours, 5 minutes, 44 secondsHO like double dot. It's Berlin techno, whatever.
3:05:483 hours, 5 minutes, 48 secondsIt looks like they film it in like a toilet with like white tiles and stuff. And it's very cool. And they always have like, very good,
3:05:563 hours, 5 minutes, 56 secondskind of industrial. - Industrial, so fast phase. - Kinda aggressive, like (imitates techno music) - Yeah, yeah. That's not distracting to you brain. - That's amazing. - Okay.
3:06:043 hours, 6 minutes, 4 seconds- I think distracting, man, jazz.
3:06:063 hours, 6 minutes, 6 secondsI listen coffee jazz with my girlfriend when I wake up and it's kind of like, this piano starts getting annoying.
3:06:103 hours, 6 minutes, 10 secondsIt's like (imitates jazz music). (Lex laughs) It's too many tones. It's like, too many things go on. - [Lex] Yeah, yeah. - This industrial techno is like, you know, these African rain dances.
3:06:193 hours, 6 minutes, 19 seconds(imitates techno music) It's this transcendental- - Yeah. - Trans. - That's interesting, 'cause I actually mostly now listen to brown noise,
3:06:293 hours, 6 minutes, 29 secondsnoise. - Yeah, wow. - Pretty loud. - Wow.
3:06:323 hours, 6 minutes, 32 seconds- And one of the things you learn is your brain gets used to whatever. So I'm sure to techno, if I actually give it a real chance. - [Pieter] Yeah. - My brain would get used to it.
3:06:403 hours, 6 minutes, 40 secondsBut like with noise, what happens is something happens to your brain. I think there's a science to it, but I don't really care. You just have to be a scientist of one.
3:06:493 hours, 6 minutes, 49 secondsStudy yourself, your own brain. Yeah. - For me, it does something.
3:06:543 hours, 6 minutes, 54 secondsI discovered it right away when I tried it for the first time. After about like a couple minutes,
3:07:023 hours, 7 minutes, 2 secondsevery distraction just like disappears. And it goes like (imitates pressure deflating)
3:07:083 hours, 7 minutes, 8 secondsYou can like hold focus on things like really well. It's weird. You can like really focus on a thing.
3:07:173 hours, 7 minutes, 17 secondsIt doesn't really matter what that is. I think that's what people achieve with like meditation. You can like focus on your breath, for example, for so long. - It's just normal brown noise.
3:07:253 hours, 7 minutes, 25 secondsIt's not like binaural. - No, it's just normal brown noise. - It's like shhhh. - Yeah. - White noise, I think it's same. It's like make noise, white noise.
3:07:343 hours, 7 minutes, 34 secondsBrown noise I think is when it's like bassier. - Yeah, it's more diffused. More dampened. - Yeah. - Yeah, yeah. - Dampened. - Yeah, I can see that. - No sharpness.
3:07:413 hours, 7 minutes, 41 seconds- Yeah, sharp brightness. - Yeah, brightness. - Yeah, I can see that. And you use a headphones, right? - Yeah, headphones. - Yeah.
3:07:463 hours, 7 minutes, 46 seconds- I actually like, walk around in life often with brown noise. - Dude, that's like psycho batshit. But it's cool. (Lex laughs) - Yeah, yeah, yeah.
3:07:543 hours, 7 minutes, 54 secondsWhen I murder people, it helps. (Lex laughs) It drowns out their screams. - Jesus Christ. - I'm sorry,
3:08:023 hours, 8 minutes, 2 secondsI said too much. - Man, I'm gonna try brown noise. - With a murder or for the coding? Yeah. - For the coating, yeah. - Okay, good. Try it, try it. But you have to like, with everything else,
3:08:113 hours, 8 minutes, 11 secondsyou give it a real chance. - Yeah. - I also, like I said, do techno type stuff.
3:08:183 hours, 8 minutes, 18 secondsElectronic music on top of the brown noise, but then control the speed, 'cause the faster it goes, the more anxiety.
3:08:263 hours, 8 minutes, 26 secondsSo if I really need to get shit done, especially with programming, I'll have a beat. - Yeah. - And it's great. It's cool.
3:08:333 hours, 8 minutes, 33 secondsSay is cool to play those little tricks of your mind to study yourself. - Yeah. - I usually don't like to have people around, 'cause when people, even if they're working,
3:08:423 hours, 8 minutes, 42 secondsI don't know, I like people too much. They're like, interesting. - There might be, yeah. In coworker space, I would just start talking too much. - Yeah. - Yeah, yeah. - So there's a source of distraction.
3:08:503 hours, 8 minutes, 50 seconds- Yeah, in the cowork space, we would do like a money pot, like a mug.
3:08:553 hours, 8 minutes, 55 secondsSo we'd work for 45 minutes and then if you would say, like pair of words, you would get a fine, which is like $1. So you'd put $1 to say, "Hey, what's up?"
3:09:033 hours, 9 minutes, 3 secondsSo $3 you put in the mug, and then 15 minutes free time. We can like party, whatever. And then 45 minutes again working.
3:09:123 hours, 9 minutes, 12 secondsAnd that works. But you need to shut people up or they, you know. - I think there's an intimacy in being silent together-
3:09:213 hours, 9 minutes, 21 seconds- [Pieter] Yeah. - Maybe I'm uncomfortable with.
3:09:273 hours, 9 minutes, 27 secondsIf you need to make yourself vulnerable and actually do it, like with close friends to just sit there in silence for long periods of time. - Yeah, yeah, yeah. - And like doing a thing.
3:09:363 hours, 9 minutes, 36 seconds- Dude, I watched this video of this podcast. It was like this Buddhism podcast with people meditating, and they were interviewing each other or whatever, and like a podcast.
3:09:443 hours, 9 minutes, 44 secondsAnd suddenly after a question, it's like, yeah, yeah. And they were just silent for like three minutes.
3:09:533 hours, 9 minutes, 53 secondsAnd then they said it was amazing. Yeah, it was amazing. I was like, wow, pretty cool. - Elon is like that. And I really like that,
3:10:023 hours, 10 minutes, 2 secondshe'll ask a question. I don't know, what's a perfectly productive day for you? Like I just asked,
3:10:093 hours, 10 minutes, 9 secondsand you just sit there for like 30 seconds thinking. - Yeah, he thinks. - Yeah, I don't know. - That's so cool.
3:10:193 hours, 10 minutes, 19 secondsI wish I could think more about, but I wanna show you my heart. I wanna show you...
3:10:243 hours, 10 minutes, 24 secondsgo straight from my heart to my mouth to like saying the real thing.
3:10:273 hours, 10 minutes, 27 secondsAnd the more I think the more I start like filtering myself, right? And I wanna just throw it out there immediately. - I do that more with team.
3:10:353 hours, 10 minutes, 35 secondsI think he has a lot of practice in that. I do that as well. And in team setting, when you're thinking, brainstorming. - Yeah. - And you allow yourself to just like, think in silence.
3:10:433 hours, 10 minutes, 43 seconds- Yeah. - Just like, 'cause even in meetings, people wanna talk. - [Pieter] Yeah.
3:10:483 hours, 10 minutes, 48 seconds- It's like, no, you think before you speak and just like, it's okay to be silent together. - [Pieter] Yeah. - And if you allow yourself the room to do that, you can actually come up with really good ideas.
3:10:573 hours, 10 minutes, 57 seconds- Yeah. - So, okay, this perfect day, (laughs) how much caffeine are you consuming in this day? - Man, too much, right?
3:11:043 hours, 11 minutes, 4 secondsBecause normally like two cups of coffee. But on this perfect day, we go to four maybe. So we're starting to hit the anxiety levels.
3:11:123 hours, 11 minutes, 12 seconds- So four cups is a lot for you?
3:11:143 hours, 11 minutes, 14 seconds- Well, I think my coffees are quite strong when I make them. It's like 20 grams of coffee powder in the V60.
3:11:203 hours, 11 minutes, 20 secondsSo my friends call 'em like nuclear coffee 'cause it's quite heavy. - Yeah, super strong. - It's quite strong.
3:11:273 hours, 11 minutes, 27 secondsBut it's nice to hit that anxiety level where you're like almost panic attack. - Yeah. - But you're not there yet. But that's like, man, it's like super locked in.
3:11:363 hours, 11 minutes, 36 secondsJust like (imitates intense music) It's amazing. But I mean there's a space for that in my life. But I think it's great for making new stuff.
3:11:463 hours, 11 minutes, 46 secondsIt's amazing. - Starting from scratch, creating a new thing.
3:11:483 hours, 11 minutes, 48 seconds- Yes, I think girlfriends should let their guys go away for like two weeks. Every few, no, every year at least.
3:11:563 hours, 11 minutes, 56 secondsMaybe every quarter, I dunno. And just sit and make some shit without, they're amazing but like no disturbance.
3:12:043 hours, 12 minutes, 4 secondsJust be alone. And then people can make something very, very amazing. - Just wearing cowboy hats in the mountains like we showed. - Exactly, we can do that.
3:12:123 hours, 12 minutes, 12 seconds- There's a movie about that. - With the laptops. - They didn't do much programming though. - Yeah, you can do a little bit of that. - Okay. - And then a little bit of shipping. You could do both.
3:12:213 hours, 12 minutes, 21 seconds- It's a different, "Brokeback Mountain." - They need to allow us to go. They need like a man cave, right? - Yeah, to ship. - Yeah, to ship. (Lex laughs) - Get shit done, yeah.
3:12:283 hours, 12 minutes, 28 secondsIt's a balance, okay, cool. What about sleep, naps and all that? You not sleeping much? - I don't do naps in the day. I think power naps are good,
3:12:363 hours, 12 minutes, 36 secondsbut I'm never tired anymore in the day. Man, also 'cause of gym, I'm not tired. I'm tired when I wanna...
3:12:443 hours, 12 minutes, 44 secondsWhen it's night, I need to sleep. - Yeah, me, I love naps. - I sleep very well. - I love naps. - Yeah. - I don't care. I don't know. I don't know why, brain shuts off, turns on.
3:12:513 hours, 12 minutes, 51 secondsI dunno if it's healthy or not. It just works. - Yeah. - I think with anything mental, physical,
3:12:563 hours, 12 minutes, 56 secondsyou have to be a student of your own body and like- - Yeah, yeah, yeah. - Know what the limits are.
3:13:013 hours, 13 minutes, 1 secondYou have to be skeptical taking advice from the internet in general,
3:13:043 hours, 13 minutes, 4 seconds'cause a lot of the advice is just like a good baseline for the general population. - It's not personalized, yeah. - You have to become a student of your own-
3:13:123 hours, 13 minutes, 12 seconds- Yeah. - Like of your own body, of your own self, of how you work, yeah. I've done a lot of and just like,
3:13:193 hours, 13 minutes, 19 secondsfor me, fasting was an interesting one, because I used to eat a bunch of meals a day, especially when I was lifting heavy. 'Cause everybody says, "You have to eat,"
3:13:283 hours, 13 minutes, 28 secondskind of a lot, multiple meals a day. But I realize I can get much stronger,
3:13:343 hours, 13 minutes, 34 secondsfeel much better if I eat once or twice a day on. - Yeah, me too, yeah. - It's crazy. - I never understood this small meal thing, yeah. It didn't work for me. - Well, let me just ask you,
3:13:433 hours, 13 minutes, 43 secondsit'd interesting if you can comment on some of the other products you've created. We talked about Nomad List, Interior AI, Photo AI, Therapist AI.
3:13:513 hours, 13 minutes, 51 secondsWhat's RemoteOK? - It's a job board for remote jobs. Because back then, like 10 years ago there was job boards,
3:13:583 hours, 13 minutes, 58 secondsbut it was not really specifically remote job, job boards. So I made one... First of all, Nomad List is I made like nomad jobs, like a page.
3:14:063 hours, 14 minutes, 6 secondsAnd a lot of companies started hiring and they pay for job posts. So I spin it off to RemoteOK.
3:14:103 hours, 14 minutes, 10 secondsAnd now it's like this number one or number two biggest remote job boards.
3:14:153 hours, 14 minutes, 15 secondsAnd it's also fully automated and people just post a job and people apply. It has like profiles as well. It's kinda like LinkedIn for remotes work.
3:14:233 hours, 14 minutes, 23 seconds- So's focus on remote only. - Yeah. It's essentially like a simple job board.
3:14:273 hours, 14 minutes, 27 secondsI discover job boards are way more complicated than you think. Yeah, it's a job board for remote jobs. (Lex laughs)
3:14:363 hours, 14 minutes, 36 secondsBut the nice thing is you can charge a lot of money for job posts. Man, it's good money. B2B, you can charge like, you start with 299.
3:14:423 hours, 14 minutes, 42 secondsBut at the peak when the Fed started printing money, 2021. I was making like 140K a month with RemoteOK,
3:14:493 hours, 14 minutes, 49 secondswith just job posts. And I started like adding crazy upsells, like rainbow color, it's job posts. You can add your background images. - Yeah. - It's just upsells man.
3:14:573 hours, 14 minutes, 57 secondsAnd you charge $1,000 for an upsell. It was crazy. And all these companies is up so up. So yeah, we want everything.
3:15:043 hours, 15 minutes, 4 secondsJob post would cost 3,000, $4,000. And I was like, this is good business.
3:15:113 hours, 15 minutes, 11 secondsAnd then the Fed stopped printing money and it all went down, and it went down to like 10K a month from 140. - Yeah. - Now it's back.
3:15:193 hours, 15 minutes, 19 secondsI think it's like 40. It was good times. - I gotta ask you about back to the digital nomad life. - [Pieter] Yeah.
Chapter 21: Minimalism
3:15:253 hours, 15 minutes, 25 seconds- You wrote a blog post on the reset. And in general, just giving away everything, living a minimalist life.
3:15:333 hours, 15 minutes, 33 seconds- Yeah. - What did it take to do that, like to get rid of everything? - 10 years ago was like this trend in the blog. Back then blogs were so popular.
3:15:413 hours, 15 minutes, 41 secondsIt was a blogosphere, and it was like 100 things challenge. - What is that? The 100 things challenge. - I mean, it's ridiculous.
3:15:453 hours, 15 minutes, 45 secondsBut like you write down every object you have in your house and you count it, you make a spreadsheet and you're like, "Okay, I have 500 things." You need to get it down to 100.
3:15:533 hours, 15 minutes, 53 secondsWhy? This just the trend, so I did it. I started like selling stuff, started throwing away off.
3:15:593 hours, 15 minutes, 59 secondsAnd I did like MDMA and ecstasy like 2012 kind of. And after that trip, I felt so different,
3:16:083 hours, 16 minutes, 8 secondsand I felt like I had to start throwing shit away. I swear. - Yeah. - And I started throwing shit away. And I felt that was like,
3:16:153 hours, 16 minutes, 15 secondsit was almost the drug sending me to a path of like, you need to throw all your shit away. You need to start go on a journey. You need to get out of here.
3:16:223 hours, 16 minutes, 22 secondsAnd that's what the MDMA did, I think, yeah. - How hard is it to get down to 100 items? - Boy, you need to like, sell your PC and stuff.
3:16:313 hours, 16 minutes, 31 secondsYou need to go on eBay and then, man, going eBay, selling all your stuff is balancing, 'cause you discover society. You meet the craziest people.
3:16:383 hours, 16 minutes, 38 secondsYou meet every range from rich to poor, everybody comes to your house to buy stuff. It's so funny, so interesting. I recommend everybody do this.
3:16:463 hours, 16 minutes, 46 seconds- Just to meet people that want your shit. - Yeah, it was so like, I didn't know, I wasn't living in Amsterdam, and I didn't know, I have my own subculture or whatever.
3:16:543 hours, 16 minutes, 54 secondsAnd I discovered the Dutch people, like as they are from eBay. So I sold everything.
3:16:593 hours, 16 minutes, 59 seconds- What's the weirdest thing you had to sell and you had to find a buyer for, not the weirdest, but like, what's memorable?
3:17:053 hours, 17 minutes, 5 seconds- So back then I was making music and we would make music videos with like a Canon 5D camera. - Yeah. - Back then everybody's making films and musicals.
3:17:133 hours, 17 minutes, 13 secondsAnd we bought it with my friends and stuff. And it was kind of like, I had to sell this thing too, 'cause it was very expensive.
3:17:213 hours, 17 minutes, 21 secondsIt was like 6K or something. - [Lex] Yeah. - But it meant that selling this, meant that we wouldn't make music theater anymore. I would leave Holland.
3:17:283 hours, 17 minutes, 28 secondsThis kind of stuff we were working on would end. And I was kind of saying this music theater stuff, we're not getting famous in this or successful. We need to stop doing this.
3:17:363 hours, 17 minutes, 36 secondsThis music production also, it's not really working. And it was kinda like, felt very bad for my friends,
3:17:423 hours, 17 minutes, 42 seconds'cause we would work together on this and to sell this camera that we'd make stuff with. - It was a hard goodbye.
3:17:503 hours, 17 minutes, 50 seconds- It was just a camera, but it was like, it felt like, sorry guys, it doesn't work and I need to go. - Who bought it? Do you remember?
3:17:583 hours, 17 minutes, 58 secondsIt was some guy who couldn't possibly understand the journey. - The emotion of it. - Yeah. - Yeah. - He just showed up,
3:18:063 hours, 18 minutes, 6 secondshere's the money, thanks. - Yeah, but it was like cutting your life. This shit ends now and now we gonna do new stuff. - I think it's beautiful. I did that twice in my life.
3:18:143 hours, 18 minutes, 14 secondsI give away everything, everything, everything. - Wow. - Like down to just pants, underwear, backpack. - Yeah.
3:18:223 hours, 18 minutes, 22 seconds- I think it's important to do. It shows you what's important. - Yeah, I think that's what I learned from it.
3:18:283 hours, 18 minutes, 28 secondsYou learn that you can live a very little objects very little stuff, but there's a counter to it.
3:18:353 hours, 18 minutes, 35 secondsYou lean more on the stuff, on the services, right? Like for example, you don't need a car, you use Uber, right?
3:18:403 hours, 18 minutes, 40 secondsOr you don't need kitchen stuff because you go to restaurants when you're traveling. So you lean more on other people's services, but spend money on that as well.
3:18:483 hours, 18 minutes, 48 secondsSo that's good. - Yeah, but just letting go of material possessions,
3:18:513 hours, 18 minutes, 51 secondswhich it gives a kind of freedom to how you move about the world.
3:18:543 hours, 18 minutes, 54 seconds- Yeah. - It gives you complete freedom to go into another city to- - Yeah, with your backpack. - The backpack. - Yeah. - There's a kind of freedom to it.
3:19:013 hours, 19 minutes, 1 secondThere's something about material possessions and having a place and all that, that ties you down a little bit. - Yeah. - Like spiritually.
3:19:073 hours, 19 minutes, 7 seconds- Yeah. - It's good to take a leap alternate into the world. Especially when you're younger to like. - Man, I recommend if you're 18, you get out of high school, do this, go travel,
3:19:173 hours, 19 minutes, 17 secondsand build some internet stuff, whatever. Bring your laptop. It's amazing experience. Five years ago, it's still good in university, but now I'm thinking like,
3:19:253 hours, 19 minutes, 25 secondsno, maybe skip university. Just go first, like travel around a little bit, figure some stuff out. You can go back to university when you're 25.
3:19:323 hours, 19 minutes, 32 secondsYou can like, okay, now I learned, I'd be successful in business. You have money at least. Now you can choose what you really wanna study. Because people at 18,
3:19:403 hours, 19 minutes, 40 secondsthey go study what's probably good for the job market, right? So it probably makes more sense. If you want that, go travel, build some businesses,
3:19:483 hours, 19 minutes, 48 secondsand go back to university if you want.
3:19:493 hours, 19 minutes, 49 seconds- So one of the biggest uses of a university is the networking. You gain friends, you gain, like you meet people. It's a forcing function to meet people.
3:19:573 hours, 19 minutes, 57 secondsBut if you can meet people out to the world- - Travel. - By travel. - Man, and you meet so many different cultures.
3:20:023 hours, 20 minutes, 2 seconds- I mean, the problem for me is like if I traveled at that young age, I'm attracted to people at the outskirts of the world. Like for me- - Like where?
3:20:113 hours, 20 minutes, 11 seconds- Not geographically. - Oh, like the subcultures. - Yeah, like the weirdos, the darkness. - Yeah. Yeah, me too.
3:20:183 hours, 20 minutes, 18 seconds- But that might not be the best networking at 18 years old. (Lex and Pieter laughs) - No, man, if you're smart about it, you can stay safe.
3:20:263 hours, 20 minutes, 26 secondsAnd I met so many weirdos from traveling. That's how travel works. If you really let loose, you meet the craziest people. - [Pieter] Yeah. - And it's the most interesting people.
3:20:373 hours, 20 minutes, 37 secondsAnd I cannot recommend it enough. - Well see, the other thing is that when you're 18, I feel like depending on your personality,
3:20:443 hours, 20 minutes, 44 secondsyou have to learn both how to be a weirdo and how to be a normie. You still have to learn how to fit into society.
3:20:523 hours, 20 minutes, 52 seconds- [Pieter] Yeah. - For a person like me, for example, who's always an outcast. There's always a danger for going full outcast. - [Pieter] Yeah.
3:21:003 hours, 21 minutes- And that's a harder life if you, if you go to like, go full artists in full like darkness, it's just a harder life. - You can come back,
3:21:083 hours, 21 minutes, 8 secondsyou can come back to normie. - That's a skill. I think you have to learn- - You think? - How to fit in to polite society.
3:21:163 hours, 21 minutes, 16 seconds- But I was very strange outcast as well. And I'm more adaptable to normie now. - You learned it, yeah, learned it. - After 30s, you're like, yeah.
3:21:253 hours, 21 minutes, 25 seconds- But you need a skill, you have to learn. - Yeah. Man, I feel also that, you start as an outcast, but the more you work on yourself,
3:21:333 hours, 21 minutes, 33 secondsthe less like shit you have. You kind of start becoming more normie, because you become more chill with yourself and more happy. And it kind of makes you uninteresting, right?
3:21:413 hours, 21 minutes, 41 seconds- Yes. - A little bit. - Yes, yes. - The crazy people are always the most interesting.
3:21:473 hours, 21 minutes, 47 secondsIf you've solved your internal struggles and you therapy and stuff and you kind of become kind of, you know, it's not so interesting anymore maybe.
3:21:563 hours, 21 minutes, 56 seconds- You don't have to be broken to be interesting, I guess is what I'm saying. - Yeah. - What kind of things were left when you minimalized? - So the backpack. - Yeah.
3:22:053 hours, 22 minutes, 5 seconds- MacBook, toothbrush, some clothes, underwear, socks. - [Lex] Yeah.
3:22:113 hours, 22 minutes, 11 seconds- You don't need a lot of clothes in Asia 'cause it's hot. So you just wear swim pants, swim shorts. You walk around flip flops.
3:22:183 hours, 22 minutes, 18 secondsSo very basic, T-shirt, and go to the laundromat and wash my stuff. And I think it was like 50 things or something, yeah.
3:22:273 hours, 22 minutes, 27 seconds- Yeah, it's nice. As I mentioned to you, there's the show alone. - Yeah. - They really test you, 'cause, oh, you only get 10 items,
3:22:353 hours, 22 minutes, 35 secondsand you have to survive out in the wilderness. And then ax, like everybody brings an ax.
3:22:413 hours, 22 minutes, 41 secondsSome people also have a saw. - Wow. - But usually ax does the job. You basically have to, in order to build a shelter,
3:22:493 hours, 22 minutes, 49 secondsyou have to cut down and to cut the trees and make, and like- - Learn Minecraft. - Everything I learned about life, (Pieter laughs) I learn Minecraft, bro.
3:22:583 hours, 22 minutes, 58 secondsYeah, yeah, you could.
3:23:003 hours, 23 minutesIt's nice to create those constraints for yourself to understand what matters to you and also how to be in this world.
3:23:073 hours, 23 minutes, 7 secondsAnd one of the ways to do that is just to live a minimalist life. But some people,
3:23:133 hours, 23 minutes, 13 secondsI've met people that really enjoy material possessions and that brings some happiness, and that's a beautiful thing. - Yeah. - For me, it doesn't, but people are different.
3:23:233 hours, 23 minutes, 23 seconds- It gives me happiness for like two weeks. - [Lex] Yeah. - I'm very quickly adapting to like a baseline. Hedonistic adaptation very fast.
3:23:303 hours, 23 minutes, 30 seconds- Yeah. - But man, if you look at the studies, most people like get a new car six months, get a new house six months, you just feel the same.
3:23:393 hours, 23 minutes, 39 secondsShe's like, wow, should I buy all this stuff?
3:23:423 hours, 23 minutes, 42 secondsStudying hedonistic adaptation made me think a lot about minimalism.
3:23:453 hours, 23 minutes, 45 seconds- And so that you don't even need to go through the whole journey of getting it. Just focus on the thing that's more permanent.
3:23:533 hours, 23 minutes, 53 seconds- Yeah. - Like building shit. - Yeah, like people around you, like people you love. Nice food, nice experiences. - Yeah. - Meaningful work, those things.
3:24:023 hours, 24 minutes, 2 secondsExercise, those things make you happy, I think. Make me happy for sure. - You wrote a blog post, "Why I'm unreachable and maybe you should be too."
Chapter 22: Emails
3:24:113 hours, 24 minutes, 11 secondsWhat's your strategy on communicating with people?
3:24:143 hours, 24 minutes, 14 seconds- Yeah, so when I wrote that, I was getting so many DMs (Lex laughs) as you probably have, you have a million times more,
3:24:203 hours, 24 minutes, 20 secondsand people were getting angry that I wasn't responding and I was like, "Okay, I'll just close down these DMs completely. And people got angry that I closed my DMs down,
3:24:283 hours, 24 minutes, 28 secondsthat I'm not like man of the people. - It's like you changed man. - Yeah, you've changed. You got, you know, like this. And I'm like, I'll explain why.
3:24:363 hours, 24 minutes, 36 secondsI just don't have the time in a day to answer every question. And also people send you like crazy shit, man.
3:24:443 hours, 24 minutes, 44 secondsStalkers and like,
3:24:453 hours, 24 minutes, 45 secondspeople write their whole life story for you and then ask you advice. Man, I have no idea. I'm not a therapist. I don't know, I don't know this stuff. - But also beautiful stuff.
3:24:543 hours, 24 minutes, 54 seconds- Absolutely, sure. - Life story. I've posted a coffee forum, if you wanted to have a coffee with me.
3:24:593 hours, 24 minutes, 59 seconds- Nice. - And I've gotten an extremely large number of submissions and when I look at them, there's just like beautiful people in there. - Yeah, stories. - Beautiful human beings.
3:25:083 hours, 25 minutes, 8 seconds- [Pieter] Yeah.
3:25:093 hours, 25 minutes, 9 seconds- There's really powerful stories and breaks my heart that I won't get to meet those people. - Yeah. - And so this part of it is just like,
3:25:163 hours, 25 minutes, 16 secondsthere's only so much bandwidth to truly see other humans and help them or understand them or hear them or yeah, see them.
3:25:243 hours, 25 minutes, 24 seconds- Yeah, I have this problem that I try...
3:25:273 hours, 25 minutes, 27 secondsI wanna try help people and also like, oh- - Yeah. - Let's make startups and whatever. And I've learned over the years that generally for me,
3:25:363 hours, 25 minutes, 36 secondsand it sounds maybe bad, right? But I helped my friend Andre, for example, he came up to me in a cowork space. That's how I met him. And he said, "I wanna learn to code. I wanna do startups, how do I do it?"
3:25:433 hours, 25 minutes, 43 secondsI said, "Okay, let's go install Nginx. Let's start coding." And he has this self-energy that he actually...
3:25:523 hours, 25 minutes, 52 secondsHe doesn't need to be pushed,
3:25:543 hours, 25 minutes, 54 secondshe just goes and he just goes and he ask questions and he doesn't ask too many questions. He just goes, goes and learns it. And now he has a company and makes a lot of money, has his own startups.
3:26:033 hours, 26 minutes, 3 secondsAnd the people that I had to kind of like,
3:26:053 hours, 26 minutes, 5 secondsthat ask me for help, but then I gave help and then they started debating it. - Yeah. - Do you have that? People ask you advice and they go against you say,
3:26:133 hours, 26 minutes, 13 seconds"No, you're wrong, because." I'm like, "Okay, bro, I don't wanna debate. You asked me for advice," right? And the people need to push generally,
3:26:213 hours, 26 minutes, 21 secondsit doesn't happen.
3:26:223 hours, 26 minutes, 22 seconds- Yeah. - You need to have this energy for yourself. - Well, they're searching. They're searching, they're trying to figure it out. But oftentimes their search,
3:26:303 hours, 26 minutes, 30 secondsif they successfully find what they're looking for, it'll be within. It sounds very like spiritual boost. - [Pieter] Yeah. - But it's really like figuring that shit out on your own.
3:26:383 hours, 26 minutes, 38 seconds- Yeah. - But they're reaching, they're trying to ask the world around them. How do I live this life? How do I figure this out?
3:26:463 hours, 26 minutes, 46 secondsBut ultimately, the answer is gonna be from them working on themselves. And literally, it's the stupid thing, but Googling and doing like searching-
3:26:533 hours, 26 minutes, 53 seconds- Yeah, surfing is procrastination. I think sending messages to people. - Yeah. - Is a lot of procrastination. Lex, how do you become successful podcaster? - Yeah. - Bro, just start.
3:27:033 hours, 27 minutes, 3 secondsJust go. - Yeah. And just go. - I would never ask you how to be successful podcaster? I would just start it,
3:27:113 hours, 27 minutes, 11 secondsand then I would copy your methods. I would say, "Ah, this guy's a Black background. We probably need this as well." - Yeah, try it. - Yeah. - Yeah, try. And then you realize it's not about the Black background,
3:27:203 hours, 27 minutes, 20 secondsit's about something else. So you find your own voice, just keep trying stuff. - Exactly. - Meditation is a difficult thing. Like a lot of people copy and they don't move past it.
3:27:273 hours, 27 minutes, 27 seconds- Yeah. - You should understand their methods and then move past it. - Yeah. - Find yourself, find your own voice.
3:27:323 hours, 27 minutes, 32 secondsFind your own. - Yeah, you imitate and then you put your own spin to it, and that's like creative process. That's literally the whole create... Everybody always builds on the previous work. - Yeah. - You shouldn't get stuck.
3:27:413 hours, 27 minutes, 41 seconds- [Lex] 24 hours in a day, eight hours of sleep. You break it down into a math equation. 90 minutes of showering, clean up, coffee.
3:27:503 hours, 27 minutes, 50 secondsIt just keeps whittling down to zero. - Man, it's not this specific, but I had to make like an average or something. - Yeah. Firefighting (laughs) oh, I like that.
3:27:583 hours, 27 minutes, 58 secondsOne hours of groceries and errands. I've tried breaking down minute by minute, what I do in a day. - Yeah. - Especially when my life was simpler.
3:28:063 hours, 28 minutes, 6 secondsIt's really refreshing to understand where you waste a lot of time. - Yeah. - And what you enjoy doing. How many minutes it takes to be happy? (laughs)
3:28:153 hours, 28 minutes, 15 seconds- Yeah. - Doing the thing that makes you happy and how many minutes it takes to be productive?
3:28:193 hours, 28 minutes, 19 secondsAnd you realize there's a lot of hours in the day- - Yeah. - If you spend it right. - Yeah, a lot of it's wasted, yeah.
3:28:243 hours, 28 minutes, 24 seconds- For me, it's been the biggest battle for the longest time is finding stretches of time where I can deeply focus into really, really deep work.
3:28:333 hours, 28 minutes, 33 secondsJust like zoom in and completely focused, cutting away all the distractions. - Yeah, me too. - That's the battle. - Yeah. - It's unpleasant.
3:28:423 hours, 28 minutes, 42 secondsIt's extremely unpleasant. - We need to fly to an island, make a man cave island where we can just, everybody can just code for a week,
3:28:493 hours, 28 minutes, 49 secondsand just get shit done. Make new projects. - Yeah, yeah. - But man, they called me psychopaths for this, 'cause it says like one hours of sex, hugs, love.
3:28:593 hours, 28 minutes, 59 secondsMan, I had to write something, and they were like, "Oh, this guy's psychopath." He plans his sex in specific hour- - Like hugs. - Bro, I don't.
3:29:063 hours, 29 minutes, 6 seconds- A counter for hugs. - Yeah, exactly. Yeah, like click, click, click. - It's just a numerical representation of what life is.
3:29:153 hours, 29 minutes, 15 seconds- Yeah. - It's like one of those, when you draw out how many weeks you have in a life. - Oh, dude, this is like dark.
3:29:223 hours, 29 minutes, 22 secondsYeah, man, don't wanna look at that too much. - Holy shit. - Yeah, man. (Lex laughs) How many times you see your parents? Jesus, man. - Yeah. - It's scary, man. - That's right.
3:29:303 hours, 29 minutes, 30 secondsIt might be only a handful more times. - [Pieter] Yeah, man. - You just look at the math of it. If you see him once a year or twice a year. - Yeah, FaceTime today. - Yeah.
3:29:383 hours, 29 minutes, 38 seconds- Yeah. - I mean, that's like dark when you see somebody
3:29:453 hours, 29 minutes, 45 secondsyou like seeing, like a friend that's on the outskirts of your friend group. And then you realize like,
3:29:513 hours, 29 minutes, 51 secondswell, I haven't really seen him for like three years. So how many more times do we have- - Yeah. - That we see each other?
3:29:593 hours, 29 minutes, 59 seconds- Do you believe that like, friends just slowly disappear from your life? Your friend group evolves, right? - [Lex] So it does, it does.
3:30:083 hours, 30 minutes, 8 seconds- There's a problem with Facebook, you get all these old friends from school, when you were 10 years old. - Yeah. - Back when Facebook started.
3:30:153 hours, 30 minutes, 15 secondsYou would add friend them and then you're like, why are we in touch again? Just keep the memories there. It's different life now. - Yeah, that might be a guy thing or I don't know.
3:30:253 hours, 30 minutes, 25 secondsThere's certain friends I have that like, we don't interact often, but we're still friends.
3:30:303 hours, 30 minutes, 30 seconds- Yeah. - Every time I see him I think it's because we have a foundation of many shared experiences.
3:30:373 hours, 30 minutes, 37 seconds- Yeah. - And many memories. I guess it's like nothing has changed. Almost like, we've been talking every day, even if we haven't talked for a year.
3:30:443 hours, 30 minutes, 44 seconds- Yeah, yeah, that's deep. - Yeah. - Issues.
3:30:483 hours, 30 minutes, 48 seconds- So I don't have to be interacting with them for them to be in a friend group. And then there's some people I interact with a lot.
3:30:553 hours, 30 minutes, 55 secondsSo it depends, but there's just this network of good human beings that I can. - [Pieter] Yeah.
3:31:023 hours, 31 minutes, 2 seconds- Yeah, they have like a real love for them. And I can always count on them, if any of them called me in the middle of the night,
3:31:103 hours, 31 minutes, 10 secondsI'll get rid of a body, I'm there. I like how that's a different definition of friendship,
3:31:173 hours, 31 minutes, 17 secondsbut it's true, it's true. - True friend. - You've become more and more famous recently. How's that affect you?
Chapter 23: Coffee
3:31:243 hours, 31 minutes, 24 seconds- It's not recently because it's this gradual thing, right? It keeps going, and I also don't know why it's keeps going.
3:31:323 hours, 31 minutes, 32 seconds- Does that put pressure on you to,
3:31:353 hours, 31 minutes, 35 seconds'cause you're pretty open on Twitter and you're just like basically building shit in the open. - Yeah. - And just not really caring if it's too technical,
3:31:443 hours, 31 minutes, 44 secondsif it's any of this just being out there, does it put pressure on you?
3:31:473 hours, 31 minutes, 47 secondsIs it become more popular to be a little bit more collected and? - Man, I think the opposite, right?
3:31:563 hours, 31 minutes, 56 seconds'Cause the people I follow are interesting,
3:31:593 hours, 31 minutes, 59 seconds'cause they say whatever they think and they ship or whatever.
3:32:023 hours, 32 minutes, 2 secondsIt's so boring that people start tweeting only about one topic.
3:32:063 hours, 32 minutes, 6 seconds- Yeah. - I don't know anything about their personal life. I wanna know about their personal life. Like you do podcasts, you ask about life stuff of personality. That's the most interesting part of business or sports.
3:32:143 hours, 32 minutes, 14 secondsWhat's the behind the sport, the athlete, right? Behind the entrepreneur. - Yeah. - That's interesting stuff. - To be human. - Yeah. I shared a tweet went too far,
3:32:233 hours, 32 minutes, 23 secondsbut we were cleaning the toilet 'cause the toilet was clogged. But it's just real stuff, 'cause Jensen Huang, the Nvidia guy, he says, he started cleaning toilets.
3:32:323 hours, 32 minutes, 32 seconds- That was cool. You tweeted something about the Denny's thing, I forget. - Yeah, it was recent. Nvidia was started in a Denny's diner table.
3:32:413 hours, 32 minutes, 41 seconds- And you made it somehow profound. - [Pieter] Yeah, this one, this one.
3:32:443 hours, 32 minutes, 44 seconds- Nvidia, a $3 trillion company was started in a Denny's, an American diner.
3:32:503 hours, 32 minutes, 50 secondsPeople need a third space to work on their laptops to build the next billion or trillion dollar company. What's the first and second space? - The home office. - And then the in between.
3:32:593 hours, 32 minutes, 59 secondsThe island. - Yeah, I guess, yeah. - The island. - Yeah. You need a space to like congregate. Man, and I found history on this. So 400 years ago in the coffee house of Europe.
3:33:083 hours, 33 minutes, 8 secondsThe scientific revolution, the enlightenment happened because they would go to coffee houses, they would sit there, they would drink coffee and they would work.
3:33:163 hours, 33 minutes, 16 secondsThey would work.
3:33:173 hours, 33 minutes, 17 secondsThey would write and they would do debates and they would organize marine routes, right? They would do all the stuff in Coffeehouse in Europe,
3:33:253 hours, 33 minutes, 25 secondsin France, in Austria, in UK, in Holland.
3:33:293 hours, 33 minutes, 29 secondsSo we were always going to cafes to work and to have serendipitous conversations with other people and start business and stuff.
3:33:393 hours, 33 minutes, 39 secondsAnd like you asked me to come on here and we flew to America,
3:33:423 hours, 33 minutes, 42 secondsand the first thing I realized was that I've been to America before, but we were in this cafe and there's a lot of laptops. Everybody's working on something.
3:33:503 hours, 33 minutes, 50 secondsAnd I took this photo, and then when you're in Europe, like large parts of Europe now, you cannot use a laptop anymore.
3:33:583 hours, 33 minutes, 58 secondsIt's like no laptop. Which I understand. - But that is to you, a fundamental place to create shit.
3:34:053 hours, 34 minutes, 5 secondsIsn't that natural, organic coworking space of a coffee? - Well, for a lot of people. A lot of people have very small homes- - [Lex] Yeah.
3:34:123 hours, 34 minutes, 12 seconds- And coworking spaces are kind of boring. They're private. They're not serendipitous, kinda boring.
3:34:203 hours, 34 minutes, 20 secondsCafes are amazing 'cause random people can come in and ask you what are you working on, or you know. And not just laptops,
3:34:263 hours, 34 minutes, 26 secondspeople are also having conversations like they did 400 years ago debates or whatever. Things are happening. And man, I understand the aesthetics of it.
3:34:333 hours, 34 minutes, 33 secondsIt's like, oh, startup bro, shipping is a bullshit startup. But there's something more there.
3:34:413 hours, 34 minutes, 41 secondsThere's people actually making stuff, making new companies that the society benefits from. We're benefiting from Nvidia.
3:34:483 hours, 34 minutes, 48 secondsI think it's the US GDP for sure is benefiting from Nvidia, European GDB could benefit if we build more companies.
3:34:553 hours, 34 minutes, 55 secondsAnd I feel in Europe there's this vibe and you have to connect things.
3:34:593 hours, 34 minutes, 59 secondsBut not allowing laptops in cafes is kind of like part of the vibe, which is like, yeah, we're not really here to work. We're here to like enjoy life. I agree with this Anthony Bourdain,
3:35:083 hours, 35 minutes, 8 secondslike this tweet was quote to Anthony Bourdain photo of him with cigarettes and a coffee in France. And he said, "This is what the cafes are for." I agree.
3:35:163 hours, 35 minutes, 16 seconds- But there is some element of like entrepreneurship.
3:35:193 hours, 35 minutes, 19 secondsYou have to allow people to dream big and work their ass off towards that dream. And then feel each other's energy as they interact with. - [Pieter] Yes.
3:35:273 hours, 35 minutes, 27 seconds- That's one of the things I liked in Silicon Valley when I was working there, is the cafes. - Yeah. - There's a bunch of dreamers. You can make fun of them for like,
3:35:353 hours, 35 minutes, 35 secondseverybody thinks they're gonna build- - Sure. - A trillion dollar company, but like- - Yeah, and it's off. It's not everybody wins. 99% of people- - Yeah. - Will be bullshit. - But they're working their ass off. - Yeah, and they're doing something,
3:35:443 hours, 35 minutes, 44 secondsand you need to pass this StartupBros. Oh, it's StartupBros level. No, it's not. It's people making cool shit.
3:35:493 hours, 35 minutes, 49 seconds- Yeah. - And this will benefit you 'cause this will create jobs for your country and your region. And I think in Europe that's a big problem.
3:35:583 hours, 35 minutes, 58 secondsWe have a very anti-entrepreneurial mindset. - Dream big and build shit. - Yeah. - I mean this is really inspiring.
3:36:053 hours, 36 minutes, 5 secondsThis has been tweet of yours.
3:36:083 hours, 36 minutes, 8 secondsAll the projects that you've tried and the ones that succeeded. - Has very few. - Mute life.
3:36:143 hours, 36 minutes, 14 seconds- [Pieter] It was for Twitter to share the mute list. - Yeah. - Your mute words. - Fire calculator.
3:36:223 hours, 36 minutes, 22 secondsNo more Google, make a rank. How much is my site project worth? Climate Finder, Ideas AI.
3:36:293 hours, 36 minutes, 29 seconds- AirlineList still runs, but it doesn't make money.
3:36:313 hours, 36 minutes, 31 secondsAirlineList like compares the safety of airlines because I was nervous to fly.
3:36:363 hours, 36 minutes, 36 secondsSo I was like, let's collect all the data on crashes for all the airplanes. - Bali sea cable. Nice, that's awesome.
3:36:453 hours, 36 minutes, 45 secondsMake village, nomad gear, 3D, and virtual reality dev, play in my inbox like you mentioned.
3:36:533 hours, 36 minutes, 53 secondsThere's a lot of stuff.
3:36:543 hours, 36 minutes, 54 seconds- Yeah, man. - I'm trying to find some embarrassing tweets of yours. - You can go to the highlight tab. It has all like the good shit kind. - There you go. - This was Dubai.
3:37:023 hours, 37 minutes, 2 seconds- POV, building an AI startup. Wow, you're a real influencer.
3:37:083 hours, 37 minutes, 8 seconds- (laughs) And if people copy this photo now and they change the screenshots. It becomes like a meme. (Lex laughs) Of course, you know. - (laughs) This is good.
3:37:173 hours, 37 minutes, 17 seconds- That's how Dubai looks, it's insane. - That's beautiful. Architectural wise. It's crazy. The story behind these cities. - Yeah, the story behind for sure.
3:37:253 hours, 37 minutes, 25 secondsSo this is about the European economy where like. - European economy landscape is ran by dinosaurs,
3:37:293 hours, 37 minutes, 29 secondsand today I studied this so I can produce you with my evidence. 80% of top EU companies were founded before 1950.
3:37:383 hours, 37 minutes, 38 secondsOnly 36% of top US companies were founded before 1950.
3:37:423 hours, 37 minutes, 42 seconds- Yeah, so the median founding of companies in US is something like 1960, and the top companies, right?
3:37:493 hours, 37 minutes, 49 secondsAnd the median in Europe is like 1,900 or something. - Yeah. - So it's here 1913 and 1963. So there's a 50th difference.
3:37:583 hours, 37 minutes, 58 seconds- It's a good representation of the very thing you were talking about, the difference in the cultures, entrepreneurial, spirit of the peoples.
3:38:063 hours, 38 minutes, 6 seconds- But Europe used to be entrepreneurial. There was companies founded in 1800, 1850, 1900. It flipped like around 1950 where America took the lead.
3:38:153 hours, 38 minutes, 15 secondsAnd I guess my point is like, I hope that Europe gets back to, 'cause I'm European,
3:38:193 hours, 38 minutes, 19 secondsI hope that Europe gets back to being an entrepreneurial culture where they build big companies again. 'Cause right now, all the old dinosaur companies control the economies.
3:38:283 hours, 38 minutes, 28 secondsThey're lobbying with the government. Europe is also,
3:38:313 hours, 38 minutes, 31 secondsthey're infiltrated with the government where they create so much regulation, I think it's called regulatory capture, right?
3:38:373 hours, 38 minutes, 37 secondsWhere it's very hard for a newcomer to join and to enter an industry because there's too much regulation.
3:38:423 hours, 38 minutes, 42 secondsSo actually regulation is very good for big companies 'cause they can follow it. I can't follow it, right? If I wanna start an AI startup in Europe now,
3:38:493 hours, 38 minutes, 49 secondsI cannot because there's an AI regulation that makes it very complicated for me. I probably need to get like notaries involved. I need to get certificates licenses.
3:38:593 hours, 38 minutes, 59 secondsWhereas in America, I can just open my laptop. I can start a AI startup right now, mostly. - What do you think about e/acc,
Chapter 24: E/acc
3:39:073 hours, 39 minutes, 7 secondseffective accelerationist movement? - Man, you had Beff Jezos on, I love Beff Jezos and he's amazing.
3:39:133 hours, 39 minutes, 13 secondsAnd I think e/acc is very needed to similarly create a more positive outlook on the future.
3:39:203 hours, 39 minutes, 20 secondsBecause people have been very pessimistic about society, about the future of society,
3:39:283 hours, 39 minutes, 28 secondsclimate change, all this stuff. E/acc is a positive outlook in the future. It's like technology can make us,
3:39:363 hours, 39 minutes, 36 secondswe need to spend more energy. We should find ways to of course get like clean energy.
3:39:403 hours, 39 minutes, 40 secondsBut we need to spend more energy to make cooler stuff and go into space, and build more technology that can improve society.
3:39:483 hours, 39 minutes, 48 secondsAnd we shouldn't shy away from technology. Technology can be the answer for many things. - Yeah, build more. Don't spend so much time- - Yeah.
3:39:563 hours, 39 minutes, 56 seconds- On fearmongering and cautiousness and all this kind of stuff. Something is okay, something is good,
3:40:023 hours, 40 minutes, 2 secondsbut most of the time should be spent on building and creating on- - Yeah. - And doing so unapologetically.
3:40:083 hours, 40 minutes, 8 secondsIt's a refreshing reminder of what made United States great is all the builders, like you said, the entrepreneurs. - [Pieter] Yeah.
3:40:153 hours, 40 minutes, 15 seconds- We can't forget that in all the sort of discussions of how things could go wrong with technology and all this kind of stuff. - Yeah, it goes Kaluga, China. China's now at the stage of like America, what?
3:40:233 hours, 40 minutes, 23 secondsLike 1900 or something. They're building rapidly insane. And obviously, China's massive problems.
3:40:293 hours, 40 minutes, 29 secondsBut that comes with the whole thing that comes with American is beginning all that massive problems, right?
3:40:373 hours, 40 minutes, 37 secondsBut I think it's very dangerous for a country or a region like Europe to,
3:40:413 hours, 40 minutes, 41 secondsyou get to this point where you're kind of complacent and you're kind of comfortable and then you can either go this or you can go this way, right?
3:40:493 hours, 40 minutes, 49 secondsYou're from here, you go like this, and then you can go this or this. I think you should go this way. - (laughs) And go off. - Yeah, go off.
3:40:593 hours, 40 minutes, 59 secondsI think it's the problem is the mind culture. So eacc, I made EU Acc, which is like the European kind of version. (Lex laughs) I made like hoodies and stuff.
3:41:073 hours, 41 minutes, 7 secondsSo a lot of people wear like, this make Europe great again hat. - Yeah. - I made it red first, but it became too like Trump. So now it's more like European blue.
3:41:163 hours, 41 minutes, 16 secondsMake Europe great again. - All right. Okay, so you had incredible life.
Chapter 25: Advice for young people
3:41:263 hours, 41 minutes, 26 secondsVery successful, built a lot of cool stuff.
3:41:283 hours, 41 minutes, 28 secondsSo what advice would you give to young people about how to do the same? - Man, I would listen to like nobody. Just do what you think is good and follow your heart, right?
3:41:383 hours, 41 minutes, 38 secondsEverybody peer press you into doing stuff you don't wanna do. And they tell you, parents or family or society tell you,
3:41:453 hours, 41 minutes, 45 secondsbut try your own thing, 'cause it might work out. You can steer the ship. It probably doesn't work out immediately.
3:41:533 hours, 41 minutes, 53 secondsYou probably go into very bad times like I did as well, relatively, right? But in the end, if you're smart about it,
3:41:583 hours, 41 minutes, 58 secondsyou can make things work and you can create your own little life of things as you did, as I did. And I think that should be more promoted.
3:42:063 hours, 42 minutes, 6 secondsDo your own thing.
3:42:073 hours, 42 minutes, 7 secondsThere's space in economy and in society for do your own thing. - Yeah. - It's like little villages, everybody would sell. I would sell bread, you would sell meat.
3:42:153 hours, 42 minutes, 15 secondsEverybody can do their own little thing. You don't need to be a normie as you say. You can be what you really wanna be.
3:42:253 hours, 42 minutes, 25 seconds- And go all out doing that thing.
3:42:273 hours, 42 minutes, 27 seconds- Yeah, you gotta go all out 'cause if you half ass it, you cannot succeed. You need to go lean in to the outcast stuff.
3:42:363 hours, 42 minutes, 36 secondsLean in to the being different, and just doing whatever it is that you wanna do, right? - You got a whole asset.
3:42:443 hours, 42 minutes, 44 seconds- Yeah, whole assets, yeah. - This was an incredible conversation. It was an honor to finally meet you. Finally. - It was an honor to be here, Lex. - To talk to you and keep doing your thing.
3:42:523 hours, 42 minutes, 52 secondsKeep inspiring me and the world with all the cool stuff you're building. - Thank you, man.
3:42:593 hours, 42 minutes, 59 seconds- Thanks for listening to this conversation with Pieter Levels. To support this podcast, please check out our sponsors in the description.
3:43:063 hours, 43 minutes, 6 secondsAnd now let me leave you with some words from Drew Houston, Dropbox Co-founder, by the way, I love Dropbox.
3:43:143 hours, 43 minutes, 14 secondsAnyway, Drew said, "Don't worry about failure. You only have to be right once."
3:43:223 hours, 43 minutes, 22 secondsThank you for listening, and I hope to see you next time.

Sync to video time
