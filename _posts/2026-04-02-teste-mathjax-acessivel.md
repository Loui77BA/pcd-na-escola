---
layout: post
title: "Teste de Equações Matemáticas Acessíveis"
date: 2026-04-02
math: true
categories: [teste]
description: "Página de teste para verificar a renderização de expressões matemáticas com KaTeX e acessibilidade para leitores de tela via aria-label."
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
2. O elemento wrapper deve ter `role="math"` e um `aria-label` com a descrição textual em português.
3. O conteúdo visual (KaTeX HTML) deve estar marcado com `aria-hidden="true"`.
4. O leitor de tela deve ler apenas o `aria-label`, ignorando a renderização visual.
5. Use um leitor de tela (NVDA, JAWS ou VoiceOver) para confirmar que as fórmulas são lidas corretamente.
