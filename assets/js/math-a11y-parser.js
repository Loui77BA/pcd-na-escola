/**
 * MathA11y — Parser: conversor LaTeX → texto acessível em português
 *
 * Este arquivo deve ser carregado DEPOIS de math-a11y-data.js
 * e ANTES de math-a11y.js.
 */
var MathA11y = MathA11y || {};

MathA11y._parser = (function () {
  'use strict';

  var D = MathA11y._data;
  var SYMBOLS = D.SYMBOLS;
  var FUNCTIONS = D.FUNCTIONS;
  var BIG_OPS = D.BIG_OPS;
  var ACCENT_CMDS = D.ACCENT_CMDS;
  var ENV_NAMES = D.ENV_NAMES;
  var BLACKBOARD = D.BLACKBOARD;
  var ROOT_ORDINALS = D.ROOT_ORDINALS;
  var GREEKS = D.GREEKS;
  var OPERATOR_EXACT = D.OPERATOR_EXACT;
  var NON_VALUE_KEYWORDS = D.NON_VALUE_KEYWORDS;
  var RELATIONAL_TEXTS = D.RELATIONAL_TEXTS;
  var OPERATOR_ONLY = D.OPERATOR_ONLY;
  var COLOR_NAMES = D.COLOR_NAMES;

  /* =============================================================
     Funções auxiliares
     ============================================================= */

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

  function isSimpleResult(parsedText) {
    var t = parsedText.trim();
    if (/^\d+$/.test(t)) return true;
    if (/^[a-zA-Z]$/.test(t)) return true;
    if (GREEKS.indexOf(t) !== -1) return true;
    if (/^(ao quadrado|ao cubo|inverso|transposto|graus|linha|duas linhas|três linhas|\d+ linhas)$/.test(t)) return true;
    return false;
  }

  var fracDepth = 0;

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

  /* === Detecção de token de valor precedente (para menos unário) === */
  function isPrecedingValue(parts) {
    if (parts.length === 0) return false;
    var last = parts[parts.length - 1].trim().replace(/,$/, '').trim();
    if (!last) return false;
    if (/^fecha /.test(last)) return true;
    if (/^fim d/.test(last)) return true;
    if (/^(ao quadrado|ao cubo|inverso|transposto|graus|linha|duas linhas|três linhas|\d+ linhas)$/.test(last)) return true;
    if (/^elevado a /.test(last)) return true;
    if (/^sub /.test(last)) return true;
    if (/^valor absoluto de /.test(last)) return true;
    if (isValueToken(last)) return true;
    return false;
  }

  /* === Busca de pipe de fechamento para valor absoluto === */
  function findMatchingPipe(input, startPos) {
    var p = startPos;
    var braceDepth = 0;
    while (p < input.length) {
      var c = input[p];
      if (c === '{') { braceDepth++; }
      else if (c === '}') {
        if (braceDepth > 0) { braceDepth--; }
        else { return -1; }
      }
      else if (c === '|' && braceDepth === 0) { return p; }
      else if (c === '\\') {
        p++;
        while (p < input.length && /[a-zA-Z]/.test(input[p])) { p++; }
        continue;
      }
      p++;
    }
    return -1;
  }

  /* === Formatação de inteiros grandes com agrupamento === */
  function formatLargeInteger(numStr) {
    if (numStr.length < 4) return numStr;
    var result = '';
    var count = 0;
    for (var i = numStr.length - 1; i >= 0; i--) {
      if (count > 0 && count % 3 === 0) {
        result = '.' + result;
      }
      result = numStr[i] + result;
      count++;
    }
    return result;
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

  function skipSpaces(input, pos) {
    while (pos < input.length && (input[pos] === ' ' || input[pos] === '\t' || input[pos] === '\n')) {
      pos++;
    }
    return pos;
  }

  function cleanText(text) {
    return text.replace(/\s+/g, ' ').trim();
  }

  function formatFraction(numText, denText, depth) {
    var num = numText.trim() || 'vazio';
    var den = denText.trim() || 'vazio';
    var d = (typeof depth === 'number') ? depth : 0;
    var verbose = MathA11y._config && MathA11y._config.verbosity === 'verbose';
    if (!verbose && d === 0 && isSimpleResult(num) && isSimpleResult(den)) {
      return num + ' sobre ' + den;
    }
    var prefix, suffix;
    if (d === 0) {
      prefix = 'início da fração';
      suffix = 'fim da fração';
    } else if (d === 1) {
      prefix = 'início da fração interna';
      suffix = 'fim da fração interna';
    } else {
      prefix = 'início da fração nível ' + (d + 1);
      suffix = 'fim da fração nível ' + (d + 1);
    }
    return prefix + ', ' + num + ', sobre, ' + den + ', ' + suffix;
  }

  /* =============================================================
     API pública do parser: latexToText e latexToSegments
     ============================================================= */

  function latexToText(latex) {
    var input = latex.trim();
    var result = parseExpr(input, 0);
    return cleanText(result.text);
  }

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
    if (totalLen < 50) return [segs.join(' ')];
    return segs;
  }

  /* =============================================================
     parseExpr — parser principal de expressões
     ============================================================= */

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
          if (cmdResult.bigOp || cmdResult.isFraction || RELATIONAL_TEXTS.indexOf(cmdText) !== -1) {
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
        if (supResult.hasMarkers && parts.length > 0) {
          parts[parts.length - 1] = parts[parts.length - 1] + ',';
        }
        parts.push(supResult.text);
        pos = supResult.pos;
        continue;
      }

      // Subscript
      if (ch === '_') {
        var prevText = parts.length > 0 ? parts[parts.length - 1] : '';
        var subResult = parseSubscript(input, pos, prevText);
        if (subResult.hasMarkers && parts.length > 0) {
          parts[parts.length - 1] = parts[parts.length - 1] + ',';
        }
        parts.push(subResult.text);
        pos = subResult.pos;
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
        if (isPrecedingValue(parts)) {
          parts.push('menos');
        } else {
          parts.push('negativo de');
        }
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

      // Pipe — detectar pares |...| como valor absoluto
      if (ch === '|') {
        var pipeClosePos = findMatchingPipe(input, pos + 1);
        if (pipeClosePos !== -1) {
          var pipeContent = input.substring(pos + 1, pipeClosePos);
          var pipeResult = parseExpr(pipeContent, 0);
          var pipeParsed = cleanText(pipeResult.text);
          pos = pipeClosePos + 1;
          if (isSimpleResult(pipeParsed)) {
            pushWithImplicitMul(parts, 'valor absoluto de ' + pipeParsed);
          } else {
            pushWithImplicitMul(parts, 'início do valor absoluto, ' + pipeParsed + ', fim do valor absoluto');
          }
        } else {
          parts.push('barra vertical');
          pos++;
        }
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
          // Dígitos após a vírgula são lidos individualmente (ex: 3.14 → "3 vírgula 1 4")
          if (numStr.indexOf('.') !== -1) {
            var numParts = numStr.split('.');
            var decPart = numParts[1];
            if (decPart.length > 1) {
              numStr = numParts[0] + ' vírgula ' + decPart.split('').join(' ');
            } else {
              numStr = numParts[0] + ' vírgula ' + decPart;
            }
          } else {
            // Inteiros com 4+ dígitos: agrupamento com pontos (ex: 1000 → "1.000")
            numStr = formatLargeInteger(numStr);
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

  /* =============================================================
     parseCommand — comandos LaTeX (\cmd)
     ============================================================= */

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
      var currentFracDepth = fracDepth;
      fracDepth++;
      var num = consumeArg(input, pos);
      pos = num.pos;
      pos = skipSpaces(input, pos);
      var den = consumeArg(input, pos);
      pos = den.pos;
      fracDepth--;

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

      return { text: formatFraction(num.text, den.text, currentFracDepth), pos: pos, isFraction: true };
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
        var nthContent = nthArg.text.trim() || 'vazio';
        if (isSimpleResult(nthContent)) {
          return { text: 'raiz ' + rootLabel + ' de ' + nthContent, pos: pos };
        }
        return { text: 'raiz ' + rootLabel + ' de, início da raiz, ' + nthContent + ', fim da raiz', pos: pos };
      }
      var sqrtArg = consumeArg(input, pos);
      pos = sqrtArg.pos;
      var sqrtContent = sqrtArg.text.trim() || 'vazio';
      if (isSimpleResult(sqrtContent)) {
        return { text: 'raiz quadrada de ' + sqrtContent, pos: pos };
      }
      return { text: 'raiz quadrada de, início da raiz, ' + sqrtContent + ', fim da raiz', pos: pos };
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

      // Detectar padrão "var igual a valor" no limite inferior (ex: i=1)
      var indexMatch = lowerLim.match(/^([a-zA-Z])\s+igual a\s+(.+)$/);
      if (indexMatch && upperLim) {
        return { text: opName + ' para ' + indexMatch[1] + ' de ' + indexMatch[2] + ' até ' + upperLim, pos: pos, bigOp: true };
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
        limText = limText.replace(/\btende a 0\b/, 'tende a zero');
        return { text: limLabel + ' quando ' + limText, pos: limSub.pos, bigOp: true };
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

    // \cancel, \xcancel, \bcancel — cancelamento visual
    if (fullCmd === '\\cancel' || fullCmd === '\\xcancel' || fullCmd === '\\bcancel') {
      pos = skipSpaces(input, pos);
      var cancelArg = consumeArg(input, pos);
      pos = cancelArg.pos;
      return { text: 'cancelado, ' + cancelArg.text, pos: pos };
    }

    // \color{cor}{conteúdo} e \textcolor{cor}{conteúdo}
    // O nome da cor é lido como texto bruto (não é expressão matemática)
    if (fullCmd === '\\color' || fullCmd === '\\textcolor') {
      pos = skipSpaces(input, pos);
      var rawColor = '';
      if (pos < input.length && input[pos] === '{') {
        pos++;
        while (pos < input.length && input[pos] !== '}') {
          rawColor += input[pos];
          pos++;
        }
        if (pos < input.length) pos++;
      }
      pos = skipSpaces(input, pos);
      var colorContentArg = consumeArg(input, pos);
      pos = colorContentArg.pos;
      rawColor = rawColor.trim();
      var translatedColor = COLOR_NAMES[rawColor] || rawColor;
      return { text: 'em ' + translatedColor + ', ' + colorContentArg.text, pos: pos };
    }

    // \cfrac, \dfrac, \tfrac
    if (fullCmd === '\\cfrac' || fullCmd === '\\dfrac' || fullCmd === '\\tfrac') {
      pos = skipSpaces(input, pos);
      var cfDepth = fracDepth;
      fracDepth++;
      var cfNum = consumeArg(input, pos);
      pos = cfNum.pos;
      pos = skipSpaces(input, pos);
      var cfDen = consumeArg(input, pos);
      pos = cfDen.pos;
      fracDepth--;
      return { text: formatFraction(cfNum.text, cfDen.text, cfDepth), pos: pos, isFraction: true };
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
      var accentContent = accentArg.text.trim();
      if (isSimpleResult(accentContent)) {
        return { text: accentContent + ' ' + accentName, pos: accentArg.pos };
      }
      return { text: accentName + ' ' + accentContent, pos: accentArg.pos };
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
      var underBase = underBaseArg.text.trim();
      if (/^limite/.test(underBase)) {
        var underLimLabel = underBase.replace(/ de$/, '');
        var underLimText = underBottomArg.text.trim().replace(/\bpara\b/g, 'tende a');
        underLimText = underLimText.replace(/\btende a 0\b/, 'tende a zero');
        return { text: underLimLabel + ' quando ' + underLimText, pos: pos, bigOp: true };
      }
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

    // Geometria: \triangle ABC, \angle ABC — consumir letras maiúsculas como nome
    if (fullCmd === '\\triangle' || fullCmd === '\\angle') {
      var geoLabel = SYMBOLS[fullCmd];
      pos = skipSpaces(input, pos);
      var geoName = '';
      while (pos < input.length && /[A-Z]/.test(input[pos])) {
        if (geoName) geoName += ' ';
        geoName += input[pos];
        pos++;
      }
      if (geoName) {
        return { text: geoLabel + ' ' + geoName, pos: pos };
      }
      return { text: geoLabel, pos: pos };
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

  /* =============================================================
     Ambientes: matrix, cases, align, etc.
     ============================================================= */

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
    if (pos < input.length && input[pos] === '[') {
      while (pos < input.length && input[pos] !== ']') pos++;
      if (pos < input.length) pos++;
    }
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
    // Ambientes align, aligned, gather, gathered — equações numeradas
    return parseAlignEnv(body, afterEnd);
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
        if (cellResult) {
          colTexts.push('coluna ' + (c + 1) + ', ' + cellResult);
        }
      }
      if (colTexts.length > 0) {
        parts.push('linha ' + (r + 1) + ': ' + colTexts.join('; '));
      }
    }
    parts.push('fim de ' + label);
    return { text: parts.join('; '), pos: afterEnd };
  }

  /* === Ambientes align/aligned/gather/gathered === */
  function parseAlignEnv(body, afterEnd) {
    var rows = splitRows(body);
    var parts = [];
    for (var r = 0; r < rows.length; r++) {
      var rowContent = rows[r].replace(/&/g, ' ');
      var rowText = latexToText(rowContent);
      if (rowText) {
        parts.push('equação ' + (r + 1) + ': ' + rowText);
      }
    }
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
          if (/^se\s/.test(condition)) {
            parts.push(value + ' ' + condition);
          } else {
            parts.push(value + ' se ' + condition);
          }
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
      row = row.replace(/^\\hline\s*/, '').trim();
      if (row) result.push(row);
    }
    return result;
  }

  /* =============================================================
     Helpers de parsing: grupos, expoentes, índices, delimitadores
     ============================================================= */

  function parseLeftRightDelim(input, pos) {
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
    var verbose = MathA11y._config && MathA11y._config.verbosity === 'verbose';

    // Semânticas especiais mantidas em qualquer modo
    if (text === 'negativo de 1' || text === 'negativo 1' || text === 'menos 1')
      return { text: 'inverso', pos: arg.pos };
    if (text === 'T' || text === 't')
      return { text: 'transposto', pos: arg.pos };
    if (text === 'composição')
      return { text: 'graus', pos: arg.pos };
    if (/^(linha|duas linhas|três linhas|\d+ linhas)$/.test(text)) {
      return { text: text, pos: arg.pos };
    }

    // Modo verbose: sempre usar marcadores
    if (verbose) {
      return { text: 'início do expoente, ' + text + ', fim do expoente', pos: arg.pos, hasMarkers: true };
    }

    if (text === '2') return { text: 'ao quadrado', pos: arg.pos };
    if (text === '3') return { text: 'ao cubo', pos: arg.pos };

    if (isSimpleResult(text)) {
      return { text: 'elevado a ' + text, pos: arg.pos };
    }
    return { text: 'início do expoente, ' + text + ', fim do expoente', pos: arg.pos, hasMarkers: true };
  }

  function parseSubscript(input, pos, prevText) {
    pos++; // pular '_'
    var arg = consumeArg(input, pos);
    var text = arg.text.trim();
    var verbose = MathA11y._config && MathA11y._config.verbosity === 'verbose';

    if (!verbose && isSimpleResult(text)) {
      return { text: 'sub ' + text, pos: arg.pos };
    }
    return { text: 'início do índice, ' + text + ', fim do índice', pos: arg.pos, hasMarkers: true };
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

  /* =============================================================
     API exportada
     ============================================================= */

  return {
    latexToText: latexToText,
    latexToSegments: latexToSegments
  };

})();
