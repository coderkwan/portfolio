---
eleventyExcludeFromCollections: true
layout: "base.njk"
title: Posts by Kwanele Gamedze
pagination:
  data: collections.posts
  size: 600
  reverse: true
---

{% for post in pagination.items %}
 - [{{ post.data.title }} *{{ post.data.dat }}*]({{ post.url }})
{% endfor %}
