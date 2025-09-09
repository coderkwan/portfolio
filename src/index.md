---
eleventyExcludeFromCollections: true
layout: "index.njk"
title: Posts by Kwanele Gamedze
pagination:
  data: collections.posts
  size: 600
  reverse: true
---

{% for post in pagination.items %}
  <a class="post_box" href={{ post.url }}>
    <p>{{ post.data.dat }} </p>
    <h4>{{ post.data.title }} </h4>
    <p>{{ post.data.desc }} </p>
  </a>
{% endfor %}
