Here are a few related projects:
{% _.each(repos, function(repo) { %} {% if(/git-|github-/.test(repo.name)) { %}
+ [{%= repo.name %}]({%= repo.url %}): {%= repo.description %} {% } %} {% }); %}