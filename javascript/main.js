(function(window){

  var md = new Remarkable({html: true});

  function loadPath(pathName) {
    return axios
      .get(pathName)
      .then(function(response){
        return response.data;
      });
  }

  function renderMarkdownForElement(markdown, element) {

    var imageElements;
    var codeElements;
    var codeBlockElements;

    var lineStart = 1;

    element.innerHTML = md.render(markdown);

    imageElements = element.querySelectorAll('img');
    codeElements = element.querySelectorAll('code');
    codeBlockElements = element.querySelectorAll('pre');

    _.forEach(imageElements, function(imageElement) {
      imageElement.src = window.location.origin + window.location.pathname + _.trim(imageElement.getAttribute('src'), '..');
    });

    _.forEach(codeElements, function(codeElement) {
      codeElement.className = 'language-python';
    });


    _.forEach(codeBlockElements, function(codeBlockElement) {
      var lineCount = codeBlockElement.innerText.split('\n').length - 1;

      if (lineCount > 7) {
        lineStart = 1;
        lineCount = 0;
      }

      codeBlockElement.className = 'line-numbers';
      codeBlockElement.dataset.start = lineStart;

      lineStart += lineCount;

    });

    Prism.highlightAll();
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