---
eleventyExcludeFromCollections: true
layout: "index.njk"
pagination:
  data: collections.posts
  size: 3
  reverse: true
---


{% for post in pagination.items %}
[{{ post.data.title }} *{{ post.data.dat }}* *{{ post.data.desc }}*]({{ post.url }})
{% endfor %}
