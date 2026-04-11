/**
 * MathA11y — Testes de verbalização progressiva (SimpleSpeak + MathSpeak)
 *
 * Executar com: node assets/js/math-a11y-tests.js
 */
var MathA11y = {};
eval(require('fs').readFileSync(__dirname + '/math-a11y-data.js', 'utf-8'));
eval(require('fs').readFileSync(__dirname + '/math-a11y-parser.js', 'utf-8'));

var latexToText = MathA11y._parser.latexToText;
var passed = 0;
var failed = 0;

function assertEqual(actual, expected, label) {
  if (actual === expected) {
    passed++;
    console.log('  PASS: ' + label);
  } else {
    failed++;
    console.log('  FAIL: ' + label);
    console.log('    esperado: ' + JSON.stringify(expected));
    console.log('    obtido:   ' + JSON.stringify(actual));
  }
}

// ─── Frações simples — sem marcadores ─────────────────────────────────

console.log('\n=== Frações ===');

assertEqual(
  latexToText('\\frac{1}{2}'),
  '1 sobre 2',
  '\\frac{1}{2}'
);

assertEqual(
  latexToText('\\frac{x}{y}'),
  'x sobre y',
  '\\frac{x}{y}'
);

// ─── Frações compostas — com marcadores ───────────────────────────────

assertEqual(
  latexToText('\\frac{x+1}{3y}'),
  'início da fração, x mais 1, sobre, 3 vezes y, fim da fração',
  '\\frac{x+1}{3y}'
);

// ─── Fração dentro de fração — profundidade ───────────────────────────

assertEqual(
  latexToText('\\frac{1}{\\frac{a}{b}}'),
  'início da fração, 1, sobre, início da fração interna, a, sobre, b, fim da fração interna, fim da fração',
  '\\frac{1}{\\frac{a}{b}}'
);

// ─── Expoente simples — sem marcador ─────────────────────────────────

console.log('\n=== Expoentes ===');

assertEqual(
  latexToText('x^2'),
  'x ao quadrado',
  'x^2'
);

assertEqual(
  latexToText('x^n'),
  'x elevado a n',
  'x^n'
);

// ─── Expoente composto — com marcador ────────────────────────────────

assertEqual(
  latexToText('x^{n+1}'),
  'x, início do expoente, n mais 1, fim do expoente',
  'x^{n+1}'
);

// ─── Subscrito simples ───────────────────────────────────────────────

console.log('\n=== Subscritos ===');

assertEqual(
  latexToText('x_i'),
  'x sub i',
  'x_i'
);

// ─── Subscrito composto ──────────────────────────────────────────────

assertEqual(
  latexToText('a_{i+j}'),
  'a, início do índice, i mais j, fim do índice',
  'a_{i+j}'
);

// ─── Log com base ────────────────────────────────────────────────────

console.log('\n=== Logaritmo e Limite ===');

assertEqual(
  latexToText('\\log_2 x'),
  'logaritmo na base 2 de x',
  '\\log_2 x'
);

// ─── Lim com tendência ──────────────────────────────────────────────

assertEqual(
  latexToText('\\lim_{x \\to 0}'),
  'limite quando x tende a zero',
  '\\lim_{x \\to 0}'
);

// ─── Raiz simples — sem marcador ────────────────────────────────────

console.log('\n=== Raízes ===');

assertEqual(
  latexToText('\\sqrt{x}'),
  'raiz quadrada de x',
  '\\sqrt{x}'
);

// ─── Raiz composta — com marcador ───────────────────────────────────

assertEqual(
  latexToText('\\sqrt{a^2 + b^2}'),
  'raiz quadrada de, início da raiz, a ao quadrado mais b ao quadrado, fim da raiz',
  '\\sqrt{a^2 + b^2}'
);

// ─── Casos extras de regressão ──────────────────────────────────────

console.log('\n=== Regressão ===');

// Derivada simples não deve ser afetada
assertEqual(
  latexToText('\\frac{d}{dx}'),
  'derivada em relação a x de',
  '\\frac{d}{dx} (derivada simples)'
);

