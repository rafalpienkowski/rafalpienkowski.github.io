---
layout: default
---

# Poor man's dotnet solution setup

Some time ago I started my journey into a Linux with dotnet Core. 

Initially, I planned to describe how to set up a working solution, but I've found [an article](https://dev.to/ruidfigueiredo/aspnet-core-development-in-linux-fge)  about this here on dev.to. In my opinion. [Rui](https://dev.to/ruidfigueiredo) covers almost all important things which I had planned to describe. If you don't know how to start ASP.NET Core Development in Linux, I encourage to read his article. Well done Rui!

Because I have nothing to add in that subject, I've decided to focus on another one. In my [previous article](https://dev.to/rafalpienkowski/a-net-man-in-linux-world-i66) some of you've suggested me to use [Jetbrain's Rider IDE](https://www.jetbrains.com/rider/). Maybe in the future, I'll buy it, especially if I decide to switch from Windows to Linux/iOS. I think that in such case is reasonable to spend about 350$ for an IDE. For now, for my side projects, I'm going to focus on VS Code. 

The thing which made me crazy was a project initialization. I fed up with continuous typing of the same command-line commands to set up a new solution. Like every developer, I'm a lazy person.

![Lazy](https://media.giphy.com/media/VjWNQMfCIHxS0/giphy.gif)

To avoid doing this boring stuff over and over again, I've decided to write a bash script which will do all that tedious staff instead of me. The source code of it could be found on my [GitHub repo](https://github.com/rafalpienkowski/bash-extensions).

This script creates a basic solution's folder structure. It initializes main project and dedicated test project. Created test project contains the reference to the main project. It has also referenced two advantageous (at least in my opinion) NuGet packages: [FluentAssertions](https://fluentassertions.com) and [Moq](https://github.com/Moq/moq4/wiki/Quickstart). It creates sln file which could be beneficial for devs which plan to open the solution via full Visual Studio. In the end, Visual Studio Code will be opened.

Usage: 
```
dotnet-solution [solution-name] [main-project-name] <<template>>
```

The template is passed to the [dotnet new] command. It will be used to create the new dotnet project based on it. More about templates you can be found under this [link](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new).

Example: 

```
dotnet-solution adventure-works AdventureWorks.Common classlib
```

Solution structure which will be created by the example above. I've intentionally omitted some meaningless folders.

```
+-- adventure-works
|   +-- src
|       +-- AdventureWorks.Common
|       |   +-- Class1.cs
|       |   +-- AdventureWorks.Common.csproj
|   +-- test
|       +-- AdventureWorks.Common.Tests
|       |   +-- UnitTest1.cs
|       |   +-- AdventureWorks.Common.Tests.csproj
+-- adventure-works.sln
```

For those who are not familiar with Linux/Unix systems, to add a specific extension to your bash shell you need:
- download it to your machine
- copy to /usr/bin catalog (admin rights will be required)
- make it executable by _chmod_ command (admin rights will be required)
```
    chmod +x dotnet-solution
```

Feel free to copy, use and modify those scripts. I'm also open to all your suggestions and propositions. Please keep in mind that was my first steps in bash scripting. I hope it can be handy for you.

___    

## [Back](/)