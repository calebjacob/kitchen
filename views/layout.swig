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
    <meta name="description" content="
      {% if description %}
        {{description}}
      {% else %}
        {{pkg.description}}
      {% endif %}
    ">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0">

    <link rel="icon" href="/images/favicon.png">
    <link rel="apple-touch-icon-precomposed" href="/images/favicon-152.png">
    <meta name="msapplication-TileImage" content="/images/favicon-144.png">
    <meta name="msapplication-TileColor" content="#FFFFFF">

    <link rel="stylesheet" type="text/css" href="/_dist/styles.{{pkg.version}}.css" />

    {% block head %}{% endblock %}
  </head>
  <body>
    <div class="container">
      <header>
        <h1>{{pkg.name}}</h1>
        <h2>{{pkg.description}}</h2>
      </header>
      
      {% block content %}{% endblock %}

      {% block footer %}
        <footer>
          <p>The end.</p>
        </footer>
      {% endblock %}
    </div>
    <script type="text/javascript" src="/_dist/scripts.{{pkg.version}}.js"></script>
  </body>
</html>
