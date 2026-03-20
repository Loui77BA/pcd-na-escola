---
layout: home
title: "Página Inicial"
permalink: /
description: "O PcD na Escola é um projeto que visa promover a educação e tecnologia para todas as pessoas, com foco na acessibilidade e inclusão de pessoas com deficiência."
---

<!-- ========== HERO ========== -->
<section class="hero-section" aria-labelledby="hero-title">
    <div class="hero-glow" aria-hidden="true"></div>
    <div class="container px-4 position-relative">
        <div class="row align-items-center justify-content-center min-vh-75">
            <div class="col-lg-7 text-center text-lg-start mb-5 mb-lg-0">
                <p class="hero-eyebrow">
                    <i class="material-icons align-middle me-1" aria-hidden="true">school</i>
                    Educação, Tecnologia e Acessibilidade
                </p>
                <h1 id="hero-title" class="hero-title">
                    Conteúdo acessível para
                    <span class="hero-gradient-text">todas as pessoas</span>
                </h1>
                <p class="hero-description">
                    "Para as pessoas sem deficiência, a tecnologia torna as coisas mais fáceis. Para as pessoas com deficiência, a tecnologia torna as coisas possíveis"
                    <span class="d-block mt-2 fw-medium text-white">— Mary Pat Radabaugh</span>
                </p>
                <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mt-4">
                    <a class="btn btn-hero-primary" href="{{ '/artigos' | relative_url }}">
                        <i class="material-icons me-2" aria-hidden="true">auto_stories</i>
                        Explorar Artigos
                    </a>
                    <a class="btn btn-hero-outline" href="{{ '/cursos' | relative_url }}">
                        <i class="material-icons me-2" aria-hidden="true">play_circle</i>
                        Ver Cursos
                    </a>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="hero-video-frame">
                    <div class="ratio ratio-16x9">
                        <iframe
                            src="https://customer-n8imyf4ea5hvxexl.cloudflarestream.com/bdb671eacec4dc6db44cd7729bece654/iframe?poster=https%3A%2F%2Fimagedelivery.net%2FRuw4waFkOelbXULIoE-oQg%2F9da6e101-1fe1-46f8-b533-b0cfd9c49e00%2Fpublic"
                            loading="lazy"
                            style="border: none;"
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                            allowfullscreen
                            title="Vídeo de apresentação do projeto PcD na Escola"
                            aria-hidden="true"
                            tabindex="-1"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ========== NÚMEROS / IMPACTO ========== -->
<section class="section-divider-line" aria-hidden="true"></section>
<section class="py-5" aria-labelledby="impact-title">
    <div class="container px-4">
        <h2 id="impact-title" class="visually-hidden">Nosso impacto em números</h2>
        <div class="row g-4 justify-content-center text-center">
            <div class="col-6 col-lg-3">
                <div class="impact-stat">
                    <span class="impact-number">{{ site.posts | size }}+</span>
                    <span class="impact-label">artigos publicados</span>
                </div>
            </div>
            <div class="col-6 col-lg-3">
                <div class="impact-stat">
                    <span class="impact-number">{{ site.courses | size }}</span>
                    <span class="impact-label">cursos em vídeo</span>
                </div>
            </div>
            <div class="col-6 col-lg-3">
                <div class="impact-stat">
                    <span class="impact-number">{{ site.categories | size }}</span>
                    <span class="impact-label">categorias de conteúdo</span>
                </div>
            </div>
            <div class="col-6 col-lg-3">
                <div class="impact-stat">
                    <span class="impact-number">{{ site.ferramentas | size }}</span>
                    <span class="impact-label">{% if site.ferramentas.size == 1 %}ferramenta acessível{% else %}ferramentas acessíveis{% endif %}</span>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="section-divider-line" aria-hidden="true"></section>

