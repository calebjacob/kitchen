{% extends 'layout.swig' %}

{% block content %}
  <p>
    {% icon 'star' %}
    {% icon 'star' %}
    {% icon 'star' %}
    {% icon 'star' %}
    {% icon 'star' %}
  </p>

  <p>"{{message}}" - {{name}}</p>

  <div data-component="partial-loader" data-partial-name="example">
    <p>
      An example of a component:
      <button type="button" data-element="loader-button">Click Me</button>
    </p>

    <div data-element="wrapper"></div>
  </div>
{% endblock %}
