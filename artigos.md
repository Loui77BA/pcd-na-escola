---
layout: default
title: "Artigos"
description: "Artigos sobre educação, tecnologia e acessibilidade no PCD na Escola"
---

<div class="container py-5">
  <header>
    <h1 class="display-4 mb-4 text-light fw-bold" style="text-shadow: 0 2px 5px rgba(0,0,0,0.3);">Artigos</h1>

    <p class="lead mb-5 text-light">
      Aqui você encontra artigos sobre educação, tecnologia e acessibilidade. Os artigos são organizados por categorias para facilitar sua navegação.
    </p>
  </header>
  
  <div class="card bg-dark border-warning text-light mb-5 p-4 shadow" style="border-radius: 15px; background: linear-gradient(135deg, #242729, #101214);">
    <h2 class="h5 mb-3">Categorias:</h2>
    <nav aria-label="Navegação por categorias">
      <ul class="list-inline mb-0" role="list">
        {% for category in site.categories %}
        <li class="list-inline-item mb-2">
          <a href="#categoria-{{ category[0] | slugify }}" 
             class="btn btn-warning btn-sm text-dark fw-semibold rounded-pill" 
             aria-current="{% if forloop.first %}true{% else %}false{% endif %}"
             style="box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
            <i class="bi bi-tag-fill me-1" aria-hidden="true"></i> {{ category[0] | capitalize }}
            <span class="badge bg-dark text-warning ms-1">{{ category[1].size }} artigo{% if category[1].size != 1 %}s{% endif %}</span>
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
      {% assign sorted_posts = category[1] | sort: 'date' %}
      {% for post in sorted_posts %}
        <article class="col-md-6 col-lg-4">
          <div class="card h-100 bg-dark text-light border-0 shadow hover-card" style="border-radius: 15px; background: linear-gradient(135deg, #242729, #101214);">
            <div class="card-body p-4">
              <h3 class="h5 card-title">
                <a href="{{ post.url | relative_url }}" class="text-decoration-none text-warning" style="text-shadow: 0 1px 3px rgba(0,0,0,0.3);">
                  {{ post.title }}
                </a>
              </h3>
              <p class="text-light-50 small">
                <span aria-hidden="true"><i class="bi bi-calendar3 me-1"></i></span>
                <span class="visually-hidden">Data:</span>
                <time datetime="{{ post.date | date: '%Y-%m-%d' }}">
                  {{ post.date | date: "%d de %B de %Y" }}
                </time>
                <br>
                <span aria-hidden="true"><i class="bi bi-folder2 me-1"></i></span>
                <span class="visually-hidden">Categoria:</span> {{ post.categories | join: ", " }}
              </p>
              <p class="card-text">{{ post.excerpt }}</p>
            </div>
            <div class="card-footer bg-transparent border-top border-secondary pt-2">
              <a href="{{ post.url | relative_url }}" class="btn btn-outline-warning btn-sm w-100" style="transition: all 0.3s ease;">
                Ler mais <span class="visually-hidden">sobre {{ post.title }}</span><i class="bi bi-arrow-right ms-1" aria-hidden="true"></i>
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
    const feedbackContainer = document.createElement('div');
    
    // Configuração da região live para leitores de tela
    feedbackContainer.setAttribute('role', 'status');
    feedbackContainer.setAttribute('aria-live', 'polite');
    feedbackContainer.classList.add('visually-hidden');
    document.body.appendChild(feedbackContainer);

    buttons.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const categoria = this.dataset.category;
        const categoriaNome = this.textContent.trim();
        let contadorVisivel = 0;

        posts.forEach(post => {
          const categoriasPost = post.dataset.category.split(' ');
          const displayValue = (categoria === 'all' || categoriasPost.includes(categoria)) ? 'block' : 'none';
          post.style.display = displayValue;
          
          if (displayValue === 'block') {
            contadorVisivel++;
          }
        });

        buttons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // Feedback acessível
        const mensagem = categoria === 'all' 
          ? `Mostrando todos os ${contadorVisivel} artigos` 
          : `Mostrando ${contadorVisivel} artigo${contadorVisivel !== 1 ? 's' : ''} da categoria ${categoriaNome}`;
        
        feedbackContainer.textContent = mensagem;
      });
    });
  });
</script>