// Derivada de ordem superior
assertEqual(
  latexToText('\\frac{d^2 y}{dx^2}'),
  'segunda derivada de y em relação a x',
  '\\frac{d^2 y}{dx^2} (derivada segunda)'
);

// Expoentes especiais preservados
assertEqual(
  latexToText('x^{-1}'),
  'x inverso',
  'x^{-1} (inverso)'
);

assertEqual(
  latexToText('A^T'),
  'A transposto',
  'A^T (transposto)'
);

// Raiz n-ésima simples
assertEqual(
  latexToText('\\sqrt[3]{8}'),
  'raiz cúbica de 8',
  '\\sqrt[3]{8}'
);

// Raiz n-ésima composta
assertEqual(
  latexToText('\\sqrt[3]{a+b}'),
  'raiz cúbica de, início da raiz, a mais b, fim da raiz',
  '\\sqrt[3]{a+b}'
);

// Lim com infinito
assertEqual(
  latexToText('\\lim_{n \\to \\infty}'),
  'limite quando n tende a infinito',
  '\\lim_{n \\to \\infty}'
);

// ─── Melhoria 2: Valor absoluto com pipes ───────────────────────────

console.log('\n=== Valor Absoluto (pipes) ===');

assertEqual(
  latexToText('|x|'),
  'valor absoluto de x',
  '|x| (simples)'
);

assertEqual(
  latexToText('|x+1|'),
  'início do valor absoluto, x mais 1, fim do valor absoluto',
  '|x+1| (composto)'
);

assertEqual(
  latexToText('|a|+|b|'),
  'valor absoluto de a mais valor absoluto de b',
  '|a|+|b| (dois valores absolutos)'
);

// ─── Melhoria 3: Menos unário vs binário ────────────────────────────

console.log('\n=== Menos Unário vs Binário ===');

assertEqual(
  latexToText('-x'),
  'negativo de x',
  '-x (unário no início)'
);

assertEqual(
  latexToText('3-x'),
  '3 menos x',
  '3-x (binário)'
);

assertEqual(
  latexToText('(-x)'),
  'abre parênteses negativo de x fecha parênteses',
  '(-x) (unário após abre parênteses)'
);

assertEqual(
  latexToText('a + -b'),
  'a mais negativo de b',
  'a + -b (unário após operador)'
);

// ─── Melhoria 4: Verbalização posicional em matrizes ────────────────

console.log('\n=== Matrizes Posicionais ===');

assertEqual(
  latexToText('\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}'),
  'matriz 2 por 2; linha 1: coluna 1, a; coluna 2, b; linha 2: coluna 1, c; coluna 2, d; fim de matriz',
  'pmatrix 2x2 com posições'
);

assertEqual(
  latexToText('\\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{bmatrix}'),
  'matriz 2 por 3; linha 1: coluna 1, 1; coluna 2, 2; coluna 3, 3; linha 2: coluna 1, 4; coluna 2, 5; coluna 3, 6; fim de matriz',
  'bmatrix 2x3 com posições'
);

// ─── Melhoria 5: Dígito a dígito após vírgula decimal ───────────────

console.log('\n=== Decimais Dígito a Dígito ===');

assertEqual(
  latexToText('3.14'),
  '3 vírgula 1 4',
  '3.14 (dois dígitos após vírgula)'
);

assertEqual(
  latexToText('0.001'),
  '0 vírgula 0 0 1',
  '0.001 (três dígitos após vírgula)'
);

assertEqual(
  latexToText('2.5'),
  '2 vírgula 5',
  '2.5 (um dígito, sem separação)'
);

// ─── Melhoria 6: \cancel, \xcancel, \bcancel ────────────────────────

console.log('\n=== Cancelamento ===');

assertEqual(
  latexToText('\\cancel{3x}'),
  'cancelado, 3 vezes x',
  '\\cancel{3x}'
);

