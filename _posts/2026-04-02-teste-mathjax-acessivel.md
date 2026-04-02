---
layout: post
title: "Teste MathJax 3 com Acessibilidade"
date: 2026-04-02
math: true
categories: [teste]
description: "Página de teste para verificar a renderização de expressões matemáticas com MathJax 3 e acessibilidade para leitores de tela."
---

## Equação inline

A fórmula de Euler é considerada uma das mais elegantes da matemática: $e^{i\pi} + 1 = 0$. Ela conecta cinco constantes fundamentais.

## Equação em bloco (display)

A integral gaussiana é um resultado clássico da análise:

$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$

## Fração e derivada

A derivada do inverso de $x$ pode ser calculada assim:

$$\frac{d}{dx}\left(\frac{1}{x}\right) = -\frac{1}{x^2}$$

## Delimitadores alternativos

A função de Bessel de primeira espécie pode ser expressa usando colchetes:

$$J_n(x) = \frac{1}{\pi} \int_0^\pi \cos(n\tau - x\sin\tau) d\tau$$

## Como verificar a acessibilidade

1. Abra o DevTools (F12) e inspecione uma fórmula renderizada.
2. Procure o elemento `<mjx-assistive-mml>` dentro do contêiner SVG.
3. Ele deve conter MathML completo (`<math>` com elementos semânticos).
4. O elemento está visualmente oculto via CSS (`clip`, `position: absolute`), mas permanece na árvore de acessibilidade.
5. Use um leitor de tela (NVDA, JAWS ou VoiceOver) para confirmar que as fórmulas são lidas corretamente.
