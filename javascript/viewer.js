(function(){
  var page = new URL(window.location.href);

  fetch(`./recipe-cards/${page.searchParams.get('step')}.md`)
    .then(function(response){
      return response.text();
    })
    .then(function(text){
      var footer = `<div class="footer"><div>

Raspberry Pi and the Raspberry Pi logo are trademarks of the Raspberry Pi Foundation [http://www.raspberrypi.org](http://www.raspberrypi.org).  Minecraft is a registered trademark of Mojang.

These resources are copyright Craig Richardson and licensed under a [Creative Commons BY-NC-SA License](https://creativecommons.org/licenses/by-nc-sa/4.0/).  These resources have been adapted by Code Park.
</div></div>`;
      renderMarkdown(text + footer, document.body);

      document.title = page.searchParams.get('step');
    });

  function getLineCountStarts(codeElements) {
    function sum(array) {
      return array.reduce(function(accumlator, currentValue) {
        return accumlator + currentValue;
      }, 0);
    }

    var codeLineCounts = Array.prototype.map.call(codeElements, function(element) {
      return element.innerText.split('\n').length - 1;
    });

    var lineStarts = codeLineCounts.map(function(count, index) {
      var previousCode = codeLineCounts.slice(0, index);
      return sum(previousCode) + 1;
    });

    return lineStarts;
  }

  function renderMarkdown(markdownText, domNode) {
    var md = markdownit({
      html: true,
      highlight: function (str, lang) {
        if (lang) {
          try {
            return `<pre class="language-python line-numbers"><code>${str}</code></pre>`;
          } catch (__) {}
        }
        return '';
      },
    });

    var result = md.render(markdownText);
    domNode.innerHTML = result;

    var footerElement = domNode.querySelector('.footer');
    domNode.querySelector('.summary').appendChild(footerElement);

    var codeElements = domNode.querySelectorAll('pre.line-numbers');
    var lineCountStarts = getLineCountStarts(codeElements);

    Array.prototype.forEach.call(codeElements, function(element, index) {
      element.dataset.start = lineCountStarts[index];
    });

    Prism.highlightAll();
  }
})();