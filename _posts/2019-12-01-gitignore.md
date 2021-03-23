---
layout: post
title: Easy to create .gitignore for the dotnet devs
---

**TL;DR** Starting from .Net Core 3.0, you can take advantage of the build in the .Net framework gitignore file template just by typing `dotnet new gitignore` in your terminal.

---------

I assume you are familiar with the idea of a gitignore file. In short words, a .gitignore file is a plain text file in which each line contains a pattern for files or directories to be ignored by the git.

I am a dotnet developer. I don't know if you had this problem, but every time I wanted to create a new repository on the git repository, I lacked the build-in .gitignore file. [Russ Hammett](https://dev.to/kritner) made me realize that the GitHub platform has prepared a gititnore file. Interestingly it isn't named C#, CSharp, dotnet. Nope, none of those things. It's called VisualStudio. Quite obvious.Once again thanks Russ.

![Repo creation](https://raw.githubusercontent.com/rafalpienkowski/resources/master/gitignore/repo_vs.png)

I like to have a tidy repository without `/obj/*` and `/bin/*` objects, or other IDE specific things included. Storing such files is both messy and could be dangerous. For instance, you could forget to clean from those artifacts your super-secret password.

One of the possible solutions was to copy a .gitignore file from one repository to another. Not a very elegant but effective solution. Another option is to use sites like https://www.gitignore.io/. 

Today that has changed. The .Net Core 3.0 SDK gives us a hand.  I bet you now dotnet new command. It has a lot of parameters like *mvc*, *webapp*, or *webapi*. Starting from SDK 3.0, there is a new parameter **gitignore**, which creates a dotnet gitignore file.

```sh
dotnet new gitignore
```

The created file is a good starting point. It contains rules for the most popular IDEs like Visual Studio, Rider, Visual Studio Code, and tools like NCrunch, R#, Visual Studio profiler, or StyleCop. Of course, you can add your own rules to it.

There is still missing documentation on the [docs Microsoft site](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new), but you can check it on yourself by typing in your command prompt:

```sh
dotnet new
```

and going through the documentation which is attached there. Here is 

![terminal output](https://raw.githubusercontent.com/rafalpienkowski/resources/master/gitignore/terminal.png)

I think that the online documentation will be completed soon. Meanwhile, you can take advantage of the build-in gitignore feature, and you don't have to copy the file from other repositories.

P.S. Don't forget about other dotnet cli commands and options.

Cheers!