<!-- ========== ARTIGOS RECENTES ========== -->
<section class="py-6" aria-labelledby="recent-articles-title">
    <div class="container px-4">
        <div class="section-header">
            <div>
                <span class="section-tag">Publicações</span>
                <h2 id="recent-articles-title" class="section-title-lg">Artigos recentes</h2>
            </div>
            <a href="{{ '/artigos' | relative_url }}" class="btn btn-outline-custom rounded-pill px-4 d-none d-md-inline-flex align-items-center">
                Ver todos
                <i class="material-icons ms-1 fs-6" aria-hidden="true">arrow_forward</i>
            </a>
        </div>

        <div class="row g-4">
            {% assign recent_posts = site.posts | slice: 0, 3 %}
            {% for post in recent_posts %}
            <div class="col-md-6 col-lg-4">
                <article class="home-card">
                    <div class="home-card-badge">
                        {% for cat in post.categories %}
                        <span class="badge-tag">{{ cat }}</span>
                        {% endfor %}
                    </div>
                    <h3 class="home-card-title">
                        <a href="{{ post.url | relative_url }}" class="stretched-link">
                            {{ post.title }}
                        </a>
                    </h3>
                    <p class="home-card-excerpt">
                        {{ post.excerpt | strip_html | truncatewords: 22 }}
                    </p>
                    <div class="home-card-footer">
                        <time datetime="{{ post.date | date: '%Y-%m-%d' }}" class="home-card-date">
                            <i class="material-icons fs-6 me-1" aria-hidden="true">event</i>
                            {{ post.date | date: "%d/%m/%Y" }}
                        </time>
                        <span class="home-card-arrow" aria-hidden="true">
                            <i class="material-icons">arrow_forward</i>
                        </span>
                    </div>
                </article>
            </div>
            {% endfor %}
        </div>

        <div class="text-center mt-4 d-md-none">
            <a href="{{ '/artigos' | relative_url }}" class="btn btn-outline-custom rounded-pill px-4">
                Ver todos os artigos
                <i class="material-icons align-middle ms-1 fs-6" aria-hidden="true">arrow_forward</i>
            </a>
        </div>
    </div>
</section>

<!-- ========== CURSOS ========== -->
<section class="py-6 section-alt" aria-labelledby="courses-title">
    <div class="container px-4">
        <div class="section-header">
            <div>
                <span class="section-tag">Aprendizado</span>
                <h2 id="courses-title" class="section-title-lg">Cursos disponíveis</h2>
            </div>
            <a href="{{ '/cursos' | relative_url }}" class="btn btn-outline-custom rounded-pill px-4 d-none d-md-inline-flex align-items-center">
                Ver todos
                <i class="material-icons ms-1 fs-6" aria-hidden="true">arrow_forward</i>
            </a>
        </div>

        <div class="row g-4 justify-content-center">
            {% for course in site.courses %}
            <div class="col-md-6">
                <article class="home-card home-card-horizontal">
                    <div class="home-card-icon" aria-hidden="true">
                        <i class="material-icons">play_circle</i>
                    </div>
                    <div class="home-card-body">
                        <div class="home-card-badge">
                            {% if course.category %}
                            <span class="badge-tag">{{ course.category }}</span>
                            {% endif %}
                        </div>
                        <h3 class="home-card-title">
                            <a href="{{ course.url | relative_url }}" class="stretched-link">
                                {{ course.title }}
                            </a>
                        </h3>
                        {% if course.excerpt %}
                        <p class="home-card-excerpt">
                            {{ course.excerpt | strip_html | truncate: 100 }}
                        </p>
                        {% endif %}
                        <span class="home-card-arrow" aria-hidden="true">
                            Ver curso <i class="material-icons fs-6 ms-1">arrow_forward</i>
                        </span>
                    </div>
                </article>
            </div>
            {% endfor %}
        </div>

        <div class="text-center mt-4 d-md-none">
            <a href="{{ '/cursos' | relative_url }}" class="btn btn-outline-custom rounded-pill px-4">
                Ver todos os cursos
                <i class="material-icons align-middle ms-1 fs-6" aria-hidden="true">arrow_forward</i>
            </a>
        </div>
    </div>
</section>

