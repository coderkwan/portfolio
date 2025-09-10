---
title : Be careful when working with JavaScript arrays!
date: 2023-05-27
dat: 27-05-2023
desc: Javascript array methods don't do what you think they do!
layout: eachpost.njk
---


# Be careful when working with JavaScript arrays!
<sup>*27-05-2023*<sup>

As JavaScript developers, we work with arrays a lot. most of our data is represented in an array format. Whether in frameworks, libraries, or Vannila javascript we are always working with arrays. It is important to understand how arrays work before we shoot ourselves in the foot.

Dealing with arrays in javascript seems like an easy task a lot of us easily understand how to create arrays modify arrays and create copies of arrays. The last part; copying arrays is very crucial because there is a lot going on under the hood. You should be very careful when duplicating or copying arrays, mostly *arrays of objects*.

![Javascript arrays of objects!](/assets/posts/shallow-copies1.png)

The above code does a simple thing; creates a car array that contains 2 objects. then we 'create' a new array (other_cars) using the spread operator to fill it with the contents of the car array. This looks like we have 2 individual arrays but unfortunately no, the contents of the cars array and other_cars array are in the same memory location, meaning if you modify the object contents of one array the other one will be modified as well because *the contents are in the same memory address*.

![Arrays in javascript!](/assets/posts/shallow-copies2.png)

In the above code, we didn't explicitly modify the cars array, we only modified other_cars, but how did the cars array change?
It's because we only created a **shallow copy** (the contents are at the same memory address ). This is not an issue with the spread operator but it is exactly true for other popular array methods and operations such as; *array.concat(), array.slice(), Array.from()*.
<br/><br/>
## What's the alternative?

If you know you'll be modifying objects of your array, don't create a **shallow copy** but create a **deep copy**. The easy way of creating a deep copy is using *JSON.stringify* then *JSON.parse* which creates a completely separate array.

![Arrays in Javascript!](/assets/posts/shallow-copies3.png)

Now we have created a new array, a **deep copy**. contents of cars exist on their own and *they can't be affected by modifications done to the other_cars array.

![Arrays in Javascript!](/assets/posts/shallow-copies4.png)
