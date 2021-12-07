# Structural Design Patterns

## Proxy

A proxy is an object that controls access to another object, called the subject. The proxy and the subject have _an identical interface_, and this allows to swap one of the other transparently; in fact, the alternative name for this pattern is **surrogate**

A proxy can be useful in serveral circumstances:

-   Data validation
-   Security
-   Caching
-   Lazy initialization
-   Logging
-   Remote objects

### Object composition

Composition is a technique whereby an ojbect is combined with another object for the purpose of extending or using its functionality.

### Object augmentation

Object augmentation (or monkey patching) is probably the simplest and most common way of proxying just a few methods of an object. It invovles modifying the subject directly by replacing a method with its proxied implementation.

### The built-in Proxy object

The ES2015 spec introduced a native way to create powerful proxy objects.

```JavaScript
const proxy = new Proxy(target, handler)
```

_target_ represents the object which the proxy is applied, while _handler_ is a special object that defines the behavior of the proxy. The _handler_ object contains a series of optional metdhos with predefined names call _trap methods_ (e.g apply, get, set and has) that are automatically called when the corresponding operations are performed on the proxy instance.

The `Proxy` object enables developers to intercept and customize many operations, which opens us new and interesting scenarios that were not easily achievable before, such as:

-   meta-programming
-   operator overloading
-   object virtualization

```JavaScript
// evenNumbers is a virtual array
const evenNumbers = new Proxy([], {
    get: (target, index) => index*2,
    has: (target, number) => number % 2 === 0
})
```

The `Proxy` object supports serveral other interesting traps such as `set`, `delete`, and `construct`, and allows us to create proxies that can be revoked on demand, disabling all the traps and restoring the original behavior of the `target` object.

Note, the `Proxy` object cannot be fully transpiled or polyfilled. This is because the beahvior of proxy object can only be implemented at the runtime level and cannot be simply rewritten in plain JavaScript. This is something to be aware of if you are working with old browsers or old versions of Node.js that doesn't support the `Proxy` object directly.

### Change observer with Proxy

The _Change Observer pattern_ is a design pattern in which an object (the subject) notifies one or more observers of any state changes, so that they can "react" to changes as soon as they happen.

> Observables are the cornerstone of `reactive programming (RP)` and `functional reactive programming (RFP)`.

## Decorator

Decorator is a structural design pattern that consists in dynamically augmenting the behavior of an existing object. It's different from classical inheritance, because the behavior is not added to all the objects of the same class, but only to the instance that are explicitly decorated.

Although proxy and decorator are conceptually two different patterns with different intents, _they practically share the same implementation strategies_.

## Adapter

The addapter pattern allows us to access the functionality of an object using different interface.

# Summary

_proxy_ -> same interface
_decorator_ -> extra methods to same interface
_adapter_ -> different interface
