---
layout: default
title: "Cursos"
description: "Cursos sobre educação, tecnologia e acessibilidade no PCD na Escola"
permalink: /cursos/
---

<div class="py-5">

  <header class="mb-5 text-center text-lg-start">
    <span class="section-tag">Aprendizado</span>
    <h1 class="section-title-lg mb-3">
      Cursos
      <span class="hero-gradient-text">Disponíveis</span>
    </h1>
    <p class="lead text-muted-custom page-subtitle">
      {{ site.courses | size }} cursos sobre educação, tecnologia e acessibilidade.
      Utilize os filtros abaixo para encontrar o conteúdo ideal para você.
    </p>
  </header>

  <nav class="filter-card" aria-label="Filtrar cursos por categoria">
    <h2 class="filter-card-title">
      <i class="material-icons align-middle fs-6 me-1" aria-hidden="true">filter_list</i> Categorias
    </h2>
    <ul class="filter-pills" role="list">
      <li>
        <button type="button"
           class="filter-pill active category-trigger"
           data-category="all"
           aria-pressed="true"
           aria-label="Mostrar todos os {{ site.courses | size }} cursos">
           Todos
           <span class="filter-pill-count">{{ site.courses | size }}</span>
        </button>
      </li>

      {% assign grouped = site.courses | group_by: 'category' %}
      {% for group in grouped %}
      {% assign count = group.items | size %}
      <li>
        <button type="button"
           class="filter-pill category-trigger"
           data-category="{{ group.name | slugify }}"
           aria-pressed="false"
           aria-label="Filtrar por {{ group.name | capitalize }}, {{ count }} curso{% if count != 1 %}s{% endif %}">
           {{ group.name | capitalize }}
           <span class="filter-pill-count">{{ count }}</span>
        </button>
      </li>
      {% endfor %}
    </ul>
  </nav>

  <div class="row g-4" id="courses-grid">
    {% for group in grouped %}
      {% assign sorted_courses = group.items | sort: 'date' %}
      {% for course in sorted_courses %}
      <div class="col-md-6 col-lg-4 course-item" data-category="{{ group.name | slugify }}">
        <article class="listing-card">
          <div class="listing-card-top">
            <div class="listing-card-badges">
              {% if course.category %}
              <span class="badge-tag">{{ course.category }}</span>
              {% endif %}
            </div>
            {% if course.date %}
            <time datetime="{{ course.date | date: '%Y-%m-%d' }}" class="listing-card-date">
              <i class="material-icons fs-6" aria-hidden="true">event</i>
              {{ course.date | date: "%d/%m/%Y" }}
            </time>
            {% endif %}
          </div>

          <h3 class="listing-card-title">
            <a href="{{ course.url | relative_url }}" class="stretched-link">
              {{ course.title }}
            </a>
          </h3>

          {% if course.excerpt %}
          <p class="listing-card-excerpt">
            {{ course.excerpt | strip_html | truncate: 120 }}
          </p>
          {% endif %}

          <div class="listing-card-footer">
            <span class="listing-card-action" aria-hidden="true">
              Ver curso <i class="material-icons fs-6 ms-1">arrow_forward</i>
            </span>
          </div>
        </article>
      </div>
      {% endfor %}
    {% endfor %}
  </div>

  <div id="no-results" class="text-center py-5 d-none">
    <i class="material-icons d-block fs-1 mb-2 text-muted-custom" aria-hidden="true">search_off</i>
    <p class="text-muted-custom">Nenhum curso encontrado nesta categoria.</p>
  </div>

</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.category-trigger');
    var items = document.querySelectorAll('.course-item');
    var noResults = document.getElementById('no-results');

    var liveRegion = document.createElement('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.classList.add('visually-hidden');
    document.body.appendChild(liveRegion);

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var selected = this.dataset.category;
        var visible = 0;

        items.forEach(function (item) {
          var show = (selected === 'all' || item.dataset.category === selected);
          item.classList.toggle('d-none', !show);
          if (show) visible++;
        });

        buttons.forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-pressed', 'true');

        noResults.classList.toggle('d-none', visible > 0);

        var label = selected === 'all'
          ? 'Mostrando todos os ' + visible + ' cursos'
          : 'Mostrando ' + visible + ' curso' + (visible !== 1 ? 's' : '') + ' na categoria selecionada';

        setTimeout(function () { liveRegion.textContent = label; }, 100);
      });
    });
  });
</script>
