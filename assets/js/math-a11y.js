/**
 * MathA11y — Biblioteca de acessibilidade para equações LaTeX
 *
 * Converte expressões LaTeX em:
 * 1. Renderização visual via KaTeX (output HTML)
 * 2. aria-label com descrição textual em português para leitores de tela
 *
 * Uso: MathA11y.init({ container: document.querySelector('.post-content') })
 */
var MathA11y = (function () {
  'use strict';

  /* =============================================================
     SEÇÃO A — Conversor LaTeX → Texto acessível em português
     ============================================================= */

  var SYMBOLS = {
    '\\pi': 'pi',
    '\\tau': 'tau',
    '\\alpha': 'alfa',
    '\\beta': 'beta',
    '\\gamma': 'gama',
    '\\delta': 'delta',
    '\\epsilon': 'épsilon',
    '\\theta': 'teta',
    '\\lambda': 'lambda',
    '\\mu': 'mu',
    '\\sigma': 'sigma',
    '\\omega': 'ômega',
    '\\phi': 'fi',
    '\\psi': 'psi',
    '\\infty': 'infinito',
    '\\partial': 'parcial',
    '\\nabla': 'nabla',
    '\\cdot': 'vezes',
    '\\times': 'vezes',
    '\\pm': 'mais ou menos',
    '\\mp': 'menos ou mais',
    '\\neq': 'diferente de',
    '\\leq': 'menor ou igual a',
    '\\geq': 'maior ou igual a',
    '\\approx': 'aproximadamente igual a',
    '\\equiv': 'equivalente a',
    '\\in': 'pertence a',
    '\\notin': 'não pertence a',
    '\\subset': 'contido em',
    '\\forall': 'para todo',
    '\\exists': 'existe',
    '\\to': 'tende a',
    '\\rightarrow': 'seta para direita',
    '\\leftarrow': 'seta para esquerda',
    '\\Rightarrow': 'implica',
    '\\Leftarrow': 'é implicado por',
    '\\ldots': 'reticências',
    '\\cdots': 'reticências',
    '\\quad': ' ',
    '\\qquad': ' ',
    '\\,': ' ',
    '\\;': ' ',
    '\\!': '',
    '\\ ': ' '
  };

  var FUNCTIONS = {
    '\\cos': 'cosseno de',
    '\\sin': 'seno de',
    '\\tan': 'tangente de',
    '\\cot': 'cotangente de',
    '\\sec': 'secante de',
    '\\csc': 'cossecante de',
    '\\arccos': 'arco cosseno de',
    '\\arcsin': 'arco seno de',
    '\\arctan': 'arco tangente de',
    '\\log': 'logaritmo de',
    '\\ln': 'logaritmo natural de',
    '\\exp': 'exponencial de',
    '\\lim': 'limite de',
    '\\max': 'máximo de',
    '\\min': 'mínimo de',
    '\\det': 'determinante de',
    '\\dim': 'dimensão de'
  };

  var BIG_OPS = {
    '\\int': 'integral',
    '\\iint': 'integral dupla',
    '\\iiint': 'integral tripla',
    '\\oint': 'integral de contorno',
    '\\sum': 'somatório',
    '\\prod': 'produtório'
  };

  function latexToText(latex) {
    var input = latex.trim();
    var result = parseExpr(input, 0);
    return cleanText(result.text);
  }

  function parseExpr(input, pos) {
    var parts = [];
    while (pos < input.length) {
      var ch = input[pos];

      // Fim de grupo
      if (ch === '}') {
        break;
      }

      // Espaço
      if (ch === ' ' || ch === '\t' || ch === '\n') {
        pos++;
        continue;
      }

      // Comando LaTeX (\...)
      if (ch === '\\') {
        var cmdResult = parseCommand(input, pos);
        if (cmdResult.text !== null) {
          parts.push(cmdResult.text);
        }
        pos = cmdResult.pos;
        continue;
      }

      // Grupo { ... }
      if (ch === '{') {
        var groupResult = parseGroup(input, pos);
        parts.push(groupResult.text);
        pos = groupResult.pos;
        continue;
      }

      // Superscript
      if (ch === '^') {
        var supResult = parseSuperscript(input, pos);
        parts.push(supResult.text);
        pos = supResult.pos;
        continue;
      }

      // Subscript
      if (ch === '_') {
        var subResult = parseSubscript(input, pos);
        parts.push(subResult.text);
        pos = subResult.pos;
        continue;
      }

      // Operadores
      if (ch === '+') {
        parts.push('mais');
        pos++;
        continue;
      }
      if (ch === '=') {
        parts.push('igual a');
        pos++;
        continue;
      }
      if (ch === '-') {
        // Sinal negativo vs subtração: se anterior é vazio ou operador, é sinal
        var prev = parts.length > 0 ? parts[parts.length - 1] : '';
        if (prev === '' || prev === 'mais' || prev === 'igual a' || prev === 'menos' ||
            prev === 'abre parênteses' || prev === 'abre colchetes') {
          parts.push('menos');
        } else {
          parts.push('menos');
        }
        pos++;
        continue;
      }
      if (ch === '<') {
        parts.push('menor que');
        pos++;
        continue;
      }
      if (ch === '>') {
        parts.push('maior que');
        pos++;
        continue;
      }

      // Parênteses e colchetes
      if (ch === '(') {
        parts.push('abre parênteses');
        pos++;
        continue;
      }
      if (ch === ')') {
        parts.push('fecha parênteses');
        pos++;
        continue;
      }
      if (ch === '[') {
        parts.push('abre colchetes');
        pos++;
        continue;
      }
      if (ch === ']') {
        parts.push('fecha colchetes');
        pos++;
        continue;
      }

      // Pipe (valor absoluto)
      if (ch === '|') {
        parts.push('barra vertical');
        pos++;
        continue;
      }

      // Dígitos e letras
      if (/[a-zA-Z0-9.]/.test(ch)) {
        // Acumular sequências de dígitos
        if (/[0-9]/.test(ch)) {
          var numStr = '';
          while (pos < input.length && /[0-9.]/.test(input[pos])) {
            numStr += input[pos];
            pos++;
          }
          parts.push(numStr);
        } else {
          parts.push(ch);
          pos++;
        }
        continue;
      }

      // Caractere desconhecido — pular
      pos++;
    }

    return { text: parts.join(' '), pos: pos };
  }

  function parseCommand(input, pos) {
    // pos aponta para '\'
    var start = pos;
    pos++; // pular '\'

    // Comandos de um caractere: \, \; \! \  etc.
    if (pos < input.length && !/[a-zA-Z]/.test(input[pos])) {
      var shortCmd = '\\' + input[pos];
      pos++;
      if (SYMBOLS[shortCmd] !== undefined) {
        return { text: SYMBOLS[shortCmd], pos: pos };
      }
      return { text: '', pos: pos };
    }

    // Coletar nome do comando
    var cmdName = '';
    while (pos < input.length && /[a-zA-Z]/.test(input[pos])) {
      cmdName += input[pos];
      pos++;
    }

    var fullCmd = '\\' + cmdName;

    // \left e \right — delimitadores
    if (fullCmd === '\\left') {
      pos = skipSpaces(input, pos);
      if (pos < input.length) {
        var delim = input[pos];
        pos++;
        if (delim === '(') return { text: 'abre parênteses', pos: pos };
        if (delim === '[') return { text: 'abre colchetes', pos: pos };
        if (delim === '{' || delim === '\\') return { text: 'abre chaves', pos: pos };
        if (delim === '|') return { text: 'abre valor absoluto', pos: pos };
        if (delim === '.') return { text: '', pos: pos }; // \left. = delimitador vazio
      }
      return { text: 'abre parênteses', pos: pos };
    }

    if (fullCmd === '\\right') {
      pos = skipSpaces(input, pos);
      if (pos < input.length) {
        var rDelim = input[pos];
        pos++;
        if (rDelim === ')') return { text: 'fecha parênteses', pos: pos };
        if (rDelim === ']') return { text: 'fecha colchetes', pos: pos };
        if (rDelim === '}' || rDelim === '\\') return { text: 'fecha chaves', pos: pos };
        if (rDelim === '|') return { text: 'fecha valor absoluto', pos: pos };
        if (rDelim === '.') return { text: '', pos: pos };
      }
      return { text: 'fecha parênteses', pos: pos };
    }

    // \frac{num}{den}
    if (fullCmd === '\\frac') {
      pos = skipSpaces(input, pos);
      var num = consumeArg(input, pos);
      pos = num.pos;
      pos = skipSpaces(input, pos);
      var den = consumeArg(input, pos);
      pos = den.pos;
      return { text: num.text + ' sobre ' + den.text, pos: pos };
    }

    // \sqrt[n]{x} ou \sqrt{x}
    if (fullCmd === '\\sqrt') {
      pos = skipSpaces(input, pos);
      if (pos < input.length && input[pos] === '[') {
        pos++; // pular '['
        var nthStr = '';
        while (pos < input.length && input[pos] !== ']') {
          nthStr += input[pos];
          pos++;
        }
        if (pos < input.length) pos++; // pular ']'
        var nthArg = consumeArg(input, pos);
        pos = nthArg.pos;
        var nthText = latexToText(nthStr);
        return { text: 'raiz ' + nthText + '-ésima de ' + nthArg.text, pos: pos };
      }
      var sqrtArg = consumeArg(input, pos);
      pos = sqrtArg.pos;
      return { text: 'raiz quadrada de ' + sqrtArg.text, pos: pos };
    }

    // Operadores grandes: \int, \sum, \prod com limites opcionais
    if (BIG_OPS[fullCmd]) {
      var opName = BIG_OPS[fullCmd];
      pos = skipSpaces(input, pos);
      var lowerLim = '';
      var upperLim = '';

      if (pos < input.length && input[pos] === '_') {
        pos++;
        var low = consumeArg(input, pos);
        lowerLim = low.text;
        pos = low.pos;
        pos = skipSpaces(input, pos);
      }
      if (pos < input.length && input[pos] === '^') {
        pos++;
        var up = consumeArg(input, pos);
        upperLim = up.text;
        pos = up.pos;
      }

      if (lowerLim && upperLim) {
        return { text: opName + ' de ' + lowerLim + ' até ' + upperLim + ' de', pos: pos };
      }
      if (lowerLim) {
        return { text: opName + ' com ' + lowerLim + ' de', pos: pos };
      }
      return { text: opName + ' de', pos: pos };
    }

    // Funções trigonométricas etc.
    if (FUNCTIONS[fullCmd]) {
      return { text: FUNCTIONS[fullCmd], pos: pos };
    }

    // Símbolos simples
    if (SYMBOLS[fullCmd] !== undefined) {
      return { text: SYMBOLS[fullCmd], pos: pos };
    }

    // Comandos de formatação que envolvem um argumento (ignorar o comando, manter o conteúdo)
    var passthrough = ['\\text', '\\mathrm', '\\mathbf', '\\mathit', '\\mathbb',
                       '\\mathcal', '\\textbf', '\\textit', '\\operatorname',
                       '\\overline', '\\underline', '\\hat', '\\bar', '\\vec',
                       '\\tilde', '\\dot', '\\ddot'];
    if (passthrough.indexOf(fullCmd) !== -1) {
      pos = skipSpaces(input, pos);
      if (pos < input.length && input[pos] === '{') {
        var ptArg = consumeArg(input, pos);
        return { text: ptArg.text, pos: ptArg.pos };
      }
      return { text: '', pos: pos };
    }

    // Comando desconhecido — tentar retornar nome legível
    return { text: cmdName, pos: pos };
  }

  function parseGroup(input, pos) {
    // pos aponta para '{'
    pos++; // pular '{'
    var result = parseExpr(input, pos);
    if (result.pos < input.length && input[result.pos] === '}') {
      result.pos++; // pular '}'
    }
    return { text: result.text, pos: result.pos };
  }

  function parseSuperscript(input, pos) {
    // pos aponta para '^'
    pos++; // pular '^'
    var arg = consumeArg(input, pos);
    var text = arg.text.trim();

    // Casos especiais comuns
    if (text === '2') return { text: 'ao quadrado', pos: arg.pos };
    if (text === '3') return { text: 'ao cubo', pos: arg.pos };

    return { text: 'elevado a ' + text, pos: arg.pos };
  }

  function parseSubscript(input, pos) {
    // pos aponta para '_'
    pos++; // pular '_'
    var arg = consumeArg(input, pos);
    return { text: 'subscrito ' + arg.text, pos: arg.pos };
  }

  function consumeArg(input, pos) {
    pos = skipSpaces(input, pos);
    if (pos >= input.length) return { text: '', pos: pos };

    // Grupo entre chaves
    if (input[pos] === '{') {
      return parseGroup(input, pos);
    }

    // Token único: comando ou caractere
    if (input[pos] === '\\') {
      var cmdResult = parseCommand(input, pos);
      return { text: cmdResult.text || '', pos: cmdResult.pos };
    }

    // Caractere simples
    var ch = input[pos];
    pos++;
    if (ch === '-') return { text: 'menos', pos: pos };
    if (ch === '+') return { text: 'mais', pos: pos };
    return { text: ch, pos: pos };
  }

  function skipSpaces(input, pos) {
    while (pos < input.length && (input[pos] === ' ' || input[pos] === '\t' || input[pos] === '\n')) {
      pos++;
    }
    return pos;
  }

  function cleanText(text) {
    // Normalizar espaços múltiplos
    text = text.replace(/\s+/g, ' ').trim();
    // Inserir vírgulas entre blocos semânticos para pausas naturais no leitor de tela
    text = text.replace(/ (igual a) /g, ', $1 ');
    text = text.replace(/ (mais) /g, ', $1 ');
    text = text.replace(/ (menos) (?!infinito)/g, ', $1 ');
    text = text.replace(/ (sobre) /g, ' $1 ');
    text = text.replace(/ (abre parênteses)/g, ', $1');
    text = text.replace(/(fecha parênteses) /g, '$1, ');
    text = text.replace(/ (abre colchetes)/g, ', $1');
    text = text.replace(/(fecha colchetes) /g, '$1, ');
    // Limpar vírgulas duplicadas
    text = text.replace(/,\s*,/g, ',');
    text = text.replace(/^\s*,\s*/, '');
    text = text.replace(/\s*,\s*$/, '');
    return text.trim();
  }


  /* =============================================================
     SEÇÃO B — Scanner de delimitadores no DOM
     ============================================================= */

  var DELIMITERS = [
    { left: '\\[', right: '\\]', display: true },
    { left: '\\(', right: '\\)', display: false },
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
          // Para $, garantir que não é $$ e não é precedido por \
          if (delim.left === '$') {
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
        // Para $, evitar match vazio
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
     SEÇÃO C — Orquestração: renderizar + montar DOM acessível
     ============================================================= */

  function init(options) {
    var container = (options && options.container) || document.querySelector('.post-content');
    if (!container) return;
    if (typeof katex === 'undefined') {
      console.warn('MathA11y: KaTeX não encontrado.');
      return;
    }

    // Coletar todas as correspondências antes de modificar o DOM
    var allMatches = scanTextNodes(container);

    // Processar de trás para frente para manter posições válidas
    // Agrupar por nó de texto
    var nodeMap = new Map();
    for (var i = 0; i < allMatches.length; i++) {
      var m = allMatches[i];
      if (!nodeMap.has(m.node)) {
        nodeMap.set(m.node, []);
      }
      nodeMap.get(m.node).push(m);
    }

    nodeMap.forEach(function (nodeMatches, textNode) {
      // Ordenar de trás para frente dentro do mesmo nó
      nodeMatches.sort(function (a, b) { return b.start - a.start; });

      var content = textNode.nodeValue;
      var parent = textNode.parentNode;
      if (!parent) return;

      // Construir fragmento com texto + equações
      var frag = document.createDocumentFragment();
      var lastEnd = 0;

      // Reordenar para frente para construir o fragmento
      nodeMatches.sort(function (a, b) { return a.start - b.start; });

      for (var j = 0; j < nodeMatches.length; j++) {
        var match = nodeMatches[j];

        // Texto antes da equação
        if (match.start > lastEnd) {
          frag.appendChild(document.createTextNode(content.substring(lastEnd, match.start)));
        }

        // Criar elemento acessível
        var wrapper = createA11yElement(match.latex, match.display);
        frag.appendChild(wrapper);

        lastEnd = match.end;
      }

      // Texto restante após a última equação
      if (lastEnd < content.length) {
        frag.appendChild(document.createTextNode(content.substring(lastEnd)));
      }

      parent.replaceChild(frag, textNode);
    });

    // Tratar equações display que são nós de texto diretamente no container
    // (kramdown coloca \[...\] como texto solto entre tags)
    processDisplayBlocks(container);
  }

  function processDisplayBlocks(container) {
    // Verificar se há divs .math-a11y-display que ficaram dentro de <p> — mover para fora
    var displayDivs = container.querySelectorAll('p > .math-a11y-display');
    for (var i = 0; i < displayDivs.length; i++) {
      var div = displayDivs[i];
      var p = div.parentNode;
      if (p && p.tagName === 'P') {
        // Se o <p> só contém a equação (possivelmente com whitespace), substituir
        var textContent = p.textContent.replace(div.textContent, '').trim();
        if (!textContent) {
          p.parentNode.replaceChild(div, p);
        }
      }
    }
  }

  function createA11yElement(latex, display) {
    var label = latexToText(latex);
    var tag = display ? 'div' : 'span';
    var cssClass = display ? 'math-a11y math-a11y-display' : 'math-a11y math-a11y-inline';

    var wrapper = document.createElement(tag);
    wrapper.className = cssClass;
    wrapper.setAttribute('role', 'math');
    wrapper.setAttribute('aria-label', label);

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
    return wrapper;
  }


  /* =============================================================
     API pública
     ============================================================= */

  return {
    init: init,
    latexToText: latexToText  // exposto para testes
  };

})();
