---
layout: post
title: Chain as a Service (CaaS)
---

Design patterns are very important in daily work of a software developer. At least I think so. I assume that many of you know chain of responsibility design pattern. 

---

If you don't know this design pattern I advise you to read one of those articles before you read further this article:

- [dotfactory.com](http://www.dofactory.com/net/chain-of-responsibility-design-pattern)
- [oodesign.com](http://www.oodesign.com/chain-of-responsibility-pattern.html)
- [sourcemaking.com](https://sourcemaking.com/design_patterns/chain_of_responsibility)
- [springframework.guru](https://springframework.guru/gang-of-four-design-patterns/chain-of-responsibility-pattern/)
- [blackwasp.co.uk](http://www.blackwasp.co.uk/ChainOfResponsibility.aspx)

or you can find article or book about this design pattern on your own.

---

So now everyone knows chain of responsibility (CoR) design pattern so we can back to main aim of this article. As we know CoR contains series of handlers which are doing their job on incoming requests. After handler's job is done request is passed to its successor. That scenario can be illustrated with an image of a chain:

![Chain](https://raw.githubusercontent.com/rafalpienkowski/resources/master/chain-as-a-service/chain1.png)

So let go back to article's title. Chain as a Service (CaaS). I'm pretty sure that every developer needed at least once to create in career a service. I've a question to you: Omitting service purpose do you consider to create a service with CoR design pattern? If not I'll show you something. Let's take our chain from previous image and let's connect first chain link with last one. We'll recive something like that:

![Chain](https://raw.githubusercontent.com/rafalpienkowski/resources/master/chain-as-a-service/chain2.png)

Isn't that simple? With that image in back of my head I've created some example [project on github](https://github.com/rafalpienkowski/chain-as-a-service/blob/master/ChainAsAService.Components/ServiceFactory.cs). It's written in .Net Core 2.0. Of course you can download it and play with it on your own.

I've implemented 3 handlers:
- [HelloWorldHandler](https://github.com/rafalpienkowski/chain-as-a-service/blob/master/ChainAsAService.Components/HelloWorldHandler.cs)
    - which returns "Hello world! to the console
- [DateTimeHandler](https://github.com/rafalpienkowski/chain-as-a-service/blob/master/ChainAsAService.Components/DateTimeHandler.cs)
    - which returns current date and time to the console
- [WaiterHandler](https://github.com/rafalpienkowski/chain-as-a-service/blob/master/ChainAsAService.Components/WaiterHandler.cs)
    - which freezes  application for one second

I've created a [ServiceFactory](https://github.com/rafalpienkowski/chain-as-a-service/blob/master/ChainAsAService.Components/ServiceFactory.cs) class which implements [IHandlerFactory](https://github.com/rafalpienkowski/chain-as-a-service/blob/master/ChainAsAService.Core/IHandlerFactory.cs) interface and produces my simple service. My service consist of:

![Service](https://raw.githubusercontent.com/rafalpienkowski/resources/master/chain-as-a-service/service.png)


and output from application looks like:

```sh
Hello world!
Current date and time: 16.11.2017 17:18:12
Hello world!
Current date and time: 16.11.2017 17:18:14
Hello world!
Current date and time: 16.11.2017 17:18:16
```

I hope this example will encourage you to more frequent use chain of responsibility design pattern. I would be honored if you will build a service in a way I presented. 

I hope you enjoy this article. Your feedback will be extremely valuable to me.

### Links:
---
- [Chain icons](http://clipart-library.com/clipart/pi7rL4AMT.htm)
