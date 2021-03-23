---
layout: post
title: The hidden value of the Value Object
---

# Introduction

After my lecture on Vaughn Vernon's "Implementing Domain-Driven Design.", I've decided to write a post which will be connected with DDD and draw attention to the underestimated Value Objects. In my experience, developers are abusing Entities in their projects. Very often that behavior ends with an occurrence of many anemic domain models without or with little business logic. In my opinion, some of the anemic domain models could be quickly transformed into the Value Objects.

_Note: All examples are written in C#, and they are using newest C# syntax. I hope they would be easy to understand also for developers who are using different languages._


## Example:

![Car](https://raw.githubusercontent.com/rafalpienkowski/resources/master/hidden-value-of-the-value-object/background.png)

Let's start with the simple example of a Car entity like in the code snippet below.

```csharp
public class Car
{
    /* Properties */
    public string Color { get; set; }
    public bool Metallic { get; set; }
	
    public string FuelType { get; set; }
    public int EngineCapacity { get; set; }
    { ... }

    /* Methods */
    public void Drive(int distance) { ... }
    { ... }
}
```

We will focus on properties related to car's color. I mean Color and Metallic property. For simplification, color is represented by string type.

# Characteristic of the Value Object:

## 1) Measures, quantifies or describes the subject of a domain

In our example, `Color` and `Metallic` are the best candidates for the Value object.  Both are describing the look of the vehicle.  So extract the new class:

```csharp
public class Color
{
    public string Hue { get; set; }
    public bool Metallic { get; set; }
}
```

Whenever `Hue` or `Metallic` changes we receive a new color, so let's go to the next point.

## 2) Is immutable

Immutability means that object state cannot be changed after it's initialization. In Java or C# this could be achieved by passing all parameters to the constructor of a value object. Based on the values of parameters state of the object will be set up. Of course based on values some additional properties could be calculated. 
_Notice:_ The object itself can't call property setters either by the public, nor the private methods. This is forbidden.

Let's enhance our example according to previous thoughts.

```csharp
public class Color
{
    public Color(string hue, bool metallic)
    {
        Hue = hue;
        Metallic = metallic;
        if (hue == "white" && !metallic)
        {
            BasicPallete = true;
        }
     }

    public string Hue { get; }
    public bool Metallic { get; }
    public bool BasicPallete { get; }
}
```

In the example above we've calculated the `BasicPallete` property. For example, it could influence a car's price calculation.

## 3) Composes linked attribute values into the integral unit

This means that all properties are bounded, and each provides the crucial part of the information which describes the whole value of the object. Individual property value doesn't provide comprehensive information about the object. In our case knowledge about that if a color is metallic or not doesn't give us information about its hue. The same situation is when we know hue, but we don't know if it's metallic or not.

> Worth is a perfect example cited often by this point. Let's take 100 USD as an example. Currency and amount are linked together. Let's imagine that someone has changed the currency from USD to MXN (Mexican Peso) in our object. That change has the significant impact. 100 MXN is worth approximately 5.25 USD. Oneone wants to be a victim of such a small change.

## 4) Is replaceable in the situation when the measurement changes

In our case car is an entity and color is a value object in our domain. Someday we decide to change the color of our car. Let's say we've bought a green non-metallic vehicle, but after a few years, we want to have a green metallic one. We cannot just add metallic gloss to existing painting. We need to repaint it with the new green metallic paint.

```
Color color = new Color("green", false);
//color.Metallic = true;  -> This is not allowed

color = new Color("green", true);
```

## 5) Could be compared with other value objects

In languages like C# when we try to compare two objects [by default](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/equality-comparisons), the comparison covers the location in memory of two objects (called [Reference Equality](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/how-to-test-for-reference-equality-identity)). Two objects can have the same property values, but the will not be equal. This is the wrong assumption regarding the Value Objects.  In that case, we need to have equality of given type and all property values (called [Value Equality](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/how-to-test-for-reference-equality-identity)). 

According to our example, two colors are the same if they have the same hue and are metallic or not. Two cars which are green and metallic have the same color. 

So let enhance our class and implement the Value Equality:

```csharp
public class Color
{
    public Color(string hue, bool metallic)
    {
        Hue = hue;
        Metallic = metallic;
        if (hue == "white" && !metallic)
        {
            BasicPallete = true;
        }
    }

    public string Hue { get; }
    public bool Metallic { get; }
    public bool BasicPallete { get; }

    public override bool Equals(object obj)
    {
        return this.Equals(obj as Color);
    }

    public bool Equals(Color otherColor)
    {
        if (Object.ReferenceEquals(otherColor, null)) return false;
        if (Object.ReferenceEquals(this, otherColor)) return true;
        if (this.GetType() != otherColor.GetType()) return false;

        return (Hue == otherColor.Hue) && (Metallic == otherColor.Metallic);
    }

    public static bool operator ==(Color leftColor, Color rightColor)
    {
        if (Object.ReferenceEquals(leftColor, null))
        {
            // null == null = true
            return (Object.ReferenceEquals(rightColor, null));
        }
        return leftColor.Equals(rightColor);
    }

    public static bool operator !=(Color leftColor, Color rightColor)
    {
        return !(leftColor == rightColor);
    }

    public override int GetHashCode()
    {
        return (Hue.GetHashCode() * 0x100000) + (Metallic.GetHashCode() * 0x1000) + BasicPallete.GetHashCode();
    }
}
```

## 6) Has side-effect-free behavior 

This is the fundamental rule. Without it, Value object could be treated as a simple container for attributes. To understand it we should start with understanding side-effect-free function. Function without site effect has a result but doesn't modify its state. Such a function are fundamental in Functional Programming Paradigm. 

All methods exposed by a value object should be a function without side effect, which doesn't violate the value object's immutability.

Let's take the car's repainting example. We can achieve repainting by adding such a function to our class. 

```csharp
public class Color
{
    public Color(string hue, bool metallic)
    {
        Hue = hue;
        Metallic = metallic;
        if (hue == "white" && !metallic)
        {
            BasicPallete = true;
        }
     }

    public string Hue { get; }
    public bool Metallic { get; }
    public bool BasicPallete { get; }

    public Color Repaint(string hue, bool metallic)
    {
        return new Color(hue, metallic);
    }

    // Value Equality part
    {...}
}
```

As we can see, there is a similar effect like in car's repainting case. But the connection between method and value object is stronger and side-effect-free. We don't modify the state of the color object. Instead of that, we've created the new one with demanded values.

```
Color color = new Color("green", false);
color = color.Repaint("green", true);
```

# Summary

Of course, I didn't cover all topics related to Value Objects, all the more DDD, but I hope this post will inspire you to use it more often in your projects.

![Keep calm and use Value Objects](https://raw.githubusercontent.com/rafalpienkowski/resources/master/hidden-value-of-the-value-object/keep-calm.png)

**P.S.**

Please don't go from one extreme to the other.


# Links:

- [Color.cs class](https://github.com/rafalpienkowski/resources/blob/master/hidden-value-of-the-value-object/Color.cs)
- [Color.cs readonly struct](https://github.com/rafalpienkowski/resources/blob/master/hidden-value-of-the-value-object/ColorStruct.cs) (better for most cases but requires C# 7.2 or later)
- [Implementing value objects](https://docs.microsoft.com/en-us/dotnet/standard/microservices-architecture/microservice-ddd-cqrs-patterns/implement-value-objects) from .NET Guide
- [Evans Classification](https://martinfowler.com/bliki/EvansClassification.html) from MartinFowler.com
- [Value Object](https://martinfowler.com/bliki/ValueObject.html) from MartinFowler.com which contains examples written in Java
