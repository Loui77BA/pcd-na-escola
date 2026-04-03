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
    // Letras gregas minúsculas
    '\\alpha': 'alfa',
    '\\beta': 'beta',
    '\\gamma': 'gama',
    '\\delta': 'delta',
    '\\epsilon': 'épsilon',
    '\\varepsilon': 'épsilon',
    '\\zeta': 'zeta',
    '\\eta': 'eta',
    '\\theta': 'teta',
    '\\vartheta': 'teta',
    '\\iota': 'iota',
    '\\kappa': 'capa',
    '\\lambda': 'lambda',
    '\\mu': 'mu',
    '\\nu': 'nu',
    '\\xi': 'csi',
    '\\omicron': 'ômicron',
    '\\pi': 'pi',
    '\\varpi': 'pi',
    '\\rho': 'rô',
    '\\varrho': 'rô',
    '\\sigma': 'sigma',
    '\\varsigma': 'sigma',
    '\\tau': 'tau',
    '\\upsilon': 'úpsilon',
    '\\phi': 'fi',
    '\\varphi': 'fi',
    '\\chi': 'qui',
    '\\psi': 'psi',
    '\\omega': 'ômega',
    // Letras gregas maiúsculas
    '\\Alpha': 'alfa maiúsculo',
    '\\Beta': 'beta maiúsculo',
    '\\Gamma': 'gama maiúsculo',
    '\\Delta': 'delta maiúsculo',
    '\\Epsilon': 'épsilon maiúsculo',
    '\\Zeta': 'zeta maiúsculo',
    '\\Eta': 'eta maiúsculo',
    '\\Theta': 'teta maiúsculo',
    '\\Iota': 'iota maiúsculo',
    '\\Kappa': 'capa maiúsculo',
    '\\Lambda': 'lambda maiúsculo',
    '\\Mu': 'mu maiúsculo',
    '\\Nu': 'nu maiúsculo',
    '\\Xi': 'csi maiúsculo',
    '\\Omicron': 'ômicron maiúsculo',
    '\\Pi': 'pi maiúsculo',
    '\\Rho': 'rô maiúsculo',
    '\\Sigma': 'sigma maiúsculo',
    '\\Tau': 'tau maiúsculo',
    '\\Upsilon': 'úpsilon maiúsculo',
    '\\Phi': 'fi maiúsculo',
    '\\Chi': 'qui maiúsculo',
    '\\Psi': 'psi maiúsculo',
    '\\Omega': 'ômega maiúsculo',
    // Infinito e cálculo
    '\\infty': 'infinito',
    '\\partial': 'parcial',
    '\\nabla': 'nabla',
    '\\prime': 'linha',
    '\\backprime': 'linha reversa',
    '\\hbar': 'h barra',
    // Operações aritméticas
    '\\cdot': 'vezes',
    '\\times': 'vezes',
    '\\div': 'dividido por',
    '\\pm': 'mais ou menos',
    '\\mp': 'menos ou mais',
    '\\dagger': 'adaga',
    '\\ddagger': 'dupla adaga',
    // Comparação e relações
    '\\neq': 'diferente de',
    '\\ne': 'diferente de',
    '\\leq': 'menor ou igual a',
    '\\le': 'menor ou igual a',
    '\\geq': 'maior ou igual a',
    '\\ge': 'maior ou igual a',
    '\\ll': 'muito menor que',
    '\\gg': 'muito maior que',
    '\\approx': 'aproximadamente igual a',
    '\\simeq': 'aproximadamente igual a',
    '\\sim': 'semelhante a',
    '\\cong': 'congruente a',
    '\\equiv': 'equivalente a',
    '\\propto': 'proporcional a',
    '\\doteq': 'aproximadamente igual a',
    '\\not\\equiv': 'não equivalente a',
    '\\perp': 'perpendicular a',
    '\\parallel': 'paralelo a',
    // Teoria de conjuntos
    '\\in': 'pertence a',
    '\\notin': 'não pertence a',
    '\\not\\in': 'não pertence a',
    '\\ni': 'contém o elemento',
    '\\subset': 'contido em',
    '\\supset': 'superconjunto de',
    '\\subseteq': 'contido ou igual a',
    '\\supseteq': 'contém ou igual a',
    '\\cup': 'união',
    '\\cap': 'interseção',
    '\\setminus': 'diferença de conjuntos',
    '\\emptyset': 'conjunto vazio',
    '\\varnothing': 'conjunto vazio',
    '\\nsubseteq': 'não contido ou igual a',
    '\\sqsubseteq': 'contido ou igual a',
    '\\nsupseteq': 'não contém ou igual a',
    '\\preceq': 'precede ou igual a',
    '\\succeq': 'sucede ou igual a',
    // Operadores lógicos
    '\\land': 'conjunção',
    '\\wedge': 'conjunção',
    '\\lor': 'disjunção',
    '\\vee': 'disjunção',
    '\\neg': 'negação',
    '\\lnot': 'negação',
    '\\iff': 'se e somente se',
    // Quantificadores
    '\\forall': 'para todo',
    '\\exists': 'existe',
    '\\nexists': 'não existe',
    // Setas
    '\\to': 'para',
    '\\rightarrow': 'seta para direita',
    '\\leftarrow': 'seta para esquerda',
    '\\leftrightarrow': 'seta bidirecional',
    '\\longleftarrow': 'seta para esquerda',
    '\\longrightarrow': 'seta para direita',
    '\\longmapsto': 'mapeia para',
    '\\Rightarrow': 'implica',
    '\\Leftarrow': 'é implicado por',
    '\\Leftrightarrow': 'se e somente se',
    '\\mapsto': 'mapeia para',
    '\\uparrow': 'seta para cima',
    '\\downarrow': 'seta para baixo',
    '\\updownarrow': 'seta para cima e para baixo',
    '\\nearrow': 'seta crescente',
    '\\searrow': 'seta decrescente',
    '\\swarrow': 'seta para baixo à esquerda',
    '\\nwarrow': 'seta para cima à esquerda',
    '\\rightleftharpoons': 'equilíbrio',
    '\\leftrightharpoons': 'equilíbrio reverso',
    '\\Uparrow': 'seta dupla para cima',
    '\\Downarrow': 'seta dupla para baixo',
    '\\Updownarrow': 'seta dupla para cima e para baixo',
    // Álgebra abstrata e tensores
    '\\otimes': 'produto tensorial',
    '\\oplus': 'soma direta',
    '\\circ': 'composição',
    '\\star': 'estrela',
    '\\bullet': 'ponto',
    // Reticências
    '\\ldots': 'reticências',
    '\\cdots': 'reticências',
    '\\vdots': 'reticências verticais',
    '\\ddots': 'reticências diagonais',
    // Diversos
    '\\lfloor': 'abre piso',
    '\\rfloor': 'fecha piso',
    '\\lceil': 'abre teto',
    '\\rceil': 'fecha teto',
    '\\langle': 'abre ângulo',
    '\\rangle': 'fecha ângulo',
    '\\colon': 'dois pontos',
    '\\mid': 'tal que',
    '\\angle': 'ângulo',
    '\\triangle': 'triângulo',
    '\\therefore': 'portanto',
    '\\because': 'porque',
    '\\|': 'norma',
    // Espaçamento
    '\\quad': ', ',
    '\\qquad': ', ',
    '\\,': ' ',
    '\\;': ' ',
    '\\:': ' ',
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
    '\\sinh': 'seno hiperbólico de',
    '\\cosh': 'cosseno hiperbólico de',
    '\\tanh': 'tangente hiperbólica de',
    '\\coth': 'cotangente hiperbólica de',
    '\\sech': 'secante hiperbólica de',
    '\\csch': 'cossecante hiperbólica de',
    '\\log': 'logaritmo de',
    '\\ln': 'logaritmo natural de',
    '\\lg': 'logaritmo decimal de',
    '\\exp': 'exponencial de',
    '\\lim': 'limite',
    '\\limsup': 'limite superior de',
    '\\liminf': 'limite inferior de',
    '\\sup': 'supremo de',
    '\\inf': 'ínfimo de',
    '\\max': 'máximo de',
    '\\min': 'mínimo de',
    '\\det': 'determinante de',
    '\\dim': 'dimensão de',
    '\\ker': 'núcleo de',
    '\\hom': 'homomorfismo de',
    '\\gcd': 'máximo divisor comum de',
    '\\lcm': 'mínimo múltiplo comum de',
    '\\mod': 'módulo',
    '\\bmod': 'módulo',
    '\\deg': 'grau de',
    '\\Pr': 'probabilidade de',
    '\\arg': 'argumento de',
    '\\Re': 'parte real de',
    '\\Im': 'parte imaginária de'
  };

  var BIG_OPS = {
    '\\int': 'integral',
    '\\iint': 'integral dupla',
    '\\iiint': 'integral tripla',
    '\\oint': 'integral de contorno',
    '\\sum': 'somatório',
    '\\prod': 'produtório',
    '\\coprod': 'coprodutório',
    '\\bigcup': 'união',
    '\\bigcap': 'intersecção'
  };

  var ACCENT_CMDS = {
    '\\hat': 'chapéu',
    '\\widehat': 'chapéu',
    '\\bar': 'barra',
    '\\overline': 'barra sobre',
    '\\vec': 'vetor',
    '\\overrightarrow': 'vetor',
    '\\tilde': 'til',
    '\\widetilde': 'til',
    '\\dot': 'ponto',
    '\\ddot': 'dois pontos',
    '\\acute': 'acento agudo',
    '\\grave': 'acento grave',
    '\\breve': 'breve',
    '\\check': 'caron',
    '\\overleftarrow': 'com seta para esquerda',
    '\\underline': 'sublinhado'
  };

  var ENV_NAMES = {
    'matrix': 'matriz',
    'pmatrix': 'matriz',
    'bmatrix': 'matriz',
    'Bmatrix': 'matriz',
    'vmatrix': 'determinante',
    'Vmatrix': 'norma da matriz',
    'cases': 'casos',
    'align': '',
    'aligned': '',
    'gather': '',
    'gathered': '',
    'array': 'arranjo'
  };

  var BLACKBOARD = {
    'R': 'reais',
    'N': 'naturais',
    'Z': 'inteiros',
    'C': 'complexos',
    'Q': 'racionais'
  };

  var ROOT_ORDINALS = {
    '3': 'cúbica',
    '4': 'quarta',
    '5': 'quinta',
    '6': 'sexta',
    '7': 'sétima',
    '8': 'oitava',
    '9': 'nona',
    '10': 'décima'
  };

  var GREEKS = [
    '\\alpha', '\\beta', '\\gamma', '\\delta', '\\epsilon', '\\varepsilon',
    '\\zeta', '\\eta', '\\theta', '\\vartheta', '\\iota', '\\kappa',
    '\\lambda', '\\mu', '\\nu', '\\xi', '\\omicron', '\\pi', '\\rho',
    '\\sigma', '\\tau', '\\upsilon', '\\phi', '\\varphi', '\\chi', '\\psi',
    '\\omega', '\\Alpha', '\\Beta', '\\Gamma', '\\Delta', '\\Epsilon',
    '\\Zeta', '\\Eta', '\\Theta', '\\Iota', '\\Kappa', '\\Lambda', '\\Mu',
    '\\Nu', '\\Xi', '\\Omicron', '\\Pi', '\\Rho', '\\Sigma', '\\Tau',
    '\\Upsilon', '\\Phi', '\\Chi', '\\Psi', '\\Omega'
  ].map(function (k) { return SYMBOLS[k]; });

  var OPERATOR_EXACT = ['e', 'ou', 'se', 'caso'];

  var NON_VALUE_KEYWORDS = [
    'abre', 'fecha', 'mais', 'menos', 'igual', 'negativo', 'positivo',
    'vezes', 'menor', 'maior', 'início', 'fim', ' de', 'dividido',
    'união', 'interseção', 'mapeia', 'implica', 'pertence', 'contido',
    'contém', 'portanto', 'porque', 'norma', 'módulo', 'composição',
    'perpendicular', 'paralelo', 'proporcional', 'aproximadamente',
    'equivalente', 'diferente', 'semelhante', 'congruente', 'não', 'ou',
    'conjunção', 'disjunção', 'negação',
    'ponto', 'dois pontos', 'parcial', 'somente', 'nabla', 'infinito',
    'tende', 'para', 'seta', 'superconjunto', 'diferença de conjuntos',
    'todo', 'existe', 'para todo', 'conjunto', 'equilíbrio', 'adaga',
    'dupla adaga', 'estrela', 'ponto', 'precede', 'sucede', 'soma direta',
    'produto tensorial', 'h barra', 'linha'
  ];

  var RELATIONAL_TEXTS = [
    'diferente de', 'menor ou igual a', 'maior ou igual a',
    'muito menor que', 'muito maior que', 'aproximadamente igual a',
    'semelhante a', 'congruente a', 'equivalente a', 'proporcional a',
    'pertence a', 'não pertence a', 'contido em', 'superconjunto de',
    'contido ou igual a', 'contém ou igual a', 'implica', 'somente se',
    'se e somente se', 'portanto', 'porque'
  ];

  function containsAnyKeyword(str, keywords) {
    for (var i = 0; i < keywords.length; i++) {
      if (str.indexOf(keywords[i]) !== -1) return true;
    }
    return false;
  }

  function isSimpleToken(text) {
    var t = text.trim();
    return /^[a-zA-Z]$/.test(t) || /^\d+$/.test(t);
  }

  function isValueToken(token) {
    if (!token) return false;
    var t = token.trim().replace(/,/g, '');
    if (!t) return false;
    if (OPERATOR_EXACT.indexOf(t) !== -1) return false;
    if (/\s/.test(t) && !/^(fim d|raiz )/.test(t) && GREEKS.indexOf(t) === -1)
      return false;
    if (/^[a-zA-Z0-9]/.test(t) && !containsAnyKeyword(t, NON_VALUE_KEYWORDS))
      return true;
    if (t.indexOf('fim d') === 0) return true;
    if (GREEKS.indexOf(t) !== -1) return true;
    return false;
  }

  function isDifferential(token) {
    if (!token) return false;
    var t = token.trim();
    return /^d[a-zA-Z]$/.test(t) || /^d /.test(t);
  }

  function pushWithImplicitMul(parts, token) {
    if (isDifferential(token)) {
      parts.push(token);
      return;
    }
    var prev = parts.length > 0 ? parts[parts.length - 1] : '';
    if (isValueToken(prev) && isValueToken(token)) {
      parts.push('vezes');
    }
    parts.push(token);
  }

  function latexToText(latex) {
    var input = latex.trim();
    var result = parseExpr(input, 0);
    return cleanText(result.text);
  }

  var OPERATOR_ONLY = [
    'mais', 'menos', 'igual a', 'menor que', 'maior que',
    'menor ou igual a', 'maior ou igual a', 'diferente de',
    'muito menor que', 'muito maior que'
  ];

  function latexToSegments(latex) {
    var input = latex.trim();
    var result = parseExpr(input, 0, true);
    var segs = (result.segments || [cleanText(result.text)])
      .filter(function (s) { return s.length > 0; });
    if (segs.length <= 1) return segs;
    // Merge operator-only segments with the next segment
    var merged = [];
    for (var i = 0; i < segs.length; i++) {
      if (OPERATOR_ONLY.indexOf(segs[i]) !== -1 && i + 1 < segs.length) {
        merged.push(segs[i] + ' ' + segs[i + 1]);
        i++;
      } else {
        merged.push(segs[i]);
      }
    }
    segs = merged;
    if (segs.length <= 1) return segs;
    var totalLen = segs.reduce(function (a, b) { return a + b.length; }, 0);
    if (totalLen < 80) return [segs.join(' ')];
    return segs;
  }

  function parseExpr(input, pos, topLevel) {
    var parts = [];
    var segments = topLevel ? [] : null;
    var depth = 0;

    function flushSegment() {
      if (segments !== null && depth === 0 && parts.length > 0) {
        segments.push(cleanText(parts.join(' ')));
        parts = [];
      }
    }

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

      // Apóstrofos (notação de derivada: f', f'', f''')
      if (ch === "'") {
        var primeCount = 0;
        while (pos < input.length && input[pos] === "'") {
          primeCount++;
          pos++;
        }
        if (primeCount === 1) {
          parts.push('linha');
        } else if (primeCount === 2) {
          parts.push('duas linhas');
        } else if (primeCount === 3) {
          parts.push('três linhas');
        } else {
          parts.push(primeCount + ' linhas');
        }
        continue;
      }

      // Comando LaTeX (\...)
      if (ch === '\\') {
        // Detectar infix \choose
        var peekInfixPos = pos + 1;
        var peekInfixCmd = '';
        while (peekInfixPos < input.length && /[a-zA-Z]/.test(input[peekInfixPos])) {
          peekInfixCmd += input[peekInfixPos];
          peekInfixPos++;
        }
        if (peekInfixCmd === 'choose') {
          var chooseNum = cleanText(parts.join(' '));
          parts.length = 0;
          pos = peekInfixPos;
          var chooseDen = parseExpr(input, pos);
          parts.push('binomial de ' + chooseNum + ' sobre ' + cleanText(chooseDen.text));
          pos = chooseDen.pos;
          continue;
        }

        var cmdResult = parseCommand(input, pos);
        if (cmdResult.text !== null) {
          var cmdText = cmdResult.text;
          if (/^abre /.test(cmdText) || /^início de /.test(cmdText)) {
            depth++;
          } else if (/^fecha /.test(cmdText) || /^fim de /.test(cmdText)) {
            depth = Math.max(0, depth - 1);
          }
          if (cmdResult.bigOp || RELATIONAL_TEXTS.indexOf(cmdText) !== -1) {
            flushSegment();
          }
          if (isValueToken(cmdText)) {
            pushWithImplicitMul(parts, cmdText);
          } else {
            parts.push(cmdText);
          }
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

      // Fatorial
      if (ch === '!') {
        parts.push('fatorial');
        pos++;
        continue;
      }

      // Vírgula
      if (ch === ',') {
        parts.push(',');
        pos++;
        continue;
      }

      // Operadores
      if (ch === '+') {
        flushSegment();
        parts.push('mais');
        pos++;
        continue;
      }
      if (ch === '=') {
        flushSegment();
        parts.push('igual a');
        pos++;
        continue;
      }
      if (ch === '-') {
        flushSegment();
        parts.push('menos');
        pos++;
        continue;
      }
      if (ch === '<') {
        flushSegment();
        parts.push('menor que');
        pos++;
        continue;
      }
      if (ch === '>') {
        flushSegment();
        parts.push('maior que');
        pos++;
        continue;
      }

      // Parênteses e colchetes
      if (ch === '(') {
        depth++;
        parts.push('abre parênteses');
        pos++;
        continue;
      }
      if (ch === ')') {
        depth = Math.max(0, depth - 1);
        parts.push('fecha parênteses');
        pos++;
        continue;
      }
      if (ch === '[') {
        depth++;
        parts.push('abre colchetes');
        pos++;
        continue;
      }
      if (ch === ']') {
        depth = Math.max(0, depth - 1);
        parts.push('fecha colchetes');
        pos++;
        continue;
      }

      // Dois pontos (razão/proporção)
      if (ch === ':') {
        parts.push('para');
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
        if (/[0-9]/.test(ch)) {
          var numStr = '';
          while (pos < input.length && /[0-9.]/.test(input[pos])) {
            numStr += input[pos];
            pos++;
          }
          // Converter ponto decimal para "vírgula" em português
          if (numStr.indexOf('.') !== -1) {
            var numParts = numStr.split('.');
            numStr = numParts[0] + ' vírgula ' + numParts[1];
          }
          pushWithImplicitMul(parts, numStr);
        } else if (ch === 'd') {
          var nextPos = pos + 1;
          if (nextPos < input.length && /[a-zA-Z]/.test(input[nextPos]) && input[nextPos] !== 'd') {
            parts.push('d' + input[nextPos]);
            pos += 2;
          } else if (nextPos < input.length && input[nextPos] === '\\') {
            var peek = parseCommand(input, nextPos);
            if (peek.text) {
              parts.push('d ' + peek.text);
              pos = peek.pos;
            } else {
              pushWithImplicitMul(parts, ch);
              pos++;
            }
          } else {
            pushWithImplicitMul(parts, ch);
            pos++;
          }
        } else {
          pushWithImplicitMul(parts, ch);
          pos++;
        }
        continue;
      }

      // Caractere desconhecido — pular
      pos++;
    }

    if (topLevel) {
      flushSegment();
      return { text: segments.join(' '), pos: pos, segments: segments };
    }
    return { text: parts.join(' '), pos: pos };
  }

  function formatFraction(numText, denText) {
    var num = numText.trim() || 'vazio';
    var den = denText.trim() || 'vazio';
    if (isSimpleToken(num) && isSimpleToken(den)) {
      return num + ' sobre ' + den;
    }
    return 'início de fração ' + num + ' sobre ' + den + ' fim de fração';
  }

  function parseXArrow(input, pos, directionLabel) {
    pos = skipSpaces(input, pos);
    var below = '';
    if (pos < input.length && input[pos] === '[') {
      pos++;
      var belowStr = '';
      while (pos < input.length && input[pos] !== ']') {
        belowStr += input[pos];
        pos++;
      }
      if (pos < input.length) pos++;
      below = latexToText(belowStr);
    }
    var above = consumeArg(input, pos);
    pos = above.pos;
    var text = directionLabel;
    if (above.text) text += ' com ' + above.text + ' acima';
    if (below) text += ' e ' + below + ' abaixo';
    return { text: text, pos: pos };
  }

  function parseCommand(input, pos) {
    var start = pos;
    pos++; // pular '\'

    // Comandos de um caractere
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
        // \left\| → norma, \left\lfloor, \left\lceil, \left\langle
        if (delim === '\\') {
          var leftCmdResult = parseLeftRightDelim(input, pos);
          if (leftCmdResult) return leftCmdResult;
          pos++;
          return { text: 'abre chaves', pos: pos };
        }
        pos++;
        if (delim === '(') return { text: 'abre parênteses', pos: pos };
        if (delim === '[') return { text: 'abre colchetes', pos: pos };
        if (delim === '{') return { text: 'abre chaves', pos: pos };
        if (delim === '|') return { text: 'abre valor absoluto', pos: pos };
        if (delim === '.') return { text: '', pos: pos };
      }
      return { text: 'abre parênteses', pos: pos };
    }

    if (fullCmd === '\\right') {
      pos = skipSpaces(input, pos);
      if (pos < input.length) {
        var rDelim = input[pos];
        // \right\| → norma, \right\rfloor, \right\rceil, \right\rangle
        if (rDelim === '\\') {
          var rightCmdResult = parseLeftRightDelim(input, pos);
          if (rightCmdResult) return rightCmdResult;
          pos++;
          return { text: 'fecha chaves', pos: pos };
        }
        pos++;
        if (rDelim === ')') return { text: 'fecha parênteses', pos: pos };
        if (rDelim === ']') return { text: 'fecha colchetes', pos: pos };
        if (rDelim === '}') return { text: 'fecha chaves', pos: pos };
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

      var numTrim = num.text.trim();
      var denTrim = den.text.trim();

      // Derivada de ordem superior: \frac{d^2 y}{dx^2}
      // ATENÇÃO: estas regex dependem dos textos exatos produzidos por
      // parseSuperscript() — "ao quadrado", "ao cubo", "elevado a N".
      // Se parseSuperscript mudar esses textos, a detecção de derivadas quebrará.
      var derivMatch = numTrim.match(/^d (ao quadrado|ao cubo|elevado a \d+)\s*(.*)$/);
      var denDerivMatch = denTrim.match(/^d([a-zA-Z])(\s+(ao quadrado|ao cubo|elevado a \d+))?$/);
      if (derivMatch && denDerivMatch) {
        var dOrder = derivMatch[1];
        var dFunc = derivMatch[2] ? derivMatch[2].trim() : '';
        var varName = denDerivMatch[1];
        var orderLabel = '';
        if (dOrder === 'ao quadrado') orderLabel = 'segunda ';
        else if (dOrder === 'ao cubo') orderLabel = 'terceira ';
        else if (dOrder && dOrder.indexOf('elevado a') === 0)
          orderLabel = 'de ordem ' + dOrder.replace('elevado a ', '') + ' ';
        if (dFunc) {
          return { text: orderLabel + 'derivada de ' + dFunc + ' em relação a ' + varName, pos: pos };
        }
        return { text: orderLabel + 'derivada em relação a ' + varName + ' de', pos: pos };
      }

      // Derivada simples: \frac{d}{dx}
      if (numTrim === 'd' && /^d\s*[a-zA-Z]/.test(denTrim)) {
        var dVarName = denTrim.replace(/^d\s*/, '');
        return { text: 'derivada em relação a ' + dVarName + ' de', pos: pos };
      }

      // Derivada parcial de ordem superior
      var partialNumMatch = numTrim.match(/^parcial\s*(ao quadrado|ao cubo|elevado a \d+)?\s*(.*)$/);
      var partialDenMatch = denTrim.match(/^parcial\s*(.+)$/);
      if (partialNumMatch && partialDenMatch) {
        var pOrder = partialNumMatch[1];
        var pFunc = partialNumMatch[2] || '';
        var pVarName = partialDenMatch[1].replace(/\s*(ao quadrado|ao cubo|elevado a \d+)\s*$/, '');
        var pOrderLabel = '';
        if (pOrder === 'ao quadrado') pOrderLabel = 'segunda ';
        else if (pOrder === 'ao cubo') pOrderLabel = 'terceira ';
        else if (pOrder && pOrder.indexOf('elevado a') === 0)
          pOrderLabel = 'de ordem ' + pOrder.replace('elevado a ', '') + ' ';
        if (pFunc) {
          return { text: pOrderLabel + 'derivada parcial de ' + pFunc + ' em relação a ' + pVarName, pos: pos };
        }
        return { text: pOrderLabel + 'derivada parcial em relação a ' + pVarName + ' de', pos: pos };
      }

      return { text: formatFraction(num.text, den.text), pos: pos };
    }

    // \sqrt[n]{x} ou \sqrt{x}
    if (fullCmd === '\\sqrt') {
      pos = skipSpaces(input, pos);
      if (pos < input.length && input[pos] === '[') {
        pos++;
        var nthStr = '';
        while (pos < input.length && input[pos] !== ']') {
          nthStr += input[pos];
          pos++;
        }
        if (pos < input.length) pos++;
        var nthArg = consumeArg(input, pos);
        pos = nthArg.pos;
        var nthText = latexToText(nthStr);
        var rootLabel = ROOT_ORDINALS[nthText] || nthText + '-ésima';
        return { text: 'raiz ' + rootLabel + ' de ' + (nthArg.text.trim() || 'vazio'), pos: pos };
      }
      var sqrtArg = consumeArg(input, pos);
      pos = sqrtArg.pos;
      return { text: 'raiz quadrada de ' + (sqrtArg.text.trim() || 'vazio'), pos: pos };
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
        return { text: opName + ' de ' + lowerLim + ' até ' + upperLim, pos: pos, bigOp: true };
      }
      if (lowerLim) {
        return { text: opName + ' de ' + lowerLim, pos: pos, bigOp: true };
      }
      return { text: opName + ' de', pos: pos, bigOp: true };
    }

    // \lim com subscrito "quando...tende a"
    if (fullCmd === '\\lim' || fullCmd === '\\limsup' || fullCmd === '\\liminf') {
      var limLabel = FUNCTIONS[fullCmd];
      // Remover "de" final das labels de limsup/liminf para evitar "limite superior de quando"
      limLabel = limLabel.replace(/ de$/, '');
      var limPos = skipSpaces(input, pos);
      if (limPos < input.length && input[limPos] === '_') {
        limPos++;
        var limSub = consumeArg(input, limPos);
        var limText = limSub.text.trim();
        // Substituir "para" (produzido por \to) por "tende a" no contexto de limites.
        // Ex: "x para 0" → "x tende a 0". Seguro porque subscritos de \lim são
        // tipicamente expressões simples como "x \to 0" ou "n \to \infty".
        limText = limText.replace(/\bpara\b/g, 'tende a');
        return { text: limLabel + ' quando ' + limText + ' de', pos: limSub.pos, bigOp: true };
      }
      return { text: limLabel + ' de', pos: pos, bigOp: true };
    }

    // \log com base opcional
    if (fullCmd === '\\log') {
      var logPos = skipSpaces(input, pos);
      if (logPos < input.length && input[logPos] === '_') {
        logPos++;
        var logBase = consumeArg(input, logPos);
        return { text: 'logaritmo na base ' + logBase.text + ' de', pos: logBase.pos };
      }
      return { text: FUNCTIONS[fullCmd], pos: pos };
    }

    // \binom, \dbinom, \tbinom
    if (fullCmd === '\\binom' || fullCmd === '\\dbinom' || fullCmd === '\\tbinom') {
      pos = skipSpaces(input, pos);
      var binomN = consumeArg(input, pos);
      pos = binomN.pos;
      pos = skipSpaces(input, pos);
      var binomK = consumeArg(input, pos);
      pos = binomK.pos;
      return { text: 'binomial de ' + (binomN.text.trim() || 'vazio') + ' sobre ' + (binomK.text.trim() || 'vazio'), pos: pos };
    }

    // \pmod{n}
    if (fullCmd === '\\pmod') {
      pos = skipSpaces(input, pos);
      var pmodArg = consumeArg(input, pos);
      pos = pmodArg.pos;
      return { text: 'módulo ' + pmodArg.text, pos: pos };
    }

    // \cfrac{num}{den} — fração contínua (mesmo tratamento de \frac)
    if (fullCmd === '\\cfrac' || fullCmd === '\\dfrac' || fullCmd === '\\tfrac') {
      pos = skipSpaces(input, pos);
      var cfNum = consumeArg(input, pos);
      pos = cfNum.pos;
      pos = skipSpaces(input, pos);
      var cfDen = consumeArg(input, pos);
      pos = cfDen.pos;
      return { text: formatFraction(cfNum.text, cfDen.text), pos: pos };
    }

    // \begin{environment}
    if (fullCmd === '\\begin') {
      return parseEnvironment(input, pos);
    }

    // \mathbb{R}, \mathbb{N}, etc.
    if (fullCmd === '\\mathbb') {
      pos = skipSpaces(input, pos);
      if (pos < input.length && input[pos] === '{') {
        var bbArg = consumeArg(input, pos);
        var bbText = BLACKBOARD[bbArg.text.trim()] || bbArg.text;
        return { text: bbText, pos: bbArg.pos };
      }
      return { text: '', pos: pos };
    }

    // Acentos: \hat, \vec, \bar, \tilde, etc.
    if (ACCENT_CMDS[fullCmd]) {
      var accentName = ACCENT_CMDS[fullCmd];
      pos = skipSpaces(input, pos);
      var accentArg;
      if (pos < input.length && input[pos] === '{') {
        accentArg = consumeArg(input, pos);
      } else if (pos < input.length && /[a-zA-Z0-9]/.test(input[pos])) {
        accentArg = { text: input[pos], pos: pos + 1 };
      } else {
        return { text: '', pos: pos };
      }
      if (fullCmd === '\\vec' || fullCmd === '\\overrightarrow') {
        return { text: 'vetor ' + accentArg.text, pos: accentArg.pos };
      }
      return { text: accentArg.text + ' ' + accentName, pos: accentArg.pos };
    }

    // \overset{top}{base}
    if (fullCmd === '\\overset') {
      pos = skipSpaces(input, pos);
      var overTopArg = consumeArg(input, pos);
      pos = overTopArg.pos;
      pos = skipSpaces(input, pos);
      var overBaseArg = consumeArg(input, pos);
      pos = overBaseArg.pos;
      return { text: overBaseArg.text + ' com ' + overTopArg.text + ' acima', pos: pos };
    }

    // \underset{bottom}{base}
    if (fullCmd === '\\underset') {
      pos = skipSpaces(input, pos);
      var underBottomArg = consumeArg(input, pos);
      pos = underBottomArg.pos;
      pos = skipSpaces(input, pos);
      var underBaseArg = consumeArg(input, pos);
      pos = underBaseArg.pos;
      return { text: underBaseArg.text + ' com ' + underBottomArg.text + ' abaixo', pos: pos };
    }

    // \stackrel{top}{base}
    if (fullCmd === '\\stackrel') {
      pos = skipSpaces(input, pos);
      var stackTop = consumeArg(input, pos);
      pos = stackTop.pos;
      pos = skipSpaces(input, pos);
      var stackBase = consumeArg(input, pos);
      pos = stackBase.pos;
      return { text: stackBase.text + ' com ' + stackTop.text + ' acima', pos: pos };
    }

    // \xrightarrow[below]{above} e \xleftarrow[below]{above}
    if (fullCmd === '\\xrightarrow') {
      return parseXArrow(input, pos, 'seta para direita');
    }
    if (fullCmd === '\\xleftarrow') {
      return parseXArrow(input, pos, 'seta para esquerda');
    }

    // \not — negação prefixada genérica
    if (fullCmd === '\\not') {
      // Tentar combinar com próximo comando: \not\subset → "não contido em"
      pos = skipSpaces(input, pos);
      if (pos < input.length && input[pos] === '\\') {
        var notMatch = input.substring(pos).match(/^\\[a-zA-Z]+/);
        if (notMatch) {
          var notPairKey = '\\not' + notMatch[0];
          if (SYMBOLS[notPairKey] !== undefined) {
            pos += notMatch[0].length;
            return { text: SYMBOLS[notPairKey], pos: pos };
          }
        }
        var nextCmd = parseCommand(input, pos);
        return { text: 'não ' + nextCmd.text, pos: nextCmd.pos };
      }
      return { text: 'não', pos: pos };
    }

    // \phantom, \hphantom, \vphantom — espaçadores silenciosos
    if (fullCmd === '\\phantom' || fullCmd === '\\hphantom' || fullCmd === '\\vphantom') {
      pos = skipSpaces(input, pos);
      if (pos < input.length && input[pos] === '{') {
        var phantomArg = consumeArg(input, pos);
        pos = phantomArg.pos;
      }
      return { text: '', pos: pos };
    }

    // Funções trigonométricas etc.
    if (FUNCTIONS[fullCmd]) {
      return { text: FUNCTIONS[fullCmd], pos: pos };
    }

    // Símbolos simples
    if (SYMBOLS[fullCmd] !== undefined) {
      return { text: SYMBOLS[fullCmd], pos: pos };
    }

    // Comandos de formatação — manter conteúdo, ignorar comando
    var passthrough = ['\\text', '\\mathrm', '\\mathbf', '\\mathit',
                       '\\mathcal', '\\textbf', '\\textit', '\\operatorname'];
    if (passthrough.indexOf(fullCmd) !== -1) {
      pos = skipSpaces(input, pos);
      if (pos < input.length && input[pos] === '{') {
        pos++;
        var ptText = '';
        var ptDepth = 1;
        while (pos < input.length && ptDepth > 0) {
          if (input[pos] === '{') ptDepth++;
          else if (input[pos] === '}') { ptDepth--; if (ptDepth === 0) break; }
          ptText += input[pos];
          pos++;
        }
        if (pos < input.length) pos++;
        return { text: ptText, pos: pos };
      }
      var ptArg = consumeArg(input, pos);
      return { text: ptArg.text, pos: ptArg.pos };
    }

    // Comando desconhecido — preservar argumento como texto se existir
    pos = skipSpaces(input, pos);
    if (pos < input.length && input[pos] === '{') {
      pos++;
      var ukText = '';
      var ukDepth = 1;
      while (pos < input.length && ukDepth > 0) {
        if (input[pos] === '{') ukDepth++;
        else if (input[pos] === '}') { ukDepth--; if (ukDepth === 0) break; }
        ukText += input[pos];
        pos++;
      }
      if (pos < input.length) pos++;
      return { text: ukText || cmdName, pos: pos };
    }
    return { text: cmdName, pos: pos };
  }

  function parseEnvironment(input, pos) {
    pos = skipSpaces(input, pos);
    if (pos >= input.length || input[pos] !== '{') {
      return { text: '', pos: pos };
    }
    pos++;
    var envName = '';
    while (pos < input.length && input[pos] !== '}') {
      envName += input[pos];
      pos++;
    }
    if (pos < input.length) pos++;
    // Pular argumento opcional [...]
    if (pos < input.length && input[pos] === '[') {
      while (pos < input.length && input[pos] !== ']') pos++;
      if (pos < input.length) pos++;
    }
    // Para array, pular argumento de alinhamento {ccc}
    if (envName === 'array' && pos < input.length && input[pos] === '{') {
      while (pos < input.length && input[pos] !== '}') pos++;
      if (pos < input.length) pos++;
    }
    var endTag = '\\end{' + envName + '}';
    var endIdx = input.indexOf(endTag, pos);
    if (endIdx === -1) {
      var fallback = parseExpr(input, pos);
      return { text: fallback.text, pos: fallback.pos };
    }
    var body = input.substring(pos, endIdx);
    var afterEnd = endIdx + endTag.length;
    var envLabel = ENV_NAMES[envName];
    if (envLabel === undefined) {
      var unknownResult = parseExpr(body, 0);
      return { text: unknownResult.text, pos: afterEnd };
    }
    if (envName === 'cases') {
      return parseCasesEnv(body, afterEnd);
    }
    if (envLabel === 'matriz' || envLabel === 'determinante' ||
        envLabel === 'norma da matriz' || envName === 'array') {
      return parseMatrixEnv(body, envLabel || 'arranjo', afterEnd);
    }
    // align, gather, etc. — processar conteúdo sem wrapper
    var alignResult = parseExpr(body, 0);
    return { text: alignResult.text, pos: afterEnd };
  }

  function parseMatrixEnv(body, label, afterEnd) {
    var rows = splitRows(body);
    var parts = [];
    var numRows = rows.length;
    var numCols = rows.length > 0 ? rows[0].split('&').length : 0;
    parts.push(label + ' ' + numRows + ' por ' + numCols);
    for (var r = 0; r < rows.length; r++) {
      var cols = rows[r].split('&');
      var colTexts = [];
      for (var c = 0; c < cols.length; c++) {
        var cellResult = latexToText(cols[c].trim());
        if (cellResult) colTexts.push(cellResult);
      }
      if (colTexts.length > 0) {
        parts.push('linha ' + (r + 1) + ': ' + colTexts.join(', '));
      }
    }
    parts.push('fim de ' + label);
    return { text: parts.join('; '), pos: afterEnd };
  }

  function parseCasesEnv(body, afterEnd) {
    var rows = splitRows(body);
    var parts = [];
    parts.push('início de casos');
    for (var r = 0; r < rows.length; r++) {
      var cols = rows[r].split('&');
      var value = latexToText(cols[0].trim());
      var condition = cols.length > 1 ? latexToText(cols[1].trim()) : '';
      if (value) {
        if (condition) {
          parts.push(value + ' se ' + condition);
        } else {
          parts.push(value);
        }
      }
    }
    parts.push('fim de casos');
    return { text: parts.join('; '), pos: afterEnd };
  }

  function splitRows(body) {
    var rows = body.split(/\\\\/);
    var result = [];
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i].trim();
      row = row.replace(/^\[.*?\]/, '').trim();
      if (row) result.push(row);
    }
    return result;
  }

  function parseLeftRightDelim(input, pos) {
    // pos aponta para '\' dentro de \left ou \right
    var dp = pos + 1;
    var dCmd = '';
    while (dp < input.length && /[a-zA-Z|]/.test(input[dp])) {
      dCmd += input[dp];
      dp++;
    }
    var DELIM_MAP = {
      '|': 'norma',
      'lfloor': 'abre piso', 'rfloor': 'fecha piso',
      'lceil': 'abre teto', 'rceil': 'fecha teto',
      'langle': 'abre ângulo', 'rangle': 'fecha ângulo',
      'lVert': 'abre norma', 'rVert': 'fecha norma'
    };
    if (DELIM_MAP[dCmd] !== undefined) {
      var label = DELIM_MAP[dCmd];
      if (dCmd === '|') {
        // Detectar se é abertura ou fechamento pelo contexto (não é possível, usar genérico)
        label = 'norma';
      }
      return { text: label, pos: dp };
    }
    return null;
  }

  function parseGroup(input, pos) {
    pos++; // pular '{'
    var result = parseExpr(input, pos);
    if (result.pos < input.length && input[result.pos] === '}') {
      result.pos++;
    }
    return { text: result.text, pos: result.pos };
  }

  // ATENÇÃO: os textos "ao quadrado", "ao cubo", "elevado a N" são usados
  // por regex no handler de \frac para detectar derivadas.
  function parseSuperscript(input, pos) {
    pos++; // pular '^'
    var arg = consumeArg(input, pos);
    var text = arg.text.trim();

    if (text === '2') return { text: 'ao quadrado', pos: arg.pos };
    if (text === '3') return { text: 'ao cubo', pos: arg.pos };
    if (text === 'negativo 1' || text === 'menos 1')
      return { text: 'inverso', pos: arg.pos };
    if (text === 'T' || text === 't')
      return { text: 'transposto', pos: arg.pos };
    if (text === 'composição')
      return { text: 'graus', pos: arg.pos };
    if (/^(linha|duas linhas|três linhas|\d+ linhas)$/.test(text)) {
      return { text: text, pos: arg.pos };
    }

    if (isSimpleToken(text)) {
      return { text: 'elevado a ' + text, pos: arg.pos };
    }
    return { text: 'elevado a início do expoente ' + text + ' fim do expoente', pos: arg.pos };
  }

  function parseSubscript(input, pos) {
    pos++; // pular '_'
    var arg = consumeArg(input, pos);
    return { text: 'índice ' + arg.text, pos: arg.pos };
  }

  function consumeArg(input, pos) {
    pos = skipSpaces(input, pos);
    if (pos >= input.length) return { text: '', pos: pos };

    if (input[pos] === '{') {
      return parseGroup(input, pos);
    }

    if (input[pos] === '\\') {
      var cmdResult = parseCommand(input, pos);
      return { text: cmdResult.text || '', pos: cmdResult.pos };
    }

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
    return text.replace(/\s+/g, ' ').trim();
  }


  /* =============================================================
     SEÇÃO B — Scanner de delimitadores no DOM
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
     SEÇÃO C — Orquestração: renderizar + montar DOM acessível
     ============================================================= */

  function init(options) {
    var container = (options && options.container) || document.querySelector('.post-content');
    if (!container) return;
    if (typeof katex === 'undefined') {
      console.warn('MathA11y: KaTeX não encontrado.');
      return;
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

    var multiSegment = segments.length > 1;
    if (!multiSegment) {
      wrapper.setAttribute('aria-label', label);
    }

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

    if (multiSegment) {
      for (var i = 0; i < segments.length; i++) {
        var seg = document.createElement('span');
        seg.className = 'sr-only';
        seg.textContent = segments[i];
        wrapper.appendChild(seg);
      }
    }

    return wrapper;
  }


  /* =============================================================
     API pública
     ============================================================= */

  return {
    init: init,
    latexToText: latexToText,
    latexToSegments: latexToSegments
  };

})();