<!-- ========== PARA QUEM É ========== -->
<section class="py-6" aria-labelledby="audience-title">
    <div class="container px-4">
        <div class="text-center mb-5">
            <span class="section-tag">Foco principal</span>
            <h2 id="audience-title" class="section-title-lg">Para quem é o PcD na Escola?</h2>
            <p class="section-subtitle">Nosso conteúdo é feito para quem acredita em educação acessível</p>
        </div>

        <div class="row g-4 justify-content-center">
            <div class="col-lg-6">
                <div class="audience-card">
                    <div class="audience-card-icon">
                        <i class="material-icons" aria-hidden="true">location_on</i>
                    </div>
                    <div>
                        <h3 class="audience-card-title">Nordeste do Brasil</h3>
                        <p class="audience-card-text">Há mais pessoas com deficiência fora da escola do que a média nacional. Queremos mudar essa realidade.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="audience-card">
                    <div class="audience-card-icon">
                        <i class="material-icons" aria-hidden="true">location_city</i>
                    </div>
                    <div>
                        <h3 class="audience-card-title">Interior e cidades pequenas</h3>
                        <p class="audience-card-text">É difícil acessar informações especializadas longe dos grandes centros. Levamos o conteúdo até você.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="audience-card">
                    <div class="audience-card-icon">
                        <i class="material-icons" aria-hidden="true">diversity_1</i>
                    </div>
                    <div>
                        <h3 class="audience-card-title">Comunidade e familiares</h3>
                        <p class="audience-card-text">O capacitismo acontece em todos os lugares e combatê-lo precisa de união e informação de qualidade.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="audience-card">
                    <div class="audience-card-icon">
                        <i class="material-icons" aria-hidden="true">school</i>
                    </div>
                    <div>
                        <h3 class="audience-card-title">Escolas e educadores</h3>
                        <p class="audience-card-text">Para colaborar diretamente com a comunidade escolar na construção de ambientes mais inclusivos.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ========== VISÃO E MISSÃO ========== -->
<section class="py-6 section-alt" aria-labelledby="vision-mission-title">
    <div class="container px-4">
        <h2 id="vision-mission-title" class="visually-hidden">Nossa Visão e Missão</h2>

        <div class="row gx-5 gy-5">
            <div class="col-lg-6">
                <div class="vm-card">
                    <div class="vm-card-header">
                        <i class="material-icons vm-card-icon" aria-hidden="true">visibility</i>
                        <h3 class="h3 fw-bold mb-0">Visão</h3>
                    </div>
                    <p class="text-muted-custom lead">
                        Queremos ser um lugar excelente para compartilhar conteúdo sobre educação, tecnologia e acessibilidade, ajudando na formação crítica de pessoas com deficiência.
                    </p>
                    <div class="media-frame">
                        <img class="img-fluid w-100"
                            src="https://media.istockphoto.com/id/474967218/photo/portrait-of-boy-sitting-in-wheelchair-at-library.jpg?s=612x612&w=0&k=20&c=-awiQc39xdn0XlMrOgfWhyjBcNnYh-I8HnEIf3cvnwg="
                            alt="Menino sorrindo sentado em cadeira de rodas em uma biblioteca escolar"
                            loading="lazy">
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="vm-card">
                    <div class="vm-card-header">
                        <i class="material-icons vm-card-icon" aria-hidden="true">flag</i>
                        <h3 class="h3 fw-bold mb-0">Missão</h3>
                    </div>
                    <p class="text-muted-custom lead">
                        Queremos facilitar o acesso ao conhecimento e à tecnologia, independentemente das necessidades educacionais específicas de quem deseja aprender.
                    </p>
                    <div class="media-frame">
                        <img class="img-fluid w-100"
                            src="https://media.istockphoto.com/id/1323184150/photo/her-disability-doesnt-stop-her-from-being-a-successful-businesswoman.jpg?s=612x612&w=0&k=20&c=qnr9GU2wt_XrikxPbYin89x6tAzSpcgfhUBXOTG4_FQ="
                            alt="Mulher profissional com deficiência trabalhando em escritório moderno"
                            loading="lazy">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ========== DESAFIOS ========== -->
