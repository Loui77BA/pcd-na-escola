---
layout: default
title: "Cursos"
description: "Cursos sobre educação, tecnologia e acessibilidade no PCD na Escola"
permalink: /cursos/
---

<div class="container py-5">
  <header>
    <h1 class="display-4 mb-4 text-light fw-bold" style="text-shadow: 0 2px 5px rgba(0,0,0,0.3);">Cursos</h1>
    <p class="lead mb-5 text-light">
      Nesta página estão listados cursos sobre educação, tecnologia e acessibilidade. Use os filtros de categoria para localizar rapidamente o que você procura.
    </p>
  </header>

  <div class="card bg-dark border-warning text-light mb-5 p-4 shadow" style="border-radius:15px;background:linear-gradient(135deg,#242729,#101214);">
    <h2 class="h5 mb-3">Categorias:</h2>
    <nav aria-label="Navegação por categorias">
      <ul class="list-inline mb-0" role="list">
        <li class="list-inline-item mb-2">
          <a href="#" class="btn btn-warning btn-sm text-dark fw-semibold rounded-pill category-filter active" data-category="all" aria-current="true" style="box-shadow:0 2px 5px rgba(0,0,0,0.2);">
            <i class="bi bi-collection-play-fill me-1" aria-hidden="true"></i> Todas as categorias
          </a>
        </li>

        {% assign grouped = site.courses | group_by: 'category' %}
        {% for group in grouped %}
        <li class="list-inline-item mb-2">
          <a href="#categoria-{{ group.name | slugify }}" class="btn btn-warning btn-sm text-dark fw-semibold rounded-pill category-filter" data-category="{{ group.name | slugify }}" aria-current="false" style="box-shadow:0 2px 5px rgba(0,0,0,0.2);">
            <i class="bi bi-tag-fill me-1" aria-hidden="true"></i> {{ group.name | capitalize }}
            {% assign course_count = group.items | size %}
            <span class="badge bg-dark text-warning ms-1">{{ course_count }} curso{% unless course_count == 1 %}s{% endunless %}</span>
          </a>
        </li>
        {% endfor %}
      </ul>
    </nav>
  </div>

  <div id="categorias">
    {% for group in grouped %}
    <section id="categoria-{{ group.name | slugify }}" class="mb-5">
      <h2 class="h3 pb-2 text-light" style="border-bottom:2px solid #ffc107;text-shadow:0 2px 5px rgba(0,0,0,0.3);">{{ group.name | capitalize }}</h2>
      <div class="course-list row g-4 mt-3">
        {% for course in group.items %}
        <article class="col-md-6 col-lg-4" data-category="{{ group.name | slugify }}">
          <div class="card h-100 bg-dark text-light border-0 shadow hover-card" style="border-radius:15px;background:linear-gradient(135deg,#242729,#101214);">
            <div class="card-body p-4">
              <h3 class="h5 card-title">
                <a href="{{ course.url | relative_url }}" class="text-decoration-none text-warning" style="text-shadow:0 1px 3px rgba(0,0,0,0.3);">
                  {{ course.title }}
                </a>
              </h3>

              {% if course.date %}
              <p class="text-light-50 small mb-2">
                <i class="bi bi-calendar3 me-1" aria-hidden="true"></i>
                <span class="visually-hidden">Data de publicação:</span>
                <time datetime="{{ course.date | date: '%Y-%m-%d' }}">{{ course.date | date: "%d de %B de %Y" }}</time>
              </p>
              {% endif %}

              {% if course.excerpt %}
              <p class="card-text">{{ course.excerpt }}</p>
              {% endif %}
            </div>
            <div class="card-footer bg-transparent border-top border-secondary pt-2">
              <a href="{{ course.url | relative_url }}" class="btn btn-outline-warning btn-sm w-100" style="transition:all 0.3s ease;">
                Ver detalhes <span class="visually-hidden">sobre {{ course.title }}</span><i class="bi bi-arrow-right ms-1" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </article>
        {% endfor %}
      </div>
    </section>
    {% endfor %}
  </div>
</div>

<style>
  .hover-card {
    transition: all 0.3s ease;
    box-shadow: 0 10px 25px rgba(0,0,0,0.4);
    border-radius: 15px;
  }
  .hover-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.5) !important;
  }
  .text-light-50 {
    opacity: 0.7;
  }
  .btn-outline-warning:hover {
    box-shadow: 0 0 10px rgba(255, 193, 7, 0.5);
  }
  h1, h2, h3 {
    font-weight: 600;
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.category-filter');
    const courses = document.querySelectorAll('.course-list article');

    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.classList.add('visually-hidden');
    document.body.appendChild(liveRegion);

    buttons.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const categoria = this.dataset.category;
        const categoriaNome = this.textContent.trim();
        let visiveis = 0;

        courses.forEach(course => {
          const pertence = (categoria === 'all') || course.dataset.category.split(' ').includes(categoria);
          course.style.display = pertence ? 'block' : 'none';
          if (pertence) visiveis++;
        });

        buttons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const mensagem = categoria === 'all'
          ? `Mostrando todos os ${visiveis} cursos`
          : `Mostrando ${visiveis} curso${visiveis !== 1 ? 's' : ''} da categoria ${categoriaNome}`;
        liveRegion.textContent = mensagem;
      });
    });
  });
</script>