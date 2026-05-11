Intro
0:00
continual learning, long-term reasoning, [music] uh some aspects of memory, these
0:05
are still unsolved. I think all of these are going to be required for AGI. Depending on what your AGI timeline is,
0:11
you know, mine's like 2030 or something like this, then [music] if you start off on a deep tech journey
0:17
today, you have to just consider AGI appearing in the middle of that journey. It's not bad necessarily, but you have
0:24
to take that into account. [music] you have to have an active system uh that can actively solve problems for you to
0:30
get to AGI. So agents are that path and I think we're just getting going.
0:39
Deis Habis has had one of the most unusual careers in tech. He was a chess
Demis Hassabis: From Chess Prodigy to DeepMind
0:46
prodigy as a kid, then designed his first hit video game theme park at 17.
0:53
He then went back to school, got a PhD in cognitive neuroscience, published
0:58
foundational work on how memory and imagination work in the brain, and then in 2010 co-founded Deep Mind with one
1:05
mission, solve intelligence. And I think they've done it. Uh since then, uh his
1:13
lab has gone on to do things most people thought were decades away. Alph Go beat a world champion at Go. Alpha Fold
1:20
cracked protein structure prediction. a 50-year grand challenge in biology and
1:25
they gave it away for free to every scientist on Earth. That work won him
1:30
the Nobel Prize in chemistry last year. Today, Deis leads Google DeepMind where
1:36
he's building Gemini and pushing toward the same goal he set when he was a teenager, artificial general
1:43
intelligence. Please welcome Demis.
What’s Missing Before We Get To AGI?
1:53
So you've been thinking about AGI longer than almost anyone. Uh when you look at the current paradigm, large scale
1:58
pre-training, RLHF chain of thought, how much of the final architecture for AGI
2:04
do you think we already have and what's fundamentally missing right now? Well, first of all, thank thanks Gary
2:10
for that great introduction and it's great to be here. Thanks for for welcoming me here. It's amazing space actually. I'm going have to come back
2:15
here often. very inspiring that you will get to work in in in this space. So the question is I think the the components
2:23
that you just mentioned I'm pretty sure will be part of the final architecture for AGI. So I think they've come such a
2:30
long way now uh and we've proven out so many things about what they can do. U I
2:35
can't see a world in which we will sort of realize in a couple of years this was a dead end. That doesn't make sense to
2:41
me. But there still might be one or two things missing on top of uh of of of
2:46
what you've you know what we already know works. So um continual learning, long-term reasoning, uh some aspects of
2:54
memory, these are still unsolved. Um and how to get the systems to be more
2:59
consistent across the board. Um I think all of these are going to be required for AGI. Now it might be that the
3:05
existing techniques can just scale up to that with some innovation and some incremental innovation. Um but it could
3:12
be that there's still one or two big ideas left uh that need to be cracked. I don't think it's more than one or two if
3:19
there are out there. And I think you know my betting is uh about 50/50 if that's the case. So of course at Deep
3:26
Mind at Google Deep Mind we work on both those things. I guess that's I mean working with a bunch of aentic systems
3:32
the wildest thing to me is to what degree it's the same weights over and over. So this idea of continual learning
Why Memory Is Still Unsolved
3:38
is so interesting because like you know right now we're sort of cobbling it together with duct tape you know these
3:44
dream cycles at night and things like that. Yeah it's pretty cool the dream cycles and we we used to think about this with
3:50
consolidation with episodic memories. Actually that's what I studied for my PhD is how the hippocampus works and
3:56
integrates you know new knowledge gracefully into the existing knowledge
4:01
base. So the brain does that amazingly well. It it it does it you know during sleep uh especially things like REM
4:08
sleep replaying back episodes that that are important so that you can learn from it. In fact our very first Atari program
4:15
DQN one of the ways it was able to master Atari games was by doing experience replay. So we sort of
4:21
borrowed that from from neuroscience and replayed successful trajectories uh many
4:27
times you know that's way back in 2013 now in the in the dark ages of AI it was uh a really important thing and and I
4:33
agree with you we're kind of using duct tape right now so like shove it all in the context window um this but this
4:39
seems a bit unsatisfying right and actually even though uh we're working on
4:44
machines not biological brains and so potentially you could have you know millions or tens of millions context
4:52
window or memory and it can be perfect. There's still a cost to looking it up and finding the right thing uh that
4:59
that's actually relevant for the specific uh decision you've got to make right now. And that's non-trivial that
5:05
cost even if you can potentially store it all. I think there's actually a lot of room for innovation in in areas like
5:11
memory. Yeah, I mean the wild thing is it feels like a million token context ones is actually bigger than I mean it's plenty
5:18
big honestly. you can do so. Well, it's it's it's plenty big for for for most things that it should be used
5:23
for. I mean, if you think about the context window is sort of equivalent to working memory, you know, humans have we
5:29
have like a few digits, you know, it's like a dozen digits maybe, you know, average of seven. We got million or, you
5:36
know, 10 million context windows. But the problem is is that we're trying to store everything in that. You know,
5:42
things that are not important, things that are wrong. is pretty brute force currently and that doesn't seem uh
5:48
right. And then the problem is if you're now trying to try and process live video and you're just going to naively record
5:54
all the tokens then actually a million tokens isn't that much. It's only like 20 minutes. So actually you need more if
6:02
you want something that's going to understand your you know your what's going on in your life over maybe a month
6:07
or two. Deep Mind has historically leaned into reinforcement learning and search uh Alph Go, Alpha Zero, and Muse.
How AlphaGo Shaped Gemini
6:15
Uh how much of that philosophy is actually embedded in how you're building Gemini today? Uh is RL still underrated?
6:23
Yeah, I think potentially it is. It sort of goes in in ES and waves. We know we've worked on agents since the
6:29
beginning of DeepMind. In fact, we al that's what we said we were working on. So all of the Atari work and Alph Go
6:36
most specifically they're agent systems and what we meant by that is systems that are able to you know accomplish
6:42
goals on their own uh and make active decisions and and make plans and so of
6:48
course we were doing it in the domain of games to to to make it tractable uh and
6:53
then doing increasingly complex games things like Starcraft after Alph Go Alpha Star. So um we basically did all
7:00
the games that were out there. Um, and then of course the question is, can you generalize those models to be world
7:06
models or models of language, not just models of simple games or even complex games? And that's what the last few
7:13
years has been about. But really, you can think of a lot of the things we're doing today, all the leading models with
7:19
thinking modes and chain of thought reasoning as aspects of what was sort of pioneered with Alph Go coming back now.
7:26
And I actually think there's a lot of work we did back then that is relevant today and we're sort of relooking at
7:33
some of those old ideas um at scale today in a more general way including
7:38
things like Monte Carlo research and other other ways of doing augmenting the RL uh on top of the the reinforcement
7:45
learning we're ready to do today. And I think a lot of those ideas both from Alph Go and Alpha Zero are really really
7:51
relevant uh to where we are with today's foundation models. And I think uh a lot of that is what we're going to see of
7:57
the advances the next few years. One question I would have like obviously today you need bigger and bigger models
8:04
to be smarter and smarter but then we're also seeing distillation working and then smaller models can be like quite a
Why Smaller Models Are Getting So Powerful
8:11
bit faster. I think you know you guys have incredible flash models that are like n like you're finding that they're
8:16
95% as good as uh the Frontier and at like onetenth the price. Is that right? I think that's
8:23
one of our core strengths is I mean you have to build the biggest models to to to to have uh the frontier capabilities.
8:29
But I think one of our biggest strengths has been uh distilling and packing that power into smaller and smaller models
8:36
very quickly. Obviously we we you know we invented the kind of distillation process and and people like Jeff and
8:42
Oral and and others and we're still world experts in that and we also have a
8:47
huge need to uh do it because we've got to serve the biggest probably AI
8:54
surfaces um there are obviously there's search with AI overviews and AI mode then there's Gemini app and now
9:00
increasingly every single product at Google has you know maps and YouTube and so on has some aspect ect of Gemini or
9:08
Gemini related technology in it and so that's billions of users a dozen more than a dozen billion user products um
9:15
and they have to be served extremely fast extremely efficiently and cheaply and with low latency so that that gives
9:21
us a really important incentive to to make these flash and even smaller models
9:26
flashlight models uh extremely efficient and hopefully that ends up then being really useful for many of the workloads
9:32
that all of you use for I'm curious about how much smarter these smaller models can actually be. Like are
9:39
there limits to the distillation process? Like could a 50b or 400B model be as smart as like a mythos for today?
9:48
Yeah, I don't I don't see any I don't think we've got to any kind of or at least none of us know yet if we've got
9:53
to any kind of informationational limit. I mean maybe at some point that will be the case where there's just an information density that can't we can't
10:00
get beyond. But I think for now there's that the assumption we make is that you
10:05
know a year later after one of our uh leading you know pro models or frontier
10:10
models goes out half a year later a year later you'll have them in the the really
10:15
tiny almost edge models and you also see some of that goodness in our Gemma models which hopefully you're all
10:20
enjoying our Gemma 4 models which I think are really amazing power for their sizes. So again, that uses a lot of this
10:28
uh these distillation techniques and and the idea of how to make things really efficient in these very small models. So
10:34
I don't really see any limit yet in terms of like some kind of theoretical limit. I think we're still pretty far off of that.
10:39
That's amaz I mean that is really good because uh you know one of the weirder things that we're seeing right now is
10:44
like engineers can do like 500 to a,000 times the amount of work that they were doing like six months ago. I guess I
The 1000x Engineer
10:52
mean the people in this room there are people who are doing about like a thousandx the work that like I Steve
10:59
Yaggi talks about this it's like a thousandx the work that a Google engineer from the 2000s was doing. I
11:04
think it's very exciting. I mean I think the small models have many uses. One is obviously cost but the speed can allow
11:10
you know if you think about coding even or other things you can iterate a lot faster also especially if there's if
11:16
you're collaborating with the system. I think there's a there's a a lot of need
11:21
for having fast systems um that maybe are not quite front tier like you said
11:26
like 95% 90% but that's plenty good enough and actually you gain back more than the 10% on the the iteration speed.
11:33
So and then the other big thing I think is running these things on the edge again for efficiency reasons but also
11:39
for privacy and security reasons too. Um if you think about different devices that you might run these systems on that
11:46
per that you know process very personal information you can also think about robotics as well um you know robots in
11:52
your house I think you're going to want very efficient uh very powerful uh local
11:58
models which maybe are orchestrated you know with some bigger models frontier models that in the in the cloud but you
12:05
only delegate to that in certain circumstances and perhaps you you know you process all of the audio a visual
12:12
feed, let's say, locally, and that stays local. I could imagine uh that would be a very good sort of um end state.
12:18
YC starter school is back. We're hand selecting the most promising builders in the world and flying them out to San
12:25
Francisco for July 25th and 26th to discuss the cutting edge of tech. Apply
12:30
now for a spot. Okay, back to the video. Going back to context and memory models
12:36
currently stateless but you know continue like what would the developer experience even be like for someone
Continual Learning and the Future of Agents
12:41
who's using a continual learning model like you know any idea like how you'd steer it?
12:46
I think it's really interesting. I think that's one of the not having continual learning currently is one of the things
12:52
holding back agents from doing full uh tasks. You know, I think they're really
12:57
useful for aspects of tasks right now. And you can patch them together and do some really cool things, but they don't
13:03
adapt well with the context that you're in. And I think that's the missing piece
13:09
from them being really kind of fire and forget and they'll figure it out themselves. You know, I think they need
13:14
to be able to learn um about the specific context um that you're going to
13:20
put them in. So um I think we have to crack that to get full general
13:25
intelligence. Where are we on reasoning? So models can do really impressive chain of thought now, but they still fail on things a
Why AI Still Fails at Basic Reasoning
13:32
smart undergrad wouldn't. What specifically needs to change and what progress do you expect in reasoning?
13:37
There's a lot of uh innovation left in in thinking paradigms. I would say again I think we're fairly we're doing fairly
13:45
simplistic things, fairly brute force. um one could imagine uh I think there's
13:50
a lot of scope for example in monitoring the chain of thought maybe interjecting midway through a thought process I often
13:57
get the impression with our systems and and our competitor systems that they're almost overthinking they're almost
14:03
getting into sort of loops of things like one thing uh I sometimes like to do is is play chess against Gemini and you
14:10
know it's that all the leading foundation models are pretty poor at games which is quite interesting it's very uh uh uh cool to kind of look at
14:18
the thinking traces because obviously these are can be a well understood you know I can tell quite quickly if it's
14:24
going off on a tangent and it's very sort of provable what the what the the thinking is doing whether it's useful or
14:30
not and so what we see is that you know sometimes it will it will it will consider a move it will realize it's a
14:37
blunder but it can't find anything better so it kind of goes back to that move and does it anyway so you know you
14:43
just shouldn't be seeing that uh happening in a in a very precise reasoning system. So there's just sort
14:49
of huge gaps I think still, but it may only be one or two tweaks that are required to fix those kind of gaps just
14:55
to be clear. But I think that's pretty pretty obvious there are there. And that's why you get this kind of jagged
15:01
intelligence. You know, on the one hand, it can solve gold medal problems in IMO,
15:07
which is super hard, but on the other hand, as we've all seen, it can still make basic elementary maths errors if
15:13
you pose the question in a certain way, right? So, or elementary reasoning errors. So, there's just something to me
15:19
about the almost an introspection about its own thought process that I feel like there's there's something maybe missing
15:26
there. Agents are really big. Some would say they're hyped. I personally think they're just getting started. [laughter]
15:31
It's totally insane. What does DeepMind's internal research tell you about where agent capabilities actually
Are Agents Overhyped or Just Getting Started?
15:37
are right now versus, you know, sort of the hype out there? I think we are I agree with you. I think we're just at the beginning. You have to
15:43
have an active system uh that can actively solve problems for you to get to AGI. That was always clear to us. So
15:50
agents are that path and I think we're just getting going. I think all of us are getting used to how do we best work
15:56
and you're leading the way in a lot of this in your own personal experiments. I'm sure many of you are doing that. I think how do you incorporate it into
16:02
your uh workflow in a way that isn't just um sort of a nice to have but
16:08
actually starting to do fundamental things. My impression is at the moment we're all exper, you know, we're experimenting on lots of things, but
16:14
we're only in the maybe the last couple of months starting to find the really valuable places and the technology is
16:20
probably only getting good enough for that to be the case, right? That it's not a kind of toy um nice demonstration,
16:26
but actually really adding value to your to your um to your time and efficiency. Um, I often wonder I see a lot of people
16:33
working on uh like setting off, you know, dozens of agents for like 40 hours, but I'm not sure I've seen the
16:41
output that yet of that quite justify that level of input going in, but I I
16:46
think it will come. So, I still think we're in the experimentation phase. We haven't seen a AAA game that tops the
16:52
app store charts that was sort of vibe coded yet, right? I've seen and I've programmed and I'm sure many we've all
16:59
done little nice demonstrations and it's like amazing I can do a prototype of theme park in half an hour now which
17:05
took me 6 months back when I was 17. It's kind of mind-blowing and I and I wish I I got this feeling if I spent the
17:11
whole summer working on it you could make something really incredible but it still needs craft and you know human
17:18
sort of soul into it and taste. I think that's that's something that can that's you have to make sure you still bring
17:25
that to to whatever it is you're building. And I think it still shows like it's not quite there yet because
17:30
why haven't we seen a kid making a hit game that's that sells 10 million
17:35
copies, right? That should be possible given the effort that's gone in. So something's still somehow missing. Maybe
17:41
it's to do with the process or maybe it's to do with the tools. I'm not quite sure. You all will probably know better than me because I'm sure you're all
17:47
experimenting on that. I haven't seen the result yet which I would expect once
17:52
this is really delivering that full value which I think will come in the next 6 to 12 months.
17:57
Some of it is like how much of it will be autonomous versus I mean I don't think we'd see autonomous first. we
18:02
would actually probably see people in this room operating at a 1000x and then that's what you should see first and
18:09
then many of you you know there'll be like games companies or you know other
18:14
types of companies that have built some kind of bestselling app bestselling game using uh these tools that's what you
18:21
should see first and then more of that will get automated I mean some of it is like there's a human in there and then the human
18:28
doesn't want to say that the the the agents did it yet I I think part of it might be though
Can AI Become Truly Creative?
18:33
that um this if we want to discuss like creativity what I often say about that
18:39
is like if we look at the things we've done like Alph Go so obviously very famously you'll all know about the move
18:45
37 in game 2 and for me I was waiting for a moment like that to start the science projects like Alpha Fold. So we
18:51
started Alpha Fold like the day we got back from soul which is 10 years ago now that I'm going to Korea after this to
18:57
celebrate the 10year anniversary of Alph Go. But it's not enough to come up with MOU 37. Like that's pretty cool, very
19:05
useful. Um, but can it invent go? That's what I I want a system that can invent
19:10
go if you give it a highle description, you know, like a game you can learn the rules of in 5 minutes, but it takes many
19:18
lifetimes to master. It's beautiful aesthetically. Um, but you can play it in a few hours in an afternoon. So, you
19:26
know, maybe you could imagine that would be the highle description I would give. And then I'd want the the return the
19:31
thing I get back is go, right? And um clearly today's systems I think can't do
19:37
that. So the question is why um and I think there's something still missing there.
19:42
Well, someone in this room might might make it. Then the answer would be there's nothing missing. It just was the way we were
19:47
using the systems. And that might actually be the answer. It might be that our today's systems are capable of that
19:53
with a brilliant enough creative person using it and providing that impetus that
19:59
the soul of the project and being able to probably being offay enough with the tools to like
20:06
almost be at one with the tools. I could imagine that would be happening if you experimented with the tools all day and all night like probably many of you are
20:12
doing that and you combine that with proper deep creativity um something you
20:18
know more incredible could be done. Switching gears to open source I mean or open open and open open weights I mean
20:23
the recent release of Gemma you're making highly capable open and accessible ones that can actually run
Open Models, Gemma, and Local AI
20:30
locally. What do you think that means for you will AI be something that is in the hands of the users instead of
20:37
primarily in the cloud and does that change who gets to you know build with these models? We're huge proponents of
20:44
in general of open source and open science and you mentioned Alpha Fold at the beginning. You know, we put that all
20:50
out there for free and all of our science work even still today we publish in, you know, the big journals. We
20:56
wanted to create uh worldleading models for their their sizes, right? And so that's what hopefully we've done with
21:02
Gemma and we're, you know, very committed to that path and hopefully you all experiment and build and enjoy using
21:08
Gemma. I think it's been like 40 million downloads now and uh just in, you know, two and a half weeks. So, we're really
21:14
excited about that. And I also think it's important for there to be Western stacks on open source. You know,
21:20
obviously a lot of the Chinese models are excellent and and they're currently were leading in open source and we think
21:25
Gemma is very competitive for its sizes uh uh in in all those respects. And for
21:30
us I mean there is a question of resources, talent and compute like nobody has enough spare compute to just
21:37
make two you know uh frontier models at maximum size right with different
21:42
attributes. So that's pretty difficult but also what for now what we we've decided is that our edge models the
21:49
things we want to use for Android and glasses and robotics um it's best that they're open models because they're
21:56
vulnerable anyway on the surf once you put them out on the surfaces. So they might as well be actually fully open,
22:02
right? So we've sort of made a decision to kind of unify that uh at the at the
22:07
kind of we call it nano size level. So that actually works for us uh
22:13
strategically as well. Um and you know we hope as many people as possible build on it and of course we'll be building on
22:18
that too. Earlier uh before we came on I got to show you a demo of uh my version of Samantha from her which is uh harrowing
Why Gemini Was Built Multimodal
22:26
for me to try to demo something to you. very um and it worked which is amazing. Gemini was built multimodal and I spent
22:33
a lot of time with a bunch of the models and I mean the depth of the context and the tool use with speech directly to
22:40
model like there's nothing like bar none like the best one actually. Yeah. Yeah. I think I think that's a
22:46
sort of still a slightly underappreciated aspect of of of the Gemini series is we we started it being
22:52
multimodal from the start. that made it a little bit more difficult actually to begin with because than just focusing on
22:58
text for example but we believe we're going to gain from that in the long run and I think we're seeing that now for uh
23:05
uh things like world model building so stuff like Genie that we build on top of
23:10
Gemini I think it's going to be really important for things like robotics so this is why Gemini robotics which many
23:16
of you probably played around with I think it's going to be built on multimodal foundation models the robotics models and we think we have a
23:23
sort of competitive of advantage with with Gemini being so strong at multimodal we're using it increasingly
23:29
in things like Whimo um but also if you imagine devices and assistants uh that
23:35
digital assistants that come with you into the real world you know maybe on your phone or glasses or some other device um it needs to understand the
23:43
physical world around you and intuitive physics uh and and the and the physical
23:48
context you're in and that's what our systems are extremely good at and I think you found that's why you've enjoyed using it in your setup. We're
23:55
planning to continue on that and I think we're far and away the strongest models on on those types of uh problems.
24:01
So the cost of inference is uh dropping fast. What becomes possible when inference is essentially free and how
24:07
does that change what your team is actually optimizing for? Yeah, I'm not sure inference will ever
What Happens When Inference Gets Cheap?
24:14
be essentially free. I mean there's sort of Jevron's paradox and other things about like I think we'll just end up
24:19
using all of us will end up using whatever we can get our hands on and you could imagine uh millions of agents
24:28
swarms of agents working together on things. That's one way to use the inference or you could imagine uh single
24:34
agents or groups smaller groups of agents thinking for in multiple directions and then ensembling that. So
24:40
we're experimenting with all these things probably many of you are. All of that will use up any inference I think
24:46
that's available. I mean one day maybe it can be almost cost zero. Certainly the energy if we solve fusion or you
24:53
know superconductors or you know optimal batteries or some set of those things which I think we will do with material
24:59
science energy costs will be essentially zero but there'll still be the physical creation of the chips and other things.
25:05
There some there'll be some bottleneck um at least for the next few decades I
25:10
think. And so if that's the case, they'll still be rationing on the inference side. They'll still have to
25:16
use it, I think, efficiently. Yeah. Well, luckily the smaller models are getting smarter and smarter, which is fantastic. Uh we got a lot of bio and
From AlphaFold to the Virtual Cells
25:24
biotech founders in the audience. I can see a few. Alpha 3 took us beyond proteins to a broad spectrum of
25:29
biomolelecules. Uh how close are we to modeling full cellular systems or is
25:34
that still a fundamentally harder problem in a class of its own? Well, Isomorphic Labs, which we spun out from
25:41
from from from Deep Mind after we did Alpha Fold 2, um it's it's which is
25:46
going amazingly well. It's it's it's trying to build out uh not just AlphaFold, it's just one piece of the
25:52
drug discovery process, uh as many of you know, but we're trying to do the the adjacent biochemistry and chemistry to
25:59
design the right compounds with the right properties and so on. We'll have some big announcements, you know, very soon to talk about on on that front. I
26:06
think that's going really well. Eventually, you want a whole virtual cell. So, I've talked about this in many
26:11
of my science talks about a full working simulation of a cell that you can perturb and then the you know the the
26:19
outputs of that would be close enough to experimental that it's useful, right? You could skip out a lot of the the
26:25
search steps and generate lots of synthetic data to train other models that then would predict things about,
26:31
you know, real cells. And um I think we're about 10 years away probably from something like a virtual cell like a
26:38
full virtual cell. You know we're starting out this is we're working on the deep mind side science side on a you
26:44
know virtual nucleus cell nucleus first because it's relatively self-contained. The trick with all of these things is
26:50
can you pick a slice of the complexity? you know, eventually want to want to model a human body, but can you model it
26:56
down to the right level of detail and what slice can you uh take out of it
27:02
that will be self-contained enough? You can kind of model and approximate the inputs and outputs into that
27:08
self-contained system and then just focus on the self-contained system. So, a nucleus is quite interesting from that
27:14
perspective. Um, then the other issue is just there's not enough data yet. So, you need data. uh and I talked to
27:21
various you know top scientists about who work on electron microscopes and other imaging things. If we could image
27:28
a live cell without killing the cell that would be um gamechanging obviously
27:33
because then you could convert it into a vision problem which we would know how to solve right but at the moment there
27:38
are at least I I'm not aware of any techniques that can give you a kind of you know nanometer resolution uh but
27:45
without destroying but in you know in a live dynamic cell so you can see all the
27:50
interactions right you can take static images at that resolution obviously um really detailed now and that's quite
27:56
exciting setting but it's not enough uh to turn it just into uh just into a
28:01
complex vision problem. So that's one way it could be solved. So it could be a hardware driven datadriven solution or
28:08
it could be that we build better uh learned simulators of uh these dynamical
28:14
systems. So that's that's the more modeling way of solving it. Uh you've been looking at all kinds of science not just bio. Uh there's
28:21
material science, drug discovery, climate modeling, mathematics. If you had to rank which scientific domain will
AI as the Ultimate Tool for Science
28:27
transform the most dramatically the next five years, what's in your list? Well, they're all so exciting and that's why I mean that that for me has been my
28:34
main passion and always the reason why I've worked on AI for my whole career for 30 plus years now is to use AI as
28:41
the ultimate tool. I always thought AI would be the ultimate tool for science and to envir advance scientific
28:47
understanding, scientific discovery and things like medicine and just our understanding of the universe around us.
28:53
So actually when you mentioned our original way we used to articulate our mission statement which is still uh the way we think about it is there was two
28:59
steps to it. One was step one was solve intelligence i.e build AGI and then step two was use it to solve everything else.
29:06
We had to change that a bit over time because people were like do you really mean solve everything else and we did
29:11
mean that and I think people are sort of understanding what that means today but specifically I was meaning solve other
29:17
what I call root node problems in science. So areas of science that would unlock whole new branches or avenues of
29:23
discovery and Alphafold is the prototypical example of what we want to do. So over three million researchers
29:29
around the world pretty much every biology researcher in the world uh uses AlphaFold now. And I was told by some of
29:35
my you know pharma executive friends that you know almost every drug
29:40
discovered from now on will have used AlphaFold at some point in it in the drug discovery process. So that's
29:47
something we're very proud of and it's the sort of impact that we hope to have with with AI, but I do think it's just
29:52
the beginning. Uh I I don't really see any area of science or engineering that this won't be able to help be helpful
29:58
with. And the ones you mentioned, I think we're at almost like an AlphaFold one moment. So it's we've got very
30:04
promising results, but it's not quite solved the the grand challenge yet in that domain. But I think we're going to
30:10
have a lot to talk about in the next couple years on all those areas. You mentioned materials which I I think is
30:15
very exciting all the way to mathematics in in science. I mean it feels prometheian. It's like here is this
30:22
capability and you know I think so I mean of course along with that in including what the the the
30:27
parable of Prometheus we have to also be careful with how we use that and what we use it for and also the misuse uh that
30:35
can happen with those same tools. A lot of people in this room are trying to build companies applying AI to science. for them. What's the difference
30:41
between a startup that actually advances the frontier in your view versus one that's just wrapping an API around a
Advice for Founders
30:47
foundation model and calling it AI for science? Well, look, I think there's one of the things I would recommend. I'm trying to
30:52
think about and I think you mentioned this to me before. What would I do today myself if I was sitting in your place in
30:58
Y Cominator, you know, looking at things. One thing you have to do is obviously intercept where the AI tech is
31:04
going. So, that's one hard part of it. But I do think there's huge uh scope for combining where AI is going with some
31:12
other deep technology area. I just think that that sweet spot is is whether it's materials or medicine or other really
31:18
hard areas of science. Um I think that those kinds of interdicciplinary teams,
31:24
especially if it involves the world of atoms as well, um there's not going to be a shortcut to that, at least in the
31:30
foreseeable future. Those are areas that are pretty safe from just getting swarmed by whatever the next update is
31:36
to the foundation models. So I think if you're looking for things like that, that's one of the more defensible areas
31:42
I would say. And I've always loved deep tech, so I'm kind of biased towards deep tech things. I think um nothing that's
31:50
really long lasting and worthwhile is easy. And so I'm always being drawn to
31:55
to deep technologies. Obviously AI was like that back in 2010 when we started out, right? It was it was thought to
32:02
just we know we know it doesn't work kind of thing is what I was told by investors and even in academia it was
32:08
considered to be a very niche subject that we sort of tried in the '9s and we know doesn't work but if you you know if
32:15
you have belief and conviction in your idea why it's different this time or what special combination from your
32:21
background that you had ideally you're expert in both those areas both the machine learning and the other area
32:26
you're applying it to or you can create a founding team with that expertise I think there's huge impact to be made
32:32
there and huge value to be built there. That's a really important message. I mean even I mean it's it's easy to
32:38
forget like basically once you've done it, you've done it. But before you've done it, people are a raid against you.
32:43
Oh, sure. I mean, no one believes in it. Which is why I think you got to you've also got to work in things that you're
32:49
genuinely passionate about. Like for me, I would have worked on AI no matter what
32:54
happened. I just decided from a very young age it was the thing that um could
32:59
be the most consequential thing I could think of. It's turned out that way but it might not. Maybe we would have been 50 years too early. And it was also the
33:06
most interesting thing I could think of working on. And so I would still be working on AI today even if we were
33:13
still you know in a little garage somewhere and it still wasn't quite working. I would have still been trying to find maybe I'd have been back in
33:19
academia or something but I would have found some way of of continuing to work on it. So I mean alphaold was like an
33:25
example of a spike that you pursued and it worked. You know what makes the scientific domain ripe for an alphafold
The AlphaFold Breakthrough Pattern
33:31
style breakthrough and is there a pattern a certain objective function? Like the way I I should write this up at some
33:37
point when I have five minutes spare. But the lesson I've learned from all the alpha projects we've done specifically
33:44
alpha go and alpha fold is um I think the techniques we have and the problems I look like to look for are great in if
33:52
this if the situation can be described as massive combinatorial search space. The more massive the better in some
33:58
ways. So no brute force or special case algorithm will will solve it. And that's true of go moves and of you know
34:05
different configurations of proteins far more than the atoms in the universe both of those. And then u you have a clear
34:11
objective function. So you know you could think of it as minimizing the free energy in the proteins or you know the
34:17
winning the game of go. So you need to be you specify your objective function clearly so you can hill climb and then
34:23
um enough data andor a simulator that can generate you uh lots of uh
34:29
indistribution uh uh sim synthetic data. If those things are true then I think um
34:36
with today's methods you can go a long way into tackling and finding the kind of needle in the hay stack that you need
34:42
uh to for the solution that you're trying to look for. And I think of just drug discovery by the way in the same way right there is a compound out there
34:49
that would solve this disease if one could find it if one could only find it right and that wouldn't have any side
34:55
effects and so on and as long as the laws of physics allows it then the only
35:00
question is how do you find it in an efficient way in a tractable way I think we showed for the first time actually
35:06
with alpho that these systems could uh find those kinds of needles in a
35:11
haststack in that case you know the perfect go move I to get a little meta. I mean, we we're talking about humans using these methods
35:18
to create alpha fold, but then there's a meta level, which is humans using AI to
Can AI Make Real Scientific Discoveries?
35:23
explore the space of possible hypothesis. How close are we to AI systems that can do genuine scientific
35:30
reasoning, not just pattern matching on data? I think we're close. Um,
35:35
we're working on these general systems like that like this. We have this system called co-scientist and we have other
35:41
algorithms like alpha evolve that can go a little bit beyond what the basic Gemini will do and obviously all the
35:47
frontier labs are experimenting in this way. I've yet to seen anything so far and we we all tinker with same things
35:53
you know some math problems that are a little bit harder than IMO and so on. I haven't seen anything yet um that is a
36:01
true genuine you know massive discovery. That's my personal opinion. I think it's
36:06
coming. I think it may be related to uh this earlier this thing we discussed
36:11
about creativity and and actually going on beyond the bounds of what's known. So clearly that's just not pattern matching
36:18
at that point because there is no pattern to match to and it's a bit more than extrapolation. It's some kind of
36:23
analogical reasoning and I don't think these systems have that or at least we're not using them in the in the right
36:29
way to do that. So the way I often say that in science is can it come up with a hypothesis that's really interesting,
36:36
not just solve one. When I say just, we're now talking about just like solving the Reedman hypothesis or something. This would be obviously
36:42
amazing or one of the Millennium Prize problems. And maybe we're a couple of years out from doing that. Um, but I'd
36:48
like to solve P equals NP. That's that's my favorite one. But can you but even harder than that would be to come up
36:54
with a new set of of millennium prize problems that were regarded by top mathematicians to be as you know deep
37:01
and meaningful and worthy of lifetime of study and effort to solve. I think
37:07
that's another level harder and uh we don't have um you know I still don't
37:12
think we know how to do that. I don't think it's it's magical though. I do think these systems will be eventually
37:18
be able to do that. Maybe we're missing one or two things. And then the way we would test that is, you know, I sometimes call it my Einstein test,
37:25
which is, you know, can you train a system with the knowledge of CFF of 1901
37:31
and then will it come up with, you know, what Einstein did in 1905, including special relativity, you know, his
37:36
annabolis? Can it can it do that right? Uh, and then I think we could run that test. May
37:43
maybe we should just run that test and keep seeing if that's possible. And once that is then I think we're on the verge
37:49
of these systems being able to invent something new truly novel. So last last question for the people who
37:54
are deeply technical in this room who want to work on something you know even
What to Build Before AGI Arrives
38:00
close to the scale that what you've created with you it's one of the largest AI efforts in the world and you've been
38:06
a pioneer for all these years. So for that I think everyone in this room thanks you and the folks at deep mind
38:11
very very deeply from the bottom of our hearts. Thank you. What's the thing that you know now about building at the
38:16
frontier that you wish you'd known at 25? I think we covered some of it in terms
38:22
of actually you you work out that going after hard problems and deep problems um
38:28
is no more difficult in some ways than than going after a shallower, simpler, more superficial problem. They're just
38:34
differently difficult. There's different things that are hard about each of those things. But I think given life's very
38:40
short and you, you know, you only have so much time and energy, you might as well put your life force into something
38:46
that will really make a a difference if you hadn't done it, if you hadn't been there to push it. So I would just think
38:53
of it through that lens. And then the other thing is if you're if you are and then we talked about deep tech and I
38:59
love interdicciplinary uh work and I think that's going to be even more prevalent in the next few
39:04
years in combinations of fields and uh uh finding the the the connections
39:09
between those fields and it's going to be even easier to do that with AI and then the only other thing I would say is
39:15
if you know if you have your depending on what your AGI timeline is you know mine's like 2030 or something like this
39:21
then if you start off on a deep tech journey today usually that you're talking about
39:27
a 10-year journey for for true deep tech in my opinion. So then now you have to just consider AGI appearing in the
39:35
middle of that journey. So what does that mean? It doesn't it's not bad necessarily but you have to take that
39:40
into account right to will it be able to leverage it? What will the AGI system do
39:45
with it? And it goes a little bit back to what you said earlier about Alpha Fold and general AI systems. So one
39:51
thing I can think see happening is Gemini Claude or one of these general systems making use of alpha fold like
39:58
specialized systems as tools. I don't think we're going to have it just in one giant brain because it will have too
40:04
much regression in if I put all the proteins into you know Gemini that
40:09
wouldn't make sense. We don't need Gemini to do protein folding. Going back to your information efficiency it would
40:14
definitely affect its language skills or something like that right in a bad way. So much better I think is to have really
40:21
good general purpose tool usage models that will then maybe they could even train those specific tools but they
40:27
would be in a separate uh uh system. So I think that's kind of interesting to think through the implications of that
40:33
and then what you might build today also physical things too like what kinds of factories would you build what sorts of
40:39
um you know finance systems and so on. So I just think you need to really take that seriously in in in on in on in on
40:45
in on the one hand is like and imagine what that world would look like and then build something that would be useful if
40:51
that comes in halfway through. Deis Sabus everyone [applause]
