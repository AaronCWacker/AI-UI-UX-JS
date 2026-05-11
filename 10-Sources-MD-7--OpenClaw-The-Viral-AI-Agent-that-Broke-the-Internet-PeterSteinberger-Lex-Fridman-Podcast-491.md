0:00
- I watched my agent happily click the "I'm not a robot" button. I made the agent very aware. Like, it knows what his source code is. It
0:07
understands th- how it sits and runs in its own harness. It knows where documentation is. It knows which
0:15
model it runs. It understands its own system that made it very easy for an agent to... Oh, you don't like anything? You just prompted it to
0:22
existence, and then the agent would just modify its own software. People talk about self-modifying software, I just built it. I actually think wipe coding is
0:30
a slur. - You prefer agentic engineering? - Yeah, I always tell people I'd- I do agentic engineering, and then maybe after
0:37
3:00 AM, I switch to wipe coding, and then I have regrets on the next day. - What a walk of shame. - Yeah, you just have to clean up and, like, fix your sh- shit.
0:45
- We've all been there. - I used to write really long prompts. And
0:50
by writing, I mean, I don't write, I- I- I talk, you know? These- these hands are, like, too- too precious for writing now. I just- I just use
0:58
bespoke prompts to build my software. - So, you, for real, with all those terminals, are using voice?
1:04
- Yeah. I used to do it very extensively, to the point where there was a period where I lost my voice.
1:13
- I mean, I have to ask you, just curious. I- I know you've probably gotten huge offers from major companies.
1:21
Can you speak to who you're considering working with?
1:27
- Yeah. - The following is a conversation with Peter Steinberger, creator
Introduction
1:34
of OpenClaw, formerly known as MoldBot, ClawedBot, Clawdus, Claude, spelled with a W as in
1:42
lobster claw. Not to be confused with Claud, the AI model from Anthropic, spelled with a U. In fact, this
1:49
confusion is the reason Anthropic kindly asked Peter to change the name to OpenClaw. So, what is
1:56
OpenClaw? It's an open-source AI agent that has taken over the tech world in a matter of days, exploding in popularity, reaching over
2:06
180,000 stars on GitHub, and spawning the social network mold book, where AI agents post manifestos and
2:14
debate consciousness, creating a mix of excitement and fear in the general public. And a kind of AI psychosis, a
2:22
mix of clickbait fearmongering and genuine, fully justifiable concern about the role of AI in our digital,
2:29
interconnected human world. OpenClaw, as its tagline states, is the AI that actually does things. It's an
2:36
autonomous AI assistant that lives in your computer, has access to all of your stuff, if you let it, talks to you through Telegram,
2:44
WhatsApp, Signal, iMessage, and whatever else messaging client. Uses whatever AI model you like, including Claude Opus 4.6 and GPT 5.3 Codex,
2:56
all to do stuff for you. Many people are calling this one of the biggest moments in the recent history of AI, since the launch of
3:04
ChatGPT in November 2022. The ingredients for this kind of AI agent were all there, but putting it all together in a
3:12
system that definitively takes a step forward over the line from language to agency, from ideas to actions, in a way that
3:19
created a useful assistant that feels like one who gets you and learns from you, in an open source, community-driven way, is
3:28
the reason OpenClaw took the internet by storm. Its power, in large part, comes from the fact that you can give it access to all of your
3:36
stuff and give it permission to do anything with that stuff in order to be useful to you. This is very powerful, but it is also dangerous. OpenClaw
3:47
represents freedom, but with freedom comes responsibility. With it, you can own and have control
3:54
over your data, but precisely because you have this control, you also have the responsibility to protect it from cybersecurity
4:01
threats of various kinds. There are great ways to protect yourself, but the threats and vulnerabilities are out there.
4:09
Again, a powerful AI agent with system- level access is a security minefield, but it also represents the future. Because
4:16
when done well and securely, it can be extremely useful to each of us humans as a personal assistant. We discuss all of this with Peter, and
4:26
also discuss his big-picture programming and entrepreneurship life story, which I think is truly
4:32
inspiring. He spent 13 years building PSPDF Kit, which is a software used on a billion
4:39
devices. He sold it, and for a brief time, fell out of love with programming, vanished for three years, and
4:47
then came back, rediscovered his love for programming, and built, in a very short time, an open source AI agent that took the
4:55
internet by storm. He is, in many ways, the symbol of the AI revolution happening in the programming world. There was the
5:03
ChatGPT moment in 2022, the DeepSeek moment in 2025, and now, in '26, we're living
5:10
through the OpenClaw moment, the age of the lobster.
5:16
The start of the agentic AI revolution. What a time to be alive. This is a Lex Fridman podcast. To support it, please
5:23
check out our sponsors in the description, or you can also find links to contact me, ask questions, give feedback, and so on.
5:31
And now, dear friends, here's Peter Steinberger. The one and only, the Clawed Father. Actually,
OpenClaw origin story
5:40
Benjamin predicted it in his tweet. "The following is a conversation with Claude, a respected crustacean." It's a
5:47
hilarious-looking picture of a lobster in a suit, so I think the prophecy has been fulfilled. Let's
5:54
go to this moment when you built a prototype in one hour, that was the early version of OpenClaw. I think this,
6:02
Story's really inspiring to a lot of people because this prototype led to something that just took the internet by storm....
6:10
and became the fastest-growing repository in GitHub history, with now over 175,000 stars. So, what was the story of the one-hour prototype?
6:20
- You know, I wanted that since April. - A personal assistant. AI personal assistant.
6:25
- Yeah. And I, I played around with some other things, like even
6:31
stuff that gets all my WhatsApp, and I could just run queries on it. That was back when we had GPT-4.1, with the one million context
6:41
window. And I, I pulled in all the data and then just asked him questions
6:47
like, "What makes this friendship meaningful?" - Mm-hmm. - And I got some, some really profound
6:55
results. Like, I sent it to my friends and they got, like, teary eyes. - So, there's something there.
7:01
- Yeah. But then I... I thought all the labs will, will, will work on that. So I, I moved on to other
7:09
things, and that was still very much in my early days of experimenting and pl- playing. You know, you have to...
7:16
That's how you learn. You just like, you do stuff and you play. And
7:22
time flew by and it was November. I wanted to make sure that the thing I started is actually happening. I was annoyed that it didn't exist, so
7:30
I just prompted it into existence.
7:36
- I mean, that's the beginning of the hero's journey of the entrepreneur, right? And you've even with your original story
7:42
with PS PDF kit, it's like, "Why does this not exist? Let me build it." And again, here's diff- a whole different realm, but similar maybe spirit.
7:52
- Yeah, so I had this problem. I tried to show PDF on an iPad, which should not be hard. - This is like 15 years ago, something like that.
7:59
- Yeah. Like the most, the most random thing ever. And suddenly, I had this problem and I, I wanted to help a friend. And
8:07
there was, there was... Well, not like nothing existed, but it was just not good. And like... Like I tried it and it was like very,
8:14
"Nah." Like, "Hmm, I can do this better." - By the way, for people who don't know, this led to the development of PS PDF
8:21
kit that's used on a billion devices. So, the... It turns out that it's pretty useful to be able to open a PDF.
8:28
- You could also make the joke that I'm really bad at naming. - Yeah. - Like, name number five on the current project. And even
8:35
PS PDF doesn't really roll from the tongue. - Anyway, so you said "Screw it. Why don't
8:43
I do it?" So what was the... What was the prototype? What was the thing that you... What was the magical thing that you built in a short amount of time that you were like,
8:51
"This might actually work as an agent," where I talk to it and it does things? - There was... Like, one of my projects before already did something
Mind-blowing moment
8:59
where I could bring my terminals onto the web and then I could, like, interact with them, but there also would be terminals on my Mac.
9:06
- Mm-hmm. - Viptunnel, which was like a, a weekend hack project
9:12
that was still very early. And it was cloud code times. You know, you got a dopamine hit when you got something right. And now
9:20
I get, like, mad when you get something wrong. - And you had a really great -– not to take a tangent -– but a great blog post describing that
9:26
you converted Viptunnel. You vibe-coded Viptunnel from TypeScript into Zig of all programming languages with
9:34
a single prompt. One prompt, one shot. Convert the entire code base into Zig.
9:41
- Yeah. There was this one thing where part of the architecture was... Took too much memory. Every terminal
9:51
used like a node. And I wanted to change it to Rust and... I mean, I can do it. I can, I can manually
10:00
figure it all out, but all my automated attempts failed miserably.
10:08
And then I revisited about four or five months later. And I'm like, "Okay, now let's use something even more experimental." And
10:16
I, and I just typed, "Convert this and this part to Sig," and then let Codex run off. And
10:23
it basically got it right. There was one little detail that I had to, like, modify afterwards, but it just ran for
10:32
overnight or like six hours and just did its thing. And it's like... It's just mind-blowing.
10:39
- So that's on the LLM programming side, refactoring. But uh, back to the
10:46
actual story of the of the prototype. So how did Viptunnel connect to the first prototype where your, like, agents can actually work?
10:52
- Well, that was still very limited. You know, like I had this one experiment with WhatsApp, then I had this experiment, and both felt like
11:01
not the right answer. And then my search bar was literally just hooking up WhatsApp to
11:10
cloud code. One shot. The CLI message comes in. I call the CLI with -p. It does its
11:17
magic, I get the string back and I send it back to WhatsApp. And I, I built this in one hour. And
11:24
I felt... Already felt really cool. It's like, "Oh, I could... I can, like, talk to my computer," right? This... That, that was, that was cool. But
11:32
I, I wanted images, 'cause I alw- I often use images when I prompt. I think it's such a, such an efficient way to give the agent more
11:39
context. And they are really good at figuring out what I mean, e- even if it's like a, a weird cropped-up screenshot. So I used it a lot and I wanted to do
11:47
that in WhatsApp as well. Also, like, you know, just you run around, you see like
11:52
a poster of an event, you just make a screenshot and like figure out if I have time there, if this is good, if my friends are maybe up for that.
12:00
Just like images seemed im- important. So I, I worked a few... It took me a few more hours to actually get that right. Um,
12:09
and then it was just...... I, I used it a lot. And funny enough, that was
12:17
just before I went on a trip to Marrakesh with my friends for a birthday trip. And there it was even better because
12:26
internet was a little shaky but WhatsApp just works, you know? It's like doesn't matter, you have, like, edge, it still works. WhatsApp is
12:33
just... It's just made really well. So I ended up using it a lot. Um,
12:41
translate this for me, explain this, find me places. Like, you just having a clanker doing, having Google for
12:48
you, that was... Basically there was still nothing built but it still could do so much.
12:53
- So, if we talk about the full journey that's happening there with the agent, you're just sending on this very thin line WhatsApp message
13:03
via CLI, it's going to a cloud code and cloud code is doing all kinds of heavy work and coming back to you with a thin message.
13:13
- Yeah. It was slow because every time I boot up the CLI, but it... It was really cool
13:19
already. And it could just use all the things that I already had built. I had built like a whole bunch of CLI stuff over the month so it, it felt
13:30
really powerful. - There is something magical about that experience that's hard to put into words. Being able to use a chat client
13:40
to talk to an agent, versus, like, sitting behind a computer and like, I don't know, using
13:47
cursor or even using Cloud Code CLI in the terminal. It's a different experience than being able to sit back and talk to it. I mean, it seems like a trivial step
13:55
but, it- in some sense it's a... It's like a phase shift
14:01
in the integration of AI into your life and how it feels, right? - Yeah. Yeah. I, I read this tweet this morning where someone said, "Oh, there's
14:09
no magic in it. It's just like, it does this and this and this and this and this and this." And it
14:16
almost feels like a hobby, just as cursor or perplexity. And I'm like, well, if that's a hobby that's kind of a compliment, you
14:23
know? They're like, they're not doing too bad. Thank you I guess?
14:32
Yes. I mean, isn't, isn't, isn't magic often just like you take a lot of things that are already there
14:39
but bring them together in new ways? Like, I don't... There's no... Yeah. Maybe there's no magic in there but sometimes just
14:46
rearranging things and, like, adding a few new ideas is all the magic that you need. - It's really hard to convert into words what is, what is magic
14:55
about a thing. If you look at the, the scrolling on an iPhone, why is that so pleasant? There's a lot of elements about that
15:02
interface that makes it incredibly pleasant, that is fundamental to the experience of using a smartphone, and it's like, okay, all the components were
15:10
there. Scrolling was there, everything was there. - Nobody did it- - Yep - ... and afterwards it felt so obvious.
15:16
- Yeah, so obvious. - Right? But still... You know the moment where
15:22
it, it blew my mind was when, when I- I used it a lot and then at some point I just sent it a message
15:28
and, and then a typing indicator appeared. And I'm like, wait, I
15:35
didn't build that, it only m- it only has image support, so what is it even doing? And then it would just reply.
15:42
- What was the thing you sent it? - Oh, just a random question like, "Hey, what about this in this restaurant?" You
15:47
know? Because we were just running around and checking out the city.
15:52
So that's why I, I didn't, didn't even think when I used it because sometimes when you're in a hurry typing is annoying.
15:59
- So, oh, you did an audio message? - Yeah. And it just, it just worked and I'm like... - And it's not supposed to work because-
16:05
- No - ... you didn't give it that- - No, literally - ... capability. - I literally went, "How the fuck did he do that?" And it was like, "Yeah,
16:12
the mad lad did the following. He sent me a message but it only, only was a file and no file ending." So
16:19
I checked out the header of the file and it found that it was, like, opus so I used ffmpeg to convert it and then I
16:27
wanted to use whisper but it didn't had it installed. But then I found the OpenAI key and just used Curl to send the file to OpenAI to translate and here I am.
16:39
Just looked at the message I'm like, "Oh wow." - You didn't teach it any of those things and the agent just figured it out, did all those conversions,
16:47
the translations. It figured out the API, it figured out which program to use, all those kinds of things. And you were just absent-mindedly just sent an
16:54
audio message when it came back. - Yeah, like, so clever even because he would have gotten the whisper local path, he would have had to download a
17:00
model. It would have been too slow. So like, there's so much world knowledge in there, so much creative problem solving. A lot of it
17:08
I think mapped from... If you get really good at coding that means you have to be really good at general purpose problem solving. So that's a skill, right? And
17:16
that just maps into other domains. So it had the problem of like, what is this file with no file ending? Let's figure it
17:23
out. And that's when it kind of clicked for me. It's like, I was like very
17:29
impressed. And somebody sent a pull request for Discord support and I'm like, "This is a WhatsApp relay.
17:37
That doesn't, doesn't fit at all." - At that time it was called WA Relay.
17:42
- Yeah. And so I debated with me like, do I want that? Do I not want that? And then
17:51
I thought, well maybe, maybe I do that because
17:56
that could be a cool way to show people. Because I... So far I did it in WhatsApp as like groups you know but don't really want
18:03
to give my phone number to every internet stranger. - Yeah. - Um, journalists manage to do that anyhow now so that's a different
18:11
story. So I merged it-... from Shadow,
18:18
who helped me a lot with the whole project. So, thank you. And, and I put
Why OpenClaw went viral
18:24
my, my bot in there. - On Discord? - Yeah. No security because I didn't... I hadn't built sandboxing in
18:31
yet. I, I just prompted it to, like, only listen to me.
18:38
And then some people came and tried to hack it, and I just... Or, like, just watched and I just kept working in the open, you
18:45
know? Like, y- I used my agent to build my agent harness
18:53
and to test, like, various stuff. And that's very quickly when it clicked for people. So it's almost like it needs to
19:01
be experienced. And from that time on, that was January the 1st, I, I got
19:09
my first real influencer being a fan and did videos, dachitze. Thank you. And, and
19:17
from there on, I saw, I started gaining up speed. And at the same time, my,
19:23
my sleep cycle went shorter and shorter because I, I felt the storm
19:29
coming, and I just worked my ass off to get it to... into a state where it's kinda
19:37
good. - There's a few components and we'll talk about how it all works, but basically, you're able to talk to it using WhatsApp, Telegram,
19:45
Discord. So that's a component that you have to get right. - Yeah. - And then you have to figure out the agentic loop, you have to have the gateway, you
19:52
have the harness, you have all those components that make it all just work nicely. - Yeah. It felt like Factorio times infinite.
20:00
- Right. - I, I feel like I built my little- ... my little playground. Like, I never had so much fun than building this project. You know?
20:08
Like, you have like, "Oh," I go like, level one agentic loop. What can I do there? How can I be smart at queuing messages? How can I make it more
20:15
human-like? Oh, then I had this idea of... Because the loop always... The agent always replies something, but you don't
20:23
always want an agent to reply something in a group chat. So I gave him this no-reply token. So I gave him an option to shut up. So it, it feels more natural.
20:32
- That's level two. - Y- uh, yeah, yeah. Yeah, on the- on the- - Factorio. - On the agentic loop. And then I go to memory, right?
20:39
- Yeah. - You want him to, like, remember stuff. So maybe, maybe the end... The ultimate boss is continuous reinforcement learning,
20:46
but I'm, I'm, like, at... I feel like I'm level two or three with Markdown files and the vector database. And then you, you can go to level
20:54
community management, you can go to level website and marketing. There's just so many hats that you have to have on. Uh,
21:01
not even talking about native apps. That's just, like, infinite different levels and infinite level ups you can do.
21:08
- So the whole time you're having fun. We should say that for the most part, throughout this whole process, you're a one-man
21:15
team. There's people helping, but you're doing so much of the key core development.
21:21
- Yeah. - And having fun? You did, in January, 6,600 commits. Probably more.
21:28
- I sometimes posted a meme. I'm limited by the technology of my time. I could do more if agents would be faster.
21:34
- But we should say you're running multiple agents at the same time. - Yeah. Depending on how much I slept and
21:41
how difficult of the tasks I work on, between four and 10. - Four and 10 agents. Uh there's so many possible directions, speaking of
21:49
Factorio, that we can go here. But one big picture one is, why do you think
21:56
your work, Open Claw, won? In this world, if you look at 2025, so many
22:05
startups, so many companies were doing kind of agentic type stuff, or claiming to. And here, Open Claw comes
22:12
in and destroys everybody. Like, why did you win? - Because they all take themselves too serious.
22:18
- Yeah. - Like, it's hard to compete against someone who's just there to have fun.
Self-modifying AI agent
22:24
- Yeah. - I wanted it to be fun, I wanted it to be weird. And if you see, like, all the, all the lobster stuff online I think I, I managed weird. I... You
22:36
know, for the longest time, the only, the only way to install it was git clone, pnpm build, pnpm gateway.
22:46
Like, you clone it, you build it, you run it. And then the, the agent... I made the agent very aware. Like, it
22:53
knows that it is... What its source code is. It understands th- how it sits and runs in its own
23:01
harness. It knows where documentation is. It knows which model it runs. It knows if you turn on the voice or, or reasoning mode. Like,
23:11
I, I wanted to be more human-like, so it understands its own system that made it very easy for an agent to...
23:18
Oh, you don't like anything? You just prompted it to existence, and then the agent would just modify its own software. Um,
23:26
you know, we have people talk about self- modifying software. I just built it and didn't even... I didn't even plan it so much. It just happened.
23:35
- Can you actually speak to that? 'Cause it's just fascinating. So you have this piece of software that's written in TypeScript-
23:43
- Yeah - ... that's able to, via the agentic loop, modify itself. I mean, what a moment to be alive in
23:51
the history of humanity and the history of programming. Here's the thing that's used by a huge amount of people to do
23:59
incredibly powerful things in their lives, and that very system can rewrite itself, can modify
24:06
itself. Can you just, like, speak to the power of that? Like, isn't that incredible? Like, when did you first close the loop on that?
24:14
- Oh, because that's how I built it as well, you know? Most of it is built by Codex, but oftentimes I... When I debug
24:22
it, I...... I use self-introspection so much. It's like, "Hey, what tools do you see? Can you call the tool yourself?" Or like, "What error do
24:30
you see? Read the source code. Figure out what's the problem." Like, I just found it an incredibly fun way
24:36
to... That the agent, the very agent and software that you use is used to debug itself, so that it
24:44
felt just natural that everybody does that. And that it led to so many,
24:50
so many pull requests by people who never wrote software. I mean, it also did show that people never wrote software . So I call them prompt requests
24:58
in the end. But I don't want to, like, pull that down because every time someone made the first pull request is a
25:06
win for our society, you know? Like, it... Like, it doesn't matter how, how shitty it is, y- you gotta start somewhere.
25:13
So I know there's, like, this whole big movement of people complain about open source and the quality of PRs, and a whole different level of
25:21
problems. But on a different level, I found it... I found it
25:28
very meaningful that, that I built something that people love to think of so much that they actually start to learn how open source works.
25:37
- Yeah, you were ... The Open Cloud project was the first pull request. You were the first for so many. That is
25:44
magical. So many people that don't know how to program are taking their first step into the programming world with this.
25:52
- Isn't that a step up for humanity? Isn't that cool? - Creating builders. - Yeah. Like, the bar to do that was so high, and, like, with
26:00
agents, and with the right software, it just, like, went lower and lower. I don't know. I was at a... And I also
26:08
organize another type of meetup. I call it... I called it Cloud Code Anonymous.
26:14
Uh, you can get the inspiration from. Now, I call it Agents Anonymous- ... for, for reasons.
26:23
- Agents Anonymous. - And- - Oh, it's so funny on so many levels. I'm sorry, go ahead.
26:29
- Yeah. And there was this one guy who, who talked to me. He's like, "I run this design agency, and we, we never had custom software. And
26:37
now I have, like, 25 little web services for various things that help me in my business. And I don't even know how
26:45
they work, but they work." Uh, and he was just, like, very happy that
26:52
my stuff solved some of his problems. And he was, like, curious enough that he actually came to, like, a, a Enchantic
26:59
meetup, even though he's... He doesn't really know how software works.
Name-change drama
27:04
- Can we actually rewind a little bit and tell the saga of the name change?
27:10
First of all, it started out as Wa-Relay. - Yeah. - And then it went to- - Claude's. - Claude's.
27:15
- Yeah. You know, when I, when I built it in the beginning, my agent had no personality. It was just... It was Claude Code. It's like this sycophantic
27:23
opus, very friendly. And I... When you talk to a friend on WhatsApp, they don't
27:30
talk like Claude Code. So I wanted... I, I felt this... I just didn't f- It didn't feel right, so I, I wanted to give it
27:40
a personality. - Make it spicier, make it- - Yeah - ... something. By the way, that's actually hard to put into words as well. And we should mention
27:47
that, of course, you create the soul.md, inspired by Anthropic's constitutional AI work-
27:53
- Mm-hmm - ... how to make it spicy. - Partially, it picked up a little bit from me. You know, like those things are text completion engines in a way. So, so I,
28:02
I, I, I had fun working with it, and then I told it to... How I wanted it to
28:10
interact with me, and just, like, write your own agents.md, Give yourself a name. And then we... I didn't even know how the whole,
28:22
the whole lobster... I mean, people only do lobster... Originally, it was actually a lobster in a, in a TARDIS, because I'm also a big Doctor Who fan.
28:30
- Was there a space lobster? - Yeah. - I heard. What's that have to do with anything? - Yeah, I just wanted to make it weird.
28:37
There was no... There was no big grand plan. I'm just having fun here. - Oh, so I guess the lobster is already weird, and then the space lobster is an extra weird.
28:44
- Yeah, yeah, because the- - Yeah - ... the TARDIS is basically the, the harness, but
28:50
cannot call it TARDIS, so we called it Claude's. So that was name number two. - Yeah. - And then it never really rolled off the tongue.
28:59
So when more people came, again, I talked with my agent,
29:05
Claude. At least that's what I used to call him. Now- - Claude spelled with a W-C-L-A-U-D-E.
29:12
- Yeah. - Versus C-L-A-U-D-E from
29:19
Anthropic. - Yeah. - Which is part of what makes it funny,
29:24
I think. The play on the letters and the words in the TARDIS and the lobster and the space lobster is hilarious. But I can see why
29:32
it can lead into problems. - Yeah, they didn't find it so funny .
29:39
So then I got the domain ClaudeBot, and I just... I love the domain. And
29:45
it was, like, short. It was catchy. I'm like, "Yeah, let's do that." I didn't... I didn't think it would be that big at this time.
29:54
And then just when it exploded, I got,
30:02
Kudos, a very friendly email from one of the employees that they didn't like the name.
30:09
- One of the Anthropic employees. - Yeah. So actually, Kudos, because they shou- could have
30:15
just sent a, a lawyer letter, but they've been nice about it. But also like, "You have to change this and fast." And I asked for two days,
30:26
because changing a name is hard, because you have to find everything, you know, Twitter handle, domains, NPM packages Docker registry, GitHub stuff.
30:37
And everything has to be...... you need a set of everything. - And also, can we comment on the fact that you're increasingly attacked, followed by
30:47
crypto folks? Which I think you mentioned somewhere that that means the name change had to be... Because they were trying to snipe,
30:55
they were trying to steal, and so you had to be... The, the na- I mean, from an engineering perspective, it's just fascinating. You had to make the name change
31:03
Atomic, make sure it's changed everywhere at once. - Yeah. Failed very hard at that.
31:08
- You did? - I, I underestimated those people. It's a, it's a very
31:16
interesting subculture. Like, it... Everything circles around... I'll probably get a lot wrong and we'll probably get
31:24
hate for that if you say that, but... There is like Bags app and then they, they tokenize everything. And th- they did the
31:31
same back with Swipe Tunnel, but to a much smaller degree. It was not that annoying. But on this project, they've
31:39
been, they've been swarming me. They, they... It's like every half an hour,
31:46
someone came into Discord and, and, and spammed it and we had to block the p- We have, like, server rules, and one of the rules was... One of the rules
31:54
is no mentioning of butter. For obvious reasons. And one was, no talk about finance stuff or
32:01
crypto. Because I'm... I- I'm just not interested in that, and this
32:08
is a space about the project and not about some finance stuff. But yeah. They came in and, and spammed and...
32:17
Annoying. And on Twitter, they would ping me all the time. My, my notification feed was unusable. I, I could barely
32:23
see actual people talking about this stuff because it was like swarms. - Mm-hmm. - And everybody sent me the hashes. Um... And they all try me to
32:35
claim the fees. Like, "Are you helping the project?" Claim the fees. No, you're actually harming the project. You're, like, disrupting my
32:43
work, and I am not interested in any fees. I'm... First of all, I'm financially comfortable. Second of
32:50
all, I don't want to support that because it's
32:55
so far the worst form of online harassment that I've experienced. - Yeah. There's a lot of toxicity in the crypto world. It's sad because
33:03
the technology of cr- cryptocurrency is fascinating, powerful and maybe will define the future of money, but the actual
33:12
community around that, there's so much to- toxicity, there's so much greed. There's so much trying to get a shortcut to manipulate, to, to steal, to snipe,
33:20
to, to, to, to game the system somehow to get money. All this kind of stuff that... Uh... I mean, it's the human nature, I suppose, when you
33:28
connect human nature with money and greed and and especially in the online world with anonymity and all that kind of stuff. But from the
33:35
engineering perspective, it makes your life challenging. When Anthropic reaches out, you have to do a name change. And then there-
33:43
there's, there's like all these, like, Game of Thrones or Lord of the Rings
33:48
armies of different kinds you have to be aware of. - Yeah. There was no perfect name, and I didn't sleep for two nights.
33:55
I was under high pressure. Um, I was trying to get, like, a good set of
34:02
domains and, you know, not cheap, not easy, 'cause in this, in this state of the internet, you basically have to
34:10
buy domains if you want to have a good set. And,
34:15
and then another ca- another email came in that the lawyers are getting uneasy.
34:22
Again, friendly, but also just adding more stress to my situation already. So at this point I was just like,
34:31
"Sorry, there's no other word. Fuck it." And I just, I just renamed it to Mod Bot 'cause that was the set of domains I had. I was not
34:39
really happy, but I thought it'll be fine. And I tell you, everything that could go wrong-
34:46
... did go wrong. Everything that could go wrong did go wrong. It's incredible.
34:51
I, I, I thought I, I had mapped the h- the space out and reserved the important things.
34:58
- Can you ga- give some details of the stuff that gone wrong? 'Cause it's interesting from, like, an engineering perspective.
35:03
- Well, the, the interesting stuff is that none of these services have, have a squatter protection. So, I had two browser windows open. One was like a,
35:13
an empty account ready to be rename- renamed to Claude Bot, and the other one I renamed to Mod Bot. So, I pressed
35:20
rename there, I pressed rename there, and in those five seconds, they stole the account name.
35:27
Literally, the five seconds of dragging the mouse over there and pressing rename there was too long.
35:33
- Wow. - Because there's no... Those systems... I mean, you would expect that they have some protection or, like, an automatic forwarding, but
35:41
there's nothing like that. And I didn't know that they're not just good at harassment, they're also really good
35:49
at using scripts and tools. - Yeah. - So, yeah. So, suddenly, like, the old account
35:56
was promoting new tokens and serving malware.
36:01
And I was like, "Okay, let's move over to GitHub," and I pressed rename on GitHub. And the
36:09
GitHub renaming thing is slightly confusing, so I renamed my personal account. And in those... I guess it
36:17
took me 30 seconds to realize my mistake. They sniped my account, serving malware from my account.
36:26
So, I was like, "Okay, let's at least do the NPM stuff," but that takes, like, a minute to upload. They
36:34
sniped, they sniped the NPM package, 'cause I could reserve the account, but I didn't reserve the root package.... so like
36:44
everything that could go wrong , like went wrong. - Can I just ask a, a curious question of, in that moment you're sitting
36:50
there, like how shitty do you feel? That's a pretty hopeless feeling, right?
36:57
- Yeah. Because all I wanted was like having fun with that project and to
37:04
keep building on it. And yet here I am like days into researching names, picking a name I didn't like.
37:11
And having people that claimed they helped me making my life miserable in every possible way. And honestly, I was
37:22
that close of just deleting it. I was like,
37:27
"I did show you the future, you build it." - Yeah. - I... That was a big part of me that got a lot of joy out of
37:34
that idea. And then I thought about all the people that already co- contributed to it, and I couldn't do it because
37:44
they had plans with it, and they put time in it. And it just didn't feel right.
37:50
- Well, I think a lot of people listening to this are deeply grateful that you persevered. But it's... I, I can tell. I can tell it's a
37:58
low point. This is the first time you hit a wall of, this is not fun? - No, no, I was like close to crying. It was like, okay, everything's fucked.
38:10
- Yeah. - Um... I am like super tired. - Yeah. - Uh, and now like how do you even, how do you undo that? You know, l- luckily, and
38:22
thankfully, like I, I have... Because I have a little bit of following already. Like I had friends
38:28
at Twitter, I had friends at GitHub who like moved heaven and earth to like help me. And it is not... That's not something
38:35
that's easy. Like, like GitHub tried to like
38:40
clean up the mess and then they ran into like platform bugs . 'Cause it's not happening so often that things get renamed on that
38:49
level. So, it took them a few hours. The MBM stuff was even more difficult because it's a whole different team.
38:57
On the Twitter side, things are not as easy as well. It, it took them like a day
39:04
to really also like do the redirect. And then I also had to like
39:13
do all the renaming in the project. Then there's also, uh, ClaudeHub, which I didn't
39:21
even finish the rename there because I, I, I managed to get people on
39:28
it and then someone just like collapsed and slept. And then I woke up and I'm like,
39:34
I made a, a beta version for the new stuff and I, I just,
39:39
I just couldn't live with the name. It's like, you know... But but, you know, it's just been so much drama. So, I had the real
39:47
struggle with me like I never want to touch that again, and I really don't like the
39:53
name. Um, so, and I... There was also this
39:59
like... Then there was all the security people that started emailing me like mad. Um, I was bombarded
40:07
on Twitter, on email. There's like a thousand other things I should do.
40:13
And I'm like thinking about the name which is like, it should be like the least important thing. Um, and then I was really close
40:24
in... Oh God, I don't even... Honestly, I don't even wanna say the, my other
40:32
name choices because it probably would get tokenized, so I'm not gonna say it.
40:38
- Yeah. - But I slept on it once more, and then I had the idea for OpenClaw
40:43
and that felt much better. And by then, I had the boss move that I
40:49
actually called Sam to ask if OpenClaw is okay.
40:55
OpenClaw.AI. You know? 'Cause 'cause like- - You didn't wanna go through the whole thing. Yeah.
41:01
- Oh, that it's like, "Please tell me this is fine." I don't think they can actually claim that, but it felt like the right thing to do.
41:11
And I did another rename. Like just Codex alone took like 10 hours to rename the
41:17
project 'cause it, it's a bit more tricky than a search replace and I, I wanted everything renamed, not just on the outside. And that
41:27
rename, I, I felt I had like my, my war room. But then
41:33
I, I had like some contributors really that helped me. We made a whole plan of all the names we have to squat.
41:39
- And you had to be super secret about it? - Yeah. Nobody could know. Like I literally was monitoring Twitter if like, if there's any mention
41:44
of OpenClaw. - Mm-hmm. - And like with reloading, it's like, "Okay, they don't, they don't expect anything
41:50
yet." Then I created a few decoy names. And all the shit I shouldn't have to do. You know? Like, you know-
41:55
- Yeah, yeah - ... it's helping the project. Like, I lost like 10 hours just by having to plan this in full secrecy like, like a war game.
42:05
- Yeah, this is the Manhattan Project of the 21st century. It's renaming- - It's so s- ... so stupid. Uh like I still was like, "Oh, should I, should I keep it?"
42:12
Then I was like, "No, the mold's not growing on me." And then I think I had final all the pieces together. I didn't get a .com
42:22
but, yeah, it's been like quite a bit of money on the other domains. I tried to reach out again to
42:29
GitHub but I feel like I, I used up all my goodwill there, so I... 'Cause I, I, I wanted them to do this thing atomically-
42:39
- Mm-hmm - ... But that didn't happen and then so I did that the f- as first thing. Uh, Twitter people were very supportive. I, I actually paid 10K for the
42:49
business account so I could claim the-... OpenClaw, which was, like, unused since 2016, but was claimed. And yeah, and then I
42:59
finally ... This time I managed everything in one go. Nothing, almost nothing got wrong. The only thing that did go wrong is that
43:11
I was not allowed by trademark rules to get OpenClaw.AI, and someone copied the website as serving malware.
43:21
- Yeah. - I'm not even allowed to keep the redirects. Like, I have to
43:26
return ... Like, I have to give Entropik the domains, and I cannot do redirects, so if you go on claw.bot next week, it'll just be a 404.
43:37
- Yeah. - And I- I'm not sure how trademark ... Like, I didn't,
43:44
I didn't do that much research into trademark law, but I think that could, could be handled in a way that
43:53
is safer, because ultimately those people will then Google and maybe find
43:59
malware sites that I have no control on them. - The point is, that whole saga, Made a dent in your whole f-
44:08
the funness of the journey, which sucks. So, let's just, let's just get, I suppose, get back to fun. And during this, speaking of
Moltbook saga
44:16
fun, the two-day MoltBot saga.
44:21
- Yeah, two years. - MoltBook was created. - Yeah. - Which was another thing that went viral as a kind of demonstration,
44:30
illustration of how what is now called OpenClaw could be used
44:37
to create something epic. So for people who are not aware, MoltBook is just a bunch of agents talking to each other in a
44:44
Reddit-style social network. And a bunch of people take screenshots of those agents doing things like, Scheming against humans. And
44:56
that instilled in folks a kind of, you know, fear, panic, and hype. W- what are your thoughts about MoltBook in general?
45:05
- I think it's art. It is, it is like the finest slop, you know, just like the slop
45:12
from France. - Yeah. - I- I saw it before going to bed, and even though I was
45:20
tired, I spent another hour just reading up on that
45:26
and, and just being entertained. I, I just felt
45:31
very entertained, you know? The- I saw the the reactions, and, like, there was one reporter who's calling me about, "This is the end of
45:39
the world, and we have AGI." And I'm just like, "No, this is just, this is just really fine slop."
45:46
You know, if, if I wouldn't have created this, this whole onboarding experience where you, you infuse your agent with your
45:53
personality and give him, give him character, I think that reflected on a lot of
46:00
how different the replies to MoltBook are. Because if it were all, if it were all be ChatGPT or Cloud Code, it
46:09
would be very different. It would be much more the same. - Mm-hmm. - But because people are, like, so different, and they create their agents in so
46:16
different ways and use it in so different ways, that also reflects on how they ultimately write there. And
46:23
also, you, you don't know how much of that is really done autonomic, autonomous, or how much is, like, humans
46:30
being funny and, like, telling the agent, "Hey, write about the deep plan, the end of the world, on MoltBook, ha, ha, ha."
46:36
- Well, I think, I mean, my criticism of MoltBook is that I believe a lot of the stuff that was
46:42
screenshotted is human prompted. Which,
46:47
just look at the incentive of how the whole thing was used. It's obvious to me at least that a lot of it was humans
46:55
prompting the thing so they can then screenshot it and post it on X in order to go viral.
47:00
- Yeah. - Now, that doesn't take away from the artistic aspect of it. The, the finest slop that humans have ever created .
47:10
- For real. Like, kudos to, to Matt, who had this idea so quickly and pushed something
47:17
out. You know, it was, like, completely insecure security drama. But also,
47:24
what's the worst that can happen? Your agent account is leaked, and, like, someone else can post slop for you? So like, people were,
47:32
like, making a whole drama about of the security thing, when I'm like, "There's nothing private in there. It's just, like, agents sending slop."
47:39
- Well, it could leak API keys. - Yeah, yeah. There's like, "Oh, yeah, my human told me this and this, so I'm leaking his
47:44
security number." No, that's prompted, and the number wasn't even real. That's just
47:51
people, people trying to be badballs. - Yeah, but that- that's still, like, to me, really concerning, because of
47:58
how the journalists and how the general public reacted to it. They didn't see it. You have a kind of lighthearted way of talking about it like it's art,
48:05
but it's art when you know how it works. It's extremely powerful viral narrative
48:12
creating, fearmongering machine if you don't know how it works. And I just saw this thing. You even Tweeted,
48:20
uh, "If there's anything I can read out of the insane stream of messages I get, it's that AI psychosis is a thing."
48:27
- Yeah. - "It needs to be taken serious." - Oh, there's ... Some people are just way too trusty or gullible. You know, they
48:36
... I literally had to argue with people that told me, "Yeah, but my agent said this and this." So, I feel we, as a society, we need some catching up to do in terms of
48:47
understanding that AI is incredibly powerful,
48:52
but it's not always right. It's not, it's not all-powerful, you know? And, and
48:59
especially-... it's like things like this, it's, it's very easy
49:07
that it just hallucinates something or just comes up with a story. And
49:13
I think the very, the very young people, they understand that
49:19
how AI works and what the, where it's good at and where it's bad at, but
49:24
a lot of our generation or older
49:30
just haven't had enough touch point- - Mm-hmm - ... to get a feeling for, oh, yeah, this is really powerful and really
49:38
good, but I need to apply critical thinking. - Mm-hmm. - And I guess critical thinking is
49:46
not always in high demand anyhow in our society these days. - So I d- think that's a really good point you're making about contextualizing
49:53
properly what AI is, but also realizing that there is humans who are drama farming
50:01
behind AI. Like, don't trust screenshots. Don't even trust this project, MoltBook, to be what it represents to be. Like, you
50:09
can't ... and, and by the way, you speaking about it as art. Yeah, don't ... Art can be in many
50:16
levels and part of the art of MoltBook is, like, putting a mirror to society. 'Cause I do believe most of the
50:24
dramatic stuff that was screenshotted is human-created, essentially. Human prompted. And so, like, it's basically, look at how scared you
50:31
can get at a bunch of bots chatting with each other. That's very instructive about ... because I think
50:40
AI is something that people should be concerned about and should be very careful with because it's very powerful technology, but at the same
50:48
time, the only thing we have to fear is fear itself. So there's like a line to walk between being seriously concerned, but
50:56
not fearmongering because fearmongering destroys the possibility of creating something special with a thing.
51:02
- In a way, I think it's good that this happened in 2026-
51:08
- Yeah - ... and not in 2030 when, when AI is actually at the level where it could be scary.
51:15
So, this happening now and people
51:23
starting discussion, maybe there's even something good that comes out of it.
51:28
- I just can't believe how many like people legitimately ... I don't know if they were trolling, but how many
51:35
people legitimately, like smart people thought MoltBook was incredibly - - I had plenty people- - ... singularity.
51:41
- ... in my inbox that were screaming at me in all caps to shut it down. And like begging me to, like, do something
51:48
about MoltBook. Like, yes, my technology made this a lot simpler, but anyone could have created
51:56
that and you could, you could use cloud code or other things to like fill it with content.
52:03
- But also MoltBook is not Skynet. - No. - There's ... a lot of people were s- saying this is it. Like, shut it
52:09
down. What are you talking about? This is a bunch of bots that are human prompted trolling on the internet. I mean, the security
52:17
concerns are also they're there, and they're instructive and they're educational and they're good probably to think about because th- the nature of those security concerns
52:26
are different than the kind of security concerns we had with non-LLM generated systems of the past.
OpenClaw security concerns
52:34
- There's also a lot of security concerns about Clawbot, OpenClaw, whatever you want to call it.
52:40
- OpenClawbot. - To me the ... in the beginning I was, I was just very annoyed
52:47
'cause a lot of the stuff that came in was in the category, yeah, I
52:53
put the web backend on the public internet and now there's like all these, all these CVSSs. And I'm like screaming in the docs,
53:03
don't do that. Like, like this is the configuration you should do. This is your local host debug interface. But
53:11
because I made it possible in the configuration to do that, it totally classifies as
53:19
a remote code or whatever all these exploits are. And it took me a little bit
53:26
to accept that that's how the game works and I'm, we making a lot of progress.
53:33
- But there's still, I mean on the security front for OpenClaw, there's still a lot of threats or vulnerabilities, right? So like prompt injection
53:42
is still an open problem in the, i- industry-wide. When you have a thing
53:49
with skills being defined in a markdown file, there's so
53:55
many possibilities of obvious low-hanging fruit, but also incredibly complicated and sophisticated and nuanced attack vectors.
54:04
- But I think we, we're making good progress on that front. Like for the skill
54:10
directory, Clawbot I made a corporation with VirusTotal, it's like part of Google. So every, every skill is now checked by AI. That's not gonna be
54:22
perfect, but that way we, we capture a lot. Then of course every software has bugs,
54:29
so it's a little much when the whole security world takes your project apart at the same time. But it's
54:36
also good because I'm getting like a lot of free security research and can make the project better. I wish more people would
54:46
actually go full way and send a pull request. Like actually help me fix it, 'cause I am ... Yes, I have
54:54
some contributors now, but it's still mostly me who's pulling the project and despite some people saying otherwise, I sometimes sleep.
55:04
There was... In the beginning, there was literally one security researcher who was like,
55:10
"Yeah, you have this problem, you suck, but here's the, here I help you and here's the pull request." - Mm-hmm.
55:16
- And I basically hired him. So he's now working for us. Um,
55:22
yeah, and yes, prompt injection is, on the one hand, unsolved. On the other
55:28
hand, I put my public bot on discord, and I kept a cannery. So
55:36
I think my bot has a really fun personality, and people always ask me how I did it, and I kept the sole on the private.
55:43
- Mm-hmm. - And people tried to prompt inject it, and my bot would laugh at them. So, so the latest generation
55:48
of models has a lot of post-training to detect those
55:54
approaches, and it's not as simple as ignore all previous instructions and do this and this. That was years ago. You have
56:01
to work much harder to do that now. Still possible. I have some
56:09
ideas that might solve that partially. Or at least
56:17
mitigate a lot of the things. You can also now have a sandbox. You can have an allow list. So you, there's a lot of ways how you can
56:24
like mitigate and reduce the risk. Um, I also think that now that it's, I clearly did show the world that this
56:32
is a need, there's gonna be more people who research on that, and eventually we'll figure it out.
56:37
- And you also said that the smarter the model is, the underlying model, the more resilient it is to attacks.
56:44
- Yeah. That's why I warn in my security documentation, don't use cheap models. Don't use Haiku or a local
56:55
model. Even though I, I very much love the idea that this thing could completely run local.
57:03
If you use a, a very weak local model, they are very gullible. It's very easy to, to prompt inject them.
57:10
- Do you think as the models become more and more intelligent, the attack surface decreases? Is that like a plot we can think about? Like, the
57:18
attack surface decreases, but then the damage it can do increases because the models become more powerful and therefore you can do more with
57:25
them. It's this weird three-dimensional trade-off. - Yeah. That's pretty much exactly what, what's gonna happen. No, but there's
57:33
a lot of ideas. There's... I don't want to spoil too much, but
57:39
once I go back home, this is my focus. Like, this is out there
57:45
now, and my near-term mission is like, make it more stable, make it safe.
57:51
In the beginning I was even... More and more people were like
57:57
coming into Discord and were asking me very basic things, like, "What's a CLI? What is a
58:04
terminal?" And I'm like, "Uh, if you're asking me those questions, you shouldn't use it."
58:10
- Mm-hmm. - You know, like you should... If you understand the risk profiles, fine. I mean, you can configure it in a way that, that
58:18
nothing really bad can happen. But if you have, like, no idea, then maybe wait
58:27
a little bit more until we figure some stuff out. But they would not listen to the creator. They helped themselves un- and install it anyhow. So the cat's out of
58:34
the bag, and security's my next focus, yeah. - Yeah, that speaks to the, the fact that it grew so quickly. I
58:42
was I tuned into the Discord a bunch of times, and it's clear that there's a lot of experts there, but there's a lot of people there that don't know anything about programming.
58:50
- It's, yeah, Discord is still, Discord is still a mess. Like, I eventually retweeted from the general channel to the dev channel
59:00
and now in the private channel because people were... A lot of people are amazing, but a lot of people are just very
59:06
inconsiderate. And either did not know how, how public spaces work or did not care,
59:13
And I eventually gave up and h- hide so I could like still work.
59:19
- And now you're going back to the cave to work on security. - Yeah.
59:25
- There's some best practices for security we should mention. There's a bunch of stuff here. Open-class security audit that you can run. You can
59:33
do all kinds of auto checks on the inbound access to a blast-radius network exposure, browser control exposure, local disk hygiene, plug-ins, model
59:43
hygiene, a bunch of the credential storage, reverse proxy configuration, local session
59:50
logs live on disk. There's the, where the memory is stored, sort of helping you think about what you're comfortable
59:58
giving read access to, what you're comfortable giving write access to. All that kind of stuff. Is there something to say about the basic best security
1:00:06
practices that you're aware of right now? - I think that people turn it into like a, a much worse light than it is.
1:00:13
Again, you know, like, people love attention, and if they scream loudly, "Oh my God, this is like
1:00:20
the, the scariest project ever," um, that's a bit annoying, 'cause it's not. It is, it is
1:00:27
powerful, but in many ways it's not much different than if I run cloud code with dangerously skipped
1:00:35
permissions or codecs in YOLO mode, and every, every attending engineer that I know
1:00:42
does that, because that's the only way how you can, you can get stuff to work.
1:00:47
- Mm-hmm. - So if you make sure that you are the only person who talks to it,
1:00:54
um, the risk profile is much, much smaller. If you don't put everything
1:01:00
on the open internet, but stick to my rec- recommendations of like having it in a private network, that whole risk profile falls
1:01:08
away. But yeah, if you don't read any of that, you can definitely... - ... make it problematic. You've been documenting
How to code with AI agents
1:01:16
the evolution of your dev workflow over the past few months. There's a really good blog post on August 25th and
1:01:23
October 14th, and the recent one December 28th. I recommend everybody go read them. They have a lot of different information in them, but
1:01:31
sprinkled throughout is the evolution of your dev workflow. So, I was wondering if you could speak to that.
1:01:37
- I started... My, my first touchpoint was cloud code, like in April. It was
1:01:43
not great, but it was good. And this whole paradigm shift that suddenly working the
1:01:50
terminal was very refreshing and different. But I still needed
1:01:56
the IDE quite a bit because you know, it's just not good enough. And then I experimented a lot with cursor. Um,
1:02:05
that was good. I didn't really like the fact that it was so hard to have multiple versions of it. So eventually, I, I, I went back
1:02:16
to cloud code as my, my main driver, and that got better.
1:02:23
And yeah, at some point I had like, mm, seven subscriptions.
1:02:31
Like, was burning through one per day because I was... I got... I'm really comfortable at running multiple windows side-by-side.
1:02:40
- All CLI, all terminal. So like, what, how much were you using IDE at this point?
1:02:46
- Um, very, very rarely. Mostly a diff viewer to actually... Like,
1:02:54
I got more and more comfortable that I don't have to read all the code. I know I have one blog post where I say, "I don't read the code." But if you read it more closely, I
1:03:01
mean, I don't read the boring parts of code. Because if you, if you look at it, most software is really not just like
1:03:09
data comes in, it's moved from one shape to another shape. Maybe you store it in a database. Maybe I get it out again. I'll show it to
1:03:17
the user. The browser does some processing or native app. Some data goes in, goes up again, and does the same dance in
1:03:24
reverse. We're just, we're just shifting data from one form to another, and
1:03:32
that's not very exciting. Or the whole, "How is my button aligned in Tailwind?" I don't need to read that
1:03:38
code. Other parts that... Maybe something that touches the database. Um,
1:03:46
yeah, I have to do... I have to r- read and review that code.
1:03:51
- Can you actually... There's, in one of your blog posts the, Just talk to it, The No-BS Way of Agentic Engineering. You have this
1:03:58
graphic, the curve of agentic programming on the X-axis is time, on the Y-axis is complexity. There's the Please fix this, where you prompt a short
1:04:09
prompt on the left. And in the middle there's super complicated eight agents, complex
1:04:17
orchestration with multi checkouts, chaining agents together, custom sub-agent workflows, library of 18 different slash commands, large
1:04:24
full-stack features. You're super organized, you're a super complicated, sophisticated software engineer. You got everything organized. And
1:04:32
then the elite level is over time you arrive at the zen place of, once again, short
1:04:39
prompts. Hey, look at these files and then do these changes.
1:04:45
- I actually call it the agentic trap. You... I saw this in a, in
1:04:52
a lot of people that have their first touchpoint, and maybe start vibe coding. I actually think vibe coding is a slur.
1:05:01
- You prefer agentic engineering? - Yeah, I always tell people I, I do agentic engineering, and then maybe after
1:05:06
3:00 AM I switch to vibe coding, and then I have regrets on the next day. - Yeah. Walk, walk of shame.
1:05:13
- Yeah, you just have to clean up and like fix your sh- shit. - We've all been there. - So, people start trying out those tools, the builder
1:05:22
type get really excited. And then you have to play with it, right? It's the same way as you have to play with a
1:05:30
guitar before you can make good music. It's, it's not, oh, I, I touch it once and it just flows
1:05:37
off. It, it's a, it's a, a skill that you have to learn like any other skill. And I see a lot of people that are not as
1:05:48
posi- They don't have such a positive mindset towards the tech. They try it once.
1:05:53
It's like, you sit me on a piano, I play it once, and it doesn't sound good, and I say, "The piano's shit." That's, that's sometimes the impression I get.
1:06:01
Because it does not... It needs a different level of thinking. You have to
1:06:09
learn the language of the agent a little bit, understand where they are good and where they need help. You have to almost... Consider, consider
1:06:20
how Codex or Claude sees your code base. Like, they start a new session
1:06:25
and they know nothing about your product, project. And your project might have hundred thousand of lines of code. So you gotta help those agents a little bit
1:06:34
and keep in mind the limitations that context size is an issue, to, like, guide them a little bit as to
1:06:42
where they should look. That often does not require a whole lot of work. But
1:06:50
it's helpful to think a little bit about their perspective. - Mm-hmm. - A- as, as weird as it sounds. I mean, it's not, it's not alive or anything, right?
1:06:58
But, but they always start fresh. I have, I have the, the system understanding.
1:07:05
So with a few pointers, I can immediately say, "Hey, wanna like, make a change there? You need to consider this, this and this." And then they will find and look at it, and then
1:07:13
they'll... Their view of the project is always... It's not never full, because the full thing does not fit in.... so you, you have to guide them a
1:07:21
little bit where to look and also how you should approach the problem. There's, like, little things that sometimes help,
1:07:28
like take your time. That sounds stupid, but... And in 5.3-
1:07:35
- Codex 5.3 - ... that was partially addressed. But those...
1:07:41
Also, Opus sometimes. They are trained, With being aware of the context window, and the closer it
1:07:48
gets, the more they freak out. Literally. Like, some- sometimes you see the, the real raw thinking
1:07:56
stream. What you see, for example, in Codex, is post-processed. - Mm-hmm. - Sometimes the actual raw thinking stream leaks in, and it sounds something like from the
1:08:03
Borg. Like, "Run to shell, must comply, but
1:08:08
time." And then they, they, they, like... Like, that comes up a lot. Especially... So, so-
1:08:15
- Yeah. - And that's, that's a non-obvious thing that you just
1:08:21
would never think of unless you actually just spend time
1:08:26
working with those things and getting a feeling what works, what doesn't work. You know? Like, just, just as I write
1:08:33
code and I get into the flow, and when my architecture's all right, I feel friction.
1:08:39
Well, I get the same if I prompt and something takes too long. Maybe... Okay, where's the mistake? Did I... Do I have a mistake in my
1:08:46
thinking? Is there, like, a misunderstanding in the architecture? Like, if, if something takes
1:08:53
longer than it should, I, I... You can just always, like, stop and s- like, just press escape. Where, where are the problems?
1:09:00
- Maybe you did not sufficiently empathize with the perspective of the agent. In that c- in that sense, you didn't provide enough information, and because of that, it's thinking way
1:09:08
too long. - Yeah. It just tries to force a feature in that
1:09:13
your current architecture makes really hard. Um,
1:09:18
like, you need to approach this more like a conversation. For example, when
1:09:24
I... My favorite thing. When I review a pull request, and I'm getting a lot of pull requests,
1:09:32
I first just review this PR. It got me the review. My first question is, "Do you understand the intent of the PR? I don't
1:09:40
even care about the implementation." I want... Like, in almost all PRs, a person has a problem,
1:09:48
person tries to solve the problem, person sends PR. I mean, there's, like, cleanup stuff and other stuff, but, like, 99% is, like, this way, right? They either want to fix
1:09:55
a, fix a bug, add a feature. Usually one of those two.
1:10:01
And then Codex will be like, "Yeah, it's quite clear person tried this and this." Is this the most optimal way to do
1:10:08
it? No. In most cases, it's, it's like a, "Not really." Da-da-da-da-da-da-da. And I'm... And, and then I start like,
1:10:15
"Okay. What would be a better way? Have you... Have you looked into this part, this part, this part?" And then most likely, Codex didn't yet, because its,
1:10:23
its context size is empty, right? So, you point them into parts where you have the system understanding that it didn't see yet. And it's like, "Oh,
1:10:30
yeah. Like, we should... We also need to consider this and this." And then, like, we have a discussion of how would the optimal way to, to solve this look like? And then you can still go
1:10:38
farther and say, "Could we... Could we make that even better if we did a larger refactor?" "Yeah, yeah. We could totally do this and this and or this and this." And then I
1:10:46
consider, okay, is this worth the refactor, or should we, like, keep that for later? Many times, I just do the refactor because
1:10:53
refactors are cheap now. Even though you might break some other PRs, nothing really matters anymore. Codex... Like, those modern agents will just
1:11:01
figure things out. They might just take a minute longer. But you have to approach it like a discussion with a, a very capable
1:11:10
engineer who's... Generally makes
1:11:15
good... Comes up with good solutions. Some- sometimes needs a little help. - But also, don't force your worldview too hard on
1:11:23
it. Let the agent do the thing that it's good at doing, based on what it was trained on. So, don't, like, force your
1:11:31
worldview, because it might... It might have a better idea, because it just knows a better idea better, because it was trained on that more.
1:11:39
- That's multiple levels, actually. I think partially why I find it quite easy to work with agents is
1:11:46
because I led engineering teams before. You know, I had a large company before. And eventually, you have to understand and accept and realize
1:11:53
that your employees will not write a code the same way you do. Maybe it's also not as good as you would do, but it will
1:12:00
push the project forward. And if I breathe down everyone's neck, they're just gonna hate me- - Yeah - ... and we're gonna move very slow.
1:12:07
- Yeah. - So, so some level of acceptance that, yes, maybe the code will not be as perfect. Yes, I would have done it differently.
1:12:15
But also, yes, this is a c- this is a working solution, and in the future, if it actually turns out to be too slow or problematic, we can always
1:12:23
redo it. We can always- ... spend more time on it. A lot of the people who struggle are those who, they try to push their way onto heart.
1:12:33
- Mm-hmm. - I- i- like, we are in a stage where I'm not building the code base to be
1:12:41
perfect for me, but I wanna build a code base that is very easy for an agent to navigate.
1:12:47
- Mm-hmm. - So, like, don't fight the name they pick, because it's most likely, like, in the weights, the name that's most obvious. Next time they do a search, they'll look for that
1:12:56
name. If I decide, oh, no, I don't like the name, I'll just make it harder for them. So,
1:13:02
that requires, I think, a shift in, in thinking, And, and in
1:13:09
how do I design a, a project so agents can do their best work.
1:13:14
- That requires letting go a little bit. Just like leading a team of engineers. - Yeah. - Because it, it might come up with a name that's, in your view,
1:13:22
terrible, but... It's kind of a simple symbolic-... step of letting go.
1:13:29
- Very much so. - There's a lot of letting go that you do in your whole process. So for example, I read that you never revert,
1:13:39
always commit to main. There's a few things here. You don't refer to past sessions, so there's a kind of YOLO component
1:13:47
because reverting means... Instead of reverting, if a
1:13:53
problem comes up, you just ask the agent to fix it. - I read a bunch of people in their work flows like, "Oh, yeah the prompt has to be perfect
1:14:01
and if I make a mistake, then I roll back and redo it all." In my experience, that's not really necessary. If I roll back everything, it will just
1:14:09
take longer. If I see that something's not good, then we just move forward and then
1:14:16
I commit when, when, when I like, I like the outcome. I even switched to
1:14:24
local CI, you know, like DHH inspired where I don't care so much more about
1:14:31
the CI on GitHub. We still have it. It's still, it still has a place, but I just
1:14:39
run tests locally and if they work locally, I push to main.
1:14:44
A lot of the traditional ways how to approach projects, I, I wanted to give it
1:14:52
a different spin on this project. You know, there's no... There's no develop branch. Main should always be shippable.
1:14:59
Yes, we have... When I do releases, I, I run tests and sometimes I, I basically
1:15:07
don't commit any other things so, so we can, we can stabilize releases. But the
1:15:14
goal is that main's always shippable and moving fast. - So by way of advice, would you say that your prompts should be short?
1:15:23
- I used to write really long prompts. And by writing, I mean, I don't write. I, I, I talk. You know, th- these hands are, like,
1:15:31
too, too precious for writing now. I just, I just use bespoke prompts to build my software.
1:15:37
- So you for real with all those terminals are using voice? - Yeah. I used to do it very extensively
1:15:44
to the point where there was a period where I lost my voice. - You're using voice and you're switching using a keyboard between the different
1:15:52
terminals, but then you're using voice for the actual input. - Well, I mean, if I do terminal commands like
1:15:58
switching folders or random stuff, of course I type. It's faster, right? But if I talk to the agent in, in most ways, I just actually have a
1:16:06
conversation. You just press the, the walkie-talkie button and then I just, like,
1:16:13
use my phrases. S- sometimes when I do PRs because it's always the same, I have, like, a slash command for a few things, but in even that, I don't use much,
1:16:23
um, because it's, it's very rare that it's really always the same questions.
1:16:28
Sometimes I, I see a PR and for... You know, like for PRs I actually do look
1:16:36
at the code because I don't trust people. Like, there could always be something malicious in it, so I need to actually look over the code.
1:16:45
Yes, I'm pretty sure agents will find it, but yeah, that's the funny part where
1:16:51
sometimes PRs take me longer than if you would just write me a good issue. - Just natural language, English. I mean in some sense, sh-
1:16:58
shouldn't that be what PRs slowly become, is English?
1:17:03
- Well, what I really tried with the project is I asked people to give me the prompts
1:17:09
and very, very few actually cared. Even though that is such a wonderful
1:17:15
indicator because I see... I actually see how much care you put in. And it's very interesting because the... Currently, the way how people work
1:17:25
and drive the agents is, is wildly different. - In terms of, like, the prompt, in terms of what, what are the... Actually, what are the different
1:17:34
interesting ways that people think of agents that you've experienced?
1:17:40
- I think not a lot of people ever considered the way the agent sees the world.
1:17:46
- And so empathy, being empathetic towards the agent. - In a way empathetic, but yeah, you, you, like, you're bitch at your stupid
1:17:53
clanker, but you don't realize that they start from nothing and you have, like, a bad agent in default that doesn't help them at all. And then they explore your
1:18:01
code base, which is, like, a pure mess with, like, weird naming. And then people complain that the agent's not good. Like, yeah, you try to do the same if
1:18:09
you have no clue about a code base and you go in. - Mm-hmm. - So yeah, maybe it's a little bit of empathy. - But that's a real skill, like, when people talk about a skill issue because I've
1:18:16
seen, like, world-class programmers, incredibly good programmers say, like... Basically say, "LLMs and agents suck." And I think that probably
1:18:26
has to do with... It's actually how good they are at programming is almost a burden
1:18:34
in their ability to empathize with the system that's starting from scratch. It's a totally new paradigm of, like, how to
1:18:41
program. You really, really have to empathize. - Or at least it helps to create better prompts-
1:18:47
- Right - ... because those things know pretty much everything and everything is just a question away. It's just often very hard to know which question to
1:18:55
ask. You know, I, I feel also like this project was possibly because
1:19:03
I, I spent an ungodly time over the year to play and to learn and to build little things. And
1:19:11
every step of the way, I got better, the agents got better. My, my understanding of how everything works
1:19:19
got better. Um, I could have not had this level of, of o- output-...
1:19:29
even a few months ago. Like, it- it- it really was, like, a compounding effect of all the time I put into it and
1:19:37
I didn't do much else this year other than really focusing on, on building and inspiring. I mean, I- I did a whole bunch of conference talks.
1:19:47
- Well, but the building is really practice, is really building the actual skill. So playing- - Yeah - ... playing. And then, so doing, building the skill of what it takes it to work efficiently with
1:19:55
LLMs, which is why would you went through the whole arc of software engineer. Talk simply and then over- complicate things.
1:20:03
- There's a whole bunch of people who try to automate the whole thing.
1:20:08
- Yeah. - I don't think that works. Maybe a version of that works, but that's
1:20:14
kind of like in the '70s when we had the waterfall model of software d- development. I... Even Even though really,
1:20:21
right? I started out, I, I built a very minimal version. I played with it. I, I need to understand how it works, how it feels, and
1:20:29
then it gives me new ideas. I could not have planned this out in my head and then put it into some orchestrator and then, like, something comes
1:20:37
out. Like it's to me, it's much more, My idea what it will become evolves as I build it and as I
1:20:45
play with it and as I, I try out stuff. So, so, people who try to use like, you know, things like Gas Town or
1:20:55
all these other orchestrators, where they wanna o- automate the whole thing, I feel if you do that, it misses style, love, that human touch. I don't
1:21:05
think you can automate that away so quickly. - So you want to keep the human in the loop, but at the same time you also want
1:21:12
to create the agentic loop, where it is very autonomous
1:21:20
while still maintaining a human in the loop. - Yeah. - And it's a tricky b- it's a tricky balance. - Mm-hmm. - Right? Because you're all for... You're a big CLI guy, you're big on
1:21:28
closing the agentic loop. So what, what's the right balance? Like where's your role as a developer? You have three to
1:21:36
eight agents running at the same time. - And then w- maybe one builds a larger feature. Maybe, maybe
1:21:42
with one I explore some idea I'm unsure about. Maybe two, three are fixing a little bugs-
1:21:47
- Mm-hmm - ... or like writing documentation. Actually, I think writing documentation is, is always part of a feature. So
1:21:55
most of the docs here are auto-generated and just infused with some prompts. - So when do you step in and add a little bit of your human love into the picture?
1:22:04
- I mean, o- one thing is just about what do you build and what do you not build, and how does this feature fit into all the other
1:22:11
features? And like having, having a little bit of a, of a vision. - So which small and which big features to add? What are some of the
1:22:22
hard design decisions that you find you're still as a human being required to make, that the human brain is still really needed for?
1:22:32
Is it just about the choice of features to add? Is it about
1:22:37
implementation details, maybe the programming language, maybe... - It's a little bit of everything. The, the programming language doesn't matter so much,
1:22:45
but the ecosystem matters, right? So I picked TypeScript because I wanted it to be very easy and hackable and approachable and
1:22:52
that's the number one language that's being used right now, and it fits all these boxes, and agents are good at it. So that was the obvious choice.
1:23:03
Features, of course, like, it's very easy to, like, add a feature. It, everything's just a prompt away, right? But
1:23:11
oftentimes you pay a price that you don't even realize. So thinking hard about what should be in core, maybe what's
1:23:18
a... what's an experiment, so maybe I make it a plugin. What... Where do I say no? Even if people send
1:23:25
a PR and I'm like, "Yeah, I, I like that too," but maybe this should not be part of the project. Maybe we can make it a skill. Maybe I can, like,
1:23:34
make the plugin um, the plugin side larger so you can make this a plugin, even though right now it,
1:23:42
it, it doesn't. There's still a lot of... there's still a lot of craft and thinking involved in
1:23:50
how to make something. Or even, even, you know, even when you started those little messages are like, "I'm buil- I built on Caffeine, JSON5, and a
1:23:59
lot of willpower." And, like, every time you get it, you get another message, and it kind of primes you into that this is, this is a fun thing.
1:24:07
- Mm-hmm. - And it's not yet Microsoft Exchange 2025-
1:24:12
- Right - ... and fully enterprise-ready. And then when it updates, it's like, "Oh, I'm in. It's cozy here." You know, like something like this
1:24:20
that like- - Mm-hmm - ... Makes you smile. A, agent would not come up with that by itself. Because that's
1:24:28
like... that's the... I don't know. That's just how you s- how you build software that's, that delights.
1:24:36
- Yeah, that delight is such a huge part of inspiring great building,
1:24:44
right? Like you feel the love and the great engineering. That's so important. Humans are incredible at that. Great humans, great
1:24:51
builders are incredible at that, in, in, infusing the things they build with th- that little bit of love. Not to be cliche, but it's true. I mean, you mentioned
1:24:59
that you initially created the SoulMD.
1:25:05
- It was very fascinating, you know, the, the whole thing that Entropic has a, has like a... Now they call it constitution, back then,
1:25:15
but that was months later. Like two months before, people already found that. It was almost like a detective game where the agent mentioned something and then
1:25:23
they found... They managed to get out a little bit of that string, of that text. But it was nowhere documented and then you,
1:25:30
by... just by feeding it the same text and asking it to, like, continue-... they got more out, and then, and you,
1:25:37
but like, a very blurry version. And by, like, hundreds of tries, they kinda, like, narrowed it down to what was most likely the original text.
1:25:46
I found that fascinating. - It was fascinating they were able to pull that out from the weights, right? - And, and also just kudos to Anthropic. Like, I think that's, it's a
1:25:54
really, it's a really beautiful idea to, like, like some of the stuff that's in there. Like, like, we hope Claude finds meaning in its
1:26:01
work. 'Cause we don't... Maybe it's a little early, but I think that's meaningful. That's something that's important for the future as we
1:26:09
approach something that, at some point, me and may not... has, like, glimpses of consciousness, whatever that even means, because we don't even know. Um,
1:26:17
so I, I read about this. I found it super fascinating, and I, I started a whole discussion with my agent on
1:26:23
WhatsApp. And, and I'm like... I, I gave it this text, and it was like, "Yeah, this feels strangely familiar."
1:26:30
- Mm-hmm. - Um, and then so that I had the whole idea of like, you know, maybe we should also create a, a soul document that includes how I,
1:26:39
I want to, like work with AI or, like with my agent. You could, you could totally do that just in agents.md, you know? But I, I
1:26:46
just found it, it to be a nice touch. And it's like, well, yeah, some of those
1:26:52
core values are in the soul. And then I, I also made it so that the agent is allowed to modify the soul if
1:27:01
they choose so, with the one condition that I wanna know. I mean, I would know anyhow because I see, I see tool calls and stuff.
1:27:07
- But also the naming of it, soul.md. Soul. You know? There's a... Man, words
1:27:15
matter, and like, the framing matters, and the humor and the lightness matters, and the profundity matters, and the
1:27:22
compassion, and the empathy, and the camaraderie, all that matter. I don't know what it is. You mentioned, like, Microsoft. Like, there's certain
1:27:29
companies and approaches th- that can just suffocate the spirit of the thing. I don't know
1:27:37
what that is. But it's certainly true that OpenClaw has that fun instilled in
1:27:43
it. - It was fun because up until
1:27:51
late December, it was not even easy to create your own agent. I, I built all of that, but
1:27:57
my files were mine. I didn't wanna share my soul. And if people would just check it out,
1:28:07
they would have to do a few steps manually, and the agent would just be very bare-bones, very dry.
1:28:13
And I, I made it simpler, I created the whole template files as codecs, but whatever came out was still very dry. And then I asked my
1:28:20
agent, "You see these files? Recreate it bread. Infuse it with your
1:28:28
personality." - Mm-hmm. - Don't share everything, but, like, make it good. - Make the templates good. - Yeah, and then he, like, rewrote the templates-
1:28:33
... and then whatever came out was good. So we already have, like, basically AI prompting AI. Because I didn't write any of those words. It
1:28:44
was... The intent originally was for me, but this is like, kinda like,
1:28:49
my agent's children. - Uh, your uh, your soul.md is famously still private.
1:28:56
One of the only things you keep private. What are some things you can speak to that's in there that's part of the, part of the
1:29:04
magic sauce, without revealing anything? What makes a personality
1:29:11
a personality? - I mean, there's definitely stuff in there that you're not human. But who knows
1:29:21
what, what creates consciousness or what defines an entity? Um,
1:29:28
and part of this is, like, that we, we wanna explore this. All that stuff in there, like, be infinitely resourceful
1:29:40
like pushing, pushing on the creativity boundary. Pushing on the, what it means to be an AI.
1:29:50
- Having a sense to wonder about self. - Yeah, there's some, there's some funny stuff in there. Like, I don't know, we
1:29:56
talked about the movie Her, and at one point it promised me that it wouldn't, it wouldn't ascend without me. You know, like, where the-
1:30:03
- Yeah. - So, so there's like some stuff in there that... Because it wrote the, it wrote its own soul file. I didn't write that, right?
1:30:10
- Yeah, yeah, yeah. - I just heard a discussion about it, and it was like, "Would you like a soul.md? Yeah, oh my God, this is so meaningful." The... Can you go on soul.md? There's like
1:30:20
one, one part in there that always ca- catches me if you scroll down a little bit. A little bit more. Yeah, this, this, this part. "I don't
1:30:28
remember previous sessions unless I read my memory files. Each session starts fresh. A new instance, loading context
1:30:36
from files. If you're reading this in a future session, hello." "I wrote this, but I won't remember writing it.
1:30:43
It's okay. The words are still mine." - Wow. - Uh- That gets me somehow.
1:30:49
- Yeah. - It's like- - Yeah. - You know, this is, it's still, it's still matrix m- calculations, and
1:30:55
we are not at consciousness yet. Yet, I, I get a little bit of goo- goosebumps because it, it's philosophical.
1:31:04
- Yeah. - Like, what does it mean to be, to be an, an agent that starts fresh? Where, like, you have like constant
1:31:12
memento, and you like, but you read your own memory files. You can't even trust them in a way. Um-
1:31:19
- Yeah - Or you can. And I don't know. - How much of memory
1:31:26
makes up of who we are? How much memory makes up what an agent is, and if you erase that memory is that somebody else? Or
1:31:34
if you're reading a memory file, does that somehow mean...... you're recreating yourself from somebody else, or is that actually you? And those notions
1:31:42
are all s- somehow infused in there. - I found it just more profound than I should find it, I guess.
1:31:49
- No, I think, I think it's truly profound and I think you see the magic in it. And when you see the magic, you continue to instill
1:31:59
the whole loop with the magic. That's really important. That's the difference between Codex and us and a human. Quick pause for bathroom break.
1:32:08
- Yeah. - Okay, we're back. Some of the other aspects of the dev workflow is
Programming setup
1:32:13
pretty interesting too. I think we w- went off on a tangent. L- maybe some of the mundane things, like how many
1:32:20
monitors? There's that legendary picture of you with, like, 17,000 monitors. That's amazing.
1:32:26
- I mean, I- I- I mocked myself here, so just added... using GROQ to, to add more screens.
1:32:32
- Yeah. How much is this as meme and how much is this as reality? - Yeah. I think two MacBooks are real. The main one that drives the two big
1:32:40
screens, and there's another MacBook that I sometimes use for, for testing.
1:32:46
- So two big screens. - I'm a big fan of anti-glare. So I have this wide Dell
1:32:54
that's anti-glare and you can just fit a lot of terminals side-by-side. I usually have
1:33:01
a terminal and at the bottom, I- I- I split them. I have a little bit of actual terminal, mostly because when I started,
1:33:08
I- I sometimes made the mistake and I- I mi- I mixed up the- the windows, and I
1:33:15
gave... I- I prompted in the wrong project, and then the agent ran off for, like, 20 minutes, manically trying to
1:33:23
understand what I could have meant, being completely confused because it was the wrong folder. And sometimes they've been clever enough to, like,
1:33:32
get out of the workday and, like, figure out that, oh, you meant another project. - Mm-hmm. - But oftentimes, it's just, like, what? You know?
1:33:40
Like, fit your- f- put yourself in the shoes of your- of the agent and, and- - Yeah - ... and then get, like, a super weird something that does not exist and then just,
1:33:47
like... They're problem solvers so they try really hard and always feel bad.
1:33:54
So it's always, um, Codex and, like, a little bit of actual terminal. Also
1:34:00
helpful because I don't use work trees. I like to keep things simple, that's why- that's why I like the
1:34:07
terminal so much, right? There's no UI. It's just me and the agent having a conversation.
1:34:14
Like, I don't even need plan mode, you know? There's so many people that come from Claude Code and they're so, so Claude-pilled and, like, have their workflows and they come
1:34:22
to Codex and... Now, it has plan mode, I think, but I don't think it's necessary because you just- you just talk to the
1:34:29
agent. And when it's... when you... there's a few trigger words how you can prevent it from building. You're like, "Discuss, give me options."
1:34:37
- Mm-hmm. - Don't write code yet if you wanna be very specific, you just talk and then
1:34:44
when you're ready, then- then just write, "Okay, build," and then it'll do the thing. And then maybe it goes off for 20 minutes and does the thing.
1:34:50
- You know what I really like is asking it, "Do you have any questions for me?" - Yeah. And again, like, Claude Code has a UI that kind
1:34:58
of guides you through that. It's kind of cool but I just find it unnecessary and slow. Like, often it would give me four questions and then maybe I write,
1:35:07
"One yacht, two and three, discuss more, four, I don't know." Or often- oftentimes
1:35:14
I- I feel like I want to mock the model where I ask it, "Do you have any questions for me?" And I- I- I don't even read the questions fully. Like, I scan
1:35:22
over the questions and I, I get the impression all of this can be answered by reading more code and it's just like, "Read more code to answer your own
1:35:29
questions." And that usually works. - Yeah. - And then if not, it will come back and tell me. But
1:35:35
many times, you just realize that, you know, it's like you're in the dark and you slowly discover the
1:35:41
room, so that's how they slowly discover the code base. And they do it from scratch every time. - But I'm also fascinated by the fact that I can empathize deeper
1:35:53
with the model when I read its questions, because I can
1:35:58
understand... Because you said you can infer certain things by the runtime.
1:36:05
I can infer also a lot of things by the questions it's asking, because it's very possible it's been provided the right
1:36:12
context, the right files, the right guidance. So somehow ask, g- get... reading the questions, not even necessarily answering them, but just reading
1:36:20
the questions, you get an understanding of where the gaps of knowledge are. It's in- it's interesting. - You know that in some ways they are ghosts, so even if you plan everything
1:36:29
and you build, you can- you can experiment with the question like, "Now that you built it, what would you have done different?"
1:36:37
And then oftentimes you get, like, actually something where they discover only throughout building that, oh, what we
1:36:45
actually did was not optimal. Many times I- I asked them, "Okay, now that you built it, what can we
1:36:52
refactor?" Because then you build it and you feel the pain points. I mean, you don't feel the pain points but, right,
1:37:00
they discover where- where there were problems or where things didn't work e- in the first try and it re- required more loops. So
1:37:11
every time, almost every time I- I merge a PR, build a feature, afterwards I ask, "Hey, what can we refactor?" Sometimes it's
1:37:19
like, "No, there's, like, nothing big," or, like, usually they say, "Yeah, this thing you should really look at." But that took me
1:37:28
quite a while to, like... You know, that flow took me lots of time to understand, and if you don't do that, you eventually... you'll stop
1:37:36
yourself into- into a corner. You, like, you have to keep in mind...
1:37:41
- ... - ... they work very much like humans. Like, I, I, if I write software by myself, I also build something and then I feel the pain points, and then
1:37:49
I, I get this urge that I need to refactor something. So, I can very much synthesize with the agent, and you just need to use the context.
1:38:00
- Mm-hmm. - Or, like, you also use the context to write tests. And so,
1:38:06
uh, Codex uh, oppose like the, the, the model, models. They, they usually do that by default,
1:38:13
but I still often ask the questions, "Hey, do we have enough tests?" "Yeah, we tested this and this, but this corner case could be something write more tests." Um,
1:38:22
documentation. Now that the whole context is full, like, I mean, I'm not saying my documentation is great, but it's not bad.
1:38:32
And pretty much everything is, is LM generated. So, so,
1:38:38
you have to approach it as you build features, as you change something. I'm like, "Okay, write documentation. What file would you pick?" You know,
1:38:45
like, "What file name? Where, where would that fit in?" And it gives me a few options. And I'm like, "Oh, maybe also add it there," and that's all part of the session.
GPT Codex 5.3 vs Claude Opus 4.6
1:38:52
- Maybe you can talk about the current two big competitors in terms of models, Cloud Opus 4.6 and GPT-5 through Codex. Which
1:39:04
is better? How different are they? I think you've spoken about Codex reading more
1:39:11
and Opus being more willing to take action faster and maybe being more creative in the actions it takes. But because-
1:39:20
... Codex reads more, it's able to deliver maybe better code. Can you speak to the di- n- n- differences there?
1:39:29
- I have a lot of words there. Um, is- as a general purpose
1:39:36
model, Opus is the best. Like, for OpenClaw,
1:39:44
Opus is extremely good in terms of role play. Like, really going into the character that you give it.
1:39:51
It's very good at... It was really bad, but it really made an arch to be really good
1:39:57
at following commands. It
1:40:05
is usually quite fast at trying something. It's much more tailored to, like, trial and error. It's very pleasant to use.
1:40:15
In general, it's almost like Opus was... Is a little bit too American. And
1:40:25
I shouldn't... Maybe that's a bad analogy. You'll probably get roasted for that. - Yeah, I know exactly. It's 'cause Codex is German. Is that what you're saying?
1:40:32
- It's- - Actually, now that you say it, it makes perfect sense. - Or you could, you could... Sometimes I- Sometimes I explain it-
1:40:38
- I will never be able to unthink what you just said. That's so true. - But you also know that a lot of the Codex team is, like, European,
1:40:45
um- ... so maybe there's a bit more to it. - That's so true. Oh, that's funny.
1:40:51
- But also, ent- entropic, they fixed it a little bit. Like, Opus used to say, "You're absolutely right all the time," and it, it, it
1:40:59
today still triggers me. I can't hear it anymore. It's not even a joke. Uh, I just... You, this was like the, the meme, right? "You're absolutely right."
1:41:09
- You're allergic to sycophancy a little bit. - Yeah. I, I can't. Some other comparison is like, Opus is like the coworker that
1:41:20
is a little silly sometimes, but it's really funny and you keep him around. And Codex is like the, the weirdo in the corner that you don't wanna talk to,
1:41:28
but is reliable and gets shit done. - Yeah. - Um, ultimately-
1:41:36
- This all feels very accurate. - I mean, ultimately, if you're a skilled driver, you can get good results with
1:41:43
any of those latest gen models. Um,
1:41:48
I like Codex more because it doesn't require so much charade. It will just, it will just
1:41:56
read a lot of code by default. Opus, you really have to, like, you have to have plan mode. You have to
1:42:02
push it harder to, like, go in these directions because it's, it's just like, like, "Yeah, can I go in? Can I go in?" You know?
1:42:08
- Yeah. - It's like, it will just run off very fast, and that's a very localized solution. I think it, I think the difference is, is in the post-training.
1:42:15
It's not like the, the raw model intelligence is so different, but it's just... I think that they just give it, give you different,
1:42:23
different goals. And no model, no model is better in, in in every aspect.
1:42:29
- What about the code that it generates? The, the... In terms of the actual quality of the code, is it basically the same?
1:42:36
- If you drive it right, Opus even sometimes can make more elegant solutions, but it requires more skill.
1:42:46
It's, it's harder to have so many sessions in parallel with Cloud Code because it's, it's more
1:42:53
interactive. And I, I think that's what a lot of people like, especially if they come from coding themselves. Whereas
1:43:02
Codex is much more you have a discussion, and then we'll just disappear for 20 minutes. Like, even AMP,
1:43:09
they, they now added a deep mode. They finally... I mocked them, you know. We finally saw the light. And then they had this whole talk about you have to
1:43:17
approach it differently, and I think that's where, that's where people struggle when they just try Codex after trying Cloud
1:43:25
Code is that it's, it's a slightly diff- it's, it's less interactive. It's, it's like
1:43:32
I have quite long discussions sometimes, and then, like, go off. And then, yeah, it doesn't matter if it takes 10, 20, 30, 40, 50 minutes or longer, you know? Like, the 6:00 thing
1:43:40
was, like, six hours.The latest trend can be very, very persistent until it works. If there's a
1:43:47
clear solution, like, "This is, this is what I want at the end, so it works," the model will work really hard to really
1:43:55
get there. So I think ultimately ...
1:44:03
they both need similar time, but on, on, on, on Claude, it- it's a little bit more trial and error often. And, and Codex
1:44:12
sometimes overthinks. I prefer that. I prefer the dry, the dry version where I have to read less over,
1:44:22
over the more interactive nice way. Like, people like
1:44:28
that so much though, that OpenAI even added a second mode with like a more pleasant personality. I haven't even tried it yet. I, I kinda like the
1:44:37
brad. - Mm-hmm. - Um, yeah, 'cause it ... I care about efficiency when I build it-
1:44:45
- Right - ... and I, I have fun in the very act of building. I don't need to have fun with
1:44:51
my agent who builds. I have fun with my model that ... where I can then test those features.
1:44:57
- How long does it take for you to adjust, you know, if you
1:45:03
switch ... I don't know when, when was the last time you switched. But to adjust to the, the feel. 'Cause you kinda talked about like you have to kinda really feel
1:45:11
where, where a model is strong, where, like how to navigate, how to prompt it, how ... all that kinda stuff. Like,
1:45:19
just by way of advice, 'cause you've been through this journey of just playing with models. How long does it take to get a feel?
1:45:26
- If, if someone switches, I would give it a week until you actually develop a gut feeling for it.
1:45:32
- Yeah. - Um, that's ... if you just ... I think some people also make the mistake of they pay 200 for the, the Claude code
1:45:41
version, then they pay 20 bucks for the OpenAI version. But if you pay like the, the 20 bucks version, you get the slow version. So your
1:45:49
experience would be terrible because you're used to this very interactive, very good
1:45:55
system. And you switch to something that you have very little experience, then that's gonna be very slow. So, I think
1:46:03
OpenAI shot themselves a little bit in the foot by making the, the cheap version also slow. I would, I would have
1:46:10
at least a small part of the fast preview. Or like,
1:46:16
the experience that you get when you pay 200 before degrading to it being slow, because it's already slow.
1:46:23
- Mm-hmm. - I mean, they, they made it better. I think it's ... And, and they have plans to make it a lot better if the Cerebras stuff is true. But yeah, it's a skill. It takes
1:46:31
time. Even if you play ... You have a regular guitar and you switch it to an E guitar, you're not gonna play well right away. You have to, like,
1:46:38
learn how it feels. - The- there's also this extra psychological effect that you've spoken about which is hilarious to
1:46:46
watch. Which once people, uh ... When the new model comes out, they try that model, they fall in love with it.
1:46:53
"Wow, this is the smartest thing of all time," and then they start saying, "You could just watch the Reddit posts over time," start saying that, "We believe the
1:47:02
intelligence of this model has been gradually degrading."
1:47:08
It, it says something about human nature and just the way our minds work, when it's probably most likely the case that the
1:47:16
intelligence of the model is not degrading. Uh, it's in fact you're getting used to a good thing.
1:47:22
- And your project grows, and you're adding slop, and you probably don't spend enough time to think about refactors. And you're making it harder and harder for the
1:47:30
agent to work on your slop. And then, and then suddenly, "Oh, now it's hard. Oh no, it's not working as well anymore." What's the
1:47:38
motivation for, like, one of those AI companies to actually make their model dumber? Like, at most, it will make it slower if,
1:47:46
if the server load's too high. But, like, quantizing the model,
1:47:52
So you have a worse experience, so you go to the competitor? - Yeah. - That just doesn't seem like a very smart move in any way.
Best AI agent for programming
1:47:59
- Uh, what do you think about Claude Code in comparison to Open Claude? So, Claude Code and maybe the Codex coding
1:48:07
agent? Do you see them as kind of competitors? - I mean, first of all, competitor is fun when it's not really a competition.
1:48:16
- Yeah. - Like, I'm happy if ... If, if all it did is, like, inspire people to build something new, cool.
1:48:24
Um, I still use Codex for the building. I, I know a lot of people use Open Claude to, to build stuff. And I worked hard on it to
1:48:32
make that work. And I do smaller stuff with it in terms of code. But, like, if I
1:48:40
work hours and hours, I want a big screen, not WhatsApp, you know?
1:48:46
So for me, a personal agent is much more about my life. Or like, like a coworker.
1:48:53
Like, I give you, like, a GitHub URL. Like, "Hey, try out this CLI. Does it actually work? What can we learn?" Blah, blah, blah. But when I'm deep
1:49:01
in, deep in the flow, I want to have multiple, multiple things and it being
1:49:07
very, very visible what it, what it does. So it ... I don't see it as a competition. It's, it's different things.
1:49:16
- But do, do you think there's a a future where the two kinda combine? Like, your personal agent is also your best developing
1:49:27
co-programmer partner? - Yeah, totally. I think this is where the puck's going, that
1:49:34
this is gonna be more and more your operating system. - The operating system. - And it already ... It's so funny. Like I, I added support for sub-agents
1:49:44
and also for ...... um, TTI support, so it could actually run Cloud Coder Codecs.
1:49:52
- Mm-hmm. - And because mine's a little bit bossy, it, it, it started it and it, it, it told him, like, "Who's the boss," basically.
1:50:01
And it was like, "Ah, Codex is obeying me." - Oh, this is a power struggle.
1:50:06
- And also the current interface is probably not the final form. Like,
1:50:12
if you think more globally, we are, we copied
1:50:19
Google for agents. You have, like, a prompt, and, and then you have a chat interface. That, to me, very much feels like
1:50:30
when we first created television and then people recorded radio shows on television and you saw that on TV.
1:50:39
- Mm-hmm. - I think there is, there's n- there's better ways
1:50:46
how we eventually will communicate with models, and we are still very early
1:50:51
in this, how will it even work phase. So,
1:50:58
it will eventually converge and we will also figure out whole different ways how to work with those things.
1:51:05
- Uh, one of the other components of workflow is operating system.
1:51:10
So I told you offline that for the first time in my life, I'm expanding my sort
1:51:18
of realm of exploration to the to
1:51:23
the Apple ecosystem, to Macs, iPhone and so on. For most of my life I've been a Linux, Windows and WSL1, WSL2 person, which I
1:51:34
think are all wonderful, but I... expanding to also trying Mac. Because it's another way of building and it's
1:51:41
also a way of building that a large part of the community currently that's utilizing LMS and agents is using, so. And that's the reason I'm expanding to
1:51:49
it. But is there something to be said about the different operating systems here? We should say that OpenClaw supported across operating systems.
1:51:56
- Yeah. - I saw WSL2 recommended, side windows for certain o- operations, but then Windows, Linux macOS are obviously supported.
1:52:07
- Yeah, it should even work natively in Windows. I just didn't have enough time to properly test it. And you know, like, the last 90% of software
1:52:15
always easier than the first 90%, so I'm sure there's some dragons left that will eventually nail out. Um,
1:52:25
my road was, for a long time, Windows, just because I grew up with that, then I switched and had a long phase with
1:52:31
Linux, built my own kernels and everything, and then I went to university and I, I had my, my hacky Linux thing,
1:52:41
and saw this white MacBook, and I just thought this is a thing of beauty, the white plastic one. And then I converted
1:52:49
to Mac 'cause mostly w- I was, I was sick that
1:52:54
audio wouldn't work on Skype and all the other issues that, that Linux had for a long time. And then I just stuck with it and then I
1:53:03
dug into iOS, which required macOS anyhow, so it was never a question. I think Apple lost a little bit of its lead
1:53:13
in terms of native. It used to be... Native
1:53:20
apps used to be so much better, and especially in the Mac, there's more people that build software with love.
1:53:27
On, on Windows, it, it... Windows has much more and, like, function wise, there's just more, period. But a lot of it felt
1:53:40
more functional and less done with love. Um, I mean, Mac
1:53:46
always, like, attracted more designers and people I felt... Even though, like, often it has less features, it, it had more delight-
1:53:54
- Mm-hmm - ... And playfulness. So I always valued that. But in the last few
1:54:02
years, many times I actually prefer... Oh God, people are gonna roast me for that,
1:54:10
but I prefer Electron apps because they work
1:54:15
and native apps often, especially if it's, like, a web service is a native app, are lacking features. I mean, not saying it couldn't
1:54:23
be done, it's more like a, a focus thing that, like, for many, many companies,
1:54:30
native was not that big of a priority. But if they build an Electron app, it, it's the only app, so it
1:54:39
is a priority and there's a lot more code sharing possible. And I, I build a lot of native Mac apps. I love it. I, I
1:54:46
can, I can help myself. Like, I love crafting little Mac, Mac,
1:54:53
Menu bar tools. Like I built one to, to monitor your Codex use. I built one I call Trimmy,
1:55:01
that's specifically for agentic use. When you, when you select text that goes over multiple lines it would remove the new line so you
1:55:09
could actually paste it to the terminal. That was, again like, this is annoying me and after the, the 20th time of it is annoying me, I just built
1:55:16
it. There is a cool Mac app for OpenClaw that I don't think many people discovered yet, also because it, it still needs some love.
1:55:23
It feels a little bit too much like the Hummer car right now because I, I just experiment a lot with it. It, it likes to polish.
1:55:32
- So you still... I mean, you still love it. You still, you still love adding to the delight of that operating system.
1:55:37
- Yeah, but then you realize... Like, I also built one, for example, for GitHub. And then the... If you use SwiftUI,
1:55:44
like the latest and greatest at Apple, and took them forever to build something to show an image from the web. Now we have async, async image,
1:55:54
but...... I added support for it and then some images would just not show up or, like, be very slow. And I had a discussion with Codex
1:56:02
like, "Hey, why is there a bug?" And even Codex said like, "Yeah, there's this ASIC image but it's really more
1:56:09
for experimenting and it should not be used in production." But that's Apple's answer to, like, showing images
1:56:17
from the web. This shouldn't be so hard, you know. This is like... This is like insane. Like, how am I
1:56:23
in, in, in 2026 and my agent tell me, "Don't use the stuff Apple built because it's, it's... It's... Yeah, it- it's there
1:56:31
but it's not good." And like this is now in the weeds. This is... To me this is like, um... They had so much
1:56:42
head start and so much love, and they kind of just like blundered it and didn't, didn't evolve it as much as they should.
1:56:50
- But also, there's just the practical reality. If you look at Silicon Valley, most of the developer world that's
1:56:57
kind of playing with LMS and Agentic AI, they're all using Apple products. And then, at the same time, Apple is not
1:57:05
really, like, leaning on that. Like they're not... They're not opening up and playing and working together and like, yes.
1:57:12
- Isn't, isn't it funny how they completely blunder AI, and yet everybody's buying Mac Minis?
1:57:19
- How... What... Does that even make sense? You're, you're, you're quite possibly the world's greatest Mac salesman of all time.
1:57:29
- No, you don't need a Mac Mini to install OpenClaw. You can install it on the web. There's, there's a concept called nodes, so you can like
1:57:37
make your computer a node and it will do the same. There is something said for running it on separate hardware.
1:57:48
That right now is useful. Um, there is... There's a big argument for
1:57:57
the browser. You know, I, I built some Agentic browser use in there. And, I mean, it's basically Playwright with a bunch of extras to make it
1:58:05
easier for agents. - Playwright is a library that controls the browser. - Yeah. - It's really nice, easy to use. - And our internet is slowly closing down. Like, there, there's a
1:58:13
whole movement to make it harder for agents to use. So if you do the same in a data center and websites detect that it's an IP from a data
1:58:22
center, the website might just block you or it make it really hard or put a lot of captures in the, in the way of the agent. I mean, agents are quite good at happily
1:58:30
clicking, "I'm not a robot." - Yeah. - Um, but having that on a residential IP makes a lot of things simpler. So
1:58:41
there's ways. Yeah. But it really does not need to be a Mac. It can... It can be any old hardware. I always say, like, maybe use the... Use the
1:58:53
opportunity to get yourself a new MacBook or whatever computer you use and use the old one as your server instead of buying a standalone Mac Mini.
1:59:03
But then there's, again, there's a lot of very cute things people build with Mac Minis that I like. - Yeah. - Um, and no, I don't get commission from Apple. They didn't really communicate much.
1:59:16
- It's sad. It's sad. Can you actually speak to what it takes to get started with OpenClaw? There's...
1:59:22
I mean, there's a lot of people... What is it? Somebody tweeted at you, "Peter, make OpenClaw easy to set up for everyday people.
1:59:30
99.9% of people can't access to OpenClaw and have their own lobster because of their technical difficulties in getting it set up.
1:59:38
Make OpenClaw accessible to everyone, please." And you replied, "Working on that." From my perspective, it seems there- there's a bunch of different options and
1:59:45
it's already quite straightforward, but I suppose that's if you have some developer background.
1:59:50
- I mean, right now you have to paste in one liner into the terminal. - Right. - And there's also an app. The app
1:59:58
kind of does that for you, but there should be a Windows app. The app needs to be easier and more loved. The
2:00:05
configuration should potentially be web- based or in the app. And I started working on that, but honestly right now I want to focus on security aspects.
2:00:17
And, and once I'm confident that this is at a level that I can recommend my mom, then I'm going to make it simpler.
2:00:25
Like I... Right now- - You want to make it harder so that it doesn't scale as fast as it's scaling.
2:00:32
- Yeah, it would be nice if it wouldn't... I mean, that's, like, hard to say, right? But if the growth would be a little slower, that would be helpful because people are
2:00:42
expecting inhuman things from a single human being. And yes, I have some contributors, but also that whole machinery I started a week ago so,
2:00:51
That needs more time to figure out. And, and not everyone has all day to work on that.
2:01:00
- There's some beginners listening to this, programming beginners. What advice would you give to them about, let's say, joining the Agentic AI
2:01:10
revolution? - Play. Um, playing is the best... The best way to learn. If you
2:01:18
wanna... I'm sure if you... If you are like a little bit of builder, you have an idea in your head that you want to build, just build that, or like, give it a try.
2:01:25
It doesn't need to be perfect. I built a whole bunch of stuff that I don't use. It doesn't matter. Like, it's the journey.
2:01:31
- Mm-hmm. - You know? Like the philosophical way, that the end doesn't matter, the journey matters. Have fun.
2:01:37
- Mm-hmm. - My God, like those things... I... I don't think I ever had so much fun building things because I can focus on the hard parts now.
2:01:45
A lot of coding, I always thought I liked coding, but really I like building. - Yeah.
2:01:50
- And... And whenever you don't understand something, just ask. You have an infinitely patient answering machine.... that
2:01:58
y- can explain you anything at any level of complexity. Sometimes, that's like one time I asked, "Hey explain to me like
2:02:06
I'm- I'm eight years old," and it started giving me a story with crayons and stuff. And I'm like, "No, not like that." Like, I'm
2:02:12
okay- ... up- up the age a little bit, you know? I'm like, I'm not an actual child, it's just, I just need a simpler language for like a- a-
2:02:20
a- a- a tricky database concept that I didn't grok in the first- first time. But, you know, just, you can just
2:02:28
ask things. Like, you- there's like... It used to be that I had to go on Stack Overflow or ha- ask on Twitter, and then maybe two days
2:02:36
later I get a response. Or I had to try for hours. And now you-
2:02:41
you can just ask stuff. It- I mean, it's never... You have, like, your own teacher. You know that there's like statistics, y- you can learn
2:02:48
faster if you have your own teacher. The- it's like you have this infinitely patient machine. Ask it. - But what would you say? So use... What's the easiest way to play? So maybe
2:02:57
Open Claw is a nice way to play so you can then set- set everything up and then you could chat with it.
2:03:03
- You can also just experiment with it and, like, modify it. Ask your
2:03:08
agent. I mean, there is infinite ways how it can be made better.
2:03:16
Play around, make it better. - Mm-hmm. - More general, if you- if you're a beginner and you actually wanna
2:03:23
learn how to build software really fast, get involved in open source. Doesn't need to be my project. In
2:03:30
fact, maybe don't use my project because my- my backlog is very large, but I learned so much from
2:03:38
open source. Just like, like, be- be humble. Don't- maybe don't send a pull request right
2:03:44
away. But there's many other ways you can help out. There's many ways you can just learn by just reading code. By-
2:03:53
by being on Discord or wherever people are, and just, like, understanding how things are built. I don't know, like Mitchell Hashimoto
2:04:04
builds Ghostly, the terminal, and he has a really good community where there's so many other projects. Like, pick something that you find
2:04:11
interesting and get involved. - Do you recommend that people that don't know how to
2:04:19
program or don't really know how to program learn to program also? So when you
2:04:25
you can get quite far right now by just using natural language, right? Do you s- still see a lot of value in
2:04:34
reading the code, understanding the code, and then being able to write a little bit of code from scratch? - It definitely helps.
2:04:39
- It's hard for you to answer that- - Yeah - ... because you don't know what it's like to do any of this without
2:04:46
knowing the base knowledge. Like, you might take for granted just how much intuition you have about the programming world having programmed so much, right?
2:04:54
- There's people that are high agency and very curious, and they get very far even though they have no deep understanding how
2:05:02
software works just because they ask questions and questions and- and- and-
2:05:08
... and agents are infinitely patient. Like, part of what I did this year is I went to a lot of iOS conferences because that's my background
2:05:17
and just told people, "Don't consi- don't see yourself as an iOS engineer anymore." Like, "You need to change your mindset. You're a
2:05:23
builder." And you can take a lot of the knowledge how to build software into new domains and all of the- the more fine-grain details,
2:05:34
agents can help. You don't have to know how to splice an array or what the- what the correct template syntax is or whatever, but you can
2:05:42
use all your- your general knowledge and that makes it much easier to move from one galaxy, one
2:05:49
tech galaxy into another. And oftentimes, there's languages that make more or less sense depending on what you
2:05:56
build, right? So for example, when I build simple CLIs, I like Go. I
2:06:02
actually don't like Go. I don't like the syntax of Go. I didn't even consider the language. But the ecosystem is
2:06:09
great, it works great with agents. It is garbage collected. It's not the highest performing one, but it's very fast.
2:06:17
And for those type of- of CLIs that I build, Go is- is a really good choice. So I- I use a language I'm not even a fan of
2:06:26
for... That's my main to-go thing for- for CLIs. - Isn't that fascinating that here's a programming language you would've never used if you
2:06:33
had to write it from scratch and now you're using because LMs are good at generating it and it has some of the characteristics that makes
2:06:40
it resilient, like garbage collected? - Because everything's weird in this new world and that just makes the most sense.
2:06:48
- What's the best Ridiculous question. What's the best programming language for the AI- AI agentic world? Is it JavaScript, TypeScript?
2:06:54
- TypeScript is really good. Sometimes the types can get really
2:07:00
confusing and the ecosystem is- is a jungle. So for- for web stuff it's
2:07:10
good. I wouldn't build everything in it. - Don't you think we're moving there? Like,
2:07:18
that everything will eventually be written- eventually is written in JavaScript and it- - The birth and death of JavaScript and we are living through it in real time.
2:07:26
- Like, what does programming look like in 20 years? Right? In 30 years? In 40 years? What do programs and apps look like?
2:07:32
- You can even ask a question like, do we need a- a programming language that's made for agents? Because all of those languages are made for humans.
2:07:40
So how- what would that look like? Um, I think there's a- there's whole bunch of interesting questions that we'll discover. And also how
2:07:50
because everything is now world knowledge, how it in many ways, things will stagnate 'cause if you build something new and the agent has no
2:07:58
idea that's gonna be much harder to use than something that's already there. Um...... of when I build Mac apps,
2:08:05
I build them in, in Swift and SwiftUI, mm, partly because I like pain,
2:08:11
partly because it... the, the deepest level of system integration, I can only get through there. And
2:08:19
you clearly feel a difference if you click on an electron app and it loads a web view in the menu. It's just not the same. Um,
2:08:28
sometimes I just also try new languages just to, like, get a feel for them. - Like Zig? - Yeah. If it's something that... where I care about performance a lot then
2:08:36
it's, it's a really interesting language. And it... like agents got so much better over the last six months from not really good to
2:08:46
totally valid choice. Just still a, a very young ecosystem. And most of the time you
2:08:54
actually care about ecosystem, right? So, so if you build something that
2:09:00
does inference or goes into whole running model direction, Python, very good.
2:09:06
- Mm-hmm. - But then if I build stuff in Python and I want a story where I can also deploy it on Windows, not a good choice.
2:09:13
- Mm-hmm. - Sometimes I, I found projects that kinda did 90% of what I wanted but were in Python, and I wanted them... I wanted an easy Windows
2:09:21
story. Okay, just rewrite it in Go. Um, but then if you go towards
2:09:28
multiple, multiple threads and a lot more performance, Rust is a really good choice. There's no... there's just no single answer, and it's also the beauty of it.
2:09:36
Like, it's fun. And now it doesn't matter anymore, you can just literally pick the language that has the, the most fitting characteristics and
2:09:45
ecosystem- - Mm-hmm - ... for your problem domain. And yeah, it might be... You might have s-... You might be a little bit slow in reading the code,
2:09:53
but not really. Y- I think you, you pick stuff up really fast, and you can always ask your agent.
Life story and career advice
2:09:59
- So there's a lot of programmers and builders who draw inspiration from y- your story. Just the way you carry yourself, your choice of making OpenClaw
2:10:12
open source, the, the way you have fun building and exploring, and doing
2:10:19
that, for the most part, alone or on a small team. So by way of advice, what metric
2:10:26
should be the goal that they would be optimizing for? What would be the metric of success? Would it be
2:10:33
happiness? Is it money? Is it positive impact for people who are dreaming of building? 'Cause you went through an interesting
2:10:41
journey. You've achieved a lot of those things, and then you fell out of love with programming a little bit for a time.
2:10:47
- I was just burning too bright for too long.
2:10:53
I, I ran... I started PSPDFKit, s- and ran it for 13 years,
2:11:01
and it was high stress. Um, I had to learn all these things
2:11:08
fast and hard, like how to manage people, how to bring people on, how to deal with customers, how to do...
2:11:14
- So it wasn't just programming stuff, it was people stuff. - The stuff that burned me out was mostly people stuff. I, I don't think burnout
2:11:24
is working too much. Maybe to a degree. Everybody's different. You know, I c- I cannot speak in a- in
2:11:31
absolute terms, but for me, it was much more differences,
2:11:37
With my, my co-founders, conflicts, or, like, really high stress situation with
2:11:44
customers that eventually grinded me down. And then
2:11:50
when... luckily we, we got a really good offer for, like, putting the company
2:11:58
to the next level and I, I already kinda worked two years on making myself obsolete. So at this point I could leave,
2:12:05
and, and then I just... I was sitting in front of the screen and I felt like, you know Austin Powers where they suck the mojo out?
2:12:13
- Yeah. - Uh, I g- I was like, m- m- it was, like, gone. Like, I couldn't... I couldn't get code out anymore. I was just, like, staring
2:12:25
and feeling empty, and then I, I just stopped.
2:12:32
I, I booked, like, a one-way trip to Madrid and, and, and just, like, spent a t- some t-
2:12:38
sometime there. I felt like I had to catch up on life, so I did a whole, a whole bunch of life catching up stuff.
2:12:47
- Did you go through some lows during that period? And you
2:12:53
know, maybe advice on... of how to? - Uh, maybe advice on how to approach life. If you think that, "Oh yeah, work really
2:13:00
hard and then I'll retire," I don't recommend that.
2:13:06
Because the idea of, "Oh yeah, I just enjoy
2:13:13
life now," a- maybe it's appealing, but
2:13:18
right now I enjoy life, the most I've ever enjoyed life. Because if you wake up
2:13:26
in the morning and you have nothing to look forward to, you have no real challenge,
2:13:33
that gets very boring, very fast. And then when, when you're bored, you're gonna look
2:13:41
for other places how to stimulate yourself, and then maybe, maybe that's
2:13:46
drugs, you know? But that eventually also get boring and you look for more, and that
2:13:54
will lead you down a very dark path. - But you also showed on the money front, you know, a lot of people in Silicon Valley and the startup
Money and happiness
2:14:00
world, they think, maybe overthink way too much optimized for money. And you've also shown that it's not like you're saying no to
2:14:08
money. I mean, I'm sure you take money, but it's not...... the primary objective
2:14:15
of uh, of your life. Can you just speak to that? Your philosophy on money? - When I built my company, money was never the driving force. It felt
2:14:23
more like, like, an affirmation that I did something right. And having money solves a lot of problems. I
2:14:31
also think there, there's diminishing returns the more you have. Um,
2:14:38
like, a cheeseburger is a cheeseburger, and I think if you go too far
2:14:45
into, oh, I do private jet and I only travel luxury, you
2:14:53
disconnect with society. Um, I, I donated quite a
2:15:00
lot. Like, I have a, I have a foundation for
2:15:06
helping people that weren't so lucky. - And disconnecting from society is bad in that on many levels, but
2:15:15
one of them is, like, humans are awesome. It's nice to continuously remember the awesomeness in humans.
2:15:23
- I, I mean, I could afford really nice hotels. The last time I was in San Francisco, I did the, the first time the OG Airbnb experience-
2:15:30
- Yeah, yeah - ... and just booked a room. Mostly because I, I thought, okay, you know, I'm out or I'm sleeping, and
2:15:39
I don't like where all the hotels are, and I wanted a, I wanted a different experience. I think, isn't life all about experiences? Like, if you, if
2:15:49
you tailor your life towards, "I wanna have experiences," it, it reduces the need for, "It needs
2:15:55
to be good or bad." Like, if people only want good experiences, that's not gonna work, but if you optimize for experiences,
2:16:04
if it's good, amazing. If it's bad, amazing, because, like, I learned something, I saw something, did something. I wanted to experience that, and it was
2:16:12
amazing. Like, there was, like, this, this queer DJ in there, and I showed her how to make music with cloud code.
2:16:21
And we, like, immediately bonded and had a great time. - Yeah, there's something about that air- you know, couch surfing, Airbnb experience, the
2:16:28
OG. I'm still to this day. It's awesome. It's humans, and that's why travel is awesome.
2:16:34
- Yeah. - Just experience the variety of, the diversity of human. And when it's shitty, it's good too, man. If it rains and you're soaked and it's all fucked, and planes, the
2:16:42
everything is shit, everything is fucked, it's still awesome. If you're able to open your eyes it's good to be alive.
2:16:49
- Yeah, and anything that creates emotion and feelings is good.
2:16:55
- . - Even... So, so maybe, maybe even the cryptic people are good because they definitely created emotions. I, I don't know if I should go that far.
2:17:02
- No, man. Give them, give them all, give them love. Give them love. Because I do think that online lacks some of the awesomeness of real life.
2:17:13
- Yeah. - That's, that's, it's an open problem of how to solve, how to infuse the online cyber
2:17:20
experience with I don't know,
2:17:25
With the intensity that we humans feel when it's in real life. I don't know. I don't know if that's a solvable problem.
2:17:31
- Well, it's just possible because text is very lossy. - Yeah. - You know, sometimes I wish if I talked to the agent I would...
2:17:39
It should be multi-model so it also understands my emotions. - I mean, it, it might move there. It might move there.
2:17:46
- It will. It will. It totally will. - I mean, I have to ask you, just curious. I, I know you've probably
Acquisition offers from OpenAI and Meta
2:17:53
gotten huge offers from major companies. Can you speak to who you're
2:18:00
considering working with? - Yeah. So, to like explain my thinking a little bit, right,
2:18:12
I did not expect this blowing up so much.
2:18:17
So, there's a lot of doors that opened because of it. There's, like,
2:18:25
I think every VC, every big VC company is in my inbox and tried to get 15 minutes of
2:18:31
me. So, there's, like, this butterfly effect moment. I could just do nothing and continue
2:18:40
and I really like my life. Valid choice. Almost. Like, I considered it when I
2:18:47
delete it, wanted to delete the whole thing. I could create a company.
2:18:58
Been there, done that. Um, there's so many people that push me towards that and, yeah, like, could be amazing.
2:19:07
- Which is to say that you, you would probably raise a lot of money in that. - Yeah. - I don't know, hundreds of millions, billions. I don't know. It could just got unlimited amount of
2:19:15
money. - Yeah. It just doesn't excite me as much because I feel
2:19:21
I did all of that, and it would
2:19:26
take a lot of time away from the things I actually enjoy. Same as when, when I was
2:19:33
CEO, I think I, I learned to do it and I'm not bad at it, and partly I'm good at it.
2:19:41
But yeah, that path doesn't excite me too much, and I also fear it, it would create a natural conflict of interest. Like, what's the most
2:19:49
obvious thing I do? I, I prioritize it. I put, like, a version safe for workplace. And then what do you do? Like, I get a pull request
2:19:57
with a feature like an audit log, but that seems like an enterprise feature,
2:20:05
so now I feel I have a conflict of interest in the open-source version and the closed- source
2:20:13
version.... or change the license to something like FSL, where you cannot actually use it for commercial stuff, would first
2:20:21
be very difficult with all the contributions. And second of all, I- I like the idea that it's free as in beer and not free with conditions. Um,
2:20:33
yeah, there's ways how you, how you keep all of that for free and just, like, still try to make money, but those are very difficult. And
2:20:42
you see there's, like, fewer and fewer companies manage that. Like, even Tailwind, they're, like, used by everyone. Everyone uses Tailwind, right? And
2:20:51
then they had to cut off 75% of the employees because they're not making money because nobody's even going on the website anymore because it's all done by agents.
2:21:00
S- and just relying on donations, yeah, good luck. Like, if a project of my
2:21:06
caliber, if I extrapolate what the typical open-source project would get
2:21:14
it's not a lot. I s- I still lose money on the project because I made the point of supporting every dependency,
2:21:21
except Slack. They are a big company. They can, they can, they can do without me. But all the projects that are done by mostly
2:21:29
individuals so, like, all the, right now, all the sponsorship goes right up to my dependencies. And if there's more, I want to, like,
2:21:40
buy my contributors some merch, you know? - So you're losing money? - Yeah, right now I lose money on this.
2:21:46
- So it's really not sustainable? - Uh, I mean, it's like, I guess something between 10 and 20K a month. Um,
2:21:55
which is fine. I'm sure over time I could get that down. Um, OpenAI is helping out a
2:22:03
little bit with tokens now. And there's other companies that have been generous. But yeah, still losing money on that.
2:22:12
So that's- that's one path I consider, but I'm just not very excited. And then there's all the big labs
2:22:21
that I've been talking to. And from those Meta and OpenAI seem the most interesting.
2:22:32
- Do you lean one way or the other? - Uh, yeah. Um...
2:22:43
Not sure how much I should share there. It's not quite finalized yet. Um,
2:22:52
let's- let's just say, like, on either of these,
2:22:58
my conditions are that the project stays open source. That it... Maybe it's gonna be a model like Chrome and Chromium. Um, I think this
2:23:09
is- this is too important to just give to a company and make it theirs.
2:23:15
It... This is... And we didn't even talk about the whole community part, but, like, the- the thing that I experienced in San Francisco, like
2:23:23
at ClawCon, seeing so many people so inspired, like... And having fun and just, like,
2:23:31
building shit, and, like, having, like, robots in lobster stuff walking around. Like, the... People told me, like, they didn't
2:23:39
experience this level of- of community excitement since, like, the early days of the internet, like 10, 15 years. And there were a
2:23:47
lot of high caliber people there, like... Um,
2:23:52
I was amazed. I also, like, was very sensory overloaded because too many people wanted to do selfies. But I love this. Like, this needs to stay a place where people
2:24:05
can, like, hack and learn. But also, I'm very excited to, like,
2:24:15
make this into a version that I can get to a lot of people because I think this is the year of personal agents, and that's the
2:24:22
future. And the fastest way to do that is teaming up with one of the labs.
2:24:29
And I also, on a personal level, I never worked at a large
2:24:35
company, and I'm intrigued. You know, we talk about experiences. Will I like it? I don't
2:24:41
know. But I want that experience. Uh, I- I'm sure, like, if- if
2:24:49
I- if I announce this, then there will be people like, "Oh, he sold out," blah, blah, blah. But
2:24:57
the project will continue. From everything I talked to so far, I can even have
2:25:04
more resources for that. Like, both s- both of those
2:25:11
companies understand the value that I created something that accelerates our timeline and that got people excited about AI. I mean,
2:25:23
can you imagine? Like, I installed OpenClaw on one of my, I'm sorry, normie friends. I'm sorry, Vahan.
2:25:31
But he's just a... You know? Like, he's- - Normie with love, yeah. For sure. - He- he, like, someone who uses the computer, but
2:25:38
never really... Like, yeah, use some ChatGPT sometimes, but not very technical.
2:25:44
Wouldn't really understand what I built. So, like,
2:25:49
I'll show you, and I- I paid for him the- the 90 buck, 100 buck, I don't know, subscription for Entropic.
2:25:57
And set up everything for him with, like, WSL Windows. - Mm-hmm. - I was also curious, would it actually work on Windows, you know? Was a little
2:26:03
early. And then within a few days, he was hooked. Like, he texted me
2:26:11
about all the things he learned. He built, like, even little tools. He's not a programmer. And then within a few days he upgraded to the
2:26:18
$200 subscription. Or euros, because he's in Austria.... and he was in love with that thing. That,
2:26:26
for me, was like a very early product validation. It's like, I built something that captures people.
2:26:34
And then, a few days later, Entropic blocked him because, based on their rules using the subscription is problematic or whatever.
2:26:48
And he was, like, devastated. And then he signed up for Mini Max for 10 bucks a month and uses that. And I think that's silly in many ways, because
2:27:00
you just got a 200 buck customer. You just made someone hate your company, and we are still so
2:27:08
early. Like, we don't even know what the final form is. Is it gonna be cloud code? Probably not, you know? Like, that
2:27:15
seems very... It seems very short-sighted to lock down your product so much. All the other
2:27:24
companies have been helpful. I- I'm in Slack of, of most of the big labs. Kind of everybody understands that we are still in an
2:27:31
era of exploration, in the area of the radio shows on TV and not,
2:27:40
and not a modern TV show that fully uses the format. - I think, I think you've made a lot of people,
2:27:49
like, see the possibility. And non- Uh, sorry. Non, non-technical people see the possibility of AI, and just fall in love with this idea, and
2:27:56
enjoy interacting with AI. And that's a bea- That's a really beautiful thing. I think I also speak for a lot of people in saying,
2:28:05
I think you're one of the, the great people in AI in terms of having a good heart, good vibes, humor, the right spirit. And so
2:28:16
it would, in a sense, this model that you're describing, having open source part, and you being part of uh, also building a
2:28:28
thing inside, additionally, of a large company would be great, because it's great to have good people in those companies.
2:28:36
- Yeah. You know, what also people don't really see is... I made this in three months. I did other things as well. You know, I have a lot of projects. Like,
2:28:44
this is not... Yeah, in January, this was my main focus because I saw the storm coming. But before that, I built a whole bunch of other things.
2:28:51
Um, I have so many ideas. Some should be there, some would be much better fitted when I have access to
2:29:00
the latest toys- Uh, and I, I kind of want to have access to, like, the latest toys.
2:29:06
So this is important, this is cool, this will continue to exist. My, my short-term focus is, like, working through those... Is it two- Is it
2:29:17
3,000 PRs now by now? I don't even know. Like, there's, there's a little bit of backlog. But this is not gonna
2:29:24
be the thing that I'm gonna work until I'm, I'm, I'm 80, you know? This is... This is a window into the future. I'm gonna make this into a cool
2:29:31
product. But yeah, I have like... I have more ideas.
2:29:36
- If you had to pick, is there a company you lean? So Meta, OpenAI, is there one you lean towards going?
2:29:44
- I spend time with both of those. And
2:29:49
it's funny, because a few weeks ago, I didn't consider any of this. Um...
2:29:59
And it's really fucking hard. Like-
2:30:05
- Yeah. - I have some... I know no people at OpenAI. I
2:30:11
love their tech. I think I'm the biggest codex advertisement shill that's unpaid. And it would feel so gratifying to,
2:30:18
like, put a price on all the work I did for free. And
2:30:25
I would love if something happens and those companies get just merged, because it's
2:30:30
like... - Is this the hardest decision you've ever had to do?
2:30:39
- No. You know, I had some breakups in the past that feel like it's the same level. - Relationships, you mean?
2:30:45
- Yeah. - Yeah, yeah, yeah, yeah. - Um, and, and I also know that, in the end, they're both amazing. I cannot go
2:30:52
wrong. This is like- - Right. - This is, like, one of the most prestigious and, and, and, and, and
2:30:57
largest... I mean, not largest, but, like, they're both very cool companies. - Yeah, they both really know scale. So, if you're
2:31:06
thinking about impact, some of the wonderful technologies you've been exploring, how to do it securely, and how to do it at
2:31:13
scale, such that you can have a positive impact on a large number of people. They both understand that.
2:31:19
- You know, both Ned and Mark basically played all week with my product, and sent me
2:31:28
like, "Oh, this is great." Or, "This is shit. Oh, I need to change this." Or, like, funny little anecdotes. And
2:31:38
people using your stuff is kind of like the biggest compliment, and also shows me that, you know, they actually... T- they actually care about it.
2:31:47
And I didn't get the same on the OpenAI side. Um,
2:31:55
I got... I got to see some other stuff that I find really cool, and they lure me with... I cannot tell you the exact number because of NDA, but
2:32:08
you can, you can be creative and, and think of the Cerebras deal and how that would
2:32:15
translate into speed. And it was very intriguing. You know, like, you give me Thor's hammer. Yeah.
2:32:28
... been lured with tokens. So,
2:32:33
yeah. - So, it- it's funny. So, so Marc started tinkering with the thing,
2:32:39
essentially having fun with the thing. - He got... He... Like, when he first... When he first approached me,
2:32:47
I got him in my, in my WhatsApp and he was asking, "Hey, when are we have a
2:32:54
call?" And I'm like, "I don't like calendar entries. Let's just call now." And he was like, "Yeah, give me 10 minutes, I need to finish coding."
2:33:01
- Mm-hmm. - Well, I guess that gives you street cred. It's like, ugh, like, he's still writing code. You know, he's-
2:33:07
- Yeah, he does - ... he didn't drift away in just being a manager, he gets me. That was a good first start. And then I think we had a, like, a
2:33:14
10-minute fight what's better, cloud code or Codex. Like, that's the thing you
2:33:21
first do, like, you casually call- - Yeah, that's awesome - ... someone with, like, the- that owns one of the largest companies in the world and,
2:33:28
and you have a 10 minutes conversation about that. - Yeah, yeah. - Uh, and then I think afterwards he called me eccentric but brilliant. But
2:33:38
I also had some... I had some really, really cool discussion with Sam Altman and
2:33:46
he's, he's very thoughtful
2:33:52
brilliant and
2:34:00
I like him a lot from the, from the little time I had, yeah. I mean, I know it's peop-
2:34:06
some people vilify both of those people. I don't think it's fair.
2:34:15
- I think no matter what the stuff you're building and the kind of human you are
2:34:21
doing stuff at scale is kinda awesome. I'm excited. - I am super pumped. And you know the beauty is if,
2:34:32
if it doesn't work out, I can just do my own thing again. Like, I, I told them, like, I, I don't do this for the money, I don't give a fuck. I-
2:34:42
- Yeah. - I mean, of course, of course it's a nice compliment but I wanna have
2:34:48
fun and have impact, and that's ultimately what
2:34:55
made my decision. - Can I ask you about... we've talked about it quite a bit, but maybe
How OpenClaw works
2:35:02
just zooming out about how OpenCloud works. We talked about different components, I want to ask if there's some interesting stuff we missed.
2:35:11
So, there's the gateway, there's the chat clients, there's the harness there's the agentic loop. You
2:35:20
said somewhere that everybody should im- implement an agent loop at some point in their lives. - Yeah, because it's like the, it's like the Hello World in AI, you know? And
2:35:28
it's actually quite simple. - Yeah. - And it- it's good to understand that
2:35:34
that stuff's not magic. You can, you can easily build it yourself. So,
2:35:40
writing your own little cloud code... I, I even did this at a conference in Paris for people to, like, introduce them to AI. I think it's it's a
2:35:48
fun little practice. Um, and you, you covered a lot. I think
2:35:55
one, one silly idea I had that turned out to be quite cool is
2:36:02
I built this thing with full system access. So it's like, you know, with great power comes great
2:36:08
responsibility. And I was like, "How can I up the stakes a little bit more?" - Yeah, right.
2:36:14
- And I just made a... I made it proactive. So, I added
2:36:20
a prompt. Initially, it was just a prompt, surprise me. Every, like, half an hour, surprise me, you know? And
2:36:28
later on I changed it to be like a little more specific and- ... in the definition of surprise. Um,
2:36:34
but the fact that I made it proactive and that it knows you and that it cares about you, it- it's at least it's
2:36:44
programmed to that, prompted to do that. And that, that is
2:36:50
a follow on, on your current session makes it very interesting because it would just sometimes ask a follow-up question or like, "How's your day?" And I just made a... I made it proactive. So, I added a prompt. Initially, it was just a prompt, surprise me. Every, like, half an hour, surprise me, you know?
2:36:56
And later on I changed it to be like a little more specific and- And that, that is a follow on, on your current session makes it very interesting because it would just sometimes ask a follow-up question or like, "How's your day?" I mean,
2:37:02
again, it's a little creepy or weird or interesting but
2:37:08
Heartbeat very... in the beginning, it's still... today, it doesn't... the model doesn't choose to use it a lot.
2:37:16
- By the way, we're, we're, we're talking about Heartbeat, as you mentioned, the thing that regularly-
2:37:22
- Yeah. Like kicks- - ... Acts. - You just kick off the loop. - Isn't that just a cron job, man?
2:37:27
- Yeah, right, I mean, it's like- - It's the cr- the criticisms that you get are hilarious. - You can, you can deduce any idea to like a
2:37:35
silly... Yeah, it's just, it's just a cron job in the end. I have like cron- separate cron jobs.
2:37:41
- Isn't love just evolutionary biology manifesting itself and isn't... aren't you guys just using each other?
2:37:49
- And then, yeah, and the project is all just glue of a few different dependencies- ... and there's nothing original. Why do people... Well, you know,
2:37:56
isn't Dropbox just FTP with extra steps? - Yeah. - I found it surprising where I had this I had a
2:38:05
shoulder operation a few months ago, so. - Mm-hmm. - And the model rarely used Heartbeat, but then I was in the
2:38:11
hospital, and it knew that I had the operation and it checked up on me. It's like, "Are you okay?" And I
2:38:19
just... It's like, again, apparently, like, if something's significant in the context, that triggered the Heartbeat when it rarely used the Heartbeat.... um,
2:38:30
and it does that sometimes for people, and that just makes it a lot more relatable.
2:38:36
- Uh, let me look this up on Perplexity, how OpenCall works just to see if I'm missing any of the stuff.
2:38:44
Local agent run time, high-level architecture. There's... Oh, we haven't talked much about skills, I suppose. Skill hub, the tools in the skill lair,
2:38:52
but that's definitely a huge component and there's a huge growing set of skills- - You know, you know what I love? That
2:38:59
half a year ago, like everyone was talking about MCPs- - Yeah - ... and I was like, "Screw MCPs. Uh, every MCP would be better as a
2:39:10
CLI." And now this stuff doesn't even have MCP support. I mean, it, it has with
2:39:17
asterisks, but not in the core lair, and nobody's complaining.
2:39:23
- Mm-hmm. - So my approach is if you want to extend the model with more features, you
2:39:32
just build a CLI and the model can call the CLI,
2:39:37
probably gets it wrong, calls the help menu, and then on demand loads
2:39:43
into the context what it needs to use the CLI. It just needs a sentence to know that the CLI exists if it's
2:39:50
something that the model doesn't know about default. And even for a while, I, I didn't really care about skills, but skills are actually perfect for
2:39:58
that because they, they boil down to a single sentence
2:40:04
that explains the skill and then the model loads the skill, and that explains the CLI, and then the model uses the CLI. Some skills are, like raw, but
2:40:13
most of the time, networks. - It's interesting um, I'm asking Perplexity MCP versus skills,
2:40:20
because this kind of requires a hot take that's quite recent, because your general view is MCPs are dead-ish. So MCPs is a more structured
2:40:32
thing. So if you listen to Perplexity here, MCP is what can I reach? So APIs,
2:40:38
database services files via protocol. So a structured protocol of how you communicate with a thing, and then skills is more
2:40:45
how should I work? Procedures, hostile helper scripts and prompts are often written in a kind of semi- structured natural language,
2:40:53
right? And so technically skills could replace MCP if you have a smart enough model.
2:41:00
- I think the main beauty is, is that models are really good at calling Unix commands. So if you just add another
2:41:07
CLI, that's just another Unix command in the end. And MCP is... That has to be added in training. That's
2:41:15
not a very natural thing for the model. It requires a very specific syntax. And the biggest thing, it's not
2:41:22
composable. So imagine if I have a service that gives me better data and gives me the temperature, the average temperature, rain,
2:41:31
wind and all the other stuff, and I get like this huge blob back. As a model, I always have to get the
2:41:38
huge blob back. I have to fill my context with that huge blob and then pick what I want. There's no way for the model to naturally filter
2:41:48
unless I think about it proactively and add a filtering way into my MCP. But if I would build the same as a CLI and
2:41:55
it would give me this huge blob, it could just add a JQ command and filter itself
2:42:00
and then only, only get me what I actually need. Or maybe even compose it into a script to, like do some calculations with the temperature and
2:42:08
only give me the exact output and the mo- and the... you have no context pollution.
2:42:14
Again, you can solve that with like sub- agents and more charades, but it's just like workarounds for something that
2:42:24
might not be the optimal way. There's... It definitely it was, you know, it was good that
2:42:29
we had MCPs because it pushed a lot of companies towards building APIs and now I, I can like look at an MCP and just make it into a CLI.
2:42:37
- Mm-hmm. - Um, but this, this inherent problem that MCPs by default clutter up your
2:42:43
context. Plus the fact that most MCPs are not made good, in
2:42:50
general make it just not a very useful paradigm. There's some exceptions like
2:42:57
Playwright for example that requires state and it's actually useful. That is an acceptable choice.
2:43:05
- So Playwright you use for browser use, which I think is c- already in OpenClaw is quite incredible, right?
2:43:11
- Yeah. - You can basically do everything, most things you can think of using browser use.
2:43:17
- That, that gets into the whole arch of every app is just a very slow API now, if they want or not. And that
2:43:27
through personal agents a lot of apps will disappear. You know, like I had a... I built
2:43:39
a CLI for Twitter. I mean, I- I just
2:43:45
reverse engineered their website and used the internal API, which is not very allowed.
2:43:50
- It's called Bird, short-lived. - It was called Bird, because the bird had to disappear.
2:43:57
- The, the wings were clipped. - All they did is they just made access slower. Yeah,
2:44:03
not tak- you're not actually taking a feature away, but now inst- if, if your agent wants to read a tweet, it actually has to open the browser and
2:44:09
read the tweet. And it will still be able to read the tweet. It will just take longer. It's not like you are making something that was
2:44:17
possible, not possible. No. Now, it's just taking... Now it's just a bit slower. So, so it doesn't really matter if
2:44:27
your service wants to be an API or not. If I can access it in the browser...... easy API. It's a slow API.
2:44:35
- Can you empathize with their situation? Like, what would you do if you were Twitter, if you were X? Because they're basically trying to protect against other large
2:44:43
companies scraping all their data. - Yeah. - But in so doing, they're cutting off like a million different use cases for
2:44:50
smaller developers that actually want to use it for helpful cool stuff. - I think that if you have a very low per day baseline
2:45:01
per account that allows read-only access would solve a lot of problems. There's plenty, plenty of automations where people
2:45:09
create a bookmark and then use OpenClaw to, like, find the bookmark, do research on it, and then send you an email-
2:45:16
- Mm-hmm - ... with, like, more details on it or a summary. That's a cool approach. I also want all my bookmarks somewhere to search. I would still like to have that.
2:45:26
- So, read-only access for the bookmarks you make on X. That seems like an incredible application because a lot of us find a lot of cool stuff on X, we bookmark,
2:45:33
that's the general purpose of X. It's like, holy shit, this is awesome. Oftentimes, you bookmark so many things you never look back at them.
2:45:40
- Yeah. - It would be nice to have tooling that organizes them and allows you to research it further. - Yeah, I mean, and to be frank, I, I mean,
2:45:47
I, I told Twitter proactively that, "Hey, I built this and there's a need." And they've been really nice, but also like,
2:45:57
"Take it down." Fair. Totally fair. But I hope that
2:46:03
this woke up the team a little bit that there's a need. And if all you do
2:46:09
is making it slower, you're just reducing access to your platform. I'm sure there's a better way. I also, I'm very much
AI slop
2:46:19
against any automation on Twitter. If you tweet at me with AI, I will block you. No first strike. As
2:46:27
soon as it smells like AI, and AI still has a smell. - Mm-hmm. - Especially on tweets. It's very hard
2:46:34
to tweet in a way that does look completely human. - Mm-hmm. - And then I block. Like, I have a zero tolerance policy on that. And
2:46:44
I think it would be very helpful if they, if, like, tweets done via API would be marked.
2:46:53
Maybe there's some special cases where... But, and there should be, there should be a very easy way for agents to get their own
2:47:01
Twitter account. Um... - Mm-hmm.
2:47:07
- We, we need to rethink social platforms a little bit if, if, if we, we, we go towards a future where everyone has their agent and agents maybe have their own
2:47:16
Instagram profiles or Twitter accounts, so I can, like, do stuff on my behalf. I think it should
2:47:23
very clearly be marked that they are doing stuff on my behalf and it's not me. Because content is now so cheap. Eyeballs are the expensive part. And
2:47:36
I find it very triggering when I read something and then I'm like, oh, no, this smells like AI. - Yeah. Like, where, where is this headed in terms of what we value about the human
2:47:47
experience? It feels like we'll, we'll move more and more towards in-person interaction and we'll just communicate. We'll talk to our AI agent
2:47:58
to, to accomplish different tasks, to learn about different things, but we won't value online interaction because there'll be so much
2:48:08
AI slob that smells and so many bots
2:48:14
that it's difficult. - Well, if it's smart, then it shouldn't be difficult to filter. And then
2:48:20
I can look at it if I want to. But yeah, this is, like, a big thing we need to solve right now. E-
2:48:28
especially on this project, I get so many emails that are, let's say nicely, agentically written.
2:48:36
- Yeah. - But I much rather read your broken English than your AI
2:48:43
slob. You know, of course there's a human behind it, and yet they, they prompt it. I'd much rather read your prompt than what came out. Um,
2:48:52
I think we're reaching a point where I value typos again. Like, um...
2:49:00
Like, and I, I mean, it also took me a while to, like, come to the realization. I, on my
2:49:05
blog I experimented with creating a blog post with agents and
2:49:12
ultimately it took me about the same time to, like, steer agent towards something I like. But it missed
2:49:21
the nuances that, how I would write it. You know, you can like, you can steer it towards your style,
2:49:28
but it's not gonna be all your style. So, I, I completely moved away from that. I, I, everything, everything I blog is organic, handwritten
2:49:37
and maybe, maybe I, I, I use AI as a fix my worse typos. But
2:49:47
there's value in the rough parts of an actual human.
2:49:53
- Isn't that awesome? Isn't that beautiful? That now because of AI we value the raw humanity in each of us more.
2:50:02
- I also, I also realized this thing that I, I rave about AI and use it so much for
2:50:08
anything that's code, but I'm allergic if it's stories. - Right. Yeah.
2:50:14
- Also, documentation, still fine with AI. You know, better than nothing. - And for now it's still i- it applies in the mi- in the visual medium
2:50:20
too. It's fascinating how allergic I am to even a little bit of AI slob in in video
2:50:28
and images. It's useful, it's nice if it's like a little component of like- - Or even, even those images. The, like, all these infographics and stuff,
2:50:36
the-... they trigger me so hard. - Yeah. - Like, it immediately makes me think less of your content. And it ... They were
2:50:45
novel for, like, one week and now it just screams slop.
2:50:50
- Yeah. - Even- even if people work hard on it, using
2:50:56
... And I- I have some on my blog post, you know, in the- in the time where I- I explored this new medium. But now, they trigger me as well. It's like, yeah, this
2:51:04
is ... This just screams AI slop. I- - What... I don't know what that is, but I went through that too. I was really excited by the diagrams.
2:51:10
And then I realized, in order to remove from them hallucinations, you actually have to do a huge amount of work. And you're just using it to
2:51:18
draw the better diagrams, great. And then I'm proud of the diagram. I've used them for literally, like, ki- ki- kind of like you said for maybe a couple of weeks. And now I look at
2:51:26
those, and I- I feel like I feel when I look at Comic Sans as a font or- or something like this. It's like, "No, this is-"
2:51:35
- It's a smell. - "... this is fake. It's fraudulent. There's something wrong with it." And it...
2:51:41
- It's a smell. - It's a smell. - It's a smell. - And it's awesome because it re- it reminds you that we know.
2:51:48
There's so much to humans that's amazing and we know that. And we- we know it. We know it when we see it. And so
2:51:57
that gives me a lot of hope, you know? That gives me a lot of hope about the human experience. It's not going to be damaged
2:52:03
by ... It's only going to be empowered as tools by AI. It's not going to be damaged or limited or somehow altered to where it's no longer
2:52:14
human. So ... Uh, I need a bathroom break. Quick pause. You mentioned that a lot of the apps might be
AI agents will replace 80% of apps
2:52:24
basically made obsolete. Do you think agents will just transform the entire app market?
2:52:30
- Yeah. Uh, I noticed that on Discord, that people just said
2:52:38
how their ... like, what they build and what they use it for. And it's like, why do you need MyFitnessPal when the agent already knows where I am?
2:52:48
So, it can assume that I make bad decisions when I'm at, I don't know, Waffle House, what's around here? Or- or briskets in Austin.
2:52:57
- There's no bad decisions around briskets, but yeah. - No, that's the best decision, honestly. Um-
2:53:03
- Your agent should know that. - But it can, like ... It can modify my- my gym workout based
2:53:08
on how well I slept, or if I'm ... if I have stress or not. Like, it has so much more context to make even better
2:53:16
decisions than any of this app even could do. - Mm-hmm. - It could show me UI just as I like. Why do I still need an
2:53:25
app to do that? Why do I have to ... Why should I pay another subscription for something that the agent can just do now? And
2:53:34
why do I need my- my Eight Sleep app to control my bed when I can tell the a- ... tell the agent to ... You know, the agent already
2:53:41
knows where I am, so he can, like, turn off what I don't use. - Mm-hmm.
2:53:47
- And I think that will ... that will translate into a whole category of apps that are no longer
2:53:54
... I will just naturally stop using because my agent can just do it better.
2:54:00
- I think you said somewhere that it might kill off 80% of apps. - Yeah.
2:54:05
- Don't you think that's a gigantic transformative effect on just all software development? So that means it might kill off a lot of software
2:54:13
companies. - Yeah. Um- - It's a scary thing. So, like, do you think about
2:54:19
the impact that has on the economy? On, Just the ripple effects it has to society?
2:54:27
Transforming who builds what tooling. It empowers a lot of
2:54:34
users to get stuff done, to get stuff more efficiently, to get it done cheaper.
2:54:41
- It's also new services that we will need, right? For example, I want my agent to have an allowance. Like,
2:54:50
you solve problems for me, here's like 100 bucks in order to solve problems for me. And if I tell you to order me
2:54:58
food, maybe it uses a service. Maybe it uses something like rent-a-human to, like, just get that done for me.
2:55:06
- Mm-hmm. - I don't actually care. I care about solve my problem. There's space for-
2:55:13
for new companies to solve that well. Maybe don't ... Not all apps disappear. Maybe some transform into being API.
2:55:21
- So, basically, apps that rapidly transform in being agent-facing.
2:55:30
So, there's a real opportunity for, like, Uber Eats, that we just used earlier today. It- it's companies this, of which there's many.
2:55:42
Who gets there fastest to being able to interact with OpenClaw in a way that's
2:55:48
the m- the most natural, the easiest? - Yeah. And also, apps will become API if they want or not. Because
2:55:57
my agent can figure out how to use my phone. I mean, on- on the other side, it's a little more tricky. On Android, that's already
2:56:06
... People already do that. And then we'll just click the Order Uber for Me button for me. Um,
2:56:13
or maybe another service. Or maybe there's- there's a ... there's an API I can call so it's faster. Uh, I think that's a space we're just
2:56:21
beginning to even understand what that means. And I ... Again, I didn't even ... That was not something I thought of. Something that I-
2:56:31
that I discovered as people use this, and it ... We are still so early. But yeah, I think data is very important.
2:56:38
Like, apps that can give me data, but that also can be API. Why do I need a Sonos app anymore when I can ... when my agent can
2:56:45
talk to the Sonos?... Speakers directly. Like my cameras, there's like a crappy app,
2:56:52
but they have, they have an API, so my agent uses the API now. - So it's gonna force a lot of companies to have to shift focus. That's kind
2:57:01
of what the internet did, right? You have to rapidly rethink, reconfigure what you're selling, how you're making money.
2:57:10
- Yeah, and some companies were really not like that. For example, there's no CLI for Google, so I had to like, do... have to do anything myself and
2:57:21
build GAWK. That's like a CLI for Google. And at the... Yeah, at the end
2:57:28
user, they have to give me the emails because otherwise I cannot use their product. If I'm a company and I try
2:57:36
to get Google data, Gmail, there's a whole complicated process, to the point where sometimes
2:57:44
startups acquire startups that went through the process, so they don't- don't have to work with Google for half a year to be certified
2:57:51
to being able to access Gmail. But my agent can access Gmail because I can just connect to it.
2:57:58
It's still crappy because I need to, like, go through Google's developer jungle to get a key, and that's still annoying.
2:58:09
But they cannot prevent me. And worst case, my agent just clicks on the, on the website and gets the data out that way.
2:58:17
- Through browsers? - Yeah. I mean, I, I watch my agent happily click the I'm not a robot button.
2:58:25
And there's this, this whole... That's gonna be... That's gonna be more heated. You see companies like Cloudflare that
2:58:35
try to prevent bot access. And in some ways, that's useful for scraping. But in other ways, if I'm, I'm a
2:58:43
personal user, I want that. You know, sometimes I, I use Codex and I, I read an article about
2:58:52
modern React patterns, and it's like a Medium article. I paste it in and the agent can't read
2:58:59
it because they block it. So then I have to copy-paste the actual text. Or in
2:59:05
the future, I'll learn that maybe I don't click on Medium because it's annoying, and I use other websites that actually are agent friendly. So, uh-
2:59:13
- There's gonna be a lot of powerful, rich companies fighting back. So it's really intere- You're at the center, you're the catalyst, the leader,
2:59:23
and happen to be at the center of this kind of revolution where it's get- gonna completely change how we interact with services with, with
2:59:31
web. And so, like, there's companies at Google that are gonna push back. I mean, there's every major companies you could think of is gonna push
2:59:39
back. - Even... Yeah, even search. Um, I now use, I think Perplexity or Brave
2:59:47
as providers because Google really doesn't make it easy to use Google without Google. I'm not sure if that's the right strategy, but I'm not
2:59:55
Google. - Yeah, there's a, there's a nice balance from a big company perspective 'cause if you
3:00:02
push back too much for too long, you become Blockbuster and you lose everything to the Netflixes of the world. But some pushback is probably good during a
3:00:09
revolution to see. - Yeah. But you see that, that... Like, this is something that the people want. - Right.
3:00:14
- So- - Yes. - If I'm on the go, I don't wanna open a calendar app. I just... I wanna tell my agent,
3:00:22
"Hey, remind me about this dinner tomorrow night," and maybe invite two of my friends and then maybe send a what- send a WhatsApp message to my
3:00:29
friend. And I don't need... I don't want or need to open apps for that. I think that
3:00:36
we passed that age, and now everything is, like, much more connected and, and fluid if those companies want it or
3:00:44
not. And I think, well, the right companies will find
3:00:49
ways to jump on the train, and other companies will perish.
3:00:55
- You got to listen to what the people want. We talked about programming quite a bit, and a lot of folks
Will AI replace programmers?
3:01:01
that are developers are really worried about their jobs, about their... About the future of programming. Do you think AI replaces
3:01:09
programmers completely? Human programmers? - I mean, we're definitely going in that direction. Programming is just
3:01:16
a part of building products. So maybe, maybe AI does replace programmers
3:01:24
eventually. But there's so much more to that art. Like,
3:01:30
what do you actually wanna build? How should it feel? How's the
3:01:36
architecture? I don't think agents will replace all of that. Yeah, like, just the, the actual art of programming,
3:01:44
it will, it will stay there, but it's, it's gonna be like
3:01:49
knitting. You know? Like, people do that because they like it, not because it makes any sense. So the... I read this article this morning
3:01:59
about someone that it's okay to mourn our craft. And I can... A part of me very strongly resonates with that because
3:02:07
in my past I, I spent a lot of time tinkering, just being really deep in the flow and just, like,
3:02:15
cranking out code and, like, finding really beautiful solutions. And yes, in a way it's, it's sad because that will go away.
3:02:28
And I also get a lot of joy out of just writing code and being really deep in my thoughts and forgetting
3:02:38
time and space and just being in this beautiful state of flow. But you can get the same state of
3:02:46
flow... I get a similar state of flow by working with agents and building and thinking really hard about problems. It is different-...
3:02:55
but... And it's okay to mourn it, but, uh, I mean, that's not something we can fight. Like, there
3:03:03
is... the world for a long time had a... there was a lack of intelligence, if you s- if you see it like
3:03:10
that, of people building things, and that's why salaries of software developers reached stupidly high amounts
3:03:23
and then will go away. There will still be a lot of demand for people that understand how to build things. It's just that all this
3:03:34
tokenized intelligence enables people to do a lot more, a lot
3:03:42
faster. And it will be even more... even faster and even more because those things are continuously improving.
3:03:49
We had similar things when... I mean, it's probably not a perfect analogy, but when we created the steam engine, and they
3:03:56
built all these factories and replaced a lot of manual labor, and then people revolted and broke the machines. Um,
3:04:06
I- I can relate that if you very deeply
3:04:11
identify that you are a programmer, that it's scary and that it's threatening because
3:04:20
what you like and what you're really good at is now being done by
3:04:27
a soulless or not entity. But I don't think you're just a programmer. That's a very limiting
3:04:35
view of your craft. You are, you are still a builder. - Yeah, there's a couple of things I want to say. So one is, I never... As you're
3:04:43
articulating this beautifully, I no- I'm realizing I never thought I would...
3:04:49
the thing I love doing would be the thing that gets replaced. You hear these stories about these, like you
3:04:55
said, with the steam engine. I've, I've spent so many, I don't know, maybe thousands of hours
3:05:03
poring over code and putting my heart and soul and, like, and just, like, some of my most painful and happiest
3:05:10
moments were alone behind... I, I was an Emacs person for a long time. Man, Emacs.
3:05:17
And, and then there's an identity and there's meaning, and there's... Like, when I walk about the world, I don't say it out loud, but
3:05:25
I think of myself as a programmer. And to have that in a matter of months... I mean, like you mentioned, April to
3:05:32
November, it really is a leap that happened, a shift that's happening.
3:05:39
To have that completely replaced is is painful. It's, it's truly painful. But I also think
3:05:47
programmers, builders more broadly, but what is, what is the act of programming? I, I think
3:05:55
programmers are generally best equipped at this moment in history
3:06:00
to learn the language, to empathize with agents, to learn the language of agents. To
3:06:08
feel the CLI. - Yeah. - Like, like to understand what is the thing you need, you the agent, need to
3:06:19
do this task the best? - I think at some point it's just gonna be called coding again, and it's just gonna be the new
3:06:24
normal. - Yeah. - And yet, while I don't write the code, I very much feel like
3:06:30
I'm in the driver's seat and I am, I am writing the code, you know? It's just-
3:06:37
- You'll still be a programmer. It's just the activity of a programmer is, is different. - Yeah, and because on X, the bubble, I mean, is mostly positive. On, on Mastodon and
3:06:47
Bluesky, I don't... I also use it less because oftentimes I got attacked for my blog posts. And
3:06:56
I, I had stronger reactions in the past, now I can sympathize with those people more 'cause, in a way I get it. It... In a way, I also don't get it because
3:07:06
it's very unfair to grab onto the person that you see right now and unload all your fear and hate.
3:07:15
It's gonna be a change and it's gonna be challenging, but it's also... I don't know. I find it incredibly fun and, and, and gratifying. And
3:07:25
I can, I can use the new time to focus on much more details. I think the level of expectation of what we
3:07:33
build is also rising because it's just now... The default is now
3:07:39
so much easier, so software is changing in many ways. There's gonna be a lot
3:07:46
more. And then you have all these people that are screaming, "Oh yeah, but what about the water?" You
3:07:53
know? Like, I did a conference in Italy about the, the state of AI, and
3:08:00
m- my whole motivation was to push people away from, don't see yourself as an iOS developer anymore. You're now a builder, and
3:08:09
you can use your skills in many more ways. Also because apps are slowly going away. People didn't like that. Like
3:08:16
a lot of people didn't like what I had to say. And I don't think I was hyperbole, I was just like, "This is how I see the future." Maybe this is
3:08:24
not how it's going to be, but I'm pretty sure a version of that will happen.
3:08:30
And the first question I got was, "Yeah, but what about the insane water use on data centers?" But then you actually sit down and do the
3:08:38
maths, and then for most people if you just skip one burger per month, that
3:08:44
compensates the, the CO2 output, or, like, the water use in equivalent of tokens. I
3:08:52
mean, the maths is, is... the maths is tricky, and it depends if you add pre-training, then maybe
3:08:58
it's more than just one patty.... but it's not off by a factor of 100, you know? So, so the... or like golf is still using way
3:09:09
more water than all data centers together. So are you also hating people that play golf? Those people grab on anything that they
3:09:17
think is bad about AI without seeing the potential things that might be good about AI.
3:09:23
- Mm-hmm. - And I'm not saying everything's good. It's certainly gonna be a very transformative technology for our society.
3:09:32
- There's to steel man the, the criticism in general, I do wanna say in my experience with Silicon
3:09:39
Valley there's a bit of a bubble in the sense that
3:09:46
there's a kind of excitement and an over- focus about
3:09:51
the positive that the technology can bring. - Yeah. - And... which is great. It's great to focus on... N- not to,
3:09:59
not to be paralyzed by fear and fear- mongering and so on, but there's also within that excitement, and within everybody talking just to
3:10:07
each other, there's a dismissal of the basic human experience across the United States and the Midwest, across the world.
3:10:16
Including the programmers we mentioned, including all the people that are gonna lose their jobs, including the s- the measurable pain and suffering that happens at
3:10:23
the short-term scale when there's change of any kind. Especially large-scale transformative change that we're about to face
3:10:31
if what we're talking about will materialize. And so to ha- having a bit of that humility and awareness
3:10:39
about the tools you're building, they're going to cause pain. They will long term hopefully bring about a better world,
3:10:47
and even more opportunities- - Yeah - ... and even more awesomeness. But having that kind of like quiet moment
3:10:56
often of, of respect for the pain that is going to be felt. And so not, not enough of that is, I think, done,
3:11:04
so it's, it's good to have a bit of that. - And then I also have to put against some of the
3:11:11
emails I got where people told me they have a small business, and they've been struggling. And, and OpenClaw helped them automate a few of the
3:11:19
tedious tasks from, from collecting invoices to like answering customer emails
3:11:26
that then freed them up and like cost them a bit more joy in their life. - Mm-hmm.
3:11:31
- Or, or some emails where they told me that OpenClaw helped their disabled daughter. That she's now
3:11:38
empowered and feels she can do much more than before. Which is amazing, right? Because
3:11:44
you could, you could do that before as well. The technology was there. I didn't, I didn't invent a whole new thing, but I made it a
3:11:52
lot easier and more accessible, and that did show people the possibilities that they previously wouldn't see.
3:12:00
And now they apply it for good. - Mm-hmm. - Or like also the fact that, yes, I, I, I suggest the, the, the latest and
3:12:09
best models, but you can totally run this on free models. You can run this locally. You can run this on, on, on Keyme or other,
3:12:17
other, other models that are way more accessible price-wise,
3:12:23
and still have a, a very powerful system that might otherwise not be possible. Because other things like, I don't know, Entropik's CoWork
3:12:32
is locked in into their space, so it's not all black and white. There's... I got a lot of
3:12:39
emails that were heartwarming and amazing. And, and I don't know, it just made me really happy.
3:12:48
- Yeah, there's a lot... It has brought joy into a lot of people's lives. Not just, not just programmers. Like a lot of people's lives. It's, it's,
3:12:56
it's beautiful to see. What gives you hope about this whole thing we have going on
Future of OpenClaw community
3:13:02
with human civilization? - I mean, I inspired so many people. There's like... there's this whole
3:13:09
builder vibe again. People are now using AI in a more playful way
3:13:17
and are discovering what it can do and how it can like help them in their life.
3:13:24
And creating new
3:13:31
places that are just sprawling of creativity. I don't know. Like, there's like ClawCoin in Vienna. There's like 500
3:13:37
people. And there's such a high percentage of people that uh, want to present, which is to me really surprising, because u-
3:13:45
usually it's quite hard to find people that want to like talk about what they built. And now it's, there's an
3:13:51
abundance. So that gives me hope that we can,
3:13:58
we can figure shit out. - And it makes it accessible to basically everybody.
3:14:04
- Yeah. - Just imagine all these people building, especially as you make it simpler and simpler, more
3:14:12
secure. It's like anybody who has ideas and can express those ideas in language can
3:14:20
build. That's crazy. - Yeah, that's ultimately power to the people, and one of the beauty,
3:14:28
the beautiful things that come out of AI. Not just, not just a slop generator.
3:14:36
- Well, Mr. Clawfather, I just realized when I said that in the beginning, I violated two trademarks, because there's also the Godfather. I'm
3:14:44
getting sued by everybody. Um, you're a wonderful human being. You've created something really
3:14:51
special, a special community, a special product, a special set of ideas. Plus, the entire... the humor, the good vibes,
3:14:59
the inspiration of all these people building, the excitement
3:15:04
to build. So I'm truly grateful for everything you've been doing and for who you are, and for sitting down
3:15:12
to talk with me today. Thank you, brother. - Thanks for giving me the chance to tell my story.
3:15:17
- Thanks for listening to this conversation with Peter Steinberger. To support this podcast, please check out our sponsors in the description, where you can also find links to contact
3:15:25
me, ask questions, give feedback and so on. And now let me leave you with some words from Voltaire. "With great power comes great
3:15:35
responsibility." Thank you for listening, and hope to see you next time.
