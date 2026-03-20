---
layout: default
title: "Busca"
description: "Busque artigos, cursos e ferramentas no PcD na Escola"
permalink: /busca/
---

<div class="container py-5">
  <header class="mb-5 text-center text-lg-start">
    <h1 class="display-4 fw-bold mb-3 text-white">
      <span class="text-gradient">Buscar no site</span>
    </h1>
    <p class="lead lead-muted">
      Encontre artigos, cursos e ferramentas sobre educação, tecnologia e acessibilidade.
    </p>
  </header>

  <div class="search-page-wrapper">
    <div class="search-input-wrapper search-input-wrapper-page mb-4">
      <label for="search-input-page" class="visually-hidden">Digite sua busca</label>
      <input type="search"
             id="search-input-page"
             class="form-control search-input search-input-lg"
             placeholder="Ex: acessibilidade, educação inclusiva, tecnologia assistiva..."
             autocomplete="off"
             aria-describedby="search-help-page">
      <small id="search-help-page" class="text-muted-custom d-block mt-2">
        Digite pelo menos 2 caracteres para buscar
      </small>
    </div>
    <div id="search-results-page" class="search-results" aria-live="polite">
    </div>
  </div>
</div>
