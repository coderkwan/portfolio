---
eleventyExcludeFromCollections: true
layout: "base.njk"
pagination:
  data: collections.posts
  size: 6
  reverse: true
---

{% for post in pagination.items %}
[{{ post.data.title }} *{{ post.data.dat }}* *{{ post.data.desc }}*]({{ post.url }})
{% endfor %}
