---
title: There is more than just console.log();
date: 2023-06-21
dat: 12-06-2023
desc: Debugging javascript code shouldn't be hard.
layout: eachpost.njk
---

# There is more than just console.log();
<sup>*21-06-2023*<sup>

Almost every javascript developer uses `console.log` in every script they write, and it does the job pretty well; logging anything in the console.

However, When debugging code with the console you have to know the difference between the standard output (stdout) and the standard error (stderr). By just observing the names you can tell that general outputs are displayed in stdout and then errors are displayed in stderr.

When you are debugging with the console, it is significantly important to customize your console outputs; This will make fixing your code simpler and faster.
Let's say you were trying to fetch data and you want to see when the fetch fails;

![](/assets/posts/cons1.png "fetch data")

If data is not defined or null or false this will log plain text "no data" in the stdout ( standard output ).
![](/assets/posts/cons2.png "fetch data")

This is not convenient because the desired output was the data, If there is no data you were expecting to receive an error or at least a warning. But `console.log("no data")` is not an error. If you don't want to throw new errors then you must either use `console.warn()` or `console.error()`.  With this two methods it is very easy to see if you've got the desired output or not. 

Let's compare the 3 console methods;
![](/assets/posts/cons3.png "fetch data")
The output;
![](/assets/posts/cons4.png "fetch data")

This makes debugging easier because you can now differentiate between errors, warnings, and just logs.

If a log is not the desired output use `console.error()`, If it's a warning use `console.warn()`.

Give `console.log()` a break!
