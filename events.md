---
layout: page
title: Events
permalink: /events/
---
# Upcoming Events

{% assign events = site.data.events | sort: "date" %}
{% assign nowunix = 'today' | date: '%s' %}
{% for event in events %}
{% assign eventDate = event.date | date: '%s' %}

{% if eventDate >= nowunix %}
## {{ event.title }}
{{ event.date | date: "%e %B %Y"}}, {{ event.begin }} - {{ event.end }}

{{ event.description }}

{% if event.link %}[Register here]({{ event.link }}){:target="_blank"}{% endif %}
{% endif %}
{% endfor %}


# Past events
{% assign pastEvents = events | reverse %}
{% for event in events %}
{% capture eventDate %}{{ event.date | date: '%s'}}{% endcapture %}

{% if eventDate < nowunix %}
## {{ event.title }}
{{ event.date | date: "%e %B %Y"}}

{{ event.description }}
{% endif %}
{% endfor %}
