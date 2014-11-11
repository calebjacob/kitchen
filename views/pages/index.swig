{% extends '../layout.swig' %}

{% block content %}
  <p><b>API:</b> "{{message}}" - {{name}}</p>

  {% include "../partials/partial.swig" %}
{% endblock %}
