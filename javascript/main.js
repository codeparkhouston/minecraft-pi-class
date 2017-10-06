(function(window){

  function loadPath(pathName) {
    return axios
      .get(pathName)
      .then(function(response){
        return response.data;
      });
  }

  function renderMarkdownForElement(markdown, element) {
    element.innerHTML = marked(markdown);
  }

  var renderMarkdown = _.partial(renderMarkdownForElement, _, document.getElementById('content'));


  function renderCard(request) {
    var cardName = request.params.card;
    var pathName = './recipe-cards/' + cardName + '.md';
    return loadPath(pathName)
      .then(renderMarkdown);
  }

  function index() {
    console.info('asdf')

  }

  function initialize() {
    var recipes = ['01-teleport', '02-flower-path', '03-warehouse', '04-chat', '05-freeze', '06-block-fighter'];
    var recipesRoutes = _.map(recipes, function(recipe){
      return './recipe-cards/' + recipe;
    });

    page('/', index);
    page('/cards/:card', renderCard);
    page({hashbang: true});
    page();

  }

  initialize();


})(window)