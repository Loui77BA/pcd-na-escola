---
layout: default
title: "Artigos"
description: "Artigos sobre educação, tecnologia e acessibilidade no PCD na Escola"
---

  <h1 class="display-4 mb-4 text-light">Artigos</h1>

  <div class="lead mb-4 text-light">
    Aqui você encontra artigos sobre educação, tecnologia e acessibilidade. Os artigos são organizados por categorias para facilitar sua navegação.
  </div>

  <div class="card bg-dark text-light mb-4 p-3">
    <h2 class="h5 mb-3">Categorias:</h2>
    <nav aria-label="Navegação por categorias">
    <ul class="list-inline mb-0">
      {% for category in site.categories %}
      <li class="list-inline-item mb-2">
        <a href="#categoria-{{ category[0] | slugify }}" class="btn btn-warning btn-sm text-dark" aria-current="{% if forloop.first %}true{% else %}false{% endif %}">
        {{ category[0] | capitalize }}
        <span class="badge bg-dark text-warning ms-1">{{ category[1].size }}</span>
        </a>
      </li>
      {% endfor %}
    </ul>
    </nav>
  </div>

  <div id="categorias">
    {% for category in site.categories %}
    <section id="categoria-{{ category[0] | slugify }}" class="mb-5">
      <h2 class="h3 border-bottom pb-2 text-light">{{ category[0] | capitalize }}</h2>

      <div class="article-list">
      {% for post in category[1] %}
        <article class="card bg-dark text-light mb-4">
        <div class="card-body">
          <h3 class="h5 card-title">
          <a href="{{ post.url | relative_url }}" class="text-decoration-none text-light">{{ post.title }}</a>
          </h3>
          <p class="text-light small">
          <time datetime="{{ post.date | date: '%Y-%m-%d' }}">
            {{ post.date | date: "%d de %B de %Y" }}
          </time>
          | Categorias: {{ post.categories | join: ", " }}
          </p>
          <p class="card-text">{{ post.excerpt }}</p>
          <a href="{{ post.url | relative_url }}" class="btn btn-outline-light btn-sm">Ler mais <span class="visually-hidden">sobre {{ post.title }}</span></a>
        </div>
        </article>
      {% endfor %}
      </div>
    </section>
    {% endfor %}
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.category-filter');
    const posts = document.querySelectorAll('.article-list article');

    buttons.forEach(btn => {
      btn.addEventListener('click', function (e) {
      e.preventDefault();
      const categoria = this.dataset.category;

      posts.forEach(post => {
        const categoriasPost = post.dataset.category.split(' ');
        post.style.display = (categoria === 'all' || categoriasPost.includes(categoria)) ? 'block' : 'none';
      });

      buttons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Anúncio para leitores de tela
      const announcement = `Mostrando artigos da categoria ${categoria}`;
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('role', 'status');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.textContent = announcement;
      document.body.appendChild(liveRegion);
      setTimeout(() => liveRegion.remove(), 1000);
      });
    });
    });
  </script>
