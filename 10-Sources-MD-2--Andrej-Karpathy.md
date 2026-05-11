1. Andrej Karpathy: From Vibe Coding to Agentic Engineering
2. https://www.youtube.com/watch?v=96jN2OCOfLs&list=PLHgX2IExbFotd3lw9AUEt_FqttNRRMBR3&index=2
3. Transcript

Introduction
0:02
We're so excited for our very first
0:03
special guest. He has helped build
0:06
modern AI, then explain modern AI, and
0:10
then occasionally rename modern AI. He
0:14
actually helped co-ound open AAI right
0:16
inside of this office. Was the one who
0:18
actually got Autopilot working at Tesla
0:21
back in the day, and he has a rare gift
0:23
of making the most complex technical
0:26
shifts feel both accessible and
0:28
inevitable.
0:30
You all know him for having coined the
0:31
term vibe coding last year, but just in
0:35
the last few months, he said something
0:36
even more startling. That he's never
0:38
felt more behind as a programmer. That's
0:41
where we're starting today. Thank you,
0:43
Andre, for joining us.
Feeling Behind as a Coder
0:44
Yeah. Hello. Excited to be here and to
0:46
kick us off.
0:47
Okay. So, just a couple months ago, you
0:49
said that you've never felt more behind
0:51
as a programmer. That's startling to
0:53
hear from you of all people. Um, can you
0:55
help us unpack that? Was that feeling
0:57
exhilarating or unsettling?
1:00
Uh yeah, a mixture of both for sure. Uh
1:02
well, first of all, um
1:05
I guess like as many of you, I've been
1:06
using agentic tools like lot code,
1:08
adjacent things, uh for a while, maybe
1:10
over the last year as it came out and it
1:12
was very good at you know chunks of code
1:13
and sometimes it would mess up and you
1:15
have to edit them and it was kind of
1:16
helpful and then I would say December
1:18
was this uh clear point where for me I
1:21
was on a break so I had a bit more time.
1:22
I think many other people were similar
1:24
and uh I just started to notice that
1:26
with the latest models uh the chunks
1:28
just came out fine and then I kept
1:30
asking for more and it just came out
1:31
fine and then I can't remember the last
1:32
time I corrected it and then I was I
1:34
just you know trusted the system more
1:36
and more and then I was vibe coding
1:38
[laughter]
1:39
and uh so it was kind of a I do think
1:42
that it was a very stark transition. I
1:43
think that a lot of people actually I
1:45
tried to I tried to stress this on uh
1:47
Twitter and or X because I think a lot
1:49
of people experienced AI last year as
1:52
ChachiPT adjacent thing. Uh but you
1:54
really had to look again and you had to
1:55
look as of December uh because things
1:58
have changed fundamentally and uh
1:59
especially on this like agentic coherent
2:01
workflow uh that really started to
2:04
actually work. Um, and so I would say
2:07
that um, yeah, it was just that
2:09
realization that really uh, uh, had me
2:12
um, go down their whole rabbit hole of
2:14
just, you know, infinity side projects.
2:16
Uh, my side projects folder is like
2:18
extremely full with lots of random
2:19
things and, uh, just, uh, V coding all
2:21
the time. Uh, so, uh, yeah, that kind of
2:23
happened in December, I would say, and I
2:25
was looking at the repercussions of that
2:26
since.
Software 3.0 Explained
2:28
Um, you've talked a lot about this idea
2:30
of LLMs as a new computer. um that it
2:33
isn't just better software, it's a whole
2:35
new computing paradigm. And um software
2:38
1.0 was explicit rules, software 2.0 was
2:41
learned weights, software 3.0 is this.
2:43
Um if that's actually true, what does a
2:46
team build differently the day they
2:48
actually believe this,
2:50
right? So uh yeah, exactly. So software
2:53
1.0, I'm writing code, software 2.0, I'm
2:56
actually programming by creating data
2:57
sets and training uh training neural
2:59
networks. So the programming is kind of
3:01
like arranging data sets and maybe some
3:02
objectives and neural network
3:03
architectures. And then what happened is
3:05
that basically if you train one of these
3:07
GPT models or LLMs on a sufficiently
3:09
large set of tasks implicit basically um
3:12
implicitly because by training on the
3:14
internet you have to multitask all the
3:15
things that are in the data set. Uh
3:17
these actually become kind of like a
3:18
programmable computer in a certain
3:20
sense. So software 3.0 know is kind of
3:21
about uh you know your programming now
3:24
turns to prompting and what's in the
3:25
context window is your lever over the
3:28
interpreter that is the LLM that is kind
3:30
of like interpreting your context and uh
3:32
performing computation in the dig
3:34
digital information space. So I guess um
3:37
yeah that's kind of the transition and I
3:39
think there's a few examples of that
3:41
really drove it home for me and maybe
3:42
that might be instructive. Uh so for
Agents as the Installer
3:44
example when you when openclaw came out
3:48
when you want to install openclaw you
3:49
would expect that normally this is a
3:50
bash bash script like a shell script. So
3:52
run the shell script to run to install
3:54
open claw. Um but the thing is that in
3:57
order to target lots of different
3:58
platforms and lots of different types of
4:00
computers you might run an open claw.
4:01
This these shell scripts usually balloon
4:03
up and become extremely complex. But the
4:05
thing is you're still stuck in a
4:06
software 1.0 universe of wanting to
4:07
write the code. And actually the open
4:09
claw installation is a is a copy paste
4:12
of a b bunch of text that you're
4:13
supposed to give to your agent. Uh so
4:15
basically it's it's a little skill of uh
4:18
you know copy paste this and give it to
4:19
your agent and it will install open
4:20
claw. And the reason this is a lot more
4:22
powerful is you're working now in the
4:23
software 3.0 paradigm where you don't
4:25
have to precisely spell out you know all
4:27
the individual details of that setup.
4:29
The agent has its own intelligence that
4:30
it packages up and then it kind of like
4:32
follows the instructions and it looks at
4:34
your environment, your computer and it
4:36
kind of like performs intelligent
4:37
actions to make things work and it
4:38
debugs things in the loop and it's just
4:40
like so much more powerful, right? So I
4:42
think that's a very different kind of
4:44
like way of thinking about it is just
4:46
like what is the piece of text to copy
4:47
paste to your agent? That's the
4:48
programming paradigm. Now I think one
Menu Gen vs Raw Prompts
4:50
more maybe uh example that comes to mind
4:52
that is even more extreme than that is
4:54
when I was building um menu genen. So,
4:56
menu genen is this idea where you um you
5:00
come to a restaurant, they give you a
5:01
menu. There's no pictures usually. So, I
5:03
don't know what any of these things are
5:05
uh usually like 30% of the things I have
5:07
no idea what they are, 50%. So, I wanted
5:09
to take a photo of the restaurant menu
5:12
and to get pictures of what those things
5:13
might look like in a generic sense. And
5:16
so I built I've vcoded this app that
5:18
basically lets you upload a photo and it
5:20
does all this stuff and it runs on
5:21
Verscell and uh it basically rerenders
5:24
the menu and it gives you like all the
5:26
items and it gives you a picture that it
5:28
uses an image um you know generator uh
5:31
for to basically OCR all the different
5:33
titles uh use the image generator to get
5:35
pictures of them and then shows it to
5:37
you. And then I saw the software 3.0
5:39
version of this which is which blew my
5:41
mind which is literally just take your
5:43
photo give it to Gemini and say use
5:46
Nanobanana to overlay the the things
5:48
onto the menu. Uh and Nanabanana
5:51
basically returned an image that is
5:52
exactly the picture of the menu that I
5:54
took but it actually put into the pixels
5:56
it rendered the different things in the
5:58
menu and this blew my mind because
6:02
actually all of my menu gen is spirious.
6:04
It's working in the old paradigm that
6:06
app shouldn't exist. uh and uh yeah the
6:09
software 3.0 paradigm is a lot more kind
6:11
of raw. It just um your neural network
6:14
is doing more and more of the work and
6:15
your prompt or context is just the image
6:18
and the output is an image and there's
6:19
no need to have any of the app in
6:21
between. Um so I think that people have
6:24
to kind of like reframe you know not to
6:27
work in existing paradigm of what things
6:30
existed and just think about it as a
6:31
speed up of what exists. It's actually
6:33
like new things are available now. And
6:36
going back to your programming question,
6:37
it's not even I think that's also an
6:38
example of working in the in the old
6:40
mindset because it's not just about
6:41
programming and programming becoming
6:42
faster. This is more general information
6:44
processing that is automatable now. So
6:47
um it's not just even about code. So
6:49
previous code worked over kind of like
6:51
structured data, right? And uh you write
6:53
code over structured data. But like for
6:55
example with my LLM knowledge basis
6:56
project um basically you get LLMs to
6:59
create wikis for your organization or
7:01
for you in person etc. This is not even
7:03
a program. This is not something that
7:04
could exist before because there was no
7:06
there was no code that would create a
7:08
knowledge base based on a bunch of
7:09
facts. But now you can just take these
7:10
documents and uh basically uh recompile
7:14
them in a different way and uh reorder
7:15
them and create something that is uh new
7:17
and interesting uh as a reframing of the
7:19
data. And so these are new things that
7:22
weren't possible. Uh and so I think this
7:24
is uh something that I keep trying to
7:26
get back to as to not only what can we
7:29
do that existed that is faster now but I
7:31
think there's new opportunities of just
7:33
things that couldn't be possible before
7:35
and I almost think that that's more
7:36
exciting.
What’s Obvious by 2026
7:37
I love the menu genen progression and
7:40
dichotomy that you laid out and I think
7:41
even I'm sure many folks here followed
7:43
your own progression of programming from
7:45
last October to early January February
7:48
this year. Um, if you extrapolate that
7:51
further, what is the 2026 equivalent um,
7:54
for building websites in the '9s,
7:56
building mobile apps in the 2010s,
7:59
building SAS um, in the last cloud era,
8:02
what will look completely obvious in
8:04
hindsight that is still mostly unbuilt
8:06
today?
8:08
Um, [clears throat] well, going with the
8:10
example of menu, I guess, uh, so a lot
8:12
of this code shouldn't exist and it's
8:13
just neural network doing most of the
8:15
work. Um I do think that the
8:17
extrapolation looks very weird because
8:19
you could basically imagine
8:21
I don't I yeah so you could imagine
8:23
completely neural computers in a certain
8:25
sense you feed raw videos like imagine a
8:28
device you takes raw videos or audio
8:30
into basically what's a neural net and
8:32
uh uses diffusion to render a UI that is
8:35
kind of like you know unique for that
8:37
moment in a certain sense and um I kind
8:40
of feel like in the early days of
8:42
computing actually people were a little
8:43
bit confused as to whether computers
8:45
would look like calculators or computers
8:46
would look like neural nets and in 50s
8:48
and 60s it was not really obvious which
8:50
way would go and of course we went down
8:52
the calculator path and ended up
8:53
building classical computing and then
8:55
neural nets are currently running
8:56
virtualized on existing computers but
8:58
you could imagine I think that uh a lot
9:00
of this will flip and that the neural
9:01
net becomes kind of like the host
9:02
process and uh the CPUs become kind of
9:05
like the co-processor so we saw the
9:07
diagram of you know intelligence compute
9:09
is going to of neural networks is going
9:10
to take over and become the dominant
9:12
spend of flops so you could imagine
9:14
something really weird and foreign when
9:17
where neural nets are doing most of the
9:18
heavy lifting. They're using tool use as
9:20
this like you know um historical
9:22
appendage for some kinds of like
9:24
deterministic tasks. Uh but what's
9:25
really running the show is these uh
9:27
neural nets that are in a certain way.
9:29
Um so you can imagine something
9:31
extremely foreign as the extrapolation
9:33
but I think we're going to probably get
9:34
there uh sort of piece by piece. Um and
9:36
I don't yeah that that progression is
9:39
TBD I would say.
9:40
[snorts]
Verifiability and Jagged Skills
9:41
I'd like to talk a little bit about um
9:43
uh this concept of verifiability, the
9:45
fact that AI will automate faster and
9:47
more easily domains where the output can
9:49
be verified. Um if that framework is
9:52
right, what work is about to move much
9:54
faster than people realize and what
9:56
professions do we have that people
9:58
actually think are safe but that are
10:00
actually highly verifiable?
10:02
Uh yes. So I I spent uh some time
10:05
writing about verifiability and um
10:07
basically like traditional computers can
10:09
easily automate what you can specify in
10:12
code and uh kind of this latest round of
10:14
LLMs can easily automate what you can uh
10:16
verify in a certain in a certain sense
10:19
because the way this works is that when
10:20
frontier labs are training these LLMs
10:22
these are giant reinforcement learning
10:24
environments. So they are given
10:25
verification rewards and then because of
10:28
the way that these models are trained
10:29
they end up basically uh progressing and
10:32
creating these like jagged entities that
10:34
really peak in capability in kind of
10:36
like verifiable domains like math and
10:37
code and adjacent and kind of like
10:39
stagnate and are a little bit um you
10:41
know rough around the edges when uh
10:43
things are not kind of like in that in
10:44
that space. So I think the reason I
10:46
wrote about verifiability is I'm trying
10:47
to understand why these things are so
10:49
jagged. Um and some of it has to do with
10:52
how the labs train the models but I
10:54
think some of it also has to do with um
10:55
the focus of the labs and what they
10:57
happen to put into the data
10:58
distribution. Uh because some things
11:00
basically are significantly more
11:01
valuable in economy and end up creating
11:03
more environments because the labs
11:05
wanted to work in those settings. So I
11:06
think code is a good example of that.
11:08
There's probably lots of verifiable
11:09
environments they could think about that
11:10
happen not to make it into the mix
11:12
because they're just not that useful to
11:13
have the capability around. Um, but I
11:15
think to me the big um I guess like the
11:18
big mystery is uh the favorite example
11:21
for a while was that how many letters
11:22
are are in a strawberry and the models
11:24
would famously get this wrong and it's
11:26
an example of jaggedness. Uh the models
11:27
now patch this I think but the new one
11:29
is I want to go to a car wash to wash my
11:32
car and it's 50 meters away. Should I
11:34
drive or should I walk? And
11:36
state-of-the-art models today will tell
11:38
you to walk because it's so close. How
11:40
is it possible that state-of-the-art
11:42
Opus 4.7 will simultaneously refactor a
11:46
100,000 like [laughter] codebase line
11:48
codebase or find zero day
11:50
vulnerabilities and yet tells me to walk
11:52
to this car wash? This is insane. And to
11:56
whatever extent these uh models are
11:58
remain jagged, it's an indication that
12:01
number one maybe something's slightly
12:02
off or um number two you need to
12:05
actually be in the loop a little bit and
12:07
you need to treat them as tools and you
12:09
do have to kind of stay in touch with
12:11
what they're doing. And so I think all
12:12
of my writing long story short about
12:14
verifiability is just trying to
12:16
understand um why these things are
12:18
jacked. Is there any pattern to it? And
12:20
I think it's some kind of a combination
12:22
of verifiable plus labs care. Maybe one
12:25
more anecdote that is instructive is uh
12:28
from GPT 3.5 to GPT4 people noticed that
12:31
chess improved a lot and I think a lot
12:33
of people thought oh well it's just a
12:34
progression of the capabilities but
12:36
actually it's it's more that uh I think
12:38
this is public information I think I saw
12:39
it on the internet um a huge amount of
12:41
like um data of chess made it into the
12:43
pre-training set and just because it's
12:46
in a data distribution uh basically the
12:48
model improved a lot more than it would
12:50
just by default. So someone at OpenAI
12:53
decided to add this data and now you
12:55
have a capability that just peaked a lot
12:56
more. And so that's why I think I'm
12:58
stressing this um dimension of it as we
13:01
are slightly at the mercy of whatever
13:03
the labs are doing, whatever they happen
13:04
to put into the mix. And you have to
13:06
actually explore this thing that they
13:08
give you that has no manual. And it
13:10
works in certain settings, but maybe not
13:11
in some settings. And you have to kind
13:13
of um explore it a little bit. And uh if
13:16
you're in the circuits that were part of
13:17
the RL, you fly. And if you're in the
13:19
circuits that are out of the data
13:21
distribution, uh you're going to
13:22
struggle and you have to kind of figure
13:24
out which which circuits you're in in
13:26
your application. And if you and if
13:28
you're not in the circuits, then you
13:29
have to really look at fine-tuning and
13:30
doing some of your own work because it's
13:32
not going to necessarily come out of the
13:34
LLM out of the box.
13:36
I'd love to come back to the concept of
13:38
jagged intelligence in a little bit. Um,
Founder Advice and Automation
13:40
if you are a founder today and thinking
13:42
about building a company, you are trying
13:44
to solve a problem that you think is
13:46
tractable, something that uh is a domain
13:49
that is verifiable, but you look around
13:51
and you think, "Oh my gosh, well, the
13:53
labs have really really started uh
13:56
getting to escape velocity in the ones
13:58
that seem most obvious, math, coding,
14:00
and others." What would your advice be
14:02
to to the founders in the audience?
14:05
Um
14:08
so I think maybe that comes to the
14:10
previous question of I do think that
14:12
verifiability because it um let me
14:14
think. So verifiability makes something
14:17
tractable in the current paradigm
14:18
because you can throw a huge amount of
14:20
RL at it. Um so maybe one way to see it
14:24
is that uh that remains true even if the
14:26
labs are not focusing on it directly. So
14:28
if you are in a verifiable setting where
14:30
you could create these RL environments
14:31
or examples then that actually sets you
14:34
up to potentially do your own fine
14:35
tuning and you might benefit from that.
14:36
But that is fundamentally technology
14:38
that just works. You can pull a lever if
14:39
you have huge amount of diverse data
14:41
sets of RL environments etc. Uh you can
14:43
use your favorite fine-tuning framework
14:44
and um and uh pull the lever and get
14:47
something that actually uh works pretty
14:49
well. So um I don't know what the
14:51
examples of this might be. Um, but I do
14:54
think there are some very valuable uh
14:56
reinforcement learning environments that
14:58
people could think of that I think are
14:59
not part of the Yeah, I don't want to
15:01
give away the answer, but there is one
15:02
domain that I think is very uh Oh, okay.
15:04
Sorry, I don't mean to vape post on on
15:06
the stage, but there are some examples
15:08
of this.
15:09
On the flip side, what do you think
15:11
still feels automatable only from a
15:13
distance?
15:14
I do think that ultimately almost
15:17
everything can be made uh verifiable to
15:19
some extent. some things easier than
15:21
others. Um because even for like things
15:23
like writing or so on, you can imagine
15:25
having a council of LLM judges and
15:27
probably get get to some get get
15:29
something uh reasonable out of the um
15:31
from from this kind of an approach. So
15:33
it's more about what's easy or hard. Um
15:36
so I I do think that ultimately um uh
15:40
yeah, I think uh
15:42
everything [laughter]
15:43
everything is automatable.
15:45
Amazing. Okay. Um, so last year you
From Vibe Coding to Agent Engineering
15:47
coined the term vibe coding and today
15:49
we're in a world that feels a little bit
15:50
more serious, more regent engineering.
15:52
What do you think is the difference
15:54
between the two and what would you
15:55
actually call what we're in today?
15:57
Uh, yeah. So I would say vibe coding is
15:59
about raising the floor for everyone in
16:01
terms of what they can do in software.
16:03
So the floor rises, everyone can vibe
16:05
code anything and that's amazing,
16:06
incredible. But then I would say agentic
16:08
engineering is about preserving the
16:10
quality bar of what existed before in
16:11
professional software. So you're not
16:13
allowed to introduce vulnerabilities due
16:15
to VIP coding. Um you are um you're
16:18
still responsible for your software just
16:20
as before, but can you go faster? And
16:22
spoiler is you can but how do you how do
16:24
you do that properly? And so to me
16:26
agentic engineering when I call it that
16:28
because I do think it's kind of like an
16:29
engineering discipline. You have these
16:31
agents which are these like spiky
16:32
entities. They're a bit fable, a little
16:33
bit stocastic, but they are extremely
16:35
powerful. is how do you how do you
16:37
coordinate them to go faster without
16:39
sacrificing your quality bar and doing
16:42
that well and correctly um is the the
16:46
realm of agentic engineering um so I
16:48
kind of see them as as different like
16:50
one is about maybe raising the raising
16:51
the floor and the other is about um you
16:53
know extrapolating and what I'm seeing I
16:55
think is there is a very high ceiling on
16:58
agentic engineer uh capability and you
17:01
know people used to talk about the 10x
17:02
engineer previously I think that this is
17:04
magnified a lot more 10x is uh is not uh
17:08
the speed up you gain. Um and I think uh
17:11
it does seem to me like people who are
17:13
very good at this um peak a lot more
17:16
than 10x uh from from my perspective
17:18
right now.
17:18
I really like that framing. Um one thing
17:21
that when Sam Alman came to AIN last
17:23
year, one memorable thing he said was
17:25
that people of different generations use
17:27
chatpt differently. So if you're in your
17:29
30s, you use it as a Google search
17:31
replacement. But if you're in your
17:32
teens, tragic is your gateway to the
17:35
internet. What is the parallel here in
17:37
coding today? If we were to watch two
17:39
people code using OpenClaw, Claude Code,
17:42
Codeex, one you'd consider mediocre at
17:45
it and one you would consider fully AI
17:47
native. How would you describe the
17:49
difference?
17:51
[clears throat]
17:51
I mean I think it's a just trying to get
17:53
the most out of the tools that are
17:55
available utilizing all of their
17:56
features investing into your own um kind
17:59
of setup. Uh so just like previously all
18:02
the engineers are used to basically
18:03
getting the most out of the tools you
18:04
use either it's vim or v code or now
18:06
it's you know cloth code or codec or so
18:09
on. So um just investing into your setup
18:13
um and um utilizing a lot of the you
18:16
know uh tools that are available to you.
18:18
Um and I think it just kind of looks
18:20
like that. I do think that um maybe
18:23
related thought is um a lot of people
18:26
are maybe hiring um for this right
18:29
because they want to hire strong agentic
18:31
engineers. I do think that um what I'm
18:34
seeing is that uh the you know most
18:37
people have still not refactored their
18:39
um their hiring process for a gentic
18:41
engineer capability right like if you're
18:44
giving out puzzles to solve and this is
18:46
still the old paradigm I would say that
18:48
hiring have to has to look like give me
18:50
a really big project and see someone
18:52
implement that big project like let's
18:53
write say a Twitter clone uh for agents
18:57
and then uh make it really good make it
18:59
really secure and then have some agents
19:01
uh simulate some activity uh on this
19:03
Twitter and then I'm going to use 10
19:06
codecs 5.4x for X high to try to break
19:09
your break your um uh this website that
19:12
you deployed and they're going to try to
19:15
basically break it and they should not
19:16
be able to break it. And so maybe it
19:18
looks like that, right? And so yeah,
19:20
watching people in that that setting and
19:21
building bigger uh projects and uh
19:25
utilize utilizing the tooling is maybe
19:26
what I would uh look at for the most
19:28
part.
19:29
And as agents do more, what human skill
19:31
do you think becomes more valuable, not
19:33
less?
19:34
Uh so um yeah, it's a good question. I
19:37
think um well right now the answer is
19:39
that the agents are kind of like these
19:40
intern entities right so it's remarkable
19:44
um you basically still have to be in
19:46
charge of the aesthetics the the
19:48
judgment the taste and a little bit of
19:50
oversight maybe one one of my favorite
19:52
examples of like the the weirdness of
19:54
agents is um for menu genen uh you sign
19:57
up with a Google Google account but you
20:00
um purchase credits using a stripe
20:02
account and both of them have email
20:04
addresses and my agent actually tried to
20:06
basically
20:08
um like when you purchase credits, it
20:10
assigned it using the email address from
20:13
Stripe to the Google email address like
20:15
there wasn't a persistent user ID that
20:18
that uh for people it was trying to
20:20
match up the email addresses, but you
20:21
could use different email address for
20:22
your Stripe and your Google and
20:24
basically would not associate the funds.
20:26
And so this is the kind of thing that
20:28
these agents still will make mistakes
20:29
about is like why would you use email
20:31
addresses to try to crossorrelate the
20:33
funds? They can be arbitrary. You can
20:34
use different emails, etc. Like this is
20:36
such a weird thing to do. So I think
20:39
people have to be in charge of this
20:40
spec, this plan. And um I actually don't
20:43
even like the plan mode. I I would I
20:46
mean obviously it's very useful, but I
20:47
think there's something more general
20:48
here where you have to work with your
20:49
agent to design a spec that is very
20:51
detailed and maybe it's uh maybe
20:53
basically the docs and then get the
20:55
agents to write them and you're in
20:56
charge of the oversight and the top
20:58
level categories, but the agents are
21:00
doing a lot of the under the hood. And
21:02
um so I think you're not caring about
21:04
some of the details. So as an example
21:05
also with um arrays or tensors in neural
21:09
networks. Um there's a ton of details
21:11
between PyTorch and NumPy and all the
21:13
different like pandas and so on for all
21:14
the different little API details. And I
21:17
I already forgot about the keep dims
21:18
versus keep dim or whether it's dim or
21:20
axis or reshape or permute or transpose.
21:22
I don't remember this stuff anymore,
21:24
right? Because you don't have to. This
21:25
is the kind of details that are handled
21:26
by the intern because they have very
21:28
good recall and but you still have to
21:30
know for example that um you know
21:32
there's underlying tensor there's an
21:33
underlying view and then you can
21:35
manipulate view of the same storage or
21:37
you can have different storage which
21:38
would be less efficient and so you still
21:40
have to have an understanding of what
21:41
this stuff is doing and some of the
21:43
fundamentals um so that you're not
21:45
copying memory around unnecessarily and
21:47
so on but uh the details of the APIs are
21:50
now handed off so it um you're in charge
21:53
of the taste the engineering the design
21:55
um and that it makes sense and that
21:57
you're asking for the right things and
21:58
that you're saying that okay that these
21:59
have to be unique user IDs that we're
22:01
going to tie everything to um and so
22:03
you're doing some of the design and
22:06
development and the engineers are doing
22:07
the fill in the blanks and that's
22:08
currently kind of like where we are and
22:10
I think that's what everyone of course
22:11
is seeing I think right now
22:13
do you think there's a chance that this
22:15
um taste and judgment matters less over
22:18
time or will the ceiling just keep
22:20
rising
22:21
um yeah it's a good question I would
22:22
Okay.
22:25
Um, I mean, I'm hoping that the that it
22:28
improves. I think probably the reason it
22:30
doesn't improve right now is again, it's
22:31
not part of the RL. There's probably no
22:33
aesthetics cost or reward or it's not
22:36
good enough or something like that. Um,
22:39
I do think that when you actually look
22:41
at the code, sometimes I get a little
22:42
bit of a heart attack because it's not
22:44
like super amazing code necessarily all
22:46
the time and it's very bloaty and
22:47
there's a lot of copy paste and there's
22:48
awkward abstractions that are brittle
22:50
and like it works but it's just really
22:52
gross. Um, and I do I do hope that this
22:55
can improve in future models. Um, a good
22:57
example also is this uh you know micro
22:59
GPT project which where I was trying to
23:02
simplify uh LLM training to be as simple
23:04
as possible. The models hate this. They
23:06
can't do it. I tried to I keep I kept
23:08
trying to prompt an LLM to simplify more
23:10
simplify more and it just can't you feel
23:13
like you're outside of the RL circuits.
23:15
It feels like you're obviously you know
23:18
you're pulling teeth. It's not like
23:20
light speed. So I think um I do think
23:23
that people are still remain in charge
23:25
of this. But I do think that there's
23:26
nothing fundamental again that's
23:27
preventing it. It's just the labs
23:28
haven't done it yet almost.
23:30
Yeah.
23:31
So I'd love to come back to this idea of
23:33
uh jagged forms of intelligence. you
23:36
wrote a little bit about this with a
23:38
very thoughtprovoking piece around
23:39
animals versus ghosts. Um, and the idea
23:42
is that we're not building animals, we
23:44
are summoning ghosts. Um, and these are
23:46
jagged forms of intelligence that are
23:48
shaped by data and reward functions, but
23:51
not by intrinsic motivation or fun or
23:54
curiosity or empowerment. Uh, things
23:57
that kind of came about via evolution.
24:00
um why does that framing matter and what
24:02
does it actually change about how you
24:04
build and deploy and evaluate or even
24:07
trust them?
24:08
Uh yeah, so yeah, I think the reason I
24:12
wrote about this is because I'm trying
24:13
to wrap my head around what these things
24:15
are, right? Because if you have a good
24:16
model of what they are or are not, then
24:18
you're going to be more competent at uh
24:20
using them. Um and I do think that um I
24:23
don't know if it has I'm not sure if it
24:25
actually has like real power. [laughter]
24:28
I think it's a little bit of
24:29
philosophizing. Um, but I do think that
24:33
um
24:34
I think it's just um coming to terms
24:36
with the fact that these things are not,
24:38
you know, animal intelligences. Like if
24:40
you yell at them, they're not going to
24:41
work better or worse or it doesn't have
24:43
any impact. Um, and uh it's all just
24:46
kind of like these statistical
24:48
simulation circuits where the the
24:50
substrate is pre-training so like
24:53
statistics and then but then there's RL
24:55
bolting on top. So, it kind of like
24:57
increases the dispendages and um maybe
25:00
it's just kind of like a mindset of what
25:02
I'm coming into or what's likely to work
25:04
or not likely to work or how to modify
25:05
it. But I don't actually I don't know
25:07
that I have like here are the five
25:09
obvious outcomes of how to make your
25:11
system better. It's more just being
25:12
suspicious of it and um
25:14
figuring out over time.
25:16
That's where it starts. Um okay, so you
Agents Everywhere and Learning
25:18
are so deep in working with agents that
25:20
don't just chat. They have um real
25:22
permissions. They have local context.
25:24
they actually take action on your be
25:26
your behalf. What does the world look
25:28
like when we all start to live in that
25:30
world?
25:31
Uh yeah, I think I think every a lot of
25:34
people probably here are excited about
25:35
what this agent uh you know native
25:38
agentic environment looks like and
25:40
everything has to be rewritten.
25:41
Everything is still fundamentally
25:42
written for humans and has to be moved
25:44
around. I still use most of the time
25:46
when I use uh different frameworks or
25:48
libraries or things like that, they
25:49
still have docs that are fundamentally
25:51
written for humans. This is my favorite
25:53
pet peeve. Like I don't uh why are
25:55
people still telling me what to do? Like
25:57
I don't want to do anything. What is the
25:58
thing I should copy paste to my agent?
26:00
[laughter] Like uh so it's just um every
26:02
time I'm told, you know, go to this URL
26:04
or something like that, it's just like
26:06
ah [laughter]
26:07
you know. [snorts] So um everyone is I
26:10
think excited about how do we decompose
26:12
the workloads that need to happen into
26:14
fundamentally sensors over the world,
26:16
actuators over the world. How do we make
26:18
it agent native? Uh basically describe
26:20
it to agents first. um and then have a
26:23
lot of automation around um you know the
26:27
um yeah around data structures that are
26:30
very legible to the LLMs. Uh so I think
26:32
um yeah I'm hoping that there's a lot of
26:34
agent first um infrastructure out there
26:36
and that you know for Menuguen famously
26:39
when I wrote the uh not I'm not sure how
26:40
famously but when I wrote the blog post
26:42
about Menuguen [laughter]
26:44
um a lot of the work a lot of the
26:46
trouble was not even writing the code
26:47
for Menugen it was deploying it in
26:48
versell because I had to work with all
26:50
these different services and I had to
26:51
string them up and I had to go to their
26:52
settings and the menus and you know
26:54
configure my DNS and it was just so
26:56
annoying and so that's a good example of
26:59
I would hope that menu gen that I could
27:01
give a prompt to an LLM build menu genen
27:04
and then I didn't have to touch anything
27:05
and it's deployed in that same way on
27:07
the internet. Uh I think that would be a
27:09
good kind of a test for whether or not
27:12
uh a lot of our infrastructure is
27:13
becoming more and more agent native. And
27:14
then ultimately I would say yeah I I do
27:17
think we're going towards a world where
27:19
um there's agent representation for
27:21
people and for organizations and um you
27:25
know I'll have my agent talk to your
27:26
agent uh to figure out some of the
27:28
details of our meetings or or things
27:30
like that. So, [laughter]
27:33
um I do think that that's uh roughly
27:34
where things are going, but um yeah, I
27:36
think everyone here is excited about
27:37
that.
27:38
I really like the visual analogy of
27:40
sensors and actuators. I actually hadn't
27:41
thought of that. That's super
27:42
interesting,
27:43
right?
27:43
Um okay, I think we have to end on a
27:45
question about education. Um because you
27:47
are probably one of the very best in the
27:49
world at making complex technical
27:51
concepts simple and deeply thoughtful
27:53
about how we design education around it.
27:56
Um, what still remains worth learning
27:59
deeply when intelligence gets cheap as
28:02
we move into the next a era of AI?
28:05
Yeah. Uh, there was a tweet that blew my
28:07
mind recently and I keep thinking about
28:09
it like every other day. It was
28:10
something along the lines of um, you can
28:12
outsource your thinking but you can't
28:14
outsource your understanding.
28:16
And um,
28:17
I think that's really nicely put. I so
28:21
yeah because I still I'm still part of
28:23
the system and I still I still have to
28:25
somehow information still has to make it
28:26
into my brain and I feel like I'm
28:27
becoming a bottleneck of just even
28:29
knowing what are we trying to build why
28:30
is it worth doing uh how do I direct you
28:32
know how do I direct my my agents and so
28:34
on so I do still think that ultimately
28:37
something has to direct the thinking and
28:39
the processing and so on and um that's
28:43
still kind of fundamentally constrained
28:44
somehow by understanding and this is one
28:46
reason I also was very excited about all
28:47
the LM knowledge bases because I feel
28:49
like that's that's a way for me to
28:51
process information and anytime I see a
28:53
different projection onto information. I
28:54
always like feel like I gain insight. So
28:56
it's really just a lot of prompts for me
28:58
to do synthetic data generation kind of
29:00
over over some fixed data. Uh so I I
29:03
really enjoy uh whenever I read an
29:05
article I have my uh you know my wiki
29:06
that's being built up from these
29:07
articles and I love asking questions
29:09
about things or um and I I think that
29:12
ultimately these are tools to enhance
29:15
understanding in a certain way and this
29:17
is still kind of like a bit of a
29:18
bottleneck because then you can't direct
29:20
the you can't be a good director if you
29:22
still uh because the LM certainly don't
29:25
excel at understanding you still are
29:26
uniquely in charge of that. So, uh,
29:28
yeah, I think, uh, tools to that effect,
29:31
I think are incredibly interesting and
29:32
exciting.
29:33
I'm excited to be back here in a couple
29:34
years and to see if we've been fully
29:36
automated out of the loop and they
29:38
actually take care of understanding as
29:40
well. Uh, thank you so much for joining
29:41
us, Andre. We really appreciate it.
