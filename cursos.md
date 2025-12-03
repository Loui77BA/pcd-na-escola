---
layout: default
title: "Cursos"
description: "Cursos sobre educação, tecnologia e acessibilidade no PCD na Escola"
permalink: /cursos/
---

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<style>
  /* --- Variáveis de Design (Consistente com o site todo) --- */
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
    z-index: 10;
  }

  /* --- Tipografia --- */
  .text-gradient {
    background: linear-gradient(90deg, #996DFF, #8257e5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: var(--primary);
  }

  /* --- Filtros (Botões) --- */
  .filter-nav-card {
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

  .btn-filter {
    background: transparent;
    border: 1px solid #323238;
    color: var(--text-muted);
    padding: 0.6rem 1.2rem;
    border-radius: 50px;
    font-weight: 500;
    font-size: 0.9rem;
    transition: var(--transition);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
  }

  .btn-filter:hover {
    border-color: var(--primary);
    color: #fff;
    background-color: rgba(130, 87, 229, 0.1);
  }

  /* Estado Ativo do Filtro */
  .btn-filter.active {
    background-color: var(--primary);
    border-color: var(--primary);
    color: #fff;
    box-shadow: 0 4px 15px rgba(130, 87, 229, 0.4);
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

  .btn-filter.active .badge-count {
    background-color: rgba(0,0,0,0.3);
  }

  /* --- Card de Curso --- */
  .course-card {
    background-color: var(--bg-card);
    border-radius: 12px;
    padding: 2rem;
    height: 100%;
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    border: 1px solid transparent;
    position: relative;
  }

  .course-card:hover {
    background-color: var(--bg-hover);
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  }

  .course-icon {
    width: 48px;
    height: 48px;
    background: rgba(130, 87, 229, 0.1);
    color: var(--primary);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
  }

  .course-meta {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .course-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 1rem;
    line-height: 1.4;
  }

  .course-excerpt {
    color: var(--text-muted);
    font-size: 0.95rem;
    flex-grow: 1;
    margin-bottom: 1.5rem;
  }

  .btn-details {
    color: var(--primary);
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    margin-top: auto;
  }

  .btn-details:hover {
    color: #fff;
  }

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
           aria-pressed="true">
           Todos os cursos
        </button>
      </li>

      {% assign grouped = site.courses | group_by: 'category' %}
      {% for group in grouped %}
      <li>
        <button type="button" 
           class="btn-filter category-trigger" 
           data-category="{{ group.name | slugify }}"
           aria-pressed="false">
           {{ group.name | capitalize }}
           <span class="badge-count">{{ group.items | size }}</span>
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

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.category-trigger');
    const courses = document.querySelectorAll('.course-item');
    const noResultsMsg = document.getElementById('no-results');

    // Cria região live para leitores de tela (Feedback auditivo)
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.classList.add('visually-hidden-focusable'); // Classe Bootstrap para esconder visualmente
    document.body.appendChild(liveRegion);

    buttons.forEach(btn => {
      btn.addEventListener('click', function () {
        const selectedCategory = this.dataset.category;
        const categoryName = this.textContent.trim().split(/\d/)[0]; // Pega o nome sem o número do badge
        let visibleCount = 0;

        // Lógica de filtragem
        courses.forEach(course => {
          const courseCategory = course.dataset.category;
          const shouldShow = (selectedCategory === 'all' || courseCategory === selectedCategory);
          
          if (shouldShow) {
            course.classList.remove('d-none'); // Usa classes utilitárias do Bootstrap para esconder/mostrar
            // Pequena animação de fade-in (opcional)
            course.style.animation = 'fadeIn 0.5s';
            visibleCount++;
          } else {
            course.classList.add('d-none');
          }
        });

        // Atualiza estado visual dos botões
        buttons.forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-pressed', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-pressed', 'true');

        // Mostra mensagem de "sem resultados" se necessário
        if (visibleCount === 0) {
            noResultsMsg.classList.remove('d-none');
        } else {
            noResultsMsg.classList.add('d-none');
        }

        // Feedback acessível para leitores de tela
        const message = selectedCategory === 'all'
          ? `Mostrando todos os ${visibleCount} cursos`
          : `Mostrando ${visibleCount} curso${visibleCount !== 1 ? 's' : ''} na categoria ${categoryName}`;
        
        // Pequeno delay para garantir que o leitor de tela capte a mudança
        setTimeout(() => {
            liveRegion.textContent = message;
        }, 100);
      });
    });
  });

  // Adiciona keyframes para animação suave via JS
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
</script>