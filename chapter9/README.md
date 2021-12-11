# Chapter 9 Behavioral Design Patterns

## Strategy pattern

The _strategy_ pattern enables an object, called the context, to support variations in its logic by extracting the _variable_ part into separate, interchangeable objects called _strategy_. The contex implements the common logic of a family of algorithms, while a strategy implements the mutable part, allowing the context to adapt its behavior depending on different factors.

Strategies are usually part of a family of solutions and all of them implement the same itnerface expected by the context.

### Difference between Adapter and Strategy

Adapter does not add any behavior to the adaptee; it just makes it available under another interface. It may also need extra logic to implemented to convert one interface into another, but this logic is limited to this task only.

In comparison to the strategy, the context and the strategies

## State pattern

The _State_ pattern is a specialization of the strategy pattern where the strategy changes depending on the state of the context.

