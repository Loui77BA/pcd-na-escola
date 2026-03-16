---
layout: default
title: "Cursos"
description: "Cursos sobre educação, tecnologia e acessibilidade no PCD na Escola"
permalink: /cursos/
---

<div class="container py-5">

  <header class="mb-5 text-center text-lg-start">
    <h1 class="display-4 fw-bold mb-3 text-white">
      <span class="text-gradient">Cursos Disponíveis</span>
    </h1>
    <p class="lead" style="color: var(--text-muted); max-width: 700px;">
      Explore nossos cursos sobre educação, tecnologia e acessibilidade. Utilize os filtros abaixo para encontrar o conteúdo ideal para você.
    </p>
  </header>

  <nav class="filter-nav-card" aria-label="Filtrar cursos por categoria">
    <h2 class="h6 text-uppercase fw-bold text-white mb-3" style="letter-spacing: 1px; opacity: 0.8;">
      <i class="material-icons align-middle fs-6 me-1" aria-hidden="true">filter_list</i> Categorias
    </h2>
    <ul class="nav-pills-custom" role="list">

      <li>
        <button type="button"
                class="btn-filter active category-trigger"
                data-category="all"
                data-name="Todos os cursos"
                aria-pressed="true"
                aria-label="Mostrar todos os cursos">
          Todos os cursos
        </button>
      </li>

      {% assign grouped = site.courses | group_by: 'category' %}
      {% for group in grouped %}
      {% assign count = group.items | size %}
      <li>
        <button type="button"
                class="btn-filter category-trigger"
                data-category="{{ group.name | slugify }}"
                data-name="{{ group.name | capitalize }}"
                aria-pressed="false"
                aria-label="Filtrar por {{ group.name | capitalize }}, {{ count }} curso{% if count != 1 %}s{% endif %}">
          {{ group.name | capitalize }}
          <span class="badge-count">
            {{ count }} curso{% if count != 1 %}s{% endif %}
          </span>
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
        <article class="course-card h-100">

          <div class="course-icon" aria-hidden="true">
            <i class="material-icons">school</i>
          </div>

          {% if course.date %}
          <div class="course-meta">
            <i class="material-icons fs-6" aria-hidden="true">event</i>
            <time datetime="{{ course.date | date: '%Y-%m-%d' }}">
              {{ course.date | date: "%d/%m/%Y" }}
            </time>
          </div>
          {% endif %}

          <h3 class="course-title">
            <a href="{{ course.url | relative_url }}" class="text-decoration-none text-white stretched-link">
              {{ course.title }}
            </a>
          </h3>

          {% if course.excerpt %}
          <p class="course-excerpt">
            {{ course.excerpt | strip_html | truncate: 120 }}
          </p>
          {% endif %}

          <div class="btn-details" aria-hidden="true">
            Ver detalhes <i class="material-icons fs-5 ms-1">arrow_forward</i>
          </div>

          <span class="visually-hidden">Ver detalhes do curso: {{ course.title }}</span>

        </article>
      </div>
      {% endfor %}
    {% endfor %}
  </div>

  <div id="no-results" class="text-center py-5 d-none" style="color: var(--text-muted);">
    <i class="material-icons fs-1 mb-2">search_off</i>
    <p>Nenhum curso encontrado nesta categoria.</p>
  </div>

</div>

<script src="{{ '/assets/js/cursos-filter.js' | relative_url }}" defer></script>
