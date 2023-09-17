---
eleventyExcludeFromCollections: true
layout: "index.njk"
pagination:
    data: collections.posts
    size: 5
    reverse: true
---

{% for post in pagination.items %}
[{{ post.data.title }} *{{ post.data.desc }}* *{{ post.data.dat }}*]({{ post.url }})
{% endfor %}
