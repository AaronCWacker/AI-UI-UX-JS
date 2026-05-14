Chapter 1: Why every infrastructure vendor is fixing memory
0:00Pine Cone is a vector database company.
0:022 secondsLast month, they shipped a product that basically says vector search is not enough on its own, which is a very strange thing for a vector database
0:1010 secondscompany to ship. They're basically saying, well, what we provide, maybe that's not quite enough. And they're not alone. In the same few weeks, SAP spent
0:1717 secondsover a billion euros on AI infrastructure, and none of it is for chatbot or language model builds or buys. Google made knowledge architecture
0:2525 secondsthe headline at Cloud Next. Cloudflare shipped a memory product for agents.
0:2929 secondsMicrosoft continues to push on graphs for AI. Every serious infrastructure vendor is racing to solve a memory
0:3636 secondsproblem. And if you're building agents right now, you've probably felt the problem they're trying to solve. You can give an agent a tool, a database, and a doc store, and you can ask it to do real
0:4545 secondswork. It will burn up a lot of the context window along the way, rediscovering things it should already know. It will reread documents it
0:5353 secondssummarized last time. It will reask the user questions the system already was provided an answer to. It will blow the token budget before useful work starts.
1:021 minute, 2 secondsIn some cases, Pine Cone says that that kind of rediscovery can eat up to 85% of agent compute. And anecdotally, I don't
1:101 minute, 10 secondsknow if it's 85%, but I buy that it's a big number. Everyone is starting to see this memory problem and there are thousands of products that are blooming everywhere promising to fix it, right?
Chapter 2: The rediscovery problem eating agent compute
1:201 minute, 20 secondsWe have vector database solutions. We have knowledge graph solutions. We have document indexes and memory layers and lakehouse query engines and agent
1:261 minute, 26 secondsplatforms with retrieval baked in. I feel like every week someone ships something new here. And so picking the right one is actually getting harder and harder and harder and committing to one
1:351 minute, 35 secondsis getting even more difficult because the moment you wire it into your stack, the cost of being wrong goes up really fast and agent systems keep evolving.
1:421 minute, 42 secondsSo, what I want to do in this video is to show you what these players are actually building, why they're building it, and what it means for the choice that you're making. And then at the end,
1:511 minute, 51 secondsI'm going to give you the three steps I'd take if I were building an agent today instead of just picking a database and hoping it works out, right? Quick definitions before we go further because
1:591 minute, 59 secondsthe language around this stuff has gotten sloppy. Rag or retrieval augmented generation is just a loop where your system pulls information from
2:072 minutes, 7 secondssomewhere and hands it to the model so it has the context to answer. It can be information from a wide variety of sources, but typically what people mean
2:152 minutes, 15 secondswhen they say rag is actually one kind of rag, perhaps the most common kind, vector search. Vector search is a way to
2:242 minutes, 24 secondsturn your documents into number vectors and find the chunks that are mathematically closest to the query. We call it semantic search because you end
Chapter 3: RAG and vector search definitions
2:312 minutes, 31 secondsup finding things where the words match or the themes match. And that can be one way to do retrieval. But of course, there are other ways. You can retrieve
2:382 minutes, 38 secondsfrom a database. you can retrieve directly from text. There's a lot of options on the table now and I wanted to make sure that you understood the
2:462 minutes, 46 secondsdifferent options before we go further because we're going to be talking about rag and vector search and you just I don't want you to get lost. And before we go further, I just want to be very
2:532 minutes, 53 secondsclear. If you are looking for a silver bullet answer where you don't have to pay attention to multiple kinds of retrieval, stop looking. That's not how
3:003 minutesthis works. You are going to need to be willing to think about a more sophisticated memory system. and you're going to need to think deliberately about how you combine multiple kinds of
3:083 minutes, 8 secondsretrieval to get the work you want to do agentically done. Now, let's start with why memory and memory systems are suddenly a major question that see a lot
3:163 minutes, 16 secondsof building activity. With classic rag, the version that most teams shipped back in 2024 and 2025, it was built for one job. It was built for frankly a chatbot
3:253 minutes, 25 secondsera job. Question answering, a user types, "How do I reset my password?" in the system embeds the question, finds three semantically similar chunks in the
3:323 minutes, 32 secondshelp center docs, and the model writes a paragraph. That loop works because the answer usually lives in a couple of paragraphs in the source material, and the user doesn't need the exact wording
3:413 minutes, 41 secondsfrom the source material to get their job done. Agents don't work like that.
3:443 minutes, 44 secondsAn agent doesn't ask a question and stop. It runs a task. It opens a ticket.
3:493 minutes, 49 secondsIt retrieves the customer record. It checks the policy, drafts the response.
3:523 minutes, 52 secondsIt does work, right? And if it does work, it needs to be able to retrieve the information it needs to do the work
3:593 minutes, 59 secondswell. And so the tasks I'm talking about where you're cross-referencing definitions across 40 pages of contracts, that kind of thing, those are
Chapter 4: Why classic RAG was built for chatbots
4:074 minutes, 7 secondsnot tasks answered by classic vector search. Like you can't say find three relevant chunks of text when you're doing a longunning agentic workflow over
4:154 minutes, 15 secondshundreds of pages of documents. It doesn't lead to accurate text perfect responses. And increasingly because we
4:234 minutes, 23 secondsexpect agents to do work, that is the bar we hold and it's the bar we should hold. So what does an agent need instead of a simple vector search in 2026? What
4:314 minutes, 31 secondsan agent needs is a bundle. It needs the customer record plus the policy plus the entitlement plus the prior tickets all
4:394 minutes, 39 secondsassembled into the right shape. It needs the metric plus the source of truth plus the lineage of that metric plus the authorization to use it. It needs the
4:474 minutes, 47 secondscontract plus the definitions plus the exceptions plus the schedule of the contract. Right? Classic rag leaves the agent to assemble that bundle on the fly every run from raw search results.
4:584 minutes, 58 secondsThat's where the rediscovery problem starts to kick in. The agent will refetch that same context every run. It will reummarize documents it summarized last time, maybe correctly, maybe not.
5:095 minutes, 9 secondsIt will ask the user for information the system has. it blows the token budget before it does useful work and you don't get consistency along the way. So now
5:165 minutes, 16 secondslet's look at how the infrastructure layer is responding to this challenge because four of the biggest moves in the last 6 months tell you what they think
5:255 minutes, 25 secondsthe fix for this problem is. First, Pine Cone. Pine Cone launched a product called Nexus with a query language called NoQL. Their pitch is that agents
Chapter 5: What agents actually need instead
5:345 minutes, 34 secondsneed a different retrieval contract than chatbots do. A chatbot needs related text. An agent needs operating context.
5:415 minutes, 41 secondsTheir failure mode is the one you've probably seen. If your agent prepares a customer escalation, it shouldn't search five different systems from scratch
5:495 minutes, 49 secondsevery time. The system should already know to assemble customer context, entitlement, controlling policy, and prior history into a usable agent
5:565 minutes, 56 secondsbundle. Or if it's doing financial analysis, it shouldn't answer from whatever paragraph happens to sit closest to the query vector. It needs to know whether the source of truth is the
6:056 minutes, 5 secondsfiling, the governed table, the metric definition, the prior forecast, or the live dashboard. Those are five different answers. Noql is pine cones attempt to
6:146 minutes, 14 secondsmake retrieval carry the things that decide those answers to agents, right?
6:186 minutes, 18 secondsIt should carry intent and filters and access policy and provenence and response shape and confidence and budget. A vector database can power a part of that, but it doesn't define the
6:276 minutes, 27 secondswhole job anymore. And even Pine Cone is telling you that now. If you want more on what Pine Cone is actually delivering versus what they're saying they're delivering. I dove deep into that on
6:356 minutes, 35 secondsSubstack. I think that's one bet. The retrieval interface should carry more than similarity. But there's a sharper bet that's on the table in the same vein
6:446 minutes, 44 secondsand I want to talk about it even as we cover pine cone here. Right? So that's one bet. The retrieval interface should carry more than similarity. I think I agree with that. But there's a sharper
6:536 minutes, 53 secondsbet on the table that's distinct from pine cones that I want to cover next and that's page index. Page Index makes a stronger claim than Pine Cone does in
Chapter 6: Pinecone Nexus and the NoQL retrieval contract
7:027 minutes, 2 secondsthis space. They say a lot of documents should never be chunked in the first place because the structure of the document carries the meaning and when
7:107 minutes, 10 secondsyou flatten it into vectorized math chunks, you throw the meaning away. Take a financial filing. The risk factors section is not the management
7:177 minutes, 17 secondsdiscussion. The notes to financial statements are not the narrative summary. A table is not interchangeable with a paragraph. If you retrieve three
7:257 minutes, 25 secondssemantically similar chunks from that body of work, you might miss the part of the document that actually controls the answer because it lies in the structure,
7:327 minutes, 32 secondsnot in the semantics. Contracts are even worse here. A clause can look relevant to your query, but the definition
7:397 minutes, 39 secondssection can completely change what that clause means. A schedule can overwrite a general term. An exception can sit 40
7:477 minutes, 47 secondspages from the paragraph that triggers your search. So chunk retrieval finds text that looks and sounds right relative to your query while losing the legal structure that makes it correct.
7:587 minutes, 58 secondsSo let's walk through the page index answer to this. They build a hierarchical tree of the document like a table of contents with summaries on
8:058 minutes, 5 secondsevery single node. The model reasons through the tree to find the right section and there are no embeddings on the dock. There's no vector similarity
8:138 minutes, 13 secondsand they claim to hit 98.7% accuracy on a evaluation for finance called finance bench by using this tree
8:228 minutes, 22 secondsapproach to docs. The principle underneath page index is the thing you you should be remembering here. The retrieval unit needs to match the work
8:298 minutes, 29 secondsyou're doing and I think that's a very durable principle. The principle underneath this page index approach is the thing I want you to grab on to. What they're basically saying is the way you
8:388 minutes, 38 secondsretrieve memory needs to match the kind of work you do. So a chunk works for a simple FAQ, a section works for a
8:458 minutes, 45 secondsfiling, a table works for financial analysis, a customer record works for support, a graph neighborhood works for dependency reasoning, and a compiled
8:548 minutes, 54 secondsbrief works for a repeated workflow. If you pick the wrong kind of memory, the model has to compensate heavily and it
9:029 minutes, 2 secondswill end up trying to rebuild a bunch of things with expensive token costs to get there. And better embeddings in simple
9:109 minutes, 10 secondsrag approaches don't fix this. All they do is find more relevant text. And that's a very 2025 answer to the larger
Chapter 7: PageIndex and why some docs should never be chunked
9:189 minutes, 18 secondsquestion we're tackling here as agents deal with more and more different kinds of data. So that's the page index approach. Page index is basically saying
9:279 minutes, 27 secondswe need the structure in our documents to be part of the meaning of the answer and traditional approaches don't deal
9:359 minutes, 35 secondswith that. Let's jump to SAP next. Let's jump to SAP next. SAP announced a couple of acquisitions in this space that are
9:429 minutes, 42 secondsrelevant. The first is Dreamio. It has a lakehouse architecture, a semantic layer, a query federation across both
9:489 minutes, 48 secondsSAP and nonSAP systems. It has access controls and it has lineage. The second is Prior Labs. Prior Labs builds tabular
9:579 minutes, 57 secondsfoundation models. Their lead model, Tab PFN, got published in Nature magazine and SAP put more than a billion euros
10:0410 minutes, 4 secondsbehind both bets together. Now, these companies, of course, do not make a chatbot. SAP spent more than a billion
10:1110 minutes, 11 secondseuros on AI memory infrastructure, and none of it has to do with how we're powering or retrieving any of this with LLMs. Why did SAP think this memory
10:2010 minutes, 20 secondspiece was so significant? Because most companies don't store their most important knowledge in the kind of text or pros that rag is designed to solve
10:3010 minutes, 30 secondsfor with vector search. They store it in ERP systems and CRM and customer records and governed tables. A huge slice of
10:3710 minutes, 37 secondsenterprise knowledge is in that tabular structured data. And so the chatbot rag vector playbook of index a PDF and
10:4410 minutes, 44 secondsanswer it from a paragraph is just the wrong abstraction for most memory in that system. Right? In that world, rag
10:5210 minutes, 52 secondsdoesn't work and it's a terrible way to run business operations. If your agent needs a revenue number, the source of truth is the governed table in your
10:5910 minutes, 59 secondswarehouse with a specific metric. If it needs supplier risk, it's the supplier record plus the risk model. You're not getting that from an indirect source of
11:0811 minutes, 8 secondsknowledge and getting it correct. And so what they want to be, SAP wants to be the system that owns the data. And
11:1611 minutes, 16 secondsthat's what Dreamio gives them. It gives them governed access to business data across systems with permissions and lineage baked in. So for an enterprise
11:2411 minutes, 24 secondsagent, the agent now knows it's allowed to see the data, where it came from, how the metric was defined, and whether the answer is fit for the action it's about
11:3211 minutes, 32 secondsto take. When a procurement agent answers from the wrong source, the cost isn't just a bad paragraph in these kinds of operations. It's actually real
11:3911 minutes, 39 secondsmoney out the door. And companies are realizing that. Prior Labs is the second half of that bet, right? tabular foundation models exist because turning
11:4611 minutes, 46 secondsa spreadsheet into text and asking a language model to reason over it is just the wrong way to solve that problem.
11:5211 minutes, 52 secondsIt's the wrong abstraction. You can't reliably understand complicated stuff like churn risk and supplier risk and renewal forecasting from text derived
Chapter 8: SAP, Dremio, and Prior Labs on tabular memory
12:0012 minutesfrom spreadsheets. You need to be table native. SAP is saying agents need to reason over tables as tables. So if you
12:0712 minutes, 7 secondsput Dreamio and Prior Labs together, the bet is this. Agents need knowledge in the shape the business uses. Sometimes
12:1412 minutes, 14 secondsthat shape is a document. Sometimes it's a table. Sometimes it's a metric definition. Sometimes it's a workflow state. A serious knowledge layer
12:2212 minutes, 22 secondsrespects those shapes as core instead of trying to flatten everything out.
12:2612 minutes, 26 secondsThere's a fourth shape worth naming too because some agent work is just relational at core like which suppliers connect to which shipments or which
12:3412 minutes, 34 secondscustomers share a particular failure pattern or which incidents trace back to the same root cause. Those are graph questions mathematically and Microsoft's
12:4212 minutes, 42 secondsgraph rag is the most prominent attempt to handle them. It's expensive. The entity extraction isn't perfect yet and the graphs can go stale. But the reason
12:5012 minutes, 50 secondsit keeps coming back is that some knowledge is naturally relational and chunks don't carry it and neither do tables. So now you have at least four
12:5912 minutes, 59 secondsshapes the industry is racing to support. You have fuzzy pros. You have long structured documents. You have business data in tables. You have relationships and how they're handled in
13:0813 minutes, 8 secondsgraphs. The choice you're making isn't really database X versus Y. It's which of those shapes your agent needs to
13:1513 minutes, 15 secondshandle in the course of its work and how you assemble them effectively. Now, if you want to dive more on the SAP acquisitions and what they mean on
13:2213 minutes, 22 secondsenterprise data, I I go real deep on that in Substack, I think there's a whole lot to unpack on tabular data and tabular models. But one piece I want to
13:2913 minutes, 29 secondscover before we sort of tie off this video is if model context windows keep growing, can't we just hand the model
13:3713 minutes, 37 secondsall the material and stop worrying about retrieval? Do I have to deal with this?
13:4013 minutes, 40 secondsNate, larger context does help. It does not fix this problem. A bigger window gives the model a lot more room to work, but it doesn't decide what belongs in
13:4913 minutes, 49 secondsthat room. It doesn't mark which source is authoritative. It doesn't enforce permissions. It doesn't preserve document hierarchy. It doesn't distinguish memory. the user confirmed
13:5813 minutes, 58 secondsfrom memory the model inferred. If you've ever heard the phrase context rot, that's what we're talking about here. Chroma has published research showing model performance degrades as
14:0714 minutes, 7 secondsthe context gets larger and more cluttered. The problem isn't only whether the right answer is somewhere in there, right? It's whether the right
14:1414 minutes, 14 secondsanswer is presented in a form that the model can actually use reliably. If you dump 20 docs into the window and the model might have access to the right
14:2214 minutes, 22 secondsfact, it may still give you the wrong emphasis on that fact. It may still blend sources. It may treat stale and current as equal. So the goal for
Chapter 9: Microsoft GraphRAG and relational knowledge
14:3114 minutes, 31 secondsproduction agents is absolutely not maximum context. It is appropriate context. Chroma's full context research
14:3814 minutes, 38 secondsis also on the substack if you want to go deeper there. But here's what I would do if I were building an agent today.
14:4414 minutes, 44 secondsOne, don't pick a database first. Pick the contract your agent will have with the data first. The default move for a
14:5214 minutes, 52 secondslot of builders is to start vendor first, right? Pine Cone, Weev8, Neo4j, Chroma, somebody, and then you figure out what to store in that data. That's
15:0015 minutesbackwards. Like, don't do that. It's why so many agent projects get into trouble a few months in. The database is determinative of the shape of what you
15:0915 minutes, 9 secondsretrieve. If you pick the database before you know what your agent needs to do and receive data on, you're constraining the agent to whatever the
15:1615 minutes, 16 secondsdatabase is good at. The contract needs to come first. The contract is the answer to a clear question. What does
15:2315 minutes, 23 secondsthis agent need to receive in what form to do its job reliably? Number two, write down the bundle your agent needs, not relevant context. That's very vague.
15:3315 minutes, 33 secondsWrite down the specific thing the agent needs. If it's a customer support refund agent, write it out. It needs the customer record. It needs the plan. It needs the region. It needs the product version. It needs the purchase history.
15:4415 minutes, 44 secondsIt needs the applicable refund policy, the refund threshold, any prior exceptions for this customer, the current ticket, the approved response language, whether the agent is allowed
Chapter 10: Why bigger context windows don't fix this
15:5215 minutes, 52 secondsto issue the refund or only draft a recommendation. All of that together, that's a bundle. Every field on it represents a choice you've made. Where
16:0016 minutesdoes this come from? Who's allowed to see it? Is the source authoritative or just relevant? How fresh does it need to be? What happens if it's missing? When
16:0716 minutes, 7 secondsyou write that bundle out, three things happen. You realize most of the fields don't live in one system. You realize some of them need to be governed, not
16:1416 minutes, 14 secondsjust retrieved. And you realize that the work your agent actually does is assembling and reasoning over the bundle, not just searching for docs.
16:2216 minutes, 22 secondsThree, choose the primitives that deliver that bundle. Now, you can go shopping here. If your bundle is mostly pros, you need vector search and
16:3016 minutes, 30 secondsprobably document trees. If it's mostly governed business data, you'll need a semantic layer and also tabular reasoning. If it's relational, you're going to need a graph. Most real agents
16:3916 minutes, 39 secondsneed a mix, and that's fine. The point is you're choosing primitives because they deliver your bundle, not because they trended on LinkedIn last week.
16:4716 minutes, 47 secondsRight? So, Pine Cone, Page Index, Dreo, Graph Rag, they're not competing for the same slot. They're each solving for one
16:5416 minutes, 54 secondsof these underlying shapes. Once you know the contract your agent needs to have for the work, the choice between them stops being a debate and starts feeling like a thoughtful engineering decision, which is where you want to be.
Chapter 11: Three steps if you're building an agent today
17:0417 minutes, 4 secondsNow, a quick word on failure modes because there are no free wins here.
17:0817 minutes, 8 secondsCompiled bundles can go stale. So if you compile them ahead of time, you have risk. Graphs can encode bad relationships if you're not careful about underlying data. Document parsers
17:1617 minutes, 16 secondscan miss tables. Semantic layers can get politically contested because in most companies, the source of truth is a bit of an organizational fight. And so
17:2417 minutes, 24 secondsmemory can accumulate bad conclusions if you're not careful. And depending on how you handle multiple agent runs, you can get into a situation where the agent can
17:3117 minutes, 31 secondsstore its own inference or previous run as a confirmed fact, which could in turn influence future runs to get quietly worse. You can also overbuild the
17:4017 minutes, 40 secondssystem, right? A simple help center assistant doesn't need graph rag plus a document tree plus a semantic layer plus a memory system. Just pick the simplest
17:4717 minutes, 47 secondsnumber of layers your agent needs and no more than that. The cheapest place to learn what you need is your own work logs. How many retrieval calls happen
17:5517 minutes, 55 secondsbefore useful work starts for your agent today? How often is the agent opening the same sources? How much of your token budget is just sucking in that raw
18:0318 minutes, 3 secondscontext? How how often the agent asks the user for something the system already has is something you should be tracking or how often the next run rediscovers what the prior run learned.
18:1318 minutes, 13 secondsYou should be able to track that too.
18:1418 minutes, 14 secondsThe pattern is in your existing agent runs. If you look, if you zoom back out here, the story of the memory era is
18:2318 minutes, 23 secondsthat the infrastructure layer is racing to catch up because production agents hit the world in December and all of our
18:3118 minutes, 31 secondsmemory systems were built for the chatbot era. And every serious vendor knows that Pine Cone would not be reshaping their interface if that weren't true. SAP wouldn't be writing
18:4018 minutes, 40 secondsbillion euro checks if that weren't true. Google and Cloudflare and Microsoft wouldn't be in this space if they didn't see it as being critically
18:4818 minutes, 48 secondsnecessary to long-term agentic success for enterprises. The teams that win in this memory battle are not going to be
18:5518 minutes, 55 secondsthe ones that try and keep up with the most fashionable retrieval. They're going to be the ones who took the time to think about what their agent actually
Chapter 12: Failure modes and where to look in your own logs
19:0419 minutes, 4 secondsneeds before they went on a shopping spree. So, if you're building, don't pick that database first. Instead, write down what your agent needs to do the
19:1119 minutes, 11 secondswork. Think about the shape that data needs to be in to be effective and how you can efficiently deliver it. I go into all of this in a ton more detail on
19:1919 minutes, 19 secondsSubstack, including the full retrieval contract checklist and four worked out bundles for support and legal and finance and code review agents so you
19:2719 minutes, 27 secondscan get some examples to work from. The memory wars are something that I get really passionate about because if you don't understand how your agent
19:3619 minutes, 36 secondsretrieves and handles memory, you're essentially trusting some other company's vision of your own data in your own systems and saying that's probably going to work for my agents.
19:4519 minutes, 45 secondsI'll just sign a check or that's probably going to work. I'll just make my developers build it. That's not a solution. And the workflows you're trying to deliver and the customers
19:5319 minutes, 53 secondsyou're trying to serve deserve more effective agent runs. So, if you're interested in diving deeper, check it out. Subscribe if you want to keep
20:0120 minutes, 1 secondgetting much sharper on infrastructure choices that matter because that's I'm super passionate about that. Happy building. Choose.

Sync to video time
