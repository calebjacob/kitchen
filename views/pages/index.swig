{% extends '../layout.swig' %}

{% block content %}
  <p>"{{message}}" - {{name}}</p>
  <p>Here's a <a href="/partials/example">link</a>.</p>
  {% icon broncos are the best %}
{% endblock %}
