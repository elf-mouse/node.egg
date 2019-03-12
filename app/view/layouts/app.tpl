<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    {% block head %}
    <link rel="stylesheet" href="/public/css/news.css">
    <title>{% block title %}{% endblock %} - Hello Egg</title>
    {% endblock %}
</head>
<body>
    {% include "./header.tpl" %}
    <div class="content">
    {% block content %}
    {% endblock %}
    </div>
    {% include "./footer.tpl" %}
</body>
</html>