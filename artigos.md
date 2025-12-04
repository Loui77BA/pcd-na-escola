---
layout: default
title: "Artigos"
description: "Artigos sobre educação, tecnologia e acessibilidade no PcD na Escola"
---

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<style>
  /* --- Variáveis de Design (Mesma da Home) --- */
  :root {
    --bg-body: #121214;
    --bg-card: #202024;
    --bg-hover: #29292e;
    --primary: #8257e5;
    --primary-dark: #6c4ed9;
    --text-main: #e1e1e6;
    --text-muted: #a8a8b3;
    --focus-color: #ffd700;
    --transition: all 0.3s ease;
  }

  body {
    background-color: var(--bg-body);
    color: var(--text-main);
    font-family: 'Poppins', sans-serif;
  }

  /* --- Acessibilidade: Foco Visível --- */
  a:focus-visible, button:focus-visible {
    outline: 3px solid var(--focus-color) !important;
    outline-offset: 3px;
    border-radius: 4px;
  }

  /* --- Tipografia e Gradientes --- */
  .text-gradient {
    background: linear-gradient(90deg, #996DFF, #8257e5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: var(--primary);
  }

  .section-title {
    color: #fff;
    font-weight: 700;
    margin-bottom: 2rem;
    display: inline-flex;
    align-items: center;
  }

  .section-title::before {
    content: '';
    display: block;
    width: 6px;
    height: 24px;
    background-color: var(--primary);
    margin-right: 12px;
    border-radius: 2px;
  }

  /* --- Navegação de Categorias (Pills) --- */
  .category-nav-card {
    background-color: var(--bg-card);
    border-radius: 16px;
    padding: 2rem;
    margin-bottom: 3rem;
  }

  .nav-pills-custom {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .btn-category {
    background: transparent;
    border: 1px solid #323238;
    color: var(--text-muted);
    padding: 0.6rem 1.2rem;
    border-radius: 50px;
    font-weight: 500;
    font-size: 0.9rem;
    transition: var(--transition);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
  }

  .btn-category:hover, .btn-category:focus {
    border-color: var(--primary);
    color: #fff;
    background-color: rgba(130, 87, 229, 0.1);
    transform: translateY(-2px);
  }

  .badge-count {
    background-color: #323238;
    color: #fff;
    font-size: 0.75rem;
    padding: 2px 8px;
    border-radius: 12px;
    margin-left: 8px;
    transition: var(--transition);
  }

  .btn-category:hover .badge-count {
    background-color: var(--primary);
  }

  /* --- Card de Artigo Moderno --- */
  .article-card {
    background-color: var(--bg-card);
    border-radius: 12px;
    padding: 2rem;
    height: 100%;
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    border: 1px solid transparent;
    position: relative; /* Para link esticado */
  }

  .article-card:hover {
    background-color: var(--bg-hover);
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  }

  .article-meta {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .article-meta i {
    font-size: 1rem;
    color: var(--primary);
    margin-right: 6px;
  }

  .article-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 1rem;
    line-height: 1.4;
  }

  .article-excerpt {
    color: var(--text-muted);
    font-size: 0.95rem;
    flex-grow: 1;
    margin-bottom: 1.5rem;
  }

  .btn-read-more {
    color: var(--primary);
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    margin-top: auto;
    transition: var(--transition);
  }

  .btn-read-more:hover {
    color: #fff;
    transform: translateX(5px);
  }

  /* Link esticado para tornar o card todo clicável (Acessibilidade: Link único) */
  .stretched-link::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    content: "";
  }
</style>

<div class="container py-5">
  
  <header class="mb-5 text-center text-lg-start">
    <h1 class="display-4 fw-bold mb-3 text-white">
      <span class="text-gradient">Biblioteca de Artigos</span>
    </h1>
    <p class="lead" style="color: var(--text-muted); max-width: 700px;">
      Explore nossos artigos sobre tecnologia, programação, educação inclusiva e acessibilidade. Utilize os filtros abaixo para encontrar o conteúdo ideal para você.
    </p>
  </header>
  
  <nav class="category-nav-card" aria-label="Filtrar por categorias">
    <h2 class="h6 text-uppercase fw-bold text-white mb-3" style="letter-spacing: 1px; opacity: 0.8;">
      <i class="material-icons align-middle fs-6 me-1" aria-hidden="true">filter_list</i> Categorias
    </h2>
    <ul class="nav-pills-custom" role="list">
      {% for category in site.categories %}
      {% assign count = category[1].size %}
      <li>
        <a href="#categoria-{{ category[0] | slugify }}" 
           class="btn-category"
           aria-label="Ir para seção {{ category[0] | capitalize }}, que contém {{ count }} artigo{% if count != 1 %}s{% endif %}">
           {{ category[0] | capitalize }}
           <span class="badge-count">
             {{ count }} artigo{% if count != 1 %}s{% endif %}
           </span>
        </a>
      </li>
      {% endfor %}
    </ul>
  </nav>

  <div id="categorias-content">
    {% for category in site.categories %}
    <section id="categoria-{{ category[0] | slugify }}" class="mb-5 pt-4">
      
      <h2 class="section-title h3">
        {{ category[0] | capitalize }}
      </h2>

      <div class="row g-4">
      {% assign sorted_posts = category[1] | sort: 'date' %}
      {% for post in sorted_posts %}
        <div class="col-md-6 col-lg-4">
          <article class="article-card h-100">
            
            <div class="article-meta">
              <span>
                <i class="material-icons align-middle" aria-hidden="true">event_note</i>
                <time datetime="{{ post.date | date: '%Y-%m-%d' }}">
                  {{ post.date | date: "%d/%m/%Y" }}
                </time>
              </span>
            </div>

            <h3 class="article-title">
              <a href="{{ post.url | relative_url }}" class="text-decoration-none text-white stretched-link">
                {{ post.title }}
              </a>
            </h3>

            <p class="article-excerpt">
              {{ post.excerpt | strip_html | truncatewords: 20 }}
            </p>

            <div class="btn-read-more" aria-hidden="true">
              Ler artigo <i class="material-icons fs-5 ms-1">arrow_forward</i>
            </div>
            
            <span class="visually-hidden">Ler artigo completo: {{ post.title }}</span>

          </article>
        </div>
      {% endfor %}
      </div>
    </section>
    {% endfor %}
  </div>
</div>