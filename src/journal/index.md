---
eleventyExcludeFromCollections: true
layout: "base_journal.njk"
title: The Journal of Kwanele Gamedze
pagination:
  data: collections.journal
  size: 600
  reverse: true
---

{% for journal in pagination.items %}
<li>
    <h1 class='bold'>{{ journal.data.dat }} </h1>
    <div class='journal_body'>{{ journal.content}} </div>
</li>
{% endfor %}
