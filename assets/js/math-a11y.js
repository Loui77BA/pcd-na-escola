/**
 * MathA11y — Biblioteca de acessibilidade para equações LaTeX
 *
 * Converte expressões LaTeX em:
 * 1. Renderização visual via KaTeX (output HTML)
 * 2. aria-label com descrição textual em português para leitores de tela
 *
 * Arquivos necessários (carregar nesta ordem):
 *   1. math-a11y-data.js    — tabelas de símbolos e constantes
 *   2. math-a11y-parser.js  — conversor LaTeX → texto acessível
 *   3. math-a11y.js          — scanner DOM, renderização e API pública
 *
 * Uso: MathA11y.init({ container: document.querySelector('.post-content') })
 */
var MathA11y = MathA11y || {};

(function () {
  'use strict';

  var parser = MathA11y._parser;
  var latexToText = parser.latexToText;
  var latexToSegments = parser.latexToSegments;

  /* =============================================================
     Scanner de delimitadores no DOM
     ============================================================= */

  var DELIMITERS = [
    { left: '\\[', right: '\\]', display: true },
    { left: '\\(', right: '\\)', display: false },
    { left: '$$', right: '$$', display: true },
    { left: '$', right: '$', display: false }
  ];

  function scanTextNodes(container) {
    var matches = [];
    var walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
    var textNodes = [];
    var node;
    while ((node = walker.nextNode())) {
      textNodes.push(node);
    }

    for (var i = 0; i < textNodes.length; i++) {
      var textNode = textNodes[i];
      var content = textNode.nodeValue;
      if (!content || !content.trim()) continue;

      var nodeMatches = findDelimitedExprs(content);
      if (nodeMatches.length > 0) {
        for (var j = 0; j < nodeMatches.length; j++) {
          nodeMatches[j].node = textNode;
        }
        matches = matches.concat(nodeMatches);
      }
    }

    return matches;
  }

  function findDelimitedExprs(text) {
    var results = [];
    var pos = 0;

    while (pos < text.length) {
      var found = false;

      for (var d = 0; d < DELIMITERS.length; d++) {
        var delim = DELIMITERS[d];
        if (text.substr(pos, delim.left.length) === delim.left) {
          // Para $, garantir que não é precedido por \
          if (delim.left === '$' && delim.right === '$') {
            if (pos > 0 && text[pos - 1] === '\\') { pos++; found = true; break; }
          }

          var searchStart = pos + delim.left.length;
          var endIdx = findClosingDelimiter(text, searchStart, delim.right, delim.left);

          if (endIdx !== -1) {
            var latex = text.substring(searchStart, endIdx);
            if (latex.trim()) {
              results.push({
                start: pos,
                end: endIdx + delim.right.length,
                latex: latex,
                display: delim.display,
                node: null
              });
            }
            pos = endIdx + delim.right.length;
            found = true;
            break;
          }
        }
      }

      if (!found) {
        pos++;
      }
    }

    return results;
  }

  function findClosingDelimiter(text, start, right, left) {
    var pos = start;
    while (pos <= text.length - right.length) {
      if (text.substr(pos, right.length) === right) {
        if (right === '$' && pos === start) {
          pos++;
          continue;
        }
        return pos;
      }
      pos++;
    }
    return -1;
  }

  /* =============================================================
     Orquestração: renderizar + montar DOM acessível
     ============================================================= */

  function init(options) {
    var container = (options && options.container) || document.querySelector('.post-content');
    if (!container) return;
    if (typeof katex === 'undefined') {
      console.warn('MathA11y: KaTeX não encontrado.');
      return;
    }

    // Configurar verbosidade (padrão: 'compact')
    if (options && options.verbosity) {
      MathA11y._config.verbosity = options.verbosity;
    }

    var allMatches = scanTextNodes(container);

    var nodeMap = new Map();
    for (var i = 0; i < allMatches.length; i++) {
      var m = allMatches[i];
      if (!nodeMap.has(m.node)) {
        nodeMap.set(m.node, []);
      }
      nodeMap.get(m.node).push(m);
    }

    nodeMap.forEach(function (nodeMatches, textNode) {
      var content = textNode.nodeValue;
      var parent = textNode.parentNode;
      if (!parent) return;

      var frag = document.createDocumentFragment();
      var lastEnd = 0;

      nodeMatches.sort(function (a, b) { return a.start - b.start; });

      for (var j = 0; j < nodeMatches.length; j++) {
        var match = nodeMatches[j];

        if (match.start > lastEnd) {
          frag.appendChild(document.createTextNode(content.substring(lastEnd, match.start)));
        }

        var wrapper = createA11yElement(match.latex, match.display);
        frag.appendChild(wrapper);

        lastEnd = match.end;
      }

      if (lastEnd < content.length) {
        frag.appendChild(document.createTextNode(content.substring(lastEnd)));
      }

      parent.replaceChild(frag, textNode);
    });

    processDisplayBlocks(container);
  }

  function processDisplayBlocks(container) {
    var displayDivs = container.querySelectorAll('p > .math-a11y-display');
    for (var i = 0; i < displayDivs.length; i++) {
      var div = displayDivs[i];
      var p = div.parentNode;
      if (p && p.tagName === 'P') {
        var textContent = p.textContent.replace(div.textContent, '').trim();
        if (!textContent) {
          p.parentNode.replaceChild(div, p);
        }
      }
    }
  }

  function createA11yElement(latex, display) {
    var label = latexToText(latex);
    var segments = latexToSegments(latex);
    var tag = display ? 'div' : 'span';
    var cssClass = display ? 'math-a11y math-a11y-display' : 'math-a11y math-a11y-inline';

    var wrapper = document.createElement(tag);
    wrapper.className = cssClass;
    wrapper.setAttribute('role', 'math');

    var visual = document.createElement('span');
    visual.setAttribute('aria-hidden', 'true');

    try {
      katex.render(latex, visual, {
        throwOnError: false,
        displayMode: display,
        output: 'html'
      });
    } catch (e) {
      visual.textContent = latex;
    }

    wrapper.appendChild(visual);

    // Sempre usar spans sr-only em vez de aria-label para permitir
    // navegação por palavras no leitor de tela
    if (segments.length > 1) {
      for (var i = 0; i < segments.length; i++) {
        var seg = document.createElement('span');
        seg.className = 'sr-only';
        seg.textContent = segments[i];
        wrapper.appendChild(seg);
      }
    } else {
      var srSpan = document.createElement('span');
      srSpan.className = 'sr-only';
      srSpan.textContent = label;
      wrapper.appendChild(srSpan);
    }

    return wrapper;
  }

  /* =============================================================
     API pública
     ============================================================= */

  MathA11y.init = init;
  MathA11y.latexToText = function (latex, options) {
    var prev = MathA11y._config.verbosity;
    if (options && options.verbosity) {
      MathA11y._config.verbosity = options.verbosity;
    }
    var result = latexToText(latex);
    MathA11y._config.verbosity = prev;
    return result;
  };
  MathA11y.latexToSegments = latexToSegments;

})();
