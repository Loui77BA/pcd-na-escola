---
layout: default
title: "Artigos"
description: "Artigos sobre educação, tecnologia e acessibilidade no PcD na Escola"
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "{{ page.title }}",
  "description": "{{ page.description }}",
  "url": "{{ page.url | absolute_url }}",
  "isPartOf": {
    "@type": "WebSite",
    "name": "{{ site.title }}",
    "url": "{{ site.url }}"
  },
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": {{ site.posts | size }},
    "itemListElement": [
      {% for post in site.posts %}
      {
        "@type": "ListItem",
        "position": {{ forloop.index }},
        "url": "{{ post.url | absolute_url }}",
        "name": "{{ post.title }}"
      }{% unless forloop.last %},{% endunless %}
      {% endfor %}
    ]
  }
}
</script>

<div class="py-5">

  <header class="mb-5 text-center text-lg-start">
    <span class="section-tag">Publicações</span>
    <h1 class="section-title-lg mb-3">
      Biblioteca de
      <span class="hero-gradient-text">Artigos</span>
    </h1>
    <p class="lead text-muted-custom page-subtitle">
      {{ site.posts | size }} artigos sobre tecnologia, programação, educação inclusiva e acessibilidade.
      Utilize os filtros abaixo para encontrar o conteúdo ideal para você.
    </p>
  </header>

  <nav class="filter-card" aria-label="Filtrar por categorias">
    <h2 class="filter-card-title">
      <i class="material-icons align-middle fs-6 me-1" aria-hidden="true">filter_list</i> Categorias
    </h2>
    <ul class="filter-pills" role="list">
      <li>
        <button type="button"
           class="filter-pill active category-trigger"
           data-category="all"
           aria-pressed="true"
           aria-label="Mostrar todos os {{ site.posts | size }} artigos">
           Todos
           <span class="filter-pill-count">{{ site.posts | size }}</span>
        </button>
      </li>
      {% for category in site.categories %}
      {% assign count = category[1].size %}
      <li>
        <button type="button"
           class="filter-pill category-trigger"
           data-category="{{ category[0] | slugify }}"
           aria-pressed="false"
           aria-label="Filtrar por {{ category[0] }}, {{ count }} artigo{% if count != 1 %}s{% endif %}">
           {{ category[0] }}
           <span class="filter-pill-count">{{ count }}</span>
        </button>
      </li>
      {% endfor %}
    </ul>
  </nav>

  <div class="row g-4" id="articles-grid">
    {% assign sorted_posts = site.posts | sort: 'date' %}
    {% for post in sorted_posts %}
      <div class="col-md-6 col-lg-4 article-item"
           data-category="{% for cat in post.categories %}{{ cat | slugify }}{% unless forloop.last %} {% endunless %}{% endfor %}">
        <a href="{{ post.url | relative_url }}" class="listing-card-link" aria-label="{{ post.title }}, categoria {{ post.categories | join: ' e ' }}, {{ post.date | date: '%d/%m/%Y' }}">
          <article class="listing-card">
            <div class="listing-card-top">
              <div class="listing-card-badges">
                {% for cat in post.categories %}
                <span class="badge-tag">{{ cat }}</span>
                {% endfor %}
              </div>
              <time datetime="{{ post.date | date: '%Y-%m-%d' }}" class="listing-card-date">
                <i class="material-icons fs-6" aria-hidden="true">event</i>
                {{ post.date | date: "%d/%m/%Y" }}
              </time>
            </div>

            <h3 class="listing-card-title">{{ post.title }}</h3>

            <p class="listing-card-excerpt">
              {% if post.description %}
                {{ post.description | truncatewords: 22 }}
              {% else %}
                {{ post.excerpt | strip_html | truncatewords: 22 }}
              {% endif %}
            </p>

            <div class="listing-card-footer">
              <span class="listing-card-action" aria-hidden="true">
                Ler artigo <i class="material-icons fs-6 ms-1">arrow_forward</i>
              </span>
            </div>
          </article>
        </a>
      </div>
    {% endfor %}
  </div>

  <div id="no-results" class="text-center py-5 d-none">
    <i class="material-icons d-block fs-1 mb-2 text-muted-custom" aria-hidden="true">search_off</i>
    <p class="text-muted-custom">Nenhum artigo encontrado nesta categoria.</p>
  </div>

</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.category-trigger');
    var items = document.querySelectorAll('.article-item');
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
          var cats = (item.dataset.category || '').split(' ');
          var show = (selected === 'all' || cats.indexOf(selected) !== -1);
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
          ? 'Mostrando todos os ' + visible + ' artigos'
          : 'Mostrando ' + visible + ' artigo' + (visible !== 1 ? 's' : '') + ' na categoria selecionada';

        setTimeout(function () { liveRegion.textContent = label; }, 100);
      });
    });
  });
</script>
