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

[Register here]({{ event.link }}){:target="_blank"}
{% endif %}
{% endfor %}


# Past events
{% assign pastEvents = events | reverse %}
{% for event in events %}
{% capture eventDate %}{{ event.date | date: '%s'}}{% endcapture %}

{% if eventDate < nowunix %}
## {{ event.title }}
{{ event.date | date: "%e %B %Y"}}, {{ event.begin }} - {{ event.end }}

{{ event.description }}
{% endif %}
{% endfor %}