<section class="py-6" aria-labelledby="challenges-title">
    <div class="container px-4">
        <div class="row gx-5 align-items-center">
            <div class="col-lg-6 mb-5 mb-lg-0">
                <span class="section-tag">Contexto</span>
                <h2 id="challenges-title" class="section-title-lg mb-4">Desafios na Educação</h2>
                <p class="text-muted-custom mb-4 challenge-text">
                    Pessoas com deficiência enfrentam diversas barreiras no ambiente educacional, desde a falta de acessibilidade física até a ausência de materiais didáticos adaptados.
                </p>
                <p class="text-muted-custom mb-0 challenge-text">
                    Muitas escolas e universidades ainda não estão preparadas para oferecer um ambiente verdadeiramente inclusivo.
                </p>
                <div class="challenge-callout">
                    <i class="material-icons text-gradient" aria-hidden="true">warning</i>
                    <p class="mb-0">
                        A falta de capacitação dos profissionais da educação e a escassez de recursos tecnológicos assistivos também são obstáculos significativos que precisam ser superados.
                    </p>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="media-frame cf-player">
                    <div class="ratio ratio-16x9">
                        <iframe
                            src="https://customer-n8imyf4ea5hvxexl.cloudflarestream.com/b5ec1881b528d8c92b827c5a27862d3c/iframe?poster=https%3A%2F%2Fimagedelivery.net%2FRuw4waFkOelbXULIoE-oQg%2F89dd155d-aea0-4c79-3eec-e91b10fac400%2Fpublic"
                            loading="lazy"
                            style="border: none;"
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                            allowfullscreen
                            title="Vídeo sobre desafios na educação inclusiva"
                            aria-hidden="true"
                            tabindex="-1"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ========== PRINCÍPIOS ========== -->
<section class="py-6 section-alt" aria-labelledby="principles-title">
    <div class="container px-4">
        <div class="text-center mb-5">
            <span class="section-tag">Valores</span>
            <h2 id="principles-title" class="section-title-lg">Nossos Princípios</h2>
        </div>

        <div class="row g-4 justify-content-center">
            <div class="col-lg-4 col-md-6">
                <div class="principle-card">
                    <div class="principle-card-number" aria-hidden="true">01</div>
                    <h3 class="principle-card-title">Humanidade</h3>
                    <p class="principle-card-text">A naturalização da pessoa com deficiência enquanto ser humano, afastando-se por completo do padrão que tende a extremos de inferioridade e superação.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="principle-card">
                    <div class="principle-card-number" aria-hidden="true">02</div>
                    <h3 class="principle-card-title">Respeito</h3>
                    <p class="principle-card-text">O respeito absoluto e incondicional a laicidade e aos valores políticos, jurídicos e sociais do Estado Democrático de Direito na abordagem sobre a deficiência.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="principle-card">
                    <div class="principle-card-number" aria-hidden="true">03</div>
                    <h3 class="principle-card-title">Combate</h3>
                    <p class="principle-card-text">O combate ao preconceito inclusive entre as diferentes comunidades de pessoas com deficiência e a equivocada hierarquização de deficiências.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ========== CTA FINAL ========== -->
<section class="py-6" aria-labelledby="cta-final-title">
    <div class="container px-4">
        <div class="cta-final-card text-center">
            <h2 id="cta-final-title" class="cta-final-title">
                Comece a explorar o
                <span class="hero-gradient-text">PcD na Escola</span>
            </h2>
            <p class="cta-final-description">
                Acesse artigos, cursos e ferramentas sobre educação inclusiva, acessibilidade e tecnologia assistiva.
            </p>
            <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <a class="btn btn-hero-primary" href="{{ '/artigos' | relative_url }}">
                    <i class="material-icons me-2" aria-hidden="true">auto_stories</i>
                    Explorar Artigos
                </a>
                <a class="btn btn-hero-outline" href="{{ '/contato' | relative_url }}">
                    <i class="material-icons me-2" aria-hidden="true">mail_outline</i>
                    Entrar em Contato
                </a>
            </div>
        </div>
    </div>
</section>