assertEqual(
  latexToText('\\xcancel{a+b}'),
  'cancelado, a mais b',
  '\\xcancel{a+b}'
);

assertEqual(
  latexToText('\\bcancel{5}'),
  'cancelado, 5',
  '\\bcancel{5}'
);

// ─── Melhoria 7: \color e \textcolor ────────────────────────────────

console.log('\n=== Cores ===');

assertEqual(
  latexToText('\\textcolor{red}{x+1}'),
  'em vermelho, x mais 1',
  '\\textcolor{red}{x+1}'
);

assertEqual(
  latexToText('\\color{blue}{y}'),
  'em azul, y',
  '\\color{blue}{y}'
);

assertEqual(
  latexToText('\\textcolor{teal}{z}'),
  'em azul-petróleo, z',
  '\\textcolor{teal}{z} (cor com tradução especial)'
);

assertEqual(
  latexToText('\\textcolor{unknown}{a}'),
  'em unknown, a',
  '\\textcolor{unknown}{a} (cor sem tradução, usa original)'
);

// ─── Melhoria 8: Ambientes align/aligned/gather ─────────────────────

console.log('\n=== Ambientes Align/Gather ===');

assertEqual(
  latexToText('\\begin{align} x &= 1 \\\\ y &= 2 \\end{align}'),
  'equação 1: x igual a 1; equação 2: y igual a 2',
  'align com duas equações'
);

assertEqual(
  latexToText('\\begin{gather} a+b \\\\ c+d \\end{gather}'),
  'equação 1: a mais b; equação 2: c mais d',
  'gather com duas equações'
);

// ─── Melhoria 9: BLACKBOARD expandido ───────────────────────────────

console.log('\n=== Blackboard Expandido ===');

assertEqual(
  latexToText('\\mathbb{P}'),
  'primos',
  '\\mathbb{P}'
);

assertEqual(
  latexToText('\\mathbb{H}'),
  'quaterniões',
  '\\mathbb{H}'
);

assertEqual(
  latexToText('\\mathbb{S}'),
  'esfera',
  '\\mathbb{S}'
);

// ─── Melhoria 10: Números grandes com agrupamento ───────────────────

console.log('\n=== Números Grandes ===');

assertEqual(
  latexToText('1000'),
  '1.000',
  '1000 (4 dígitos)'
);

assertEqual(
  latexToText('1000000'),
  '1.000.000',
  '1000000 (7 dígitos)'
);

assertEqual(
  latexToText('42'),
  '42',
  '42 (sem alteração, < 4 dígitos)'
);

assertEqual(
  latexToText('100'),
  '100',
  '100 (sem alteração, 3 dígitos)'
);

// ─── Melhoria 11: Verbosidade ───────────────────────────────────────

console.log('\n=== Verbosidade ===');

// Salvar e restaurar config
var savedVerbosity = MathA11y._config.verbosity;

MathA11y._config.verbosity = 'verbose';

assertEqual(
  latexToText('\\frac{1}{2}'),
  'início da fração, 1, sobre, 2, fim da fração',
  '\\frac{1}{2} verbose (com marcadores)'
);

assertEqual(
  latexToText('x^2'),
  'x, início do expoente, 2, fim do expoente',
  'x^2 verbose (com marcadores)'
);

assertEqual(
  latexToText('x_i'),
  'x, início do índice, i, fim do índice',
  'x_i verbose (com marcadores)'
);

MathA11y._config.verbosity = 'compact';

assertEqual(
  latexToText('\\frac{1}{2}'),
  '1 sobre 2',
  '\\frac{1}{2} compact (sem marcadores)'
);

MathA11y._config.verbosity = savedVerbosity;

// ─── Resultado ──────────────────────────────────────────────────────

console.log('\n─────────────────────────────────');
console.log('Total: ' + (passed + failed) + '  |  PASS: ' + passed + '  |  FAIL: ' + failed);
if (failed > 0) {
  console.log('RESULTADO: FALHOU');
  process.exit(1);
} else {
  console.log('RESULTADO: TODOS PASSARAM');
}
