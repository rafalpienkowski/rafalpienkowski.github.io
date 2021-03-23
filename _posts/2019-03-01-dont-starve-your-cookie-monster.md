---
layout: post
title: Don't starve your Cookie Monster
---

![Cookie Monster](https://media.giphy.com/media/9D59CDcFYY9zakkTZe/giphy.gif)

First of all I want to say a few words about the image above. I bet almost all of you know a [Muppet](https://en.wikipedia.org/wiki/The_Muppets) called [Cookie Monster](https://en.wikipedia.org/wiki/Cookie_Monster). As well as Cookie Monster doesn't like when there are no cookies, our threads don't like to be blocked.

Work with threads isn't simple. That is quite obvious for everyone who tried it. One of a vast number of issues is an exclusive lock of a given resource which provides us thread synchronization.

![synchronize](https://media.giphy.com/media/69FpUKMjZ1er2lc5AZ/giphy.gif)

The easiest way to synchronize the access to a resource is to use the [*lock*](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/lock-statement) statement on a guard variable. Just like the example below:

```csharp
var guard = new object();
lock(guard)
{
    // access the critical path
}
```

If you think that harmless *lock* couldn't be dangerous, you are wrong. This simple and it might seem an easy way to the threads synchronization may end with [**a DEADLOCK**](https://en.wikipedia.org/wiki/Deadlock).

![deadlock](https://media.giphy.com/media/3o7TKqnMdPFGtzD6zm/giphy.gif)

You may ask how this is possible. To understand the problem, we need to dive deeper and understand how the compiler process the code given above. 

```csharp
var guard = new object();
try
{
    Monitor.Enter(guard);
    // access the critical path
}
finally
{
    Monitor.Exit(guard);
}
```

The lock statement has been replaced with the [*Monitor.Enter()*](https://docs.microsoft.com/en-us/dotnet/api/system.threading.monitor.enter?view=netframework-4.7.2) method. How does this method work? A thread requests the lock on a resource and waits until the access will be obtained. How this can produce a deadlock. Let's take a look at this example of two threads synchronization on two guard variables.
- Thread A locks guard X
- Thread B locks guard Y
- Thread A wants to lock guard Y, but guard Y is locked by thread B
- Thread B wants to lock guard X, but thread A locks guard X


Our threads A and B are waiting and waiting until the end of the world just as Cookie Monster is sadly waiting for cookies.
![waiting](https://media.giphy.com/media/o5oLImoQgGsKY/giphy.gif)


We can prevent this situation by merely using another method from [*the Monitor *](https://docs.microsoft.com/en-us/dotnet/api/system.threading.monitor?view=netframework-4.7.2) class. The method is named [*TryEnter*](https://docs.microsoft.com/en-us/dotnet/api/system.threading.monitor.tryenter?view=netframework-4.7.2). Why it's so special? It could take as an argument the specified amount of time indicating how long the attempts will be repeated. After the given time thread will proceed further — no more deadlocks. 

```csharp
var guard = new object();
try
{
    Monitor.TryEnter(guard, TimeSpan.FromSeconds(15));
    // access the critical path
}
finally
{
    Monitor.Exit(guard);
}
```

A good practice is to ensure that the lock is released by calling the [*Monitor.Exit*](https://docs.microsoft.com/en-us/dotnet/api/system.threading.monitor.exit?view=netframework-4.7.2) method on given guard.

I know that the lock statement is shorter than using explicit Monitor.TryEnter method, but the effort devoted to writing some extra lines of code could turn to you on a Sunday evening during the production deploy.

To sum up.

> Avoid using the lock statement and start using ***Monitor.TryEnter***. Your threads will be grateful.


![Thanks](https://media.giphy.com/media/lD76yTC5zxZPG/giphy.gif)

All the gifs came from [giphy.com](https://giphy.com/).
