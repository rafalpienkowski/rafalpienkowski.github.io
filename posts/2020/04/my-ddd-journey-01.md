---
layout: default
---

## Introduction

For some time, I have an interest in the Domain-Driven Desing. In my case, it didn't come from DDD's popularity nor something called CV-Driven development. Trust me or not, I want to write quality software, and I believe that DDD is the right (but the only one) technique to achieve that.

From some time, I want to write something about this technique. I warn you that I don't consider myself as a DDD expert. There are a lot of smarter than me in this business. After all, I decided to describe how is my adventure with DDD looks like. I want to show my subjective point of view. I want to share things which caused me problems, my failures and some wins. I could be pleasant if I could share your experience with me. It would be rapt if I inspire you or if you could take a lesson from my failures. In the end, Domain-Driven Design is a highly effective technique. In my opinion it worth to make an effort and get familiar with it.

I think that it's not so hard to catch the main idea of DDD.  I like the definition of DDD which I have written by  [Margaret Rouse](https://whatis.techtarget.com/definition/domain-driven-design):

> *"Domain-driven design (DDD) is a software development philosophy centered around the domain, or sphere of knowledge, of those that use it. The approach enables the development of software that is focused on the complex requirements of those that need it and doesn't waste effort on anything unneeded. The clients of domain-driven design are often enterprise-level businesses."*

As you can see, it doesn't seem to be a big deal. In my case, understanding the problem and practising were two different things.
For a long time, I've felt as easy explaining to my colleagues why they should take advantage of DDD, how could it have a salutary effect of their code. As you can probably gather, that didn't equal that I fully understood the DDD itself. Of course, I knew basic concepts, building blocks but joining all dots together is a separate thing.

## Books are a solid starting point.

I prefer to learn from books. Especially I like the fact that I can quickly come back to them when I face some problem. There are many publications about DDD. I obliged to start with the canon of literature: Eric Evans "blue book" [Domain-Driven Design: Tackling Complexity in the Heart of Software](https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215).

