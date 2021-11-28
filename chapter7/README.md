# Creational Design Patterns

## Factory

Decouple the creation of an object from one particular implmenetation. This allows us to create an object whose class is determined at runtime.

Factory also allows us to expose "a surface area" that is much smaller than that of a class.

Finally, a factory can also be used to enforce encapsulation by levarage closures.

In JavaScript, one of the main ways to enforce encapsulation is through function scopes and closures.

## Builder

Builder is a creational design pattern that simplifies the creation of complex objects by providing a fluent interface, which allows us to build the object step by step.

General rules for implementing the `Builder` pattern.

-   The main objective is to break down a complex constructor into multiple, more readable, and more manageable steps
-   Try to create builder methods that can set multiple related parameters at one
-   Deduce and implicitly set parameters based on the values received as input by a stter method, and in general, try to encapsulate as much paraemter setting related logic into the setter methods
-   If necessary, it's possible to further manipulate the parameters before passing them to the constructor of the class being built to simplify the work left to do by the builder class consumer even more.

## Revealing Constructor

You won't find this pattern in the "Gang of Four" book, since it originated directly from the JavaScript And the Node.js community.

It solves a very tricky problem, which is: how we can "reveal" some private functionality of an object **only at the moment of the object's creation**?

```JavaScript
const object = new SomeClass(function executor(revealedMembers){
    // manipulation code ...
})
```

The revealing constructor pattern consists of three fundamental elements:

1. constructor that takes a function as input
2. The executor that is invoked at creation time and receives a subset of the object's internal as input
3. revealed members

### Building an immutable buffer

Benefits:

1. Avoid defensive copies
2. Efficient change detection
