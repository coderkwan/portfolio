---
title: You should use Maps instead of Objects in JavaScript
date: 2024-01-28
dat: 28-01-2024
desc: There are may ways of storing related data in JavaScript, I prefer Maps.
layout: eachpost.njk
---


# You should use Maps instead of Objects in JavaScript.
<sup>*28-01-2024*<sup>

When having a collection of related data or functionality, it is always a good idea to store such in a container. In javaScript, the most common collections are Arrays and Objects. Objects keep everything organized through the use of custom keys as indexes, and you can store values of any type. Objects makes it easier to reference your data.

![](/assets/posts/1map.png "javascript object example")

Apart from Objects, there is another interesting collection type in JavaScript; a Map, an object-like collection with super powers. The first thing that caught my attention when I first saw Maps was the syntax. It is more cleaner and obvious to whoever reads the code.

Here is how you create a map

![](/assets/posts/2map.png "javascript maps syntax")

Add and get properties in/from the Map

![](/assets/posts/3map.png "javascript maps syntax")

## Maps are empty by default
If you create a new object with no keys and values, by default that object is not empty. It has a prototype, there are already key-to-value pairs that exist in your object, which you did not create.

![](/assets/posts/4map.png "javascript object prototype")

In the above example we are able to call `constructor` and `toString` which we did not create, we only created the `name` property.

However, Maps give you full control over your data. A new Map is completely empty by default. It has no prototype, you are responsible for adding or removing data in your Map. This makes Maps safer because there will never be unexpected behavior like prototype overriding.
JavaScript does offer a way of creating null-prototype objects, but it's good to have that by default;
Here is an example of how to create an empty object.

![](/assets/posts/5map.png "javascript null-prototype object")

## Iterable
Maps are iterable by default, while objects are not. To iterate through a Map; use `for...of`. Each iteration returns an array with 2 items; the first is the key and the second is the value.

![](/assets/posts/6map.png "javascript maps iteration using for of")

To iterate through an object you have to use `Object.keys` or` Object.entries` which both returns an iterable that allows you to use `for...of`. There seems to be always extra work with objects compared to Maps. 
You can use `for...in` which iterate through the keys and not the actual object.

![](/assets/posts/8map.png "javascript object iteration using for in")

This is not only with iterations but even getting the size or length of an object you have to count the keys using `Object.keys(object).length`. With Maps there is a builtin property `size` which returns the length or size of the map.

![](/assets/posts/7map.png "javascript map size property")

## Keys can be anything
When adding items into your objects, the key can only be strings or symbols. although you can try to make your key a number or any type, but it is always converted into a string

![](/assets/posts/9map.png "javascript object keys converted to string")

Maps can have keys of any type; strings, numbers, functions, objects, arrays, etc.

![](/assets/posts/10map.png "javascript map keys con be any type")

## Conclusion

With all the above advantages on Maps, I believe you'll start using them more often than objects. Old habits die hard, but we have to use the right tool to for the right job. On storing key-value pairs, Maps are better than objects. 

Reference : [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)