![Domain-Driven Design: Tackling Complexity in the Heart of Software](https://raw.githubusercontent.com/rafalpienkowski/resources/master/my-ddd-journey/evans_ddd.png)

That work was groundbreaking. By this position, Eric Evans spread the idea of Domain-Driven Desing. I like the way how building blocks are described there. After the lecture, you should have a solid foundation about them. In my opinion, the examples used to present the application of DDD are quite complicated. Neither printed circuit board nor shipping is not a piece of cake. A reader has to keep in mind that the book's first edition was in 2003. Although the idea didn't change since that time, in later years, new techniques like Event Sourcing came into play. The last thing, which even Evans admitted to, is the composition of chapters. The book starts with tactical DDD, and that leads to a situation where readers don't pay enough attention to the strategic part of DDD. In the end, we have a state when you know building block, but even if you use them in your work, they don't bring any value to the whole solution. Please don't be such a reader. Fortunately, the next position is free of this drawback.

Vaughn Vernon's "red book" [Implementing Domain-Driven Design](https://www.amazon.com/Implementing-Domain-Driven-Design-Vaughn-Vernon/dp/0321834577) is, in my opinion, the book that should be your first lecture. 

![Implementing Domain-Driven Design](https://raw.githubusercontent.com/rafalpienkowski/resources/master/my-ddd-journey/vernon_ddd.jpg)

It's more up to date (released in 2013). The agile project domain is approachable.  I think it's more natural to developers and requires less effort to understand.  Vaughn focuses more on strategic design. The book shows how vital strategic DDD is. Bounded contexts and integrations between them widely described. There is an excellent chapter dedicated to Domain Events. At the end of the title, in the appendix, we can find a section devoted to Event Sourcing. I think Implementing Domain-Driven Design, should be at the top of your reading list if you plan to start dive into DDD.

Vaughn Vernon also wrote the [Domain Driven Design Distilled](https://www.amazon.com/Domain-Driven-Design-Distilled-Vaughn-Vernon/dp/0134434420). This short title (about 170 pages) purpose was to show the basics of DDD. In my opinion, don't waste your time and money on it. 

Last time I read an excellent book by Alexey Zimarev [Hands-On Domain-Driven Design with .NET Core: Tackling complexity in the heart of software by putting DDD principles into practice](https://www.amazon.com/Hands-Domain-Driven-Design-NET/dp/1788834097). 

![Hands-On Domain-Driven Design](https://raw.githubusercontent.com/rafalpienkowski/resources/master/my-ddd-journey/zimarev_ddd.jpeg)

This title contains code examples written in C#. I like the way Alexey introduce how to combine DDD with Event Sourcing. I think that is quite a hot topic. First of all, almost every system we try to implement is based on events. Besides that, ES solves the issue related to storing the aggregate roots and entities. It is not a simple task. If you want to save an object into a database, you have to expose its data. That requires the usage of getters, which is in contradiction to the exposing behaviour and hiding structure principle. But there's no such thing as a free lunch. ES requires you to change your mind. You store a sequence of events which allow you to recreate the object, but unlike way you may use to there is the current state of an object serialized in a table. You can take advantage of ES, but please keep in mind that this is connected with higher entry threshold for your colleagues.
BTW "Hands-On Domain-Driven Design with .NET Core" has a dedicated [GitHub repository](https://github.com/PacktPublishing/Hands-On-Domain-Driven-Design-with-.NET-Core). Although all samples are in C#, I would recommend this position to everyone.

In the next course I am going to read:
[Patterns, Principles, and Practices of Domain-Driven Design
](https://www.amazon.com/Patterns-Principles-Practices-Domain-Driven-Design/dp/1118714709) and 
[Domain-Driven Design: The First 15 Years](https://leanpub.com/ddd_first_15_years). After the lecture, I will be able to tell you something about them.

![To read](https://raw.githubusercontent.com/rafalpienkowski/resources/master/my-ddd-journey/to_read.jpg)

To sum up, both books give strong basics. Don't kid yourself that after the lecture of them, you become a DDD ninja. You won't. I advise rereading those books after some time once again. If you have some practical knowledge, they will gain even more value for you.

### Not only books

![Online](https://raw.githubusercontent.com/rafalpienkowski/resources/master/my-ddd-journey/undraw_social_friends_175.png)

Of course, there are other ways of learning, like audiobooks or video recordings from conferences. I don't like audiobooks, but I watched a few of them. In my opinion, that is a good starting point if you consider if DDD is for you. You invest a few hours and gain a quite extensive point of view.

Another alternative is e-learning. For example, there is a whole DDD path on the [Pluralsigh](https://www.pluralsight.com/paths/domain-driven-design). I prefer to learn from books. I didn't take part in any of online course about DDD, so I'm not in a position to tell you anything significant about it. If you have some experience with that form of education, or could you share a helpful online course, please write about it in a comment. 
 
## Simple domain

After we've gained the solid theory background, it's the time to get to know our domain. Here is the story which stands behind our system.

![Story](https://raw.githubusercontent.com/rafalpienkowski/resources/master/my-ddd-journey/undraw_reading_list_175.png)

> *"Our company is responsible for supplying the configuration to the clients. First, an operator creates a draft. A draft could go live immediately. It could be scheduled to become go live in the future.  That configuration we called planned. Live could be archived. An archive is the final step of each configuration's live cycle.*

> *"Our system should be aware of the author and date when each configuration's stage was reached. Their first names, with the maximum length of 50 characters, enable to identify the authors. Our system allows storing configuration data limited to 250 characters. Our clients don't care about the date's precision. Information about hours, minutes and seconds is useless for them."*

I'm aware that the presented story is a distilled version of a real-life scenario. I bet it wouldn't look like when you start working with your business. It usually takes days or weeks to produce a similar description. We don't have that much time.

To make this easier below is an image which shows the live cycle of configuration made with [Miro](https://miro.com/). In my opinion, Miro is a great tool. It's suitable for the documentation. It also enables life cooperation on documents. Miro is a recommendable platform.

![Workflow](https://raw.githubusercontent.com/rafalpienkowski/resources/master/my-ddd-journey/workflow_small.jpg)


## The shared understanding

![Converstation](https://raw.githubusercontent.com/rafalpienkowski/resources/master/my-ddd-journey/undraw_conversation_175.png)

First of all, we need to build a shared understanding of our business. Without proper comprehension, we won't be able to write good software. There is no better way to learn how to business works than by talking to business people. Quite obvious, don't you think. Based on my experience talking is way, way better form of communication than the written form like documentation, diagrams etc. I don't say that documents and charts are wrong. They are handy to build understanding. 

We should focus on the language we use. It shortens the distance between domain experts and developers is the foundation of DDD. The best way to achieve this is to talk to each other in the same language. Eric Evans called it  ["Ubiquitous language"](https://martinfowler.com/bliki/UbiquitousLanguage.html). Using the same language avoids misunderstanding. Reflecting business terms in code makes it simpler to maintain. We can forget about translating from a "technical jargon" to a "business terms". Forget about enums, flags, statuses etc. Name those objects like business people are doing on every day. 


What I've forgotten is that langue is **ubiquitous**. It means that not only a business person is allowed to add words to it. It's perfectly fine if a developer proposes a new term. Still, business is the most important, but we as technical people could also help and add throw in one's two cents.

### Event Storming

![Event Storming](https://raw.githubusercontent.com/rafalpienkowski/resources/master/my-ddd-journey/event_storming_small.jpeg)

Extracting the domain experts language is challenging. There are many technics which make this process more peaceful. Recently the most popular is [Event Storming](https://www.eventstorming.com/) invented by Alberto Brandolini. You could read Alberto's unfinished book. Don't worry, Alberto follow the [Pareto Principle](https://en.wikipedia.org/wiki/Pareto_principle), and the current content of his book is enough to get the idea and perform a workshop. Of course, facilitating such a workshop requires skills and knowledge, but Rome wasn't built in a day. Also, Mariusz Gil has an excellent [repository](https://github.com/mariuszgil/awesome-eventstorming) dedicated to the topic. This repo is an Event Storming in a nutshell with many materials and links to external articles. 
I read Alberto's book and took part in a 3-day workshop only about Event Storming technique. I conducted some event storming sessions. My experience is that the most interested in facilitating are developers. It was taff to convince business people to take part in it.  I talked with many developers, and they said that it's a common issue that business doesn't trust us. "Busines," thinks that this is another fancy developer's pet toy, which doesn't bring any value to them. 

## Focus on strategy, a tactic will come by itself

Sun Tzu great Chinese general and author of the book: "The Art of War" said:

![Sun Tzu](https://raw.githubusercontent.com/rafalpienkowski/resources/master/my-ddd-journey/sun_tzu_small.jpg)

I bring up this saying to highlight how vital strategic DDD is. We are familiar with our business domain. However, it's description is a little bit shallow. I did it intentionally because I saw similar stories many times, and I think that they omit the most crucial information. In my opinion, we necessarily need to find out functional and non-functional requirements. Such insights are essential to build full understanding and consciously decide about the architecture of our system. 

For instance, we could assume that the live configurations should have such features like high availability and low latency. We don't have to care about writes, but reads are crucial. Let's face it, code which is written concerning the DDD rules could not be the best solution. DDD is best when we talk about write operations. DDD ends with a system which is easy to maintain and extend.
On the other hand, it is not optimized for fast reads. Instead of instantiating repository, which loads our the aggregate root, it would be more efficient just to perform a simple SQL query. Maybe the classic relational database wouldn't meet the performance expectations, and you would have to take advantage of Redis with a denormalized data model. BTW, did you think about [Command Query Responsibility Segregation CQRS](https://martinfowler.com/bliki/CQRS.html)? If your answer is yes, that's good for you. Commands work perfectly with DDD. I'm not going into details about CQRS. Of course, feel free to explore it on our own.

![Creative thinking](https://raw.githubusercontent.com/rafalpienkowski/resources/master/my-ddd-journey/undraw_creative_thinking_175.png)

Let's take a closer look at the second example. The business comes to us with a new feature request. The system has to support media attachments like images and media files. That doesn't mean that we should store blob in our domain model. Depending on the business needs, there could exist an invariant saying that regular customers are allowed to add three images, while enterprise customers are can add up to five files. We could add an attachment's identifier to our entity. The module responsible for storing and serving files is a different context. Probably we wouldn't need DDD there. A simple CRUD application will be good enough. 

That brings me to a quite common misconception that DDD everywhere. I made that mistake a couple of times. I learnt about DDD, and I saw aggregate roots, entities and value objects everywhere. I'm not saying that code written concerning DDD is slower. No. It doesn't mean any such thing, but undeniably to write this code you need more of your time. That is a big waste. Instead of writing the code which probably will never be changed, you could focus on the crucial part of your's company areas—the areas which bring money to your company and also to you. I've heard that DDD relates to maximum ten-fifteen percent of the whole system.

![Iterative](https://raw.githubusercontent.com/rafalpienkowski/resources/master/my-ddd-journey/undraw_synchronize_175.png)

Last but not least, modelling an aggregate isn't a straightforward task. There is nothing to cheat that you will model the domain in the final shape on the first try. Domain modelling is an iterative process. My advice is not only to focus on the model's sketch on the whiteboard. Recalling the onion architecture domain model is placed in the middle without any dependencies. This implicates that writing some sample code, for instance, some unit tests, is an easy task. We could quickly validate our model and make corrections to it. In my opinion, nighter UI nor an API is required for that. That causes that any changes concern only on a small independent piece of code.

I think that I stop for now. Firstly I want that strategic DDD stick in your mind. Please think about it and don't make my failures. Secondly, it isn't my intention to bore you to death. I plan to focus more on the code itself in the next part of my story. I hope you will be with me.

I will be delighted if you share a story about your DDD journey. 

Pictures come from [Undraw](https://undraw.co/).

___    

## [Back](/)