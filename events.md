---
layout: page
title: Events
permalink: /events/
---
# Upcoming Events

{% assign events = site.data.events | sort: "date" %}
{% assign nowunix = 'now' | date: '%s' %}
{% for event in events %}
{% assign eventDate = event.date | date: '%s' %}

{% if eventDate >= nowunix %}
### <a href="{{ event.link }}" target="_blank">{{ event.title }}</a>
<dl>
  <dd>On {{ event.date }} from {{ event.begin }} to {{ event.end }}</dd>
  <dd>{{ event.description }}</dd>
  <dd>{{ nowunix }} vs {{ eventDate }}</dd>
</dl>
{% endif %}
{% endfor %}

# Past events
{% assign pastEvents = events | reverse %}
{% for event in events %}
{% capture eventDate %}{{ event.date | date: '%s'}}{% endcapture %}

{% if eventDate < nowunix %}
### <a href="{{ event.link }}" target="_blank">{{ event.title }}</a>
<dl>
  <dd>On {{ event.date }} from {{ event.begin }} to {{ event.end }}</dd>
  <dd>{{ event.description }}</dd>
</dl>
{% endif %}
{% endfor %}
