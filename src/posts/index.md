---
eleventyExcludeFromCollections: true
layout: "base.njk"
pagination:
  data: collections.posts
  size: 6
---

{% for post in collections.posts reversed %}
[{{ post.data.title }} *{{ post.data.dat }}* *{{ post.data.desc }}*]({{ post.url }})
{% endfor %}
