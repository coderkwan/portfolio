---
title: Save yourself from fixing bugs
date: 2023-09-24
dat: 24-09-2023
desc: How we write code will determine how much we will have to fix bugs
layout: eachpost.njk
---

# Save yourself from fixing bugs

<sup>_24-09-2023_<sup>

The most common cause of bugs in software is the lack of caution in initial development. We rush to make things work without considering possible downsides and different case scenarios.

I sometimes find myself doing this a lot. Initially, I just hack to make sure the desired results are produced. And usually, this does not take a lot time.

The problem comes when I have to add functionality to that code; It becomes very hard. And in most cases it means having to rewrite the entire logic, which will obviously take a lot time.

I prefer that we spend more time initially, making sure that the code works perfectly, and can be easily modified or scaled.

The code we write should be flexible enough that it can be easily updated without breaking other parts of the software. That's why we have to make everything modular; each piece of functionality should exist individually. You should be able to play with it without messing up the entire codebase.

This should be done from the first line of code we write, while the codebase is extremely small. Once that codebase is enormous nobody will want to mess with it.

In a huge, unstable codebase, when a bug is found, it can only be fixed through fragile patches, which will obviously introduce more bugs. Save yourself, aim for modularity and perfection from the start.
