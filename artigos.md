---
layout: default
title: "Artigos"
description: "Artigos sobre educação, tecnologia e acessibilidade no PCD na Escola"
---

<div class="container py-5">
  <h1 class="display-4 mb-4 text-light fw-bold" style="text-shadow: 0 2px 5px rgba(0,0,0,0.3);">Artigos</h1>

  <div class="lead mb-5 text-light">
    Aqui você encontra artigos sobre educação, tecnologia e acessibilidade. Os artigos são organizados por categorias para facilitar sua navegação.
  </div>

  <div class="card bg-dark border-warning text-light mb-5 p-4 shadow" style="border-radius: 15px; background: linear-gradient(135deg, #242729, #101214);">
    <h2 class="h5 mb-3">Categorias:</h2>
    <nav aria-label="Navegação por categorias">
      <ul class="list-inline mb-0">
        {% for category in site.categories %}
        <li class="list-inline-item mb-2">
          <a href="#categoria-{{ category[0] | slugify }}" class="btn btn-warning btn-sm text-dark fw-semibold rounded-pill" aria-current="{% if forloop.first %}true{% else %}false{% endif %}" style="box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
          <i class="bi bi-tag-fill me-1"></i> {{ category[0] | capitalize }}
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
      <h2 class="h3 pb-2 text-light" style="border-bottom: 2px solid #ffc107; text-shadow: 0 2px 5px rgba(0,0,0,0.3);">{{ category[0] | capitalize }}</h2>

      <div class="article-list row g-4 mt-3">
      {% for post in category[1] %}
        <article class="col-md-6 col-lg-4">
          <div class="card h-100 bg-dark text-light border-0 shadow hover-card" style="border-radius: 15px; background: linear-gradient(135deg, #242729, #101214);">
            <div class="card-body p-4">
              <h3 class="h5 card-title">
                <a href="{{ post.url | relative_url }}" class="text-decoration-none text-warning" style="text-shadow: 0 1px 3px rgba(0,0,0,0.3);">{{ post.title }}</a>
              </h3>
              <p class="text-light-50 small">
                <i class="bi bi-calendar3 me-1" aria-hidden="true"></i>
                <time datetime="{{ post.date | date: '%Y-%m-%d' }}">
                  {{ post.date | date: "%d de %B de %Y" }}
                </time>
                <br>
                <i class="bi bi-folder2 me-1" aria-hidden="true"></i> {{ post.categories | join: ", " }}
              </p>
              <p class="card-text">{{ post.excerpt }}</p>
            </div>
            <div class="card-footer bg-transparent border-top border-secondary pt-2">
              <a href="{{ post.url | relative_url }}" class="btn btn-outline-warning btn-sm w-100" style="transition: all 0.3s ease;">
                Ler mais <i class="bi bi-arrow-right ms-1"></i>
                <span class="visually-hidden">sobre {{ post.title }}</span>
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
