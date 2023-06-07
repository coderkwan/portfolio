---
title: Blog posts by kwanele gamedze - coderkwan
eleventyExcludeFromCollections: true
layout: "base.njk"
---

{% for post in collections.posts %}
[{{ post.data.title }} *{{ post.data.dat }}* *{{ post.data.desc }}*]({{ post.url }})
{% endfor %}