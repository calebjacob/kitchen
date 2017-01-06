<!DOCTYPE html>
  <head>
    <title>
      {% if title %}
        {{title}}
      {% else %}
        {{pkg.name}} - {{pkg.description}}
      {% endif %}
    </title>

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0">

    <meta name="description" content="{% if description %} {{description}} {% else %} {{pkg.description}} {% endif %}">
    <meta property="og:title" content="My App" />
    <meta property="og:site_name" content="My App" />
    <meta property="og:description" content="{% if description %} {{description}} {% else %} {{pkg.description}} {% endif %}" />
    <meta property="og:type" content="company" />
    <meta property="og:url" content="https://myapp.com" />
    <meta property="og:image" content="https://myapp.com/images/my-app-social-media.jpg" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@TwitterUsername" />
    <meta name="twitter:title" content="My App" />
    <meta name="twitter:description" content="{% if description %} {{description}} {% else %} {{pkg.description}} {% endif %}" />
    <meta name="twitter:image" content="https://myapp.com/images/my-app-social-media.jpg" />

    <link rel="stylesheet" type="text/css" href="/dist/styles-{{pkg.version}}.css" />

    <link rel="icon" href="/images/favicon.png"> {# https://github.com/audreyr/favicon-cheat-sheet #}

    {% block head %}{% endblock %}
  </head>
  <body>
    <div class="container container--vertical-align">
      <header>
        <h1>{{pkg.name}}</h1>
        <h2>{{pkg.description}}</h2>
      </header>

      {% block content %}{% endblock %}
    </div>

    <script type="text/javascript" src="/dist/scripts-{{pkg.version}}.js"></script>
  </body>
</html>
