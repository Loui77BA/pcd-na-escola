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

// ─── Resultado ──────────────────────────────────────────────────────

console.log('\n─────────────────────────────────');
console.log('Total: ' + (passed + failed) + '  |  PASS: ' + passed + '  |  FAIL: ' + failed);
if (failed > 0) {
  console.log('RESULTADO: FALHOU');
  process.exit(1);
} else {
  console.log('RESULTADO: TODOS PASSARAM');
}
