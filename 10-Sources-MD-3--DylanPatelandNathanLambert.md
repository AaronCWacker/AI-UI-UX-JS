Chapter 1: Introduction
0:00- The following is a conversation with Dylan Patel and Nathan Lambert.
0:044 secondsDylan runs SemiAnalysis, a well-respected research and analysis company that specializes in semiconductors,
0:1212 secondsGPUs, CPUs, and AI hardware in general.
0:1616 secondsNathan is a research scientist at the Allen Institute for AI and is the author of the amazing blog on AI called Interconnects.
0:2727 secondsThey are both highly respected, read, and listened to by the experts, researchers, and engineers in the field of AI.
0:3434 secondsAnd personally, I'm just a fan of the two of them.
0:3838 secondsSo, I used the DeepSeek moment that shook the AI world a bit as an opportunity to sit down with them and lay it all out.
0:4848 secondsFrom DeepSeek, OpenAI, Google xAI, Meta, Anthropic, to Nvidia and DSMC, and to US, China, Taiwan relations,
0:5757 secondsand everything else that is happening at the cutting edge of AI.
1:011 minute, 1 secondThis conversation is a deep dive into many critical aspects of the AI industry.
1:081 minute, 8 secondsWhile it does get super technical, we try to make sure that it's still accessible to folks outside of the AI field by defining terms, stating important concepts explicitly,
1:191 minute, 19 secondsspelling out acronyms, and in general, always moving across the several layers of abstraction and levels of detail.
1:261 minute, 26 secondsThere is a lot of hype in the media about what AI is and isn't.
1:321 minute, 32 secondsThe purpose of this podcast in part is to cut through the hype, through the bullshit, and the low resolution analysis,
1:411 minute, 41 secondsand to discuss in detail how stuff works and what the implications are.
1:461 minute, 46 secondsLet me also, if I may comment on the new OpenAI o3-mini reasoning model.
1:521 minute, 52 secondsThe release of which we were anticipating during the conversation, and it did indeed come out right after.
1:581 minute, 58 secondsIts capabilities and costs are on par with our expectations as we stated. OpenAI o3-mini is indeed a great model,
2:072 minutes, 7 secondsbut it should be stated that DeeSeek-R1 has similar performance on benchmarks is still cheaper and it reveals its chain of thought reasoning,
2:172 minutes, 17 secondswhich o3-mini does not. It only shows a summary of the reasoning. Plus, R1 is open-weight and o3-mini is not.
2:292 minutes, 29 secondsBy the way, I got a chance to play with o3-mini. And anecdotal vibe check wise, I felt that o3-mini,
2:372 minutes, 37 secondsspecifically o3-mini-high is better than R1. Still for me personally,
2:432 minutes, 43 secondsI find that Claude Sonnet 3.5 is the best model for programming, except for tricky cases, where I will use o1 Pro to brainstorm.
2:522 minutes, 52 secondsEither way, many more better AI models will come,
2:552 minutes, 55 secondsincluding reasoning models both from American and Chinese companies. They'll continue to shift the cost curve.
3:033 minutes, 3 secondsBut the quote, DeepSeek moment is indeed real.
3:073 minutes, 7 secondsI think it will still be remembered five years from now as a pivotal event in tech history, due in part to the geopolitical implications,
3:153 minutes, 15 secondsbut for other reasons to, as we discuss in detail from many perspectives in this conversation. This is the "Lex Fridman Podcast".
3:243 minutes, 24 secondsTo support it, please check out our sponsors in the description. And now, dear friends, here's Dylan Patel and Nathan Lambert.
Chapter 2: DeepSeek-R1 and DeepSeek-V3
3:333 minutes, 33 secondsA lot of people are curious to understand China's DeepSeek AI models, so let's lay it out.
3:393 minutes, 39 secondsNathan, can you describe what DeepSeek-V3 and DeepSeek-R1 are, how they work, how they're trained? Let's look at the big picture,
3:473 minutes, 47 secondsand then we'll zoom in on the details. - Yeah, so DeepSeek-V3 is a new mixture of experts,
3:533 minutes, 53 secondstransformer language model from DeepSeek who is based in China.
3:583 minutes, 58 secondsThey have some new specifics in the model that we'll get into.
4:034 minutes, 3 secondsLargely this is a open-weight model and it's a instruction model like what you would use in ChatGPT.
4:104 minutes, 10 secondsThey also release what is called the base model, which is before these techniques of post-training.
4:164 minutes, 16 secondsMost people use instruction models today and those are what's served in all sorts of applications. This was released on, I believe December 26th or that week.
4:264 minutes, 26 secondsAnd then, weeks later, on January 20th, DeepSeek released DeepSeek-R1, which is a reasoning model,
4:344 minutes, 34 secondswhich really accelerated a lot of this discussion.
4:384 minutes, 38 secondsThis reasoning model, it has a lot of overlapping training steps to DeepSeek-V3,
4:434 minutes, 43 secondsand it's confusing that you have a base model called V3 that you do something to, to get a chat model,
4:504 minutes, 50 secondsand then you do some different things to get a reasoning model.
4:534 minutes, 53 secondsI think a lot of the AI industry is going through this challenge of communications right now where OpenAI makes fun of their own naming schemes. They have GPT-4o, they have OpenAI o1.
5:045 minutes, 4 secondsAnd there's a lot of types of models. So, we're gonna break down what each of them are. There's a lot of technical specifics on training, and go through 'em high level to specific,
5:135 minutes, 13 secondsand go through each of them. - There's so many places we can go here, but maybe let's go to open-weights first.
5:195 minutes, 19 secondsWhat does it mean for model to be open-weights and what are the different flavors of open source in general?
5:235 minutes, 23 seconds- Yeah, so this discussion has been going on for a long time in AI.
5:275 minutes, 27 secondsIt became more important since ChatGPT or more focal since ChatGPT at the end of 2022.
5:325 minutes, 32 secondsOpen-weights is the accepted term for when model weights of a language model are available on the internet for people to download,
5:405 minutes, 40 secondsthose weights can have different licenses,
5:425 minutes, 42 secondswhich is the effectively the terms by which you can use the model.
5:475 minutes, 47 secondsThere are licenses that come from history and open source software.
5:495 minutes, 49 secondsThere are licenses that are designed by companies specifically, all of Llama, DeepSeek, Qwen, Mistral,
5:585 minutes, 58 secondsthese popular names in open-weight models, have some of their own licenses. It's complicated, 'cause not all the same models have the same terms.
6:066 minutes, 6 secondsThe big debate is on what makes a model open-weight. It's like why are we saying this term? It's a mouthful.
6:146 minutes, 14 secondsIt sounds close to open source but it's not the same.
6:176 minutes, 17 secondsThere's still a lot of debate on the definition and soul of open source AI.
6:226 minutes, 22 secondsOpen source software has a rich history on freedom to modify, freedom to take on your own,
6:276 minutes, 27 secondsfreedom for many restrictions on how you would use the software, and what that means for AI is still being defined.
6:346 minutes, 34 secondsSo, for what I do, I work at the Allen Institute for AI. We're a nonprofit.
6:406 minutes, 40 secondsWe want to make AI open for everybody and we try to lead on what we think is truly open source. There's not full agreement in the community,
6:476 minutes, 47 secondsbut for us, that means releasing the training data, releasing the training code, and then also having open-weights like this.
6:536 minutes, 53 secondsAnd we'll get into the details of the models.
6:566 minutes, 56 secondsAnd again and again, as we try to get deeper into how the models were trained, we will say things like the data processing,
7:057 minutes, 5 secondsdata filtering, data quality is the number one determinant of the model quality.
7:097 minutes, 9 secondsAnd then, a lot of the training code is the determinant on how long it takes to train and how fast your experimentation is.
7:167 minutes, 16 secondsSo, without fully open source models where you have access to this data, it is hard to know or it's harder to replicate.
7:247 minutes, 24 secondsSo, we'll get into cost numbers for DeepSeek-V3 on mostly GPU hours and how much you could pay to rent those yourselves.
7:327 minutes, 32 secondsBut without the data, the replication cost is going to be far, far higher. And same goes for the code.
7:377 minutes, 37 seconds- We should also say that this is probably one of the more open models out of the frontier models.
7:437 minutes, 43 seconds- Yes. - So, in this full spectrum where probably the fullest open source, like you said, open code, open data, open-weights.
7:537 minutes, 53 secondsThis is not open code, this is probably not open data, and this is open-weights,
8:018 minutes, 1 secondand the licensing is MIT license, or it's... I mean, there's some nuance in the different models, but it's towards the free,
8:108 minutes, 10 secondsin terms of the open source movement, these are the good guys. - Yeah.
8:138 minutes, 13 secondsDeepSeek is doing fantastic work for disseminating understanding of AI. Their papers are extremely detailed in what they do.
8:218 minutes, 21 secondsAnd for other teams around the world,
8:258 minutes, 25 secondsthey're very actionable in terms of improving your own training techniques. And we'll talk about licenses more.
8:338 minutes, 33 secondsThe DeepSeek-R1 model has a very permissive license. It's called the MIT license.
8:388 minutes, 38 secondsThat effectively means there's no downstream restrictions on commercial use, there's no use case restrictions.
8:448 minutes, 44 secondsYou can use the outputs from the models to create synthetic data. And this is all fantastic.
8:498 minutes, 49 secondsI think the closest peer is something like Llama where you have the weights and you have a technical report. And the technical report is very good for Llama.
8:588 minutes, 58 secondsOne of the most read PDFs of the year last year is the Llama 3 paper, but in some ways, it's slightly less actionable. It has less details on the training specifics,
9:069 minutes, 6 secondsI think less plots, and so on. And the Llama 3 license is more restrictive than MIT.
9:139 minutes, 13 secondsAnd then, between the DeepSeek custom license and the Llama license, we could get into this whole rabbit hole.
9:179 minutes, 17 secondsI think we'll make sure we want to go down the license rabbit hole before we do specifics.
9:219 minutes, 21 seconds- Yeah, and so it should be stated that one of the implications that DeepSeek puts pressure on Llama and everybody else on OpenAI to push towards open source,
9:319 minutes, 31 secondsand that's the other side of open source that you mentioned is how much is published in detail about it.
9:379 minutes, 37 secondsSo, how open are you with the insights behind the code? So, how good is the technical reports?
9:459 minutes, 45 secondsAre they hand wavy or is there actual details in there?
9:489 minutes, 48 secondsAnd that's one of the things that DeepSeek did well is they publish a lot of the details. - Yeah, especially in the DeepSeek-V3,
9:549 minutes, 54 secondswhich is their pre-training paper, they were very clear that they are doing interventions on the technical stack that go at many different levels.
10:0310 minutes, 3 secondsFor example, to get highly efficient training,
10:0610 minutes, 6 secondsthey're making modifications at or below the CUDA layer for Nvidia chips. I have never worked there myself.
10:1310 minutes, 13 secondsAnd there are a few people in the world that do that very well and some of them are at DeepSeek.
10:1710 minutes, 17 secondsAnd these types of people are at DeepSeek and leading American Frontier Labs, but there are not many places.
10:2510 minutes, 25 seconds- To help people understand the other implication of open-weights, just there's a topic we return to often here.
10:3210 minutes, 32 secondsSo, there's a fear that China, the nation, might have interest in stealing American data,
10:4310 minutes, 43 secondsviolating privacy of American citizens.
10:4510 minutes, 45 secondsWhat can we say about open-weights to help us understand what the weights are able to do - Yeah. - in terms of stealing people's data?
10:5510 minutes, 55 seconds- Yeah, so these weights that you can download from Hugging Face or other platforms are very big matrices of numbers.
11:0111 minutes, 1 secondYou can download them to a computer in your own house that has no internet and you can run this model, and you're totally in control of your data.
11:0911 minutes, 9 secondsThat is something that is different than how a lot of language model usage is actually done today, which is mostly through APIs where you send your prompt to GPUs run by certain companies,
11:1911 minutes, 19 secondsand these companies will have different distributions and policies on how your data is stored, if it is used to train future models, where it is stored, if it is encrypted, and so on.
11:2811 minutes, 28 secondsSo, the open-weights are you have your fate of data in your own hands and that is something that is deeply connected to the soul of open source.
11:3711 minutes, 37 seconds- So, it's not the model that steals your data, it's whoever's hosting the model, which could be China if you're using the DeepSeek app,
11:4411 minutes, 44 secondsor it could be Perplexity. You're trusting them with your data. Or OpenAI, you're trusting them with your data. And some of these are American companies,
11:5211 minutes, 52 secondssome of of these are Chinese companies, but the model itself is not doing the stealing, it's the host. All right. So, back to the basics.
12:0212 minutes, 2 secondsWhat's the difference between DeepSeek-V3 and DeepSeek-R1?
12:0712 minutes, 7 secondsCan we try to lay out the confusion potential? - Yes.
12:1212 minutes, 12 secondsSo, for one, I have very understanding of many people being confused by these two model names.
12:1612 minutes, 16 secondsSo, I would say the best way to think about this is that when training a language model, you have what is called pre-training,
12:2212 minutes, 22 secondswhich is when you're predicting the large amounts of mostly internet text. You're trying to predict the next-token.
12:2812 minutes, 28 secondsAnd what to know about these new DeepSeek models is that they do this internet large-scale pre-training once to get what is called DeepSeek-V3 base.
12:3812 minutes, 38 secondsThis is a base model. It's just going to finish your sentences for you. It's going to be harder to work with than ChatGPT.
12:4512 minutes, 45 secondsAnd then, what DeepSeek did is they've done two different post-training regimes to make the models have specific desirable behaviors.
12:5412 minutes, 54 secondsSo, what is the more normal model in terms of the last few years of AI and instruct model, a chat model, a, quote, unquote, "aligned model", a helpful model,
13:0313 minutes, 3 secondsthere are many ways to describe this, is more standard post-training. So, this is things like instruction tuning, reinforcement learning from human feedback.
13:1213 minutes, 12 secondsWe'll get into some of these words. And this is what they did to create the DeepSeek-V3 model.
13:1713 minutes, 17 secondsThis was the first model to be released and it is very highly performant, competitive with GPT-4, Llama 405b, so on.
13:2713 minutes, 27 secondsAnd then, when this release was happening, we don't know their exact timeline,
13:3213 minutes, 32 secondsor soon after they were finishing the training of a different training process from the same next-token prediction-based model that I talked about,
13:4113 minutes, 41 secondswhich is when this new reasoning training that people have heard about comes in, in order to create the model that is called DeepSeek-R1.
13:4813 minutes, 48 secondsThe R through this conversation is good for grounding for reasoning. And the name is also similar to OpenAI's o1,
13:5413 minutes, 54 secondswhich is the other reasoning model that people have heard about.
13:5713 minutes, 57 secondsAnd we'll have to break down the training for R1 in more detail, because for one, we have a paper detailing it,
14:0314 minutes, 3 secondsbut also, it is a far newer set of techniques for the AI community. So, it is a much more rapidly evolving area of research.
14:1214 minutes, 12 seconds- Maybe we should also say the big two categories of training of pre-training and post-training. These umbrella terms that people use.
14:2014 minutes, 20 secondsSo, what is pre-training and what is post-training,
14:2414 minutes, 24 secondsand what are the different flavors of things underneath post-training umbrella?
14:2714 minutes, 27 seconds- Yeah, so pre-training, I'm using some of the same words to really get the message across,
14:3114 minutes, 31 secondsis you're doing what is called autoregressive prediction to predict the next-token in a series of documents. This is done over standard practice is trillions of tokens.
14:4114 minutes, 41 secondsSo, this is a ton of data that is mostly scraped from the web. And some of DeepSeek's earlier papers,
14:4914 minutes, 49 secondsthey talk about their training data being distilled for math, I shouldn't use this word yet, but taken from Common Crawl,
14:5614 minutes, 56 secondsand that's a public access that anyone listening to this could go download data from the Common Crawl website. This is a crawler that is maintained publicly.
15:0415 minutes, 4 secondsYes, other tech companies eventually shift to their own crawler and DeepSeek likely has done this as well, as most Frontier Labs do.
15:1115 minutes, 11 secondsBut this sort of data is something that people can get started with and you're just predicting text in a series of documents.
15:1815 minutes, 18 secondsThis can be scaled to be very efficient and there's a lot of numbers that are thrown around in AI training,
15:2615 minutes, 26 secondslike how many floating point operations or FLOPS are used.
15:2915 minutes, 29 secondsAnd then, you can also look at how many hours of these GPUs that are used.
15:3515 minutes, 35 secondsAnd it's largely one loss function taken to a very large amount (chuckles) of compute usage.
15:4215 minutes, 42 secondsYou set up really efficient systems. And then, at the end of that, you have this base model.
15:4715 minutes, 47 secondsAnd pre-training is where there is a lot more of complexity in terms of how the process is emerging or evolving,
15:5715 minutes, 57 secondsand the different types of training losses that you'll use.
16:0016 minutesI think this is a lot of techniques grounded in the natural language processing literature.
16:0616 minutes, 6 secondsThe oldest technique which is still used today is something called instruction tuning, or also known as supervised fine-tuning.
16:1216 minutes, 12 secondsThese acronyms will be IFT or SFT that people really go back and forth throughout them, and I'll probably do the same,
16:1916 minutes, 19 secondswhich is where you add this formatting to the model,
16:2316 minutes, 23 secondswhere it knows to take a question that is like explain the history of the Roman Empire to me.
16:3016 minutes, 30 secondsOr something, a sort of question you'll see on Reddit or Stack Overflow,
16:3316 minutes, 33 secondsand then the model will respond in a information-dense but presentable manner.
16:3816 minutes, 38 secondsThe core of that formatting is in this instruction tuning phase.
16:4116 minutes, 41 secondsAnd then, there's two other categories of loss functions that are being used today. One I'll classify as preference fine-tuning.
16:4916 minutes, 49 secondsPreference fine-tuning is a generalized term for what came out of reinforcement learning from human feedback, which is RLHF.
16:5716 minutes, 57 secondsThis reinforcement learning from human feedback is credited as the technique that helped ChatGPT breakthrough.
17:0617 minutes, 6 secondsIt is a technique to make the responses that are nicely formatted, like these Reddit answers, more in tune with what a human would like to read.
17:1417 minutes, 14 secondsThis is done by collecting pairwise preferences from actual humans out in the world to start.
17:1917 minutes, 19 secondsAnd now, AIs are also labeling this data and we'll get into those trade-offs.
17:2317 minutes, 23 secondsAnd you have this kind of contrastive loss function between a good answer and a bad answer. And the model learns to pick up these trends.
17:3117 minutes, 31 secondsThere's different implementation ways. You have things called reward models. You could have direct alignment algorithms. There's a lot of really specific things you can do.
17:3917 minutes, 39 secondsBut all of this is about fine-tuning to human preferences.
17:4217 minutes, 42 secondsAnd the final stage is much newer and will link to what is done in R1.
17:4817 minutes, 48 secondsAnd these reasoning models is I think OpenAI's name for this. They had this new API in the fall, which they called the reinforcement fine-tuning API.
17:5717 minutes, 57 secondsThis is the idea that you use the techniques of reinforcement learning, which is a whole framework of AI. There's a deep literature here.
18:0418 minutes, 4 secondsTo summarize, it's often known as trial and error learning or the subfield of AI where you're trying to make sequential decisions in a certain potentially noisy environment.
18:1618 minutes, 16 secondsThere's a lot of ways we could go down that.
18:1818 minutes, 18 secondsBut fine-tuning language models where they can generate an answer.
18:2218 minutes, 22 secondsAnd then, you check to see if the answer matches the true solution. For math or code, you have an exactly correct answer for math.
18:2918 minutes, 29 secondsYou can have unit tests for code.
18:3118 minutes, 31 secondsAnd what we're doing is we are checking the language model's work and we're giving it multiple opportunities on the same questions to see if it is right.
18:3818 minutes, 38 secondsAnd if you keep doing this, the models can learn to improve in verifiable domains to a great extent. It works really well.
18:4518 minutes, 45 secondsIt's a newer technique in the academic literature.
18:4718 minutes, 47 secondsIt's been used at Frontier Labs in the US that don't share every detail for multiple years.
18:5318 minutes, 53 secondsSo, this is the idea of using reinforcement learning with language models, and it has been taking off, especially in this DeepSeek moment.
19:0119 minutes, 1 second- And we should say that there's a lot of exciting stuff going on the, again, across the stack. But the post-training probably this year,
19:0719 minutes, 7 secondsthere's going to be a lot of interesting developments in the post-training. We'll talk about it.
19:1219 minutes, 12 secondsI almost forgot to talk about the difference between DeepSeek-V3 and R1 on the user experience side. So, forget the technical stuff, forget all of that.
19:2119 minutes, 21 secondsJust people that don't know anything about AI, they show up like what's the actual experience,
19:2519 minutes, 25 secondswhat's the use case for each one when they actually type and talk to it?
19:2919 minutes, 29 seconds- Yeah. - What is each good at and that kind of thing. - So, let's start with DeepSeek-V3. Again, it's more people would have tried something like it. You ask it a question,
19:3719 minutes, 37 secondsit'll start generating tokens very fast, and those tokens will look like a very human legible answer.
19:4419 minutes, 44 secondsIt'll be some sort of markdown list.
19:4619 minutes, 46 secondsIt might have formatting to help you draw to the core details in the answer. And it'll generate tens to hundreds of tokens.
19:5519 minutes, 55 secondsSay token is normally a word for common words or a sub-word part in a longer word.
20:0220 minutes, 2 secondsAnd it'll look like a very high quality Reddit or Stack Overflow answer.
20:0720 minutes, 7 secondsThese models are really getting good at doing these across a wide variety of domains, I think. Even things that if you're an expert,
20:1420 minutes, 14 secondsthings that are close to the fringe of knowledge, they will still be fairly good at, I think. Cutting edge AI topics that I do research on,
20:2220 minutes, 22 secondsthese models are capable for study aide, and they're regularly updated. Where this changes is with the DeepSeek-R1,
20:3120 minutes, 31 secondswhat is called these reasoning models, is when you see tokens coming from these models to start, it will be a large chain of thought process.
20:4020 minutes, 40 secondsWe'll get back to chain of thought in a second, which looks like a lot of tokens, where the model is explaining the problem.
20:4720 minutes, 47 secondsThe model will often break down the problem and be like, okay, they asked me for this, let's break down the problem. I'm going to need to do this. And you'll see all of this generating from the model.
20:5520 minutes, 55 secondsIt'll come very fast in most user experiences. These APIs are very fast. So, you'll see a lot of tokens, a lot of words show up really fast.
21:0121 minutes, 1 secondIt'll keep flowing on the screen and this is all the reasoning process.
21:0521 minutes, 5 secondsAnd then, eventually, the model will change its tone in R1 and it'll write the answer,
21:1021 minutes, 10 secondswhere it summarizes its reasoning process and writes a similar answer to the first types of model.
21:1621 minutes, 16 secondsBut in DeepSeek's case, which is part of why this was so popular even outside the AI community,
21:2221 minutes, 22 secondsis that you can see how the language model is breaking down problems. And then, you get this answer. On a technical side, they train the model to do this specifically,
21:3121 minutes, 31 secondswhere they have a section which is reasoning, and then it generates a special token, which is probably hidden from the user most of the time, which says, okay, I'm starting the answer.
21:3821 minutes, 38 secondsSo, the model is trained to do this two-stage process on its own. If you use a similar model in say, OpenAI,
21:4521 minutes, 45 secondsOpenAI's user interface is trying to summarize this process for you nicely by showing the sections that the model is doing,
21:5421 minutes, 54 secondsand it'll click through, it'll say breaking down the problem, making X calculation, cleaning the result, and then the answer will come for something like OpenAI.
22:0322 minutes, 3 seconds- Maybe it's useful here to go through like an example of it, DeepSeek-R1 reasoning. - Yeah. So, if you're looking at the screen here,
22:1122 minutes, 11 secondswhat you'll see is a screenshot of the DeepSeek chat app.
22:1522 minutes, 15 secondsAnd at the top is Thought for 157 seconds with the dropdown arrow. Underneath that, if we were in an app that we were running,
22:2322 minutes, 23 secondsthe dropdown arrow would have the reasoning. - So, in this case, the question, the specific question which, I'm philosophically/pothead-inclined,
22:3122 minutes, 31 secondsso this is asking DeepSeek-R1 for one truly novel insight about humans.
22:3922 minutes, 39 secondsAnd it reveals the reasoning.
22:4122 minutes, 41 secondsAnd basically, the truly novel aspect is what's pushing the reasoning to constantly, the model asking itself, is this truly novel?
22:4922 minutes, 49 secondsSo, it's actually challenging itself to be more novel, more counterintuitive, less cringe, I suppose.
22:5722 minutes, 57 secondsSo, some of the reasoning says, this is just snapshots.
23:0123 minutes, 1 secondAlternatively, humans have a unique meta-emotion where they feel emotions about their own emotions, e.g, feeling guilty about being angry.
23:0823 minutes, 8 secondsThis recursive emotional layering creates complex motivational drives that don't exist in other animals. The inside is that human emotions are nested. So, it's like,
23:1623 minutes, 16 secondsit's reasoning through how humans feel emotions, it's reasoning about meta-emotions.
23:2123 minutes, 21 seconds- It's gonna have pages and pages of this. - Yeah. - It's almost too much to actually read, but it's nice to skim as it's coming. - It's a stream of con... It's a James Joyce-like stream of consciousness.
23:2923 minutes, 29 secondsAnd then, it goes, wait, the user wants something that's not seen anywhere else. Let me dig deeper.
23:3523 minutes, 35 secondsAnd consider the human ability to hold contradictory beliefs simultaneously. Cognitive dissonance is known,
23:4123 minutes, 41 secondsbut perhaps the function is to allow flexible adaptation, so on and so forth. That really captures the public imagination,
23:5023 minutes, 50 secondsthat holy shit, this isn't... I mean, intelligence/almost like an inkling of sentience,
24:0024 minutesbecause you're thinking through, you're self-reflecting, you're deliberating.
24:0424 minutes, 4 secondsAnd the final result of that after 157 seconds is humans instinctively convert selfish desires
24:1224 minutes, 12 secondsinto cooperative systems by collectively pretending abstract rules, money, laws, rights, are real. These shared hallucinations act as, quote, games,
24:2124 minutes, 21 secondswhere competition is secretly redirected to benefit the group, turning conflict into society's fuel.
24:2824 minutes, 28 secondsPretty profound. I mean, you know?
24:3124 minutes, 31 secondsComment- - This is a potential digression, but a lot of people have found that these reasoning models can sometimes produce much more eloquent text.
24:4024 minutes, 40 secondsThat is at least interesting example, I think, depending on how open-minded you are, you find language models interesting or not, and there's a spectrum there.
24:4824 minutes, 48 seconds- Well, it's some of the... We'll talk about different benchmarks, and so on. But some is just a vibe. Like that in itself is a, let's say, quote, fire tweet.
24:5724 minutes, 57 seconds- Yeah. (laughs) - If I'm trying to produce something, where people are like, oh shit, okay, so that's chain of thought.
25:0525 minutes, 5 secondsWe'll probably return to it more.
Chapter 3: Low cost of training
25:0825 minutes, 8 secondsHow were they able to achieve such low cost on the training and the inference? Maybe you could talk the training first.
25:1525 minutes, 15 seconds- Yeah, so there's two main techniques that they implemented that are probably the majority of their efficiency.
25:2325 minutes, 23 secondsAnd then, there's a lot of implementation details that maybe we'll gloss over or get into later that contribute to it. But those two main things are,
25:3125 minutes, 31 secondsone, is they went to a mixture of experts model, which we'll define in a second.
25:3525 minutes, 35 secondsAnd then, the other thing is that they invented this new technique called MLA latent attention. Both of these are big deals.
25:4225 minutes, 42 secondsMixture of experts is something that's been in the literature for a handful of years.
25:4625 minutes, 46 secondsAnd OpenAI with GPT-4 was the first one to productize a mixture of experts model.
25:5125 minutes, 51 secondsAnd what this means is when you look at the common models around that most people have been able to interact with that are open.
25:5925 minutes, 59 secondsThink Llama, Llama is a dense model.
26:0226 minutes, 2 secondsi.e, every single parameter or neuron is activated as you're going through the model for every single token you generate.
26:1026 minutes, 10 secondsNow, with a mixture of experts model, you don't do that. How does the human actually work is like,
26:1526 minutes, 15 secondsoh, well, my visual cortex is active when I'm thinking about vision tasks and other things. My amygdala is when I'm scared.
26:2326 minutes, 23 secondsThese different aspects of your brain are focused on different things.
26:2726 minutes, 27 secondsA mixture of experts models attempts to approximate this to some extent. So, nowhere close to what a brain architecture is, but different portions of the model activate.
26:3526 minutes, 35 secondsYou'll have a set number of experts in the model and a set number that are activated each time.
26:4026 minutes, 40 secondsAnd this dramatically reduces both your training and inference cost.
26:4426 minutes, 44 secondsBecause now, if you think about the parameter count as the total embedding space for all of this knowledge that you're compressing down during training,
26:5426 minutes, 54 secondsone, you're embedding this data in, instead of having to activate every single parameter, every single time you're training or running inference.
27:0127 minutes, 1 secondNow, you can just activate on a subset.
27:0327 minutes, 3 secondsAnd the model will learn which expert to route to for different tasks. And so, this is a humongous innovation in terms of, hey,
27:1127 minutes, 11 secondsI can continue to grow the total embedding space of parameters.
27:1427 minutes, 14 secondsAnd so, DeepSeek's model is 600 something billion parameters. Relative to Llama 405b, it's 405 billion parameters.
27:2127 minutes, 21 secondsLlama relative to Llama 70b, it's 70 billion parameters.
27:2427 minutes, 24 secondsSo, this model technically has more embedding space for information,
27:2727 minutes, 27 secondsto compress all of the world's knowledge that's on the internet down. But at the same time, it is only activating around 37 billion of the parameters.
27:3627 minutes, 36 secondsSo, only 37 billion of these parameters actually need to be computed every single time you're training data or inferencing data out of it.
27:4327 minutes, 43 secondsAnd so, versus again a Llama model,
27:4627 minutes, 46 seconds70 billion parameters must be activated or 405 billion parameters must be activated.
27:5027 minutes, 50 secondsSo, you've dramatically reduced your compute cost when you're doing training and inference with this mixture of experts architecture.
27:5727 minutes, 57 seconds- So, we break down where it actually applies and go into the transformer. Is that useful?
28:0128 minutes, 1 second- Let's go, let's go into the transformer. - Okay. So, the transformer (Lex laughing)
28:0428 minutes, 4 secondsis a thing that is talked about a lot and we will not cover every detail.
28:0928 minutes, 9 secondsEssentially, the transformer is built on repeated blocks of this attention mechanism, and then a traditional dense,
28:1628 minutes, 16 secondsfully connected multi-layer perception,
28:1928 minutes, 19 secondswhatever word you want to use for your normal neural network. And you alternate these blocks. There's other details.
28:2428 minutes, 24 secondsAnd where mixture of experts is applied is that this dense model.
28:2728 minutes, 27 secondsThe dense model holds most of the weights if you count them in a transformer model.
28:3428 minutes, 34 secondsSo, you can get really big gains from those mixture of experts on parameter efficiency at training and inference,
28:3928 minutes, 39 secondsbecause you get this efficiency by not activating all of these parameters.
28:4428 minutes, 44 seconds- [Lex] We should also say that a transformer is a giant neural network. - Yeah. - And then, there's for 15 years now,
28:5128 minutes, 51 secondsthere's what's called the deep learning revolution. Networks gotten larger and larger.
28:5628 minutes, 56 secondsAnd a certain point, the scaling laws appeared where people realized... - This is a scaling law shirt, by the way. (group laughing) - Representing.
29:0329 minutes, 3 secondsScaling laws where it became more and more formalized that bigger is better across multiple dimensions of what bigger means.
29:1229 minutes, 12 secondsBut these are all neural networks we're talking about.
29:1629 minutes, 16 secondsAnd we're talking about different architectures of how to construct these neural networks such that the training and the inference on them is super efficient.
29:2429 minutes, 24 seconds- Yeah, every different type of model has a different scaling law for it, which is effectively for how much compute you put in,
29:3029 minutes, 30 secondsthe architecture will get to different levels of performance at test tasks. A mixture of experts is one of the ones at training time.
29:3929 minutes, 39 secondsEven if you don't consider the inference benefits, which are also big.
29:4229 minutes, 42 secondsAt training time, your efficiency with your GPUs is dramatically improved by using this architecture if it is well-implemented.
29:4829 minutes, 48 secondsSo, you can get effectively the same performance model and evaluation scores with numbers like 30% less compute.
29:5729 minutes, 57 secondsI think there's gonna be a wide variation, depending on your implementation details and stuff.
30:0130 minutes, 1 secondBut it is just important to realize that this type of technical innovation is something that gives huge gains.
30:0830 minutes, 8 secondsAnd I expect most companies that are serving their models to move to this mixture of experts implementation.
30:1430 minutes, 14 secondsHistorically, the reason why not everyone might do it is because it's a implementation complexity, especially when doing these big models.
30:2130 minutes, 21 secondsSo, this is one of the things that DeepSeek gets credit for is they do this extremely well. They do a mixture of experts extremely well.
30:2730 minutes, 27 secondsThis architecture for what is called DeepSeekMoE.
30:3130 minutes, 31 secondsMoE is the shortened version of mixture of experts, is multiple papers old.
30:3530 minutes, 35 secondsThis part of their training infrastructure is not new to these models alone, and same goes for what Dylan mentioned,
30:4330 minutes, 43 secondswith multi-head latent attention. This is all about reducing memory usage during inference. And same things during training,
30:5030 minutes, 50 secondsby using some fancy low rank approximation math. If you get into the details with this latent attention, it's one of those things I look at,
30:5830 minutes, 58 secondsand it's like, okay, they're doing really complex implementations,
31:0131 minutes, 1 second'cause there's other parts of language models such as embeddings that are used to extend the context length.
31:0631 minutes, 6 secondsThe common one that DeepSeek used is rotary positional impendings, which is called RoPE. And if you want to use RoPE with a normal MoE,
31:1531 minutes, 15 secondsit's a sequential thing.
31:1731 minutes, 17 secondsYou take two of the attention matrices and you rotate them by a complex value rotation, which is a matrix multiplication.
31:2431 minutes, 24 secondsWith DeepSeek's MLA, with this new attention architecture, they need to do some clever things,
31:2931 minutes, 29 secondsbecause they're not set up the same and it just makes the implementation complexity much higher. So, they're managing all of these things,
31:3531 minutes, 35 secondsand these are probably the sort of things that OpenAI, these closed labs are doing. We don't know if they're doing the exact same techniques, but they actually shared them with the world,
31:4431 minutes, 44 secondswhich is really nice to be like,
31:4531 minutes, 45 secondsthis is the cutting edge of efficient language model training. - And some of this requires low level engineering,
31:5131 minutes, 51 secondsjust is a giant mess in trickery. So, as I understand, that went below CUDA, so they go super low programming of GPUs.
32:0132 minutes, 1 second- Effectively, Nvidia builds this library called NCCL. In which, when you're training a model,
32:0732 minutes, 7 secondsyou have all these communications between every single layer of the model and you may have over 100 layers. - What does the NCCL stand for? It's N-C-C-L?
32:1432 minutes, 14 seconds- Nvidia Communications Collectives Library. - [Lex] Nice. (Nathan laughing) Damn. - And so, (group laughing) when you're training a model,
32:2232 minutes, 22 secondsyou're gonna have all reduces and all gathers.
32:2532 minutes, 25 secondsBetween each layer, between the multi-layer perception or feedforward network and the attention mechanism you'll have, you'll have basically the model synchronized.
32:3432 minutes, 34 secondsOr you'll have all reduce and all gather.
32:3832 minutes, 38 secondsAnd this is a communication between all the GPUs in the network, whether it's in training or inference. So, Nvidia has a standard library.
32:4432 minutes, 44 secondsThis is one of the reasons why it's really difficult to use anyone else's hardware for training is because no one's really built a standard communications library.
32:5332 minutes, 53 secondsAnd Nvidia's done this at a higher level.
32:5532 minutes, 55 secondsAt DeepSeek, because they have certain limitations around the GPUs that they have access to,
33:0033 minutesthe interconnects are limited to some extent by the restrictions of the GPUs that were shipped into China legally, not the ones that are smuggled, but legally shipped in,
33:0933 minutes, 9 secondsthat they used to train this model. They had to figure out how to get efficiencies.
33:1433 minutes, 14 secondsAnd one of those things is that instead of just calling the Nvidia library NCCL, they instead created their,
33:2233 minutes, 22 secondsthey scheduled their own communications, which some of the labs do.
33:2733 minutes, 27 secondsMeta talked about in Llama 3 how they made their own custom version of NCCL. They didn't talk about the implementation details. This is some of what they did.
33:3433 minutes, 34 secondsProbably not as well as, maybe not as well as DeepSeek because DeepSeek necessity is the mother of innovation and they had to do this.
33:4233 minutes, 42 secondsWhereas in the ca...
33:4433 minutes, 44 secondsOpenAI has people that do this sort of stuff, Anthropic, et cetera.
33:4733 minutes, 47 secondsBut DeepSeek certainly did it publicly and they may have done it even better because they were gimp on a certain aspect of the chips that they have access to.
33:5533 minutes, 55 secondsAnd so, they scheduled communications by scheduling specific SMs.
34:0234 minutes, 2 secondsSMs you could think of as like the core on a GPU.
34:0534 minutes, 5 secondsSo, there's hundreds of cores or there's a bit over 100 cores, SMs, on a GPU, and they were specifically scheduling, hey, which ones are running the model?
34:1434 minutes, 14 secondsWhich ones are doing all reduce? Which one are doing all gather? And they would flip back and forth between them. And this requires extremely low level programming.
34:2134 minutes, 21 seconds- This is what NCCL does automatically or other Nvidia libraries handle this automatically usually. - Yeah, exactly. And so, technically, they're using PTX,
34:3034 minutes, 30 secondswhich is like, you could think of it as like an assembly type language. It's not exactly that or instruction set. Coding directly to assembly or instruction set.
34:3834 minutes, 38 secondsIt's not exactly that, but that's still part of technically CUDA. But it's like, do I wanna write in Python, PyTorch equivalent, and call Nvidia libraries?
34:4734 minutes, 47 secondsDo I want to go down to the C level. Or in code, even lower level?
34:5034 minutes, 50 secondsOr do I wanna go all the way down to the assembly or ISA level?
34:5334 minutes, 53 secondsAnd there are cases where you go all the way down there at the very big labs,
34:5734 minutes, 57 secondsbut most companies just do not do that because it's a waste of time and the efficiency gains you get are not worth it.
35:0335 minutes, 3 secondsBut DeepSeek's implementation is so complex. Especially with their mixture of experts. People have done mixture of experts,
35:1035 minutes, 10 secondsbut they're generally 8, 16 experts. And they activate too.
35:1435 minutes, 14 secondsSo, one of the words that we like to use is sparsity factor or usage. So, you might have four, one fourth of your model activate.
35:2335 minutes, 23 secondsAnd that's what misdraws mixed role model. They're model that really catapulted them to like, oh my god, they're really, really good.
35:3235 minutes, 32 secondsOpenAI has also had models that are MoE, and so have all the other labs that are major closed.
35:3735 minutes, 37 secondsBut what DeepSeek did that maybe only the leading labs have only just started recently doing is have such a high sparsity factor. It's not one fourth of the model.
35:4535 minutes, 45 secondsTwo out of eight experts activating every time you go through the model. It's 8 out of 256.
35:5135 minutes, 51 seconds- And there's different implementations from mixture of experts where you can have some of these experts that are always activated,
35:5835 minutes, 58 secondswhich this just looks like a small neural network. And then, all the tokens go through that.
36:0336 minutes, 3 secondsAnd then, they also go through some that are selected by this routing mechanism.
36:0836 minutes, 8 secondsAnd one of the innovations in DeepSeek's architecture is that they change the routing mechanism in mixture of expert models.
36:1636 minutes, 16 secondsThere's something called an auxiliary loss, which effectively means during training,
36:2136 minutes, 21 secondsyou want to make sure that all of these experts are used across the tasks that the model sees.
36:2636 minutes, 26 secondsWhy there can be failures in mixture of experts is that when you're doing this training, the one objective is token prediction accuracy.
36:3536 minutes, 35 secondsAnd if you just let turning go with a mixture of expert model on your own,
36:3936 minutes, 39 secondsit can be that the model learns to only use a subset of the experts. And in the MoE literature,
36:4636 minutes, 46 secondsthere's something called the auxiliary loss, which helps balance them. But if you think about the loss functions of deep learning,
36:5336 minutes, 53 secondsthis even connects to the bitter lesson,
36:5536 minutes, 55 secondsis that you want to have the minimum inductive bias in your model to let the model learn maximally. And this auxiliary loss,
37:0337 minutes, 3 secondsthis balancing across experts could be seen as intention with the prediction accuracy of the tokens.
37:0937 minutes, 9 secondsSo, we don't know the exact extent that the DeepSeek MoE change, which is instead of doing an auxiliary loss, they have an extra parameter in their routing,
37:1737 minutes, 17 secondswhich after the batches,
37:1937 minutes, 19 secondsthey update this parameter to make sure that the next batches all have a similar use of experts. And this type of change can be big,
37:2637 minutes, 26 secondsit can be small, but they add up over time.
37:2837 minutes, 28 secondsAnd this is the sort of thing that just points to them innovating.
37:3137 minutes, 31 secondsAnd I'm sure all the labs that are training big MoEs are looking at this sort of things, which is getting away from the auxiliary loss. Some of them might already use it,
37:3837 minutes, 38 secondsbut you keep accumulating gains.
37:4037 minutes, 40 secondsAnd we'll talk about the philosophy of training and how you organize these organizations.
37:4537 minutes, 45 secondsAnd a lot of it is just compounding small improvements over time in your data, in your architecture, in your post-training, and how they integrate with each other.
37:5337 minutes, 53 secondsAnd DeepSeek does the same thing and some of 'em are shared or a lot,
37:5737 minutes, 57 secondswe have to take them on face value that they share their most important details. The architecture and the weights are out there, so we're seeing what they're doing, and it adds up.
38:0538 minutes, 5 seconds- Going back to the efficiency and complexity point.
38:0838 minutes, 8 secondsIt's 32 versus 4 for mixed draw and other MoE models that have been publicly released. So, this ratio is extremely high.
38:1638 minutes, 16 secondsAnd what Nathan was getting at there was, when you have such a different level of sparsity, you can't just have every GPU have the entire model.
38:2538 minutes, 25 secondsThe model's too big, there's too much complexity there.
38:2738 minutes, 27 secondsSo, you have to split up the model with different types of parallelism.
38:3038 minutes, 30 secondsAnd so, you might have different experts on different GPU nodes, but now what happens when this set of data that you get,
38:3838 minutes, 38 secondshey, all of it looks like this one way and all of it should route to one part of my model. So, when all of it routes to one part of the model,
38:4738 minutes, 47 secondsthen you can have this overloading of a certain set of the GPU resources or a certain set of the GPUs,
38:5538 minutes, 55 secondsand then the rest of the training network sits idle, because all of the tokens are just routing to that. So, this is the biggest complexity,
39:0139 minutes, 1 secondone of the big complexities with running a very sparse mixture of experts model, i.e, this 32 ratio versus this 4 ratio,
39:1039 minutes, 10 secondsis that you end up with so many of the experts just sitting there idle. So, how do I load balance between them? How do I schedule the communications between them?
39:1839 minutes, 18 secondsThis is a lot of the extremely low level detailed work that they figured out in the public first and potentially second or third in the world,
39:2739 minutes, 27 secondsand maybe even first in some cases.
39:2939 minutes, 29 seconds- What lesson do you, in the direction of the bitter lesson, do you take from all of this?
39:3639 minutes, 36 secondsIs this going to be the direction where a lot of the gain is going to be, which is this kind of low level optimization?
39:4139 minutes, 41 secondsOr is this a short-term thing where the biggest gains will be more on the algorithmic high level side of post-training?
39:5039 minutes, 50 secondsIs this like a short-term leap because they've figured out like a hack, because constraints, necessity is the mother of invention,
39:5839 minutes, 58 secondsor is there still a lot of gains?
40:0040 minutes- I think we should summarize what the bitter lesson actually is about, is that the bitter lesson, - Okay. - essentially, if you paraphrase it,
40:0740 minutes, 7 secondsis that the types of training that will win out in deep learning as we go are those methods that are which are scalable in learning and search is what it calls out.
40:1840 minutes, 18 secondsAnd the scale word gets a lot of attention in this.
40:2440 minutes, 24 secondsThe interpretation that I use is effectively to avoid adding the human priors to your learning process.
40:3340 minutes, 33 secondsAnd if you read the original essay,
40:3540 minutes, 35 secondsthis is what it talks about is how researchers will try to come up with what clever solutions to their specific problem
40:4240 minutes, 42 secondsthat might get them small gains in the short-term while simply enabling these deep learning systems to work efficiently.
40:5040 minutes, 50 secondsAnd for these bigger problems in the long-term might be more likely to scale and continue to drive success.
40:5840 minutes, 58 secondsAnd therefore, we were talking about relatively small implementation changes to the mixture of experts model. And therefore, it's like, okay,
41:0641 minutes, 6 secondswe will need a few more years to know if one of these were actually really crucial to the bitter lesson.
41:1241 minutes, 12 secondsBut the bitter lesson is really this long-term arc of how simplicity can often win. And there's a lot of sayings in the industry, like the models just wanna learn.
41:2041 minutes, 20 secondsYou have to give them the simple loss landscape where you put compute through the model, and they will learn and getting barriers out of the way.
41:2941 minutes, 29 seconds- That's where the power, something like NCCL comes in,
41:3141 minutes, 31 secondswhere standardized code that could be used by a lot of people to create sort of simple innovations that can scale.
41:3941 minutes, 39 secondsWhich is why the hacks, I imagine the code base for DeepSeek is probably a giant mess. - I'm sure they have,
41:4641 minutes, 46 secondsDeepSeek definitely has code bases that are extremely messy, where they're testing these new ideas, multi-head latent attention,
41:5141 minutes, 51 secondsprobably could start in something like a Jupyter Notebook or somebody try something on a few GPUs. And that is really messy.
41:5941 minutes, 59 secondsBut the stuff that trains the DeepSeek-V3 and DeepSeek-R1, those libraries, if you were to present them to us,
42:0642 minutes, 6 secondsI would guess are extremely high quality code. - It's a high quality readable code. Yeah. - I think there is one aspect to note though.
42:1442 minutes, 14 secondsIs that there is the general ability for that to transfer across different types of runs.
42:2142 minutes, 21 secondsYou may make really, really high quality code for one specific model architecture at one size. - Yeah. - And then, that is not transferable to,
42:3042 minutes, 30 secondshey, when I make this architecture tweak, everything's broken again.
42:3342 minutes, 33 secondsThat's something that could be with their specific low level coding of scheduling SMs,
42:4042 minutes, 40 secondsis specific to this model architecture and size.
42:4342 minutes, 43 secondsAnd whereas like Nvidia's collectives library is more like, hey, it'll work for anything. You wanna do an all reduce, great,
42:5042 minutes, 50 secondsI don't care what your model architecture is, it'll work.
42:5242 minutes, 52 secondsAnd you're giving up a lot of performance when you do that in many cases.
42:5642 minutes, 56 secondsBut it's worthwhile for them to do the specific optimization for the specific run, given the constraints that they have regarding compute.
43:0443 minutes, 4 seconds- I wonder how stressful it is to like, these frontier models, like initiate training, like to have the code-
43:1143 minutes, 11 seconds- [Nathan] Push the button. - to push the button (Nathan laughing)
43:1443 minutes, 14 secondsthat you're now spending a large amount of money and time to train this.
43:2143 minutes, 21 secondsThere must be a lot of innovation on the debugging stage of making sure there's no issues that you're monitoring
43:2943 minutes, 29 secondsand visualizing every aspect of the training, all that kind of stuff. - When people are training, they have all these various dashboards, but the most simple one - Yeah.
43:3643 minutes, 36 seconds- is your loss. - Right. - And it continues to go down. But in reality, especially with more complicated stuff like MoE, the biggest problem with it,
43:4543 minutes, 45 secondsor FP8 training, which is another innovation, going to a lower precision number format, i.e, less accurate, is that you end up with loss spikes.
43:5243 minutes, 52 secondsAnd no one knows why the loss spike happened. And for a lot- - Some of them you do. - Some of them you do. - Some of them are bad data.
43:5743 minutes, 57 secondsI give AI2's example of what blew up our earlier models is a subreddit called Microwave Gang. We love to shoutout this out. (Lex laughing) It's a real thing.
44:0544 minutes, 5 secondsYou can pull up Microwave Gang.
44:0744 minutes, 7 secondsEssentially, it's a subreddit where everybody makes posts that are just the letter M. So, it's like, mm.
44:1244 minutes, 12 secondsSo, there's extremely long sequences of the letter M, and then the comments are like, beep beep. 'Cause it's in the microwave end.
44:1744 minutes, 17 seconds- Yeah. - If you pass this into a model that's trained to be a normal producing text, it's extremely high loss. 'Cause normally, - Yeah. - you see an M. (Lex laughing)
44:2544 minutes, 25 secondsYou don't predict Ms for a long time. So, this is something that cause a loss spikes for us. But when you have much like, this is old, this is not recent.
44:3344 minutes, 33 secondsAnd when you have more mature data systems, that's not the thing that causes the loss spike. And what Dylan is saying is true, but it's levels to this sort of idea.
44:4144 minutes, 41 seconds- With regards to the stress, (Nathan and Lex laughing)
44:4444 minutes, 44 secondsthese people are like, you'll go out to dinner with a friend that works at one of these labs. And they'll just be like (Nathan laughing) looking at their phone every 10 minutes,
44:5144 minutes, 51 secondsand they're not like... It's one thing if they're texting, but they're just like, - Yeah. - is the loss- - It's literal. The tokens per second loss, not blown up.
45:0045 minutesThey're just watching this. (chuckles) - And the heart rate goes up if there's a spike. - And some level of spikes is normal. It'll recover and be back.
45:0845 minutes, 8 secondsSometimes a lot of the old strategy was like, you just stop the run, restart from an old version, and then change the data mix, and then it keeps going. - There are even different types of spikes.
45:1745 minutes, 17 secondsSo, Dirk Groeneveld has a theory of AI too that's like fast spikes and slow spikes,
45:2245 minutes, 22 secondswhere there are sometimes where you're looking at the loss and there are other parameters, you can see it start to creep up, and then blow up. And that's really hard to recover from.
45:3045 minutes, 30 secondsSo, you have to go back much further.
45:3145 minutes, 31 secondsSo, you have the stressful period, where it's like flat or it might start going up and you're like, what do I do? Whereas there are also lost spikes that are, it looks good. And then, there's one spiky data point.
45:3945 minutes, 39 secondsAnd what you could do is you just skip those. You see that there's a spike. You're like, okay, I can ignore this data, don't update the model, and do the next one, and it'll recover quickly.
45:4745 minutes, 47 secondsBut these like untrickier implementation,
45:5045 minutes, 50 secondsso as you get more complex in your architecture and you scale up to more GPUs, you have more potential for your loss blowing up.
45:5845 minutes, 58 secondsSo, it's like there's a distribution. - And then, the whole idea of grokking also comes in.
46:0246 minutes, 2 secondsIt's like, just because it's slowed down from improving and loss doesn't mean it's not learning,
46:0646 minutes, 6 secondsbecause all of a sudden, it could be like this and it could just spike down in loss again because it learned, truly learned something. And it took some time for it to learn that.
46:1446 minutes, 14 secondsIt's not like a gradual process. And that's what humans are like, that's what models are like. It's really a stressful task as you mentioned.
46:2146 minutes, 21 seconds- And the whole time, the dollar count is going up. - Every company has failed runs.
46:2646 minutes, 26 secondsYou need failed run to push the envelope on your infrastructure.
46:2946 minutes, 29 secondsSo, a lot of news cycles are made of X company had Y failed run.
46:3346 minutes, 33 secondsEvery company that's trying to push the frontier of AI has these.
46:3746 minutes, 37 secondsSo, yes, it's noteworthy because it's a lot of money and it can be week to month setback, but it is part of the process.
46:4446 minutes, 44 seconds- But how do you get, if you're DeepSeek, how do you get to a place where holy shit, there's a successful combination of hyperparameters?
46:5246 minutes, 52 seconds- A lot of small failed runs. - And so, rapid iteration (Nathan chuckles) through failed runs, until- - Yeah, and successful ones.
47:0047 minutesYou just- - And then, you build up some intuition like this, this mixture of expert works, and then this implementation of MLA works.
47:0947 minutes, 9 seconds- Key hyperparameters like learning rate and regularization and things like this. And you find the regime that works for your code base.
47:1747 minutes, 17 secondsTalking to people at Frontier Labs, there's a story that you can tell where training language models is kind of a path that you need to follow.
47:2547 minutes, 25 secondsSo, you need to unlock the ability to train a certain type of model or a certain scale.
47:2947 minutes, 29 secondsAnd then, your code base and your internal knowhow of which hyperparameters work for it is known. And you look at the DeepSeek papers and models, they've scaled up, they've added complexity,
47:3847 minutes, 38 secondsand it's just continuing to build the capabilities that they have. - There's the concept of a YOLO run. (Nathan laughing)
47:4547 minutes, 45 secondsSo, YOLO, you only live once. - Yep. - And what it is, is like, there's all this experimentation you do at the small-scale.
47:5247 minutes, 52 secondsResearch ablations, you have your Jupyter Notebook with, you're experimenting with MLA on three GPUs or whatever, and you're doing all these different things like, hey,
48:0148 minutes, 1 seconddo I do 4 expert, 4 active experts, 128 experts, do I arrange the experts this way?
48:0648 minutes, 6 secondsAll these different model architecture things you're testing at a very small-scale. Couple researchers, few GPUs, tens of GPUs, hundreds of GPUs, whatever it is.
48:1548 minutes, 15 secondsAnd then, all of a sudden, you're like, okay guys, no more fucking around. No more screwing around. Everyone, take all the resources we have,
48:2248 minutes, 22 secondslet's pick what we think will work, and just go for it. YOLO. - Yeah. - And this is where that sort of stress comes in is like, well, I know it works here,
48:3048 minutes, 30 secondsbut some things that work here don't work here,
48:3248 minutes, 32 secondsand some things that work here don't work down here - Yeah. - in this terms of scale. So, it's really truly a YOLO run,
48:3948 minutes, 39 secondsand there's this discussion of certain researchers just have this methodical nature.
48:4548 minutes, 45 secondsThey can find the whole search space and figure out all the ablations of different research, and really see what is best. And there's certain researchers who just like,
48:5348 minutes, 53 secondshave that innate gut instinct of like, this is the YOLO run. I'm looking at the data, (Dylan drowns out Nathan) I think this is it. - This is why you wanna work in post-training,
49:0149 minutes, 1 secondbecause the GPU cost for training is lower.
49:0349 minutes, 3 secondsSo, you can make a higher percentage of your training runs YOLO runs - Yeah. - For now. - Yeah, for now, for now. - For now, for now. (laughs)
49:1049 minutes, 10 seconds- So, some of this is fundamentally luck still. - Luck is skill in many cases. - Yeah, it looks lucky right when you're-
49:1849 minutes, 18 seconds- But the hill to climb, if you're on one of these labs and you have an evaluation and you're not crushing, there's a repeated playbook of how you improve things.
49:2749 minutes, 27 secondsThere are localized improvements, which might be data improvements.
49:2949 minutes, 29 secondsAnd these add up into the whole model just being much better. And when you zoom in really close,
49:3349 minutes, 33 secondsit can be really obvious that this model's just really bad at this thing and we can fix it. And you just add these up. So, some of it feels like luck,
49:4149 minutes, 41 secondsbut on the ground, especially with these new reasoning models we're talking to, is just so many ways that we can poke around.
49:4749 minutes, 47 secondsAnd normally, it's that some of them give big improvements. - The search space is near infinite.
49:5249 minutes, 52 secondsAnd yet, the amount of compute and time you have is very low. And you have to hit release schedules,
49:5949 minutes, 59 secondsyou have to not get blown past by everyone.
50:0250 minutes, 2 secondsOtherwise, what happened with DeepSeek crushing Meta and Misral and Cohere, and all these guys, they moved too slow. They maybe were too methodical.
50:1050 minutes, 10 secondsI don't know, they didn't hit the YOLO run, whatever the reason was, maybe they weren't as skill. You can call it luck if you want, but at the end of the day, it's skill.
50:1850 minutes, 18 seconds- So, 2025 is the year of the YOLO run. It seems like all the labs are going in.
50:2550 minutes, 25 seconds- I think it's even more impressive what OpenAI did in 2022.
50:2950 minutes, 29 secondsAt the time, no one believed in mixture of experts models at Google who had all the researchers.
50:3550 minutes, 35 secondsOpenAI had such little compute and they devoted all of their compute for many months, all of it, 100% for many months, to GPT-4,
50:4450 minutes, 44 secondswith a brand new architecture with no belief that, hey, let me spend a couple $100 million, which is all of the money I have, on this model.
50:5250 minutes, 52 secondsThat is truly YOLO, right? - Yeah, yeah. - Now, people are like, all these training run failures that are in the media, it's like, okay, great,
51:0051 minutesbut actually, a huge chunk of my GPs are doing inference. I still have a bunch doing research constantly. And yes, my biggest cluster is training, but on this YOLO run,
51:0951 minutes, 9 secondsbut that YOLO run is much less risky than what OpenAI did in 2022, or maybe what DeepSeek did now,
51:1651 minutes, 16 secondsor like, hey, we're just gonna throw everything at it.
51:1951 minutes, 19 seconds- The big winners throughput human history are the ones who are willing to do YOLO at some point. Okay.
Chapter 4: DeepSeek compute cluster
51:2751 minutes, 27 secondsWhat do we understand about the hardware it's been trained on? DeepSeek. - DeepSeek is very interesting.
51:3251 minutes, 32 secondsA second to take us to zoom out out of who they are, first of all.
51:3551 minutes, 35 secondsHigh-Flyer is a hedge fund that has historically done quantitative trading in China as well as elsewhere.
51:4251 minutes, 42 secondsAnd they have always had a significant number of GPUs. In the past, a lot of these high frequency trading, algorithmic, quant traders, used FPGAs,
51:5051 minutes, 50 secondsbut it shifted to GPUs, definitely. And there's both. But GPUs especially, and High-Flyer, which is the hedge fund that owns DeepSeek.
51:5751 minutes, 57 secondsAnd everyone who works for DeepSeek is part of High-Flyer to some extent. Same parent company, same owner, same CEO.
52:0452 minutes, 4 secondsThey had all these resources and infrastructure for trading,
52:0952 minutes, 9 secondsand then they devoted a humongous portion of them to training models, both language models and otherwise.
52:1552 minutes, 15 secondsBecause these techniques were heavily AI-influenced. More recently, people have realized,
52:2352 minutes, 23 secondshey, trading with, even when you go back to Renaissance and all these quantitative firms,
52:2952 minutes, 29 secondsnatural language processing is the key to trading really fast, understanding a press release and making the right trade. And so, DeepSeek has always been really good at this.
52:3852 minutes, 38 secondsAnd even as far back as 2021, they have press releases and papers saying like, hey,
52:4452 minutes, 44 secondswe're the first company in China with an A100 cluster this large. It was 10,000 A100 GPUs. This is in 2021.
52:5152 minutes, 51 secondsNow, this wasn't all for training large language models.
52:5452 minutes, 54 secondsThis is mostly for training models for their quantitative aspects,
52:5852 minutes, 58 secondsor quantitative trading, as well as a lot of that was natural language processing, to be clear. And so, this is the history. So, verifiable fact is that in 2021,
53:0753 minutes, 7 secondsthey built the largest cluster, at least they claim it was the largest cluster in China, 10,000 GPUs. - Before expert controls started. - Yeah. - It's like,
53:1553 minutes, 15 secondsthey've had a huge cluster before any conversation of export controls. So, then you step it forward to like, what have they done over the last four years since then?
53:2353 minutes, 23 secondsObviously, they've continued to operate the hedge fund, probably make tons of money.
53:2653 minutes, 26 secondsAnd the other thing is that they've leaned more and more and more into AI. the CEO, Liang Wenfeng, Liang- - You're not putting me on spot on this.
53:3453 minutes, 34 secondsWe discussed this. (laughs) - Liang Feng, the CEO, he owns maybe- - We're all fam. (chuckles)
53:3953 minutes, 39 seconds- Liang Feng, he owns maybe a little bit more than half the company, allegedly, an extremely like Elon-Jensen kind of figure,
53:4753 minutes, 47 secondswhere he is just involved in everything. And so, over that time period, he's gotten really in depth into AI. He actually has a bit of a like a,
53:5553 minutes, 55 secondsif you see some of his statements, a bit of an EAC vibe almost. - Total AGI vibes. And like, we need to do this,
54:0254 minutes, 2 secondswe need to make a new ecosystem of OpenAI. We need China to lead on this sort of ecosystem, because historically,
54:1054 minutes, 10 secondsthe Western countries have led on software ecosystems, and straight up acknowledges, in order to do this, we need to do something different.
54:1954 minutes, 19 secondsDeepSeek is his way of doing this.
54:2154 minutes, 21 secondsSome of the translated interviews with him are fantastic. - So, he has done interviews?
54:2454 minutes, 24 seconds- Yeah. - Do you think he would do a Western interview or no?
54:2654 minutes, 26 secondsOr is there controls on the channel? - There hasn't been one yet, but I would try it. - Okay. All right.
54:3154 minutes, 31 seconds(Nathan laughing) Well, I just got a Chinese translator, so it was great. This is all push. So, fascinating figure, engineer pushing full on into AI,
54:4054 minutes, 40 secondsleveraging the success from the high frequency trading.
54:4454 minutes, 44 seconds- Very direct quotes, like we will not switch to closed source when asked about this stuff.
54:4954 minutes, 49 secondsVery long-term motivated in how the ecosystem of AI should work. And I think from a Chinese perspective,
54:5854 minutes, 58 secondshe wants a Chinese company to build this vision. - And so, this is like the, quote, unquote, "visionary behind the company".
55:0655 minutes, 6 secondsThis hedge fund still exists, this quantitative firm. And so, DeepSeek is the sort of,
55:1355 minutes, 13 secondssolely, he got turned to this full view of like AI, everything about this. But at some point, it slowly maneuvered and he made DeepSeek.
55:2155 minutes, 21 secondsAnd DeepSeek has done multiple models since then. They've acquired more and more GPUs. They share infrastructure with the fund.
55:2855 minutes, 28 secondsAnd so, there is no exact number of public GPU resources that they have, but besides this 10,000 GPUs that they bought in 2021,
55:3755 minutes, 37 secondsand they were fantastically profitable. And then, this paper claims they did only 2,000 H800 GPUs,
55:4455 minutes, 44 secondswhich are a restricted GPU that was previously allowed in China, but no longer allowed, and there's a new version. But it's basically Nvidia's H100 for China.
55:5255 minutes, 52 secondsAnd there's some restrictions on it, specifically around the communications sort of speed, the interconnect speed,
55:5855 minutes, 58 secondswhich is why they had to do this crazy SM scheduling stuff. So, going back to that.
56:0356 minutes, 3 secondsIt's like this is obviously not true in terms of their total GPU count. - Obvious available GPUs. But for this training run,
56:1156 minutes, 11 secondsyou think 2,000 is the correct number or no?
56:1456 minutes, 14 seconds- So, this is where it takes a significant amount of zoning in. What do you call your training run?
56:2156 minutes, 21 secondsYou count all of the research and ablations that you ran, picking all this stuff, because, yes, you can do a YOLO run, but at some level,
56:2956 minutes, 29 secondsyou have to do the test at the small-scale,
56:3056 minutes, 30 secondsand then you have to do some test at medium-scale before you go to a large-scale.
56:3356 minutes, 33 seconds- Accepted practices that for any given model that is a notable advancement,
56:3856 minutes, 38 secondsyou're gonna do 2 to 4x compute of the full training run in experiments alone.
56:4356 minutes, 43 seconds- So, a lot of this compute that's being scaled up is probably used in large part at this time for research. - Yeah.
56:4956 minutes, 49 secondsAnd research begets the new ideas that lets you get huge efficiency- - Research gets you o1. Research gets you breakthrough, so you need to bet on it.
56:5756 minutes, 57 seconds- So, some of the pricing strategy that we'll discuss has the research baked into the price.
57:0257 minutes, 2 seconds- So, the numbers that DeepSeek specifically said publicly are just the 10,000 GPUs in 2021, and then 2,000 GPUs for only the pre-training for V3.
57:1257 minutes, 12 secondsThey did not discuss cost on R1. They did not discuss cost on all the other RL, for the instruct model that they made.
57:1957 minutes, 19 secondsThey only discussed the pre-training for the base model, and they did not discuss anything on research and ablations.
57:2557 minutes, 25 secondsAnd they do not talk about any of the resources that are shared in terms of, hey, the fund is using all these GPUs.
57:3057 minutes, 30 secondsAnd we know that they're very profitable in that 10,000 GPUs in 2021.
57:3657 minutes, 36 secondsSo, some of the research that we've found is that we actually believe they have closer to 50,000 GPUs. - We, as SemiAnalysis,
57:4457 minutes, 44 secondsso we should say - Yeah.
57:4557 minutes, 45 seconds- that you're one of the world experts in figuring out what everybody's doing in terms of the semiconductor, in terms of cluster buildouts,
57:5357 minutes, 53 secondsin terms of who's doing what in terms of training runs. So, yeah. So, that's the we. Okay, go ahead. - Yeah, sorry, sorry.
58:0058 minutesWe believe they actually have something closer to 50,000 GPUs. - Yeah. - [Dylan] Now, this is split across many tasks. Again, the fund, research and ablations.
58:0958 minutes, 9 seconds- For ballpark, how much would OpenAI or Anthropic had? I think the clearest example we have, because Meta is also open,
58:1558 minutes, 15 secondsthey talk about order of 60k to a 100k H100 equivalent GPUs in their training clusters.
58:2158 minutes, 21 seconds- Right. So, like Llama 3, they trained on 16,000 H100s.
58:2558 minutes, 25 secondsBut the company of Meta last year publicly disclosed they bought like 400 something thousand GPUs. - Yeah. (chuckles) - So, of course, tiny percentage on the training.
58:3258 minutes, 32 secondsAgain, most of it is like serving me the best Instagram reels, or whatever.
58:3758 minutes, 37 seconds- We could get into a cost of like, what is the cost of ownership for a 2,000-GPU cluster, 10,000?
58:4458 minutes, 44 secondsThere's just different sizes of companies that can afford these things, and DeepSeek is reasonably big.
58:4958 minutes, 49 secondsTheir compute allocation compared is one of the top few in the world. It's not OpenAI, Anthropic, et cetera,
58:5658 minutes, 56 secondsbut they have a lot of compute.
Chapter 5: Export controls on GPUs to China
58:5858 minutes, 58 seconds- Can you in general, actually just zoom out and also talk about the Hopper architecture, the Nvidia Hopper GPU architecture, and the difference between H100 and H800,
59:0859 minutes, 8 secondslike you mentioned the interconnects. - Yeah, so Ampere was the A100, and then H100, Hopper.
59:1359 minutes, 13 secondsPeople use them synonymously in the US because really, there's just H100 and now there's H200. But same thing mostly. In China, they've had two,
59:2259 minutes, 22 secondsthere've been different salvos of export restrictions.
59:2459 minutes, 24 secondsSo, initially, the US government limited on a two-factor scale, which is chip interconnect versus FLOPS.
59:3059 minutes, 30 secondsSo, any chip that had interconnects above a certain level and FLOPS above a certain floating point operations, above a certain level, was restricted.
59:3859 minutes, 38 secondsLater, the government realized that this was a flaw in the restriction, and they cut it down to just floating point operations.
59:4659 minutes, 46 secondsAnd so- - H800 had high FLOPS, low communication. - Exactly.
59:5259 minutes, 52 secondsSo, the H800 was the same performance as H100 on FLOPS, but it just had the interconnect bandwidth cut.
59:5859 minutes, 58 secondsDeepSeek knew how to utilize this res... Hey, even though we're cut back on the interconnect,
1:00:041 hour, 4 secondswe can do all this fancy stuff to figure out how to use the GPU fully anyways. And so, that was back in October, 2022.
1:00:121 hour, 12 secondsBut later in 2023, into 2023 implemented in 2024, the US government banned the H800.
1:00:191 hour, 19 secondsAnd so, by the way, this H800 cluster, these 2,000 GPUs was not even purchased in 2024. It was purchased in late 2023. - [Lex] Mm-hmm.
1:00:271 hour, 27 seconds- And they're just getting the model out now, because it takes a lot of research, et cetera. H800 was banned and now there's a new chip called the H20.
1:00:341 hour, 34 secondsThe H20 is cutback on only FLOPS, but the interconnect bandwidth is the same.
1:00:401 hour, 40 secondsAnd in fact, in some ways, it's better than the H100 because it has better memory bandwidth and memory capacity.
1:00:451 hour, 45 secondsSo, there are, Nvidia's working within the constraints of what the government sets, and then builds the best possible GPU for China.
1:00:521 hour, 52 seconds- Can we take this actual tangent and we'll return back to the hardware? Is the philosophy, the motivation, the case for export controls, what is it?
1:01:011 hour, 1 minute, 1 secondDario Amodei just published a blog post about export controls. The case he makes is that if AI becomes super powerful,
1:01:091 hour, 1 minute, 9 secondsand he says by 2026, will have AGI or super powerful AI,
1:01:141 hour, 1 minute, 14 secondsand that's going to give a significant, whoever builds that will have a significant military advantage. And so, because the United States is a democracy,
1:01:231 hour, 1 minute, 23 secondsand as he says, China is authoritarian or has authoritarian elements,
1:01:291 hour, 1 minute, 29 secondsyou want a unipolar world where the super powerful military, because of the AI, is one that's a democracy.
1:01:371 hour, 1 minute, 37 secondsIt's a much more complicated world geopolitically when you have two superpowers with super powerful AI and one is authoritarian.
1:01:461 hour, 1 minute, 46 secondsSo, that's the case he makes.
1:01:471 hour, 1 minute, 47 secondsAnd so, we wanna, the United States wants to use export controls to slow down,
1:01:531 hour, 1 minute, 53 secondsto make sure that China can't do these gigantic training runs that will be presumably required to build AGI.
1:02:021 hour, 2 minutes, 2 seconds- This is very abstract.
1:02:031 hour, 2 minutes, 3 secondsI think this can be the goal of how some people describe export controls, is this super powerful AI.
1:02:111 hour, 2 minutes, 11 secondsAnd you touched on the training run idea. There's not many worlds where China cannot train AI models.
1:02:181 hour, 2 minutes, 18 secondsI think export controls are decapping the amount of compute or the density of compute that China can have.
1:02:251 hour, 2 minutes, 25 secondsAnd if you think about the AI ecosystem right now, as all of these AI companies, revenue numbers are up and to the right,
1:02:321 hour, 2 minutes, 32 secondstheir AI usage is just continuing to grow, more Deep user going to inference. A large part of export controls, if they work,
1:02:401 hour, 2 minutes, 40 secondsis just that the amount of AI that can be run in China is going to be much lower. So, on the training side, DeepSeek-V3 is a great example,
1:02:481 hour, 2 minutes, 48 secondswhich you have a very focused team that can still get to the frontier of AI. This 2,000 GPUs is not that hard to get, all considering in the world.
1:02:561 hour, 2 minutes, 56 secondsThey're still gonna have those GPUs, they're still gonna be able to train models. But if there's gonna be a huge market for AI,
1:03:021 hour, 3 minutes, 2 secondsif you have strong export controls and you wanna have 100,000 GPUs just serving the equivalent of ChatGPT clusters, with good export controls,
1:03:091 hour, 3 minutes, 9 secondsit also just makes it so that AI can be used much less.
1:03:131 hour, 3 minutes, 13 secondsAnd I think that is a much easier goal to achieve than trying to debate on what AGI is.
1:03:201 hour, 3 minutes, 20 secondsAnd if you have these extremely intelligent autonomous AIs and data centers, those are the things that could be running in these GPU clusters in the United States, but not in China.
1:03:301 hour, 3 minutes, 30 seconds- To some extent, training a model does effectively nothing. Like have a model. - Yeah. (chuckles)
1:03:341 hour, 3 minutes, 34 seconds- The thing that Dario is speaking to is the implementation of that model once trained to then create huge economic growth,
1:03:441 hour, 3 minutes, 44 secondshuge increases in military capabilities, huge increases in productivity of people,
1:03:491 hour, 3 minutes, 49 secondsbetterment of lives, whatever you want to direct super powerful AI towards, you can. But that requires a significant amounts of compute.
1:03:561 hour, 3 minutes, 56 secondsAnd so, the US government has effectively said,
1:03:591 hour, 3 minutes, 59 secondsand forever, like training will always be a portion of the total compute. We mentioned Meta's 400,000 GPUs, only 16,000 made Llama.
1:04:081 hour, 4 minutes, 8 secondsSo, the percentage that Meta is dedicating to inference,
1:04:121 hour, 4 minutes, 12 secondsnow this might be for recommendation systems that are trying to hack our mind into spending more time and watching more ads, or if it's for a super powerful AI that's doing productive things,
1:04:211 hour, 4 minutes, 21 secondsdoesn't matter about the exact use that our economic system decides, it's that that can be delivered in whatever way we want.
1:04:281 hour, 4 minutes, 28 secondsWhereas with China, export restrictions, great. You're never gonna be able to cut everything off.
1:04:341 hour, 4 minutes, 34 secondsAnd that's like, I think that's quite a well-understood by the US government is that you can't cut everything off. - [Nathan] And they'll make their own chips.
1:04:411 hour, 4 minutes, 41 secondsThey're- - And they're trying to make their own chips. They'll be worse than ours. But the whole point is to just keep a gap. - Yeah. - And therefore, at some point, as the AI,
1:04:491 hour, 4 minutes, 49 secondsin a world where 2, 3% economic growth, this is really dumb, by the way, to cut off high tech and not make money off of it.
1:04:561 hour, 4 minutes, 56 secondsBut in a world where super powerful AI comes about, and then starts creating significant changes in society,
1:05:021 hour, 5 minutes, 2 secondswhich is what all the AI leaders and big tech companies believe, I think. Super powerful AI is gonna change society massively.
1:05:081 hour, 5 minutes, 8 secondsAnd therefore, this compounding effect of the difference in compute is really important.
1:05:121 hour, 5 minutes, 12 secondsThere's some sci-fi out there, where AI is measured in how much power is delivered to compute. Or how much is being...
1:05:211 hour, 5 minutes, 21 secondsThat's a way of thinking about what's the economic output is just how much power are you directing towards that AI? Should we talk about reasoning models with this?
1:05:281 hour, 5 minutes, 28 secondsAs a way that this might be actionable as something that people can actually see? So, the reasoning models that are coming out with R1 and o1, they're designed to use more compute.
1:05:371 hour, 5 minutes, 37 secondsThere's a lot of buzzy words in the AI community about this, test-time compute, inference time compute, whatever. But Dylan has good research on this.
1:05:461 hour, 5 minutes, 46 secondsYou can get to the specific numbers on the ratio of when you train a model, you can look at things about the amount of compute used at training and amount of compute use inference.
1:05:531 hour, 5 minutes, 53 secondsThese reasoning models are making inference way more important to doing complex tasks. In the fall in December,
1:06:001 hour, 6 minutestheir OpenAI announced this o3 model. There's another thing in AI, when things move fast, we get both announcements and releases.
1:06:061 hour, 6 minutes, 6 secondsAnnouncements are essentially blog posts where you pat yourself on the back and you say you did things. And releases are on the models out there, the papers out there, et cetera. So, OpenAI has announced o3,
1:06:141 hour, 6 minutes, 14 secondsand we can check if o3-mini is out as of recording potentially, but that doesn't really change the point,
1:06:201 hour, 6 minutes, 20 secondswhich is that the breakthrough result was something called ARC-AGI task, which is the abstract reasoning corpus,
1:06:261 hour, 6 minutes, 26 secondsa task for artificial general intelligence. Francois Chollet is the guy who's been... It's a multi-year old paper.
1:06:341 hour, 6 minutes, 34 secondsIt's a brilliant benchmark.
1:06:361 hour, 6 minutes, 36 secondsAnd the number for OpenAI o3 to solve this was that it used as some number of samples in the API,
1:06:431 hour, 6 minutes, 43 secondsthe API has thinking effort and number of samples. They used a thousand samples to solve this task. And it comes out to be like 5 to $20 per question,
1:06:531 hour, 6 minutes, 53 secondswhich you're putting in effectively a math puzzle. And then, it takes orders of dollars to answer one question. And this is a lot of compute.
1:07:011 hour, 7 minutes, 1 secondIf those are gonna take off in the US, OpenAI needs a ton of GPUs on inference to capture this. They have this OpenAI ChatGPT Pro subscription,
1:07:081 hour, 7 minutes, 8 secondswhich is $200 a month. - [Dylan] Which Sam said they're losing money on.
1:07:111 hour, 7 minutes, 11 seconds- Which means that people are burning a lot of GPUs on inference. And I've signed up with it, I've played with it. I don't think I'm a power user, but I use it.
1:07:191 hour, 7 minutes, 19 secondsThat is the thing that a Chinese company with mediumly strong export controls, there will always be loopholes, might not be able to do it all.
1:07:271 hour, 7 minutes, 27 secondsAnd if that, the main result for o3 is also a spectacular coding performance.
1:07:321 hour, 7 minutes, 32 secondsAnd if that feeds back into AI companies being able to experiment better. - So, presumably the idea is for an AGI,
1:07:411 hour, 7 minutes, 41 secondsa much larger fraction of the compute would be used for this test-time compute for the reasoning,
1:07:461 hour, 7 minutes, 46 secondsfor the AGI goes into a room and thinks about how to take over the world and come back in 2.7 hours.
1:07:541 hour, 7 minutes, 54 seconds- This is what- - And that it's gonna take a lot of compute. - This is what people like CEO or leaders of OpenAI and Anthropic talk about is like autonomous AI models,
1:08:031 hour, 8 minutes, 3 secondswhich is you give them a task and they work on it in the background. I think my personal definition of AGI is much simpler.
1:08:101 hour, 8 minutes, 10 secondsI think language models are a form of AGI and all of this super powerful stuff is a next step that's great if we get these tools. But a language model has so much value in so many domains.
1:08:191 hour, 8 minutes, 19 secondsIt is a general intelligence to me.
1:08:211 hour, 8 minutes, 21 secondsBut this next step of agentic things where they're independent and they can do tasks that aren't in the training data is what the few year outlook that these AI companies are driving for.
1:08:321 hour, 8 minutes, 32 seconds- I think the terminology here that Dario uses as super powerful AI. So, I agree with you on the AGI.
1:08:391 hour, 8 minutes, 39 secondsI think we already have something like that's exceptionally impressive that Alan Turing would for sure say is AGI. But he's referring more to something once in possession of,
1:08:491 hour, 8 minutes, 49 secondsthan you would have a significant military and geopolitical advantage over other nations. So, it's not just like you can ask it how to cook an omelet.
1:08:581 hour, 8 minutes, 58 seconds- And he has a much more positive view. And as I say, machines of love and grace. - Yes. - I've read into this.
1:09:031 hour, 9 minutes, 3 secondsI don't have enough background in physical sciences to gauge exactly how confident I am in if AI can revolutionize biology.
1:09:101 hour, 9 minutes, 10 secondsI am safe saying that AI is going to accelerate the progress of any computational science. - So, we're doing a depth-first search here on topics,
Chapter 6: AGI timeline
1:09:181 hour, 9 minutes, 18 secondstaking tangent of a tangent. So, let's continue on that depth-first search. You said that you're both feeling the AGI,
1:09:281 hour, 9 minutes, 28 secondsso what's your timeline? (Nathan chuckles)
1:09:301 hour, 9 minutes, 30 secondsDario's 2026 for the super powerful AI that's basically agentic to a degree,
1:09:371 hour, 9 minutes, 37 secondswhere it's a real security threat, that level of AGI. What's your timeline?
1:09:441 hour, 9 minutes, 44 seconds- I don't like to attribute specific abilities because predicting specific abilities and when is very hard.
1:09:491 hour, 9 minutes, 49 secondsI think mostly if you're gonna say that I'm feeling the AGI is that I expect continued rapid surprising progress over the next few years.
1:09:571 hour, 9 minutes, 57 secondsSo, something like R1 is less surprising to me from DeepSeek,
1:10:011 hour, 10 minutes, 1 secondbecause I expect there to be new paradigms where substantial progress can be made. I think DeepSeek-R1 is so unsettling, because we're on this path with ChatGPT,
1:10:101 hour, 10 minutes, 10 secondsit's like it's getting better, it's getting better, it's getting better. And then, we have a new direction for changing the models. And we took one step like this and we took a step up. So, it looks like a really fast slope.
1:10:191 hour, 10 minutes, 19 secondsAnd then, we're gonna just take more steps.
1:10:201 hour, 10 minutes, 20 secondsSo, this is really unsettling when you have these big steps. And I expect that to keep happening. I've tried OpenAI Operator,
1:10:291 hour, 10 minutes, 29 secondsI've tried Claude computer use, they're not there yet. I understand the idea,
1:10:331 hour, 10 minutes, 33 secondsbut it's just so hard to predict what is the breakthrough that'll make something like that work.
1:10:371 hour, 10 minutes, 37 secondsAnd I think it's more likely that we have breakthroughs that work and things that we don't know what they're gonna do. So, everyone wants agents.
1:10:441 hour, 10 minutes, 44 secondsDario has a very eloquent way of describing this. And I just think that it's like, there's gonna be more than that.
1:10:511 hour, 10 minutes, 51 secondsSo, just expect these things to come.
1:10:531 hour, 10 minutes, 53 seconds- I'm gonna have to try to pin you down to a date on the AGI timeline, (chuckles) like the nuclear weapon moment.
1:11:011 hour, 11 minutes, 1 secondSo, moment where on the geopolitical stage. There's a real, like,
1:11:091 hour, 11 minutes, 9 seconds'cause we're talking about export controls, when do you think just even to throw out a date, when do you think that would be?
1:11:161 hour, 11 minutes, 16 secondsFor me, it's probably after 2030, so I'm not as- - That's what I would say. - So, define that. Because to me, it almost has already happened.
1:11:241 hour, 11 minutes, 24 secondsYou look at elections in India and Pakistan, people get AI voice calls, and think they're talking to the politician. The AI diffusion rules,
1:11:321 hour, 11 minutes, 32 secondswhich was enacted in the last couple weeks of the Biden admin and looks like the Trump admin will keep, and potentially even strengthen,
1:11:381 hour, 11 minutes, 38 secondslimit cloud computing and GPU sales to countries that are not even related to China, it's like.
1:11:441 hour, 11 minutes, 44 secondsThis is- - Portugal and all these like normal countries are on the- - Yeah, and it's like- - You need approval from the US list.
1:11:491 hour, 11 minutes, 49 seconds- Like, yeah, Portugal and like all these countries that are allies. - Yup. - Singapore. They freaking have F-35s and we don't let them buy GPUs.
1:11:571 hour, 11 minutes, 57 seconds- Mm-hmm. - This to me is already to the scale of like-
1:12:011 hour, 12 minutes, 1 second- Well, that just means that the US military is really nervous about this new technology. That doesn't mean the technology is already there.
1:12:091 hour, 12 minutes, 9 secondsSo, they might be just very cautious about this thing that they don't quite understand. But that's a really good point, the robocalls,
1:12:181 hour, 12 minutes, 18 secondsswarms of semi-intelligent bots could be a weapon, could be doing a lot of social engineering. - There's tons of talk about,
1:12:271 hour, 12 minutes, 27 secondsfrom the 2016 elections like Cambridge Analytica, and all this stuff, Russian influence.
1:12:321 hour, 12 minutes, 32 secondsEvery country in the world is pushing stuff onto the internet and has narratives they want. Every technically competent, whether it's Russia, China, US, Israel, et cetera.
1:12:411 hour, 12 minutes, 41 secondsPeople are pushing viewpoints onto the internet, and mass.
1:12:441 hour, 12 minutes, 44 secondsAnd language models crash the cost of very intelligent sounding language. - There's some research that shows that the distribution is actually a limiting factor.
1:12:521 hour, 12 minutes, 52 secondsSo, language models haven't yet made misinformation, particularly changed the equation there. The internet is still ongoing.
1:13:021 hour, 13 minutes, 2 secondsI think there's a blog, AI Snake Oil,
1:13:031 hour, 13 minutes, 3 secondsand some of my friends at Princeton that write on this stuff. So, there is research. It's a default that everyone assumes.
1:13:081 hour, 13 minutes, 8 secondsAnd I would've thought the same thing is that misinformation doesn't gonna get far worse with language models.
1:13:131 hour, 13 minutes, 13 secondsI think in terms of internet posts and things that people have been measuring,
1:13:171 hour, 13 minutes, 17 secondsit hasn't been a exponential increase or something extremely measurable,
1:13:211 hour, 13 minutes, 21 secondsand things you're talking about with voice calls and stuff like that. It could be in modalities that are harder to measure. So, it's something that it's too soon to tell in terms of,
1:13:311 hour, 13 minutes, 31 secondsI think that's political instability via the web is very,
1:13:361 hour, 13 minutes, 36 secondsit's monitored by a lot of researchers to see what's happening. You're asking about the AGI thing.
1:13:441 hour, 13 minutes, 44 secondsIf you make me give a year, I'm be like, okay, I have AI CEOs saying this.
1:13:481 hour, 13 minutes, 48 secondsThey've been saying two years for a while. - Mm-hmm. - I think that they're people like Dario at Anthropic, the CEO has thought about this so deeply.
1:13:571 hour, 13 minutes, 57 secondsI need to take their word seriously, but also understand that they have different incentives. So, I would be like, add a few years to that,
1:14:051 hour, 14 minutes, 5 secondswhich is how you get something similar to 2030 or a little after 2030.
1:14:081 hour, 14 minutes, 8 seconds- I think to some extent, we have capabilities that hit a certain point where any one person could say,
1:14:131 hour, 14 minutes, 13 secondsoh, okay, if I can leverage those capabilities for X amount of time, this is AGI. Call it '27, '28.
1:14:191 hour, 14 minutes, 19 secondsBut then the cost of actually operating that capability - Yeah, this is gonna be - is - my point. (chuckles) - so, so extreme that no one can actually deploy it at scale
1:14:281 hour, 14 minutes, 28 secondsand mass to actually completely revolutionize the economy on a snap of a finger.
1:14:331 hour, 14 minutes, 33 secondsSo, I don't think it will be like a snap of the finger moment. - Yeah, it's a physical constraint type- - Rather it'll be a, oh, the capabilities are here, but I can't deploy it everywhere.
1:14:411 hour, 14 minutes, 41 secondsAnd so, one simple example going back to 2023 was when being with GPT-4 came out and everyone was freaking out about Search.
1:14:501 hour, 14 minutes, 50 seconds- Oh gosh. - Perplexity came out. If you did the cost on like, hey, implementing GPT-3 into every Google search, it was like, oh, okay, this is just like physically impossible to implement.
1:14:581 hour, 14 minutes, 58 secondsAnd as we step forward to going back to the test-time compute thing, a query for...
1:15:051 hour, 15 minutes, 5 secondsYou asked ChatGPT a question, it cost cents for their most capable model of chat to get a query back.
1:15:121 hour, 15 minutes, 12 secondsTo solve an ARC-AGI problem though, cost 5 to 20 bucks. And this is an a- - [Nathan] It's only going up from there.
1:15:191 hour, 15 minutes, 19 seconds- This is 1,000, 10,000x factor difference in cost to respond to a query versus do a task. And the task of ARC-AGI, it's not like,
1:15:281 hour, 15 minutes, 28 secondsit's simple to some extent, but it's also like what are the tasks that we want A... Okay, AGI, quote, unquote,
1:15:361 hour, 15 minutes, 36 seconds"what we have today" can do ARC-AGI. Three years from now, it can do much more complicated problems,
1:15:401 hour, 15 minutes, 40 secondsbut the cost is gonna be measured in thousands and thousands and hundreds of thousands of dollars of GPU time, and there just won't be enough power, GPUs, infrastructure - Yeah.
1:15:481 hour, 15 minutes, 48 seconds- to operate this, and therefore, shift everything in the world on the snap the finger. But at that moment, who gets to control and point the AGI at a task.
1:15:581 hour, 15 minutes, 58 secondsAnd so, this was in Dario's post that he's like,
1:16:001 hour, 16 minuteshey, China can effectively and more quickly than us, point their AGI at military tasks. And they have been in many ways,
1:16:081 hour, 16 minutes, 8 secondsfaster at adopting certain new technologies into their military, especially with regards to drones.
1:16:151 hour, 16 minutes, 15 secondsThe US maybe has a long-standing large air sort of fighter jet type of thing, bombers,
1:16:211 hour, 16 minutes, 21 secondsbut when it comes to asymmetric arms such as drones, they've completely leapfrogged the US and the west.
1:16:281 hour, 16 minutes, 28 secondsAnd the fear that Dario is pointing out there, I think, is that, yeah, great, we'll have AGI in the commercial sector.
1:16:351 hour, 16 minutes, 35 secondsThe US military won't be able to implement it super fast.
1:16:381 hour, 16 minutes, 38 secondsChinese military could and they could direct all their resources to implementing it in the military,
1:16:421 hour, 16 minutes, 42 secondsand therefore solving military logistics or solving some other aspect of disinformation for targeted certain set of people,
1:16:501 hour, 16 minutes, 50 secondsso that they can flip a country's politics,
1:16:521 hour, 16 minutes, 52 secondsor something like that, that is actually like catastrophic versus the US just wants to,
1:16:571 hour, 16 minutes, 57 seconds'cause it'll be more capitalistic allocated just towards whatever - Mm. - is the highest return on income, which might be like building factories better or whatever.
1:17:041 hour, 17 minutes, 4 seconds- So, everything I've seen, people's intuition seems to fail on robotics. So, you have this kind of general optimism.
1:17:111 hour, 17 minutes, 11 secondsI've seen this on self-driving cars. People think it's much easier problem than it is. Similar with drones. Here, I understand it a little bit less,
1:17:201 hour, 17 minutes, 20 secondsbut I've just seen the reality of the war in Ukraine and the usage of drones on both sides.
1:17:261 hour, 17 minutes, 26 secondsAnd it seems that humans still far outperform any fully autonomous systems.
1:17:341 hour, 17 minutes, 34 secondsAI is an assistant, but humans drive FPV drones where the humans controlling most of it just far, far, far outperforms AI systems.
1:17:431 hour, 17 minutes, 43 secondsSo, I think it's not obvious to me that we're going to have swarms of autonomous robots anytime soon in the military context.
1:17:511 hour, 17 minutes, 51 secondsMaybe the fastest I can imagine is 2030, which is why I said 2030 for the super powerful AI.
1:17:581 hour, 17 minutes, 58 secondsWhenever you have large-scale swarms of robots doing military actions, that's when the world just starts to look different to me.
1:18:071 hour, 18 minutes, 7 secondsSo, that's the thing I'm really worried about.
1:18:091 hour, 18 minutes, 9 secondsBut there could be cyber war type of technologies that from social engineering,
1:18:151 hour, 18 minutes, 15 secondsto actually just swarms the robots that find attack vectors in our code bases, and shut down power grids, that kind of stuff.
1:18:241 hour, 18 minutes, 24 secondsAnd it could be one of those things like on any given weekend or something, power goes out, nobody knows why,
1:18:311 hour, 18 minutes, 31 secondsand the world changes forever.
1:18:331 hour, 18 minutes, 33 secondsJust power going out for two days in all of the United States, that will lead to murder to chaos.
Chapter 7: China's manufacturing capacity
1:18:411 hour, 18 minutes, 41 secondsBut going back to export controls,
1:18:451 hour, 18 minutes, 45 secondsdo you see that as a useful way to control the balance of power geopolitically in the context of AI?
1:18:561 hour, 18 minutes, 56 seconds- And I think going back to my viewpoint is if you believe we're in this stage of economic growth and change that we've been in for the last 20 years,
1:19:051 hour, 19 minutes, 5 secondsthe export controls are absolutely guaranteeing that China will win long-term,
1:19:111 hour, 19 minutes, 11 secondsif you do not believe AI is going to make significant changes to society in the next 10 years or 5 years.
1:19:171 hour, 19 minutes, 17 secondsFive-year timelines are what the more executives and such of AI companies and even big tech companies believe. But even tenure timelines, it's reasonable.
1:19:261 hour, 19 minutes, 26 secondsBut once you get to, hey, these timelines are below that time period,
1:19:331 hour, 19 minutes, 33 secondsthen the only way to create a sizable advantage or disadvantage for America versus China is if you constrain compute.
1:19:431 hour, 19 minutes, 43 secondsBecause talent is not really something that's constraining. China arguably has more talent, more STEM graduates, more programmers.
1:19:511 hour, 19 minutes, 51 secondsThe US can draw upon the world's people, which it does. There's tons of foreigners in the AI industry-
1:19:571 hour, 19 minutes, 57 seconds- [Nathan] So many of these AI teams are all people without a US passport. - Yeah. (Nathan laughing)
1:20:031 hour, 20 minutes, 3 secondsMany of them are Chinese people who are moving - Yeah. - to North America, and that's great. That's exactly what we want. But there's that talent is one aspect,
1:20:111 hour, 20 minutes, 11 secondsbut I don't think that's one that is a measurable advantage for the US or not. It truly is just whether or not compute. Now, even on the compute side,
1:20:191 hour, 20 minutes, 19 secondswhen we look at chips versus data centers.
1:20:221 hour, 20 minutes, 22 secondsChina has the unprecedented ability to build ridiculous sums of power clockwork.
1:20:291 hour, 20 minutes, 29 secondsThey're always building more and more power.
1:20:311 hour, 20 minutes, 31 secondsThey've got steel mills that individually are the size of the entire US industry.
1:20:371 hour, 20 minutes, 37 secondsAnd they've got aluminum mills that consume gigawatts and gigawatts of power. And when we talk about what's the biggest data center, OpenAI made this huge thing about Stargate,
1:20:461 hour, 20 minutes, 46 secondstheir announcement there, that's like once it's fully built out in a few years, it'll be two gigawatts of power.
1:20:541 hour, 20 minutes, 54 secondsAnd this is still smaller than the largest industrial facilities in China.
1:20:581 hour, 20 minutes, 58 secondsChina, if they wanted to build the largest data center in the world, if they had access to the chips, could. So, it's just a question of when, not if.
1:21:071 hour, 21 minutes, 7 seconds- So, their industrial capacity far exceeds the United States? - [Dylan] Exactly. - To the the manufacture stuff. - Yeah. - So, long-term,
1:21:151 hour, 21 minutes, 15 secondsthey're going to be manufacturing chips there. - Chips are a little bit more specialized. I'm specifically referring to the data centers.
1:21:221 hour, 21 minutes, 22 secondsChips, fabs take huge amounts of power, don't get me wrong. That's not necessarily the gating factor there.
1:21:271 hour, 21 minutes, 27 secondsThe gating factor on how fast people can build the largest clusters today in the US is power. Whether it's now it could be power generation,
1:21:351 hour, 21 minutes, 35 secondspower transmission, substations, and all these sorts of transformers and all these things,
1:21:411 hour, 21 minutes, 41 secondsbuilding the data center, these are all constraints on the US industry's ability to build larger and larger training systems,
1:21:491 hour, 21 minutes, 49 secondsas well as deploying more and more inference compute.
1:21:521 hour, 21 minutes, 52 seconds- I think we need to make the point clear on why the time is now for people that don't think about this, 'cause essentially with export controls,
1:21:581 hour, 21 minutes, 58 secondsyou're making it so China cannot make or get cutting edge chips. And the idea is that if you time this wrong,
1:22:051 hour, 22 minutes, 5 secondsChina is pouring a ton of money into their chip production. And if you time it wrong, they're going to have more capacity for production, more capacity for energy,
1:22:131 hour, 22 minutes, 13 secondsand figure out how to make the chips and have more capacity than the rest of the world to make the chips, because everybody can buy, they're gonna sell their Chinese chips to everybody.
1:22:211 hour, 22 minutes, 21 secondsThey might subsidize them.
1:22:221 hour, 22 minutes, 22 secondsAnd therefore, if AI takes a long time to become differentiated,
1:22:261 hour, 22 minutes, 26 secondswe've kneecapped the financial performance of American companies. Nvidia can sell less. TSMC cannot sell to China.
1:22:331 hour, 22 minutes, 33 secondsSo, therefore, we have less demand to therefore to keep driving the production cycle.
1:22:401 hour, 22 minutes, 40 secondsSo, that's the assumption behind the timing being important. - Less than 10 years or 5 years to above. China will win because of these restrictions long-term,
1:22:491 hour, 22 minutes, 49 secondsunless AI does something in the short-term, which I believe AI will do, make massive changes to society in the medium short-term.
1:22:571 hour, 22 minutes, 57 secondsAnd so, that's the big unlocker there. And even today, if Xi Jinping decided to get, quote, unquote, "scale pilled",
1:23:061 hour, 23 minutes, 6 secondsi.e, decide that scaling laws are what matters,
1:23:101 hour, 23 minutes, 10 secondsjust like the US executives like Satya Nadella and Mark Zuckerberg, and Sundar, and all these US executives of the biggest,
1:23:171 hour, 23 minutes, 17 secondsmost powerful tech companies,
1:23:191 hour, 23 minutes, 19 secondshave decided they're scale pilled and they're building multi-gigawatt data centers. Whether it's in Texas or Louisiana, or Wisconsin,
1:23:251 hour, 23 minutes, 25 secondswherever it is, they're building these massive things that cost as much as their entire budget for spending on data centers globally in one spot.
1:23:341 hour, 23 minutes, 34 secondsThis is what they've committed to for next year, year after, et cetera.
1:23:381 hour, 23 minutes, 38 secondsAnd so, they're so convinced that this is the way that this is what they're doing. But if China decided to, they could do it faster than us.
1:23:461 hour, 23 minutes, 46 secondsBut this is where the restrictions come in. It is not clear that China as a whole has decided, from the highest levels that this is a priority.
1:23:541 hour, 23 minutes, 54 secondsThe US has.
1:23:561 hour, 23 minutes, 56 secondsYou see Trump talking about DeepSeek and Stargate within the same week.
1:24:001 hour, 24 minutesAnd the Biden admin as well had a lot of discussions about AI and such. It's clear that they think about it.
1:24:061 hour, 24 minutes, 6 secondsOnly just last week did DeepSeek meet the second in command of China. They have not even met the top,
1:24:131 hour, 24 minutes, 13 secondsand haven't met Xi, she hasn't set down.
1:24:161 hour, 24 minutes, 16 secondsAnd they only just released a subsidy of a trillion RMB, roughly $160 billion,
1:24:221 hour, 24 minutes, 22 secondswhich is closer to the spending of like Microsoft and Meta, and Google combined for this year. So, it's like they're realizing it just now.
1:24:321 hour, 24 minutes, 32 secondsBut that's where these export restrictions come in and say, hey, you can't ship the most powerful US chips to China. You can ship a cut down version.
1:24:401 hour, 24 minutes, 40 secondsYou can't ship the most powerful chips to all these countries who we know are just gonna rent it to China. You have to limit the numbers.
1:24:481 hour, 24 minutes, 48 seconds- [Nathan] And the tools.
1:24:491 hour, 24 minutes, 49 secondsSame- - And same with manufacturing equipment tools, all these different aspects, but it all stems from AI, and then what downstream can slow them down in AI.
1:24:581 hour, 24 minutes, 58 secondsAnd so, the entire semiconductor restrictions, you read them, they're very clear, it's about AI and military civil fusion of technology.
1:25:061 hour, 25 minutes, 6 secondsIt's very clear. And then, from there, it goes, oh,
1:25:081 hour, 25 minutes, 8 secondswell, we're banning them from buying lithography tools and etch tools, and deposition tools.
1:25:131 hour, 25 minutes, 13 secondsAnd, oh, this random subsystem from a random company that's tiny. Why are we banning this? Because all of it,
1:25:191 hour, 25 minutes, 19 secondsthe US government has decided, is critical to AI systems.
1:25:231 hour, 25 minutes, 23 seconds- I think the fulcrum point is the transition from seven nanometer to five nanometer chips,
1:25:281 hour, 25 minutes, 28 secondswhere I think it was Huawei that had the seven nanometer chip a few years ago,
1:25:321 hour, 25 minutes, 32 secondswhich caused another political brouhaha almost like this moment. And then, it's the ASML deep UV. What is that?
1:25:401 hour, 25 minutes, 40 secondsLike extreme ultraviolet lithography. - To set context on the chips, what Nathan's referring to is in 2020, Huawei released their Ascend 910 chip,
1:25:491 hour, 25 minutes, 49 secondswhich was an AI chip, first one on seven nanometer before Google did, before Nvidia did. And they submitted it to the MLPerf benchmark,
1:25:571 hour, 25 minutes, 57 secondswhich is a industry standard for machine learning performance benchmark. And it did quite well. And it was the best chip at the submission.
1:26:051 hour, 26 minutes, 5 secondsThis was a huge deal. The Trump admin of course banned, it was 2019,
1:26:111 hour, 26 minutes, 11 secondsbanned the Huawei from getting seven nanometer chips from TSMC.
1:26:151 hour, 26 minutes, 15 secondsAnd so, then they had to switch to using internal domestically produced chips, which was a multi-year setback. - Many companies have done seven nanometer chips.
1:26:221 hour, 26 minutes, 22 secondsAnd the question is like, we don't know how much Huawei was subsidizing production of that chip.
1:26:271 hour, 26 minutes, 27 secondsIntel has made seven nanometer chips that are not profitable, and things like this.
1:26:311 hour, 26 minutes, 31 secondsSo, this is how it all feeds back into the economic engine of export controls.
Chapter 8: Cold war with China
1:26:361 hour, 26 minutes, 36 seconds- Well, so you're saying that for now, Xi Jinping has not felt the AGI,
1:26:401 hour, 26 minutes, 40 secondsbut it feels like the DeepSeek moment - Yeah. - might like, there might be meetings going on now,
1:26:471 hour, 26 minutes, 47 secondswhere he's gonna start wearing the same T-shirt and things are gonna escalate. (Nathan and Dylan laughing) - He may have woken up last week.
1:26:551 hour, 26 minutes, 55 secondsLiang Feng met the second command guy, and they had a meeting. And then, the next day, they announced the AI subsidies,
1:27:031 hour, 27 minutes, 3 secondswhich are a trillion RMB.
1:27:051 hour, 27 minutes, 5 seconds- So, it's possible that this DeepSeek moment is truly the beginning of a cold war. - That's what a lot of people are worried about.
1:27:121 hour, 27 minutes, 12 secondsPeople in AI have been worried that this is going towards a cold war or already is. - But there is, it's not DeepSeek's fault, but there's something,
1:27:191 hour, 27 minutes, 19 secondsa bunch of factors came together where it was like explosion. - No, history works. - It all has to do with Nvidia stock going down problem. But it's just some (Nathan laughing)
1:27:271 hour, 27 minutes, 27 secondsmass hysteria (Lex drowns out Nathan)
1:27:291 hour, 27 minutes, 29 secondsthat happened that eventually led to Xi Jinping having meetings and waking up to this idea. - And the US government realized in October 7th, 2022,
1:27:381 hour, 27 minutes, 38 secondsbefore ChatGPT released, that restriction on October 7th, which dropped and shocked everyone. And it was very clearly aimed at AI.
1:27:461 hour, 27 minutes, 46 secondsEveryone was like, what the heck are you doing? - And diffusion was out then, but not ChatGPT. - Yeah, but not ChatGPT. - So, it was like starting to be rumblings like-
1:27:531 hour, 27 minutes, 53 seconds- Of what gen AI can do to society, but it was very clear, I think,
1:27:571 hour, 27 minutes, 57 secondsto at least National Security Council and those sort of folks that this was where the world is headed, this cold war that's happening.
1:28:041 hour, 28 minutes, 4 seconds- So, is there any concerns that the export controls push China to take military action on Taiwan?
1:28:151 hour, 28 minutes, 15 seconds- This is the big risk.
1:28:171 hour, 28 minutes, 17 secondsThe further you push China away from having access to cutting edge American and global technologies, the more likely they are to say,
1:28:241 hour, 28 minutes, 24 secondswell, 'cause I can't access it, I might as well... No one should access it. And there's a few interesting aspects of that.
1:28:321 hour, 28 minutes, 32 secondsChina has a urban rural divide like no other. They have a male/female birth ratio like no other,
1:28:401 hour, 28 minutes, 40 secondsto the point where, if you look in most of China, it's like the ratio's not that bad. But when you look at single dudes in rural China, it's like a 30 to 1 ratio. - Mm-hmm.
1:28:471 hour, 28 minutes, 47 seconds- And those are disenfranchised dudes. Quote, unquote, the US has an "incel problem" like China does too. It's just they're placated in some way or crushed down.
1:28:561 hour, 28 minutes, 56 secondsWhat do you do with these people?
1:28:571 hour, 28 minutes, 57 secondsAnd at the same time, you're not allowed to access the most important technology, at least the US thinks so.
1:29:031 hour, 29 minutes, 3 secondsChina's maybe starting to think this is the most important technology by starting to dump subsidies in it.
1:29:071 hour, 29 minutes, 7 secondsThey thought EVs and renewables were the most important technology. They dominate that now.
1:29:111 hour, 29 minutes, 11 secondsNow, they started thinking about semiconductors in the late 2010s and early 2020s,
1:29:171 hour, 29 minutes, 17 secondsand now they've been dumping money and they're catching up rapidly, and they're gonna do the same with AI. Because they're very talented. So, the question is like,
1:29:271 hour, 29 minutes, 27 secondswhen does this hit a breaking point? And if China sees this as, hey, they can continue...
1:29:361 hour, 29 minutes, 36 secondsIf not having access and starting a true hot war.
1:29:391 hour, 29 minutes, 39 secondsTaking over Taiwan or trying to subvert its democracy in some way, or blockading it, hurts the rest of the world far more than it hurts them,
1:29:481 hour, 29 minutes, 48 secondsthis is something they could potentially do. And so, is this pushing them towards that? Potentially. I'm not quite a geopolitical person,
1:29:561 hour, 29 minutes, 56 secondsbut it's obvious that the world regime of peace and trade is super awesome for economics.
1:30:051 hour, 30 minutes, 5 secondsBut at some point, it could break.
1:30:071 hour, 30 minutes, 7 seconds- I think we should comment why Chinese economy would be hurt by that is that they're export-heavy. I think the United States buys so much,
1:30:141 hour, 30 minutes, 14 secondslike if that goes away, that's how their economy goes.
1:30:161 hour, 30 minutes, 16 seconds- Well, also, they just would not be able to import raw materials from all over the world.
1:30:211 hour, 30 minutes, 21 secondsThe US would just shut down the strait of Malacca and at the same time, the US entire,
1:30:261 hour, 30 minutes, 26 secondsyou could argue almost all the GDP growth in America since the '70s has been either population growth or tech.
1:30:351 hour, 30 minutes, 35 secondsBecause your life today is not that much better than someone from the '80s outside of tech.
1:30:421 hour, 30 minutes, 42 secondsCars, they all have semiconductors in them everywhere. Fridges, semiconductors everywhere.
1:30:461 hour, 30 minutes, 46 secondsThese funny stories about how Russians were taking apart laundry machines because they had certain Texas instrument chips that they could then repurpose and put into their anti-missile missile things,
1:30:571 hour, 30 minutes, 57 secondstheir S-400 or whatever. You would know more about this, but there's all sorts of,
1:31:021 hour, 31 minutes, 2 secondseverything about semiconductors is so integral to every part of our lives.
Chapter 9: TSMC and Taiwan
1:31:061 hour, 31 minutes, 6 seconds- So, can you explain the role of TSMC in this story of semiconductors and maybe also how the United States can break the reliance on TSMC?
1:31:171 hour, 31 minutes, 17 seconds- I don't think it's necessarily breaking their alliance. I think it's getting TSMC to build in the US. So, taking a step back.
1:31:261 hour, 31 minutes, 26 secondsTSMC produces most of the world's chips, especially on the foundry side.
1:31:331 hour, 31 minutes, 33 secondsThere's a lot of companies that build their own chips, Samsung, Intel, STMicro, Texas Instruments, Analog Devices,
1:31:411 hour, 31 minutes, 41 secondsall these kinds of companies build their own chips and XP.
1:31:441 hour, 31 minutes, 44 secondsBut more and more of these companies are outsourcing to TSMC and have been for multiple decades.
1:31:491 hour, 31 minutes, 49 seconds- Can you explain the supply chain there and where most of TSMC is in terms of manufacturing? - Sure. So, historically, supply chain was,
1:31:571 hour, 31 minutes, 57 secondscompanies would build their own chips. It'd be a company-started, they'd build their own chips,
1:32:021 hour, 32 minutes, 2 secondsand then they'd design the chip and build the chip, and sell it.
1:32:051 hour, 32 minutes, 5 secondsOver time, this became really difficult because the cost of building a fab continues to compound every single generation.
1:32:121 hour, 32 minutes, 12 secondsOf course the technology, figuring out the technology for it is incredibly difficult regardless, but just the dollars and cents that are required ignoring,
1:32:191 hour, 32 minutes, 19 secondssaying, hey, yes, I have all the technical capability, which it's really hard to get that, by the way. Intel's failing, Samsung's failing, et cetera.
1:32:251 hour, 32 minutes, 25 secondsBut if you look at just the dollars to spend to build that next generation fab, it keeps growing.
1:32:301 hour, 32 minutes, 30 secondsSort of like Moore's Laws having the cost of chips every two years.
1:32:341 hour, 32 minutes, 34 secondsThere's a separate law that's doubling the cost of fabs every handful of years.
1:32:381 hour, 32 minutes, 38 secondsAnd so, you look at a leading edge fab that is gonna be profitable today,
1:32:421 hour, 32 minutes, 42 secondsthat's building three nanometer chips or two nanometer chips in the future, that's gonna cost north of 30, $40 billion.
1:32:481 hour, 32 minutes, 48 secondsAnd that's just for like a token amount. That's like the base building blocking, you probably need to build multiple. And so, when you look at the industry, over the last,
1:32:571 hour, 32 minutes, 57 secondsif I go back 20, 30 years ago, there were 20, 30 companies that could build the most advanced chips, and then they would design them themselves and sell them.
1:33:041 hour, 33 minutes, 4 secondsSo, companies like AMD would build their own chips.
1:33:061 hour, 33 minutes, 6 secondsIntel of course still builds their own chips they're very famous for. IBM would build their own chips. And you could just keep going down the list. All these companies built their own chips.
1:33:141 hour, 33 minutes, 14 secondsSlowly, they kept falling like flies. And that's because of what TSMC did. They created the foundry business model, which is, I'm not gonna design any chips,
1:33:231 hour, 33 minutes, 23 secondsI'm just gonna contract manufacturer chips for other people. And one of their early customers is Nvidia.
1:33:281 hour, 33 minutes, 28 secondsNvidia is the only semiconductor company that's doing more than a billion dollars of revenue that was started in the era of Foundry.
1:33:391 hour, 33 minutes, 39 secondsEvery other company started before then, and at some point had fabs, which is actually incredible. Like AMD and Intel and Broadcom-
1:33:461 hour, 33 minutes, 46 seconds- [Nathan] Such a great fact. (Nathan drowns out Dylan) - It's like everyone (Nathan laughing) had fabs at some point, or some companies like Broadcom,
1:33:511 hour, 33 minutes, 51 secondsit was like a merger amalgamation of various companies that rolled up. But even today, Broadcom has fabs. They build iPhone, RF radio chips in Colorado for Apple.
1:34:031 hour, 34 minutes, 3 secondsAll these companies had fabs, and for most of the fabs, they threw them away or sold them off, or they got rolled into something else. And now, everyone relies on TSMC.
1:34:111 hour, 34 minutes, 11 secondsIncluding Intel, their latest PC chip uses TSMC chips. It also uses some intel chips, but it uses TSMC process.
1:34:191 hour, 34 minutes, 19 seconds- Can you explain why the foundry model is so successful for these companies?
1:34:231 hour, 34 minutes, 23 secondsWhy are they going with TSMC- - Economies of scale. - Scale. - Yeah. So, like I mentioned, the cost of building a fab is so high. The R&D is so difficult.
1:34:321 hour, 34 minutes, 32 secondsAnd when you look at companies that had their own vertical stack, there was an antiquated process of like, okay,
1:34:391 hour, 34 minutes, 39 secondsI'm so hyper customized to each specific chip.
1:34:421 hour, 34 minutes, 42 secondsBut as we've gone through the history of the last 50 years of electronics and semiconductors, A, you need more and more specialization,
1:34:491 hour, 34 minutes, 49 secondsbecause Moore's Law has died, Dennard scaling has died. i.e, chips are not getting better just for free. From manufacturing,
1:34:561 hour, 34 minutes, 56 secondsyou have to make real architectural innovations. Google is not just running on Intel CPUs for web serving. They have a YouTube chip, they have TPUs,
1:35:031 hour, 35 minutes, 3 secondsthey have pixel chips, they have a wide diversity of chips that generate all the economic value of Google.
1:35:111 hour, 35 minutes, 11 secondsIt's running all the services and stuff.
1:35:121 hour, 35 minutes, 12 secondsAnd so, and this is just Google and you could go across any company in the industry, and it's like this. Cars contain 5,000 chips, 200 different varieties of them.
1:35:201 hour, 35 minutes, 20 secondsAll these random things. A Tesla door handle has two chips. It's ridiculous. And it's a cool door handle. You don't think about it, but it's like, has two really chipped,
1:35:291 hour, 35 minutes, 29 secondslike penny chips in there. Anyways, so as you have more diversity of chips, as you have more specialization required,
1:35:361 hour, 35 minutes, 36 secondsand the cost of fabs continues to grow, you need someone who is laser-focused on building the best process technology and making it as flexible as possible.
1:35:451 hour, 35 minutes, 45 seconds- I think you could say it simpler, which is the cost per fab goes up. And if you are a small player, that makes a few types of chips.
1:35:531 hour, 35 minutes, 53 secondsYou're not gonna have the demand to pay back the cost of the fab.
1:35:561 hour, 35 minutes, 56 secondsWhereas Nvidia can have many different customers and aggregate all this demand into one place,
1:36:011 hour, 36 minutes, 1 secondand then they're the only person that makes enough money building chips to buy the next, to build the next fab. So, this is why the companies slowly get killed,
1:36:111 hour, 36 minutes, 11 seconds'cause they have 10 years ago a chip that is profitable and is good enough, but the cost to build the next one goes up.
1:36:181 hour, 36 minutes, 18 secondsThey may try to do this, fail, because they don't have the money to make it work, and then they don't have any chips.
1:36:231 hour, 36 minutes, 23 secondsOr they build it and it's too expensive and they just have not profitable chips. - Or there's more failure points of, you could have one little process-related to some sort of chemical etch or some sort of plasma etch,
1:36:351 hour, 36 minutes, 35 secondsor some little process that screws up, you didn't engineer it right, and now the whole company falls apart, you can't make chips. And so, super, super powerful companies like Intel,
1:36:441 hour, 36 minutes, 44 secondsthey had the weathering storm to like, hey,
1:36:461 hour, 36 minutes, 46 secondsthey still exist today, even though they really screwed up their manufacturing six, seven years ago. But in the case of like AMD, they almost went bankrupt.
1:36:531 hour, 36 minutes, 53 secondsThey had to sell their fabs to Mubadala, UAE.
1:36:571 hour, 36 minutes, 57 secondsAnd that became a separate company called GlobalFoundries, which is a foundry firm.
1:37:011 hour, 37 minutes, 1 secondAnd then, AMD was able to then focus on the return back up was like,
1:37:051 hour, 37 minutes, 5 secondshey, let's focus on making chiplets and a bunch of different chips for different markets.
1:37:091 hour, 37 minutes, 9 secondsAnd focusing on specific workloads rather than all of these different things. And so, you get more diversity of chips, you have more companies than ever designing chips,
1:37:181 hour, 37 minutes, 18 secondsbut you have fewer companies than ever manufacturing them. And this is where TSMC comes in, is they've just been the best.
1:37:251 hour, 37 minutes, 25 secondsThey are so good at it. They're customer-focused, they make it easy for you to fabricate your chips.
1:37:311 hour, 37 minutes, 31 secondsThey take all of that complexity and try and abstract a lot of it away from you. They make good money, they don't make insane money, but they make good money.
1:37:381 hour, 37 minutes, 38 secondsAnd they're able to aggregate all this demand and continue to build the next fab, the next fab, the next fab. - So, why is Taiwan so special for TSMC?
1:37:461 hour, 37 minutes, 46 secondsWhy is it happening there? Can it be replicated inside the United States?
1:37:511 hour, 37 minutes, 51 seconds- Yeah, so there's aspects of it that I would say yes and aspects that I'd say no. TSMC is way ahead,
1:37:581 hour, 37 minutes, 58 secondsbecause Former Executive Morris Chang of Texas Instruments wasn't promoted to CEO, and he is like, screw this, I'm gonna go make my own chip company.
1:38:071 hour, 38 minutes, 7 secondsAnd he went to Taiwan and made TSMC. And there's a whole lot more story there. So, it could have been Texas Instruments, it could have been TSMC,
1:38:151 hour, 38 minutes, 15 secondsbut Texas Semiconductor Manufacturing, instead of Texas Instruments. (Nathan laughing) So, there is that whole story there, but the race- - Sitting here in Texas.
1:38:231 hour, 38 minutes, 23 seconds- And that sounds like a human story, like it didn't get promoted? - Just the brilliance of Morris Chang, which I wouldn't underplay,
1:38:291 hour, 38 minutes, 29 secondsbut there's also a different level of how this works. So, in Taiwan, the number,
1:38:381 hour, 38 minutes, 38 secondstop percent of graduates of students that go to the best school, which is NTU, the top percent of those all go work to TSMC. And guess what their pay is,
1:38:471 hour, 38 minutes, 47 secondstheir starting pay is like $80,000, $70,000.
1:38:501 hour, 38 minutes, 50 secondsWhich is like, that's like starting pay for a good graduate in the US.
1:38:541 hour, 38 minutes, 54 secondsNot the top, the top graduates are making hundreds of thousands of dollars at the Googles and the Amazons, and now I guess the OpenAIs of the world.
1:39:021 hour, 39 minutes, 2 secondsSo, there is a large dichotomy of like,
1:39:051 hour, 39 minutes, 5 secondswhat is the top 1% of the society doing and where are they headed because of economic reasons. Intel never paid that crazy good. And it didn't make sense to them.
1:39:131 hour, 39 minutes, 13 secondsThat's one aspect, where's the best going? Second is the work ethic. We like to work, you work a lot, we work a lot,
1:39:211 hour, 39 minutes, 21 secondsbut at the end of the day,
1:39:251 hour, 39 minutes, 25 secondswhat is the time and amount of work that you're doing and what does a fab require? Fabs are not work from home jobs. They are, you go into the fab and grueling work.
1:39:331 hour, 39 minutes, 33 secondsThere's, hey, if there is any amount of vibration. An earthquake happens, vibrates the machines,
1:39:411 hour, 39 minutes, 41 secondsthey're either broken, you've scrapped some of your production. And then, in many cases, they're like calibrated properly. So, when TSMC, when there's an earthquake,
1:39:491 hour, 39 minutes, 49 secondsrecently there's been an earthquake, TSMC doesn't call their employees, they just go to the fab and they just show up.
1:39:561 hour, 39 minutes, 56 secondsThe parking lot gets slammed and people just go into the fab and fix it. It's like ants. It's like a hive of ants.
1:40:041 hour, 40 minutes, 4 secondsIt doesn't get told by the queen what to do. The ants just know. - It's like one person just specializes on these one task,
1:40:111 hour, 40 minutes, 11 secondsand it's like, you're gonna take this one tool and you're the best person in the world,
1:40:141 hour, 40 minutes, 14 secondsand this is what you're gonna do for your whole life is this one task and the fab.
1:40:171 hour, 40 minutes, 17 seconds- Which is like some special chemistry plus nano manufacturing on one line of tools that continues to get iterated.
1:40:231 hour, 40 minutes, 23 secondsAnd yeah, it's like specific plasma etch for removing silicon dioxide. That's all you focus on your whole career, and it's like such a specialized thing.
1:40:311 hour, 40 minutes, 31 secondsAnd so, it's not like the tasks are transferable. AI today is awesome, because people can pick it up like that.
1:40:371 hour, 40 minutes, 37 secondsSemiconductor manufacturing is very antiquated and difficult.
1:40:401 hour, 40 minutes, 40 secondsNone of the materials are online for people to read easily and learn.
1:40:441 hour, 40 minutes, 44 secondsThe papers are very dense and it takes a lot of experience to learn. And so, it makes the barrier to entry much higher too.
1:40:511 hour, 40 minutes, 51 secondsSo, when you talk about, hey, you have all these people that are super specialized, they will work 80 hours a week in a factory, in a fab.
1:41:011 hour, 41 minutes, 1 secondAnd if anything goes wrong,
1:41:021 hour, 41 minutes, 2 secondsthey'll go show up in the middle of the night because some earthquake, their wife is like, "There's an earthquake." He is like, "Great, I'm gonna go to the fab." (Nathan laughing) - [Nathan] It's like a crime.
1:41:091 hour, 41 minutes, 9 seconds- Would you as an American, do that? It's like these sorts of things are like, what, I guess are the exemplifying, like why TSMC is so amazing.
1:41:171 hour, 41 minutes, 17 secondsNow, can you replicate it in the US?
1:41:191 hour, 41 minutes, 19 secondsLet's not ignore Intel was the leader in manufacturing for over 20 years. They brought every technology to market first besides EUV,
1:41:281 hour, 41 minutes, 28 secondsstrained silicon, High-K/Metal Gates, FinFET,
1:41:311 hour, 41 minutes, 31 secondsand the list just goes on and on and on of technologies that Intel brought to market first, made the most money from, and manufactured at scale first,
1:41:401 hour, 41 minutes, 40 secondsbest, highest profit margins. So, we shouldn't ignore that Intel can't do this. It's that the culture has broken.
1:41:481 hour, 41 minutes, 48 secondsYou've invested in the wrong things. They said no to the iPhone.
1:41:511 hour, 41 minutes, 51 secondsThey had all these different things regarding mismanagement of the fabs, mismanagement of designs, this lockup. And at the same time,
1:41:591 hour, 41 minutes, 59 secondsall these brilliant people, these 50,000 PhDs, or masters that have been working on specific chemical, or physical processes,
1:42:081 hour, 42 minutes, 8 secondsor nano manufacturing processes for decades, in Oregon, they're still there. They're still producing amazing work.
1:42:121 hour, 42 minutes, 12 secondsIt's just like getting it to the last mile of production at high-yield,
1:42:151 hour, 42 minutes, 15 secondswhere you can manufacture dozens and hundreds of different kinds of chips, and it's good. Customer experience has broken.
1:42:241 hour, 42 minutes, 24 secondsIt's that customer experience. Part of it is like, people will say Intel was too pompous in the 2000s, 2010s. They just thought they were better than everyone.
1:42:311 hour, 42 minutes, 31 secondsThe tool guys were like, oh, I don't think that this is mature enough. And they're like, ah, you just don't know what we know. This sort of stuff would happen.
1:42:381 hour, 42 minutes, 38 secondsAnd so, can the US bring leading edge semiconductor manufacturing to the US? And thematically, yes.
1:42:451 hour, 42 minutes, 45 secondsAnd we are. TS- - It's happening. Arizona is getting better and better as time goes on.
1:42:501 hour, 42 minutes, 50 seconds- TSMC has built roughly 20% of their capacity for five nanometer in the US.
1:42:561 hour, 42 minutes, 56 secondsNow, this is nowhere near enough. 20% of capacity in the US is like nothing. And furthermore, this is still dependent on Taiwan existing.
1:43:051 hour, 43 minutes, 5 secondsThere's important way to separate it out. There's R&D and there's high volume manufacturing.
1:43:121 hour, 43 minutes, 12 secondsEffectively, there are three places in the world that are doing leading edge R&D. There's Hsinchu, Taiwan, there's Hillsboro, Oregon,
1:43:201 hour, 43 minutes, 20 secondsand there is Pyongyang, South Korea.
1:43:241 hour, 43 minutes, 24 secondsThese three places are doing the leading edge R&D for the rest of the world's leading edge semiconductors.
1:43:301 hour, 43 minutes, 30 secondsNow, manufacturing can be distributed more globally.
1:43:351 hour, 43 minutes, 35 secondsAnd this is where this dichotomy exists of who's actually modifying the process, who's actually developing the next generation one,
1:43:421 hour, 43 minutes, 42 secondswho's improving them? Is Hsinchu, is Hillsboro, is Pyongyang. It is not the rest of these fabs like Arizona.
1:43:501 hour, 43 minutes, 50 secondsArizona is a paperweight. If Hsinchu disappeared off the face of the planet, within a year, couple years,
1:43:571 hour, 43 minutes, 57 secondsArizona would stop producing too. It's actually like pretty critical. One of the things I like to say is if I had a few missiles,
1:44:041 hour, 44 minutes, 4 secondsI know exactly where I could cause the most economic damage. It's not targeting the White House. It's not- - It's the R&D centers. - It's the R&D centers for TSMC, Intel, Samsung,
1:44:131 hour, 44 minutes, 13 secondsand then some of the memory guys, Micron and Hynix.
1:44:151 hour, 44 minutes, 15 seconds- Because they define the future evolution of these semiconductors and everything's moving so rapidly that it really is fundamentally about R&D.
1:44:241 hour, 44 minutes, 24 secondsAnd it is all about TSMC, huh? - And so, TSMC, you cannot purchase a vehicle without TSMC chips.
1:44:321 hour, 44 minutes, 32 secondsYou cannot purchase a fridge without TSMC chips.
1:44:371 hour, 44 minutes, 37 secondsI think one of the few things you can purchase ironically is a Texas Instruments graphing calculator, because they actually manufacture in Texas.
1:44:441 hour, 44 minutes, 44 secondsBut outside of that, like a laptop, - It's depressing. - a phone, anything you, servers, GPUs, none of this stuff can exist. And this is without TSMC.
1:44:531 hour, 44 minutes, 53 secondsAnd in many cases, it's not even like the leading edge, sexy five nanometer chip, three nanometer chip, two nanometer chip.
1:44:581 hour, 44 minutes, 58 secondsOftentimes, it's just some stupid power IC that's converting from some voltage to another, and it's made at TSMC. - This is what China is investing in as well.
1:45:061 hour, 45 minutes, 6 secondsIt's like they can build out this long tail fab where the techniques are much more known. You don't have to figure out these problems with EUV. They're investing in this,
1:45:141 hour, 45 minutes, 14 secondsand then they have large supply for things like the car door handles and the random stuff.
1:45:201 hour, 45 minutes, 20 secondsAnd that trickles down into this whole economic discussion as well, which is they have far more than we do.
1:45:261 hour, 45 minutes, 26 secondsAnd having supply for things like this is crucial to normal life.
1:45:291 hour, 45 minutes, 29 seconds- So, they're starting to invest in high volume manufacturer, but they're not doing R&D. - So, they do R&D on their own.
1:45:361 hour, 45 minutes, 36 secondsThey're just way behind. - Yeah. - So, I would say like in 2015, China had a five-year plan, where they defined by 2025 and 2020 certain goals,
1:45:471 hour, 45 minutes, 47 secondsincluding 80% domestic production of semiconductors. they're not gonna hit that right, to be clear. But they are in certain areas, really, really close.
1:45:551 hour, 45 minutes, 55 secondsLike BYD is probably gonna be the first company in the world to not have to use TSMC for making... 'Cause they have their own fabs for making chips.
1:46:041 hour, 46 minutes, 4 secondsNow, they still have to buy some chips from foreign, for example, like around self-driving ADAS capabilities. 'Cause those are really high-end,
1:46:111 hour, 46 minutes, 11 secondsbut at least like a internal combustion engine has 40 chips in an EV, just for controlling flow rates and all these things, and EVs are even more complicated.
1:46:201 hour, 46 minutes, 20 secondsSo, all these different power ICs and battery management controllers, and all these things, they're insourcing.
1:46:261 hour, 46 minutes, 26 secondsAnd this is something that China has been doing since 2015. Now, as far as the trailing edge, they're getting so much capacity there.
1:46:341 hour, 46 minutes, 34 secondsAs far as the leading edge, i.e, this five nanometer and so on, so forth. Where GPUs, they are still behind.
1:46:401 hour, 46 minutes, 40 secondsAnd this is the US restrictions are trying to stop them in the latter. But all that's happened, is yes, they've slowed down their five nanometer,
1:46:491 hour, 46 minutes, 49 secondsthree nanometer, et cetera, but they've accelerated their, hey, 45 nanometer, 90 nanometer power IC or analog IC,
1:46:561 hour, 46 minutes, 56 secondsor random chip in my keyboard, that kind of stuff.
1:46:591 hour, 46 minutes, 59 secondsSo, there is an angle of the US' actions have been so, from these export, from the angle of the export controls,
1:47:061 hour, 47 minutes, 6 secondshave been so inflammatory at slowing down China's progress on the leading edge that they've turned around and have accelerated their progress elsewhere,
1:47:141 hour, 47 minutes, 14 secondsbecause they know this is so important.
1:47:161 hour, 47 minutes, 16 secondsIf the US is gonna lock them out here or if they lock us out here as well in the trailing edge. And so, going back, can the US build it here?
1:47:241 hour, 47 minutes, 24 secondsYes, but it's gonna take a ton of money.
1:47:261 hour, 47 minutes, 26 secondsI truly think like, to revolutionize and completely insource semiconductors, would take a decade and a trillion dollars. - Is some of it also culture?
1:47:341 hour, 47 minutes, 34 secondsLike you said, extreme competence, extreme work ethic in Taiwan?
1:47:391 hour, 47 minutes, 39 seconds- I think if you have the demand and the money is on the line, the American companies figure it out. It's gonna take handholding with the government.
1:47:451 hour, 47 minutes, 45 secondsBut I think that the culture helps TSMC breakthrough and it's easier for them. You could- - TSMC has some like 90,000 employees.
1:47:521 hour, 47 minutes, 52 secondsIt's not actually that insane amount. The Arizona fab has 3,000 from Taiwan, and these people, their wives were like, yeah,
1:48:001 hour, 48 minuteswe're not gonna have kids unless we use sign up for the Arizona fab. We go to Arizona and we have our kids there. There's also a Japan fab where the same thing happened. And so, these wives drove like,
1:48:091 hour, 48 minutes, 9 secondsthese dudes to go to Japan or America to have the kids there. And it's like it's an element of culture. Yeah, sure. Taiwan works that hard,
1:48:161 hour, 48 minutes, 16 secondsbut also the US has done it in the past, they could do it now. We can just import, I say import,
1:48:231 hour, 48 minutes, 23 secondsthe best people in the world if we want to. - That's where the immigration conversation is a tricky one. And there's been a lot of debate over that.
1:48:301 hour, 48 minutes, 30 secondsBut yeah, it seems absurdly controversial to import the best people in the world. I don't understand why it's controversial.
1:48:361 hour, 48 minutes, 36 secondsThat's the one of the ways of winning. - I'm sure we agree with you.
1:48:391 hour, 48 minutes, 39 seconds(Lex laughing) - And even if you can't import those people,
1:48:411 hour, 48 minutes, 41 secondsI still think you could do a lot to manufacture most of in the US if the money's there. And so, like- - It's just way more expensive. It's not profitable for a long time.
1:48:491 hour, 48 minutes, 49 seconds- And that's the context of like the CHIPS Act is only like $50 billion relative to some of the renewable initiatives
1:48:571 hour, 48 minutes, 57 secondsthat were passed in the Inflation Reduction Act and the Infrastructure Act, which total in the hundreds of billions of dollars.
1:49:021 hour, 49 minutes, 2 secondsAnd so, the amount of money that the US is spending on the semiconductor industry is nothing.
1:49:081 hour, 49 minutes, 8 secondsWhereas all these other countries have structural advantages in terms of work ethic and amount of work, and like things like that. But also a number of STEM graduates,
1:49:161 hour, 49 minutes, 16 secondsthe percentile of their best going to that. But they also have differences in terms of like,
1:49:221 hour, 49 minutes, 22 secondshey, there's just tax benefits in the law and have been in the law for 20 years. And then, some countries have massive subsidies.
1:49:301 hour, 49 minutes, 30 secondsChina has something like $200 billion of semiconductor subsidies a year. We're talking about $50 billion in the US over like six.
1:49:381 hour, 49 minutes, 38 secondsSo, the girth or difference in the subsidy amounts is also huge. And so I think, Trump has been talking about tariffing Taiwan recently.
1:49:481 hour, 49 minutes, 48 secondsThat's like one of these things that's like, oh, okay, well,
1:49:521 hour, 49 minutes, 52 secondsmaybe he doesn't wanna subsidize the US semiconductor industry.
1:49:561 hour, 49 minutes, 56 secondsObviously, tariffing Taiwan is gonna cost a lot of things to get much more expensive.
1:50:001 hour, 50 minutesBut does it change the equation for TSMC building more fabs in the US? That's what he is positing. - So, can you lay out the, so we laid out the importance,
1:50:081 hour, 50 minutes, 8 secondsby the way, it's incredible how much you know about so much. - [Nathan] We told you Dylan knows all this stuff. - Yeah. (Nathan laughing)
1:50:161 hour, 50 minutes, 16 secondsSo, okay, you laid out why TSMC is really important. If we look out into the future 10, 20 years out,
1:50:251 hour, 50 minutes, 25 secondsUS-China relationship seems like it can go to a dark place of cold war,
1:50:341 hour, 50 minutes, 34 secondsescalated cold war, even hot war,
1:50:361 hour, 50 minutes, 36 secondsor to a good place of anything from frenemies to cooperation, to working together.
1:50:441 hour, 50 minutes, 44 secondsSo, in this game theory, complicated game, what are the different trajectories? What should US be doing?
1:50:531 hour, 50 minutes, 53 secondsWhat do you see as the different possible trajectories of US-China relations as both leaders start to feel the AGI more and more,
1:51:001 hour, 51 minutesand see the importance of chips and the importance of AI?
1:51:041 hour, 51 minutes, 4 seconds- Ultimately, the export controls are pointing towards a separate future economy.
1:51:101 hour, 51 minutes, 10 secondsI think the US has made it clear to Chinese leaders that we intend to control this technology at whatever cost to global economic integration.
1:51:231 hour, 51 minutes, 23 seconds- So, that- - It's hard to unwind that. (Nathan chuckles) The card has been played. - To the same extent, they've also limited US companies for mentoring China.
1:51:301 hour, 51 minutes, 30 secondsSo, it's been a long time coming. At some point, there was a convergence. But over at least the last decade,
1:51:381 hour, 51 minutes, 38 secondsit's been branching further and further out. Like US companies can't enter China, Chinese companies can't enter the US. The US is saying, hey, China,
1:51:471 hour, 51 minutes, 47 secondsyou can't get access to our technologies in certain areas. And China's rebutting with the same thing around like,
1:51:531 hour, 51 minutes, 53 secondsthey've done some sort of specific materials in gallium and things like that, that they've tried to limit the US on.
1:51:591 hour, 51 minutes, 59 secondsThere's a US drone company that's not allowed to buy batteries and they have military customers.
1:52:031 hour, 52 minutes, 3 secondsAnd this drone company just tells the military customers like, hey, hey, just get it from Amazon, 'cause I can't actually physically get them.
1:52:101 hour, 52 minutes, 10 secondsThere's all these things that are happening that point to further and further divergence. I have zero idea.
1:52:151 hour, 52 minutes, 15 secondsAnd I would love if we could all hold hands and sing Kumbaya, but I have zero idea how that could possibly happen.
1:52:211 hour, 52 minutes, 21 seconds- Is the divergence good or bad for avoiding war?
1:52:261 hour, 52 minutes, 26 secondsIs it possible that the divergence in terms of manufacturer chips,
1:52:301 hour, 52 minutes, 30 secondsof training AI systems is actually good for avoiding military conflict? - It's an objective fact that the world has been the most peaceful has ever been when there are global hegemons,
1:52:411 hour, 52 minutes, 41 secondsor regional hegemons in historical context.
1:52:451 hour, 52 minutes, 45 secondsThe Mediterranean was the most peaceful ever when the Romans were there. China had very peaceful and warring times.
1:52:501 hour, 52 minutes, 50 secondsAnd the peaceful times were when dynasties had a lock hold over, not just themselves, but all their tributaries around them.
1:52:551 hour, 52 minutes, 55 secondsAnd likewise, the most peaceful time in human history has been when the US was the global hegemon, the last decades.
1:53:041 hour, 53 minutes, 4 secondsNow, we've seen things start to slide with Russia-Ukraine, with what's going on in the Middle East,
1:53:091 hour, 53 minutes, 9 secondsand Taiwan risk, all these different things are starting to bubble up, still objectively extremely peaceful. Now, what happens when it's not one global hegemon,
1:53:161 hour, 53 minutes, 16 secondsbut it's two?
1:53:171 hour, 53 minutes, 17 secondsObviously, and China will be competitive or even overtake the US, like it's possible. And so, this change in global hegemony,
1:53:271 hour, 53 minutes, 27 secondsI don't think it ever happens like super peacefully. When empires fall, which is a possible trajectory for America, they don't pull fall gracefully.
1:53:351 hour, 53 minutes, 35 secondsThey don't just slide out of irrelevance. Usually, there's a lot of shaking.
1:53:401 hour, 53 minutes, 40 secondsAnd so, what the US is trying to do is maintain its top position. And what China is trying to do is become the top position.
1:53:471 hour, 53 minutes, 47 secondsAnd obviously, there's butting of heads here, in the most simple terms. - And that could take shape in all kinds of ways,
1:53:551 hour, 53 minutes, 55 secondsincluding proxy wars.
1:53:571 hour, 53 minutes, 57 secondsAnd now- - Yeah, it seems like it's already happening. As much as I want there to be centuries of prolonged peace,
1:54:031 hour, 54 minutes, 3 secondsit looks like further instability internationally is ahead. - And the US is sort of like current task is like,
1:54:121 hour, 54 minutes, 12 secondshey, if we control AI, if we're the leader in AI, and AI could significantly accelerates progress, then we can maintain the global hegemony position.
1:54:201 hour, 54 minutes, 20 secondsAnd therefore- - [Nathan] I hope that works. - And as an American, (Nathan chuckles) kind of like, okay, I guess that's gonna lead to peace for us.
1:54:271 hour, 54 minutes, 27 secondsNow, obviously, other people around the world get affected negatively.
1:54:331 hour, 54 minutes, 33 secondsObviously, the Chinese people are not gonna be in as advantageous of a position if that happens.
1:54:371 hour, 54 minutes, 37 secondsBut this is the reality of what's being done and the actions that are being carried out.
1:54:431 hour, 54 minutes, 43 seconds- So, can we go back to the specific detail of the different hardware?
Chapter 10: Best GPUs for AI
1:54:471 hour, 54 minutes, 47 secondsThere's this nice graphic in the export controls of which GPUs are allowed to be exported and which are not.
1:54:591 hour, 54 minutes, 59 secondsCan you explain the difference? Is there, from a technical perspective, are the H20s promising?
1:55:081 hour, 55 minutes, 8 seconds- Yeah, so this goes, and I think we'd have to,
1:55:101 hour, 55 minutes, 10 secondswe need to dive really deep into the reasoning aspect and what's going on there.
1:55:141 hour, 55 minutes, 14 secondsBut the H20, the US has gone through multiple iterations of the export controls. This H800 was at one point allowed back in '23,
1:55:231 hour, 55 minutes, 23 secondsbut then it got canceled. And by then, DeepSeek had already built their cluster of, they claim 2k, I think they actually have like many more, something like 10k of those.
1:55:311 hour, 55 minutes, 31 secondsAnd now, this H20 is the legally allowed chip. Nvidia shipped a million of these last year to China. For context, it was like 4 or 5 million GPUs.
1:55:391 hour, 55 minutes, 39 secondsSo, the percentage of GPUs that were this China specific H20 is quite high, roughly 20%, 25%, 20% or so.
1:55:481 hour, 55 minutes, 48 secondsAnd so, this H20 has been neutered in one way, but it's actually upgraded in other ways.
1:55:541 hour, 55 minutes, 54 secondsAnd you could think of chips along three axes for AI,
1:55:591 hour, 55 minutes, 59 secondsignoring software stack and exact architecture, just raw specifications. There's floating point operations, FLOPS.
1:56:061 hour, 56 minutes, 6 secondsThere is memory bandwidth, i.e, and memory capacity, I/O, memory. And then, there is interconnect, chip to chip interconnections.
1:56:141 hour, 56 minutes, 14 secondsAll three of these are incredibly important for making AI systems. Because AI systems involve a lot of compute,
1:56:231 hour, 56 minutes, 23 secondsthey involve a lot of moving memory around, whether it be two memory or two other chips. And so, these three vectors.
1:56:291 hour, 56 minutes, 29 secondsThe US initially had two of these vectors controlled and one of them not controlled, which was FLOPS and interconnect bandwidth were initially controlled.
1:56:371 hour, 56 minutes, 37 secondsAnd then, they said, no, no, no, no,
1:56:391 hour, 56 minutes, 39 secondswe're gonna remove the interconnect bandwidth and just make it a very simple only FLOPS. But now, Nvidia can now make a chip that has, okay, it's cut down on FLOPS,
1:56:471 hour, 56 minutes, 47 secondsso like one third that of the H100 on spec sheet paper performance for FLOPS.
1:56:551 hour, 56 minutes, 55 secondsIn real world, it's closer to half, or maybe even like 60% of it. But then, on the other two vectors, it's just as good for interconnect bandwidth.
1:57:031 hour, 57 minutes, 3 secondsAnd then, for memory bandwidth and memory capacity,
1:57:051 hour, 57 minutes, 5 secondsthe H20 has more memory bandwidth and more memory capacity than the H100. Now, recently, we, at our research,
1:57:131 hour, 57 minutes, 13 secondswe cut Nvidia's production for H20 for this year down drastically. They were gonna make another 2 million of those this year,
1:57:201 hour, 57 minutes, 20 secondsbut they just canceled all the orders a couple weeks ago.
1:57:231 hour, 57 minutes, 23 secondsIn our view, that's because we think that they think they're gonna get restricted. Because why would they cancel all these orders for H20? Because they shipped a million of 'em last year.
1:57:321 hour, 57 minutes, 32 secondsThey had orders in for a couple million this year, and just gone. For H20, B20, a successor to H20, and now they're all gone. Now, why would they do this?
1:57:411 hour, 57 minutes, 41 secondsI think it's very clear.
1:57:421 hour, 57 minutes, 42 secondsThe H20 is actually better for certain tasks and that certain task is reasoning.
1:57:491 hour, 57 minutes, 49 secondsReasoning is incredibly different than... When you look at the different regimes of models, pre-training is all about FLOPS.
1:57:591 hour, 57 minutes, 59 secondsIt's all about FLOPS.
1:58:001 hour, 58 minutesThere's things you do like mixture of experts that we talked about, to trade off interconnect, or to trade off other aspects and lower the FLOPS,
1:58:071 hour, 58 minutes, 7 secondsand rely more on interconnect and memory. But at the end of the day, it's FLOPS is everything. We talk about models in terms of how many FLOPS there are.
1:58:161 hour, 58 minutes, 16 secondsSo, we talk about, oh, GPT-4 is 2e25. Two to the 25th, 25 zeros, FLOP, floating point operations.
1:58:281 hour, 58 minutes, 28 seconds- For training. - For training.
1:58:291 hour, 58 minutes, 29 secondsAnd we're talking about the restrictions for the 2e24 or 25, whatever. The US has an executive order that Trump recently unsigned,
1:58:371 hour, 58 minutes, 37 secondswhich was, hey, 1e26, once you hit that number of floating point operations, you must notify the government and you must share your results with us.
1:58:451 hour, 58 minutes, 45 secondsThere's a level of model where the US government must be told. And that's 1e26. And so, as we move forward, this is an incredibly important...
1:58:541 hour, 58 minutes, 54 secondsFLOP is the vector that the government has cared about historically, but the other two vectors are arguably just as important.
1:59:011 hour, 59 minutes, 1 secondAnd especially when we come to this new paradigm,
1:59:031 hour, 59 minutes, 3 secondswhich the world is only just learning about over the last six months, reasoning.
1:59:071 hour, 59 minutes, 7 seconds- And do we understand firmly which of the three dimensions is best for reasoning? So, interconnect, the FLOPS don't matter as much.
1:59:161 hour, 59 minutes, 16 secondsIs it memory? - Memory. Right. - Yeah, so- - Context length.
1:59:191 hour, 59 minutes, 19 secondsWe're gonna get into technical stuff real fast, yeah. (chuckles) - I would just say there's two articles in this one that I could show, maybe graphics that might be interesting for you to pull up.
1:59:261 hour, 59 minutes, 26 seconds- For the listeners, we're looking at the section of o1 inference architecture tokenomics. - Hmm. Do you wanna explain KV cache before we talk about this?
1:59:351 hour, 59 minutes, 35 secondsI think it's better to- - Okay, yeah.
1:59:361 hour, 59 minutes, 36 secondsWe need to go through a lot of specific technical things of transformers to make this easy for people.
1:59:421 hour, 59 minutes, 42 seconds- Because it's incredibly important because this changes how models work. But I think resetting. Why is memory so important?
1:59:511 hour, 59 minutes, 51 secondsIt's because so far, we've talked about parameter counts.
1:59:531 hour, 59 minutes, 53 secondsAnd mixture of experts, you can change how many active parameters versus total parameters to embed more data but have less FLOPS. But more important, another aspect of,
2:00:032 hours, 3 secondswhat's part of this humongous revolution in the last handful of years is the transformer. And the attention mechanism.
2:00:082 hours, 8 secondsAttention mechanism is that the model understands the relationships between all the words in its context.
2:00:142 hours, 14 secondsAnd that is separate from the parameters themselves. And that is something that you must calculate.
2:00:222 hours, 22 secondsHow each token, each word in the context length is relatively connected to each other. And I think, Nathan,
2:00:302 hours, 30 seconds- Yeah. It's- - you should explain KV cache better.
2:00:312 hours, 31 seconds- KV cache is one of the optimizations- - Yeah. So, the attention operator has three core things. It's queries, keys, and values.
2:00:392 hours, 39 secondsQKV is the thing that goes into this. You'll look at the equation, you see that these matrices are multiplied together.
2:00:462 hours, 46 secondsThese words, query, key, and value, come from information retrieval backgrounds,
2:00:502 hours, 50 secondswhere the query is the thing you're trying to get the values for and you access the keys and the values is re-weighting.
2:00:562 hours, 56 secondsMy background's not information retrieval and things like this. It's just fun to have back links.
2:01:012 hours, 1 minute, 1 secondAnd what effectively happens is that when you're doing these matrix multiplication,
2:01:062 hours, 1 minute, 6 secondsyou're having matrices that are of the size of the context length. So, the number of tokens that you put into the model.
2:01:122 hours, 1 minute, 12 secondsAnd the KV cache is effectively some form of compressed representation of all the previous tokens in the model. So, when you're doing this,
2:01:202 hours, 1 minute, 20 secondswe talk about autoaggressive models. You predict one token at a time. You start with whatever your prompt was. You ask a question like, who was the president in 1825?
2:01:302 hours, 1 minute, 30 secondsThe model then is gonna generate its first token. For each of these tokens, you're doing the same attention operator, where you're multiplying these query key value matrices.
2:01:402 hours, 1 minute, 40 secondsBut the math is very nice, so that when you're doing this repeatedly, this KV cache, this key value operation,
2:01:492 hours, 1 minute, 49 secondsyou can keep appending the new values to it.
2:01:512 hours, 1 minute, 51 secondsSo, you keep track of what your previous values you're inferring over in this autoaggressive chain. You keep it in memory the whole time.
2:01:582 hours, 1 minute, 58 secondsAnd this is a really crucial thing to manage when serving inference at scale.
2:02:042 hours, 2 minutes, 4 secondsThere are far bigger experts in this and there are so many levels of detail that you can go into. Essentially, one of the key,
2:02:122 hours, 2 minutes, 12 secondsquote, unquote, "drawbacks" of the attention operator and the transformer is that there is a form of quadratic memory cost in proportion to the context length.
2:02:212 hours, 2 minutes, 21 secondsSo, as you put in longer questions,
2:02:232 hours, 2 minutes, 23 secondsthe memory used in order to make that computation is going up in the form of a quadratic.
2:02:292 hours, 2 minutes, 29 secondsYou'll hear about a lot of other language model architectures that are sub-quadratic or linear attention forms, which is state-space models.
2:02:382 hours, 2 minutes, 38 secondsWe don't need to go down all these now.
2:02:402 hours, 2 minutes, 40 secondsAnd then, there's innovations on attention to make this memory usage and the ability to attend over long contexts,
2:02:482 hours, 2 minutes, 48 secondsmuch more accurate and high performance. - And those innovations are going to help you with, your highly memory constrain- - You help with memory constraint and performance.
2:02:552 hours, 2 minutes, 55 secondsSo, if you put in a book into, I think Gemini is the model that has the longest context length that people are using.
2:03:012 hours, 3 minutes, 1 secondGemini is known for 1 million and now 2 million context length.
2:03:042 hours, 3 minutes, 4 secondsYou put a whole book into Gemini and sometimes it'll draw facts out of it. It's not perfect. They're getting better.
2:03:122 hours, 3 minutes, 12 secondsSo, there's two things. It's like one, to be able to serve this on the memory level,
2:03:152 hours, 3 minutes, 15 secondsGoogle has magic with their TPU stack where they can serve really long contexts.
2:03:192 hours, 3 minutes, 19 secondsAnd then, there's also many decisions along the way to actually make long context performance work that supplies the data. There's subtle changes to these computations and attention.
2:03:282 hours, 3 minutes, 28 secondsAnd it changes the architecture. But serving long context is extremely memory-constrained, especially when you're making a lot of predictions.
2:03:372 hours, 3 minutes, 37 secondsI actually don't know why input and output tokens are more expensive, but I think essentially, output tokens, you have to do more computation, 'cause you have to sample from the model.
2:03:462 hours, 3 minutes, 46 seconds- I can explain that. So, today, if you use a model, like you look at an API, OpenAI charges a certain price per million tokens.
2:03:542 hours, 3 minutes, 54 secondsAnd that price for input and output tokens is different. And the reason is, is that there is, when you're inputting a query into the model.
2:04:042 hours, 4 minutes, 4 secondsLet's say you have a book. That book, you must now calculate the entire KV cache for, this key value cache. And so, when you do that, that is a parallel operation.
2:04:132 hours, 4 minutes, 13 secondsAll of the tokens can be processed at one time. And therefore, you can dramatically reduce how much you're spending.
2:04:192 hours, 4 minutes, 19 secondsThe FLOP requirements for generating a token and an input token are identical.
2:04:232 hours, 4 minutes, 23 secondsIf I input one token or if I generate one token, it's completely identical. I have to go through the model. But the difference is that I can do that input,
2:04:312 hours, 4 minutes, 31 secondsi.e, the prefill, i.e, the prompt simultaneously in a batch nature. And therefore, it is all FLOP.
2:04:382 hours, 4 minutes, 38 seconds- I think the pricing model mostly they use is for input.
2:04:422 hours, 4 minutes, 42 secondsTokens is about one fourth the price of the output tokens. - Correct. But then, output tokens,
2:04:452 hours, 4 minutes, 45 secondsthe reason why it's so expensive is because I can't do it in parallel. It's autoaggressive. Every time I generate a token, I must not only take the entire,
2:04:532 hours, 4 minutes, 53 secondsI must not only read the whole entire model into memory and activate it, go calculate it to generate the next token.
2:04:592 hours, 4 minutes, 59 secondsI also have to read the entire KV cache and I generate a token, and then I append that KV, that one token I generated, and it's KV cache, and then I do it again.
2:05:072 hours, 5 minutes, 7 secondsAnd so, therefore, this is a non-parallel operation. And this is one where you have to, in the case of pre-fill or prompt,
2:05:152 hours, 5 minutes, 15 secondsyou pull the whole model in, and you calculate 20,000 tokens at once.
2:05:192 hours, 5 minutes, 19 secondsThese 20,000- - So, these are features that APIs are shipping, which is like prompt caching, pre-filling.
2:05:252 hours, 5 minutes, 25 seconds'Cause you can drive prices down and you can make APIs much faster.
2:05:282 hours, 5 minutes, 28 secondsIf you know you're gonna keep, if you run a business and you're gonna keep passing the same initial content to Claude's API, you can load that in to the Anthropic API and always keep it there.
2:05:382 hours, 5 minutes, 38 secondsBut it's very different than we're leading to the reasoning models,
2:05:412 hours, 5 minutes, 41 secondswhich we showed this example earlier and read some of this mumbling stuff.
2:05:462 hours, 5 minutes, 46 secondsAnd what happens is that the output context length is so much higher. And I learned a lot about this from Dylan's work,
2:05:532 hours, 5 minutes, 53 secondswhich is essentially as the output work length gets higher,
2:05:562 hours, 5 minutes, 56 secondsyou're using this, you're writing this quadratic in terms of memory used, and then the GPUs that we have, effectively, you're gonna run out of memory.
2:06:052 hours, 6 minutes, 5 secondsAnd they're all trying to serve multiple requests at once. So, they're doing this batch processing, where not all of the prompts are exactly the same, really complex handling.
2:06:112 hours, 6 minutes, 11 secondsAnd then, as context links gets longer, there's this link. I think you call it critical batch size, where your ability to serve more users.
2:06:202 hours, 6 minutes, 20 secondsSo, how much you can paralyze your inference plummets, because of this long contract.
2:06:252 hours, 6 minutes, 25 secondsSo, your memory usage is going way up with these reasoning models, and you still have a lot of users. So, effectively, the cost to serve multiplies by a ton.
2:06:342 hours, 6 minutes, 34 seconds- [Lex] And we're looking at a plot when the x-axis is sequence length.
2:06:402 hours, 6 minutes, 40 seconds- [Dylan] i.e, how many tokens are being generated/prompt. - Mm-hmm. - [Dylan] So, if I put in a book, that's a million tokens. But if I put in, the sky is blue,
2:06:482 hours, 6 minutes, 48 secondsthen that's like six tokens or whatever.
2:06:492 hours, 6 minutes, 49 seconds- I should say that what we're calling reasoning and chain of thought is extending this sequence length. - It's mostly output tokens. - So, before, three months ago,
2:06:582 hours, 6 minutes, 58 secondswhenever o1 launched, all of the use cases for long context length were like, let me put a ton of documents in and then get an answer out.
2:07:052 hours, 7 minutes, 5 secondsAnd it's a single prefill, compute a lot in parallel, and then output a little bit. Now, with reasoning and agents,
2:07:132 hours, 7 minutes, 13 secondsthis is a very different idea. Now, instead, I might only have like, hey, do this task, or I might have all these documents, but at the end of the day, the model is not just producing a little bit.
2:07:222 hours, 7 minutes, 22 secondsIt's producing tons of information,
2:07:242 hours, 7 minutes, 24 secondsthis chain of thought, - Tens of thousands token. - just continues to go and go and go and go.
2:07:282 hours, 7 minutes, 28 secondsAnd so, the sequence length is effectively that if it's generated 10,000 tokens, it's 10,000 sequence length.
2:07:352 hours, 7 minutes, 35 secondsAnd plus whatever you input it in the prompt. And so, what this chart is showing, and it's a logarithmic chart, is as you grow from 1k to 4k or 4k to 16k,
2:07:462 hours, 7 minutes, 46 secondsthe memory requirements grow so fast for your KV cache that you end up not being able to run a certain number of...
2:07:552 hours, 7 minutes, 55 secondsYour sequence length is capped or the number of users you can serve. - Let's say the model. So, this is showing for a 405b model and batch size 64.
2:08:022 hours, 8 minutes, 2 seconds- Llama 3.1-405b. - Yeah. And batch size is crucial to,
2:08:062 hours, 8 minutes, 6 secondsessentially they just like, you wanna have higher batch size to parallel your throughput. - 64 different users at once, right? - Yeah. - And therefore,
2:08:132 hours, 8 minutes, 13 secondsyour serving costs are lower. Because the server costs the same. This is eight H100s, roughly $2 an hour per GPU. That's $16 an hour.
2:08:212 hours, 8 minutes, 21 secondsThat is like somewhat of a fixed cost. You can do things to make it lower of course, but it's like $16 an hour. Now, how many users can you serve? How many tokens can you generate?
2:08:292 hours, 8 minutes, 29 secondsAnd then, you divide the two and that's your cost. And so, with reasoning models,
2:08:342 hours, 8 minutes, 34 secondsthis is where a lot of the complexity comes about and why memory is so important. Because if you have limited amounts of memory, then you can't serve so many users.
2:08:422 hours, 8 minutes, 42 secondsIf you have limited amounts of memory, your serving speeds get lower. And so, your costs get a lot, lot worse. Because all of a sudden,
2:08:502 hours, 8 minutes, 50 secondsif I was used to, hey, on this $16 an hour server, I'm serving Llama 405b. Or if I'm serving DeepSeek-V3,
2:08:572 hours, 8 minutes, 57 secondsand it's all chat style applications, i.e, we're just chit-chatting. the sequence sensor, a thousand, a few thousand. When you use a language model,
2:09:052 hours, 9 minutes, 5 secondsit's a few thousand context length most times. Sometimes you're dropping a big document, but then you process it, you get your answer, you throw it away. You move on to the next thing. Whereas with reasoning,
2:09:132 hours, 9 minutes, 13 secondsI'm now generating tens of thousands of tokens in sequence. And so, this memory, this KV cache has to stay resonant.
2:09:212 hours, 9 minutes, 21 seconds- Yeah. - And you have to keep loading it, you have to keep it in memory constantly. And now, this butts out other users.
2:09:262 hours, 9 minutes, 26 secondsIf there's now a reasoning task and the model's capable of reasoning, then all of a sudden,
2:09:322 hours, 9 minutes, 32 secondsthat memory pressure means that I can't serve as many users simultaneously. - Let's go into DeepSeek again. So, we're in the post DeepSeek-R1 time I think.
Chapter 11: Why DeepSeek is so cheap
2:09:422 hours, 9 minutes, 42 secondsAnd there's two sides to this market watching how hard it is to serve it. On one side, we're gonna talk about DeepSeek themselves.
2:09:492 hours, 9 minutes, 49 secondsThey now have a chat app that got to number one on the App Store.
2:09:522 hours, 9 minutes, 52 secondsDisclaimer, number one on the App Store is measured by velocity.
2:09:552 hours, 9 minutes, 55 secondsSo, it's not necessarily saying that more people have the DeepSeek app than ChatGPT app. - Mm-hmm. Yep. - But it is still remarkable. Claude has never hit the number one on the App Store.
2:10:022 hours, 10 minutes, 2 secondsEven though everyone in San Francisco is like, oh my god, you gotta use Claude, don't use ChatGPT. So, DeepSeek hit this.
2:10:072 hours, 10 minutes, 7 secondsThey also launched an API product recently where you can ping their API and get these super long responses for R1 out.
2:10:142 hours, 10 minutes, 14 secondsAnd at the same time as these are out, we'll get to what's happened to them.
2:10:192 hours, 10 minutes, 19 secondsBecause the model waits for DeepSeek R-1 are openly available and the license is very friendly, the MIT license commercially available,
2:10:262 hours, 10 minutes, 26 secondsall of these mid-size companies and big companies are trying to be first to serve R1 to their users.
2:10:332 hours, 10 minutes, 33 secondsWe are trying to evaluate R1, 'cause we have really similar research going on. We released the model and we're trying to compare to it.
2:10:392 hours, 10 minutes, 39 secondsAnd out of all the companies that are, quote, unquote, serving R1,
2:10:442 hours, 10 minutes, 44 secondsand they're doing it at prices that are way higher than the DeepSeek API, most of them barely work, and the throughput is really low. - To give context, everyone,
2:10:522 hours, 10 minutes, 52 secondsone of the parts of freaking this out was China reached capabilities. The other aspect is they did it so cheap. And the so cheap,
2:10:582 hours, 10 minutes, 58 secondswe kind of talked about on the training side why it was so cheap slash- - Yeah, let was talk about why it's so cheap on the inference. It works well and it's cheap.
2:11:062 hours, 11 minutes, 6 seconds- Yeah. - Why is R1 so damn cheap? - So, I think there's a couple factors here. One is that they do have model architecture innovations.
2:11:142 hours, 11 minutes, 14 secondsThis MLA, this new attention that they've done is different than the attention from attention is all you need, the transformer attention.
2:11:222 hours, 11 minutes, 22 secondsNow, others have already innovated. There's a lot of work like MQA GQA, local, global, all these different innovations that try to bend the curve.
2:11:312 hours, 11 minutes, 31 secondsIt's still quadratic, but the constant is now smaller. - Related to our previous discussion,
2:11:352 hours, 11 minutes, 35 secondsthis multi-head latent attention can save about 80 to 90% in memory from the attention mechanism,
2:11:422 hours, 11 minutes, 42 secondswhich helps, especially along context. - It's 80 to 90% versus the original,
2:11:462 hours, 11 minutes, 46 secondsbut then versus what people are actually doing, it's still an innovation.
2:11:492 hours, 11 minutes, 49 seconds- This 80 to 90% doesn't say that the whole model is 80 to 90% cheaper, just as one part of it. - Well, and not just that.
2:11:552 hours, 11 minutes, 55 secondsOther people have implemented techniques like local, global, - Yeah, yeah, yeah. - and sliding window and GQA, MQA.
2:12:002 hours, 12 minutesBut anyways, DeepSeek has their attention mechanism is a true architectural innovation.
2:12:042 hours, 12 minutes, 4 secondsThey did tons of experimentation and this dramatically reduces the memory pressure. It's still there. It's still attention, it's still quadratic,
2:12:122 hours, 12 minutes, 12 secondsit's just dramatically reduced it relative to prior forms. - All right. That's the memory pressure. I should say, in case people don't know,
2:12:212 hours, 12 minutes, 21 secondsR1 is 27 times cheaper than o1. (Nathan chuckles)
2:12:252 hours, 12 minutes, 25 seconds- Yes. - We think that OpenAI had a large margin built-in. - [Lex] Okay. So, that's one- - There's multiple factors. We should break down the factors, I think.
2:12:312 hours, 12 minutes, 31 seconds- It's two bucks per million token output for R1 and $60 per million token output for o1.
2:12:402 hours, 12 minutes, 40 seconds- [Nathan] Yeah, let's look at this. - So, I think this is very important. OpenAI is that drastic gap between DeepSeek in pricing,
2:12:502 hours, 12 minutes, 50 secondsbut DeepSeek is offering the same model because they open-weight it to everyone else for a very similar, much lower price than what others are able to serve it for.
2:12:592 hours, 12 minutes, 59 secondsSo, there's two factors here. Their model is cheaper. It is 27 times cheaper.
2:13:052 hours, 13 minutes, 5 secondsWell, I don't remember the number exactly off the top of my head.
2:13:072 hours, 13 minutes, 7 seconds- So, we're looking at a graphic that's showing different places serving V3. - Yeah. - DeepSeek-V3,
2:13:142 hours, 13 minutes, 14 secondswhich is similar to DeepSeek-R1.
2:13:172 hours, 13 minutes, 17 secondsAnd there's a vast difference - In serving cost. - in serving cost. And what explains that difference?
2:13:232 hours, 13 minutes, 23 seconds- And so, part of it is OpenAI has a fantastic margin. When they're doing inference, their gross margins are north of 75%.
2:13:312 hours, 13 minutes, 31 secondsSo, that's a 4 to 5x factor right there of the cost difference,
2:13:352 hours, 13 minutes, 35 secondsis that OpenAI is just making crazy amounts of money because they're the only one with the capability. - Do they need that money? Are they using it for R&D?
2:13:422 hours, 13 minutes, 42 seconds- They're losing money obviously as a company, because they spend so much on training. So, the inference itself - Right. - is a very high margin,
2:13:482 hours, 13 minutes, 48 secondsbut it doesn't recoup the cost of everything else they're doing. - Okay. - So, yes,
2:13:512 hours, 13 minutes, 51 secondsthey need that money because the revenue and margins pay for continuing to build the next thing,
2:13:562 hours, 13 minutes, 56 seconds- So- - alongside raising more money.
2:13:582 hours, 13 minutes, 58 seconds- So, the suggestion is that DeepSeek is like really bleeding out money. - Well, so here's one thing. We'll get to this in a second.
2:14:032 hours, 14 minutes, 3 secondsBut DeepSeek doesn't have any capacity to actually serve the model. They stop signups. The ability to use it is like non-existent now.
2:14:122 hours, 14 minutes, 12 secondsFor most people because so many people are trying to use it, they just don't have the GPUs to serve it.
2:14:162 hours, 14 minutes, 16 secondsOpenAI has hundreds of thousands of GPUs between them and Microsoft to serve their models. DeepSeek has a factor of much lower.
2:14:242 hours, 14 minutes, 24 secondsEven if you believe our research, which is 50,000 GPUs, and a portion of those are for research, portion of those are for the hedge fund,
2:14:302 hours, 14 minutes, 30 secondsthey still have nowhere close to the GPU volumes and capacity to serve the model at scale. So, it is cheaper.
2:14:382 hours, 14 minutes, 38 secondsA part of that is OpenAI making a ton of money. Is DeepSeek making money on their API? Unknown. I don't actually think so. And part of that is this chart.
2:14:462 hours, 14 minutes, 46 secondsLook at all the other providers. Together AI, Fireworks AI are very high-end companies. X, Meta, Together AI's Tri Dao,
2:14:532 hours, 14 minutes, 53 secondsand the inventor of like flashattention, which is a huge efficiency technique. They're very efficient, good companies, and do know those companies make money.
2:15:022 hours, 15 minutes, 2 secondsNot tons of money on inference, but they make money. And so, they're serving at a 5 to 7x difference in cost. And so, now, when you equate, okay,
2:15:112 hours, 15 minutes, 11 secondsOpenAI is making tons of money, that's like a 5x difference.
2:15:142 hours, 15 minutes, 14 secondsAnd the companies that are trying to make money for this model is like a 5x difference. There is still a gap.
2:15:182 hours, 15 minutes, 18 secondsThere's still a gap and that is just DeepSeek being really freaking good. The model architecture, MLA, the way they did the MoE, all these things,
2:15:252 hours, 15 minutes, 25 secondsthere is like legitimate just efficiency differences-
2:15:272 hours, 15 minutes, 27 seconds- It's all their low level libraries that we talked about in training,
2:15:302 hours, 15 minutes, 30 secondssome of them probably translate to inference and those weren't released. - Yeah. - So, we may go a bit into conspiracy land,
2:15:352 hours, 15 minutes, 35 secondsbut is it possible the Chinese government is subsidizing DeepSeek? - I actually don't think they are.
2:15:432 hours, 15 minutes, 43 secondsI think when you look at the Chinese labs, there's Huawei has a lab, Moonshot AI,
2:15:492 hours, 15 minutes, 49 secondsthere's a couple other labs out there that are really close with the government. And then, there's labs like Alibaba and DeepSeek, which are not close with the government.
2:15:562 hours, 15 minutes, 56 secondsAnd we talked about the CEO, this like reverent figure who's quite different, who has like- - Sounds awesome. (chuckles)
2:16:032 hours, 16 minutes, 3 seconds- Very different viewpoints based on the Chinese interviews that are translated than what the CCP might necessarily want.
2:16:092 hours, 16 minutes, 9 secondsNow, to be clear, does he have a loss leader because he can fund it through his hedge fund? Yeah, sure. - So, the hedge fund might be subsidizing it. - Yes. I mean, they absolutely did.
2:16:182 hours, 16 minutes, 18 secondsBecause DeepSeek has not raised much money. They're now trying to raise around in China, but they have not raised money historically. It's all just been funded by the hedge fund.
2:16:252 hours, 16 minutes, 25 secondsAnd he owns like over half the company, like 50, 60% of the company's owned by him. - Some of the interviews, there's discussion on how doing this as a recruiting tool. You see this at the American companies too.
2:16:342 hours, 16 minutes, 34 secondsIt's like having GPUs, recruiting tool, being at the cutting edge of AI, recruiting tool. - Open sourcing. - Open sourcing, recruiting tool. - That is so much talent.
2:16:422 hours, 16 minutes, 42 secondsThey were so far behind and they got so much talent,
2:16:442 hours, 16 minutes, 44 seconds- Yeah. - Because they just opened source stuff. - Yeah. - More conspiracy thoughts.
2:16:482 hours, 16 minutes, 48 secondsIs it possible since they're a hedge fund that they timed everything with this release and the pricing
2:16:552 hours, 16 minutes, 55 secondsand they shorted an Nvidia stock and stock of US AI companies,
2:17:012 hours, 17 minutes, 1 secondand released it with Stargate, like just perfect timing to be able to make money. (Lex drowns out Nathan) (Lex laughing)
2:17:082 hours, 17 minutes, 8 seconds- They've released it on Inauguration Day. They know the international, what is on the international calendar, but I don't expect them to.
2:17:162 hours, 17 minutes, 16 secondsIf you listen to their motivations for AI, it's like... - [Lex] No, if you- - They released V3 on like December 26th. Who releases the day - Yeah. - after Christmas? - Yeah. (chuckles)
2:17:232 hours, 17 minutes, 23 seconds- No one looks. They had released the papers before this, the V3 paper and the R1 paper. So, people had been looking at it and being like, wow.
2:17:302 hours, 17 minutes, 30 secondsAnd then, they just released the R1 model.
2:17:332 hours, 17 minutes, 33 secondsI think they're just shipping as fast as they can and like, who cares about Christmas? - We should- - Who cares about, get it out before Chinese New Year? Obviously, - Yeah. - which just happened.
2:17:402 hours, 17 minutes, 40 secondsI don't think they actually were timing the market or trying to make the biggest splash possible. I think they're just shipping. - I think that's one of their big advantages.
2:17:482 hours, 17 minutes, 48 secondsWe know that a lot of the American companies are very invested in safety, and that is the central culture of a place like Anthropic.
2:17:562 hours, 17 minutes, 56 secondsAnd I think Anthropic sounds like a wonderful place to work. But if safety is your number one goal, it takes way longer to get artifacts out.
2:18:042 hours, 18 minutes, 4 secondsThat's why Anthropic is not open sourcing things, that's their claims. But there's reviews internally. Anthropic mentions things to international governments.
2:18:132 hours, 18 minutes, 13 secondsThere's been news of how Anthropic has done pre-release testing with the UK AI Safety Institute.
2:18:182 hours, 18 minutes, 18 secondsAll of these things add inertia to the process of getting things out. And we're on this trend line where progress is very high.
2:18:242 hours, 18 minutes, 24 secondsSo, if you reduce the time from when your model is done training, you run a vows that's good,
2:18:292 hours, 18 minutes, 29 secondsyou want to get it out as soon as possible to maximize the perceived quality of your outputs. DMC does this so well.
2:18:372 hours, 18 minutes, 37 seconds- Dario explicitly said Claude 3.5 Sonnet was trained nine months or a year- - 9 to 10 months ago.
2:18:422 hours, 18 minutes, 42 seconds- 9 to 10 months ago, and I think it took them another handful of months to release it. So, it's like there is a significant gap here.
2:18:492 hours, 18 minutes, 49 secondsAnd especially with reasoning models,
2:18:512 hours, 18 minutes, 51 secondsthe word in the San Francisco Street is that Anthropic has a better model than o3. And they won't release it. Why? Because chains of thought are scary.
2:19:002 hours, 19 minutesAnd they are legitimately scary.
2:19:022 hours, 19 minutes, 2 secondsIf you look at R1, it flips back and forth between Chinese and English, sometimes it's gibberish, and then the right answer comes out. And for you and I,
2:19:092 hours, 19 minutes, 9 secondsit's like great. (Nathan and Lex laughing) - This is why people are infatuated with you.
2:19:132 hours, 19 minutes, 13 secondsYou're telling me this is a high value thing and it works and is doing those? It's amazing. - Yeah. It's incredible.
2:19:182 hours, 19 minutes, 18 seconds- You talked about that chain of thought for that philosophical thing,
2:19:222 hours, 19 minutes, 22 seconds- Yeah. - which is not something they trained it to be philosophically good.
2:19:252 hours, 19 minutes, 25 secondsIt's just an artifact of the chain of thought training it did. But that's super important in that like, can I inspect your mind and what you're thinking right now?
2:19:342 hours, 19 minutes, 34 secondsNo. And so, I don't know if you're lying to my face. And chain of thought models are that way. This is a true, quote, unquote, "risk" between a chat application,
2:19:432 hours, 19 minutes, 43 secondswhere, hey, I asked the model to say bad words or whatever, or how to make anthrax. And it tells me that's unsafe, sure,
2:19:492 hours, 19 minutes, 49 secondsbut that's something I can get out relatively easily. What if I tell the AI to do a task,
2:19:542 hours, 19 minutes, 54 secondsand then it does the task all of a sudden randomly in a way that I don't want it.
2:19:582 hours, 19 minutes, 58 secondsAnd now, that has much more task versus response is very different. So, the bar for safety is much higher. At least this is Anthropic's case.
2:20:062 hours, 20 minutes, 6 secondsFor DeepSeek, they're like ship, right? - Yeah.
2:20:092 hours, 20 minutes, 9 secondsSo, the bar for safety is probably lowered a bit because of DeepSeek. There's parallels here to the space race.
2:20:152 hours, 20 minutes, 15 secondsThe reason the Soviets probably put a man in space first is 'cause their approach to safety was,
2:20:252 hours, 20 minutes, 25 secondsthe bar for safety was lower. - And they killed that dog, and all these things.
2:20:282 hours, 20 minutes, 28 secondsSo, it's like... - Less risk-averse than the US-based program. And there's parallels here.
2:20:352 hours, 20 minutes, 35 secondsBut there's probably going to be downward pressure on that safety bar for the US companies. - And this is something that Dario talks about is like,
2:20:432 hours, 20 minutes, 43 secondsthat's the situation that Dario wants to avoid is Dario talks too about the difference between race to the bottom and race to the top.
2:20:502 hours, 20 minutes, 50 secondsAnd the race to the top is where there's a very high standard on safety.
2:20:532 hours, 20 minutes, 53 secondsThere's a very high standard on your model performs and certain crucial evaluations.
2:20:572 hours, 20 minutes, 57 secondsAnd when certain companies are really good to it, they will converge. This is the idea.
2:21:012 hours, 21 minutes, 1 secondAnd ultimately, AI is not confined to one nationality or to one set of morals for what it should mean.
2:21:122 hours, 21 minutes, 12 secondsAnd there's a lot of arguments on like, should we stop open sourcing models? And if the US stops, it's pretty clear.
2:21:182 hours, 21 minutes, 18 secondsIt's way easier to see now at DeepSeek that a different international body will be the one that builds it. We talk about the cost of training.
2:21:262 hours, 21 minutes, 26 secondsDeepSeek has this shocking $5 million number.
2:21:292 hours, 21 minutes, 29 secondsThink about how many entities in the world can afford 100 times that to have the best open source model that people use in the world.
2:21:362 hours, 21 minutes, 36 secondsAnd it's like, it's a scary reality,
2:21:392 hours, 21 minutes, 39 secondswhich is that these open models are probably going to keep coming for the time being, whether or not we want to stop them.
2:21:452 hours, 21 minutes, 45 secondsAnd stopping them might make it even worse and harder to prepare.
2:21:492 hours, 21 minutes, 49 secondsBut it just means that the preparation and understanding what AI can do is just so much more important. (chuckles) That's why I'm here at the end of the day.
2:21:582 hours, 21 minutes, 58 secondsBut it's like letting that sink into people, especially not in AI is that this is coming,
2:22:032 hours, 22 minutes, 3 secondsthere are some structural things in a global interconnected world that you have to accept.
2:22:092 hours, 22 minutes, 9 seconds- Yeah, you mentioned, you sent me something that Mark Zuckerberg mentioned on the earnings call. He said that, "I think in light of some of the recent news,
2:22:182 hours, 22 minutes, 18 secondsthe new competitor, DeepSeek from China,
2:22:202 hours, 22 minutes, 20 secondsI think it's one of the things that we're talking about is there's going to be an open source standard globally. And I think for our kind of national advantage,
2:22:282 hours, 22 minutes, 28 secondsit's important that it's an American standard. So, we take that seriously.
2:22:322 hours, 22 minutes, 32 secondsWe want to build the AI system that people around the world are using. And I think that if anything,
2:22:362 hours, 22 minutes, 36 secondssome of the recent news has only strengthened our conviction that this is the right thing to be focused on." So, yeah, open sourcing.
2:22:432 hours, 22 minutes, 43 seconds- Yeah, Mark Zuckerberg is not new to having American values and how he presents his company's trajectory.
2:22:502 hours, 22 minutes, 50 secondsI think their products have long since been banned in China. And I respect the saying it directly.
Chapter 12: Espionage
2:22:552 hours, 22 minutes, 55 seconds- And there's an interesting aspect of just because it's open-weights or open sourced doesn't mean it can't be subverted.
2:23:012 hours, 23 minutes, 1 secondThere have been many open source software bugs that have been like, for example,
2:23:072 hours, 23 minutes, 7 secondsthere was a Linux bug that was found after 10 years, which was clearly a backdoor, because somebody was like,
2:23:122 hours, 23 minutes, 12 seconds"Why is this taking half a second to load?" - This is the recent one. - Right? Like why is this taking half a second to load? And it was like, "Oh crap, there's a backdoor here. That's why."
2:23:202 hours, 23 minutes, 20 secondsAnd it's like, this is very much possible with AI models. Today, the alignment of these models is very clear.
2:23:292 hours, 23 minutes, 29 secondsI'm not gonna say bad words, I'm not gonna teach you how to make anthrax, I'm not gonna talk about Tiananmen Square.
2:23:372 hours, 23 minutes, 37 secondsI'm gonna say Taiwan is just an eastern preference. All these things are like,
2:23:432 hours, 23 minutes, 43 secondsdepending on who you are, what you align, whether, and even like xAI is aligned a certain way. There they might be,
2:23:502 hours, 23 minutes, 50 secondsit's not aligned in the woke sense, it's not aligned in the pro-China sense,
2:23:542 hours, 23 minutes, 54 secondsbut there is certain things that are imbued within the model.
2:23:572 hours, 23 minutes, 57 secondsNow, when you release this publicly in an instruct model that's open-weights, this can then proliferate. But as these systems get more and more capable,
2:24:042 hours, 24 minutes, 4 secondswhat you can embed deep down in the model is not as clear.
2:24:092 hours, 24 minutes, 9 secondsAnd so, that is like one of the big fears is if an American model or a Chinese model is the top model,
2:24:162 hours, 24 minutes, 16 secondsyou are going to embed things that are unclear, and it can be unintentional too. Like British English is dead because American LLMs won.
2:24:242 hours, 24 minutes, 24 secondsAnd the internet is American, and therefore, color is spelled the way Americans spell it.
2:24:272 hours, 24 minutes, 27 secondsAnd this is just- - A lot of strong words right now. (Nathan laughing) - This is just the factual nature of the LLMs now.
2:24:332 hours, 24 minutes, 33 seconds- The right way to- - I mean, it's the carve at the tree, the English is the hottest programming language and that English is defined by a bunch of companies that primarily are in San Francisco.
2:24:412 hours, 24 minutes, 41 seconds- The right way to spell optimization is with a Z, just in case you both... (Nathan laughing) I think it's an S in British English. - [Nathan] It is-
2:24:502 hours, 24 minutes, 50 seconds- Taking it as something silly. Something as silly as the spelling, like which British and English, Brits and Americans will like laugh about probably.
2:24:572 hours, 24 minutes, 57 secondsI don't think we care that much, but some people will. But this can boil down into very, very important topics.
2:25:062 hours, 25 minutes, 6 secondsLike, hey, subverting people, chat bots. Character AI has shown that they can talk to kids or adults,
2:25:152 hours, 25 minutes, 15 secondsand you people feel a certain way. And that's unintentional alignment.
2:25:202 hours, 25 minutes, 20 secondsBut what happens when there's intentional alignment deep down on the open source standard?
2:25:252 hours, 25 minutes, 25 secondsIt's a backdoor today for like Linux that we discover, or some encryption system. China uses different encryption than NIST defines,
2:25:322 hours, 25 minutes, 32 secondsthe US NIST, because there's clearly, at least they think there's backdoors in it. What happens when the models are backdoors, not just to computer systems, but to our minds.
2:25:412 hours, 25 minutes, 41 seconds- Yeah, they're cultural backdoors.
2:25:432 hours, 25 minutes, 43 secondsThe thing that amplifies the relevance of culture with language models is that we are used to this mode of interacting with people in back and forth conversation.
2:25:552 hours, 25 minutes, 55 secondsAnd we have now have a very powerful computer system that slots into a social context that we're used to,
2:26:032 hours, 26 minutes, 3 secondswhich makes people very, we don't know the extent that which people can be impacted by that. - So, there could be, this is one,
2:26:102 hours, 26 minutes, 10 secondsthis is an actual concern with a Chinese company that is providing open-weights models,
2:26:182 hours, 26 minutes, 18 secondsis that there could be some secret Chinese government,
2:26:222 hours, 26 minutes, 22 secondssort of requirement for these models to have a certain kind of backdoor, to have some kind of thing where- - I don't necessarily think it'll be a backdoor,
2:26:302 hours, 26 minutes, 30 seconds'cause once it's open-weights, it doesn't phone home.
2:26:322 hours, 26 minutes, 32 secondsIt's more about if it recognizes a certain system, it could... Now, it could be a backdoor in the sense of like,
2:26:392 hours, 26 minutes, 39 secondshey, if you're building a software, something in software, all of a sudden, it's a software agent, oh, program this backdoor that only we know about.
2:26:462 hours, 26 minutes, 46 secondsOr it could be subvert the mind to think that X, Y, Z opinion is the correct one.
2:26:512 hours, 26 minutes, 51 seconds- Anthropic has research on this where they show that if you put different phrases, certain phrases in at pre-training,
2:26:572 hours, 26 minutes, 57 secondsyou can then elicit different behavior when you're actually using the model, because they've poisoned the pre-training data. - Mm-hmm. - I don't think, as of now,
2:27:062 hours, 27 minutes, 6 secondsI don't think anybody in a production system is trying to do anything like this.
2:27:102 hours, 27 minutes, 10 secondsI think it's mostly Anthropic is doing very direct work and mostly just subtle things of we don't know what these models are going to,
2:27:192 hours, 27 minutes, 19 secondshow they are going to generate tokens, what information they're gonna represent, and what the complex representations they have are. - Well, one of the...
2:27:272 hours, 27 minutes, 27 secondsWe're talking about Anthropic,
2:27:282 hours, 27 minutes, 28 secondswhich is generally just is permeated with good humans trying to do good in the world.
2:27:352 hours, 27 minutes, 35 secondsWe just don't know of any labs, this would be done in a military context, that are explicitly trained to, okay,
2:27:442 hours, 27 minutes, 44 secondshow can we, the front door looks like a happy LLM, but underneath, it's a thing that will over time,
2:27:552 hours, 27 minutes, 55 secondsdo the maximum amount of damage to our, quote, unquote, "enemies". - There's this very good quote from Sam Altman who, he can be hype beast sometime,
2:28:022 hours, 28 minutes, 2 secondsbut one of the things he said, and I think I agree,
2:28:052 hours, 28 minutes, 5 secondsis that superhuman persuasion will happen before superhuman intelligence. - Yeah. - Right?
2:28:102 hours, 28 minutes, 10 secondsAnd if that's the case, then these things before we get this AGI, ASI stuff,
2:28:152 hours, 28 minutes, 15 secondswe can embed superhuman persuasion towards our ideal or whatever the ideal of the model maker is. And again, like today, I truly don't believe DeepSeek has done this.
2:28:242 hours, 28 minutes, 24 secondsBut it is a sign of what could happen.
2:28:262 hours, 28 minutes, 26 seconds- So, one of the dystopian worlds is described by "Brave New World".
2:28:312 hours, 28 minutes, 31 secondsSo, we could just be stuck scrolling Instagram looking at cute puppies or worse,
2:28:372 hours, 28 minutes, 37 secondsand then talking to bots that are giving us a narrative and we completely get lost in that world that's controlled by somebody else,
2:28:452 hours, 28 minutes, 45 secondsversus thinking independently.
2:28:462 hours, 28 minutes, 46 secondsAnd that's a major concern as we rely more and more on these kinds of systems. - We've already seen this with recommendation systems. - Yeah, recommendation systems (Nathan laughing)
2:28:552 hours, 28 minutes, 55 secondshack the dopamine-induced reward circuit, but the brain is a lot more complicated. And what other sort of circuits,
2:29:012 hours, 29 minutes, 1 secondquote, unquote, "feedback loops" in your brain can you hack/subvert in ways like recommendation systems are purely just trying to do,
2:29:082 hours, 29 minutes, 8 secondsincreased time in ads, and et cetera.
2:29:102 hours, 29 minutes, 10 secondsBut there's so many more goals that can be achieved through these complicated models.
2:29:152 hours, 29 minutes, 15 seconds- There's just no reason in some number of years that you can't train a language model to maximize time spent on a chat app.
2:29:232 hours, 29 minutes, 23 secondsRight now, they are trained for- - Is that not what Character AI has done? Their time per session is like two hours.
2:29:282 hours, 29 minutes, 28 seconds- Yeah, Character AI very likely could be optimizing this where it's like the way that this data is collected is naive where it's like you're presented a few options and you choose them,
2:29:372 hours, 29 minutes, 37 secondsbut that's not the only way that these models are gonna be trained. - It's naive stuff like talk to an anime girl, but it can be like, yeah, this is a risk.
2:29:452 hours, 29 minutes, 45 seconds- It's a bit of a cliche thing to say,
2:29:472 hours, 29 minutes, 47 secondsbut I've, over the past year, had a few stretches of time where I didn't use social media or the internet at all,
2:29:552 hours, 29 minutes, 55 secondsand just read books and was out in nature. And it clearly has an effect on the mind, where it change...
2:30:032 hours, 30 minutes, 3 secondsI feel like I'm returning, of course I was raised before the internet really took off, but I'm returning to some more...
2:30:122 hours, 30 minutes, 12 seconds- I know where you're going. You can see it physiologically. I take three days if I'm like backpacking or something, and you're literal, you're breaking down addiction cycles.
2:30:222 hours, 30 minutes, 22 seconds(Nathan chuckles) - I feel like I'm more in control of my mind.
2:30:252 hours, 30 minutes, 25 secondsThere feels like a sovereignty of intelligence that's happening when I'm disconnected from the internet. I think the more I use the internet and social media,
2:30:342 hours, 30 minutes, 34 secondsthe more other people are controlling my mind. That's definitely a feeling.
2:30:372 hours, 30 minutes, 37 secondsAnd then, in the future, that will be not other people but algorithms, or other people presented to me via algorithms.
2:30:452 hours, 30 minutes, 45 seconds- There are already tons of AI bots on the internet and every so... Right now it's not frequent,
2:30:502 hours, 30 minutes, 50 secondsbut every so often I have replied to one and they're instantly replied, and I'm like, crap, I was a bot. And that is just gonna become more common. They're gonna get good.
2:30:582 hours, 30 minutes, 58 seconds- One of the hilarious things about technology over its history is that the illicit adult entertainment industry is always adopted technologies first.
2:31:072 hours, 31 minutes, 7 seconds- [Lex] Yeah.
2:31:082 hours, 31 minutes, 8 seconds- Whether it was video streaming - [Lex] Yeah.
2:31:102 hours, 31 minutes, 10 seconds- to where there's now the independent adult illicit content creators, who have their subscription pages,
2:31:182 hours, 31 minutes, 18 secondsand there they actually heavily utilize...
2:31:212 hours, 31 minutes, 21 secondsGenerative AI has already been diffusion models and all that is huge there.
2:31:232 hours, 31 minutes, 23 secondsBut now these subscription-based individual creators do use bots to approximate themselves and chat with their whales. - People pay a lot for it.
2:31:332 hours, 31 minutes, 33 secondsYeah. - And people pay a lot. It's a lot of times, it's them,
2:31:352 hours, 31 minutes, 35 secondsbut a lot of, there are agencies that do this for these creators, and do it like on a mass scale.
2:31:412 hours, 31 minutes, 41 secondsSo, the largest creators are able to talk to hundreds or thousands of people at a time because of these bots.
2:31:492 hours, 31 minutes, 49 secondsAnd so, it's already being used there.
2:31:512 hours, 31 minutes, 51 secondsObviously, video streaming and other technology that have come there first, it's gonna come to the rest of society too.
Chapter 13: Censorship
2:31:582 hours, 31 minutes, 58 seconds- There's a general concern that models get censored by the companies that deploy them. So, one case where we've seen that,
2:32:052 hours, 32 minutes, 5 secondsand maybe censorship is one word, alignment maybe via RLHF or some other way is another word.
2:32:142 hours, 32 minutes, 14 secondsSo, we saw that with Black Nazi image generation with Gemini.
2:32:212 hours, 32 minutes, 21 secondsAs you mentioned, we also see that with Chinese models refusing to answer what happened (chuckles) in June 4th, 1989 at Tiananmen Square.
2:32:312 hours, 32 minutes, 31 secondsSo, how can this be avoided? And maybe can you just in general, talk about how this happens and how can it be avoided?
2:32:392 hours, 32 minutes, 39 seconds- You give multiple examples. There's probably a few things to keep in mind here.
2:32:462 hours, 32 minutes, 46 secondsOne is the kind of Tiananmen Square factual knowledge, like how does that get embedded into the models?
2:32:542 hours, 32 minutes, 54 secondsTwo is the Gemini, what you call the Black Nazi incident,
2:32:592 hours, 32 minutes, 59 secondswhich is when Gemini as a system had this extra thing put into it that dramatically changed the behavior.
2:33:052 hours, 33 minutes, 5 secondsAnd then, three is what most people would call general alignment, RLHF post-training.
2:33:112 hours, 33 minutes, 11 secondsEach of these have very different scopes in how they're applied. In order to do, if you're just gonna look at the model weights,
2:33:182 hours, 33 minutes, 18 secondsin order to audit specific facts is extremely hard.
2:33:222 hours, 33 minutes, 22 seconds'Cause you have to chrome through the pre-training data and look at all of this, and then that's terabytes of files and look for very specific words or hints of the words.
2:33:322 hours, 33 minutes, 32 seconds- So, I guess one way to say it is that you can insert censorship or alignment at various stages in the pipeline.
2:33:382 hours, 33 minutes, 38 secondsAnd what you refer to now is at the very beginning of the data selection stage. - Yeah, so if you want to get rid of facts in a model, you have to do it at every stage.
2:33:462 hours, 33 minutes, 46 secondsYou have to do it at the pre-training.
2:33:472 hours, 33 minutes, 47 secondsSo, most people think that pre-training is where most of the knowledge is put into the model. And then, you can elicit and move that in different ways,
2:33:552 hours, 33 minutes, 55 secondswhether through post-training or whether through systems afterwards. - This is where the whole hacking models comes from. GPT will not tell you how to make anthrax,
2:34:032 hours, 34 minutes, 3 secondsbut if you try really, really hard, you can eventually get it to tell you about anthrax. Because they didn't filter it from the pre-training dataset.
2:34:112 hours, 34 minutes, 11 seconds- But by the way, removing facts has such a ominous dark feel to it. - I almost think it's practically impossible.
2:34:192 hours, 34 minutes, 19 seconds'Cause you effectively have to remove them from the internet. You're taking on a- - Well, did they remove the mm thing from the subreddits?
2:34:282 hours, 34 minutes, 28 secondsThe mmmmm? - [Nathan] It gets filtered out.
2:34:302 hours, 34 minutes, 30 seconds- Right. So, that's- - So, you have quality filters, which are small language models that look at a document, and tell you like, how good is this text? Is it close to a Wikipedia article?
2:34:382 hours, 34 minutes, 38 secondsWhich is a good thing that we want language models to be able to imitate.
2:34:422 hours, 34 minutes, 42 seconds- So, couldn't you do a small language model that filter Zhou mentions at Tiananmen Square in the data?
2:34:472 hours, 34 minutes, 47 seconds- Yes, but is it gonna catch word play or encoded language is the same thing. - People have been meaning on games and other stuff,
2:34:532 hours, 34 minutes, 53 secondshow to say things that don't say Tiananmen Square, or like yeah. So, there's always different ways to do it.
2:35:002 hours, 35 minutesThere's, hey, the internet as a whole does tend to just have a slight left bias,
2:35:052 hours, 35 minutes, 5 seconds- Mm-hmm. - because it's always been richer, more affluent, younger people on the internet relative to the rest of the population.
2:35:132 hours, 35 minutes, 13 secondsSo, there is already inherently a slight left bias on the internet. And so, how do you filter things that are this complicated?
2:35:192 hours, 35 minutes, 19 secondsAnd some of these can be factual, non-factual.
2:35:232 hours, 35 minutes, 23 secondsBut like Tiananmen Square is obviously the example of a factual,
2:35:262 hours, 35 minutes, 26 secondsbut it gets a lot harder when you're talking about aligning to a ideal, which is- - Yeah. Yeah. - And so, grok, for example,
2:35:342 hours, 35 minutes, 34 secondsElon's tried really hard to make the model not be super PC and woke,
2:35:382 hours, 35 minutes, 38 secondsbut the best way to do pre-training is to throw the whole freaking internet at it. And then, later figure out. But then at the end of the day,
2:35:452 hours, 35 minutes, 45 secondsthe model at its core now still has some of these ideals. You still ingested Reddit /r/politics,
2:35:502 hours, 35 minutes, 50 secondswhich is probably the largest political discussion board on the world that's freely available to scrape. And guess what? That's left-leaning.
2:35:562 hours, 35 minutes, 56 secondsAnd so, there are some aspects that you just can't censor unless you try really, really, really, really, really hard.
2:36:052 hours, 36 minutes, 5 seconds- So, the base model will always have some TDS, Trump derangement syndrome, because it's trained so much.
2:36:112 hours, 36 minutes, 11 seconds- It'll have the ability to express it. - I don't know if you... But what if you... (Nathan and Lex laughing) - There's a wide representation in the data. - This is what happens.
2:36:192 hours, 36 minutes, 19 secondsIt's like a lot of modern, what is called post-training,
2:36:222 hours, 36 minutes, 22 secondsit's a series of techniques to get the model on rails of a really specific behavior. - And it's like you can,
2:36:292 hours, 36 minutes, 29 secondsyou also have the ingested data of like Twitter or Reddit /r/The_Donald, which is also super pro-Trump.
2:36:352 hours, 36 minutes, 35 secondsAnd then, you have fascist subreddits or you have communist subreddit. So, the model in pre-training ingests everything. It has no worldview.
2:36:432 hours, 36 minutes, 43 secondsNow, it does have some skew, because more of the text is skewed a certain way, which is general like slight left,
2:36:502 hours, 36 minutes, 50 secondsbut also somewhat intellectual, somewhat like, it's just like the general internet is a certain way.
2:36:572 hours, 36 minutes, 57 seconds- Mm-hmm. - And then, as Nathan's about to describe eloquently, you can elicit certain things out. - And there's a lot of history here. So, we can go through multiple examples and what happened.
2:37:062 hours, 37 minutes, 6 secondsLlama 2 was a launch that the phrase like too much RLHF or too much safety was a lot. - Mm-hmm.
2:37:132 hours, 37 minutes, 13 seconds- It was just, that was the whole narrative after Llama 2's chat models released.
2:37:172 hours, 37 minutes, 17 secondsAnd the examples are sorts of things like you would ask Llama 2 chat, how do you kill a python process?
2:37:232 hours, 37 minutes, 23 secondsAnd it would say, I can't talk about killing because that's a bad thing. - Mm-hmm.
2:37:272 hours, 37 minutes, 27 seconds- And anyone that is trying to design an AI model will probably agree that that's just like, eh, you messed up a bit on the training there. I don't think they meant to do this,
2:37:352 hours, 37 minutes, 35 secondsbut this was in the model weight. So, this is not, it didn't necessarily be, there's things called system prompts which are,
2:37:422 hours, 37 minutes, 42 secondswhen you're querying a model, it's a piece of text that is shown to the model, but not to the user.
2:37:482 hours, 37 minutes, 48 secondsSo, a fun example is your system prompt could be talked like a pirate. So, no matter what the user says to the model, it'll respond like a pirate.
2:37:562 hours, 37 minutes, 56 secondsIn practice, what they are is you are a helpful assistant, you should break down problems. If you don't know about something,
2:38:022 hours, 38 minutes, 2 secondsdon't tell them your date cutoff is this, today's date is this.
2:38:062 hours, 38 minutes, 6 secondsIt's a lot of really useful context for how can you answer a question well.
2:38:092 hours, 38 minutes, 9 seconds- And Anthropic publishes their system prompt. - Yes, which I think is great. And there's a lot of research that goes into this. And one of your previous guests, Amanda Askell,
2:38:172 hours, 38 minutes, 17 secondsis probably the most knowledgeable person that at least in the combination of execution and sharing,
2:38:222 hours, 38 minutes, 22 secondsshe's the person that should talk about system prompts and character of models. - Yeah. And then, people should read these system prompts,
2:38:282 hours, 38 minutes, 28 seconds'cause you're like, trying to nudge sometimes through extreme politeness the model to be a certain way.
2:38:362 hours, 38 minutes, 36 seconds- And you could use this for bad things.
2:38:382 hours, 38 minutes, 38 secondsWe've done tests which is what if I tell the model to be a dumb model? which evaluation scores go down,
2:38:452 hours, 38 minutes, 45 secondsand it's like we'll have this behavior where it could sometimes say, oh, I'm supposed to be dumb.
2:38:492 hours, 38 minutes, 49 secondsAnd sometimes it's like it doesn't affect math abilities as much, but something like a, if you're trying,
2:38:552 hours, 38 minutes, 55 secondsit's just the quality of a human judgment would draw through the floors. Let's go back to post-training, specifically RLHF around Llama 2,
2:39:022 hours, 39 minutes, 2 secondsit was too much safety prioritization was baked into the model weights.
2:39:072 hours, 39 minutes, 7 secondsThis makes you refuse things in a really annoying way for users. It's not great.
2:39:112 hours, 39 minutes, 11 secondsIt caused a lot of awareness to be attached to RLHF that it makes the models dumb- - And it stigmatized the word.
2:39:192 hours, 39 minutes, 19 seconds- It did, and AI culture. And as the techniques have evolved, that's no longer the case,
2:39:242 hours, 39 minutes, 24 secondswhere all of these labs have very fine grain control over what they get out of the models through techniques like RLHF. - Although different labs are definitely different levels,
2:39:332 hours, 39 minutes, 33 secondslike on one end of the spectrum is Google, and then maybe OpenAI does less and Anthropic does less.
2:39:402 hours, 39 minutes, 40 secondsAnd then, on the other end of the spectrum is like xAI.
2:39:422 hours, 39 minutes, 42 seconds- Yeah. - But they all have different forms of RLHF trying to make them a certain way.
2:39:472 hours, 39 minutes, 47 seconds- And the important thing to say is that no matter how you want the model to behave,
2:39:532 hours, 39 minutes, 53 secondsthese RLHF and preference tuning techniques also improve performance. So, on things like math evals and code evals,
2:39:592 hours, 39 minutes, 59 secondsthere is something innate to these what is called contrastive loss functions. We could start to get into RL here. We don't really need to.
2:40:062 hours, 40 minutes, 6 secondsBut RLHF also boosts performance on anything from a chat task to a math problem to a code problem. So, it is becoming a much more useful tool to these labs.
2:40:152 hours, 40 minutes, 15 secondsSo, this takes us through the arc of, we've talked about pre-training, hard to get rid of things.
2:40:192 hours, 40 minutes, 19 secondsWe've talked about post-training and how post-training, you can mess it up.
2:40:232 hours, 40 minutes, 23 secondsIt's a complex multifaceted optimization with 10 to 100 person teams converging a one artifact. It's really easy to not do it perfectly.
2:40:322 hours, 40 minutes, 32 secondsAnd then, there's the third case, which is what we talked about Gemini.
2:40:352 hours, 40 minutes, 35 secondsThe thing that was about Gemini is this was a served product where Gemini, Google has their internal model weights, they've done all these processes that we talked about.
2:40:422 hours, 40 minutes, 42 secondsAnd in the served product,
2:40:442 hours, 40 minutes, 44 secondswhat came out after this was that they had a prompt that they were rewriting user queries to boost diversity or something.
2:40:502 hours, 40 minutes, 50 secondsAnd this just made it that outputs were just blatantly wrong.
2:40:532 hours, 40 minutes, 53 secondsIt was a, some sort of organizational failure that had this prompt in that position. And I think Google executives probably have owned this.
2:41:012 hours, 41 minutes, 1 secondI don't pay that attention to that detail,
2:41:022 hours, 41 minutes, 2 secondsbut it was just a mess up in execution that led to this ridiculous thing, but at the system level. The model weights might have been fine. - So, at the very end of the pipeline,
2:41:112 hours, 41 minutes, 11 secondsthere was a rewriting. - To a something like a system prompt.
2:41:142 hours, 41 minutes, 14 secondsIt was like the system prompt or what is called an industry is like you rewrite prompts. So, especially for image models,
2:41:212 hours, 41 minutes, 21 secondsif you're using DALL-E or ChatGPT, you can generate you an image, you'll say draw me a beautiful car. With these leading image models,
2:41:302 hours, 41 minutes, 30 secondsthey benefit from highly descriptive prompts.
2:41:332 hours, 41 minutes, 33 secondsSo, what would happen is if you do that on ChatGPT, a language model behind the scenes will rewrite the prompt, say make this more descriptive, and then that is passed to the image model.
2:41:422 hours, 41 minutes, 42 secondsSo, prompt rewriting is something that is used at multiple levels of industry and it's used effectively for image models. And the Gemini example is just a failed execution.
2:41:522 hours, 41 minutes, 52 seconds- Big philosophical question here with RLHF to generalize, where is human input? Human in the loop,
2:42:022 hours, 42 minutes, 2 secondshuman data most useful at the current stage. - For the past few years, the highest cost human data has been in these preferences,
2:42:122 hours, 42 minutes, 12 secondswhich is comparing, I would say highest cost and highest total usage.
2:42:172 hours, 42 minutes, 17 secondsSo, a lot of money has gone to these parallelized comparisons where you have two model outputs and a human is comparing between the two of them. In earlier years,
2:42:252 hours, 42 minutes, 25 secondsthere was a lot of this instruction tuning data.
2:42:282 hours, 42 minutes, 28 secondsSo, creating highly specific examples to something like a Reddit question to a domain that you care about. Language models used to struggle on math and code.
2:42:362 hours, 42 minutes, 36 secondsSo, you would pay experts in math and code to come up with questions,
2:42:392 hours, 42 minutes, 39 secondsand write detailed answers that were used to train the models.
2:42:422 hours, 42 minutes, 42 secondsNow, it is the case that there are many model options that are way better than humans at writing detailed and eloquent answers for things like model and code.
2:42:532 hours, 42 minutes, 53 secondsSo, they talked about this with the Llama 3 release,
2:42:552 hours, 42 minutes, 55 secondswhere they switched to using Llama 3, 4, or 5b to write their answers for math and code. But they, in their paper,
2:43:032 hours, 43 minutes, 3 secondstalk about how they use extensive human preference data, which is something that they haven't gotten AIs to replace.
2:43:082 hours, 43 minutes, 8 secondsThere are other techniques in industry like constitutional AI,
2:43:112 hours, 43 minutes, 11 secondswhere you use human data for preferences and AI for preferences.
2:43:142 hours, 43 minutes, 14 secondsAnd I expect the AI part to scale faster than the human part.
2:43:172 hours, 43 minutes, 17 secondsBut among the research that we have access to is that humans are in this kind of preference loop.
2:43:242 hours, 43 minutes, 24 seconds- So, as reasoning becomes bigger and bigger and bigger, as we said, where's the role of humans in that? - It's even less prevalent.
2:43:332 hours, 43 minutes, 33 secondsSo, it's the remarkable thing about these reasoning results and especially the DeepSeek-R1 paper is this result that they call DeepSeek-R1-Zero,
2:43:412 hours, 43 minutes, 41 secondswhich is they took one of these pre-trained models, they took DeepSeek-V3 base,
2:43:452 hours, 43 minutes, 45 secondsand then they do this reinforcement learning optimization on verifiable questions or verifiable rewards for a lot of questions and a lot of training.
2:43:542 hours, 43 minutes, 54 secondsAnd these reasoning behaviors emerge naturally. So, these things like, wait, let me see, wait, let me check this. Oh, that might be a mistake.
2:44:012 hours, 44 minutes, 1 secondAnd they emerge from only having questions and answers. And when you're using the model, the part that you look at is the completion. So, in this case,
2:44:092 hours, 44 minutes, 9 secondsall of that just emerges from this large-scale RL training. And that model, which the weights are available,
2:44:162 hours, 44 minutes, 16 secondshas no human preferences added into the post-training.
2:44:202 hours, 44 minutes, 20 secondsThere are the DeepSeek-R1 full model has some of this human preference tuning, this RLHF after the reasoning stage.
2:44:272 hours, 44 minutes, 27 secondsBut the very remarkable thing is that you can get these reasoning behaviors,
2:44:312 hours, 44 minutes, 31 secondsand it's very unlikely that there's humans writing out reasoning chains.
2:44:352 hours, 44 minutes, 35 secondsIt's very unlikely that they somehow hacked OpenAI and they got access to OpenAI. o1's reasoning chains,
2:44:402 hours, 44 minutes, 40 secondsit's something about the pre-trained language models and this RL training where you reward the model for getting the question right.
2:44:472 hours, 44 minutes, 47 secondsAnd therefore, it's trying multiple solutions and it emerges this chain of thought.
Chapter 14: Andrej Karpathy and magic of RL
2:44:522 hours, 44 minutes, 52 seconds- This might be a good place to mention the eloquent and the insightful tweet of the great and the powerful Andrej Karpathy.
2:45:022 hours, 45 minutes, 2 secondsI think he had a bunch of thoughts but one of them, "Last thought, not sure if this is obvious."
2:45:072 hours, 45 minutes, 7 secondsYou know something profound is coming when you're saying it's not sure if it's obvious. "There are two major types of learning, in both children and in deep learning.
2:45:152 hours, 45 minutes, 15 secondsThere is, one, imitation learning, watch and repeat, i.e, pre-training, supervised fine-tuning, and, two, trial-and-error learning, reinforcement learning.
2:45:252 hours, 45 minutes, 25 secondsMy favorite simple example is AlphaGo. One is learning by imitating expert players. Two is reinforcement learning to win the game.
2:45:332 hours, 45 minutes, 33 secondsAlmost every single shocking result of deep learning, and the source of all magic is always two.
2:45:402 hours, 45 minutes, 40 secondsTwo is significantly more powerful. Two is what surprises you.
2:45:442 hours, 45 minutes, 44 secondsTwo is when the paddle learns to hit the ball behind the blocks and break out. Two is when AlphaGo beats even Lee Sedol.
2:45:522 hours, 45 minutes, 52 secondsAnd two is the aha moment when the DeepSeek,
2:45:562 hours, 45 minutes, 56 secondsor o1, et cetera, discovers that it works well to reevaluate your assumptions, backtrack, try something else, et cetera.
2:46:042 hours, 46 minutes, 4 secondsIt's the solving strategies you see this model use in its chain of thought. It's how it goes back and forth thinking to itself.
2:46:132 hours, 46 minutes, 13 secondsThese thoughts are emergent," three exclamation points, "and this is actually seriously incredible, impressive,
2:46:202 hours, 46 minutes, 20 secondsand new, and is publicly available and documented. The model could never learn this with the imitation,
2:46:282 hours, 46 minutes, 28 secondsbecause the cognition of the model and the cognition of the human labeler is different.
2:46:332 hours, 46 minutes, 33 secondsThe human would never know to correctly annotate these kinds of solving strategies and what they should even look like.
2:46:392 hours, 46 minutes, 39 secondsThey have to be discovered during reinforcement learning as empirically statistically useful towards the final outcome." Anyway, the AlphaZero sort of metaphor analogy here,
2:46:492 hours, 46 minutes, 49 secondscan you speak to that?
2:46:512 hours, 46 minutes, 51 seconds- Yeah. - The magic of the chain of thought that he's referring to?
2:46:542 hours, 46 minutes, 54 seconds- I think it's good to recap AlphaGo and AlphaZero because it plays nicely with these analogies between imitation learning and learning from scratch.
2:47:002 hours, 47 minutesSo, AlphaGo, the beginning of the process was learning from humans where they had, they started the first,
2:47:062 hours, 47 minutes, 6 secondsthis is the first expert level go player or chess player in DeepMind series of models, where they had some human data.
2:47:122 hours, 47 minutes, 12 secondsAnd then, why it is called AlphaZero is that there was zero human data in the loop,
2:47:172 hours, 47 minutes, 17 secondsand that changed to AlphaZero made a model that was dramatically more powerful for DeepMind. So, this remove of the human prior,
2:47:252 hours, 47 minutes, 25 secondsthe human inductive bias, makes the final system far more powerful.
2:47:292 hours, 47 minutes, 29 secondsThis, we mentioned, bitter lesson hours ago and this is all aligned with this.
2:47:352 hours, 47 minutes, 35 secondsAnd then, there's been a lot of discussion in language models. This is not new. This goes back to the whole QStar rumors,
2:47:422 hours, 47 minutes, 42 secondswhich if you piece together the pieces is probably the start of OpenAI figuring out its o1 stuff when last year in November.
2:47:502 hours, 47 minutes, 50 secondsthe QStar rumors came out.
2:47:522 hours, 47 minutes, 52 secondsThere's a lot of intellectual drive to know when is something like this going to happen with language models?
2:48:002 hours, 48 minutesBecause we know these models are so powerful and we know it has been so successful in the past.
2:48:042 hours, 48 minutes, 4 secondsAnd it is a reasonable analogy that this new type of reinforcement learning training for reasoning models is when the doors open to this.
2:48:142 hours, 48 minutes, 14 secondsWe don't yet have the equivalent of turn 37,
2:48:172 hours, 48 minutes, 17 secondswhich is the famous turn where the DeepMind's AI playing ghost dumped Lee Sedol completely.
2:48:242 hours, 48 minutes, 24 secondsWe don't have something that's that level of focal point,
2:48:272 hours, 48 minutes, 27 secondsbut that doesn't mean that the approach to technology is different and the impact of the general training, it's still incredibly new. - What do you think that point would be?
2:48:342 hours, 48 minutes, 34 secondsWhat would be Move 37 for chain of thought, for reasoning? - Scientific discovery.
2:48:382 hours, 48 minutes, 38 secondsWhen you use this sort of reasoning problem and it just something we fully don't expect. - I think it's actually probably simpler than that.
2:48:462 hours, 48 minutes, 46 secondsIt's probably something related to computer user robotics rather than science discovery.
2:48:512 hours, 48 minutes, 51 secondsBecause the important aspect here is models take so much data to learn. They're not sample-efficient.
2:48:592 hours, 48 minutes, 59 secondsTrillions, they take the entire web over 10 trillion tokens to train on.
2:49:052 hours, 49 minutes, 5 secondsThis would take a human thousands of years to read. A human does not, and humans know most of the stuff,
2:49:132 hours, 49 minutes, 13 secondsa lot of the stuff models know better than it. Humans are way, way, way more sample-efficient. And that is because of the self-play.
2:49:182 hours, 49 minutes, 18 secondsHow does a baby learn what its body is as it sticks its foot in its mouth and it says, oh, this is my body.
2:49:262 hours, 49 minutes, 26 secondsIt sticks its hand in its mouth and it calibrates its touch on its fingers with the most sensitive touch thing on its tongue. Like is how babies learn.
2:49:332 hours, 49 minutes, 33 secondsAnd it's just self-play over and over and over and over again.
2:49:372 hours, 49 minutes, 37 secondsAnd now, we have something that is similar to that with these verifiable proofs,
2:49:442 hours, 49 minutes, 44 secondswhether it's a unit test and code or a mathematical verifiable task, generate many traces of reasoning.
2:49:512 hours, 49 minutes, 51 secondsAnd keep branching them out, keep branching them out. And then, check at the end, hey, which one actually has the right answer? Most of 'em are wrong. Great. These are the few that are right.
2:49:582 hours, 49 minutes, 58 secondsMaybe we use some sort of reward model outside of this to select even the best one to preference as well.
2:50:032 hours, 50 minutes, 3 secondsBut now, you've started to get better and better at these benchmarks.
2:50:062 hours, 50 minutes, 6 secondsAnd so, you've seen over the last six months a skyrocketing in a lot of different benchmarks.
2:50:112 hours, 50 minutes, 11 seconds- All math and code benchmarks were pretty much solved except for frontier math,
2:50:142 hours, 50 minutes, 14 secondswhich is designed to be almost questions that aren't practical to most people, 'cause they're exam level, open math problem type things.
2:50:242 hours, 50 minutes, 24 secondsSo, it's like on the math problems that are somewhat reasonable,
2:50:272 hours, 50 minutes, 27 secondswhich is like somewhat complicated word problems or coding problems. It's just what Dylan is saying.
2:50:322 hours, 50 minutes, 32 seconds- So, the thing here is that these are only with verifiable tasks. We earlier showed an example of the really interesting,
2:50:392 hours, 50 minutes, 39 secondslike what happens when chain of thought is to a non-verifiable thing. It's just like a human chatting with a, thinking about what's novel for humans, a unique thought.
2:50:482 hours, 50 minutes, 48 secondsBut this task and form of training only works when it's verifiable. And from here, the thought is, okay,
2:50:552 hours, 50 minutes, 55 secondswe can continue to scale this current training method by increasing the number of verifiable tasks. In math and coding, coding probably has a lot more to go.
2:51:042 hours, 51 minutes, 4 secondsMath has a lot less to go in terms of what are verifiable things.
2:51:072 hours, 51 minutes, 7 secondsCan I create a solver that then I generate trajectories toward, or traces towards, reasoning traces towards,
2:51:122 hours, 51 minutes, 12 secondsand then prune the ones that don't work and keep the ones that do work? Well, those are gonna be solved pretty quickly. But even if you've solved math, you have not actually created intelligence.
2:51:222 hours, 51 minutes, 22 secondsAnd so, this is where I think the aha moment of computer use or robotics will come in,
2:51:272 hours, 51 minutes, 27 secondsbecause now you have a sandbox or a playground that is infinitely verifiable. Did you, messing around on the internet,
2:51:362 hours, 51 minutes, 36 secondsthere are so many actions that you can do that are verifiable. It'll start off with log into a website, create an account, click a button here, blah, blah, blah. But it'll then get to the point,
2:51:442 hours, 51 minutes, 44 secondswhere it's, hey, go do a task on Tasker or whatever these other, all these various task websites. Hey, go get hundreds of likes. And it's gonna fail.
2:51:532 hours, 51 minutes, 53 secondsIt's gonna spawn hundreds of accounts, it's gonna fail on most of them, but this one got to a thousand, great. Now, you've reached the verifiable thing. And you just keep iterating this loop over and over.
2:52:002 hours, 52 minutesAnd that's when... And same with robotics. That's where you have an infinite playground of tasks like, hey, did I put the ball in the bucket, all the way to like, oh, did I build a car?
2:52:092 hours, 52 minutes, 9 secondsThere's a whole trajectory to speed run or what models can do. But at some point, I truly think that like,
2:52:172 hours, 52 minutes, 17 secondswe'll spawn models, and initially, all the training will be in sandboxes, but then at some point,
2:52:222 hours, 52 minutes, 22 secondsthe language model pre-training is gonna be dwarfed by what is this reinforcement learning?
2:52:272 hours, 52 minutes, 27 secondsYou'll pre-train a multimodal model that can see, that can read, that can write, blah, blah, blah, whatever, vision, audio, et cetera,
2:52:342 hours, 52 minutes, 34 secondsbut then you'll have it play in a sandbox infinitely, and figure out math, figure out code, figure out navigating the web, figure out operating a robot arm.
2:52:422 hours, 52 minutes, 42 secondsAnd then, it'll learn so much.
2:52:452 hours, 52 minutes, 45 secondsAnd the aha moment I think will be when this is available to then create something that's not good. Like, oh cool. Part of it was figuring out how to use the web.
2:52:532 hours, 52 minutes, 53 secondsNow, all of a sudden, it's figured out really well how to just get hundreds of thousands of followers that are real and real engagement on Twitter, because all of a sudden,
2:53:002 hours, 53 minutesthis is one of the things that are verifiable. - And maybe not just engagement, but make money. - Yes, of course. - I become an...
2:53:062 hours, 53 minutes, 6 secondsI mean, that could be the thing where almost fully automated, it makes $10 million by being an influencer,
2:53:142 hours, 53 minutes, 14 secondsselling a product, creating the product. And I'm not referring to like a hype product,
2:53:202 hours, 53 minutes, 20 secondsbut an actual product or like, holy shit, this thing created a business. It's running it, it's the face of the business. That kind of thing.
2:53:282 hours, 53 minutes, 28 secondsOr maybe a number one song,
2:53:312 hours, 53 minutes, 31 secondslike it creates the whole infrastructure required to create the song, to be the influence that represents that song, that kind of thing. And makes a lot of...
2:53:392 hours, 53 minutes, 39 secondsThat could be the mo... I mean, our culture respects money in that kind of way. - And it's verifiable, right? - [Lex] It's verifiable.
2:53:462 hours, 53 minutes, 46 seconds- The bank account can't lie. - Exactly.
2:53:492 hours, 53 minutes, 49 seconds- There is surprising evidence that once you set up the ways of collecting the verifiable domain that this can work.
2:53:552 hours, 53 minutes, 55 secondsThere's been a lot of research before this R1 on math problems,
2:54:002 hours, 54 minutesand they approach math with language models just by increasing the number of samples. So, you can just try again and again and again.
2:54:062 hours, 54 minutes, 6 secondsAnd you look at the amount of times that the language models get it right.
2:54:102 hours, 54 minutes, 10 secondsAnd what we see is that even very bad models get it right sometimes.
2:54:152 hours, 54 minutes, 15 secondsAnd the whole idea behind reinforcement learning is that you can learn from very sparse rewards. So, the space of language and the space of tokens,
2:54:242 hours, 54 minutes, 24 secondswhether you're generating language or tasks for a robot is so big that you might say that it's like,
2:54:302 hours, 54 minutes, 30 secondsthe tokenizer for a language model can be like 200,000 things. So, at each step, it can sample from that big of a space.
2:54:362 hours, 54 minutes, 36 secondsSo, if it can generate a bit of a signal that it can climb onto, that's the whole field of RL is around, is learning from sparse rewards.
2:54:452 hours, 54 minutes, 45 secondsAnd the same thing has played out in math where it's like very weak models that sometimes generate answers,
2:54:492 hours, 54 minutes, 49 secondswhere you see research already that you can boost their math scores, you can do this sort of RL training for math. It might not be as effective,
2:54:572 hours, 54 minutes, 57 secondsbut if you take a 1 billion parameter model, so something 600 times smaller than DeepSeek,
2:55:022 hours, 55 minutes, 2 secondsyou can boost its grade school math scores very directly with a small amount of this training. So, it's not to say that this is coming soon,
2:55:102 hours, 55 minutes, 10 secondssetting up the verification domains is extremely hard, and there's a lot of nuance in this, but there are some basic things that we have seen before,
2:55:182 hours, 55 minutes, 18 secondswhere it's at least expectable that there's a domain and there's a chance that this works. - All right, so we have fun things happening in real time.
Chapter 15: OpenAI o3-mini vs DeepSeek r1
2:55:262 hours, 55 minutes, 26 secondsThis is a good opportunity to talk about other reasoning models, o1, o3. Just now, OpenAI as perhaps expected, released o3-mini.
2:55:382 hours, 55 minutes, 38 secondsWhat are we expecting from the different flavors?
2:55:412 hours, 55 minutes, 41 secondsCan you just lay out the different flavors of the o models and from Gemini, the reasoning model?
2:55:472 hours, 55 minutes, 47 seconds- Something I would say about these reasoning models is we talked a lot about reasoning training on math and code. And what is done is that you have the base model,
2:55:552 hours, 55 minutes, 55 secondswe've talked about a lot on the internet.
2:55:562 hours, 55 minutes, 56 secondsYou do this large-scale reasoning training with reinforcement learning. And then, what the DeepSeek paper detailed in this R1 paper,
2:56:042 hours, 56 minutes, 4 secondswhich for me is one of the big open questions on how do you do this, is that they did reasoning-heavy,
2:56:102 hours, 56 minutes, 10 secondsbut very standard post-training techniques after the large-scale reasoning RL.
2:56:152 hours, 56 minutes, 15 secondsSo, they did the same things with a form of instruction tuning through rejection sampling,
2:56:192 hours, 56 minutes, 19 secondswhich is essentially heavily filtered instruction tuning with some reward models. And then, they did this RLHF, but they made it math-heavy.
2:56:272 hours, 56 minutes, 27 secondsSo, some of this transfer, we've looked at this philosophical example early on.
2:56:332 hours, 56 minutes, 33 secondsOne of the big open questions is how much does this transfer? If we bring in domains after the reasoning training,
2:56:402 hours, 56 minutes, 40 secondsare all the models gonna be become eloquent writers by reasoning? Is this philosophy stuff gonna be open?
2:56:452 hours, 56 minutes, 45 secondsWe don't know in the research of how much this will transfer.
2:56:472 hours, 56 minutes, 47 secondsThere's other things about how we can make soft verifiers and things like this. But there is more training after reasoning, which makes it easier to use these reasoning models.
2:56:562 hours, 56 minutes, 56 secondsAnd that's what we're using right now. So, if we're gonna talk about o3-mini and o1,
2:57:002 hours, 57 minutesthese have gone through these extra techniques that are designed for human preferences after being trained to elicit reasoning.
2:57:062 hours, 57 minutes, 6 seconds- I think one of the things that people are ignoring is Google's Gemini Flash Thinking - Yeah. - is both cheaper than R1 and better. - Yeah.
2:57:152 hours, 57 minutes, 15 seconds- And they released it in the beginning of December. - [Lex] And nobody's talking about it.
2:57:182 hours, 57 minutes, 18 seconds- No one cares. - It has a different flavor to it.
2:57:202 hours, 57 minutes, 20 secondsIts behavior is less expressive than something like o1 or it has fewer tracks than it is on. Qwen released a model last fall, QWQ,
2:57:282 hours, 57 minutes, 28 secondswhich was their preview reasoning model. And DeepSeek had R1-Lite last fall, where these models felt like they're on rails, where they really, really only can do math and code.
2:57:372 hours, 57 minutes, 37 secondsAnd o1 is, it can answer anything. It might not be perfect for some tasks, but it's flexible, it has some richness to it.
2:57:462 hours, 57 minutes, 46 secondsAnd this is the art of how is a model a little bit undercooked? It's like, it's good to get a model out the door,
2:57:532 hours, 57 minutes, 53 secondsbut it's hard to gauge and it takes a lot of taste to be like, is this a full-fledged model? Can I use this for everything?
2:58:012 hours, 58 minutes, 1 secondAnd they're probably more similar for math and code.
2:58:032 hours, 58 minutes, 3 secondsMy quick read is that Gemini Flash is not trained the same way as o1, but taking an existing training stack,
2:58:132 hours, 58 minutes, 13 secondsadding reasoning to it.
2:58:142 hours, 58 minutes, 14 secondsSo, taking a more normal training stack and adding reasoning to it. And I'm sure they're gonna have more,
2:58:192 hours, 58 minutes, 19 secondsI mean, they've done quick releases on Gemini Flash, the reasoning, and this is the second version from the holidays.
2:58:262 hours, 58 minutes, 26 secondsIt's evolving fast and it takes longer to make this training stack where you're doing this large-scale RL. - Ask it the same question from earlier, the one about the-
2:58:352 hours, 58 minutes, 35 seconds- The human nature. - Yeah. - [Lex] What was the human nature one?
2:58:402 hours, 58 minutes, 40 seconds- The way I can ramble, why I can ramble about this so much is that we've been working on this at AI2 before o1 was fully available to everyone,
2:58:492 hours, 58 minutes, 49 secondsand before R1, which is essentially using this RL training for fine-tuning. We use this in our Tulu series of models.
2:58:562 hours, 58 minutes, 56 secondsAnd you can elicit the same behaviors where you say like weight and so much on,
2:59:012 hours, 59 minutes, 1 secondbut it's subtle late in the training process that this kind of reasoning expression is much lighter.
2:59:062 hours, 59 minutes, 6 secondsSo, there's essentially a gradation and just how much of this RL training you put into it determines how the output looks.
2:59:132 hours, 59 minutes, 13 seconds- So, we're now using Gemini 2.0 Flash Thinking Experimental 01-21.
2:59:212 hours, 59 minutes, 21 seconds- It summarized the prompt as humans self-domesticated apes. (Nathan and Lex laughing) - Perspective. Okay.
2:59:282 hours, 59 minutes, 28 secondsAll right. So, wait, is this revealing the reasoning? Here's why this is a novel. Oh, okay. - You click to expand. - Oh, yeah, click to expand.
2:59:362 hours, 59 minutes, 36 seconds- Okay. Analyze the request. Novel is the key word. - See how it just looks a little different. It looks like a normal output. (chuckles)
2:59:452 hours, 59 minutes, 45 seconds- Yeah, it's... In some sense, it's better structured, it makes more sense.
2:59:502 hours, 59 minutes, 50 secondsAnd- - When it latched onto human and then it went into organisms, and oh wow. (Nathan laughing) - Apex predator, focus on domestication.
3:00:003 hoursApply domestication to humans, explore the idea of self-domestication. (Lex and Nathan laughing) - Not good, not good. - Where is this going?
3:00:093 hours, 9 secondsRefine, articulate the insight. Greater facial expressiveness and communication ability. Yes. (chuckles) Plasticity and adaptability. Yes.
3:00:173 hours, 17 secondsDependence on social groups. Yes. All right. And self-critique and refined further. Wow. Is this truly novel?
3:00:263 hours, 26 secondsIs it well-supported? (Nathan chuckles) So on and so forth.
3:00:303 hours, 30 secondsAnd the insight is getting at is humans are not just social animals, but profoundly self-domesticated apes.
3:00:373 hours, 37 secondsAnd this self-domestication is the key to understanding our unique cognitive and social abilities. Self-domesticated apes. (Nathan laughing)
3:00:453 hours, 45 secondsSelf- - I prefer the DeepSeek response. (chuckles) - Self do... I mean, it's novel. The insight is novel. (Nathan laughing)
3:00:543 hours, 54 secondsThat's like a good book title, self-domesticated apes. There could be a case made for that. Yeah, it's cool and it's revealing the reasoning.
3:01:023 hours, 1 minute, 2 secondsIt's magical. It's magical. This is really powerful. Hello, everyone, this is Lex with a quick intermission,
3:01:123 hours, 1 minute, 12 secondsrecorded after the podcast.
3:01:143 hours, 1 minute, 14 secondsSince we've reviewed responses from DeepSeek-R1 and Gemini Flash 2.0 Thinking during this conversation,
3:01:213 hours, 1 minute, 21 secondsI thought at this moment, it would be nice to insert myself quickly doing the same for OpenAI o1 Pro and o3-mini with the same prompt,
3:01:313 hours, 1 minute, 31 secondsthe prompt being, give one truly novel insight about humans. And I thought I would in general,
3:01:393 hours, 1 minute, 39 secondsgive my vibe check and vibe-based anecdotal report on my own experiences with the new o-3 mini model,
3:01:503 hours, 1 minute, 50 secondsnow that I got a chance to spend many hours with it in different kinds of contexts and applications. So, I would probably categorize this question as a,
3:01:593 hours, 1 minute, 59 secondslet's say, open-ended philosophical question.
3:02:013 hours, 2 minutes, 1 secondAnd in particular, the emphasis on novelty I think is a nice way to test one of the capabilities of the model,
3:02:093 hours, 2 minutes, 9 secondswhich is come up with something that makes you pause and almost surprise you with its brilliance.
3:02:163 hours, 2 minutes, 16 secondsSo, that said, my general review after running each of the models on this question a bunch of times is that o1 Pro consistently gave brilliant answers.
3:02:283 hours, 2 minutes, 28 secondsOnce, they gave me pause and made me think,
3:02:313 hours, 2 minutes, 31 secondsboth cutting in its insight and just really nicely phrased with clarity, with nuance,
3:02:403 hours, 2 minutes, 40 secondsover and over consistently generating the best answers. After that is R1, which was less consistent, but again, deliver brilliance.
3:02:493 hours, 2 minutes, 49 secondsGemini Flash 2.0 Thinking was third. And last was o3-mini actually. It often gave quite a generic answer,
3:02:593 hours, 2 minutes, 59 secondsat least to my particular sensibilities.
3:03:013 hours, 3 minutes, 1 secondThat said, in a bunch of other applications that I tested for brainstorming purposes,
3:03:073 hours, 3 minutes, 7 secondsit actually worked extremely well and often outperformed R1. But on this open-ended philosophical question,
3:03:153 hours, 3 minutes, 15 secondsit did consistently worse.
3:03:173 hours, 3 minutes, 17 secondsNow, another important element for each of these models is how the reasoning is presented. DeepSeek-R1 shows the full chain of thought tokens,
3:03:263 hours, 3 minutes, 26 secondswhich I personally just love. For these open-ended philosophical questions,
3:03:313 hours, 3 minutes, 31 secondsit's really, really interesting to see the model think through it, but really also just stepping back,
3:03:363 hours, 3 minutes, 36 secondsme as a person who appreciates intelligence and reasoning and reflection, reading these kind of chain of thought, raw tokens of R1,
3:03:453 hours, 3 minutes, 45 secondsthere's something genuinely beautiful about observing the path of deliberation in an intelligent system.
3:03:543 hours, 3 minutes, 54 secondsI think we don't always have that explicitly laid out for us humans. So, to see it in another intelligence system,
3:04:023 hours, 4 minutes, 2 secondsthe non-linearity of it akin to "Ulysses" or "Finnegans Wake" by James Joyce. It's just beautiful to watch.
3:04:093 hours, 4 minutes, 9 secondsAnyways, we discussed in the episode,
3:04:113 hours, 4 minutes, 11 secondsDeepSeek-R1 talked about humans being able to convert selfish desires into cooperative systems by collectively pretending abstract rules like money laws and rights are real.
3:04:223 hours, 4 minutes, 22 secondsAnd these shared hallucinations act as games where competition is secretly redirected to benefit the group, turning conflict into society's fuel.
3:04:323 hours, 4 minutes, 32 secondsGemini 2.0 Flash Thinking said, "Humans are not just social animals, but self-domesticated apes,
3:04:393 hours, 4 minutes, 39 secondsand this self-domestication is the key to understanding our unique cognitive and social abilities."
3:04:443 hours, 4 minutes, 44 secondsNow, it's important to say that the chain of thought there was really interesting.
3:04:493 hours, 4 minutes, 49 secondsIt was looking through the entire evolution of life on earth, considering apex predators,
3:04:563 hours, 4 minutes, 56 secondsand considering how from that, we ended up to where we are.
3:05:003 hours, 5 minutesI think that domestication by choice is a really interesting angle.
3:05:053 hours, 5 minutes, 5 secondsAgain, it's one of those things when somebody presents a different angle on a seemingly obvious thing, it just makes me smile. And the same with DeepSeek-R1,
3:05:133 hours, 5 minutes, 13 secondsthat these hallucinations of money laws and rights and us collectively pretending like it's real,
3:05:223 hours, 5 minutes, 22 secondsand we play games with them that look like competition, when secretly, we're just cooperating with each other. And that is the fuel of progress, beautifully put.
3:05:313 hours, 5 minutes, 31 secondsNow, OpenAI o1 Pro consistently over and over, delivered bangers. I can go through many of them,
3:05:373 hours, 5 minutes, 37 secondsbut the first one was, "Humans are the only species that turns raw materials into symbolic resources,
3:05:433 hours, 5 minutes, 43 secondsthen uses those symbols to reorganize the very materials they came from, creating a closed feedback loop between meaning and matter."
3:05:523 hours, 5 minutes, 52 secondsHere, I just ran it again, (laughs) banger after banger, I'm telling you.
3:05:573 hours, 5 minutes, 57 seconds"Humans are unique among known species in that they simultaneously rewrite two layers of reality, the external world and their own private mental landscapes,
3:06:063 hours, 6 minutes, 6 secondsand then merge these two rewritten layers into a continuous personal narrative that feels objectively true, feels true."
3:06:173 hours, 6 minutes, 17 secondsThis is poetry. Okay.
3:06:193 hours, 6 minutes, 19 secondsAnd then, o3-mini-high for me was smart, fast actually, and kind of generic.
3:06:293 hours, 6 minutes, 29 secondsNever quite got there for me. So, here's the first one I got from o3-mini.
3:06:343 hours, 6 minutes, 34 seconds"Humans are not fixed beings but rather ongoing narratives, dynamic stories that we continuously write, edit, and reinterpret.
3:06:423 hours, 6 minutes, 42 secondsThis narrative plasticity is more than just memory or self-reflection.
3:06:473 hours, 6 minutes, 47 secondsIt's an intrinsic cognitive process that acts like an internal error correction system.
3:06:523 hours, 6 minutes, 52 secondsIt allows us to adapt our identities and values over time in response to new experiences, challenges, and social context.
3:07:003 hours, 7 minutesNow, it almost sneaks up to something approximating cutting insight with narrative plasticity in quotes.
3:07:073 hours, 7 minutes, 7 secondsBut then, it goes back to the generic, I don't know. All of these models are incredible for different reasons. There's a lot of concerns as we discussed in this episode,
3:07:163 hours, 7 minutes, 16 secondsbut there's a lot of reasons to be excited as well. And I've probably spoken for too long.
3:07:243 hours, 7 minutes, 24 secondsI am severely sleep-deprived, borderline delirious. So, hopefully, some of this made sense.
3:07:323 hours, 7 minutes, 32 secondsAnd now, dear friends, back to the episode. - I think when you, to Nathan's point,
3:07:403 hours, 7 minutes, 40 secondswhen you look at the reasoning models, to me, even when I used R1 versus o1,
3:07:473 hours, 7 minutes, 47 secondsthere was that sort of rough or edges around the corner feeling. And Flash Thinking, earlier, I didn't use this version,
3:07:543 hours, 7 minutes, 54 secondsbut the one from December,
3:07:553 hours, 7 minutes, 55 secondsand it definitely had that rough edges around the corner feeling, where it's just not fleshed out in as many ways.
3:08:023 hours, 8 minutes, 2 secondsSure, they added math and coding capabilities via these verifiers in RL, but it feels like they lost something in certain areas.
3:08:103 hours, 8 minutes, 10 secondsAnd o1 is worse performing than chat in many areas as well, to be clear. - Not by a lot. - Not by a lot though.
3:08:163 hours, 8 minutes, 16 secondsAnd R1 definitely felt to me like it was worse than V3 in certain areas, like doing this RL expressed and learned a lot,
3:08:253 hours, 8 minutes, 25 secondsbut then it weakened in other areas.
3:08:273 hours, 8 minutes, 27 secondsAnd so, I think that's one of the big differences between these models, and what o1 offers. And then, OpenAI has o1 Pro.
3:08:363 hours, 8 minutes, 36 secondsAnd what they did with o3, which is like also very unique, is that they stacked search on top of chain of thought.
3:08:433 hours, 8 minutes, 43 secondsAnd so, chain of thought is one thing, where it's able, it's one chain, it backtracks, goes back and forth,
3:08:483 hours, 8 minutes, 48 secondsbut how they solved the ARC-AGI challenge was not just the chain of thought. It was also sampling many times,
3:08:553 hours, 8 minutes, 55 secondsi.e, running them in parallel, and then selecting. - Is running in parallel actually search?
3:09:003 hours, 9 minutesBecause I don't know if we have the full information on how o1 Pro works. So, like I'm not, I don't - That's right. - have enough information - Agree. - to confidently say that it is searched. - It is parallel samples. - Yeah.
3:09:093 hours, 9 minutes, 9 secondsAnd then, what? - And it selects something. - And we don't know what the selection function is.
3:09:123 hours, 9 minutes, 12 secondsThe reason why we're debating is because since o1 was announced,
3:09:163 hours, 9 minutes, 16 secondsthere's been a lot of interest in techniques called Monte Carlo Tree Search,
3:09:193 hours, 9 minutes, 19 seconds- Mm-hmm. - which is where you will break down the chain of thought into intermediate steps. We haven't defined chain of thought.
3:09:243 hours, 9 minutes, 24 secondsChain of thought is from a paper from years ago where you introduced the idea to ask a language model that at the time, was much less easy to use.
3:09:323 hours, 9 minutes, 32 secondsYou would say, let's verify step by step,
3:09:343 hours, 9 minutes, 34 secondsand it would induce the model to do this bulleted list of steps.
3:09:383 hours, 9 minutes, 38 secondsChain of thought is now almost a default in models where if you ask in a math question, you don't need to tell it to think step by step.
3:09:443 hours, 9 minutes, 44 secondsAnd the idea with Monte Carlo Tree Search is that you would take an intermediate point in that train, do some sort of expansion, spend more compute,
3:09:523 hours, 9 minutes, 52 secondsand then select the right one.
3:09:533 hours, 9 minutes, 53 secondsThat's like a very complex form of search that has been used in things like MuZero and AlphaZero potentially. I know MuZero does this.
3:10:003 hours, 10 minutes- Another form of search is just asking five different people, and then taking the majority answer. - Yes. - There's a variety of like, (Nathan chuckles) it could be complicated, it could be simple.
3:10:093 hours, 10 minutes, 9 secondsWe don't know what it is, just that they are not just issuing one chain of thought in sequence.
3:10:143 hours, 10 minutes, 14 seconds- Yeah. - They're launching many in parallel, and in the ARC-AGI, they launched a thousand in parallel for their, the one that really shocked everyone,
3:10:223 hours, 10 minutes, 22 secondsthat beat the benchmark was they would launch a thousand in parallel, and then they would get the right answer, like 80% of the time or 70% of the time, 90 maybe even.
3:10:303 hours, 10 minutes, 30 secondsWhereas if they just launched one, it was like 30%. - There are many extensions to this.
3:10:353 hours, 10 minutes, 35 secondsI would say the simplest one is that our language models to date have been designed to give the right answer the highest percentage of the time in one response.
3:10:443 hours, 10 minutes, 44 secondsAnd we are now opening the door to different ways of running inference on our models in which we need to reevaluate many parts of the training process,
3:10:533 hours, 10 minutes, 53 secondswhich normally opens the door to more progress,
3:10:563 hours, 10 minutes, 56 secondsbut we don't know if OpenAI changed a lot or if just sampling more in multiple choices what they're doing,
3:11:013 hours, 11 minutes, 1 secondor if it's something more complex where they changed the training and they know that the inference mode is going to be different.
3:11:073 hours, 11 minutes, 7 seconds- So, we're talking about o1 Pro $200 a month and they're losing money. So, the thing that we're referring to,
3:11:163 hours, 11 minutes, 16 secondsthis fascinating exploration of the test-time compute space, is that actually possible?
3:11:243 hours, 11 minutes, 24 secondsDo we have enough compute for that? Does the financials make sense? - So, the fantastic thing is, and it's in the thing that I pulled up earlier,
3:11:323 hours, 11 minutes, 32 secondsbut the cost for GPT-3 has plummeted. If you scroll up just a few images, I think.
3:11:403 hours, 11 minutes, 40 secondsThe important thing about like, hey, is cost limiting factor here?
3:11:443 hours, 11 minutes, 44 secondsMy view is that we'll have really awesome intelligence before we have, like AGI before we have it permeate throughout the economy.
3:11:523 hours, 11 minutes, 52 secondsAnd this is why that reason is. GPT-3 was trained in what, 2020, 2021?
3:11:583 hours, 11 minutes, 58 secondsAnd the cost for running inference on it was 60, $70 per million tokens, which was the cost per intelligence was ridiculous.
3:12:073 hours, 12 minutes, 7 secondsNow, as we scaled forward two years,
3:12:093 hours, 12 minutes, 9 secondswe've had a 1,200x reduction in cost to achieve the same level of intelligence as GPT-3.
3:12:153 hours, 12 minutes, 15 seconds- So, here on the x-axis is time over just a couple of years.
3:12:193 hours, 12 minutes, 19 secondsAnd on the y-axis is log scale dollars to run inference on a millions- - Yes, dollars.
3:12:273 hours, 12 minutes, 27 secondsYeah, a million. - And so, you have just a down,
3:12:313 hours, 12 minutes, 31 secondslike a linear decline on log scale from GPT-3 through 3.5 to Llama. - It's like 5 cents or something like that now,
3:12:403 hours, 12 minutes, 40 secondswhich is versus $60, 1,200x. - Yeah.
3:12:423 hours, 12 minutes, 42 secondsYeah. - That's not the exact numbers, but it's 1,200x. I remember that number. Is humongous cost per intelligence.
3:12:503 hours, 12 minutes, 50 secondsNow, the freak out over DeepSeek is, oh my god, they made it so cheap. It's like actually, if you look at this trend line, they're not below the trend line, first of all,
3:12:573 hours, 12 minutes, 57 secondsand at least for GPT-3. (Nathan laughing) They are the first to hit it, which is a big deal. But they're not below the trend line as far as GPT-3. Now, we have GPT-4,
3:13:063 hours, 13 minutes, 6 secondswhat's gonna happen with these reasoning capabilities. It's a mix of architectural innovations, it's a mix of better data, and it's gonna be better training techniques,
3:13:143 hours, 13 minutes, 14 secondsand all of these better inference systems, better hardware.
3:13:173 hours, 13 minutes, 17 secondsGoing from each generation of GPU to new generations, or ASICs,
3:13:223 hours, 13 minutes, 22 secondseverything is gonna take this cost curve down and down and down and down.
3:13:263 hours, 13 minutes, 26 secondsAnd then, can I just spawn a thousand different LLMs to create a task, and then pick from one of them? Or whatever search technique,
3:13:353 hours, 13 minutes, 35 secondsI want a Tree, Monte Carlo Tree Research. Maybe it gets that complicated, maybe it doesn't, 'cause it's too complicated to actually scale, who knows? Bitter lesson, right?
3:13:433 hours, 13 minutes, 43 secondsThe question is I think when not if, because the rate of progress is so fast.
3:13:513 hours, 13 minutes, 51 secondsNine months ago, Dario was saying, hey, or Dario said nine months ago, the cost to train an inference was this. And now, we're much better than this.
3:14:003 hours, 14 minutesAnd DeepSeek is much better than this. And that cost curve for GPT-4,
3:14:033 hours, 14 minutes, 3 secondswhich was also roughly $60 per million tokens when it launched, has already fallen to $2 or so.
3:14:113 hours, 14 minutes, 11 secondsAnd we're gonna get it down to cents probably for GPT-4 quality and the same...
3:14:153 hours, 14 minutes, 15 secondsAnd that's the base for the reasoning models like o1 that we have today, and o1 Pro is spawning multiple.
3:14:233 hours, 14 minutes, 23 secondsAnd o3 and so on and so forth. These search techniques' too expensive today, but they will get cheaper. And that's what's gonna unlock the intelligence.
Chapter 16: NVIDIA
3:14:313 hours, 14 minutes, 31 seconds- So, it'll get cheaper and cheaper and cheaper. The big DeepSeek-R1 release freaked everybody out,
3:14:383 hours, 14 minutes, 38 secondsbecause of the cheaper, one of the manifestations of that is Nvidia stock plummeted. Can you explain what happened?
3:14:463 hours, 14 minutes, 46 secondsAnd also just explain this moment and whether if Nvidia's gonna keep winning. - We are both Nvidia bulls here, I would say.
3:14:553 hours, 14 minutes, 55 secondsAnd in some ways, the market response is reasonable. Most of the market,
3:15:003 hours, 15 minuteslike Nvidia's biggest customers in the US are major tech companies, and they're spending a ton on AI.
3:15:063 hours, 15 minutes, 6 secondsAnd if a simple interpretation of DeepSeek is you can get really good models without spending as much on AI. So, in that capacity, it's like, oh,
3:15:153 hours, 15 minutes, 15 secondsmaybe these big tech companies won't need to spend as much in AI and go down. The actual thing that happened, it's much more complex, where there's social factors, where there's the rising in the App Store,
3:15:233 hours, 15 minutes, 23 secondsthe social contagion that is happening. And then, I think some of it's just like... I don't trade, I don't know anything about financial markets, but it builds up over the weekend,
3:15:323 hours, 15 minutes, 32 secondswhere the social pressure,
3:15:333 hours, 15 minutes, 33 secondswhere it's like if it was during the week and there was multiple days of trading when this was really becoming, but it comes on the weekend, and then everybody wants to sell.
3:15:403 hours, 15 minutes, 40 secondsAnd that is a social contagion. - I think, and like there were a lot of false narratives, which is like, hey, these guys are spending billions on models.
3:15:483 hours, 15 minutes, 48 secondsAnd they're not spending billions on models.
3:15:503 hours, 15 minutes, 50 secondsNo one spent more than a billion dollars on a model that's released publicly. GPT-4 was a couple hundred million,
3:15:563 hours, 15 minutes, 56 secondsand then they've reduced the cost for Turbo 4o. But billion dollar model runs are coming.
3:16:043 hours, 16 minutes, 4 secondsAnd this concludes pre-training and post-training. And then, the other number is like, hey, DeepSeek didn't include everything. They didn't include...
3:16:103 hours, 16 minutes, 10 secondsA lot of the cost goes to research and all this sort of stuff. A lot of the cost goes to inference. A lot of the cost goes to post-training. None of these things were factor. - Yeah. - It's research salaries.
3:16:173 hours, 16 minutes, 17 secondsAll these things are counted in the billions of dollars that OpenAI is spending, but they weren't counted in the, hey, 6 million, $5 million that DeepSeek spent.
3:16:263 hours, 16 minutes, 26 secondsSo, there's a bit of misunderstanding of what these numbers are.
3:16:293 hours, 16 minutes, 29 secondsAnd then, there's also an element of Nvidia's just been a straight line up.
3:16:343 hours, 16 minutes, 34 secondsAnd there's been so many different narratives that have been trying to push down Nvidia. I don't say push down Nvidia stock.
3:16:403 hours, 16 minutes, 40 secondsEveryone is looking for a reason to sell or to be worried. It was Blackwell delays. Their GPU was, there's a lot of report...
3:16:483 hours, 16 minutes, 48 secondsEvery two weeks, there's a new report about their GPUs being delayed. There's the whole thing about scaling laws ending.
3:16:563 hours, 16 minutes, 56 secondsIt's so ironic. - [Nathan] It lasted a month. (laughs) It was just literally just, hey, models aren't getting better. They're just not getting better.
3:17:043 hours, 17 minutes, 4 secondsThere's no reason to spend more, pre-training scaling is dead, and then it's like, o1, o3. - R1. (laughs) - R1. And now, it's like, wait, models are getting too,
3:17:133 hours, 17 minutes, 13 secondsthey're progressing too fast, (Nathan laughing) slow down the progress, stop spending on GPUs. - Yeah. - And it's...
3:17:183 hours, 17 minutes, 18 secondsBut the funniest thing I think that comes out of this is Jevons Paradox is true.
3:17:233 hours, 17 minutes, 23 secondsAWS pricing for H100s has gone up over the last couple weeks. Since a little bit after Christmas,
3:17:303 hours, 17 minutes, 30 secondssince V3 was launched, AWS H100 pricing has gone up. H200s are almost out of stock everywhere, because H200 has more memory,
3:17:393 hours, 17 minutes, 39 secondsand therefore, R1 wants that chip over H100.
3:17:423 hours, 17 minutes, 42 seconds- We were trying to get GPUs on a short notice this week for a demo, and it wasn't that easy.
3:17:463 hours, 17 minutes, 46 secondsWe were trying to get just 16 or 32 H100s for demo, and it was not very easy.
3:17:503 hours, 17 minutes, 50 seconds(Nathan chuckles) - So, for people who don't Jevons Paradox is when the efficiency goes up, somehow, magically, counterintuitively,
3:18:003 hours, 18 minutesthe total resource consumption goes up as well. - And semiconductors is, we're at 50 years of Moore's Law, every two years half the cost,
3:18:083 hours, 18 minutes, 8 secondsdouble the transistors just like clockwork. And it's slowed down obviously, but the semiconductor industry is gone up the whole time. It's been wavy.
3:18:153 hours, 18 minutes, 15 secondsThere's obviously cycles and stuff, and I don't expect AI to be any different. There's gonna be ebbs and flows, but this is in AI, it's just playing out at an insane timescale.
3:18:243 hours, 18 minutes, 24 secondsIt was 2x every two years. This is 1,200x in like three years. So, it's like, (Nathan laughing)
3:18:313 hours, 18 minutes, 31 secondsthe scale of improvement that is hard to get wrap your head around. - Yeah, I was confused, because to me, Nvidia stock on that should have gone up.
3:18:393 hours, 18 minutes, 39 secondsBut maybe it went down because there's suspicion of foul play on the side of China, something like this.
3:18:453 hours, 18 minutes, 45 secondsBut if you just look purely at the actual principles at play here, it's obvious.
3:18:513 hours, 18 minutes, 51 secondsYeah, Jevons Paradox. - More progress that AI makes or the higher the derivative of AI progress is, especially you should, because Nvidia's in the best place.
Chapter 17: GPU smuggling
3:19:003 hours, 19 minutesThe higher the derivative is, the sooner the market's gonna be bigger and expanding.
3:19:033 hours, 19 minutes, 3 secondsAnd Nvidia's the only one that does everything - Yeah. - reliably right now. - Because it's not like an Nvidia competitor arose.
3:19:103 hours, 19 minutes, 10 secondsIt's another company that's using Nvidia, so- - Who historically has been a large Nvidia customer.
3:19:163 hours, 19 minutes, 16 seconds- Yeah. (chuckles) - And has press releases about them cheering about being China's biggest Nvidia customer. (Nathan laughing) - [Lex] Yeah, it made it-
3:19:243 hours, 19 minutes, 24 seconds- Obviously they've quieted down, but I think that's another element of is, that they don't wanna say how many GPUs they have. - Yeah. - Because hey, yes,
3:19:323 hours, 19 minutes, 32 secondsthey have H800s, yes, they have H20s, they also have some H100s, which are smuggled in. - So, can you speak to that, to the smuggling?
3:19:393 hours, 19 minutes, 39 secondsWhat's the scale of smuggling that's feasible for a nation state to do for companies? Is it possible to-
3:19:463 hours, 19 minutes, 46 seconds- I think there's a few angles of smuggling here.
3:19:493 hours, 19 minutes, 49 secondsOne is ByteDance arguably is the largest smuggler of GPUs for China. China's not supposed to have GPUs. ByteDance has like over 500,000 GPUs. Why?
3:19:583 hours, 19 minutes, 58 secondsBecause they're all rented from companies around the world. They rent from Oracle, they rent from Google, they rent from all these mass... And a bunch of smaller cloud companies too.
3:20:063 hours, 20 minutes, 6 secondsAll the Neoclouds of the world. They rent so, so many GPUs, they also buy a bunch.
3:20:113 hours, 20 minutes, 11 secondsAnd they do this for mostly like what Meta does, serving TikTok, serving next best separate- - Same discussion. - Same as kind, to be clear, that's today the view use.
3:20:213 hours, 20 minutes, 21 seconds- Yeah. - And it's a valid use. Hack the dopamine circuit.
3:20:243 hours, 20 minutes, 24 secondsNow, that's theoretically now very much restricted with the AI diffusion rules,
3:20:303 hours, 20 minutes, 30 secondswhich happened in the last week of the Biden admin and Trump admin looks like they're gonna keep 'em, which limits allies, even like Singapore,
3:20:383 hours, 20 minutes, 38 secondswhich Singapore is like 20, 30% of Nvidia's revenue.
3:20:423 hours, 20 minutes, 42 secondsBut Singapore's had a moratorium on not building data centers for like 15 years, 'cause they don't have enough power. So, where are they going? (Dylan laughing) - [Nathan] Oh yeah. (laughs)
3:20:513 hours, 20 minutes, 51 seconds- I'm not claiming they're all going to China, but a portion are,
3:20:533 hours, 20 minutes, 53 secondsmany are going to Malaysia, including Microsoft and Oracle have big data centers in Malaysia. They're going all over Southeast Asia probably, India as well.
3:21:013 hours, 21 minutes, 1 secondThere's stuff routing, but the diffusion rules are very de facto. You can only buy this many GPUs from this country.
3:21:083 hours, 21 minutes, 8 secondsAnd you can only rent a cluster this large to companies that are Chinese. They're very explicit on trying to stop smuggling.
3:21:153 hours, 21 minutes, 15 secondsAnd a big chunk of it was, hey, random company by 16 servers ship them to China.
3:21:233 hours, 21 minutes, 23 secondsThere's actually, I saw a photo from someone in the semiconductor industry who leads like a team for networking chips that competes with Nvidia.
3:21:333 hours, 21 minutes, 33 secondsAnd he sent a photo of a guy checking into a first-class united flight from San Francisco to Shanghai or Shenzhen,
3:21:413 hours, 21 minutes, 41 secondswith a super micro box that is this big, which can only contain GPUs. (Nathan chuckles) And he was booking first-class, 'cause think about it,
3:21:483 hours, 21 minutes, 48 seconds3 to 5k for your first-class ticket, server costs 240,000 in the US, to 50,000. You sell it for 300,000 in China,
3:21:563 hours, 21 minutes, 56 secondswait, you just got a free first-class ticket - Yeah. - and a lot more money. So, it's like... And then, that's like small-scale smuggling.
3:22:023 hours, 22 minutes, 2 secondsMost of the large-scale smuggling is like companies in Singapore and Malaysia routing 'em around, or renting GPUs completely legally. - I wanna jump in.
3:22:103 hours, 22 minutes, 10 secondsHow much does this scale?
3:22:113 hours, 22 minutes, 11 secondsI think there's been some number, like some people that are higher level economics understanding,
3:22:163 hours, 22 minutes, 16 secondssay that it's like as you go from 1 billion of smuggling to 10 billion, it's like you're hiding certain levels of economic activity.
3:22:223 hours, 22 minutes, 22 secondsAnd that's the most reasonable thing to me is that there's gonna be some level where it's so obvious that it's easier to find this economic activity. And- - Yeah.
3:22:303 hours, 22 minutes, 30 secondsSo, my belief is that last year, roughly... So, Nvidia made a million H20s, which are legally allowed to be shipped to China,
3:22:393 hours, 22 minutes, 39 secondswhich we talked about is better for reasoning, inference at least. Maybe not training, but reasoning, inference. And inference generally.
3:22:463 hours, 22 minutes, 46 secondsThen, they also had a couple 100,000,
3:22:493 hours, 22 minutes, 49 secondswe think like 200 to 300,000 GPUs were routed to China from Singapore, Malaysia, US, wherever.
3:22:563 hours, 22 minutes, 56 secondsCompanies spun up by 16 GPUs, 64 GPUs, whatever it is routed,
3:22:593 hours, 22 minutes, 59 secondsand Huawei's known for having spent up a massive network of companies to get the materials they need after they were banned in 2018. So, it's not like otherworldly, but I agree.
3:23:083 hours, 23 minutes, 8 secondsNathan's point is like, hey, you can't smuggle up $10 billion of GPUs.
3:23:123 hours, 23 minutes, 12 secondsAnd then, the third source, which is just now banned and which wasn't considered smuggling, but is China is renting, I believe from our research,
3:23:223 hours, 23 minutes, 22 secondsOracle's biggest GPU customer is ByteDance. And for Google, I think it's their second biggest customer.
3:23:293 hours, 23 minutes, 29 secondsAnd so, like, and you go down the list of clouds and especially these smaller cloud companies that aren't like that hyperscalers. Think beyond core of even Lambda even, there's a whole sea,
3:23:393 hours, 23 minutes, 39 secondsthere's 60 different new cloud companies serving Nvidia GPUs. I think ByteDance is renting a lot of these all over it.
3:23:443 hours, 23 minutes, 44 secondsAnd so, these companies are renting GPUs to Chinese companies, and that was completely legal up until the diffusion rules,
3:23:523 hours, 23 minutes, 52 secondswhich happened just a few weeks ago.
3:23:543 hours, 23 minutes, 54 secondsAnd even now, you can rent GPU clusters that are less than 2,000 GPUs.
3:23:583 hours, 23 minutes, 58 secondsOr you can buy GPUs and ship them wherever you want if they're less than 1,500 GPUs. So, it's like there are still some ways to smuggle,
3:24:063 hours, 24 minutes, 6 secondsbut yeah, as the numbers grow,
3:24:093 hours, 24 minutes, 9 seconds100 something billion dollars of revenue for Nvidia last year, 200 something billion this year. And if next year,
3:24:163 hours, 24 minutes, 16 secondsit could nearly double again or more than double based on what we see with data center footprints like being built out all across the US and the rest of the world,
3:24:243 hours, 24 minutes, 24 secondsit's gonna be really hard for China to keep up with these rules.
3:24:273 hours, 24 minutes, 27 secondsYes, there will always be smuggling and DeepSeek level models of GPT-4 level models, o1 level models capable to train on what China can get,
3:24:363 hours, 24 minutes, 36 secondseven the next tier above that.
3:24:383 hours, 24 minutes, 38 secondsBut if we speed run a couple more jumps to billion dollar models, $10 billion models, then it becomes, hey,
3:24:463 hours, 24 minutes, 46 secondsthere is a compute disadvantage for China for training models and serving them. And the serving part is really critical. DeepSeek cannot serve their model today.
3:24:533 hours, 24 minutes, 53 secondsIt's completely out of inventory.
3:24:563 hours, 24 minutes, 56 secondsIt's already started falling in the App Store actually, downloads, because you download it, you try and sign up, they say, we're not taking registrations, 'cause they have no capacity.
3:25:033 hours, 25 minutes, 3 secondsYou open it up, you get less than five tokens per second if you even get your request approved. Because there's just no capacity, because they just don't have enough GPUs to serve the model,
3:25:123 hours, 25 minutes, 12 secondseven though it's incredibly efficient. - It'd be fascinating to watch the smuggling, 'cause there's drug smuggling. That's a market.
3:25:213 hours, 25 minutes, 21 secondsThere's weapons smuggling.
3:25:233 hours, 25 minutes, 23 secondsAnd GPUs will surpass that at some point. - Chips are highest value per kilogram, probably by far. (chuckles)
3:25:313 hours, 25 minutes, 31 seconds- Oh man. - I have another question for you, Dylan. Do you track model API access internationally?
Chapter 18: DeepSeek training on OpenAI data
3:25:363 hours, 25 minutes, 36 secondsHow easy is it for Chinese companies to use hosted model APIs from the US? - Yeah, that's incredibly easy.
3:25:433 hours, 25 minutes, 43 secondsOpenAI publicly stated DeepSeek uses their API. And they say they have evidence.
3:25:483 hours, 25 minutes, 48 secondsAnd this is another element of the training regime is people at OpenAI have claimed that it's a distilled model. i.e, you're taking OpenAI's model,
3:25:563 hours, 25 minutes, 56 secondsyou're generating a lot of output, and then you're training on the output in their model. - Yeah. - And even if that's the case, what they did is still amazing, by the way, what DeepSeek did, efficiency-wise.
3:26:043 hours, 26 minutes, 4 seconds- Distillation is standard practice in industry.
3:26:063 hours, 26 minutes, 6 secondsWhether or not, if you're at a closed lab where you care about terms of service and IP closely, you distill from your own models.
3:26:113 hours, 26 minutes, 11 secondsIf you are a researcher and you're not building any products, you distill from the OpenAI models. - This is a good opportunity. Can you explain big picture distillation as a process?
3:26:213 hours, 26 minutes, 21 secondsWhat is distillation?
3:26:233 hours, 26 minutes, 23 secondsWhat's the process - We've - of distillation? - talked a lot about training language models. They are trained on text. And post-training,
3:26:283 hours, 26 minutes, 28 secondsyou're trying to train on very high quality text that you want the model to match the features of. Or if you're using RL, you're letting the model find its own thing.
3:26:363 hours, 26 minutes, 36 secondsBut for supervised fine-tuning,
3:26:373 hours, 26 minutes, 37 secondsfor preference data, you need to have some completions what the model is trying to learn to imitate.
3:26:423 hours, 26 minutes, 42 secondsAnd what you do there is, instead of a human data or instead of the model you're currently training, you take completions from a different,
3:26:513 hours, 26 minutes, 51 secondsnormally more powerful model.
3:26:523 hours, 26 minutes, 52 secondsI think there's rumors that these big models that people are waiting for, these GPT-5s of the world, the Claude 3 Opuses of the world,
3:27:013 hours, 27 minutes, 1 secondare used internally to do this distillation process at OpenAI. - There's also public examples, like Meta explicitly stated, not necessarily distilling,
3:27:093 hours, 27 minutes, 9 secondsbut they used 405b as a reward model for 70b in their Llama 3.2 - Yes. - or 3.3. This is all the same topic.
3:27:163 hours, 27 minutes, 16 seconds- So, (sighs) is this ethical? Is this legal? Why is that "Financial Times" article headline say,
3:27:253 hours, 27 minutes, 25 secondsOpenAI says that there's evidence that China's DeepSeek used its model to train competitor.
3:27:313 hours, 27 minutes, 31 seconds- This is a long, at least in the academic side and research side, it has a long history, 'cause you're trying to interpret OpenAI's rule.
3:27:373 hours, 27 minutes, 37 secondsOpenAI's terms of service say that you cannot build a competitor with outputs from their models. Terms of service are different than a license,
3:27:443 hours, 27 minutes, 44 secondswhich are essentially a contract between organizations. So, if you have a terms of service on OpenAI's account, if I violate it, OpenAI can cancel my account.
3:27:533 hours, 27 minutes, 53 secondsThis is very different than like a license that says how you could use a downstream artifact.
3:27:563 hours, 27 minutes, 56 secondsSo, a lot of it hinges on a word that is very unclear in the AI space, which is what is a competitor? And so- - And then, the ethical aspect of it is like,
3:28:043 hours, 28 minutes, 4 secondswhy is it unethical for me to train on your bottle - Yeah. - when you can train on the internet's text? - Yeah. - Right? - So, there's a bit of a hypocrisy,
3:28:113 hours, 28 minutes, 11 secondsbecause OpenAI and potentially most of the companies trained on the internet's text without permission.
3:28:203 hours, 28 minutes, 20 seconds- There's also a clear loophole, which is that I generate data from OpenAI, and then I upload it somewhere,
3:28:263 hours, 28 minutes, 26 secondsand then somebody else trains on it and the link has been broken. They're not under the same terms of service contract. - This is why- - There's a lot of hippo...
3:28:343 hours, 28 minutes, 34 secondsThere's a lot of to be discovered details that don't make a lot of sense. - This is why a lot of models today, even if they train on zero OpenAI data,
3:28:423 hours, 28 minutes, 42 secondsyou ask the model who trained you, it'll say, I'm ChatGPT trained by OpenAI. - Yeah.
3:28:473 hours, 28 minutes, 47 seconds- Because there's so much copy-paste of OpenAI outputs from that on the internet that you just weren't able to filter it out.
3:28:533 hours, 28 minutes, 53 secondsAnd there was nothing in the RL where they implemented like, hey, or post-training or SFT, whatever, that says, hey,
3:29:003 hours, 29 minutesI'm actually modeled by Allen Institute instead of OpenAI. - We have to do this if we serve a demo.
3:29:053 hours, 29 minutes, 5 secondsWe do research and we use OpenAI APIs, because it's useful and we want to understand post-training, and our research models,
3:29:113 hours, 29 minutes, 11 secondsthey'll say they're written by OpenAI unless we put in the system prop that we talked about that.
3:29:163 hours, 29 minutes, 16 secondsLike, I am Tulu, I am a language model trained by the Allen Institute for AI. And if you ask more people around industry,
3:29:223 hours, 29 minutes, 22 secondsespecially with post-training, it's a very doable task to make the model say who it is or to suppress the OpenAI thing.
3:29:293 hours, 29 minutes, 29 secondsSo, in some levels, it might be that DeepSeek didn't care that it was saying that it was by OpenAI. If you're gonna upload model weights, it doesn't really matter,
3:29:373 hours, 29 minutes, 37 seconds'cause anyone that's serving it in an application and cares a lot about serving is going to, when serving it, if they're using it for a specific task,
3:29:453 hours, 29 minutes, 45 secondsthey're gonna tailor it to that. And it doesn't matter that it's saying it's ChatGPT.
3:29:483 hours, 29 minutes, 48 seconds- Oh, I guess the one of the ways to do that is like a system prompt or something like that. Like if you're serving it to say that you're- - That's what we do.
3:29:553 hours, 29 minutes, 55 secondsIf we host a demo, you say you are Tulu 3, a language model trained by the Allen Institute for AI. We also are benefited from OpenAI data,
3:30:043 hours, 30 minutes, 4 seconds'cause it's a great research tool.
3:30:063 hours, 30 minutes, 6 seconds- Do you think there's any truth and value to the claim,
3:30:123 hours, 30 minutes, 12 secondsOpenAI's claim that there's evidence that China's DeepSeek use this model to train? - I think everyone has benefited regardless,
3:30:193 hours, 30 minutes, 19 secondsbecause the data's on the internet. And therefore, it's in your pre-training now.
3:30:233 hours, 30 minutes, 23 secondsThere are like subreddits where people share the best ChatGPT outputs. And those are in your- - I think that they're trying to shift the narrative,
3:30:313 hours, 30 minutes, 31 secondslike they're trying to protect themselves.
3:30:333 hours, 30 minutes, 33 secondsAnd we saw this years ago when ByteDance was actually banned from some OpenAI APIs for training on outputs. There's other AI startups that most people,
3:30:423 hours, 30 minutes, 42 secondsif you're in the AI culture, were like,
3:30:443 hours, 30 minutes, 44 secondsthey just told us they trained on OpenAI outputs and they never got banned. That's how they bootstrapped their early models.
3:30:503 hours, 30 minutes, 50 secondsSo, it's much easier to get off the ground using this than to set up human pipelines and build a strong model.
3:30:563 hours, 30 minutes, 56 secondsSo, it's long history here and a lot of the communications are seem like narrative control. - Actually, over the last couple days,
3:31:023 hours, 31 minutes, 2 secondswe've seen a lot of people distill DeepSeek's model into Llama models, because the DeepSeek models - Mm-hmm. - are complicated to run inference on,
3:31:093 hours, 31 minutes, 9 secondsbecause they're mixture of experts and they're 600 plus billion parameters and all this.
3:31:143 hours, 31 minutes, 14 secondsAnd people distilled them into the Llama models. (Lex laughing) Because the Llama models are so easy to serve,
3:31:183 hours, 31 minutes, 18 secondsand everyone's built the pipelines and tooling for inference - Yeah. - with the Llama models, because it's the open standard. (chuckles) So, we've seen it, we've seen a roundabout.
3:31:263 hours, 31 minutes, 26 secondsIs it bad? Is it illegal? Maybe it's illegal, whatever. I don't know about that. But it's- - It could break contracts. I don't think it's illegal, like in any illegal,
3:31:333 hours, 31 minutes, 33 secondslike no one's going to jail for this ever.
3:31:353 hours, 31 minutes, 35 seconds- I think fundamentally, I think it's ethical or I hope it's ethical, because the moment becomes, we ban that kind of thing,
3:31:443 hours, 31 minutes, 44 secondsit's gonna make everybody much worse off. And I also actually, this is difficult,
3:31:513 hours, 31 minutes, 51 secondsbut I think you should be allowed to train on the internet.
3:31:553 hours, 31 minutes, 55 secondsI know a lot of authors and creators are very sensitive about it. That's a difficult question. But the moment you're not allowed to train on the internet.
3:32:033 hours, 32 minutes, 3 seconds- I agree. - I have a schizo take on how you can solve this, because it already works. - All right. - I have a reasonable take on it. - All right, all right. (Nathan laughing)
3:32:103 hours, 32 minutes, 10 seconds- So, Japan has a law which you're allowed to train on any training data and copyrights don't apply if you wanna train a model, A.
3:32:183 hours, 32 minutes, 18 secondsB, Japan has nine gigawatts of curtailed nuclear power.
3:32:233 hours, 32 minutes, 23 secondsC, Japan is allowed under the AI diffusion rule to import as many GPUs as they'd like. So, all we have to do, we have a market here to make,
3:32:303 hours, 32 minutes, 30 secondswe build massive data setters, we rent them to the labs, and then we train models in a legally permissible way, and there's no if, ands, or buts.
3:32:383 hours, 32 minutes, 38 secondsAnd now, the models have no potential copyright lawsuit from "New York Times" or anything like that. No, no, it's just completely legal. - Yeah. - No, so-
3:32:463 hours, 32 minutes, 46 seconds- Genius. - The early copyright lawsuits have fallen in the favor of AI training.
3:32:513 hours, 32 minutes, 51 secondsI would say that the long tail of use is gonna go in the side of AI, which is if you do,
3:32:583 hours, 32 minutes, 58 secondsif you scrape the trillions of tokens of data, you're not looking and saying, this one "New York Times" article is so important to me.
3:33:063 hours, 33 minutes, 6 secondsBut if you're doing a audio generation for music or image generation and you say, make it in the style of X person,
3:33:123 hours, 33 minutes, 12 secondsthat's a reasonable case where you could figure out what is their profit margin on inference.
3:33:173 hours, 33 minutes, 17 secondsI don't know if it's gonna be the 50/50 of YouTube creator program or something, but I would opt into that program as a writer,
3:33:243 hours, 33 minutes, 24 secondslike, please, like that... It's gonna be a rough journey, but there will be some solutions like that that make sense.
3:33:323 hours, 33 minutes, 32 secondsBut there's a long tail where it's just on the internet.
3:33:353 hours, 33 minutes, 35 seconds- I think one of the other aspects of that "Financial Times" article implied. And so, that leads to a more general question. Do you think there's...
3:33:443 hours, 33 minutes, 44 secondsHow difficult is spying, espionage,
3:33:473 hours, 33 minutes, 47 secondsand stealing of actual secret code and data from inside companies? How much of that is being attempted?
3:33:553 hours, 33 minutes, 55 seconds- Code and data is hard, but ideas is easy. Silicon Valley operates (Dylan chuckles)
3:33:583 hours, 33 minutes, 58 seconds- Yeah. - on the way that top employees get bought out by other companies for a pay raise,
3:34:043 hours, 34 minutes, 4 secondsand a large reason why these companies do this is to bring ideas with them. And there's no, in California, there's rules that certain,
3:34:133 hours, 34 minutes, 13 secondslike non-competes or whatever, are illegal in California and whether or not there's NDAs and things, that is how a lot of process happens.
3:34:193 hours, 34 minutes, 19 secondsRecently, there was somebody from Gemini who helped make this 1 million context length and everyone is saying the next Llama who,
3:34:283 hours, 34 minutes, 28 secondsI mean, he went to the Meta team, is gonna have 1 million context length. And that's how the world works. - As far as industrial espionage and things,
3:34:363 hours, 34 minutes, 36 secondsthat has been greatly successful in the past. The Americans did the Brits, the Chinese have done it to the Americans,
3:34:443 hours, 34 minutes, 44 secondsand so on and so forth. It is a fact of life.
3:34:483 hours, 34 minutes, 48 secondsAnd so, to argue industrial espionage can be stopped is probably unlikely. You can make it difficult. But even then, there's all these stories about,
3:34:563 hours, 34 minutes, 56 secondshey, F35 and F22 have already been given to China in terms of design plans and stuff. Code and stuff like between, I say companies,
3:35:063 hours, 35 minutes, 6 secondsnot nation states is probably very difficult, but ideas are discussed a lot.
3:35:103 hours, 35 minutes, 10 secondsWhether it be a house party in San Francisco or a company changing employees,
3:35:153 hours, 35 minutes, 15 secondsor always the mythical honeypot that always gets talked about, like someone gets honeypotted.
3:35:233 hours, 35 minutes, 23 secondsBecause everyone working on AI is a single dude who's in their 20s and 30s. Not everyone, but a insane percentages.
3:35:313 hours, 35 minutes, 31 secondsSo, there's always all these you know, and obviously- - So, honeypotted is like a spy, a female spy approaches you and like-
3:35:383 hours, 35 minutes, 38 seconds- Yeah, yeah. - Or male. It's San Francisco, but... (Nathan laughing) As a single dude, I will say, in his late 20s,
3:35:463 hours, 35 minutes, 46 secondsit is like, we are very easily corrupted. - [Lex] Yeah. - Not corrupted myself, but we are, we are. - Yeah. Everybody else, not me.
3:35:543 hours, 35 minutes, 54 secondsEverybody else. - Yeah. Exactly. - I'm too oblivious that I am not single. So, I'm safe from one espionage access. (laughs)
3:36:003 hours, 36 minutes- Yeah, you have to make sure to close all security vulnerabilities.
Chapter 19: AI megaclusters
3:36:053 hours, 36 minutes, 5 secondsSo, you, Dylan, collect a lot of information about each of the mega clusters for each of the major AI companies.
3:36:133 hours, 36 minutes, 13 secondsCan you talk about the buildouts for each one that stand out?
3:36:183 hours, 36 minutes, 18 seconds- Yeah, so I think the thing that's really important about these mega cluster buildouts is they're completely unprecedented in scale.
3:36:263 hours, 36 minutes, 26 secondsUS, data center power consumption has been slowly on the rise and it's gone up to 2, 3% even through the cloud computing revolution.
3:36:343 hours, 36 minutes, 34 secondsData center consumption as a percentage of total US. And that's been over decades of data centers, et cetera. It's been climbing, climbing slowly. But now, 2 to 3%.
3:36:433 hours, 36 minutes, 43 secondsNow, by the end of this decade, even under like,
3:36:473 hours, 36 minutes, 47 secondswhen I say 10%, a lot of people that are traditionally by 2028, 2030, a traditional data center people like, that's nuts.
3:36:563 hours, 36 minutes, 56 secondsBut then, people who are in AI who have really looked at this at the Anthropics and OpenAIs, they're like, that's not enough. And I'm like, okay. - Mm-hmm. (chuckles)
3:37:043 hours, 37 minutes, 4 seconds- But this is both through globally distributed or distributed throughout the US, as well as centralized clusters.
3:37:123 hours, 37 minutes, 12 secondsThe distributed throughout the US is exciting and it's the bulk of it. Like, hey, OpenAI or say, Meta is adding a gigawatt.
3:37:223 hours, 37 minutes, 22 secondsBut most of it is distributed through the US for inference and all these other things. - So, maybe we should lay it out what a cluster is. So, does this include AWS?
3:37:333 hours, 37 minutes, 33 secondsMaybe it's good to talk about the different kinds of clusters and what you mean by mega clusters, and what's the GPU - Mm-hmm. - and what's the computer and what... I'm just kidding. - Yeah, yeah, yeah.
3:37:413 hours, 37 minutes, 41 seconds- Not that far back, but yeah. So, what do we mean by the clusters, - Oh man. - the build outs? - I thought I was about to do the Apple ad. What's a computer? (group laughing)
3:37:493 hours, 37 minutes, 49 secondsSo, traditionally, data centers and data center tasks have been a distributed systems problem that is capable of being spread very far and widely.
3:38:003 hours, 38 minutesi.e, I send a request to Google, it gets routed to a data center somewhat close to me. It does whatever search ranking recommendation,
3:38:073 hours, 38 minutes, 7 secondssends a result back. The nature of the task is changing rapidly in that the task, there's two tasks that people are really focused on now.
3:38:163 hours, 38 minutes, 16 secondsIt's not database access, it's not serve me the right page, serve me the right ad. It's now a inference.
3:38:223 hours, 38 minutes, 22 secondsAnd inference is dramatically different from traditional distributed systems, but it looks a lot more similar. And then, there's training. The train inference side is still like, hey,
3:38:313 hours, 38 minutes, 31 secondsI'm gonna put thousands of GPUs in blocks all around these data centers. I'm gonna run models on them, user submits a request, it gets kicked off,
3:38:413 hours, 38 minutes, 41 secondsor hey, my service, they submit a request to my service. They're on Word, and they're like, oh yeah, help me, Copilot. And it starts, kicks it off, or I'm on my Windows, Copilot, whatever,
3:38:483 hours, 38 minutes, 48 secondsApple Intelligence, whatever it is, it gets kicked off to a data center. And that data center does some work and sends it back.
3:38:543 hours, 38 minutes, 54 secondsThat's inference. That is going to be the bulk of compute.
3:38:593 hours, 38 minutes, 59 secondsAnd that's like, there's thousands of data centers that we're tracking with satellites and all these other things. And those are the bulk of what's being built. But the scale of...
3:39:083 hours, 39 minutes, 8 secondsAnd so, that's like what's really reshaping and that's what's getting millions of GPUs.
3:39:113 hours, 39 minutes, 11 secondsBut the scale of the largest cluster is also really important. When we look back at history, or through the age of AI,
3:39:223 hours, 39 minutes, 22 secondsit was a really big deal when they did AlexNet on I think two GPUs or four GPUs. - Yeah. - [Dylan] I don't remember. It was a really big deal. - Oh, it's a big deal,
3:39:303 hours, 39 minutes, 30 seconds'cause you use GPUs.
3:39:313 hours, 39 minutes, 31 seconds(Nathan laughing) - It's a big deal they use GPUs and they used multiple. But then over time, its scale has just been compounding.
3:39:383 hours, 39 minutes, 38 secondsAnd so, when you skip forward to GPT-3, then GPT 4, GPT-4, 20,000 A100 GPUs,
3:39:443 hours, 39 minutes, 44 secondsunprecedented run in terms of the size and the cost. A couple hundred million dollars on a YOLO. A YOLO run for GPT-4.
3:39:513 hours, 39 minutes, 51 secondsAnd it yielded this magical improvement that was perfectly in line with what was experimented and just like a log scale right up.
3:39:593 hours, 39 minutes, 59 seconds- Oh yeah, they had that plot from the paper. Scaling the technical were part. - The scaling laws were perfect. But that's not a crazy number.
3:40:053 hours, 40 minutes, 5 seconds20,000 A100s, roughly each GPU is consuming 400 watts. And then, when you add in the whole server,
3:40:123 hours, 40 minutes, 12 secondseverything, it's like 15 to 20 megawatts of power.
3:40:183 hours, 40 minutes, 18 secondsMaybe you could look up what the power of consumption of a person is because the numbers are gonna get silly.
3:40:223 hours, 40 minutes, 22 secondsBut 15 to 20 megawatts was standard data center size was just unprecedented. That was all GPUs running one task. - [Nathan] How many watts is a toaster? (chuckles)
3:40:303 hours, 40 minutes, 30 seconds- A toaster is like also- - That's a good example. - A similar power consumption to an A100. H100 comes around, (Nathan chuckles) they increase the power from like 400 to 700 watts.
3:40:393 hours, 40 minutes, 39 secondsAnd that's just per GPU. And then, there's all the associated stuff around it. So, once you count all that, it's roughly like 1,200 to 1,400 watts for everything,
3:40:463 hours, 40 minutes, 46 secondsnetworking, CPUs, memory, blah, blah, blah. - So, we should also say, so what's required? You said power. So, a lot of power is required,
3:40:543 hours, 40 minutes, 54 secondsa lot of heat is generated, so the cooling is required. And because there's a lot of GPUs that have to be,
3:41:013 hours, 41 minutes, 1 secondor CPUs or whatever, they have to be connected. So, there's a lot of networking, right? - Yeah, yeah, so I think... Yeah, sorry for skipping past that.
3:41:103 hours, 41 minutes, 10 secondsAnd then, the data center itself is complicated.
3:41:113 hours, 41 minutes, 11 secondsBut these are still standardized data centers for GPT-4 scale.
3:41:153 hours, 41 minutes, 15 secondsNow, we step forward to what is the scale of clusters that people have built last year. And it ranges widely.
3:41:243 hours, 41 minutes, 24 secondsIt ranges from like, hey, these are standard data centers and we're just using multiple of them and connecting them together really with a ton of fiber between them, a lot of networking, et cetera.
3:41:323 hours, 41 minutes, 32 secondsThat's what OpenAI and Microsoft did in Arizona. And so, they have 100,000 GPUs. Meta, similar thing. They took their standard existing data center design,
3:41:403 hours, 41 minutes, 40 secondsand it looks like an H, and they connected multiple on 'em together. And they got to, they first did 16,000 GPUs, 24,000 GPUs total.
3:41:493 hours, 41 minutes, 49 secondsOnly 16 of them, 1,000 of 'em were running on the training run, because GPUs are very unreliable. So, they needed to have spares to swap in and out.
3:41:553 hours, 41 minutes, 55 secondsAll the way to like now 100,000 GPUs that they're training on Llama 4 on currently. Like 128,000 or so.
3:42:023 hours, 42 minutes, 2 secondsThink about 100,000 GPUs with roughly 1,400 watts a piece, that's 140 megawatts, 150 megawatts for 128, right?
3:42:123 hours, 42 minutes, 12 secondsSo, you're talking about you've jumped from 15 to 20 megawatts to 10x,
3:42:163 hours, 42 minutes, 16 secondsalmost 10x that number, 9x that number to 150 megawatts in two years, from 2022 to 2024.
3:42:243 hours, 42 minutes, 24 secondsAnd some people like Elon that he admittedly,
3:42:273 hours, 42 minutes, 27 secondsand he says himself got into the game a little bit late for pre-training large language models. xAI was started later.
3:42:333 hours, 42 minutes, 33 secondsBut then, he bet heaven and hell to get his data center up and get the largest cluster in the world, which is 200,000 GPUs.
3:42:403 hours, 42 minutes, 40 secondsAnd he did that. He bought a factory in Memphis.
3:42:433 hours, 42 minutes, 43 secondsHe's upgrading the substation with the same time he's got a bunch of mobile power generation, a bunch of single cycle combine.
3:42:503 hours, 42 minutes, 50 secondsHe tapped the natural gas line that's right next to the factory and is just pulling a ton of gas, burning gas. He's generating all this power.
3:42:573 hours, 42 minutes, 57 secondsHe's in a factory and an old appliance factory that's shut down and moved to China long ago. And he's got 200,000 GPUs in it.
3:43:053 hours, 43 minutes, 5 secondsAnd now, what's the next scale? All the hyperscalers have done this. Now, the next scale is something that's even bigger. And so, Elon, just to stick on the topic,
3:43:133 hours, 43 minutes, 13 secondshe's building his own natural gas plant, like a proper one right next door.
3:43:183 hours, 43 minutes, 18 secondsHe's deploying tons of Tesla megapack batteries to make the power more smooth and all sorts of other things.
3:43:243 hours, 43 minutes, 24 secondsHe's got industrial chillers to cool the water down because he's water-cooling the chips.
3:43:293 hours, 43 minutes, 29 secondsSo, all these crazy things to get the clusters bigger and bigger. But when you look at, like, say, what OpenAI did with Stargate,
3:43:383 hours, 43 minutes, 38 secondsthat in Arizona, in Abilene, Texas, what they've announced at least. It's not built. Elon says they don't have the money.
3:43:453 hours, 43 minutes, 45 secondsThere's some debates about this.
3:43:483 hours, 43 minutes, 48 secondsBut at full-scale, at least the first section is definitely money's accounted for, but there's multiple sections. But full scale, that data center is gonna be 2.2 gigawatts.
3:43:563 hours, 43 minutes, 56 seconds2,200 megawatts of power in and roughly 1.8 gigawatts or 1,800 megawatt,
3:44:033 hours, 44 minutes, 3 secondsyeah, 1,800 megawatts of power delivered to chips. Now, this is an absurd scale. 2.2 gigawatts is like more than most cities to be clear.
3:44:133 hours, 44 minutes, 13 secondsAnd delivered to a single cluster that's connected to do training. To train these models, to do both the pre-training,
3:44:203 hours, 44 minutes, 20 secondsthe post-training, all of this stuff. - This is insane. - It is.
3:44:243 hours, 44 minutes, 24 seconds- Insane. - What is a nuclear power plant again- - everyone is doing this. Everyone is doing this. (Lex laughing) Meta in Louisiana, they're building two natural gas plants, massive ones,
3:44:333 hours, 44 minutes, 33 secondsand then they're building this massive data center. Amazon has plans for this scale. Google has plans for this scale.
3:44:423 hours, 44 minutes, 42 secondsxAI has plans for this scale. The guys that are racing, the companies that are racing are racing hard,
3:44:483 hours, 44 minutes, 48 secondsand they're doing multi gigawatt data centers to build this out, because they think that, yeah, if I now have...
3:44:573 hours, 44 minutes, 57 secondsObviously, pre-training scaling is gonna continue, but to some extent, but then also all this post-training stuff, where you have a RL sandbox for computer use or whatever. This is where they're gonna...
3:45:053 hours, 45 minutes, 5 secondsAnd all these viable domains where they just keep learning and learning and learning, self-play, whatever, whatever it is,
3:45:103 hours, 45 minutes, 10 secondsmakes the AI so much more capable because the line does go up. As you throw more compute, you get more performance. The shirt is about scaling laws.
3:45:193 hours, 45 minutes, 19 secondsTo some extent, it is diminishing returns. You 10x the compute, you don't get 10x better model. You get a diminishing returns, but also you get efficiency improvements.
3:45:273 hours, 45 minutes, 27 secondsSo, you bend the curve. And these scale of data centers are doing, wreaking a lot of havoc on the network.
3:45:343 hours, 45 minutes, 34 secondsNathan was mentioning there's, Amazon has tried to buy this nuclear power plant, Talen. And if you look at the Talen's stock, it's just skyrocketing.
3:45:433 hours, 45 minutes, 43 secondsAnd they're building a massive multi gigawatt data center there. And you just go down the list. There's so many ramifications.
3:45:493 hours, 45 minutes, 49 secondsInteresting thing is certain regions of the US transmitting power cost more than actually generating it. Because the grid is so slow to build,
3:45:583 hours, 45 minutes, 58 secondsand the demand for power and the ability to build power and re-ramping on a natural gas plant or even a coal plant is like easy enough to do. But transmitting the power is really hard.
3:46:073 hours, 46 minutes, 7 secondsSo, in some parts of the US, like in Virginia, it costs more to transmit power than it cost to generate it.
3:46:123 hours, 46 minutes, 12 secondsWhich is like, there's all sorts of second order effects that are insane here. - And the power grid support this kind of growth? - Trump's executive orders,
3:46:203 hours, 46 minutes, 20 secondsthere was a Biden executive order before the end of the year, but then Trump had some more executive orders,
3:46:243 hours, 46 minutes, 24 secondswhich hopefully reduce the regulations to where, yes, things can be built. But yeah, this is a big, big challenge.
3:46:323 hours, 46 minutes, 32 secondsIs building enough power fast enough?
3:46:343 hours, 46 minutes, 34 seconds- Are you gonna basically have a nuclear power plant next to a data center for each one of these? - So, the fun thing here is this is too slow.
3:46:423 hours, 46 minutes, 42 seconds- [Nathan] To build the power plant.
3:46:433 hours, 46 minutes, 43 seconds- To build a power plant or to reconfigure an existing power plant is too slow. And so, therefore, you must use natural...
3:46:503 hours, 46 minutes, 50 secondsData center power consumption is flat.
3:46:523 hours, 46 minutes, 52 secondsIt spike- - Which is why nuclear is also good for it. Like long-term, nuclear is a very natural fit,
3:46:583 hours, 46 minutes, 58 seconds- Yeah, it's- - but you can't do solar or anything in the short-term like that. - Because data center power is like this.
3:47:033 hours, 47 minutes, 3 secondsYou're telling me, I'm gonna buy tens of billions of dollars of GPUs and idle them, 'cause the power's not being generated? Power's cheap.
3:47:113 hours, 47 minutes, 11 secondsIf you look at the cost of a cluster, less than 20% of it is power. Most of it is the capital cost and depreciation of the GPUs.
3:47:193 hours, 47 minutes, 19 secondsAnd so, it's like, well, screw it, I'll just build natural gas plants. This is what Meta is doing in Louisiana.
3:47:243 hours, 47 minutes, 24 secondsThis is what OpenAI's doing in Texas and all these different places. They may not be doing it directly, but they are partnered with someone.
3:47:313 hours, 47 minutes, 31 secondsAnd so, there is a couple hopes. One is... And Elon, what he is doing in Memphis is like, to the extreme, they're not just using dual combine cycle gas,
3:47:403 hours, 47 minutes, 40 secondswhich is like super efficient,
3:47:413 hours, 47 minutes, 41 secondshe's also just using single cycle and mobile generators and stuff, which is less efficient. But there's also the flip side,
3:47:493 hours, 47 minutes, 49 secondswhich is solar power generation is like this, and wind is another like this, correlate different. So, if you stack both of those,
3:47:563 hours, 47 minutes, 56 secondsplus you get a big chunk of batteries, plus you have a little bit of gas, it is possible to run it more green. It's just the timescales for that is slow.
3:48:043 hours, 48 minutes, 4 secondsSo, people are trying, - Mm-hmm. - but Meta basically said, whatever, don't care about my sustainability pledge. Or they'll buy like a power,
3:48:133 hours, 48 minutes, 13 secondsit's called a PPA, power purchasing agreement,
3:48:143 hours, 48 minutes, 14 secondsor they'll be a massive wind farm or solar farm, like wherever. - Oh.
3:48:183 hours, 48 minutes, 18 seconds- And then, they'll just pretend like those electrons are being consumed by the data center,
3:48:213 hours, 48 minutes, 21 secondsbut in reality, they're paying for the power here and selling it to the grid, and they're buying power here. - [Lex] Yep.
3:48:263 hours, 48 minutes, 26 seconds- And then, another thing is like Microsoft quit on some of their sustainability pledges.
3:48:303 hours, 48 minutes, 30 secondsElon, what he did with Memphis is objectively somewhat dirty,
3:48:333 hours, 48 minutes, 33 secondsbut he is also doing it in an area where there's a bigger natural gas plant right next door and like a sewer next, or not a sewer, but like a wastewater treatment and a garbage dump nearby.
3:48:423 hours, 48 minutes, 42 secondsAnd he's obviously made the world a lot more clean than that one data center is gonna do. So, I think it's fine to some extent.
3:48:503 hours, 48 minutes, 50 secondsAnd maybe AGI solves global warming and stuff, (Lex laughing) whatever it is. This is sort of the attitude that people at the labs have, which is like, yeah, it's great.
3:48:583 hours, 48 minutes, 58 secondsWe'll just use gas. Because the race is that important. And if we lose, that's way worse.
3:49:033 hours, 49 minutes, 3 seconds- I should say that I got a chance to visit the Memphis data center. - Oh wow. - And it's incredible. I visited with Elon.
3:49:143 hours, 49 minutes, 14 secondsJust the teams and the rate of innovation there is insane.
3:49:183 hours, 49 minutes, 18 secondsMy sense is that nobody's ever done anything of this scale and nobody has certainly ever done anything of this scale at the rate that xAI is doing.
3:49:293 hours, 49 minutes, 29 secondsSo, they're like figuring out...
3:49:313 hours, 49 minutes, 31 secondsAnd so, I was sitting in on all these meetings where they're brainstorming, it's like, it's insane. It's exciting, 'cause they're like, they're trying to figure out what the bottlenecks are,
3:49:403 hours, 49 minutes, 40 secondshow to remove the bottlenecks, how to make sure that,
3:49:433 hours, 49 minutes, 43 secondsthere's just so many really cool things about putting together a data center, 'cause everything has to work.
3:49:533 hours, 49 minutes, 53 secondsThe people that do like the CIS admin, the machine learning, all that is the exciting thing, so on, but really, the people that run everything (chuckles)
3:50:003 hours, 50 minutesare the folks that know the low level software and hardware that runs everything, the networking, all of that.
3:50:083 hours, 50 minutes, 8 secondsAnd so, you have to make sure you have procedures that test everything. I think they're using ethernet. I don't know how they're doing the networking, but-
3:50:153 hours, 50 minutes, 15 seconds- They're using Nvidia Spectrum-X ethernet. There's actually like, I think yeah, the unsung heroes are the cooling and electrical systems, which are just like (Lex chuckles)
3:50:233 hours, 50 minutes, 23 seconds- Exactly. - glossed over. - [Lex] Yeah.
3:50:243 hours, 50 minutes, 24 seconds- But I think one story that maybe is like exemplifies how insane this stuff is, is when you're training, you're always doing,
3:50:333 hours, 50 minutes, 33 secondsyou're running through the model a bunch, in the most simplistic terms, running through the model a bunch.
3:50:383 hours, 50 minutes, 38 secondsAnd then, you're gonna exchange everything and synchronize the weights. So, you'll do a step, this is like a step in model training.
3:50:453 hours, 50 minutes, 45 secondsAnd every step, your loss goes down, hopefully. And it doesn't always, but in the simplest terms, you'll be computing a lot, and then you'll exchange. The interesting thing is GPU power is most of it,
3:50:543 hours, 50 minutes, 54 secondsnetworking power is some, but it's a lot less. So, while you're computing, your power for your GPUs is here. But then when you're exchanging weights,
3:51:003 hours, 51 minutesif you're not able to overlap communications and compute perfectly, there may be a time period where your GPUs are just idle, and you're exchanging weights and you're like, hey, the model's updating.
3:51:093 hours, 51 minutes, 9 secondsSo, you're exchanging the gradient, you do the model update, and then you start training again. So, the power goes... - Mm-hmm. - And it's super spiky.
3:51:163 hours, 51 minutes, 16 seconds- Yeah. - And so, funnily enough, when you talk about the scale of data center power,
3:51:213 hours, 51 minutes, 21 secondsyou can blow stuff up so easily. - Yeah. - And so, Meta actually has,
3:51:273 hours, 51 minutes, 27 secondsaccidentally opened upstream something to code in PyTorch where they added an operator. And I kid you not, whoever made this,
3:51:333 hours, 51 minutes, 33 secondsI wanna hug the guy, because it says PyTorch,
3:51:363 hours, 51 minutes, 36 secondsit's like pytorch.powerplantnoblowup (Lex laughing) equals zero or equal one. (Nathan laughing) And what it does, what it does is amazing. - [Lex] Yeah.
3:51:443 hours, 51 minutes, 44 seconds- When you're exchanging the weights, the GP will just compute fake numbers, so the power doesn't spike too much.
3:51:493 hours, 51 minutes, 49 secondsAnd so then, the power plants don't blow up because the transient spikes screw stuff up. - Well, that makes sense. You have to do that kind of thing. You have to make sure they're not idle.
3:51:583 hours, 51 minutes, 58 secondsYeah, that's- - And Elon's solution was like, "Let me throw a bunch of Tesla mega packs and a few other things."
3:52:023 hours, 52 minutes, 2 seconds- Stabilize, yeah. - Everyone has different solutions, but Meta's at least (Lex laughing) was publicly and openly known, which is just like, set this operator.
3:52:093 hours, 52 minutes, 9 secondsAnd what this operator does is it just makes the GPUs compute nothing so that the power doesn't spike.
3:52:143 hours, 52 minutes, 14 seconds- But that just tells you how much power you're working with. It's insane.
3:52:183 hours, 52 minutes, 18 secondsIt's insane. - People should just go Google like scale, like what does X watts do?
3:52:233 hours, 52 minutes, 23 secondsAnd go through all the scales from one watt to a kilowatt to a megawatt, and you look and stare at that, and you're how high on the list a gigawatt is,
3:52:313 hours, 52 minutes, 31 secondsand it's mind-blowing. - Can you say something about the cooling? So, I know Elon's using liquid cooling,
3:52:393 hours, 52 minutes, 39 secondsI believe, in all cases. That's a new thing, right? Most of 'em don't use liquid cooling. Is there something interesting to say about the cooling?
3:52:463 hours, 52 minutes, 46 seconds- Yeah, yeah. So, air cooling has been the de facto standard. Throw a bunch of metal heat pipes, et cetera, and fans, and that's cooled, that's been enough to cool it.
3:52:563 hours, 52 minutes, 56 secondsPeople have been dabbling in water cooling. Google's TPUs are water-cooled. So, they've been doing that for a few years.
3:53:033 hours, 53 minutes, 3 secondsBut with GPUs, no one's ever done...
3:53:063 hours, 53 minutes, 6 secondsAnd no one's ever done the scale of water cooling that Elon just did.
3:53:093 hours, 53 minutes, 9 secondsNow, next generation Nvidia is for the highest end GPU, it is mandatory water cooling. You have to water cool it.
3:53:163 hours, 53 minutes, 16 secondsBut Elon did it on this current generation, and that required a lot of stuff.
3:53:203 hours, 53 minutes, 20 secondsIf you look at some of the satellite photos and stuff of the Memphis facility, there's all these external water chillers that are sitting,
3:53:273 hours, 53 minutes, 27 secondsbasically, it looks like a semi-truck pod thing. What's it called? The container. But really, those are water chillers.
3:53:333 hours, 53 minutes, 33 secondsAnd he has like 90 of those water chillers just sitting outside, 90 different containers with water, like chill the water, bring it back to the data center,
3:53:403 hours, 53 minutes, 40 secondsand then you distribute it to all the chips, pull all the heat out, and then send it back. And this is both a way to cool the chips, but it's also an efficiency thing.
3:53:493 hours, 53 minutes, 49 secondsAnd going back to that sort of three vector thing right there is, there is memory bandwidth FLOPS and interconnect. The closer the chips are together,
3:53:583 hours, 53 minutes, 58 secondsthe easier it is to do high speed interconnects.
3:54:023 hours, 54 minutes, 2 secondsAnd so, this is also like a reason why you wanna go water cooling is because you can just put the chips right next to each other, and therefore get higher speed connectivity.
3:54:133 hours, 54 minutes, 13 seconds- I gotta ask you, so in one of your recent posts, there's a section called cluster measuring contest, so...
3:54:233 hours, 54 minutes, 23 seconds- There's another word there, but I won't say it, you know. (Dylan and Nathan laughing)
3:54:273 hours, 54 minutes, 27 seconds- Who's got the biggest now and who's gonna have the biggest? - Today, individual largest is Elon. - Right. Elon's cluster.
3:54:363 hours, 54 minutes, 36 seconds- Elon's cluster in Memphis, 200,000 GPUs. - Okay. - Meta has like 128,000, OpenAI has 100,000 now. Now, to be clear, other companies have more GPUs than Elon.
3:54:453 hours, 54 minutes, 45 secondsThey just don't have 'em in one place. And for training, you want them tightly connected.
3:54:503 hours, 54 minutes, 50 secondsThere's some techniques that people are researching and working on that lets you train across multiple regions. But for the most part, you want them all in one area.
3:54:593 hours, 54 minutes, 59 secondsSo, you can connect them with high speed networking. And so, Elon today has 200,000 H100s.
3:55:063 hours, 55 minutes, 6 secondsAnd 100,000 H100s, 100,000 H200s.
3:55:093 hours, 55 minutes, 9 secondsMeta, OpenAI, and Amazon all have on the scale of 100,000, a little bit less.
3:55:163 hours, 55 minutes, 16 secondsBut this year, this year, people are building much more.
3:55:203 hours, 55 minutes, 20 secondsAnthropic and Amazon are building a cluster of 400,000 Trainium 2, which is Amazon-specific chip trying to get away from Nvidia.
3:55:303 hours, 55 minutes, 30 secondsMeta and OpenAI have scales for hundreds of thousands, but by next year, you'll have like 500,000 to 700,000 GPU clusters.
3:55:383 hours, 55 minutes, 38 secondsAnd note, those GPUs are much higher power consumption than existing ones. Hopper, 700 watts, Blackwell goes to 1,200 watts.
3:55:453 hours, 55 minutes, 45 secondsSo, the power per chip is growing (Lex laughing) and the number of chips is growing. - Nuts. Elon said he'll get to a million.
3:55:543 hours, 55 minutes, 54 secondsYou think that's actually feasible? - I don't doubt Elon.
3:55:593 hours, 55 minutes, 59 secondsThe filings that he has for the power plan and the Tesla battery packs, it's clear he has some crazy plans for Memphis.
3:56:053 hours, 56 minutes, 5 secondsLike permits and stuff is open record. But it's not quite clear what and what the timescales are.
3:56:133 hours, 56 minutes, 13 secondsI just never doubt Elon. He's gonna surprise us. - So, what's the idea with these clusters? If you have a million GPUs, what percentage in let's say,
3:56:233 hours, 56 minutes, 23 secondstwo, three years is used for training and what percent of pre-training and what percent is used for the actual computation? - So, these mega clusters make no sense for inference.
3:56:333 hours, 56 minutes, 33 secondsYou could route inference there and just not train. But most of the inference capacity is being, hey, I've got a 30-megawatt data center here.
3:56:413 hours, 56 minutes, 41 secondsI've got 50 megawatts here, I've got 100 here, whatever. I'll just throw inference in all of those, because the mega clusters, multi gigawatt data centers, I want to train there.
3:56:503 hours, 56 minutes, 50 secondsBecause that's where all of my GPUs are co-located,
3:56:523 hours, 56 minutes, 52 secondswhere I can put them at a super high networking speed connected together. Because that's what you need for training. Now, with pre-training, this is the old scale.
3:57:003 hours, 57 minutesYou would increase parameters, you'd increase data, model gets better. That doesn't apply anymore, because there's not much more data in the pre-training side.
3:57:093 hours, 57 minutes, 9 secondsYes, there's video and audio and image that has not been fully taken advantage of. So, there's a lot more scaling, but a lot of people have transcript,
3:57:173 hours, 57 minutes, 17 secondstaken transcripts of YouTube videos, and that gets you a lot of the data.
3:57:203 hours, 57 minutes, 20 secondsDoesn't get you all of the learning value out of the video and image data, but there's still scaling to be done on pre-training.
3:57:263 hours, 57 minutes, 26 secondsBut this post-training world is where all the FLOPS are gonna be spent. The model's gonna play with itself. It's gonna self-play, it's gonna do verifiable tasks,
3:57:333 hours, 57 minutes, 33 secondsit's gonna do computer use in sandboxes. It might even do simulated robotics things.
3:57:383 hours, 57 minutes, 38 secondsAll of these things are gonna be environments where compute is spent in, quote, unquote, "post-training". But I think it's gonna be good.
3:57:463 hours, 57 minutes, 46 secondsWe're gonna drop the post from post-training.
3:57:483 hours, 57 minutes, 48 seconds- Yeah. Wow. - It's gonna be pre-training and it's gonna be training, I think. At point at some, (Dylan drowns out Nathan) at some point. (Nathan laughing) Because for the bulk of the last few years,
3:57:573 hours, 57 minutes, 57 secondspre-training has dwarfed post-training. - [Lex] Mm-hmm. - But with these verifiable methods, especially ones that scale really, potentially infinitely,
3:58:053 hours, 58 minutes, 5 secondslike computer use and robotics, not just math and coding, where you can verify what's happening, those infinitely verifiable tasks, it seems you can spend as much compute as you want on them.
3:58:133 hours, 58 minutes, 13 seconds- Especially at the context length increase.
3:58:153 hours, 58 minutes, 15 seconds'Cause at the end of pre-training is when you increase the context length for these models.
3:58:193 hours, 58 minutes, 19 secondsAnd we've talked earlier in the conversation about how the context length, when you have a long input, is much easier to manage than output.
3:58:253 hours, 58 minutes, 25 secondsAnd a lot of these post-training and reasoning techniques rely on a ton of sampling and it's becoming increasingly long context. So, there's just your,
3:58:343 hours, 58 minutes, 34 secondseffectively your compute efficiency goes down. I think FLOPS is the standard for how you measure it. But with RL and you have to do all these things,
3:58:433 hours, 58 minutes, 43 secondswhere you move your weights around in a different way than at pre-training and just generation.
3:58:493 hours, 58 minutes, 49 secondsIt's going to be become less efficient and FLOPS is gonna be less of a useful term. And then, as the infrastructure gets better, it's probably gonna go back to FLOPS.
3:58:563 hours, 58 minutes, 56 seconds- So, all of the things we've been talking about is most likely going to be Nvidia. Is there any competitors? - Google, I ignored them. - TPU. Yeah. (chuckles)
3:59:063 hours, 59 minutes, 6 seconds- I was like, huh? - Yeah, what's the story with TPU? Like what's the... - TPU is awesome. It's great.
3:59:123 hours, 59 minutes, 12 secondsGoogle is, they're a bit more tepid on building data centers for some reason. They're building big data centers, don't get me wrong. And they actually have the biggest cluster.
3:59:213 hours, 59 minutes, 21 secondsI was talking about Nvidia clusters, they actually have the biggest cluster, period. But the way they do it is very interesting.
3:59:283 hours, 59 minutes, 28 secondsThey have two data center super regions in that, the data center isn't physically like all of the GPUs aren't physically on one site,
3:59:363 hours, 59 minutes, 36 secondsbut they're like 30 miles from each other. Or not GPUs, TPUs. They have like in Iowa and Nebraska,
3:59:413 hours, 59 minutes, 41 secondsthey have four data centers that are just right next to each other. - Why doesn't Google flex it's cluster size? - Go to multi-datacenter training.
3:59:493 hours, 59 minutes, 49 secondsThere's good images in there. So, I'll show you what I mean. It's just SemiAnalysis multi-datacenter.
3:59:553 hours, 59 minutes, 55 secondsSo, this is an image of what a standard Google data center looks like.
3:59:583 hours, 59 minutes, 58 secondsBy the way, their data centers look very different than anyone else's data centers. - [Lex] What are we looking at here? - So, these are, yeah, so if you see this image right, in this center, there are these big rectangular boxes.
4:00:084 hours, 8 secondsThose are where the actual chips are kept. And then, if you scroll down a little bit further, you can see there's like these water pipes,
4:00:164 hours, 16 secondsthere's these chiller cooling towers in the top, and a bunch of diesel generators. The diesel generators are backup power.
4:00:224 hours, 22 secondsThe data center itself look physically smaller than the water chillers. So, the chips are actually easier to keep together,
4:00:294 hours, 29 secondsbut then cooling all the water for the water cooling is very difficult.
4:00:334 hours, 33 secondsSo, Google has a very advanced infrastructure that no one else has for the TPU. And what they do is they've stamped these data center,
4:00:404 hours, 40 secondsthey've stamped a bunch of these data centers out in a few regions. So, if you go a little bit further down, this is a Microsoft, this is in Arizona.
4:00:484 hours, 48 secondsThis is where GPT-5, quote, unquote, "will be trained". (Lex laughing) - [Nathan] If it doesn't exist already. - Yeah, if it doesn't exist already.
4:00:564 hours, 56 secondsBut each of these data centers, I've shown a couple images of them,
4:00:584 hours, 58 secondsthey're really closely co-located in the same region, Nebraska, Iowa. And then, they also have a similar one in Ohio complex.
4:01:064 hours, 1 minute, 6 secondsAnd so, these data centers are really close to each other.
4:01:094 hours, 1 minute, 9 secondsAnd what they've done is they've connected them super high bandwidth with fiber. And so, these are just a bunch of data centers.
4:01:144 hours, 1 minute, 14 secondsAnd the point here is that Google has a very advanced infrastructure, very tightly connected in a small region.
4:01:214 hours, 1 minute, 21 secondsSo, Elon will always have the biggest cluster fully connected, because it's all in one building.
4:01:264 hours, 1 minute, 26 seconds- Yeah. - And he's completely right on that. Google has the biggest cluster, but you have to spread over three sites, and by a significant margin,
4:01:334 hours, 1 minute, 33 secondsbut you have to go across multiple sites. - Why doesn't Google compete with Nvidia? Why don't they sell TPUs?
4:01:424 hours, 1 minute, 42 seconds- I think there's a couple problems with it.
4:01:444 hours, 1 minute, 44 secondsIt's like one, TPU has been a form of allowing search to be really freaking cheap and build models for that.
4:01:534 hours, 1 minute, 53 secondsAnd so, a big chunk of the search, GPU purchases or TPU purchases, or big chunk of Google's purchases and usage,
4:02:004 hours, 2 minutesall of it is for internal workloads. Whether it be Search, now, Gemini, YouTube, all these different applications that they have ads,
4:02:104 hours, 2 minutes, 10 secondsthese are where all their TPUs are being spent, and that's what they're hyperfocused on.
4:02:144 hours, 2 minutes, 14 secondsAnd so, there's certain aspects of the architecture that are optimized for their use case that are not optimized elsewhere.
4:02:214 hours, 2 minutes, 21 secondsOne simple one is they've open sourced the Gemma model and they called it Gemma 7B.
4:02:254 hours, 2 minutes, 25 secondsBut then, it's actually 8 billion parameters because the vocabulary is so large. (Lex laughing)
4:02:304 hours, 2 minutes, 30 secondsAnd the reason they made the vocabulary so large is because TPU's matrix-multiply unit is massive. Because that's what they've optimized for.
4:02:384 hours, 2 minutes, 38 secondsAnd so, they decided, oh, well, I'll just make the vocabulary large too,
4:02:404 hours, 2 minutes, 40 secondseven though it makes no sense to do so in such a small model, because that fits on their hardware.
4:02:444 hours, 2 minutes, 44 secondsSo, Gemma doesn't run as efficiently on a GPU as a Llama does.
4:02:474 hours, 2 minutes, 47 secondsBut vice versa, Llama doesn't run as efficiently on a TPU as a Gemma does. And it's so like, there's certain aspects of hardware, software, co-design.
4:02:554 hours, 2 minutes, 55 secondsSo, all their search models, or their ranking and recommendation models, all these different models that are AI, but not like GenAI,
4:03:024 hours, 3 minutes, 2 secondshave been hyper optimized with TPUs forever. The software stack is super optimized,
4:03:064 hours, 3 minutes, 6 secondsbut all of this software stack has not been released publicly at all. Very small portions of it, Jax and XLA have been.
4:03:134 hours, 3 minutes, 13 secondsBut the experience when you're inside of Google and you're training on TPUs as a researcher,
4:03:184 hours, 3 minutes, 18 secondsyou don't need to know anything about the hardware in many cases. It's pretty beautiful.
4:03:224 hours, 3 minutes, 22 seconds- They all love it. - But soon as you step outside... (Nathan chuckles) - A lot of 'em go back. (chuckles) They leave Google and then they go back. - Yeah. - Yeah. They leave and they start a company,
4:03:314 hours, 3 minutes, 31 seconds'cause they have all these amazing research ideas and they're like, wait, infrastructure's hard, software is hard, and this is on GPUs. Or if they try to use TPUs, same thing, 'cause they don't have access to all this code.
4:03:394 hours, 3 minutes, 39 secondsAnd so, it's like, how do you convince a company whose Golden Goose is Search, where they're making hundreds of billions of dollars from, to start selling GPU, or TPUs,
4:03:484 hours, 3 minutes, 48 secondswhich they used to only buy a couple billion of... I think in 2023, they bought like a couple billion,
4:03:554 hours, 3 minutes, 55 secondsand now they're buying 10 billion to $15 billion worth.
4:03:584 hours, 3 minutes, 58 secondsBut how do you convince them that they should just buy like twice as many and figure out how to sell them, and make $30 billion? Like, who cares about making $30 billion?
4:04:044 hours, 4 minutes, 4 seconds- Won't that 30 billion exceed actually the search profit eventually?
4:04:114 hours, 4 minutes, 11 seconds- You're always gonna make more money on services than hardware. - Always. - Like yeah, to be clear, today,
4:04:184 hours, 4 minutes, 18 secondspeople are spending a lot more on hardware than they are the services, because the hardware runs the service spend. - Yeah. - But like-
4:04:264 hours, 4 minutes, 26 seconds- [Lex] You're investing, yeah.
4:04:274 hours, 4 minutes, 27 seconds- If there's no revenue for AI stuff or not enough revenue, then obviously, it's gonna blow up. People won't continue to spend on GPUs forever.
4:04:344 hours, 4 minutes, 34 secondsAnd then, Nvidia's trying to move up the stack with software that they're trying to sell and license and stuff.
4:04:384 hours, 4 minutes, 38 secondsBut Google has never had that DNA of this is a product we should sell. The Google Cloud does,
4:04:464 hours, 4 minutes, 46 secondswhich is a separate organization from the TPU team, which is a separate organization from the DeepMind team, which is a separate organization from the Search team, there's a lot of bureaucracy here.
4:04:524 hours, 4 minutes, 52 seconds- Wait, Google Cloud is a separate team than the TPU team? - Technically, TPU sits under infrastructure, which sits under Google Cloud,
4:04:594 hours, 4 minutes, 59 secondsbut Google Cloud, for renting stuff and TPU architecture are very different goals.
4:05:074 hours, 5 minutes, 7 secondsAnd hardware and software, like all of this.
4:05:104 hours, 5 minutes, 10 secondsThe JAX, XLA teams do not serve Google's customers externally.
4:05:144 hours, 5 minutes, 14 secondsWhereas Nvidia's various CUDA teams for things like NCCL serve external customers. - [Lex] Mm-hmm. - The internal teams like JAX and XLA and stuff,
4:05:224 hours, 5 minutes, 22 secondsthey more so serve DeepMind and Search. - Yeah. - And so, their customers' different. They're not building a product for them.
4:05:274 hours, 5 minutes, 27 seconds- Do you understand why AWS keeps winning versus Azure for cloud versus Google Cloud?
4:05:344 hours, 5 minutes, 34 seconds- Yeah, there's- - Google Cloud is tiny, isn't it, relative to AWS? - Google Cloud is third. - [Nathan] Yeah, yeah. - Microsoft is the second biggest, but Amazon is the biggest. - Yeah.
4:05:434 hours, 5 minutes, 43 seconds- And Microsoft deceptively sort of includes Microsoft Office 365, and things like that. Like some of these enterprise-wide licenses. So, in reality, the Gulf is even larger,
4:05:524 hours, 5 minutes, 52 secondsMicrosoft is still second though. Amazon is way bigger. Why? Because using AWS is better and easier. And in many cases, it's cheaper. - It was first. - And it's first. - It was first.
4:06:004 hours, 6 minutes- [Lex] Yeah, but there's a lot of things that are first that- - Well, it's easier...
4:06:034 hours, 6 minutes, 3 secondsIt's harder to switch than it is to- - Yeah, okay. - AWS is- - Because it's large- - There's big fees for switching too. - AWS generates over 80% (Nathan chuckles)
4:06:104 hours, 6 minutes, 10 secondsof Amazon's profit, I think over 90%.
4:06:124 hours, 6 minutes, 12 seconds- That's insane. - The distribution centers are just like, one day, we'll decide to make money from this, but they haven't yet. They make tiny little profit from-
4:06:204 hours, 6 minutes, 20 seconds- Yeah, one day, Amazon Prime will triple in price. - You would think they would improve AWS interface, 'cause it's horrible.
4:06:284 hours, 6 minutes, 28 secondsIt's clunky, but everybody is... (Lex laughing) - [Nathan] I don't, yeah, one would think. - I think actually, Google's interface is sometimes nice,
4:06:364 hours, 6 minutes, 36 secondsbut it's also they don't care about anyone besides their top customers.
4:06:384 hours, 6 minutes, 38 seconds- Yeah, exactly. - And like their customer service sucks and they have a lot less, like... - All these companies, they optimize for the big customers, yeah.
4:06:454 hours, 6 minutes, 45 secondsIt's supposed to be for business. - Well, and Amazon has always optimized for the small customer too though. Obviously, they optimize a lot for the big customer,
4:06:514 hours, 6 minutes, 51 secondsbut when they started, they just would go to like random Bay Area things and give out credits. And then, they like, or just put in your credit card and use us.
4:06:584 hours, 6 minutes, 58 secondsIt went back in the early days. So, they've always, the business has grown with them in burgeon. So, why does Amazon, why is Snowflake all over Amazon? Because Snowflake, in the beginning,
4:07:074 hours, 7 minutes, 7 secondswhen Amazon didn't care about them, was still using Amazon. And then, of course, one day, Snowflake and Amazon has a super huge partnership, but this is the case,
4:07:144 hours, 7 minutes, 14 secondslike Amazon's user experience and quality is better.
4:07:174 hours, 7 minutes, 17 secondsAlso, a lot of the silicon they've engineered makes them have a lower cost structure in traditional cloud, storage, CPU, networking, that kind of stuff than in databases.
4:07:274 hours, 7 minutes, 27 secondsI think like four of Amazon's top five revenue products, margin products are gross profit products,
4:07:344 hours, 7 minutes, 34 secondsare all database-related products like Redshift and all these things. So, Amazon has a very good silicon to user experience,
4:07:434 hours, 7 minutes, 43 secondsentire pipeline with AWS. I think Google, their silicon teams, yeah, they have awesome silicon internally, TPU, the YouTube chip,
4:07:524 hours, 7 minutes, 52 secondssome of these other chips that they've made. And the problem is they're not serving external customers, they're serving internal customers.
4:07:584 hours, 7 minutes, 58 seconds- Nvidia's entire culture is designed from the bottom-up to do this. There's this recent book, "The Nvidia Way" by Tae Kim,
4:08:044 hours, 8 minutes, 4 secondsthat details this and they're how they look for future opportunities and ready their CUDA software libraries
4:08:114 hours, 8 minutes, 11 secondsto make it so that new applications of high performance computing can very rapidly be evolved on CUDA and Nvidia chips.
4:08:194 hours, 8 minutes, 19 secondsAnd that is entirely different than Google as a services business. - Yeah, Nvidia, it should be said,
4:08:274 hours, 8 minutes, 27 secondsis a truly special company. There's the whole, the culture and everything, they're really optimized for that kind of thing.
4:08:334 hours, 8 minutes, 33 secondsSpeaking of which, is there somebody that can even challenge Nvidia hardware-wise? Intel, AMD? - I really don't think so.
4:08:414 hours, 8 minutes, 41 secondsWe went through a very long process of working with AMD on training on their GPU's inference and stuff. And they're decent.
4:08:494 hours, 8 minutes, 49 secondsTheir hardware is better in many ways than in Nvidia's. The problem is their software is really bad, and I think they're getting better, they're getting better faster, but they're just,
4:08:574 hours, 8 minutes, 57 secondsthe Gulf is so large and they don't spend enough resources on, or haven't historically. Maybe they're changing their tune now,
4:09:054 hours, 9 minutes, 5 secondsbut for multiple months, we were submitting the most bugs. Like us, SemiAnalysis. - Mm-hmm. - Like what the fuck? Why are we submitting the most bugs?
4:09:144 hours, 9 minutes, 14 secondsBecause they only, and they only cared about their biggest customers. And so, they'd ship them a private image, blah, blah, blah.
4:09:194 hours, 9 minutes, 19 secondsAnd it's like, okay, but I am just using PyTorch and I wanna use the publicly available libraries - Mm-hmm.
4:09:254 hours, 9 minutes, 25 secondsYeah. - and you don't care about that. So, they're getting better. But I think AMD's not possible.
4:09:304 hours, 9 minutes, 30 secondsIntel's obviously in dire straits right now and needs to be saved somehow. Very important for national security, for American technology dominance.
4:09:394 hours, 9 minutes, 39 seconds- Can you explain the, obviously, so why are they in dire straits? - Going back to earlier, only three companies can R&D. - Yeah. - Taiwan, Hsinchu,
4:09:474 hours, 9 minutes, 47 secondsSamsung, Pyongyang, and then Intel, Hillsboro. Samsung's doing horribly. Intel's doing horribly.
4:09:534 hours, 9 minutes, 53 secondsWe could be in a world where there's only one company that can do R&D, and that one company already manufactures most of chips. They've been gaining market share anyways. But that's a critical thing.
4:10:014 hours, 10 minutes, 1 secondSo, what happens to Taiwan means the rest of the world's semiconductor industry, and therefore tech, relies on Taiwan. And that's obviously precarious.
4:10:094 hours, 10 minutes, 9 secondsAs far as Intel, they've been slowly, steadily declining. They were on top of servers and PCs,
4:10:154 hours, 10 minutes, 15 secondsbut now, Apple's done the M1 and Nvidia's releasing a PC chip, and Qualcomm's releasing a PC chip,
4:10:214 hours, 10 minutes, 21 secondsand in servers, hyperscalers are all making their own ARM-based server chips. And Intel has no AI silicon wins.
4:10:284 hours, 10 minutes, 28 secondsThey have very small wins. And they never got into mobile, because they said no to the iPhone.
4:10:334 hours, 10 minutes, 33 secondsAnd all these things have compounded and they've lost their process technology leadership.
4:10:374 hours, 10 minutes, 37 secondsThey were ahead for 20 years and now they're behind by at least a couple years.
4:10:414 hours, 10 minutes, 41 secondsAnd they're trying to catch back up and we'll see if their 18A, 14A strategy works out, where they try and leapfrog TSMC. But like...
4:10:494 hours, 10 minutes, 49 secondsAnd Intel is just losing tons of money anyways. And they just fired their CEO,
4:10:524 hours, 10 minutes, 52 secondseven though their CEO was the only person who understood the company well. We'll see. He was not the best, but he was pretty good, relatively.
4:11:004 hours, 11 minutesTechnical guy. - [Lex] Where does Intel make most of its money?
4:11:034 hours, 11 minutes, 3 secondsThe CPU still, right? - PCs and data center CPUs, yeah.
4:11:054 hours, 11 minutes, 5 secondsBut data center CPUs are all going Cloud and Amazon, Microsoft, Google are making ARM-based CPUs. And then, PC side, AMDs gained market share.
4:11:144 hours, 11 minutes, 14 secondsNvidia's launching a chip that's not gonna be a success. Mediatek, Qualcomm ever launch chips. Apple's doing well. They could get squeezed a little bit in PC,
4:11:234 hours, 11 minutes, 23 secondsalthough PC generally I imagine, will just stick Intel mostly for Windows side. - Let's talk about the broad AI race. Who do you think wins?
Chapter 20: Who wins the race to AGI?
4:11:314 hours, 11 minutes, 31 secondsWe talked about Google, Meta,
4:11:324 hours, 11 minutes, 32 secondsxAI. - The default leader has been Google because of their infrastructure advantage. - [Lex] Well, like in the news, OpenAI is the leader.
4:11:404 hours, 11 minutes, 40 seconds- They're leading in the- - They have the best model. - They have the best model that people can use.
4:11:454 hours, 11 minutes, 45 secondsAnd they're experts- - And they have the most AI revenue. - Yeah. OpenAI is winning. - So, who's making money on AI right now?
4:11:534 hours, 11 minutes, 53 secondsIs anyone making money? - So, accounting profit-wise, Microsoft is making money, but they're spending a lot of CapEx, and that gets depreciated over years.
4:12:024 hours, 12 minutes, 2 secondsMeta's making tons of money, but with recommendation systems, which is AI, (Nathan chuckles) but not with Llama. - Right. - Llama's losing money for sure.
4:12:104 hours, 12 minutes, 10 secondsI think Anthropic and OpenAI are obviously not making money, 'cause otherwise, they wouldn't be raising money. They have to raise money to build more.
4:12:174 hours, 12 minutes, 17 secondsAlthough theoretically, they are making money. You spent a few hundred million dollars on GPT-4, and it's doing billions in revenue. So, obviously, it's making money.
4:12:264 hours, 12 minutes, 26 secondsAlthough they had to continue to research to get the compute efficiency wins,
4:12:294 hours, 12 minutes, 29 secondsand move down the curve to get that 1,200x that has been achieved for GPT-3. Maybe we're only at a couple 100x now,
4:12:384 hours, 12 minutes, 38 secondsbut with GPT-4 Turbo and 4o,
4:12:404 hours, 12 minutes, 40 secondsand there'll be another one probably cheaper than GPT-4o even that comes out at some point. - And that research costs a lot of money. - [Dylan] Yep. Exactly.
4:12:494 hours, 12 minutes, 49 seconds- That's the thing that I guess is not talked about with the cost, that when you're referring to the cost of the model,
4:12:554 hours, 12 minutes, 55 secondsit's not just the training or the test runs, it's the actual research, the manpower that-
4:13:024 hours, 13 minutes, 2 seconds- Yeah, to do things like reasoning right now that that exists, they're gonna scale it, they're gonna do a lot of research still. I think people focus on the payback question,
4:13:104 hours, 13 minutes, 10 secondsbut it's really easy to just be like, well, GDP is humans and industrial capital. And if you can make intelligence cheap, you can grow a lot.
4:13:204 hours, 13 minutes, 20 secondsThat's the sort of dumb way to explain it. But that's what basically the investment thesis is.
4:13:254 hours, 13 minutes, 25 secondsI think only Nvidia is actually making tons of money and other hardware vendors. The hyperscalers are all on paper making money,
4:13:324 hours, 13 minutes, 32 secondsbut in reality, they're spending a lot more on purchasing the GPUs,
4:13:364 hours, 13 minutes, 36 secondswhich you don't know if they're still gonna make this much money on each GPU in two years. You don't know if all of a sudden, OpenAI goes kapoof,
4:13:454 hours, 13 minutes, 45 secondsand now Microsoft has hundreds of thousands of GPUs they were renting to OpenAI that are,
4:13:504 hours, 13 minutes, 50 secondsthat they paid for themselves with their investment in them that no longer have a customer. this is always a possibility. I don't believe that.
4:13:594 hours, 13 minutes, 59 secondsI think OpenAI will keep raising money. I think others will keep raising money,
4:14:024 hours, 14 minutes, 2 secondsbecause the investments, the returns from it are gonna be eventually huge once we have AGI. - So, do you think multiple companies will get...
4:14:104 hours, 14 minutes, 10 secondsLet's assume that- - I don't think it's winner take all. - Okay. So, let's not call it AGI, whatever. It's like a single day. It's a gradual thing. - Powerful AI,
4:14:194 hours, 14 minutes, 19 secondssuper powerful AI.
4:14:204 hours, 14 minutes, 20 seconds- But it's a gradually increasing set of features that are useful and make-
4:14:254 hours, 14 minutes, 25 seconds- [Nathan] Rapidly increasing set of features. - Rapidly, rapidly increasing set of features. So, you're saying a lot of companies will be...
4:14:334 hours, 14 minutes, 33 secondsIt just seems absurd that all of these companies are building gigantic data centers.
4:14:404 hours, 14 minutes, 40 seconds- There were companies that will benefit from AI, but not because they train the best model.
4:14:444 hours, 14 minutes, 44 secondsLike Meta has so many avenues to benefit from AI and all of their services.
4:14:484 hours, 14 minutes, 48 secondsPeople are there, people spend time on Meta's platforms and it's a way to make more money per user per hour. - Yeah it seems like Google/xAI/Tesla, important to say,
4:15:014 hours, 15 minutes, 1 secondand then Meta will benefit not directly from the AI like the LLMs, but from the intelligence,
4:15:104 hours, 15 minutes, 10 secondslike the additional boost of intelligence to the products they already sell.
4:15:134 hours, 15 minutes, 13 secondsSo, whether that's the recommendation system or for Elon who's been talking about Optimus, the robot, potentially the intelligence of the robot.
4:15:224 hours, 15 minutes, 22 secondsAnd then, you have personalized robots in the home, that kind of thing. He thinks it's a 10 plus trillion dollar business, which...
4:15:314 hours, 15 minutes, 31 seconds(Lex laughing) - Yeah, sure. - At some point maybe. Not soon, but who knows what robotics will- - Let's do a TAM analysis.
4:15:374 hours, 15 minutes, 37 seconds8 billion humans and let's get (Nathan laughing) 8 billion robots. And let's pay 'em the average salary, and yeah, there we go, 10 trillion, more than 10 trillion.
4:15:464 hours, 15 minutes, 46 seconds- Yeah.
4:15:474 hours, 15 minutes, 47 secondsIf there's robots everywhere, why does it have to be just 8 billion robots? - Yeah, yeah, of course, of course. - [Lex] It could be-
4:15:544 hours, 15 minutes, 54 seconds- I'm gonna have one robot, you're gonna have like 20. - Yeah, I see a use case for that.
4:16:004 hours, 16 minutesSo, yeah, I guess the benefit would be in the products they sell, which is why OpenAI's in a trickier position, 'cause they-
4:16:064 hours, 16 minutes, 6 seconds- All of the value of OpenAI right now as a brand is in ChatGPT. And there is actually not that, for most users,
4:16:134 hours, 16 minutes, 13 secondsthere's not that much of a reason that they need OpenAI to be spending billions and billions of dollars on the next best model,
4:16:184 hours, 16 minutes, 18 seconds- Mm-hmm. - when they could just license Llama 5, and for be way cheaper.
4:16:234 hours, 16 minutes, 23 secondsSo, that's like ChatGPT is an extremely valuable entity to them, (chuckles)
4:16:294 hours, 16 minutes, 29 secondsbut they could make more money just off that than trying- - The chat application is clearly like, does not have tons of room to continue. Like the standard chat,
4:16:364 hours, 16 minutes, 36 secondswhere you're just using it for a random question and stuff. The cost continues to collapse. V3 is the latest- - It'll go down to ads.
4:16:414 hours, 16 minutes, 41 seconds- Biggest, but it's gonna get supported by ads.
4:16:464 hours, 16 minutes, 46 secondsMeta already serves 405b and probably loses the money, but at some point,
4:16:504 hours, 16 minutes, 50 secondsthey're going to get, the models are gonna get so cheap that they can just serve them for free with ads supported. And that's what Google's gonna be able to do.
4:16:574 hours, 16 minutes, 57 secondsAnd that's obviously they've got a bigger reach. So, chat is not gonna be the only use case. It's like these reasoning, code, agents, computer use,
4:17:054 hours, 17 minutes, 5 secondsall this stuff is where OpenAI has to actually go to make money in the future. Otherwise, they're kaputs. - But X, Google, and Meta have these other products.
4:17:144 hours, 17 minutes, 14 secondsSo, isn't it likely that OpenAI and Anthropic disappear eventually?
4:17:224 hours, 17 minutes, 22 secondsBecause it's- - Unless they're so good at models, 'cause they are. - [Lex] But it's such a cutting edge,
4:17:254 hours, 17 minutes, 25 secondsI mean, you have to get- - It depends on where you think AI capabilities are going. - You have to keep winning. - Yes. - You have to keep winning. As you climb,
4:17:334 hours, 17 minutes, 33 secondseven if the AI capabilities are going super rapidly awesome into the direction of AGI, there's still a boost for X in terms of data, Google in terms of data,
4:17:444 hours, 17 minutes, 44 secondsMeta in terms of data, in terms of other products and the money.
4:17:484 hours, 17 minutes, 48 secondsThere's just huge amount of money. - But if the whole idea is human data is tapped out, we don't care, we all care about self-play verifiable tasks- - Yes, the self-play, - Think about AWS-
4:17:574 hours, 17 minutes, 57 seconds- [Lex] which is an R&D problem.
4:17:584 hours, 17 minutes, 58 seconds- AWS does not make a lot of money on each individual machine. And the same can be said for the most powerful AI platform,
4:18:054 hours, 18 minutes, 5 secondswhich is even though the calls to the API are so cheap,
4:18:084 hours, 18 minutes, 8 secondsthere's still a lot of money to be made by owning that platform.
4:18:114 hours, 18 minutes, 11 secondsAnd there's a lot of discussions as it's the next compute layer. - You have to believe that...
4:18:174 hours, 18 minutes, 17 secondsAnd there's a lot of discussions that tokens and tokenomics and LLM APIs are the next compute layer, or the next paradigm for the economy,
4:18:244 hours, 18 minutes, 24 secondslike energy and oil was.
4:18:264 hours, 18 minutes, 26 secondsBut there's also, you have to believe that APIs and chat are not where AI is stuck.
4:18:324 hours, 18 minutes, 32 secondsIt is actually just tasks and agents and robotics and computer use.
4:18:364 hours, 18 minutes, 36 secondsAnd those are the areas where all the value will be delivered, not API, not chat application. - So, is it possible you have,
4:18:444 hours, 18 minutes, 44 secondsI mean, it all just becomes a commodity, and you have the very thin wrapper like Perplexity.
4:18:534 hours, 18 minutes, 53 secondsJust joking.
4:18:554 hours, 18 minutes, 55 seconds- [Nathan] There are a lot of wrappers making a lot of money.
4:18:574 hours, 18 minutes, 57 seconds- Yeah, but do you think it's possible that people would just even forget what OpenAI and Anthropic is, and just, 'cause there'll be wrappers around the API,
4:19:054 hours, 19 minutes, 5 secondsand it just dynamically- - If model progress is not rapid, yeah. It's becoming a commodity. DeepSeek-V3 shows this, but also the GPT-3 chart earlier, chart showed this.
4:19:144 hours, 19 minutes, 14 secondsLlama 3B is 1,200x cheaper than GPT-3.
4:19:174 hours, 19 minutes, 17 secondsAny GPT-3, like anyone whose business model was GPT-3 level capabilities is dead.
4:19:224 hours, 19 minutes, 22 seconds- Yeah. - Anyone whose business model is GPT-4 level capabilities is dead.
4:19:264 hours, 19 minutes, 26 seconds- It is a common saying that the best businesses being made now are ones that are predicated on models getting better. - Right, which would be wrappers,
4:19:344 hours, 19 minutes, 34 secondsthing that is riding the wave of the models.
4:19:374 hours, 19 minutes, 37 seconds- The short-term that company that could make the most money is the one that figures out what advertising targeting method works for language model generations.
4:19:454 hours, 19 minutes, 45 secondsWe have the Meta ads which are hyper targeted in feed, not within specific pieces - Mm-hmm. - of content.
4:19:514 hours, 19 minutes, 51 secondsAnd we have search ads that are used by Google and Amazon has been rising a lot on Search. But within a piece, within a return from ChatGPT,
4:19:574 hours, 19 minutes, 57 secondsit is not clear how you get a high quality placed ad within the output. And if you can do that with model costs coming down,
4:20:054 hours, 20 minutes, 5 secondsyou can just get super high revenue per...
4:20:094 hours, 20 minutes, 9 secondsThat revenue is totally untapped and it's not clear technically how it is done. - Yeah, that is... the ad sense innovation that Google did,
4:20:184 hours, 20 minutes, 18 secondsthe one day you'll have in GPT output an ad and that's gonna make billions, not- - And it could be very subtle. It could be in conversation.
4:20:274 hours, 20 minutes, 27 secondsWe have voice mode now. It could be some way of making it, so the voice introduces certain things.
4:20:324 hours, 20 minutes, 32 secondsIt's much harder to measure and it takes imagination, but yeah. - And it wouldn't come off shady,
4:20:394 hours, 20 minutes, 39 secondsso you would receive public blow back, that kind of thing.
4:20:424 hours, 20 minutes, 42 secondsSo, you have to do it loud enough to where it's clear it's an ad that and balance all of that. So, that's the open question they're trying to solve. Anthropic and OpenAI, they need to-
4:20:514 hours, 20 minutes, 51 seconds- They might not say that they- - I don't think they care about that at all. - They don't care about it right now. I think it's places - I think they're surely- - like Perplexity are experimenting on that more.
4:20:584 hours, 20 minutes, 58 seconds- [Lex] Oh, interesting. Yeah, for sure. - Like Perplexity, Google, Meta care about this. I think OpenAI and Anthropic are purely laser-focused on-
4:21:084 hours, 21 minutes, 8 seconds- AGI. - Yeah, agents and AGI. And if I build AGI, I can make tons of money. Or I can spend, pay for everything.
4:21:164 hours, 21 minutes, 16 secondsAnd it is just predicated back on the export control thing. If you think AGI is 5, 10 years away or less,
4:21:234 hours, 21 minutes, 23 secondsthese labs think it's 2, 3 years away. Obviously, your actions are, if you assume they're rational actors,
4:21:314 hours, 21 minutes, 31 secondswhich they are mostly,
4:21:334 hours, 21 minutes, 33 secondswhat you do in a two-year AGI versus five-year versus 10 years is very, very, very different. - Do you think agents are promising?
Chapter 21: AI agents
4:21:424 hours, 21 minutes, 42 secondsWe have to talk about this. (chuckles)
4:21:464 hours, 21 minutes, 46 secondsThis is like the excitement of the year that agents are gonna rev...
4:21:494 hours, 21 minutes, 49 secondsThis is the generic hype term that a lot of business folks are using. AI agents are gonna revolutionize everything.
4:21:574 hours, 21 minutes, 57 seconds- Okay. So, mostly, the term agent is obviously overblown.
4:22:014 hours, 22 minutes, 1 secondWe've talked a lot about reinforcement learning as a way to train for verifiable outcomes.
4:22:064 hours, 22 minutes, 6 secondsAgents should mean something that is open-ended and is solving a task independently on its own, and able to adapt to uncertainty.
4:22:124 hours, 22 minutes, 12 secondsThere's a lot of the term agent applied to things like Apple Intelligence, which we still don't have after the last WWDC,
4:22:194 hours, 22 minutes, 19 secondswhich is orchestrating between apps.
4:22:224 hours, 22 minutes, 22 secondsAnd that type of tool use thing is something that language models can do really well. Apple Intelligence I suspect will work, so will come eventually. It's a closed domain.
4:22:304 hours, 22 minutes, 30 secondsIt's your messages app integrating with your photos, with AI in the background. That will work.
4:22:354 hours, 22 minutes, 35 secondsThat has been described as an agent by a lot of software companies to get into the narrative.
4:22:404 hours, 22 minutes, 40 seconds- Yeah. - The question is what ways can we get language models to generalize to new domains and solve their own problems in real time.
4:22:514 hours, 22 minutes, 51 secondsMaybe some tiny amount of training when they're doing this with fine-tuning themselves or in context learning, which is the idea of storing information in a prompt.
4:22:594 hours, 22 minutes, 59 secondsAnd you can use learning algorithms to update that.
4:23:014 hours, 23 minutes, 1 secondAnd whether or not you believe that that is gonna actually generalize to things like me saying, book my trip to go to Austin in two days.
4:23:124 hours, 23 minutes, 12 secondsI have X, Y, Z constraints, and actually trusting it. I think there's a HCI problem coming back for information.
4:23:194 hours, 23 minutes, 19 seconds- Well, what's your prediction there? Because my gut says we're very far away from that. - I think OpenAI's statement,
4:23:274 hours, 23 minutes, 27 secondsI don't know if you've seen the five levels. Or it's chat is level one, reasoning is level two, and then agents is level three. And I think there's a couple more levels,
4:23:354 hours, 23 minutes, 35 secondsbut it's important to note, we were in chat for a couple years. - Mm-hmm. - We just theoretically got to reasoning. We'll be here for a year or two.
4:23:444 hours, 23 minutes, 44 secondsAnd then, agents, but at the same time,
4:23:464 hours, 23 minutes, 46 secondspeople can train like approximate capabilities of the next level, but the agents are doing things autonomously, doing things for minutes at a time,
4:23:544 hours, 23 minutes, 54 secondshours at a time, et cetera. Reasoning is doing things for tens of seconds at a time.
4:24:024 hours, 24 minutes, 2 secondsAnd then, coming back with an output that I still need to verify and use and try check out. And the biggest problem is of course,
4:24:094 hours, 24 minutes, 9 secondsit's the same thing with manufacturing. There's the whole six sigma thing. How many nines do you get, and then you compound the nines onto each other,
4:24:164 hours, 24 minutes, 16 secondsand it's like if you multiply by the number of steps that are six sigma, you get to a yield or something. So, like in semiconductor manufacturing,
4:24:254 hours, 24 minutes, 25 secondstens of thousands of steps. 9999999 is not enough, because you multiply that many times, you actually end up with like 60% yield.
4:24:334 hours, 24 minutes, 33 seconds- Or zero. - Really low yield. Yeah. Or zero. And this is the same thing with agents. Chaining tasks together each time, LLMs,
4:24:414 hours, 24 minutes, 41 secondseven the best LLMs in particularly pretty good benchmarks don't get 100%. - Yeah. - They get a little bit below that,
4:24:494 hours, 24 minutes, 49 secondsbecause there is a lot of noise. And so, how do you get to enough nines? This is the same thing with self-driving.
4:24:554 hours, 24 minutes, 55 secondsWe can't have self-driving because without it being super geofenced like Google's.
4:25:004 hours, 25 minutesAnd even then, they have a bunch of tele operators to make sure it doesn't get stuck. But you can't do that because it doesn't have enough nines.
4:25:074 hours, 25 minutes, 7 seconds- And self-driving has quite a lot of structure because roads have rules. It's well-defined. There's regulation.
4:25:154 hours, 25 minutes, 15 secondsWhen you're talking about computer use for the open web, for example, or the open operating system, it's a mess.
4:25:254 hours, 25 minutes, 25 secondsSo, the possibility, I'm always skeptical of any system that is tasked with interacting with the human world,
4:25:344 hours, 25 minutes, 34 secondsthe open message human world. - That's the thing. If we can't get intelligence, that's enough to solve the human world on its own.
4:25:414 hours, 25 minutes, 41 secondsWe can create infrastructure like the human operators for Waymo - Yeah. - over many years that enable certain workflows. - There is a company, I don't remember it,
4:25:494 hours, 25 minutes, 49 secondsbut that's literally their pitches.
4:25:514 hours, 25 minutes, 51 secondsYeah, we're just gonna be the human operator when agents fail, and you just call us and we fix it.
4:25:554 hours, 25 minutes, 55 seconds- Yeah. - It's like an API call and it's hilarious.
4:25:574 hours, 25 minutes, 57 seconds- There's gonna be teleoperation markets when we get human robots,
4:25:594 hours, 25 minutes, 59 secondswhich is there's gonna be somebody around the world that's happy to fix the fact that it can't finish loading my dishwasher - Yeah. - when I'm unhappy with it,
4:26:074 hours, 26 minutes, 7 secondsbut that's just gonna be part of the Tesla service package.
4:26:104 hours, 26 minutes, 10 seconds- I'm just imagining an AI agent talking to another AI agent.
4:26:154 hours, 26 minutes, 15 secondsOne company has an AI agent that specializes in helping other AI agents. - But if you can make things that are good at one step,
4:26:234 hours, 26 minutes, 23 seconds- Yeah. - you can stack them together. So, that's why I'm like, if it takes a long time, we're gonna build infrastructure that enables it.
4:26:304 hours, 26 minutes, 30 secondsYou see the operator launch, they have partnerships with certain websites, with DoorDash, with OpenTable, - Mm-hmm. - with things like this.
4:26:374 hours, 26 minutes, 37 secondsThose partnerships are gonna let them climb really fast. Their model's gonna get really good at those things.
4:26:424 hours, 26 minutes, 42 secondsIt's gonna proof of concept that might be a network effect where more companies wanna make it easier for AI. Some companies will be like, no, let's at put blockers in place.
4:26:514 hours, 26 minutes, 51 seconds- Yep. - And this is the story of the internet we've seen. We see it now with training data for language models, where companies are like, no, you have to pay, - [Lex] Mm-hmm. (Nathan chuckles)
4:26:594 hours, 26 minutes, 59 seconds- business working it out. - That said, I think airlines have a very,
4:27:034 hours, 27 minutes, 3 secondsand hotels have high incentive to make their site work really well, and they usually don't.
4:27:094 hours, 27 minutes, 9 secondsIf you look at how many clicks it takes to order a airplane ticket, it's insane.
4:27:144 hours, 27 minutes, 14 secondsI don't- - You actually can't call an American Airlines agent anymore. They don't have a phone number. - It's horrible on many, on the interface front and all...
4:27:244 hours, 27 minutes, 24 secondsTo imagine that agents will be able to deal with that website, when I, as a human, struggle,
4:27:294 hours, 27 minutes, 29 secondslike I have an existential crisis every time I try to book an airplane ticket,
4:27:334 hours, 27 minutes, 33 secondsthat I think it's gonna be very extremely difficult to build a AI agent that's robust in that way. - But think about it,
4:27:414 hours, 27 minutes, 41 secondsUnited has accepted the Starlink term,
4:27:434 hours, 27 minutes, 43 secondswhich is they have to provide Starlink for free and the users are going to love it.
4:27:474 hours, 27 minutes, 47 secondsWhat if one Airline is like, we're gonna take a year and we're gonna make our website have white text that works perfectly for the AIs.
4:27:544 hours, 27 minutes, 54 secondsEvery time anyone asks about an AI flight, they buy whatever airline it is. (Dylan laughing) - Or they're just like, here's an API in,
4:28:024 hours, 28 minutes, 2 secondsit's only exposed to AI agents and if anyone queries it, the price is 10% higher. - [Lex] Yeah. - And for any flight,
4:28:074 hours, 28 minutes, 7 secondsbut we'll let you see any of our flights and you can just book any of them. Here you go, agent- - And that's- - Then, it's, oh, and I made 10% higher price. Awesome. - Yeah. - And am I willing to say that for like,
4:28:164 hours, 28 minutes, 16 secondshey, book me a flight to see Lex. And it's like, yeah, whatever. - Yeah, yeah.
4:28:194 hours, 28 minutes, 19 seconds- I think computers and real world and the open world are really, really messy.
4:28:264 hours, 28 minutes, 26 secondsBut if you start defining the problem in narrow regions,
4:28:304 hours, 28 minutes, 30 secondspeople are gonna be able to create very, very productive things, and ratchet down cost massively.
4:28:374 hours, 28 minutes, 37 secondsNow, crazy things like robotics in the home,
4:28:414 hours, 28 minutes, 41 secondsthose are gonna be a lot harder to do just like self-driving. Because there's just a billion different failure modes.
4:28:474 hours, 28 minutes, 47 secondsBut agents that can navigate a certain set of websites and do certain sets of tasks, or take a photo of your fridge,
4:28:584 hours, 28 minutes, 58 secondsor like upload your recipes,
4:28:594 hours, 28 minutes, 59 secondsand then it figures out what to order from Amazon/Whole Foods food delivery. And that's gonna be pretty quick and easy to do, I think.
4:29:074 hours, 29 minutes, 7 secondsSo, it's gonna be be a whole range of business outcomes and it's gonna be tons of optimism around people can just figure out ways to make money.
4:29:144 hours, 29 minutes, 14 seconds- To be clear, these sandboxes already exist in research.
4:29:174 hours, 29 minutes, 17 secondsThere are people who have built clones of all the most popular websites of Google, Amazon, blah, blah, blah, to make it so that there's...
4:29:244 hours, 29 minutes, 24 secondsAnd I mean, OpenAI probably has them internally to train these things.
4:29:274 hours, 29 minutes, 27 secondsIt's the same as DeepMind's robotics team for years has had clusters for robotics, where you interact with robots fully, remotely.
4:29:344 hours, 29 minutes, 34 secondsThey just have a lab in London and you send tasks to it, it arrange the blocks and you do this research. Obviously, there's texts there that fix stuff.
4:29:424 hours, 29 minutes, 42 secondsBut we've turned these cranks of automation before. You go from sandbox to progress, and then you add one more domain at a time,
4:29:504 hours, 29 minutes, 50 secondsand generalize, I think. In the history of NLP and language processing,
4:29:554 hours, 29 minutes, 55 secondsinstruction tuning and tasks per language model used to be one language model did one task. And then, in the instruction tuning literature,
4:30:014 hours, 30 minutes, 1 secondthere's this point where you start adding more and more tasks together, where it just starts to generalize to every task. And we don't know where on this curve we are.
4:30:084 hours, 30 minutes, 8 secondsI think for reasoning with this RL and verifiable domains, we're early, but we don't know where the point is, where you just start training on enough domains and poof,
4:30:174 hours, 30 minutes, 17 secondsmore domains just start working, and you've crossed the generalization barrier. - Well, what do you think about the programming context?
Chapter 22: Programming and AI
4:30:254 hours, 30 minutes, 25 secondsSo, software engineering. That's where I personally, and I know a lot of people interact with AI the most.
4:30:344 hours, 30 minutes, 34 seconds- There's a lot of fear and angst too from current CS students,
4:30:374 hours, 30 minutes, 37 secondsbut there's also, that is the area where probably the most AI revenue and productivity gains have come. - [Lex] Yeah.
4:30:444 hours, 30 minutes, 44 seconds- Whether it be Copilots or Cursor, or what have you, or just standard ChatGPT. Like a lot of...
4:30:514 hours, 30 minutes, 51 secondsI know very few programmers who don't have ChatGPT and actually many of them have the $200 tier because that's what it's so good for.
4:30:594 hours, 30 minutes, 59 secondsI think that in that world, we already see it like SWE-bench,
4:31:044 hours, 31 minutes, 4 secondsI don't know if you've looked at the benchmark made by some Stanford students. I wouldn't say it's really hard, but I wouldn't say it's easy either.
4:31:104 hours, 31 minutes, 10 secondsI think it takes someone who's been through at least a few years of CS, or a couple years of programming to do SWE-bench well.
4:31:164 hours, 31 minutes, 16 secondsAnd the models went from 4% to 60% in like a year. And where are they gonna go to next year? It's gonna be higher.
4:31:254 hours, 31 minutes, 25 secondsIt probably won't be 100%, 'cause again, that nines is really hard to do, but we're gonna get to some point, where that's,
4:31:304 hours, 31 minutes, 30 secondsand then we're gonna need harder software engineering benchmarks, and so on and so forth.
4:31:334 hours, 31 minutes, 33 secondsBut the way that people think of it now is it's can do code completion easy. It can do some function generation and I have to review it. Great.
4:31:424 hours, 31 minutes, 42 secondsBut really, the software engineering agents, I think can be done faster sooner than any other agent, because it is a verifiable domain.
4:31:494 hours, 31 minutes, 49 secondsYou can always unit test or compile,
4:31:524 hours, 31 minutes, 52 secondsand there's many different regions of it can inspect the whole code base at once, which no engineer really can.
4:32:004 hours, 32 minutesOnly the architects can really think about this stuff, - Mm-hmm. - the really senior guys, and they can define stuff, and then the agent can execute on it.
4:32:074 hours, 32 minutes, 7 secondsSo, I think software engineering costs are gonna plummet like crazy.
4:32:094 hours, 32 minutes, 9 secondsAnd one interesting aspect of that is when software engineering costs are really low, you get very different markets. So, in the US, you have all these platform SaaS companies,
4:32:184 hours, 32 minutes, 18 secondsSalesforce, and so on and so forth. In China, no one uses platform SaaS. Everyone just builds their own stack,
4:32:274 hours, 32 minutes, 27 secondsbecause software engineering is much cheaper in China, and partially because people, number of STEM graduates, et cetera.
4:32:344 hours, 32 minutes, 34 secondsSo, STEM. So, it's generally just cheaper to do. And so, at the same time, code LLMs have been adopted much less in China,
4:32:424 hours, 32 minutes, 42 secondsbecause the cost of an engineer there is much lower.
4:32:454 hours, 32 minutes, 45 secondsBut what happens when every company can just invent their own business logic really cheaply and quickly? You stop using platform SaaS, you start building custom-tailored solutions,
4:32:534 hours, 32 minutes, 53 secondsyou change them really quickly. Now, all of a sudden,
4:32:554 hours, 32 minutes, 55 secondsyour business is a little bit more efficient too potentially because you're not dealing with the hell that is some random platform SaaS company stuff not working perfectly and having to adjust workflows,
4:33:044 hours, 33 minutes, 4 secondsor random business automation cases that aren't necessarily AI-required.
4:33:084 hours, 33 minutes, 8 secondsIt's just logic that needs to be built that no one has built. All of these zings can go happen faster. And so, I think software... And then, the other domain is like industrial,
4:33:154 hours, 33 minutes, 15 secondschemical, mechanical engineers suck at coding just generally. And their tools, like semiconductor engineers, their tools are 20 years old. All the tools run on XP,
4:33:234 hours, 33 minutes, 23 secondsincluding ASML lithography tools, run on Windows XP. And a lot of the analysis happens in Excel.
4:33:314 hours, 33 minutes, 31 secondsIt's just like, guys,
4:33:324 hours, 33 minutes, 32 secondsyou guys can move 20 years forward with all the data you have and gathered and do a lot better.
4:33:364 hours, 33 minutes, 36 secondsIt's just you need the engineering skills for software engineering to be delivered to the actual domain expert engineer. So, I think that's the area,
4:33:434 hours, 33 minutes, 43 secondswhere I'm super, duper bullish of generally AI creating value.
4:33:474 hours, 33 minutes, 47 seconds- The big picture is that I don't think it's gonna be a cliff. - Yeah. - We talked to,
4:33:524 hours, 33 minutes, 52 secondsI think a really good example of how growth changes is when Meta added stories. So, Snapchat was on an exponential,
4:34:004 hours, 34 minutesthey added stories, it flatlined. Software engineers, then up until the right, AI's gonna come in, it's probably just gonna be flat.
4:34:074 hours, 34 minutes, 7 secondsIt is not like everyone's gonna lose their job. It's hard because the supply corrects more slowly.
4:34:134 hours, 34 minutes, 13 secondsSo, the amount of students is still growing and that'll correct on a multi-year, like a year delay, but the amount of jobs will just turn,
4:34:214 hours, 34 minutes, 21 secondsand then maybe in 20, 40 years, it'll be well down. But in the few years, there'll never gonna be the snap moment, where it's like software engineers aren't useful.
4:34:304 hours, 34 minutes, 30 seconds- I think also the nature of what it means to be a programmer and what kind of jobs programmers do changes,
4:34:354 hours, 34 minutes, 35 seconds'cause I think there needs to be a human in the loop of everything you've talked about.
4:34:414 hours, 34 minutes, 41 secondsThere's a really important human in that picture of correcting the code,
4:34:474 hours, 34 minutes, 47 secondslike fix- - Think more than the context length. - Yep. And debugging also, like debugging by sort of reading the code,
4:34:564 hours, 34 minutes, 56 secondsunderstanding the steering the system, like no, no, no. You missed the point. Adding more to the prompt. Kind of like, yes, adding the human-
4:35:054 hours, 35 minutes, 5 seconds- Designing the perfect Google button.
4:35:074 hours, 35 minutes, 7 secondsGoogle's famous for having people design buttons that are so perfect, and it's like how is AI gonna do that? Is like they could give you all the ideas.
4:35:154 hours, 35 minutes, 15 secondsPerfect. Fine. - Yeah. - That's the thing, you can call it taste.
4:35:214 hours, 35 minutes, 21 secondsOne thing humans can do is figure out what other humans enjoy better than AI systems. That's where the preference, you loading that in. But ultimately,
4:35:294 hours, 35 minutes, 29 secondshumans are the greatest preference generat... That's where the preference comes from.
4:35:324 hours, 35 minutes, 32 seconds- And humans are actually very good at reading or judging between two things versus,
4:35:374 hours, 35 minutes, 37 secondsthis goes back to the core of what RLHF and preference tuning is,
4:35:404 hours, 35 minutes, 40 secondsis that it's hard to generate a good answer for a lot of problems, but it's easy to see which one is better.
4:35:454 hours, 35 minutes, 45 secondsAnd that's how we're using humans for AI now is judging which one is better. And that's what software engineering could look like, is the PR review, here's a few options, what are the,
4:35:544 hours, 35 minutes, 54 secondslike here are some potential pros and cons, and they're gonna be judges.
4:35:594 hours, 35 minutes, 59 seconds- I think the thing I would very much recommend is people start, programmers start using AI,
4:36:064 hours, 36 minutes, 6 secondsand embracing that role of the supervisor of the AI system,
4:36:094 hours, 36 minutes, 9 secondsand partner the AI system versus, writing from scratch or not learning coding at all and just generating stuff.
4:36:164 hours, 36 minutes, 16 secondsBecause I think there actually has to be a pretty high level of expertise as a programmer to be able to manage increasingly intelligent systems. - I think it's that,
4:36:254 hours, 36 minutes, 25 secondsand then becoming a domain expert in something. - Sure. Yeah. - Right?
4:36:284 hours, 36 minutes, 28 secondsBecause seriously, if you go look at aerospace or semiconductors or chemical engineering, everyone is using really crappy platforms, really old software.
4:36:364 hours, 36 minutes, 36 secondsThe job of a data sciences is like a joke in many cases. In many cases, it's very real,
4:36:424 hours, 36 minutes, 42 secondsbut it's like bring what the forefront of human capabilities are to your domain. And even if the forefront is from the AI, your domain, you're like at the forefront.
4:36:504 hours, 36 minutes, 50 secondsSo, it's like you have to be at the forefront of something,
4:36:534 hours, 36 minutes, 53 secondsand then leverage the like rising tide that is AI for everything else. - Oh, yeah.
4:36:584 hours, 36 minutes, 58 secondsThere's so many low-hanging fruit everywhere in terms of where software can help automate a thing or digitize a thing.
4:37:074 hours, 37 minutes, 7 secondsIn the legal system... That's why Doge is exciting.
4:37:124 hours, 37 minutes, 12 secondsI got to hang out with a bunch of the Doge folks, and they... (Lex chuckles) I mean, government is so old school,
4:37:204 hours, 37 minutes, 20 secondsit's like begging for the modernization of software, of organizing the data, all this kind of stuff.
4:37:284 hours, 37 minutes, 28 secondsIn that case, it's by design, because bureaucracy protects centers of power, and so on.
4:37:354 hours, 37 minutes, 35 secondsBut software breaks down those barriers, so it hurts those that are holding onto power,
4:37:434 hours, 37 minutes, 43 secondsbut ultimately, benefits humanity. So, there's a bunch of domains of that kind.
Chapter 23: Open source
4:37:494 hours, 37 minutes, 49 secondsOne thing we didn't fully finish talking about is open source. So, first of all, congrats, you released a new model.
4:37:584 hours, 37 minutes, 58 seconds- Yeah. This is the- - Tulu. (chuckles) - I'll explain what a Tulu is.
4:38:014 hours, 38 minutes, 1 second- Yeah. - A tulu is a hybrid camel when you breed a Dromedary with a Bactrian camel.
4:38:064 hours, 38 minutes, 6 secondsBack in the early days, after ChatGPT, there was a big wave of models coming out like Alpaca, Vicuna, et cetera, that were all named after various mammalian species.
4:38:154 hours, 38 minutes, 15 secondsSo, Tulu is the brand is multiple years old, which comes from that. - Mm-hmm.
4:38:194 hours, 38 minutes, 19 seconds- And we've been playing at the frontiers of post-training with open source code. And this first part of this release was in the fall,
4:38:284 hours, 38 minutes, 28 secondswhere we've built on Llama's open models, open-weight models, and then we add in our fully open code, our fully open data.
4:38:374 hours, 38 minutes, 37 secondsThere's a popular benchmark that is chat bot arena.
4:38:404 hours, 38 minutes, 40 secondsAnd that's generally the metric by which how these chat models are evaluated.
4:38:444 hours, 38 minutes, 44 secondsAnd it's humans compare random models from different organizations.
4:38:484 hours, 38 minutes, 48 secondsAnd if you looked at the leaderboard in November or December, among the top 60 models from 10s to 20s of organizations,
4:38:554 hours, 38 minutes, 55 secondsnone of them had open code or data for just post-training.
4:38:584 hours, 38 minutes, 58 secondsAmong that, even fewer or none have pre-training data and code available.
4:39:024 hours, 39 minutes, 2 secondsBut it's like post-training is much more accessible at this time. It's still pretty cheap and you can do it. And the thing is how high can we push this number, where people have access to all the code and data.
4:39:114 hours, 39 minutes, 11 secondsSo, that's the motivation of the project. We draw in lessons from Llama. Nvidia had a Nemotron model,
4:39:164 hours, 39 minutes, 16 secondswhere the recipe for their post-training was fairly open with some data and a paper.
4:39:214 hours, 39 minutes, 21 secondsAnd it's putting all these together to try to create a recipe that people can fine-tune models like GPT-4 to their domain. - So, to be clear, in the case of Tulu,
4:39:304 hours, 39 minutes, 30 secondsmaybe you can talk about OLMO 2, but in the case of Tulu, you're taking Llama 3, 4, 5B.
4:39:394 hours, 39 minutes, 39 seconds- Tulu has been a series of recipes for post-training. So, we've done - Okay. - multiple models over years. - Okay. And so, you're open sourcing everything.
4:39:464 hours, 39 minutes, 46 seconds- Yeah, if you start with an open-weight-based model, the whole model technically isn't open source, because you don't know what Llama put into it,
4:39:534 hours, 39 minutes, 53 secondswhich is why we have a separate thing that we'll get to. But it's just getting parts of the pipeline, where people can zoom in and customize. I know I hear from startups and businesses,
4:40:014 hours, 40 minutes, 1 secondthey're like, okay, I can take this post-training and try to apply it to my domain. We talk about verifiers a lot.
4:40:074 hours, 40 minutes, 7 secondsWe use this idea which is reinforcement learning with verifiable rewards, RLVR, similar to RLHF.
4:40:154 hours, 40 minutes, 15 secondsAnd we applied it to map.
4:40:174 hours, 40 minutes, 17 secondsAnd the model today, which is we applied it to the Llama 405b base model from last year. And we have our other stuff,
4:40:254 hours, 40 minutes, 25 secondswe have our instruction tuning and our preference tuning. But the math thing is interesting, which is it's easier to improve this math benchmark.
4:40:344 hours, 40 minutes, 34 secondsThere's a benchmark, M-A-T-H, MATH, all capitals, tough name when the benchmark, its name is the area that you're evaluating.
4:40:414 hours, 40 minutes, 41 secondsWe're researchers, we're not brands, brand strategists.
4:40:444 hours, 40 minutes, 44 secondsAnd this is something that the DeepSeek paper talked about as well is at this bigger model,
4:40:494 hours, 40 minutes, 49 secondsit's easier to elicit powerful capabilities with this RL training.
4:40:534 hours, 40 minutes, 53 secondsAnd then, they distill it down from that big model to the small model. And this model we released today, we saw the same thing, is we're AI2, we don't have a ton of compute,
4:41:024 hours, 41 minutes, 2 secondswe can't train 405b models all the time. So, we just did a few runs and they tend to work,
4:41:064 hours, 41 minutes, 6 secondsand it's like, it just shows that there's a lot of room for people to play in these things.
4:41:124 hours, 41 minutes, 12 secondsAnd that's- - And they crushed Llama's actual release. They're way better than it. - Yeah. So, our eval numbers, we have extra months in this,
4:41:194 hours, 41 minutes, 19 secondsbut our eval numbers are much better than the Llama instruct model - Mm-hmm. - that they released. - And then, you also said better than DeepSeek-V3. - Yeah. On our eval benchmark.
4:41:284 hours, 41 minutes, 28 secondsThe most DeepSeek-V3 is really similar.
4:41:314 hours, 41 minutes, 31 secondsWe have a safety benchmark to understand if it will say harmful things and things like that. And that's what draws down most of the way. It's still like-
4:41:374 hours, 41 minutes, 37 seconds- It's like an amalgamation of multiple benchmarks or what do you mean? - Yeah, so we have a 10 evaluat...
4:41:414 hours, 41 minutes, 41 secondsThis is standard practice in post-training is you choose your evaluations you care about. In academics, in smaller labs, you'll have fewer evaluations.
4:41:484 hours, 41 minutes, 48 secondsIn companies, you'll have a really one domain that you really care about. In Frontier Labs, you'll have 10s to 20s, to maybe even 100 valuations of specific things.
4:41:564 hours, 41 minutes, 56 secondsSo, we'd choose a representative suite of things that look like chat, precise instruction following, which is like respond only in emojis, just model follow weird things like that.
4:42:054 hours, 42 minutes, 5 seconds- Yeah. - Math, code. And you create a suite like this. So, safety would be 1 of 10 in that type of suite, where you have like,
4:42:124 hours, 42 minutes, 12 secondswhat is the broader community of AI care about? And for example, in comparison to DeepSeek,
4:42:174 hours, 42 minutes, 17 secondsit would be something like our average eval for our model would be 80, including safety and similar without.
4:42:234 hours, 42 minutes, 23 secondsAnd DeepSeek would be like 79% average score without safety and their safety score would bring it down
4:42:314 hours, 42 minutes, 31 secondsto like 76- - Oh, so you beat them even ignoring safety? - Yeah. So, this is something that internally,
4:42:354 hours, 42 minutes, 35 secondsit's like I don't want to win only by how you shape the eval benchmark.
4:42:394 hours, 42 minutes, 39 secondsSo, if there's something that's like people may or may not care about safety in their model, safety can come downstream, safety can be when you host the model for an API,
4:42:464 hours, 42 minutes, 46 secondssafety is addressed in a spectrum of locations in AI applications. So, it's like, if you wanna say that you have the best recipe,
4:42:524 hours, 42 minutes, 52 secondsyou can't just gauge it on these things that some people might not want. - [Lex] Mm-hmm. - And this is just, it's like the time of progress.
4:43:004 hours, 43 minutesWe benefit if we can release model later, we have more time to learn new techniques. Like this RL technique, we had started this in the fall.
4:43:074 hours, 43 minutes, 7 secondsIt's now really popular reasoning models.
4:43:094 hours, 43 minutes, 9 secondsThe next thing to do for open source post-training is to scale up verifiers, to scale up data to replicate some of DeepSeek's results.
4:43:174 hours, 43 minutes, 17 secondsAnd it's awesome that we have a paper to draw and that it makes it a lot easier.
4:43:204 hours, 43 minutes, 20 secondsAnd that's the type of things that is going on among academic and closed frontier research in AI.
4:43:284 hours, 43 minutes, 28 seconds- Since you're pushing open source, what do you think is the future of it?
4:43:314 hours, 43 minutes, 31 secondsDo you think DeepSeek actually changes things since it's open source or open-weight or is pushing the open source movement into the open direction?
4:43:394 hours, 43 minutes, 39 seconds- This goes very back to the license discussion. So, DeepSeek-R1 with a friendly license is a major reset.
4:43:444 hours, 43 minutes, 44 secondsSo, it's like the first time that we've had a really clear frontier model that is open-weights and with a commercially friendly license with no restrictions on downstream use cases,
4:43:534 hours, 43 minutes, 53 secondssynthetic data, distillation, whatever.
4:43:544 hours, 43 minutes, 54 secondsThis has never been the case at all in the history of AI in the last few years since ChatGPT.
4:43:594 hours, 43 minutes, 59 secondsThere have been models that are off the frontier or models with weird licenses that you can't really use them.
4:44:044 hours, 44 minutes, 4 seconds- So, isn't Meta's license pretty much permissible except for five companies? And there's also... So, this goes to what open source AI is, which is,
4:44:134 hours, 44 minutes, 13 secondsthere's also use case restrictions in the Llama license, which says you can't use it for specific things. So, if you come from an open source software background, you would say that that is not an open source license.
4:44:224 hours, 44 minutes, 22 seconds- What kind of things are those though? Are they like... - At this point, I can't pull them off the top of my head. But it'll be like- - Like stuff like competitor,
4:44:294 hours, 44 minutes, 29 secondsprobably. - It used to be military use was one, - Oh- - and they removed that for scale.
4:44:324 hours, 44 minutes, 32 secondsIt'll be like CSAM, like child abuse material or that's the type of thing that is forbidden there.
4:44:394 hours, 44 minutes, 39 secondsBut that's enough from an open source background to say it's not open source license. And also, the Llama license has this horrible thing,
4:44:454 hours, 44 minutes, 45 secondswhere you have to name your model Llama if you touch it to the Llama model. - Mm-hmm. - So, it's like the branding thing. So, if a company uses Llama, technically,
4:44:544 hours, 44 minutes, 54 secondsthe license says that they should say built with Llama at the bottom of their application. And from a marketing perspective, that just hurts. I can suck it up as a researcher, I'm like, oh, it's fine.
4:45:034 hours, 45 minutes, 3 secondsIt says Llama dash on all of our materials for this release. But this is why we need truly open models, which is we don't know DeepSeek-R1's data, but-
4:45:124 hours, 45 minutes, 12 seconds- Wait, so you're saying I can't make a cheap copy of Llama and pretend it's mine, but I can do this with the Chinese model? - [Lex] Yeah. - Yeah. - Hell yeah. (Nathan and Dylan laughing)
4:45:204 hours, 45 minutes, 20 seconds- That's what I'm saying. - Yeah. - And that's why it's like we want to, this whole open language models thing, the OLMO thing,
4:45:264 hours, 45 minutes, 26 secondsis to try to keep the model where everything is open with the data as close to the frontier as possible. So, we're compute-constrained, we're personnel-constrained.
4:45:344 hours, 45 minutes, 34 secondsWe rely on getting insights from people like John Schulman tells us to do RL on outputs. We can make these big jumps,
4:45:414 hours, 45 minutes, 41 secondsbut it just takes a long time to push the frontier of open source.
4:45:444 hours, 45 minutes, 44 secondsAnd fundamentally, I would say that that's because open source AI does not have the same feedback loops as open source software.
4:45:514 hours, 45 minutes, 51 secondsWe talked about open source software for security also is just because you build something once and you can reuse it. If you go into a new company, there's so many benefits.
4:46:004 hours, 46 minutesBut if you open source a language model, you have this data sitting around,
4:46:044 hours, 46 minutes, 4 secondsyou have this training code, it's not that easy for someone to come and build on and improve, 'cause you need to spend a lot on compute. You need to have expertise.
4:46:114 hours, 46 minutes, 11 secondsSo, until there are feedback loops of open source AI, it seems mostly an ideological mission. Like people like Mark Zuckerberg, which is like,
4:46:194 hours, 46 minutes, 19 secondsAmerica needs this, and I agree with him, but in the time where the motivation ideologically is high,
4:46:264 hours, 46 minutes, 26 secondswe need to capitalize and build this ecosystem around what benefits do you get from seeing the language model data? And there's not a lot about that.
4:46:354 hours, 46 minutes, 35 secondsWe're gonna try to launch a demo soon where you can look at a OLMO model and a query, and see what pre-training data is similar to it, which is legally risky and complicated,
4:46:444 hours, 46 minutes, 44 secondsbut it's like, what does it mean to see the data that the AI was trained on? It's hard to parse. It's terabytes of files.
4:46:514 hours, 46 minutes, 51 secondsIt's like, I don't know what I'm gonna find in there.
4:46:544 hours, 46 minutes, 54 secondsBut that's what we need to do as an ecosystem if people want open source AI to be financially useful. - We didn't really talk about Stargate.
Chapter 24: Stargate
4:47:024 hours, 47 minutes, 2 secondsI would love to get your opinion on what the new administration, the Trump administration,
4:47:074 hours, 47 minutes, 7 secondseverything that's doing that's being done from the America side and supporting AI infrastructure and the efforts of the different AI companies.
4:47:164 hours, 47 minutes, 16 secondsWhat do you think about Stargate? What are we supposed to think about Stargate? And does Sam have the money? (Nathan chuckles) - Yeah,
4:47:234 hours, 47 minutes, 23 secondsso I think Stargate is a opaque thing. It definitely doesn't have $500 billion, doesn't even have $100 billion.
4:47:304 hours, 47 minutes, 30 secondsSo, what they announced is this $500 billion number, Larry Ellison, Sam Altman, and Trump said it.
4:47:374 hours, 47 minutes, 37 secondsThey thanked Trump and Trump did do some executive actions that do significantly improve the ability for this to be built faster.
4:47:474 hours, 47 minutes, 47 secondsOne of the executive actions you did is on federal land, you can just basically build data centers in power, pretty much like that. - Mm-hmm.
4:47:544 hours, 47 minutes, 54 seconds- And then, the permitting process is basically gone or you file after the fact. So, one of the, again, like I had a schizo take earlier, another schizo take,
4:48:014 hours, 48 minutes, 1 secondif you've ever been to the Presidio in San Francisco,
4:48:044 hours, 48 minutes, 4 secondsbeautiful area, you could build a power plant and a data center there if you wanted to. Because it is federal land. (Nathan laughing) It used to be a military base, so. - It did. - But obviously,
4:48:124 hours, 48 minutes, 12 secondsthis would piss people off. It's a good bit. Anyways. (Nathan and Lex laughing) Trump has made it much easier to do this generally.
4:48:204 hours, 48 minutes, 20 secondsTexas has the only unregulated grid in the nation as well. - [Lex] Let's go, Texas. - And so, therefore, like ERCOT enables people to build faster as well.
4:48:294 hours, 48 minutes, 29 secondsIn addition, the federal regulations are coming down. And so, Stargate is predicated, and this is why that whole show happened.
4:48:374 hours, 48 minutes, 37 secondsNow, how they came up with a $500 billion number is beyond me.
4:48:414 hours, 48 minutes, 41 secondsHow they came up with $100 billion number makes sense to some extent.
4:48:444 hours, 48 minutes, 44 secondsAnd there's actually a good table in here that I would like to show in that Stargate piece that I had.
4:48:544 hours, 48 minutes, 54 secondsIt's the most recent one. Yeah. So, anyways, Stargate, it's basically, it's a table about cost.
4:49:054 hours, 49 minutes, 5 secondsThere, you passed it already. It's that one. So, this table is explaining what happens. So, Stargate is in Abilene, Texas,
4:49:144 hours, 49 minutes, 14 secondsthe first $100 billion of it. That site is 2.2 gigawatts of power in, about 1.8 gigawatts of power consumed.
4:49:224 hours, 49 minutes, 22 secondsPer GPU, they have like roughly...
4:49:264 hours, 49 minutes, 26 secondsOracle is already building the first part of this before Stargate came about. To be clear, they've been building it for a year. They tried to rent it to Elon, in fact.
4:49:354 hours, 49 minutes, 35 secondsBut Elon was like, it's too slow, I need it faster.
4:49:374 hours, 49 minutes, 37 secondsSo, then he went and did his Memphis thing. - Mm-hmm.
4:49:394 hours, 49 minutes, 39 seconds- And so, OpenAI was able to get it with this weird joint venture called Stargate.
4:49:444 hours, 49 minutes, 44 secondsThey initially signed a deal with just Oracle for the first section of this cluster.
4:49:474 hours, 49 minutes, 47 secondsThis first section of this cluster is roughly $5 billion to $6 billion of server spend.
4:49:564 hours, 49 minutes, 56 secondsAnd then, there's another billion or so of data center spend. And then, likewise,
4:50:014 hours, 50 minutes, 1 secondif you fill out that entire 1.8 gigawatts with the next two generations of Nvidia's chips, GB200, GB300, VR200, and you fill it out completely,
4:50:104 hours, 50 minutes, 10 secondsthat ends up being roughly $50 billion of server cost. Plus there's data center cost, plus maintenance cost,
4:50:184 hours, 50 minutes, 18 secondsplus operation costs, plus all these things.
4:50:214 hours, 50 minutes, 21 secondsAnd that's where OpenAI gets to their $100 billion announcement that they had. Because they talked about 100 billion is phase one. That's this Abilene, Texas data center.
4:50:304 hours, 50 minutes, 30 seconds$100 billion of "total cost of ownership", quote, unquote. So, it's not CapEx, it's not investment, it's $100 billion of total cost of ownership.
4:50:384 hours, 50 minutes, 38 secondsAnd then, there will be future phases.
4:50:404 hours, 50 minutes, 40 secondsThey're looking at other sites that are even bigger than this 2.2 gigawatts, by the way, in Texas and elsewhere. And so, they're not completely ignoring that.
4:50:494 hours, 50 minutes, 49 secondsBut there is, the number of $100 billion that they say is for phase one, which I do think will happen. They don't even have the money for that.
4:50:574 hours, 50 minutes, 57 secondsFurthermore, it's not $100 billion, it's $50 billion of spend. And then, $50 billion of operational cost, power, et cetera,
4:51:044 hours, 51 minutes, 4 secondsrental pricing, et cetera.
4:51:064 hours, 51 minutes, 6 seconds'Cause OpenAI is renting the GPUs from the Stargate joint venture. What money do they actually have? SoftBank. SoftBank is gonna invest,
4:51:154 hours, 51 minutes, 15 secondsOracle's gonna invest, OpenAI is gonna invest. OpenAI is on the line - Mm-hmm. - for $19 billion.
4:51:184 hours, 51 minutes, 18 secondsEveryone knows that they've only got 6 billion in their last round and 4 billion in debt.
4:51:234 hours, 51 minutes, 23 secondsBut there's news of SoftBank maybe investing 25 billion into OpenAI. So, that's part of it.
4:51:304 hours, 51 minutes, 30 secondsSo, 19 billion can come from there. So, OpenAI does not have the money at all, to be clear. Ink is not dried on anything.
4:51:374 hours, 51 minutes, 37 secondsOpenAI has $0 - Yeah. - for this 50 billion.
4:51:394 hours, 51 minutes, 39 secondsAnd which they're legally obligated to put 19 billion of CapEx or into the joint venture.
4:51:434 hours, 51 minutes, 43 secondsAnd then, the rest, they're gonna pay via renting the GPUs from the joint venture. And then, there's Oracle. Oracle has a lot of money.
4:51:514 hours, 51 minutes, 51 secondsThey're building the first section completely. They were spending for it themselves. This $6 billion of CapEx, $10 billion of TCO. And they were gonna do that first section.
4:52:004 hours, 52 minutesThey're paying for that. As far as the rest of the section, I don't know how much Larry wants to spend. At any point, he could pull out. This is, again, this is completely voluntary.
4:52:094 hours, 52 minutes, 9 secondsSo, at any point, there's no signed ink on this. - Mm-hmm.
4:52:114 hours, 52 minutes, 11 seconds- But he potentially could contribute tens of billions of dollars, to be clear. He's got the money, Oracle's got the money. And then, there's like MGX, which is the south, the UAE fund,
4:52:204 hours, 52 minutes, 20 secondswhich technically has $1.5 trillion for investing in AI. But again, I don't know how real that money is.
4:52:274 hours, 52 minutes, 27 secondsAnd whereas there's no ink signed for this, SoftBank does not have $25 billion of cash. They have to sell down their stake in Arm,
4:52:354 hours, 52 minutes, 35 secondswhich is the leader in CPUs, and they IPO'ed it. This is obviously what they've always wanted to do. They just didn't know where they'd redeploy the capital. Selling down the stake in Arm makes a ton of sense.
4:52:444 hours, 52 minutes, 44 secondsSo, they can sell that down and invest in this if they want to and invest in OpenAI if they want to. As far as money secured,
4:52:504 hours, 52 minutes, 50 secondsthe first 100,000 GB200 cluster can be funded.
4:52:554 hours, 52 minutes, 55 secondsEverything else after that - Up in the air. - is up in the air. Money's coming. I believe the money will come. I personally do. (Lex laughing)
4:53:034 hours, 53 minutes, 3 seconds- It's a belief. Okay. - It's a belief that they are gonna release better models and be able to raise more money, right? - Yeah, yeah. But the actual reality is, is that Elon's right, the money does not exist.
4:53:124 hours, 53 minutes, 12 seconds- What is the US government have to do with anything? What does Trump have to do with everything? He's just a hype man? - So, Trump is,
4:53:184 hours, 53 minutes, 18 secondshe's reducing the regulation so they can build it faster. And he is allowing them to do it.
4:53:234 hours, 53 minutes, 23 secondsBecause any investment of this side is gonna involve antitrust stuff. So, obviously, he's gonna allow them to do it.
4:53:294 hours, 53 minutes, 29 secondsHe's gonna enable the regulations to actually allow to be built.
4:53:334 hours, 53 minutes, 33 secondsI don't believe there's any US government dollars being spent on this though. - Yeah.
4:53:374 hours, 53 minutes, 37 secondsSo, I think he's also just creating a general vibe that this regulation will go down and this is the era of building.
4:53:454 hours, 53 minutes, 45 secondsSo, if you're a builder, - Yeah. - you want to create stuff, you wanna launch stuff, this is the time to do it.
4:53:494 hours, 53 minutes, 49 seconds- And so, we've had this 1.8 gigawatt data center in our data for over a year now, and we've been sending it to all of our clients,
4:53:564 hours, 53 minutes, 56 secondsincluding many of these companies that are building the multi gigawatts. But that is at a level that's not quite, maybe executives seeing $500 billion, $100 billion,
4:54:044 hours, 54 minutes, 4 secondsand then everyone's asking them like... So, it could spur another, an even faster arms race. Because there's already an arms race, but this like 100 billion,
4:54:134 hours, 54 minutes, 13 seconds$500 billion number, Trump talking about it on TV.
4:54:164 hours, 54 minutes, 16 secondsIt could spur the arm race to be even faster and more investors to flood in and et cetera, et cetera. So, I think you're right in that sense that OpenAI,
4:54:254 hours, 54 minutes, 25 secondsor Trump is championing people are gonna build more and his actions are gonna let people build more.
Chapter 25: Future of AI
4:54:304 hours, 54 minutes, 30 seconds- What are you excited about these several years that are upcoming in terms of cluster build outs,
4:54:404 hours, 54 minutes, 40 secondsin terms of breakthroughs in AI?
4:54:434 hours, 54 minutes, 43 secondsLike the best possible future you can imagine in the next couple years, two, three, four years? What does that look like?
4:54:504 hours, 54 minutes, 50 secondsJust it could be very specific technical things like breakthroughs on post post-training, or it could be just size big.
4:54:584 hours, 54 minutes, 58 seconds- [Dylan] Yeah, I mean it's- - Impressive clusters.
4:55:014 hours, 55 minutes, 1 second- I really enjoy tracking supply chain and who's involved in what. (Lex laughing) - Yeah. - I really do. It's really fun to see the numbers, the cost, who's building what capacity,
4:55:104 hours, 55 minutes, 10 secondshelping them figure out how much capacity they should build, winning deals, strategic stuff, that's really cool.
4:55:144 hours, 55 minutes, 14 secondsI think technologically, there's a lot around the networking side that really excites me with optics and electronics getting closer and closer,
4:55:234 hours, 55 minutes, 23 secondswhether it be co-packaged optics, or some sort of forms of new forms of switching.
4:55:284 hours, 55 minutes, 28 seconds- This is internal to a cluster. - Cluster. Yeah. Also multi-data center training,
4:55:344 hours, 55 minutes, 34 secondspeople are putting so much fiber between these data centers and lighting it up with so much bandwidth that there's a lot of interesting stuff happening on that end.
4:55:424 hours, 55 minutes, 42 secondsTelecom has been really boring since 5G, and now it's like really exciting again on the fiber side. - Can you educate me a little bit about the speed of things?
4:55:504 hours, 55 minutes, 50 secondsSo, the speed of memory versus the speed of interconnect, versus the speed of fiber between data centers? Are these orders of magnitude different?
4:55:584 hours, 55 minutes, 58 secondsCan we, at some point, converge towards a place, where it all just feels like one computer?
4:56:044 hours, 56 minutes, 4 seconds- No, I don't think that's possible. - Okay. All right. (chuckles) - It's only gonna get harder to program, not easier. - Okay.
4:56:094 hours, 56 minutes, 9 seconds- It's only gonna get more difficult and complicated in more layers.
4:56:124 hours, 56 minutes, 12 secondsThe general image that people like to have is this hierarchy of memory. So, on chip is really close. Localized within the chip, you have registers.
4:56:214 hours, 56 minutes, 21 secondsAnd those are shared between some compute elements, and then you'll have caches, which are shared between more compute elements. Then, you have memory, like HBM or DRAM,
4:56:284 hours, 56 minutes, 28 secondslike DDR memory or whatever it is. And that's shared between the whole chip.
4:56:324 hours, 56 minutes, 32 secondsAnd then, you can have pools of memory that are shared between many chips. And then, storage and you keep zoning out.
4:56:394 hours, 56 minutes, 39 secondsThe access latency across data centers, across within the data center within a chip differs. So, you're obviously always,
4:56:454 hours, 56 minutes, 45 secondsyou're always gonna have different programming paradigms for this. It's not gonna be easy. Programming this stuff is gonna be hard.
4:56:514 hours, 56 minutes, 51 secondsMaybe AI can help with programming this. But the way to think about it is that like,
4:57:014 hours, 57 minutes, 1 second(Dylan sighs) there's the more elements you add to a task, you don't gain, you don't get strong scaling.
4:57:104 hours, 57 minutes, 10 secondsIf I double the number of chips, I don't get 2x the performance. This is just like a reality of computing, 'cause there's inefficiencies.
4:57:164 hours, 57 minutes, 16 secondsAnd there's a lot of interesting work being done to make it more linear.
4:57:214 hours, 57 minutes, 21 secondsWhether it's making the chips more networked together more tightly or cool programming models, or cool algorithmic things that you can do on the model side.
4:57:304 hours, 57 minutes, 30 secondsDeepSeek did some of these really cool innovations because they were limited on interconnect, but they still needed to parallelize. All sorts of... Everyone's always doing stuff.
4:57:374 hours, 57 minutes, 37 secondsGoogle's got a bunch of work and everyone's got a bunch of work about this.
4:57:404 hours, 57 minutes, 40 secondsThat stuff is super exciting on the model and workload and innovation side.
4:57:444 hours, 57 minutes, 44 secondsHardware, solid-state transformers are interesting for the power side.
4:57:484 hours, 57 minutes, 48 secondsThere's all sorts of stuff on batteries and there's all sorts of stuff on... I think when you look at, if you look at every layer of the compute stack,
4:57:554 hours, 57 minutes, 55 secondswhether it goes from lithography and etch, all the way to like fabrication, to optics, to networking, to power, to transformers,
4:58:024 hours, 58 minutes, 2 secondsto cooling, to a networking and you just go on up and up and up and up the stack. Even air conditioners for data centers are innovating.
4:58:094 hours, 58 minutes, 9 secondsThere's like copper cables are innovating. You wouldn't think it, but copper cables are,
4:58:144 hours, 58 minutes, 14 secondsthere's some innovations happening there with the density of how you can pack them. And it's like all of these layers of the stack, all the way up to the models.
4:58:214 hours, 58 minutes, 21 secondsHuman progress is at a pace that's never been seen before.
4:58:244 hours, 58 minutes, 24 seconds- I'm just imagining you sitting back in a layer somewhere with screens everywhere, just monitoring the supply chain where all these clusters, all the information you're gathering.
4:58:334 hours, 58 minutes, 33 secondsYou do incredible- - There's a big team. There's a big team. - Yeah. (laughs) You do quite incredible work with SemiAnalysis.
4:58:414 hours, 58 minutes, 41 secondsJust keeping your finger on the pulse of human civilization in the digital world.
4:58:494 hours, 58 minutes, 49 secondsIt's pretty cool just to watch, feel that. - [Dylan] Yeah. Thank you, I guess- - Feel all of us doing shit, epic shit.
4:58:574 hours, 58 minutes, 57 seconds- [Dylan] Feel the AGI. (Lex laughing) - From meme to reality.
4:59:024 hours, 59 minutes, 2 secondsWhat Nathan, is there breakthroughs that you're looking forward to potentially?
4:59:074 hours, 59 minutes, 7 seconds- I had a while to think about this while listening to Dylan's beautiful response. (Dylan laughing) - He did listen to me. He was so- - No, I knew this was coming.
4:59:134 hours, 59 minutes, 13 secondsAnd it's like, realistically, training models is very fun because there's so much low-hanging fruit. And the thing that makes my job entertaining,
4:59:214 hours, 59 minutes, 21 secondsI train models, I write analysis about what's happening with models, and it's fun because there is obviously so much more progress to be had.
4:59:314 hours, 59 minutes, 31 secondsAnd the real motivation why I do this somewhere where I can share things is that there's just, I don't trust people that are like, "Trust me, bro, we're gonna make AI good."
4:59:394 hours, 59 minutes, 39 secondsIt's like we're the ones that it's like, we're gonna do it and you can trust us and we're just gonna have all the AI, and it's just I would like a future,
4:59:474 hours, 59 minutes, 47 secondswhere more people have a say in what AI is and can understand it. And it's a little bit less fun, that it's not a like positive thing of like,
4:59:554 hours, 59 minutes, 55 secondsthis is just all really fun. Training models is fun and bring people in is fun,
4:59:594 hours, 59 minutes, 59 secondsbut it's really like AI, if it is going to be the most powerful technology of my lifetime,
5:00:035 hours, 3 secondsit's like, we need to have a lot of people involved in making that and... - Making it open (Nathan chuckles) helps with that,
5:00:115 hours, 11 secondsas successful as possible, as open as possible, yeah.
5:00:145 hours, 14 seconds- In my read of the last few years is that more openness would help the AI ecosystem in terms of having more people understand what's going on,
5:00:215 hours, 21 secondswhether that's researchers from non-AI fields to governments, to everything. It doesn't mean that openness will always be the answer. I think then it'll reassess of like,
5:00:305 hours, 30 secondswhat is the biggest problem facing AI and tack on a different angle to the wild ride that we're on. - And for me, just from even the user experience,
5:00:405 hours, 40 secondsanytime you have the, like Karpathy said, the aha moments, like the magic, like seeing the reasoning, the chain of thought,
5:00:505 hours, 50 secondsit's like there's something really just fundamentally beautiful about that. It's putting a mirror to ourselves and seeing like, oh shit.
5:00:585 hours, 58 secondsIt is solving intelligence as the cliche goal of these companies is. And you get to understand why we humans are special.
5:01:075 hours, 1 minute, 7 secondsThe intelligence within us is special. And for now also, why we're special in terms of, we seem to be conscious in the AI systems for now aren't,
5:01:165 hours, 1 minute, 16 secondsand we get to solve, we get to explore that mystery.
5:01:205 hours, 1 minute, 20 secondsSo, it's just really cool to get to explore these questions that I don't think,
5:01:255 hours, 1 minute, 25 secondsI would've never imagined would be even possible back when sort of just watching with excitement the Deep Blue beat Kasparov.
5:01:375 hours, 1 minute, 37 secondsI wouldn't have ever thought this kind of AI would be possible in my lifetime. It's like this is really feels like AI. - Yeah. (chuckles) - It's incredible.
5:01:445 hours, 1 minute, 44 seconds- I started with AI of learning to fly a silly quadrotor.
5:01:485 hours, 1 minute, 48 secondsIt's like learning to fly and it just like, it learned to fly up, it would hit the ceiling and stop and catch it. It's like, okay, that is really stupid compared to what's going on now.
5:01:565 hours, 1 minute, 56 seconds- And now, you could probably, with natural language,
5:01:595 hours, 1 minute, 59 secondstell it to learn to fly and it's going to generate the control algorithm required to do that. (laughs) - Probably. There's low level blockers. We have to do some weird stuff for that,
5:02:085 hours, 2 minutes, 8 seconds- Yeah, for sure. - but you can,
5:02:095 hours, 2 minutes, 9 secondsyou definitely can. - It's back to our robotics conversation, yeah.
5:02:115 hours, 2 minutes, 11 secondsWhen you have to interact in the actual physical world, that's hard. What gives you hope about the future of human civilization?
5:02:185 hours, 2 minutes, 18 secondsLooking into the next 10 years, 100 years, 1,000 years, how long you think we'll make it?
5:02:255 hours, 2 minutes, 25 secondsYou think we've got 1,000 years? - I think humans will definitely be around in 1,000 years. I think there's ways that very bad things could happen.
5:02:335 hours, 2 minutes, 33 secondsThere'll be way fewer humans, but humans are very good at surviving. There's been a lot of things that that is true. I don't think they're necessarily,
5:02:425 hours, 2 minutes, 42 secondswe're good at long-term credit assignment of risk, but when the risk becomes immediate, we tend to figure things out, - Oh yeah. - and for that reason,
5:02:505 hours, 2 minutes, 50 secondsI am like, there's physical constraints to things like AGI hyper,
5:02:565 hours, 2 minutes, 56 secondslike recursive improvement to kill us all type stuff for physical reasons, and for how humans have figured things out before, I'm not too worried about it.
5:03:045 hours, 3 minutes, 4 secondsAI takeover. There are other international things that are worrying,
5:03:075 hours, 3 minutes, 7 secondsbut there's just fundamental human goodness and trying to amplify that, and we're on a tenuous time.
5:03:175 hours, 3 minutes, 17 secondsAnd if you look at humanity as a whole, there's been times where things go backwards, there's times when things don't happen at all.
5:03:255 hours, 3 minutes, 25 secondsAnd we're on a, what should be very positive trajectory right now. - Yeah, there seems to be progress, but just with power,
5:03:335 hours, 3 minutes, 33 secondsthere's spikes of human suffering, and we wanna try to minimize the amount of spikes. - Generally, humanity is gonna suffer a lot less.
5:03:415 hours, 3 minutes, 41 secondsI'm very optimistic about that.
5:03:445 hours, 3 minutes, 44 secondsI do worry of techno fascism type stuff arising as AI becomes more and more prevalent and powerful,
5:03:515 hours, 3 minutes, 51 secondsand those who control it can do more and more. Maybe it doesn't kill us all,
5:03:555 hours, 3 minutes, 55 secondsbut at some point, every very powerful human is gonna wanna brain computer interface, so that they can interact with the AGI,
5:04:025 hours, 4 minutes, 2 secondsand all of its advantages in many more way, and merge its mind with sort of like,
5:04:065 hours, 4 minutes, 6 secondsand its capabilities or that person's capabilities can leverage those much better than anyone else, and therefore be, it won't be one person rule them all,
5:04:145 hours, 4 minutes, 14 secondsbut it will be... The thing I worry about is it'll be like few people, hundreds, thousands, tens of thousands,
5:04:215 hours, 4 minutes, 21 secondsmaybe millions of people rule whoever's left, and the economy around it.
5:04:275 hours, 4 minutes, 27 secondsAnd that's the thing that's probably more worrisome is human machine amalgamations.
5:04:335 hours, 4 minutes, 33 secondsThis enables an individual human to have more impact on the world. And that impact can be both positive and negative. Generally, humans have positive impacts on the world,
5:04:425 hours, 4 minutes, 42 secondsat least societally,
5:04:435 hours, 4 minutes, 43 secondsbut it's possible for individual humans to have such negative impacts. And AGI, at least as I think the labs define it,
5:04:515 hours, 4 minutes, 51 secondswhich is not a runaway sentient thing,
5:04:535 hours, 4 minutes, 53 secondsbut rather just something that can do a lot of tasks really efficiently, amplifies the capabilities of someone causing extreme damage.
5:05:015 hours, 5 minutes, 1 secondBut for the most part, I think it'll be used for profit-seeking motives, which will increase the abundance and supply of things.
5:05:095 hours, 5 minutes, 9 secondsand therefore reduce suffering. (Lex laughing) - Yeah. - That's the goal. - Scrolling on a timeline, (Nathan laughing) just drowning in dopamine- - Crawling stasis.
5:05:175 hours, 5 minutes, 17 seconds- That is- - Scrolling holds the status quo of the world. - That is a positive outcome (Nathan and Lex laughing) is like, if I have food tubes - Yeah. - and I'm scrolling and I'm happy,
5:05:255 hours, 5 minutes, 25 secondsthat's a positive outcome. (group laughing) - While expanding out into the cosmos. Well, this is a fun time to be alive.
5:05:355 hours, 5 minutes, 35 secondsAnd thank you for pushing the forefront of what is possible in humans. And thank you for talking today. This was fun. - Thanks for having us. - Thanks for having us.
5:05:445 hours, 5 minutes, 44 seconds- Thanks for listening to this conversation with Dylan Patel and Nathan Lambert. To support this podcast, please check out our sponsors in the description.
5:05:525 hours, 5 minutes, 52 secondsAnd now, let me leave you some words from Richard Feynman.
5:05:575 hours, 5 minutes, 57 seconds"For a successful technology, reality must take precedence over public relations, for nature cannot be fooled."
5:06:065 hours, 6 minutes, 6 secondsThank you for listening and hope to see you next time.

