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
<li>
  <a href={{ post.url }}>
    <h4>{{ post.data.title }} </h4>
    <p>{{ post.data.dat }} </p>
  </a>
</li>
{% endfor %}
