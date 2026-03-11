So what does
6:31
level five software development actually look like? I think strong DM software
6:37
factory is the most thoroughly documented example of level five in production. Simon Willis, one of the
6:42
most careful and credible observers in the developer tooling space, calls StrongDm Software Factory, quote, "The
6:49
most ambitious form of AI assisted software development that I've seen yet." The details are really worth
6:55
digging into here because they reveal what it looks like to run a dark factory for software on today's agents. And as
7:02
we have this discussion, I want you to keep in mind that for most of us listening, we are getting to time
7:09
travel. We are seeing how a bold vision for the future can be translated into reality with today's agents and today's
7:16
agent harnesses. It is only going to get easier as we go into 2026 which is one
7:22
of the reasons I think this is going to be a massive center of gravity for future agentic software development
7:29
practices. We are all going to level five. So what does strong DM do? The
7:34
team is three people. Justin McCarthy, CTO, Jay Taylor, and Nan Chowan. They've
7:39
been running the factory since July of last year, actually. And the inflection point they identify is Claude 3.5
7:46
Sonnet, which shipped actually in the fall of 2024. That's when long horizon
7:52
agentic coding started compounding correctness more than compounding errors. Give them credit for thinking
7:58
ahead. Almost no one was thinking in terms of dark factories that far back. But they found that 3.5 sonnet could
8:06
sustain coherent work across sessions long enough that the output was reliable and it wasn't just a flash in the pan.
8:14
It wasn't just demo worthy and so they built around it. The factory runs on an open-source coding agent called
8:19
attractor. The repo is just three markdown specification files and that's it. That's the agent. The specifications
8:27
describe what the software should do. The agent reads them. It writes the code and it tests it. And here's where it
8:33
gets really interesting and where most people's mental model really starts to break down. Strong DM doesn't actually
8:40
use traditional software tests. They use what they call scenarios. And the distinction is important. Tests
8:46
typically live inside the codebase. The AI agent can read them, which means the AI agent can intentionally or not
8:53
optimize for passing the tests rather than building correct software. It's the same problem as teaching to the test in
9:00
education. You can get perfect scores and shallow understanding. Scenarios are different. Scenarios live outside the
9:06
codebase. They're behavioral specifications that describe what the software should do from an external
9:12
perspective, stored separately so the agent cannot see them during development. They function as a holdout
9:19
set. The same concept that machine learning users use to prevent overfitting. The agent builds the
9:25
software and the scenarios evaluate whether the software actually works. The agent never sees the evaluation
9:32
criteria. It can't game the system. This is really a new idea in software development and I don't see it
9:38
implemented very frequently yet. But it solves a problem that nobody was thinking about when all the code was
9:44
written by humans. When humans write code, we don't tend to worry about the developer gaming their own test suite
9:50
unless incentives are really, really skewed at that organization and then you have bigger problems. When AI writes the
9:57
code, optimizing for test passage is the default behavior unless you deliberately
10:02
architect around it. And it's one of the most important differences to really understand as you start to think about
10:09
AI as a code builder. Strongdm architected around that with external
10:14
scenarios. The other major piece of the architecture is what StrongDM calls their digital twin universe. Behavioral
10:21
clones of every external service the software interacts with. a simulated octa, a simulated Jira, a simulated
10:29
Slack, Google Docs, Google Drive, Google Sheets. The AI agents develop against these digital twins, which means they
10:36
can run full integration testing scenarios without ever touching real
10:41
production systems, real APIs, or real data. It's a complete simulated environment purpose-built for autonomous
10:48
software development. And the output is real. CXDB, their AI context store, has 16,000 lines of Rust, nine and a half
10:55
thousand lines of Go, and 700 lines of TypeScript. It's shipped, it's in production, it works, it's real
11:01
software, and it's built by agents end to end. And then the metric that tells you how seriously they take it. They say
11:07
if you haven't spent $1,000 per human engineer, your software factory has room
11:12
for improvement. I think they're right. That's not a joke. $1,000 per engineer per day enables AI agents to run at a
11:20
volume that makes the cost of compute meaningful if you are giving them a mission to build software that has real
11:27
scale and real utility in production use cases and it's often still cheaper than the humans they're replacing. Let's hop
11:34
over and look at what the hyperscalers are doing. The self-referential loop has taken hold at both anthropic and open
11:41
AAI and it's stranger than the hype might make it sound. Codex 5.3 is the first frontier AI model that was
11:47
instrumental in creating itself. And that's not a metaphor. Earlier builds of Codeex would analyze training logs,
11:53
would flag failing tests, and might suggest fixes to training scripts. But this model shipped as a direct product
12:01
of its own predecessors coding labor. OpenAI reported a 25% speed improvement
12:07
and 93% fewer wasted tokens in the effort to build Codeex 5.3. And those
12:14
improvements came in part from the model identifying its own inefficiencies during the build process. Isn't that
12:21
wild? Cloud code is doing something similar. 90% of the code in Claude Code, including the tool itself, was built by
12:27
Claude Code, and that number is rapidly converging toward 100%. Boris Churny isn't joking when he talks
12:34
about not writing code in the last few months. He's simply saying his role has shifted to specification, to direction,
12:40
to judgment. Anthropic is estimating all of their company moving to entirely AI
12:45
generated code about now. Everyone at Anthropic is architecting and the
12:51
machines are implementing. And the downstream numbers tell the same story. When I made a video on co-work and
12:57
talked about how it was written in 10 days by four engineers, what I want you to remember is it wasn't just four
13:04
engineers hyperting so that they could get that out super fast and write every line by hand. No, no, no. They were
13:11
directing machines to build the code for co-work. And that's why it was so fast.
13:16
4% of public commits on GitHub are now directly authored by Claude Code, a number that Anthropic thinks will exceed
13:23
20% by the end of this year. I think they're probably right. Claude Code by itself has hit a billion dollar run rate
13:30
just 6 months since launch. This is all real today in February of 2026. The
13:36
tools are building themselves. They're improving themselves. is they're enabling us to go faster at improving
13:42
themselves and that means the next generation is going to be faster and better than it would have been otherwise
13:47
and we're going to keep compounding. The feedback loop on AI has closed and the
13:53
question is not whether we're going to start using AI to improve AI. The question is how fast that loop is going
13:59
to accelerate and what it means for the 40 or 50 million of us around the world who currently build software for a
14:05
living. This is true for vendors as much as it's true for software developers. And I don't think we talk about that
14:11
enough because the gap between what's possible at the frontier in February of 2026 and what tends to happen in
14:18
practice and what vendors want to sell has never been wider. That MER study, a
14:23
randomized control trial, by the way, not a survey, found that open source developers using AI coding tools
14:29
completed their task 19% slower. We talked about that, right? The researchers controlled for task
14:34
difficulty. They controlled for developer experience. They controlled even for tool familiarity and none of it
14:40
mattered. AI made even experienced developers slower. Why? In a world where co-work can ship that fast. Why? Because
14:48
the workflow disruption outweighed the generation speed. Developers spent time
14:53
evaluating AI suggestions, correcting almost right code, context switching between their own mental model and the
15:00
model's output, and debugging really subtle errors introduced by generated code that looked correct but weren't.
15:06
46% of developers in broader surveys say they don't fully trust AI generated code. These guys aren't lites, right?
15:13
This is experienced engineers running into a consistent problem. The AI is fast, but it struggles with the
15:19
reliability to trust without what they view as vital human review. And this
15:25
irony is the J curve that adoption researchers keep identifying. When you
15:30
bolt an AI coding assistant onto an existing workflow, productivity dips
15:36
before it gets better. It goes down like the bottom of a J. Sometimes for a while, sometimes for months. And the dip
15:42
happens because the tool changes the workflow, but the workflow has not been redesigned around the tool explicitly.
15:49
And so you're kind of running a new engine on old transmission. The gears are going to grind. Most organizations
15:55
are sitting in the bottom of that J curve right now. And many of them are interpreting the dip as evidence that AI
16:02
tools don't work, that the vendors did not tell them the truth, and that the evidence that their workflows haven't
16:08
adapted is really evidence that AI is hype and not real. I think GitHub
16:13
Copilot might be the clearest illustration of this. It has 20 million users, 42% market share among AI coding
16:20
tools, apparently. Uh, and lab studies show 55% faster code completion on
16:25
isolated tasks. I'm sure that makes the people driving GitHub Copilot happy in
16:30
their slide decks. But in production, the story is much more complicated. There are larger poll requests. There
16:36
are higher review costs. There's more security vulnerabilities introduced by generated code. And developers are
16:43
wrestling with how to do it well. One senior engineer put it really sharply. C-Ilot makes writing code cheaper but
16:49
owning it more expensive. And that is actually a very common sentiment I've heard across a lot of engineers in the industry. not just for co-pilot but for
16:56
AI generated code in general. The organizations that are seeing significant call it 25 30% or more
17:02
productivity gains with AI are not the ones that just installed co-pilot had a
17:08
one-day seminar and called it done. They're the ones that thought carefully went back to the whiteboard and
17:14
redesigned their entire development workflow around AI capabilities. changing how they write their specs,
17:20
changing how they review their code, changing what they expect from junior versus senior engineers, changing their
17:26
CI/CD pipelines to catch the new category of errors that AI generated code introduces. End to end process
17:33
transformation. It's not about tool adoption. And end toend transformation is hard. It's sometimes it's politically
17:40
contentious. It's expensive. It's slow and most companies don't have the stomach for it. Which is why most
17:46
companies are stuck at the bottom of the J curve. Which is why the gap between frontier teams and everyone else is not
17:53
just widening, it's accelerating rapidly. Because those teams on the edge that are running dark factories, they
17:59
are positioned to gain the most. As tools like Opus 4.6 and Codeex 5.3
18:05
enable widespread agentic powers for every software engineer on the planet. 95% of those software engineers don't
18:12
know what to do with that. It's the ones that are actually operating at level four, level five that truly get the
18:18
multiplicative value of these tools. So if this is a politically contentious problem, if this is not just a tool
18:24
problem but a people problem, we need to look at the nature of our software organizations. Most software
18:31
organizations were designed to facilitate people building software. every process, every ceremony, every
18:38
role. They exist because humans building software in teams need coordination
18:44
structures. Stand-up meetings exist because developers working on the same codebase, they got to synchronize every
18:50
single day. Sprint planning exists because humans can only hold a certain number of tasks in working memory and
18:56
then they need a regular cadence to rep prioritize. Code review exists because humans make mistakes that other humans
19:02
can catch. QA teams exist because the people who build software, they can't evaluate it objectively. You get the
19:09
idea. Every one of these structures is a response to a human limitation. And when
19:14
the human is no longer the one writing the code, the structures, they're not optional, they're friction. So what does
19:22
sprint planning look like when the implementation happens in hours, not weeks? What does code review look like
19:28
when no human wrote the code and no human can really review the diff that AI
19:34
produced in 20 minutes because it's going to produce another one in 20 more minutes. So what does a QA team do when
19:39
the AI already tested against scenarios it was never shown? Strong BM's threeperson team doesn't have sprints.
19:46
They don't have standups. They don't have a Jiraa board. They write specs and they evaluate outcomes. That is it.
19:53
The entire coordination layer that constitutes the operating system of a modern software organization. The layer
19:59
that most managers spend 60% of their time maintaining is just deleted. It
20:05
does not exist. Not because it was eliminated as a cost-saving measure, but because it no longer serves a purpose.
20:12
This is the structural shift that's harder to see than the tech shift, and it might matter more. The question is
20:18
becoming what happens to the organizational structures that were built for a world where humans write
20:24
code? What happens to the engineering manager whose primary value is coordination? What happens to the scrum
20:31
master, the release manager, the technical program manager whose job is to make sure a dozen teams ship on time?
20:38
Look, those roles don't disappear overnight, but the center of gravity is shifting. The engineering manager's
20:44
value is moving from coordinate the team building the feature to define the
20:50
specification clearly enough that agents build the feature. The program manager's value is moving from track dependencies
20:57
between human teams to architect the pipeline of specs that flow through the factory. The skills that matter are
21:03
shifting very rapidly from coordination to articulation. From making sure people
21:08
are rowing in the same direction to making sure the direction is described precisely enough that machines can go do
21:14
it. And oh, by the way, for engineering managers, there's an extra challenge. How do you coach your engineers to do
21:20
the same thing? It's a people challenge. If you think this is a trivial shift, you have never tried to write a
21:26
specification detailed enough for an AI agent to implement it correctly without human intervention. And you've certainly
21:32
never sat down and tried to coach an engineer to do the same. It is a different skill. It requires the kind of
21:38
rigorous systems thinking that most organizations have never needed from most of their people because the humans
21:44
on the other end of the spec could fill in the gaps with judgment, with context, with a slack message that says, "Did you
21:49
mean X or Y?" The machines don't have that layer of human context. They build
21:54
what you described. If what you described was ambiguous, you're going to get software that fills in the gaps with
22:00
software guesses, not customer- ccentric guesses. The bottleneck has moved from implementation speed to spec quality.
22:07
And spec quality is a function of how deeply you understand the system, your customer, and your problem. That kind of
22:15
understanding has always been the scarcest resource in software engineering. The dark factory doesn't
22:20
reduce the demand for that. It just makes the demand an absolute law. It becomes the only thing that matters.
22:28
Now, let's be honest. Everything that I have just talked about assumes you're building from scratch. Most of the
22:34
software economy is not built from scratch. The vast majority of enterprise software is brownfield. It's existing
22:41
systems. It's accumulated over years, over decades. It's running in production, serving real users, carrying
22:47
real revenue. CRUD applications that process business transactions. Monoliths that have grown organically through 15
22:54
years of feature additions. CI/CD pipelines tuned to the quirks of a specific codebase and a specific team's
23:00
workflow. Config management that exists in the heads of the three people who've been at the company long enough to
23:05
remember why that one environment variable is set to that one value. You know who you are. You cannot dark
23:11
factory your way through a legacy system. You cannot just pretend that you can bolt that on. It doesn't work that
23:17
way. The specification for that does not exist. The tests, if they're any, cover 30% of your existing codebase, and the
23:24
other 70% runs on institutional knowledge and tribal lore and someone who shows up once a week in a polo shirt
23:31
and knows where all the skeletons are buried in the code. The system is the specification. It's the only complete
23:38
description of what the software does because no one ever wrote down the thousand implicit decisions that
23:44
accumulated over a decade or more of patches of hot fixes of temporary workarounds that of course became
23:51
permanent. This is the truth about the interstitial states that lie along this
23:57
continuum toward more autonomous software development. For most organizations, the path is not to start
24:04
with deploy an agent that writes code. It starts with let's develop a specification for what your real
24:11
existing software really actually does. And that specification work that reverse
24:17
engineering of the implicit knowledge embedded in a running system is very
24:22
difficult and it's deeply human work. It requires the engineer who knows why the
24:27
billing module has the one edge case for Canadian customers. It requires the architect who remembers which micros
24:34
service it was that carved out of the monolith under duress during the 2021 outage and we've always maintained it
24:39
ever since. It requires the product person who can explain what the software actually does for real users versus what
24:46
the PRD says it does. Domain expertise, ruthless honesty, customer
24:51
understanding, systems thinking. exactly the human capabilities that matter even
24:57
more in the dark factory era, not less. Look, the migration path is different for every business, but it starts to
25:04
look something like this. First, you use your AI as much as you can at say level
25:09
two or level three to accelerate the work your developers are already doing, writing new features, fixing bugs,
25:16
refactoring modules. This is where most organizations are at now and it's where the J-Curve productivity dip and it's
25:23
where the J-Curve productivity dip happened. You should expect that. Second, you start using AI to document
25:29
what your system really does, generating specs directly from the code, building scenario suites that capture real
25:36
existing behavior, creating the holdout sets that a future dark factory will need. Then you redesign your CI/CD
25:43
pipeline to handle AI generated code at volume. different testing strategies, different review processes, different
25:49
deployment gates. Fourth, you start to begin to shift new development to level
25:55
four or five autonomous agent patterns while maintaining the legacy system in parallel. That path takes time. Anyone
26:02
telling you otherwise is selling you something. The organizations that will get there the fastest aren't necessarily
26:08
the ones that bought the fanciest vendor tools. They're the ones who can write the best and most honest specs about
26:15
their code, who have the deepest domain understanding, who have the discipline to invest in the boring, unglamorous
26:21
work of documenting what their systems really do and of how they can support their people to scale up in the ways
26:29
that will support this new dark factory era. I cannot give you a clear timeline here. For some organizations, this is
26:36
looking like a multi-year transition, and I don't want to hide the ball on that. Some are going faster and it's
26:41
looking like multimonth. It will depend, frankly, on the stomach you have for organizational pain. And that brings me
26:47
to the talent reckoning. Junior developer employment is dropping 9 to 10% within six quarters of widespread AI
26:55
coding tool adoption, according to a 2025 Harvard study. Anyone out there at the start of their career is nodding
27:00
along and saying it's actually worse than that. In the UK, graduate tech roles fell 46% in 2024 with a further
27:08
53% drop projected by 2026. In the US, junior developer job postings have
27:13
declined by 67%. Simply put, the junior developer
27:18
pipeline is starting to collapse, and the implications go far beyond the people who cannot find entry-level jobs,
27:24
although that is bad enough and it's a real issue. The career ladder in software engineering has always worked
27:30
like this. Juniors learn by doing. They write simple features. They fix small bugs. They absorb the codebase through
27:38
immersion. Seniors review the work and mentor them and catch their mistakes. Over 5 to seven years, a junior becomes
27:44
a senior through accumulated experience. The system is frankly an apprenticeship
27:50
model wearing enterprise clothing. AI breaks that model at the bottom. If AI handles the simple features and the
27:56
small bug fixes, the work that juniors lean on, where do the juniors learn? If AI reviews code faster and more
28:03
thoroughly than a senior engineer doing a PR review, where does the mentorship start to happen? The career ladder is
28:09
getting hollowed out from underneath. Seniors at the top, AI at the bottom, and a thinning middle where learning
28:14
used to happen. So, the pipeline is starting to break. And yet, we need more excellent engineers than we have ever
28:21
needed before, not fewer engineers. I've said this before. I do not believe in
28:26
the death of software engineering. We need better engineers. The bar is rising and it's rising toward exactly the
28:34
skills that have always been the hardest to develop and the hardest to hire for. The junior of 2026 needs the systems
28:41
design understanding that was expected of a mid-level engineer in 2020. Not because the entry-level work necessarily
28:48
got harder, but because the entry-level work got automated and the remaining work requires deeper judgment. And you
28:55
don't need someone who can write a CRUD endpoint anymore. Right? The AI will handle that in a few minutes. You need someone who can look at a system
29:01
architecture and identify where it will break under load, where the security model has gaps, where the user
29:08
experience falls apart at the edge cases, and where the business logic encodes assumptions that are about to become wrong. And if you think as a
29:15
junior that you can use AI to patch those gaps, I've got news for you. The seniors are using AI to do that and they
29:22
have the intuition over the top. So you need systems thinking, you need customer intuition. You need the ability to hold
29:28
a whole product in your head and reason about how those pieces interact. You need the ability to write a
29:34
specification clearly enough that an autonomous agent can implement it correctly, which requires understanding
29:40
the problem deeply enough to anticipate the questions the agent does not know to ask. Those skills have always separated
29:47
really great engineers from merely adequate ones. The difference now is that adequate is no longer a viable
29:53
career position regardless of seniority because adequate is what the models do. Enthropics hiring has already shifted.
30:00
Open AAI's hiring has already shifted. Hiring is shifting across the industry and it's shifting toward generalists
30:06
over specialists. People who can think across domains rather than people who are expert in one really narrow tech
30:13
stack. The logic is super straightforward, right? When the AI handles the implementation, the human's
30:19
value is in understanding the problem space broadly enough to direct implementation correctly. A specialist
30:25
who knows everything about Kubernetes but can't reason about the product implications of an architectural
30:30
decision is way way less valuable than a generalist who understands the systems, the users, and the business constraints
30:36
even if they can't handconfigure a pot. Some orgs are moving toward what amounts to a medical residency model for their
30:43
junior engineers. Simulated environments where early career developers learn by working alongside AI systems, reviewing
30:49
AI output, and developing judgment about what's correct and what's subtly wrong by working with AI. It is not the same
30:56
thing as learning by writing code from scratch. I don't want to pretend it is, but it might be better training for a
31:02
world where the job is directing and evaluating AI output rather than producing code from a blank editor. I
31:08
will also call out, as I've called out before, there are organizations preferentially hiring juniors right now,
31:15
despite the pipeline collapsing precisely because the juniors they are looking for provide an AI native
31:22
injection of fresh blood into an engineering org where most of the developers started their careers long
31:29
before chat GPT launched in 2022. In that world, having people who are AI native from the get-go can be a huge
31:36
accelerating factor. And that points to one of the things that is a plus for juniors coming in. Lean into the AI if
31:43
you're a junior. Lean into your generalist capabilities. Lean into how
31:48
quickly you can learn. Show that you can pick up a problem set and solve it in a
31:53
few minutes with AI across a really wide range of use cases. Gartner is projecting that 80% of software
32:00
engineers will need to upskill in AI assisted dev tools by 2027. Estimating
32:05
wrong. it's going to be 100%. The number is not the point. The question isn't
32:11
whether the skills need to change. We all know they will. It's whether we in the industry can develop the training
32:18
infrastructure quickly enough to keep pace with the capability change. Because I've got to be honest with you, if
32:24
you're a software engineer and the last model you touched was released in
32:30
January of 2026, you are out of date. You need a February model. And that is
32:35
going to keep being true all the way through this year and into next year. And whether the organizations that depend on software can tolerate a period
32:43
where the talent pipeline is being built and rebuilt like this on a monthly basis
32:48
is a big question because you have to invest in your people more to get them
32:54
through this period of transition. So what does the shape of a new org look like when we look at AI native startups?
33:01
How are they different from these traditional orgs? cursor. The AI native code editor is past half a billion
33:07
dollars in annual recurring revenue and it has at last count a couple of dozen few dozen employees. It's operating at
33:14
roughly three and a half million in revenue per employee in a world where the average SAS company is generating
33:22
$600,000 per employee. Midjourney is similar. They have the story of generating half a billion in revenue
33:28
with a few dozen people around a hundred a little bit more depending on who's counting. Lovable is well into the
33:34
multiundred million dollars in ARR in just a few months and their team is scaling but it's way way behind the
33:42
amount of revenue gain they're experiencing. They are also seeing that multi-million dollar revenue per
33:47
employee world. The top 10 AI native startups are averaging three and change
33:52
million in revenue per employee which is between five and six times the SAS average. This is happening enough that
34:00
it is not an outlier. This is the template for an AI native org. So what does that org look like? If you have 15
34:07
million people generating a hund00 million a year, which we've seen in multiple cases in 2025, what does that
34:12
look like? It does not look like a traditional software company. It does not have a traditional engineering team,
34:18
a traditional product team, a QA team, a DevOps team. It looks like a small group of people who are exceptionally good at
34:26
understanding what users need, who are exceptional at translating that into clear spec, and who are directing AI
34:32
systems that handle that implementation. The org chart is flattening radically.
34:37
The layers of coordination that exist to manage hundreds of engineers building a product can be deleted when the
34:43
engineering is done by agents. The middle management layer is going to either evolve into something
34:48
fundamentally different at these big companies or it's going to cease to exist entirely. The only people who
34:55
remain are the ones whose judgment cannot be automated. The ones who know what to build for whom and why, and who
35:02
have excellent AI sense. Sort of like horse sense where you have a sense of
35:08
the horse if you're a rider and you can direct the horse where you want to go. You'll need people who have that sense
35:13
with artificial intelligence. And yes, it is a learned skill. The restructuring
35:18
that is going to happen as more and more companies move toward that cursor model of operating, even if they never
35:25
completely get there, that restructuring is real. It's going to happen. It's going to be very painful for specific
35:32
people in specific roles. the middle management layer, the junior developer whose entry-level work is getting
35:38
automated first, the QA engineers who just run manual test passes, the release
35:43
manager whose entire value is just coordination. Those kinds of roles are
35:49
going to have to transform or they're just going to disappear. And for people in those roles, you need to find ways to
35:57
move toward developing with AI and rewriting your entire workflow around
36:04
agents as central to your development. That is going to look different depending on your stack, your manager's
36:10
budget for token spend, and your appetite to learn. But you need to lean
36:16
that way as quickly as you can for your own career's sake. I want to leave you
36:21
with one thing that gets lost in every conversation about AI and jobs. We have
36:27
never found a ceiling on the demand for software and we have never found a
36:32
ceiling on the demand for intelligence. Every time the cost of computing has dropped from mainframes to PCs, from PCs
36:40
to cloud, from cloud to serverless, the total amount of software the world produced did not stay flat. It exploded.
36:48
New categories of software that were economically impossible at the old cost structure became viable and then
36:54
ubiquitous and then essential. The cloud didn't just make existing software cheaper to run. It created SAS, mobile
37:01
apps, streaming, real-time analytics, and a hundred other categories that could not exist when you had to buy a
37:07
rack of servers to ship something. I think the same dynamic applies now and it applies at a scale that dwarfs every
37:15
previous transition. Every company in every industry needs software. Most of
37:20
them, like a regional hospital or a mid-market manufacturer or a family logistics company. They can't afford to
37:26
build what they need at current labor costs. A custom inventory system traditionally could cost a half a
37:32
million or more and take over a year. A patient portal integration might cost a third of a million. You get the idea.
37:38
These companies tend to make do with spreadsheets today. But we are dropping the cost of software production by an
37:46
order of magnitude or more. And now that unmet need is becoming addressable. Not
37:52
theoretically now. You can serve markets that traditional software companies
37:57
could never afford to enter. The total addressable market for software is exploding. Now this can sound like a
38:05
very comfortable rebuttal to people struggling with the pain of jobs disappearing. It is not the same thing.
38:10
Just saying the market is getting bigger doesn't fix it. But it is a structural observation about what happens as
38:17
intelligence gets cheaper. The demand is going to go up, not down. We watched
38:23
this happen with compute, with storage, with bandwidth, with every resource that's ever gotten dramatically cheaper.
38:29
Demand has never saturated. The constraint has always moved to the next bottleneck. And in this case, the
38:35
judgment is to know what to build and for whom. The people who thrive in this world are going to be the ones who were
38:42
always the hardest to replace. The ones who understand customers deeply, who think in systems, who can hold ambiguity
38:49
and make decisions under uncertainty, who can articulate what needs to exist
38:54
before it exists at all. The dark factory does not replace those people and it won't. It amplifies them. It
39:00
turns a great product thinker with five engineers into a great product thinker with unlimited engineering capacity. The
39:07
constraint moves from can we build it to should we build it and should we build it has always been the harder and more
39:14
interesting question. I don't have a silver bullet to magically resolve this but I have to tell you that we must
39:20
confront the tension or we are being dishonest. The dark factory is real. It
39:26
is not hype. It actually works. A small number of teams around the world are producing software without any humans
39:33
writing or reviewing code. They are shipping shippable production code that
39:39
improves with every single model generation. The tools are building themselves. The feedback loop is closed.
39:46
And those teams are going faster and faster and faster and faster. And yet
39:51
most companies aren't there. They're stuck at level two. They're getting measurably slower with AI tools they
39:56
believe are making them faster. They're wrong. running organizational structures designed for a world where humans do all
40:03
of the implementation work. Both of these things are true at the same time. The frontier is farther ahead than
40:10
almost anyone wants to admit and the middle is farther behind than the frontier teams like to talk about. The
40:17
distance between them isn't a technology gap. It's a people gap. It's a culture
40:23
gap. It's an organizational gap. It's a willingness to change gap that no tool
40:29
and no vendor can close. The enterprises that get across this distance are not
40:34
the ones that buy the best coding tool. They're the ones that do the very hard,
40:39
very slow, very unglamorous work of documenting what their systems do, of rebuilding their org charts and their
40:45
people around the skill of judgment instead of the skill of coordination. And they are organizations who invest in
40:52
the kind of talent that understands systems and customers deeply enough to
40:58
direct machines to build anything that should be built. And those orgs need to be honest enough with themselves to
41:04
admit that this change will not happen as fast as they want it to because people change slowly. The dark factory
41:11
does not need more engineers, but it desperately needs better ones. And
41:16
better means something different than it did a few years ago. It means people who can think clearly about what should
41:22
exist, describe it precisely enough that machines can build it and who can evaluate whether what got built actually
41:29
serves the real humans it was built for. This has always been the hard part of software engineering. We just used to
41:36
let the implementation complexity hide how few people were actually good at it.
41:41
The machines have now stripped away that camouflage, and we're all about to find out how good we are at building
41:48
software. I hope this video has helped you make sense of the enormous gap between the dark factories in automated
41:54
software production and the way most of us are building software today. Best of luck navigating that transition.
