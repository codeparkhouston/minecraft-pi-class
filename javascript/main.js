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
    var imageElements = element.querySelectorAll('img');

    _.forEach(imageElements, function(imageElement) {
      imageElement.src = window.location.origin + window.location.pathname + _.trim(imageElement.getAttribute('src'), '..');
    });
  }

  var renderMarkdown = _.partial(renderMarkdownForElement, _, document.getElementById('content'));


  function renderCard(request) {
    var cardName = request.params.card;
    var pathName = './recipe-cards/' + cardName + '.md';
    return loadPath(pathName)
      .then(renderMarkdown);
  }

  function index() {
  }

  function initialize() {
    page('/', index);
    page('/cards/:card', renderCard);
    page({hashbang: true});
    page();

  }

  initialize();


})(window)