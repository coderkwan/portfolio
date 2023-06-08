---
eleventyExcludeFromCollections: true
layout: "index.njk"
pagination:
  data: collections.posts
  size: 3
---


{% for post in pagination.items reversed %}
[{{ post.data.title }} *{{ post.data.dat }}* *{{ post.data.desc }}*]({{ post.url }})
{% endfor %}
