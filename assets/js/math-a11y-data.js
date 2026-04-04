/**
 * MathA11y — Dados: tabelas de símbolos, funções e constantes auxiliares
 *
 * Este arquivo deve ser carregado ANTES de math-a11y-parser.js e math-a11y.js.
 */
var MathA11y = MathA11y || {};

MathA11y._data = (function () {
  'use strict';

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
    'produto tensorial', 'h barra', 'linha',
    'triângulo', 'ângulo'
  ];

  var RELATIONAL_TEXTS = [
    'diferente de', 'menor ou igual a', 'maior ou igual a',
    'muito menor que', 'muito maior que', 'aproximadamente igual a',
    'semelhante a', 'congruente a', 'equivalente a', 'proporcional a',
    'pertence a', 'não pertence a', 'contido em', 'superconjunto de',
    'contido ou igual a', 'contém ou igual a', 'implica', 'somente se',
    'se e somente se', 'portanto', 'porque'
  ];

  var OPERATOR_ONLY = [
    'mais', 'menos', 'igual a', 'menor que', 'maior que',
    'menor ou igual a', 'maior ou igual a', 'diferente de',
    'muito menor que', 'muito maior que'
  ];

  return {
    SYMBOLS: SYMBOLS,
    FUNCTIONS: FUNCTIONS,
    BIG_OPS: BIG_OPS,
    ACCENT_CMDS: ACCENT_CMDS,
    ENV_NAMES: ENV_NAMES,
    BLACKBOARD: BLACKBOARD,
    ROOT_ORDINALS: ROOT_ORDINALS,
    GREEKS: GREEKS,
    OPERATOR_EXACT: OPERATOR_EXACT,
    NON_VALUE_KEYWORDS: NON_VALUE_KEYWORDS,
    RELATIONAL_TEXTS: RELATIONAL_TEXTS,
    OPERATOR_ONLY: OPERATOR_ONLY
  };

})();
