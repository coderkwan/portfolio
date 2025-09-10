---
title: My honest take on Code Igniter!
date: 2023-06-12
dat: 12-06-2023
desc: My worst experiance since i started writting code.
layout: eachpost.njk
---

# My honest take on Code Igniter!
<sup>*12-06-2023*<sup>

I just finished building a simple [CRUD app](https://github.com/coderkwan/todoIgniter) with code igniter, yes that php framework nobody mentions on Twitter. I started checking their site and reading the docs two weeks ago after I heard some developers praising it's simplicity.

As I do when learning any frameworks, I first go through the docs and see if I can understand anything without having to code it down. Usually, this technique works and helps me understand quickly when I am now learning the framework through building a simple app, Usually a [CRUD app](https://github.com/coderkwan/todoIgniter).

As I went through the docs I was not impressed, there was so much lack of clarity. The documentation is not pleasingly structured. It takes a while to find what you are looking for. One obvious issue is that the search is not dynamic, You are sent to another page to view search results. Why are the results not displayed on a pop-up? Imagine searching for something and being referred to another page only to figure out that the results don't include what you are looking for. There are a lot of tools like Algolia which can make this simple.

## The Nail In The Coffin
As developers, we make a lot of mistakes and often we are aided by the compiler which tells us the bug, where it's located, and how we can fix it. Sadly not with code igniter. Every error fails silently. If a view takes a dynamic variable, and you forget to send it down through the controller code igniter won't tell you the exact error, they show you a white page that says `try again later`.

![](/assets/posts/woops.png "whoops")

Which is strange. This is a poor design choice and an obvious sign it is not a suitable framework for bigger projects. If errors are not concise debugging can be hard.

When I was writing a Controller class, I created a bug while trying to insert data in the database. And as you can guess code igniter only displayed a white page with `Whoops`. 

![](/assets/posts/woops.png "whoops")

They failed to tell me about the error. I had to read my code line by line trying to figure out my mistake, I have to rely Google for help.

And I discovered that I am not the only one worried about their silent error handling. As I was searching the internet, obviously trying to fix a bug which code igniter wouldn't even tell me where the bug is. I came across this,

![](/assets/posts/igniter.png "whoops")

When you have to rely on Google and have to re-read your entire codebase for debugging, it consumes a lot of time, and it's not worth it. Especially when there are alternatives. As I was building this simple [CRUD app](https://github.com/coderkwan/todoIgniter) I had to create the Database table and columns manually because I failed to run migrations, and spent almost 2 hours trying to get it to work. I failed. Why was it hard; code igniter never outputs an error message, It just shows me that migrates are complete.

![](/assets/posts/migrate.png "whoops")

Obviously, I approached Code Igniter with an attitude because I have, before, tested the goodness of Laravel which I am a big fan of despite not using it in any live project. And code Igniter exceeded my expectations of it being incompetent, it is indeed beyond bad.

