---
layout: default
title: "Tabela Periódica Acessível"
permalink: /ferramentas-tabela-periodica-acessivel-para-pessoas-com-deficiencia/
tags: [ferramentas]
description: "Conheça a Tabela Periódica Acessível, uma ferramenta desenvolvida para facilitar o aprendizado de química para pessoas com deficiência."
---

<!-- CSS de terceiros: Bootstrap, Material Symbols e animate.css -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">

<style>
  /* ============================= */
  /*          Design tokens        */
  /* ============================= */
  :root {
    --bg: #0e0e14;
    --surface: #151520;
    --surface-2: #1a1a26;
    --text: #ffffff;
    --muted: rgba(255,255,255,0.72);
    --border: #2c2c3a;
    --primary: #2a7bff;
    --focus: #00aaff;
  }

  html, body {
    background: var(--bg);
    color: var(--text);
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Arial, "Apple Color Emoji", "Segoe UI Emoji";
    line-height: 1.5;
  }

  /* ============================= */
  /*     Acessibilidade global     */
  /* ============================= */
  #skip-link {
    position: absolute;
    left: -9999px;
    z-index: 9999;
    padding: 1rem;
    background-color: #111;
    color: #fff;
    border: 2px solid var(--focus);
    border-radius: .5rem;
    opacity: 0;
  }
  #skip-link:focus {
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
  }

  :focus-visible {
    outline: 3px solid var(--focus) !important;
    outline-offset: 3px !important;
    box-shadow: 0 0 0 3px rgba(26, 136, 255, 0.40) !important;
    border-radius: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
  }

  /* Responsividade para botões de controle em mobile */
  @media (max-width: 575.98px) {
    .btn.rounded-pill {
      font-size: 0.875rem;
      padding: 0.5rem 0.75rem;
    }
    
    .btn .material-symbols-outlined {
      font-size: 1.25rem;
    }
    
    #modo-visualizacao-label,
    #cores-visualizacao-label,
    #periodos-nav-label,
    #grupos-nav-label,
    #categorias-nav-label,
    #acoes-rapidas-label {
      font-size: 0.875rem !important;
    }
  }

  /* ============================= */
  /*            Header             */
  /* ============================= */
  header[role="banner"] {
    padding: 4rem 1rem;
    border-bottom: 1px solid rgba(255,255,255,0.18);
    text-align: center;
    position: relative;
    overflow: hidden;
    isolation: isolate;
  }
  header h1 { font-weight: 800; letter-spacing: .2px; }
  header .lead { max-width: 56rem; margin: 0 auto; color: var(--muted); }
  header .btn {
    border-radius: 999px;
    margin: .25rem;
    border: 1px solid rgba(255,255,255,.35);
    transition: transform .2s ease, background-color .2s ease;
  }
  header .btn:hover,
  header .btn:focus-visible { background: rgba(255,255,255,0.22); transform: translateY(-1px); }

  .feature-card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 1rem;
    padding: 1.5rem;
    transition: transform .3s, box-shadow .3s;
  }
  .feature-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }

  /* Camadas decorativas não capturam clique */
  .decorative-overlay { position: absolute; inset: 0; pointer-events: none; }
  .header-particles .particle { pointer-events: none; }

  /* ============================= */
  /*   Botões/elementos (JS ext.)  */
  /* ============================= */
  .btn-elemento {
    border-radius: 1rem;
    margin: .5rem;
    padding: 1rem;
    min-height: 180px;
    background: linear-gradient(145deg, var(--surface-2), #13131c);
    border: 1px solid var(--border);
    transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease;
  }
  .btn-elemento:hover { transform: translateY(-4px); border-color: var(--focus); box-shadow: 0 10px 24px rgba(0,0,0,.35); }
  .btn-elemento:focus-visible { outline: 3px solid var(--focus); outline-offset: 4px; }
  
  /* Cores para elementos químicos - com contraste adequado para baixa visão */
  .color-mode-active .elemento-hidrogenio { 
    background: #ffffff; 
    color: #000000; 
    border-color: #555555;
  }
  .color-mode-active .elemento-alcalino { 
    background: #9d4edd; 
    color: #ffffff; 
    text-shadow: 0px 1px 2px rgba(0,0,0,0.5);
  }
  .color-mode-active .elemento-alcalino-terroso { 
    background: #748cab; 
    color: #ffffff; 
    text-shadow: 0px 1px 2px rgba(0,0,0,0.5);
  }
  .color-mode-active .elemento-transicao { 
    background: #ffcc00; 
    color: #000000; 
    text-shadow: 0px 1px 1px rgba(255,255,255,0.5);
  }
  .color-mode-active .elemento-lantanideo { 
    background: #ff7f50; 
    color: #000000; 
    text-shadow: 0px 1px 1px rgba(255,255,255,0.5);
  }
  .color-mode-active .elemento-actinideo { 
    background: #ffa07a; 
    color: #000000; 
    text-shadow: 0px 1px 1px rgba(255,255,255,0.5);
  }
  .color-mode-active .elemento-nao-metal { 
    background: #6a994e; 
    color: #ffffff; 
    text-shadow: 0px 1px 2px rgba(0,0,0,0.5);
  }
  .color-mode-active .elemento-semimetal { 
    background: #e63946; 
    color: #ffffff; 
    text-shadow: 0px 1px 2px rgba(0,0,0,0.5);
  }
  .color-mode-active .elemento-metal-representativo { 
    background: #ffe066; 
    color: #000000; 
    text-shadow: 0px 1px 1px rgba(255,255,255,0.5);
  }
  .color-mode-active .elemento-gas-nobre { 
    background: #00b4d8; 
    color: #000000; 
    text-shadow: 0px 1px 1px rgba(255,255,255,0.5);
  }
  
  /* Cores para modais com contraste adequado */
  .color-mode-active .modal-hidrogenio .modal-content { 
    background: linear-gradient(145deg, #ffffff, #f0f0f0); 
    color: #000000; 
    border-color: #555555;
  }
  .color-mode-active .modal-alcalino .modal-content { 
    background: linear-gradient(145deg, #9d4edd, #8a3ec8); 
    color: #ffffff; 
  }
  .color-mode-active .modal-alcalino-terroso .modal-content { 
    background: linear-gradient(145deg, #748cab, #647ba3); 
    color: #ffffff; 
  }
  .color-mode-active .modal-transicao .modal-content { 
    background: linear-gradient(145deg, #ffcc00, #e0b300); 
    color: #000000; 
  }
  .color-mode-active .modal-lantanideo .modal-content { 
    background: linear-gradient(145deg, #ff7f50, #e67147); 
    color: #000000; 
  }
  .color-mode-active .modal-actinideo .modal-content { 
    background: linear-gradient(145deg, #ffa07a, #e6906e); 
    color: #000000; 
  }
  .color-mode-active .modal-nao-metal .modal-content { 
    background: linear-gradient(145deg, #6a994e, #5d8844); 
    color: #ffffff; 
  }
  .color-mode-active .modal-semimetal .modal-content { 
    background: linear-gradient(145deg, #e63946, #cf333e); 
    color: #ffffff; 
  }
  .color-mode-active .modal-metal-representativo .modal-content { 
    background: linear-gradient(145deg, #ffe066, #e6ca5c); 
    color: #000000; 
  }
  .color-mode-active .modal-gas-nobre .modal-content { 
    background: linear-gradient(145deg, #00b4d8, #009ec0); 
    color: #000000; 
  }
  
  /* Melhorias de contraste para elementos específicos dentro das modais coloridas */
  .color-mode-active .modal .btn-secondary {
    background-color: rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 0, 0, 0.3);
    color: inherit;
  }
  
  /* Garantindo que os símbolos e nomes dos elementos sejam mais visíveis */
  .color-mode-active .elemento-hidrogenio .fw-bolder,
  .color-mode-active .elemento-transicao .fw-bolder,
  .color-mode-active .elemento-lantanideo .fw-bolder,
  .color-mode-active .elemento-actinideo .fw-bolder,
  .color-mode-active .elemento-metal-representativo .fw-bolder,
  .color-mode-active .elemento-gas-nobre .fw-bolder {
    color: #000000;
  }
  
  .color-mode-active .elemento-alcalino .fw-bolder,
  .color-mode-active .elemento-alcalino-terroso .fw-bolder,
  .color-mode-active .elemento-nao-metal .fw-bolder,
  .color-mode-active .elemento-semimetal .fw-bolder {
    color: #ffffff;
  }
  
  /* Melhorando o contraste em estados de hover e focus */
  .color-mode-active .elemento-hidrogenio:hover,
  .color-mode-active .elemento-hidrogenio:focus-visible {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.3) !important;
    border-color: #000 !important;
  }
  
  .color-mode-active .elemento-transicao:hover,
  .color-mode-active .elemento-lantanideo:hover,
  .color-mode-active .elemento-actinideo:hover,
  .color-mode-active .elemento-metal-representativo:hover,
  .color-mode-active .elemento-gas-nobre:hover,
  .color-mode-active .elemento-transicao:focus-visible,
  .color-mode-active .elemento-lantanideo:focus-visible,
  .color-mode-active .elemento-actinideo:focus-visible,
  .color-mode-active .elemento-metal-representativo:focus-visible,
  .color-mode-active .elemento-gas-nobre:focus-visible {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.3) !important;
    filter: brightness(0.9);
  }
  
  .color-mode-active .elemento-alcalino:hover,
  .color-mode-active .elemento-alcalino-terroso:hover,
  .color-mode-active .elemento-nao-metal:hover,
  .color-mode-active .elemento-semimetal:hover,
  .color-mode-active .elemento-alcalino:focus-visible,
  .color-mode-active .elemento-alcalino-terroso:focus-visible,
  .color-mode-active .elemento-nao-metal:focus-visible,
  .color-mode-active .elemento-semimetal:focus-visible {
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.4) !important;
    filter: brightness(1.1);
  }

  /* ============================= */
  /*              Modal            */
  /* ============================= */
  .modal-content { background: #1a1a24; color: #fff; border: 1px solid var(--border); border-radius: 1rem; }
  .modal-header, .modal-footer { border-color: var(--border); }
  .modal-about-image { border-radius: 8px; box-shadow: 0 10px 20px rgba(0,0,0,0.2); transition: transform 0.3s ease; }
  .modal-about-image:hover { transform: scale(1.02); }

  /* ============================= */
  /*     Seção da Tabela (UI)      */
  /* ============================= */
  section#secao-periodos { padding: 2rem 0; position: relative; }
  /* Removido código morto da ponte visual com o header */

  /* container de elementos (mais legível) */
  #tabela-container {
    position: relative;
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 1rem;
    padding: 1.5rem;
    min-height: 280px;
  }
  #tabela-status { position: absolute; clip: rect(0 0 0 0); clip-path: inset(50%); height: 1px; width: 1px; overflow: hidden; white-space: nowrap; }
</style>

<!-- Link "Pular para o conteúdo" -->
<a id="skip-link" class="btn btn-primary" href="#secao-periodos">Pular para o conteúdo principal</a>

<header class="text-white py-5 position-relative overflow-hidden" role="banner">
  <!-- Partículas (decorativas) -->
  <div class="header-particles decorative-overlay" aria-hidden="true" role="presentation">
    <span class="particle" style="width: 15px; height: 15px; left: 10%; top: 20%; animation: float 12s ease-in-out infinite;"></span>
    <span class="particle" style="width: 25px; height: 25px; left: 20%; top: 80%; animation: float 16s ease-in-out infinite;"></span>
    <span class="particle" style="width: 20px; height: 20px; left: 50%; top: 30%; animation: float 13s ease-in-out infinite;"></span>
    <span class="particle" style="width: 10px; height: 10px; left: 80%; top: 20%; animation: float 14s ease-in-out infinite;"></span>
    <span class="particle" style="width: 30px; height: 30px; left: 90%; top: 70%; animation: float 15s ease-in-out infinite;"></span>
    <span class="particle" style="width: 15px; height: 15px; left: 30%; top: 60%; animation: float 11s ease-in-out infinite;"></span>
    <span class="particle" style="width: 20px; height: 20px; left: 70%; top: 50%; animation: float 12s ease-in-out infinite;"></span>
  </div>

  <!-- Espaço para gradiente animado removido (código morto) -->

  <div class="container position-relative" style="z-index:1;">
    <div class="row align-items-center py-4">
      <div class="col-lg-8 mx-auto text-center">
        <!-- Ícone átomo decorativo -->
        <div class="atom-animation animate__animated animate__fadeIn" aria-hidden="true" role="presentation" style="position:relative; width:100px; height:100px; margin:0 auto 2rem;">
          <div class="nucleus" style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:30px; height:30px; border-radius:50%; background: radial-gradient(circle at 30% 30%, #f7b733, #fc4a1a); box-shadow: 0 0 15px rgba(252, 74, 26, 0.7); z-index:2;"></div>
          <div class="electron-orbit" style="position:absolute; top:0; left:0; width:100%; height:100%; border:2px dashed rgba(255,255,255,0.4); border-radius:50%; animation: spin 8s linear infinite;">
            <div class="electron" style="position:absolute; top:-6px; left:50%; width:12px; height:12px; border-radius:50%; background: radial-gradient(circle at 30% 30%, #4facfe, #00f2fe); box-shadow:0 0 10px rgba(79, 172, 254, 0.8);"></div>
          </div>
          <div class="electron-orbit" style="position:absolute; top:10%; left:10%; width:80%; height:80%; border:2px dashed rgba(255,255,255,0.4); border-radius:50%; animation: spin 6s linear infinite reverse; transform: rotate(60deg);">
            <div class="electron" style="position:absolute; top:-6px; left:50%; width:12px; height:12px; border-radius:50%; background: radial-gradient(circle at 30% 30%, #4facfe, #00f2fe); box-shadow:0 0 10px rgba(79, 172, 254, 0.8);"></div>
          </div>
          <div class="electron-orbit" style="position:absolute; top:20%; left:20%; width:60%; height:60%; border:2px dashed rgba(255,255,255,0.4); border-radius:50%; animation: spin 4s linear infinite; transform: rotate(30deg);">
            <div class="electron" style="position:absolute; top:-6px; left:50%; width:12px; height:12px; border-radius:50%; background: radial-gradient(circle at 30% 30%, #4facfe, #00f2fe); box-shadow:0 0 10px rgba(79, 172, 254, 0.8);"></div>
          </div>
        </div>

        <h1 id="page-title" class="display-4 fw-bold mb-3 animate__animated animate__fadeInUp" tabindex="-1">Tabela Periódica Acessível</h1>
        <p class="lead mb-4 animate__animated animate__fadeInUp animate__delay-1s" aria-live="polite">
          Uma ferramenta interativa desenvolvida para tornar o aprendizado de química mais acessível para todas as pessoas.
        </p>

        <!-- Cards de recursos (conteúdo descritivo NÃO interativo) -->
        <div class="row justify-content-center mt-5 mb-4">
          <div class="col-md-4 mb-4">
            <section class="feature-card h-100" role="region" aria-labelledby="feat-a11y-title" aria-describedby="feat-a11y-desc">
              <span class="material-symbols-outlined d-block mb-2" aria-hidden="true">accessibility_new</span>
              <h5 id="feat-a11y-title" class="mb-1">Acessibilidade</h5>
              <p id="feat-a11y-desc" class="small mb-0">Compatível com tecnologias assistivas e leitores de tela</p>
            </section>
          </div>
          <div class="col-md-4 mb-4">
            <section class="feature-card h-100" role="region" aria-labelledby="feat-inter-title" aria-describedby="feat-inter-desc">
              <span class="material-symbols-outlined d-block mb-2" aria-hidden="true">science</span>
              <h5 id="feat-inter-title" class="mb-1">Interatividade</h5>
              <p id="feat-inter-desc" class="small mb-0">Explore os elementos químicos de maneira dinâmica e educativa</p>
            </section>
          </div>
          <div class="col-md-4 mb-4">
            <section class="feature-card h-100" role="region" aria-labelledby="feat-edu-title" aria-describedby="feat-edu-desc">
              <span class="material-symbols-outlined d-block mb-2" aria-hidden="true">school</span>
              <h5 id="feat-edu-title" class="mb-1">Educacional</h5>
              <p id="feat-edu-desc" class="small mb-0">Informações científicas precisas para aprendizado eficiente</p>
            </section>
          </div>
        </div>

        <!-- Painel de Controle -->
        <div class="mt-4 mb-2">
          <div class="position-relative">
            <h2 id="titulo-painel" class="h4 text-center mb-4 fw-bold position-relative">
              Painel de Controle
            </h2>

            <!-- Informações sobre a tabela -->
            <div class="bg-dark bg-opacity-50 p-3 rounded-4 mb-4">
              <div class="d-flex align-items-center mb-3">
                <span class="material-symbols-outlined me-2" aria-hidden="true" role="presentation">info</span>
                <h3 id="acoes-rapidas-label" class="fw-semibold text-white mb-0 fs-6">Informações sobre a tabela:</h3>
              </div>
              <div class="d-flex flex-wrap gap-2 justify-content-center">
                <button id="btn-como-funciona" type="button" class="btn btn-primary px-4 py-2 rounded-pill d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-como-funciona" aria-haspopup="dialog" aria-expanded="false" aria-label="Como funciona a tabela periódica" title="Instruções de uso">
                  <span class="material-symbols-outlined me-2" aria-hidden="true">help_outline</span>
                  <span>Como funciona</span>
                </button>
                <button id="btn-saiba-mais" type="button" class="btn btn-outline-light px-4 py-2 rounded-pill d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-sobre" aria-haspopup="dialog" aria-expanded="false" aria-label="Saiba mais sobre a tabela periódica acessível" title="Abrir informações detalhadas">
                  <span class="material-symbols-outlined me-2" aria-hidden="true">info</span>
                  <span>Saiba mais</span>
                </button>
              </div>
            </div>

            <!-- Opções de visualização da tabela -->
            <div class="bg-dark bg-opacity-50 p-3 rounded-4 mb-4">
              <div class="d-flex align-items-center mb-3">
                <span class="material-symbols-outlined me-2" aria-hidden="true" role="presentation">view_week</span>
                <h3 id="modo-visualizacao-label" class="fw-semibold text-white mb-0 fs-6">Modo de visualização:</h3>
              </div>
              <div class="d-flex flex-wrap justify-content-center mb-2 gap-2">
                <button id="btn-view-by-period" class="btn btn-primary rounded-pill text-nowrap active flex-grow-1 flex-sm-grow-0" aria-pressed="true" aria-label="Visualizar por períodos" style="min-width: fit-content;">
                  <span class="material-symbols-outlined me-1" aria-hidden="true">table_rows</span>
                  <span class="d-none d-sm-inline">Por períodos</span>
                  <span class="d-inline d-sm-none">Períodos</span>
                </button>
                <button id="btn-view-by-group" class="btn btn-outline-light rounded-pill text-nowrap flex-grow-1 flex-sm-grow-0" aria-pressed="false" aria-label="Visualizar por grupos/colunas" style="min-width: fit-content;">
                  <span class="material-symbols-outlined me-1" aria-hidden="true">table_chart</span>
                  <span class="d-none d-sm-inline">Por grupos</span>
                  <span class="d-inline d-sm-none">Grupos</span>
                </button>
                <button id="btn-view-by-category" class="btn btn-outline-light rounded-pill text-nowrap flex-grow-1 flex-sm-grow-0" aria-pressed="false" aria-label="Visualizar por categorias químicas" style="min-width: fit-content;">
                  <span class="material-symbols-outlined me-1" aria-hidden="true">category</span>
                  <span class="d-none d-sm-inline">Por categorias</span>
                  <span class="d-inline d-sm-none">Categorias</span>
                </button>
              </div>
              <hr class="border-light border-opacity-25 my-3">
              <div class="d-flex align-items-center mb-3">
                <span class="material-symbols-outlined me-2" aria-hidden="true" role="presentation">palette</span>
                <h3 id="cores-visualizacao-label" class="fw-semibold text-white mb-0 fs-6">Visualização com cores:</h3>
              </div>
              <div class="d-flex justify-content-center mb-2">
                <button id="btn-toggle-colors" class="btn btn-outline-light rounded-pill text-nowrap" aria-pressed="false" aria-label="Ativar visualização com cores para os elementos">
                  <span class="material-symbols-outlined me-1" aria-hidden="true">colorize</span>
                  <span id="btn-toggle-colors-text">Ativar cores</span>
                </button>
              </div>
            </div>

            <!-- Navegação por períodos (links âncora) -->
            <div id="periodo-nav-container" class="bg-dark bg-opacity-50 p-3 rounded-4 mb-4">
              <div class="d-flex align-items-center mb-3">
                <span class="material-symbols-outlined me-2" aria-hidden="true" role="presentation">table_rows</span>
                <h3 id="periodos-nav-label" class="fw-semibold text-white mb-0 fs-6">Navegue pelos períodos da tabela:</h3>
              </div>
              <nav aria-labelledby="periodos-nav-label" class="d-flex flex-wrap gap-2 justify-content-center">
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#periodo-1" title="Ir para o 1º Período" aria-label="Navegar para o primeiro período">1º Período</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#periodo-2" title="Ir para o 2º Período" aria-label="Navegar para o segundo período">2º Período</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#periodo-3" title="Ir para o 3º Período" aria-label="Navegar para o terceiro período">3º Período</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#periodo-4" title="Ir para o 4º Período" aria-label="Navegar para o quarto período">4º Período</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#periodo-5" title="Ir para o 5º Período" aria-label="Navegar para o quinto período">5º Período</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#periodo-6" title="Ir para o 6º Período" aria-label="Navegar para o sexto período">6º Período</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#periodo-7" title="Ir para o 7º Período" aria-label="Navegar para o sétimo período">7º Período</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#periodo-lantanideos" title="Ir para os Lantanídeos" aria-label="Navegar para os elementos lantanídeos">Lantanídeos</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#periodo-actinideos" title="Ir para os Actinídeos" aria-label="Navegar para os elementos actinídeos">Actinídeos</a>
              </nav>
            </div>
            
            <!-- Navegação por grupos/colunas (links âncora) -->
            <div id="grupo-nav-container" class="bg-dark bg-opacity-50 p-3 rounded-4" style="display: none;">
              <div class="d-flex align-items-center mb-3">
                <span class="material-symbols-outlined me-2" aria-hidden="true" role="presentation">table_chart</span>
                <h3 id="grupos-nav-label" class="fw-semibold text-white mb-0 fs-6">Navegue pelos grupos da tabela:</h3>
              </div>
              <nav aria-labelledby="grupos-nav-label" class="d-flex flex-wrap gap-2 justify-content-center">
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#grupo-1" title="Ir para o Grupo 1" aria-label="Navegar para o grupo 1">Grupo 1</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#grupo-2" title="Ir para o Grupo 2" aria-label="Navegar para o grupo 2">Grupo 2</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#grupo-3" title="Ir para o Grupo 3" aria-label="Navegar para o grupo 3">Grupo 3</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#grupo-4" title="Ir para o Grupo 4" aria-label="Navegar para o grupo 4">Grupo 4</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#grupo-5" title="Ir para o Grupo 5" aria-label="Navegar para o grupo 5">Grupo 5</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#grupo-6" title="Ir para o Grupo 6" aria-label="Navegar para o grupo 6">Grupo 6</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#grupo-7" title="Ir para o Grupo 7" aria-label="Navegar para o grupo 7">Grupo 7</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#grupo-8" title="Ir para o Grupo 8" aria-label="Navegar para o grupo 8">Grupo 8</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#grupo-9" title="Ir para o Grupo 9" aria-label="Navegar para o grupo 9">Grupo 9</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#grupo-10" title="Ir para o Grupo 10" aria-label="Navegar para o grupo 10">Grupo 10</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#grupo-11" title="Ir para o Grupo 11" aria-label="Navegar para o grupo 11">Grupo 11</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#grupo-12" title="Ir para o Grupo 12" aria-label="Navegar para o grupo 12">Grupo 12</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#grupo-13" title="Ir para o Grupo 13" aria-label="Navegar para o grupo 13">Grupo 13</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#grupo-14" title="Ir para o Grupo 14" aria-label="Navegar para o grupo 14">Grupo 14</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#grupo-15" title="Ir para o Grupo 15" aria-label="Navegar para o grupo 15">Grupo 15</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#grupo-16" title="Ir para o Grupo 16" aria-label="Navegar para o grupo 16">Grupo 16</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#grupo-17" title="Ir para o Grupo 17" aria-label="Navegar para o grupo 17">Grupo 17</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#grupo-18" title="Ir para o Grupo 18" aria-label="Navegar para o grupo 18">Grupo 18</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#grupo-lantanideos" title="Ir para os Lantanídeos" aria-label="Navegar para os elementos lantanídeos">Lantanídeos</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#grupo-actinideos" title="Ir para os Actinídeos" aria-label="Navegar para os elementos actinídeos">Actinídeos</a>
              </nav>
            </div>

            <!-- Navegação por categorias (links âncora) -->
            <div id="categoria-nav-container" class="bg-dark bg-opacity-50 p-3 rounded-4 mb-4" style="display: none;">
              <div class="d-flex align-items-center mb-3">
                <span class="material-symbols-outlined me-2" aria-hidden="true" role="presentation">category</span>
                <h3 id="categorias-nav-label" class="fw-semibold text-white mb-0 fs-6">Navegue pelas categorias da tabela:</h3>
              </div>
              <nav aria-labelledby="categorias-nav-label" class="d-flex flex-wrap gap-2 justify-content-center">
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#categoria-metais-alcalinos" title="Ir para Metais Alcalinos" aria-label="Navegar para metais alcalinos">Metais Alcalinos</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#categoria-metais-alcalinoterrosos" title="Ir para Metais Alcalinoterrosos" aria-label="Navegar para metais alcalinoterrosos">Alcalinoterrosos</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#categoria-metais-transicao" title="Ir para Metais de Transição" aria-label="Navegar para metais de transição">Metais de Transição</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#categoria-lantanideos" title="Ir para Lantanídeos" aria-label="Navegar para lantanídeos">Lantanídeos</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#categoria-actinideos" title="Ir para Actinídeos" aria-label="Navegar para actinídeos">Actinídeos</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#categoria-outros-metais" title="Ir para Outros Metais" aria-label="Navegar para outros metais">Outros Metais</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#categoria-semimetais" title="Ir para Semimetais" aria-label="Navegar para semimetais">Semimetais</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#categoria-nao-metais" title="Ir para Não Metais" aria-label="Navegar para não metais">Não Metais</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#categoria-halogenios" title="Ir para Halogênios" aria-label="Navegar para halogênios">Halogênios</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#categoria-gases-nobres" title="Ir para Gases Nobres" aria-label="Navegar para gases nobres">Gases Nobres</a>
                <a class="btn btn-sm btn-outline-light rounded-pill text-nowrap" href="#categoria-hidrogenio" title="Ir para Hidrogênio" aria-label="Navegar para hidrogênio">Hidrogênio</a>
              </nav>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</header>

<!-- Modal “Saiba mais” -->
<div class="modal fade" id="modal-sobre" aria-labelledby="modalSobreLabel" aria-hidden="true" role="dialog" aria-modal="true">
  <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
    <div class="modal-content bg-dark text-white p-3">
      <div class="modal-header border-light border-opacity-25">
        <h2 class="modal-title fs-4" id="modalSobreLabel">
          <span class="material-symbols-outlined align-middle me-2" aria-hidden="true">science</span>
          Sobre a Tabela Periódica Acessível
        </h2>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Fechar modal" title="Fechar modal">
          <span class="visually-hidden">Fechar</span>
        </button>
      </div>
        <div class="modal-body">
        <div class="mt-4 mb-4">
          <div style="position: relative; padding-top: 56.016597510373444%;">
          <iframe
            src="https://customer-n8imyf4ea5hvxexl.cloudflarestream.com/258412568d970cc4740cb9c4825c0d37/iframe?poster=https%3A%2F%2Fcustomer-n8imyf4ea5hvxexl.cloudflarestream.com%2F258412568d970cc4740cb9c4825c0d37%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
            loading="lazy"
            style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowfullscreen="true"
          ></iframe>
          </div>
          <figcaption id="figcaption-reportagem-tv-bahia" class="figure-caption text-center mt-4">
            <p class="small text-white">
                Reportagem da TV Bahia, afiliada da Rede Globo, sobre a Tabela Periódica Acessível. O projeto ganhou o primeiro lugar no Prêmio Hipertexto 2015, realizado na Universidade Federal de Pernambuco (UFPE).
            </p>
          </figcaption>

          <h3 class="mb-4 mt-4 pb-2 border-bottom border-light border-opacity-25">
            História e evolução da Tabela Periódica Acessível
          </h3>
          <p class="fs-5">
            A Tabela Periódica Acessível surgiu de uma necessidade muito real. Louise Suelen, uma estudante com deficiência visual do ensino médio técnico integrado em Informática no IFBA – Barreiras na época, precisava de uma forma prática e acessível para estudar Química. Não havia ferramentas prontas que atendessem às suas necessidades com a velocidade que ela precisava, então algo novo teve que ser criado.
          </p>
          <p class="fs-5">
            Foi aí que as professoras do IFBA entraram em cena. A Profª <strong>Ana Célia Barreto de Araujo Santana</strong>, da área de Química, e a Profª <strong>Karine do Prado Ribeiro</strong>, da Computação, uniram forças para desenvolver a primeira versão dessa ferramenta. Elas trabalharam juntas para transformar uma ideia em realidade.
          </p>
          <p class="fs-5">
            No começo, a ferramenta era bem simples e tinha suas limitações. Usava tecnologias como <em>AJAX</em> e <em>jQuery</em>, mas ainda não seguia padrões modernos de acessibilidade. Para tentar resolver isso, algumas soluções improvisadas foram usadas, como:
          </p>
          <ul>
            <li class="fs-5 mb-4">Colocar informações químicas no atributo <em>alt</em> das imagens, mesmo quando isso não era o ideal;</li>
            <li class="fs-5">Usar áudios pré-gravados que eram ativados por <em>JavaScript</em> para "falar" o que estava na tela.</li>
          </ul>
          <p class="fs-5">
            Essas ideias ajudaram na época, mas também trouxeram problemas, como:
          </p>
          <ul>
            <li class="fs-5 mb-4">O sistema não era muito confiável;</li>
            <li class="fs-5 mb-4">Às vezes, as informações ficavam confusas ou fora de contexto;</li>
            <li class="fs-5 mb-4">Dependência excessiva de <em>JavaScript</em> para coisas importantes como "esconder" da navegação elementos inacessíveis como a distribuição eletrônica que foi construída na época e colocar um áudio pré-gravado no lugar para ser ouvido;</li>
            <li class="fs-5">Falta de integração entre o que era mostrado e o que era narrado.</li>
          </ul>
          <p class="fs-5">
            Com o tempo, a ferramenta foi melhorando e se modernizando. Hoje, ela segue práticas mais avançadas, como:
          </p>
          <ul>
            <li class="fs-5 mb-4">Usar <em>HTML</em> semântico, onde o significado está no código, não só na aparência;</li>
            <li class="fs-5 mb-4">Aplicar <em>WAI-ARIA</em> de forma cuidadosa, para melhorar a acessibilidade de componentes que precisam de suporte adicional;</li>
            <li class="fs-5 mb-4">Garantir que leitores de tela leiam as mesmas informações que aparecem na tela;</li>
            <li class="fs-5 mb-4">Adicionar controles de acessibilidade, como foco automático ao abrir ou fechar janelas;</li>
            <li class="fs-5 mb-4">Evitar depender de cores para transmitir informações, ajudando pessoas com daltonismo;</li>
            <li class="fs-5">Fazer com que a página funcione bem em qualquer tamanho de tela e até em conexões mais lentas.</li>
          </ul>
          <p class="fs-5">
            Essa evolução mostrou que, com as práticas certas, é possível estudar a Tabela Periódica de forma acessível e sem perder nenhuma informação importante, mesmo para quem não usa pistas visuais.
          </p>
          <h3 class="mb-4 mt-4 pb-2 border-bottom border-light border-opacity-25">
            O que é a Tabela Periódica Acessível hoje?
          </h3>
          <p class="fs-5">
            Hoje, a Tabela Periódica Acessível é feita para que qualquer pessoa consiga entender os conteúdos, mesmo quem usa tecnologias assistivas. Ela foi criada pensando em acessibilidade, para que todos possam aprender sem dificuldades.
          </p>
          <p class="fs-5">
            Ela funciona com leitores de tela e dispositivos Braille, tem opções de alto contraste, contraste negativo, escala de cinza, ajustes no tamanho das letras e até integração com o VLibras, que traduz conteúdos para Libras - a Língua Brasileira de Sinais.
          </p>
          <p class="fs-5">
            A estrutura foi feita para ser simples e organizada. Ela usa códigos que ajudam na navegação, como marcadores de seção, títulos bem definidos e uma leitura linear que apresenta as informações de cada elemento químico (como número atômico, símbolo, nome, massa, grupo e distribuição eletrônica) de forma clara e direta.
          </p>
          <p class="fs-5">
            Aqui estão alguns dos principais pontos que tornam essa ferramenta acessível:
          </p>
          <ul>
            <li class="fs-5 mb-4">
              <strong>Navegação fácil:</strong> A ordem de navegação é previsível, com atalhos para ir direto aos períodos (do 1 ao 7), grupos (do 1 ao 18), Lantanídeos e Actinídeos.
            </li>
            <li class="fs-5 mb-4">
              <strong>Leitura organizada:</strong> As informações aparecem em uma sequência lógica, com títulos e listas bem estruturadas, obedecendo a hierarquia correta do <em>HTML</em> semântico.
            </li>
            <li class="fs-5 mb-4">
              <strong>Ferramentas de acessibilidade:</strong> A ferramenta tem opções como alto contraste (fundo escuro e texto claro), contraste negativo (inversão de cores), escala de cinza (quase preto e branco), sublinhado de links e ajustes no tamanho das letras. Essas configurações ficam salvas para a pessoa e dão avisos, visuais e para leitores de tela, quando estão ativadas ou desativadas.
            </li>
            <li class="fs-5 mb-4">
              <strong>Não depende de cores:</strong> As cores são usadas como um extra, mas as informações importantes também estão em texto, para não prejudicar quem tem dificuldade de enxergar cores, ou faz uma navegação totalmente não-visual.
            </li>
            <li class="fs-5 mb-4">
              <strong>Navegação em janelas (modais):</strong> Quando uma janela é aberta, o foco vai direto para o primeiro botão. Quando fechada, o foco volta para onde estava antes, evitando confusões ou que a pessoa se perca.
            </li>
            <li class="fs-5">
              <strong>Funciona em qualquer dispositivo:</strong> A ferramenta se adapta bem a telas pequenas e grandes, funciona em modo retrato ou paisagem, e é rápida até em celulares mais simples.
            </li>
          </ul>
          <p class="fs-5">
            Para ler o artigo completo sobre a construção da Tabela Periódica Acessível, acesse o link: <a href="https://pcdnaescola.com.br/tecnologias-assistivas-no-ensino-de-quimica-uma-proposta-de-tabela-periodica-acessivel/" target="_blank" rel="noopener">Tecnologias Assistivas no Ensino de Química: Uma Proposta de Tabela Periódica Acessível</a> e leia desde ahistória inicial até os detalhes técnicos da implementação.
          </p>
        </div>
        <h3 class="mb-3" id="sobre-as-autoras">Sobre as autoras</h3>
        <div class="row g-4 mb-4" aria-labelledby="sobre-as-autoras">
          
          <!-- Cards de equipe com design acessível e visualmente atrativo -->
          <div class="row g-4">
            <!-- Card da Ana Célia -->
            <div class="col-12 mb-4">
              <div class="card bg-dark text-white border-light" style="border-radius: 1rem; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,0.3);">
                <div class="row g-0">
                  <div class="col-md-3 text-center p-4 border-end border-light d-flex align-items-center justify-content-center" style="background-color: var(--surface-2);">
                    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/c9a5b6c3-65ef-49e0-d4fc-5924d5d77100/public" 
                         alt="Foto da Professora Ana Célia sorridente de cabelos longos e escuros, usando uma roupa amarela, em frente a folhagens verdes iluminadas." 
                         class="rounded-circle mb-3" 
                         style="width: 150px; height: 150px; object-fit: cover; border: 4px solid var(--primary);" />
                  </div>
                  <div class="col-md-9">
                    <div class="card-header border-bottom border-light">
                      <h4 class="card-title mb-0">Ana Célia Barreto de Araújo Santana</h4>
                    </div>
                    <div class="card-body" style="background-color: var(--surface);">
                      <div class="row">
                        <div class="col-md-6">
                          <h5 class="mb-2 border-bottom pb-2 border-light">
                            <span class="material-symbols-outlined align-middle me-2" aria-hidden="true">school</span>
                            Formação acadêmica
                          </h5>
                          <ul class="mb-4">
                            <li>Doutorado em Química pela Universidade Federal da Bahia (2016).</li>
                            <li>Mestrado em Química pela Universidade do Estado da Bahia (2009).</li>
                            <li>Licenciatura em Química pela Universidade do Estado da Bahia (2007).</li>
                          </ul>
                        </div>
                        <div class="col-md-6">
                          <h5 class="mb-2 border-bottom pb-2 border-light">
                            <span class="material-symbols-outlined align-middle me-2" aria-hidden="true">work</span>
                            Atuação profissional
                          </h5>
                          <ul>
                            <li>Professora no Instituto Federal de Educação, Ciência e Tecnologia da Bahia (IFBA) – Campus Lauro de Freitas.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Card da Karine -->
            <div class="col-12 mb-4">
              <div class="card bg-dark text-white border-light" style="border-radius: 1rem; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,0.3);">
                <div class="row g-0">
                  <div class="col-md-3 text-center p-4 border-end border-light d-flex align-items-center justify-content-center" style="background-color: var(--surface-2);">
                    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/cd749420-d252-4d97-536c-81228f40f600/public" 
                         alt="Foto da Professora Karine sorridente de cabelos longos e loiros, usando óculos e blusa clara, em uma sala de informática com vários computadores dispostos em mesas." 
                         class="rounded-circle mb-3" 
                         style="width: 150px; height: 150px; object-fit: cover; border: 4px solid var(--primary);" />
                  </div>
                  <div class="col-md-9">
                    <div class="card-header border-bottom border-light">
                      <h4 class="card-title mb-0">Karine do Prado Ribeiro</h4>
                    </div>
                    <div class="card-body" style="background-color: var(--surface);">
                      <div class="row">
                        <div class="col-md-6">
                          <h5 class="mb-2 border-bottom pb-2 border-light">
                            <span class="material-symbols-outlined align-middle me-2" aria-hidden="true">school</span>
                            Formação acadêmica
                          </h5>
                          <ul class="mb-4">
                            <li>Mestrado em Engenharia Industrial pela Universidade Federal da Bahia (2018).</li>
                            <li>Especialização em Engenharia de Sistemas pela Escola Superior Aberta do Brasil (2012).</li>
                            <li>Bacharelado em Ciência da Computação pela Universidade Estadual do Sudoeste da Bahia (2009).</li>
                          </ul>
                        </div>
                        <div class="col-md-6">
                          <h5 class="mb-2 border-bottom pb-2 border-light">
                            <span class="material-symbols-outlined align-middle me-2" aria-hidden="true">work</span>
                            Atuação profissional
                          </h5>
                          <ul>
                            <li>Professora das disciplinas de Linguagem de Programação e Banco de Dados no Instituto Federal da Bahia (IFBA) – Campus Ilhéus.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Card da Louise -->
            <div class="col-12 mb-4">
              <div class="card bg-dark text-white border-light" style="border-radius: 1rem; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,0.3);">
                <div class="row g-0">
                  <div class="col-md-3 text-center p-4 border-end border-light d-flex align-items-center justify-content-center" style="background-color: var(--surface-2);">
                    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/04996eda-ef24-4768-33dc-7209b5e53500/public" 
                         alt="Foto de Louise Suelen sorridente de cabelos curtos e cacheados, vestindo casaco escuro e cachecol de lã bege, em ambiente interno com armários de madeira ao fundo." 
                         class="rounded-circle mb-3" 
                         style="width: 150px; height: 150px; object-fit: cover; border: 4px solid var(--primary);" />
                  </div>
                  <div class="col-md-9">
                    <div class="card-header border-bottom border-light">
                      <h4 class="card-title mb-0">Louise Suelen Araujo Reis</h4>
                    </div>
                    <div class="card-body" style="background-color: var(--surface);">
                      <div class="row">
                        <div class="col-md-6">
                          <h5 class="mb-2 border-bottom pb-2 border-light">
                            <span class="material-symbols-outlined align-middle me-2" aria-hidden="true">school</span>
                            Formação acadêmica
                          </h5>
                          <ul class="mb-4">
                            <li>Bacharelado em Ciência da Computação pela Universidade Salvador (2025).</li>
                            <li>Formação técnica em Informática pelo Instituto Federal da Bahia (IFBA), campus Barreiras (2016).</li>
                          </ul>
                        </div>
                        <div class="col-md-6">
                          <h5 class="mb-2 border-bottom pb-2 border-light">
                            <span class="material-symbols-outlined align-middle me-2" aria-hidden="true">work</span>
                            Atuação profissional
                          </h5>
                          <ul>
                            <li>Engenheira de software no Grupo Globo com foco em desenvolvimento backend utilizando Golang e Ruby on Rails.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="modal-footer border-light border-opacity-25">
        <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">
          <span class="material-symbols-outlined me-1 align-middle" aria-hidden="true">close</span>
          Fechar
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Modal Como Funciona -->
<div class="modal fade" id="modal-como-funciona" aria-labelledby="modalComoFuncionaLabel" aria-hidden="true" role="dialog" aria-modal="true">
  <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
    <div class="modal-content bg-dark text-white p-3">
      <div class="modal-header border-light border-opacity-25">
        <h2 class="modal-title fs-4" id="modalComoFuncionaLabel">
          <span class="material-symbols-outlined align-middle me-2" aria-hidden="true">help_outline</span>
          Como usar a Tabela Periódica
        </h2>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Fechar modal" title="Fechar modal">
          <span class="visually-hidden">Fechar</span>
        </button>
      </div>
      <div class="modal-body">
          <div class="text-center mb-4">
            <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/01248cbd-d6fc-4d17-2007-b107616a0000/public" style="max-width: 100%; height: auto;" alt="Como usar a Tabela Periódica" aria-hidden="true" />
          </div>

          <div class="my-4 p-3 border border-light border-opacity-25 rounded">
            <h4 class="fs-5 mb-3">Navegue rapidamente:</h4>
            <style>
              .list-group-item-action:hover, .list-group-item-action:focus {
                background-color: rgba(42, 123, 255, 0.3) !important;
                transition: background-color 0.2s;
                padding-left: 10px !important;
              }
            </style>
            <ul class="list-group">
              <li class="list-group-item bg-transparent border-light border-opacity-25 p-0">
                <a href="#secao-o-que-e-uma-tabela" class="list-group-item-action d-block py-2 px-3 rounded text-white text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="right" title="Ir para: O que é uma tabela?">
                  <span class="badge bg-secondary" aria-hidden="true">1</span>
                  O que é uma tabela?
                </a>
              </li>
              <li class="list-group-item bg-transparent border-light border-opacity-25 p-0">
                <a href="#secao-leitores-de-tela" class="list-group-item-action d-block py-2 px-3 rounded text-white text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="right" title="Ir para: Como ler uma tabela com leitores de tela">
                  <span class="badge bg-secondary" aria-hidden="true">2</span>
                  Como ler uma tabela com leitores de tela
                </a>
              </li>
              <li class="list-group-item bg-transparent border-light border-opacity-25 p-0">
                <a href="#secao-exemplo-de-tabela" class="list-group-item-action d-block py-2 px-3 rounded text-white text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="right" title="Ir para: Teste de leitura de tabela">
                  <span class="badge bg-secondary" aria-hidden="true">3</span>
                  Teste de leitura de tabela
                </a>
              </li>
              <li class="list-group-item bg-transparent border-light border-opacity-25 p-0">
                <a href="#secao-tabela-periodica" class="list-group-item-action d-block py-2 px-3 rounded text-white text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="right" title="Ir para: O que é a tabela periódica dos elementos químicos?">
                  <span class="badge bg-secondary" aria-hidden="true">4</span>
                  O que é a tabela periódica dos elementos químicos?
                </a>
              </li>
              <li class="list-group-item bg-transparent border-light border-opacity-25 p-0">
                <a href="#secao-como-funciona" class="list-group-item-action d-block py-2 px-3 rounded text-white text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="right" title="Ir para: Como funciona a tabela periódica acessível?">
                  <span class="badge bg-secondary" aria-hidden="true">5</span>
                  Como funciona a tabela periódica acessível?
                </a>
              </li>
            </ul>
          </div>
          
            <h3 id="secao-o-que-e-uma-tabela" class="mb-3 pb-2 border-bottom border-light border-opacity-25">O que é uma tabela?</h3>
            <p class="fs-5">Imagine uma grande caixa de ovos, dentro dessa caixa, os ovos não estão jogados de qualquer jeito; eles estão organizados em espaços separados, lado a lado e um embaixo do outro.</p>
            <figure class="text-center">
              <img src="https://thumbs.dreamstime.com/b/vista-de-cima-da-embalagem-ovos-desenho-animado-galinha-em-caixas-cart%C3%A3o-granja-ou-no-mercado-agr%C3%ADcola-org%C3%A2nicos-vetor-plano-264407040.jpg" style="max-width: 80%;" aria-hidden="true" />
            </figure>
            <p class="fs-5">Essa organização é o que chamamos de grade ou matriz. Se você já pegou em uma caixa de ovos, sabe que ela é formada por várias "casinhas", cada "casinha" guardando um ovo.</p>
                <p class="fs-5">Quando você passa a mão tanto para a esquerda quanto para a direita, sente que existem linhas de ovos, que são as fileiras na horizontal (um do lado do outro).</p>
                <figure class="text-center mb-0">
                  <span class="material-symbols-outlined" style="font-size: 15rem; color: rgba(255, 255, 255, 0.7);" aria-hidden="true">table_rows</span>
                </figure>
                <p class="fs-5">Já se for com a mão para cima ou para baixo vai sentir que existem as colunas de ovos, que são os ovos um embaixo do outro na vertical.</p>

                <figure class="text-center mb-0">
                  <span class="material-symbols-outlined" style="font-size: 15rem; color: rgba(255, 255, 255, 0.7);" aria-hidden="true">table_chart</span>
                </figure>
            <p class="fs-5 fw-bold text-center">Essa é a estrutura básica de uma tabela.</p>
            <figure class="text-center">
              <span class="material-symbols-outlined" style="font-size: 15rem; color: rgba(255, 255, 255, 0.7); margin-left: 1rem;" aria-hidden="true">grid_on</span>
            </figure>
            <ul>
              <li class="fs-5 mb-4"><strong>Linhas:</strong> Uma linha em uma tabela é exatamente isso: uma sequência de informações colocadas (organizadas) na horizontal.</li>
              <li class="fs-5"><strong>Colunas:</strong> Em uma tabela, as colunas são as informações organizadas na vertical, uma embaixo da outra.</li>
            </ul>

            <p class="fs-5">Uma tabela é o resultado de juntar linhas e colunas. Onde uma linha e uma coluna se encontram, formam um espaço único, como uma "casinha" dentro da grade. Cada casinha é um lugar específico para guardar uma informação.</p>
            <p class="fs-5">Essa "casinha" que se forma quando uma linha e uma coluna se cruzam é chamada de célula. Cada célula guarda um pedaço de informação, que pode ser um número, uma palavra, ou qualquer outro dado.</p>

        <h3 id="secao-leitores-de-tela" class="mb-3 pb-2 border-bottom border-light border-opacity-25">Como ler uma tabela com leitores de tela</h3>
        <p class="fs-5">Preste atenção em como o leitor de telas faz a leitura da tabela. Ele vai anunciar o cabeçalho (as colunas) primeiro, e depois vai ler cada linha com as informações. Quando ele vai passando pelas células, ele vai dizendo o nome da coluna antes de falar o valor (o que está dentro) daquela célula.</p>

        <p class="fs-5">Existem diferenças em como cada leitor de telas faz a leitura de uma tabela.</p>

        <p class="fs-5">No caso de leitores de tela de computadores de mesa e notebooks, como o NVDA (no Windows), ao chegar na tabela, ele anuncia a existência dela e informa a quantidade de linhas e colunas disponíveis. Caso exista uma descrição, ela também é lida, fornecendo o contexto sobre o conteúdo exibido.</p>
        <p class="fs-5">Usando as setas para cima, para baixo, esquerda e direita do teclado, a pessoa pode percorrer cada célula da tabela. O NVDA identifica automaticamente o cabeçalho correspondente daquela linha ou coluna e anuncia junto com o valor da célula.</p>
        <p class="fs-5">Por exemplo, se a célula tiver o número "70" na coluna de pontos, o NVDA dirá algo como "Pontos, 70". Isso garante clareza sobre o que aquele número quer dizer.</p>
        <p class="fs-5">O NVDA consegue relacionar corretamente cada informação dentro da célula na tabela ao seu título na coluna, evitando que a leitura fique confusa (desde que a tabela esteja corretamente estruturada).</p>
        <p class="fs-5">Com comandos específicos do NVDA, é possível ouvir novamente o título ou a descrição da tabela, isso ajuda a relembrar o contexto do que está sendo lido.</p>
        <p class="fs-5">Já nos dispositivos móveis, em leitores como o TalkBack (Android) e VoiceOver (iOS), a navegação por tabelas é feita de maneira diferente. Nesses casos, você pode usar gestos específicos para navegar entre as células, linhas e colunas da tabela.</p>
        <ul>
          <li class="fs-5 mb-4">No TalkBack, você pode usar a <strong>granularidade</strong> que é um recurso que permite alternar entre diferentes níveis de detalhes na leitura. Por exemplo, você pode alternar entre ler apenas a célula atual, a linha inteira ou a tabela completa e até mesmo soletrar o conteúdo da célula.</li>
          <li class="fs-5">No VoiceOver, você pode usar o <strong>Rotor</strong>, que é uma ferramenta de navegação que permite selecionar diferentes tipos de elementos na tela. Com o Rotor, você pode escolher navegar por células, linhas ou colunas da tabela e também consegue soletrar o conteúdo da célula.</li>
        </ul>

        <p class="fs-5">para mais informações sobre o Google TalkBack, visite: <a href="https://support.google.com/accessibility/android/answer/6006598?hl=pt-BR" target="_blank" rel="noopener">Navegar no dispositivo com o TalkBack</a>.</p>

        <p class="fs-5">para mais informações sobre o Apple VoiceOver, visite: <a href="https://support.apple.com/pt-br/guide/iphone/iph3e2e4156/ios" target="_blank" rel="noopener">Usar o VoiceOver no iPhone</a>.</p>

        <p class="fs-5">Pode acontecer de leitores de tela do Android e iOS não anunciarem corretamente o cabeçalho da tabela, os títulos das colunas e linhas. A consequência disso é que a leitura das células pode ficar confusa, pois o leitor de telas pode não conseguir relacionar o valor da célula com o título correto da coluna ou linha e por consequência acabar lendo apenas o valor da célula, sem contexto.</p>

        <p class="fs-5">Por isso é importante usar a granularidade no TalkBack e o Rotor no VoiceOver para garantir que você está navegando corretamente pela tabela e que consiga entender o contexto de cada célula.</p>

        <p class="fs-5">Se tiver a oportunidade, valide a leitura da tabela com leitores de tela de computadores e notebooks, como o NVDA (Windows), JAWS (Windows), VoiceOver (Mac) e Orca (Linux), para garantir que a estrutura da tabela está correta e que a leitura está clara e compreensível.</p>

        <p class="fs-5"><strong>Observação:</strong> Este problema não acontece na nossa tabela periódica acessível, pois apesar do nome, ela segue uma estrutura baseada em cartões como será explicado mais adiante nesta janela de funcionamento.</p>

        <h3 id="secao-exemplo-de-tabela" class="mb-3 pb-2 border-bottom border-light border-opacity-25">Teste de leitura de tabela</h3>
        <p class="fs-5">Aqui está um exemplo simples de tabela para você testar a leitura com seu leitor de telas. Lembre-se que para o leitor de telas anunciar corretamente o cabeçalho e os valores das células, a tabela precisa estar bem estruturada.</p>

        <div class="table-responsive mb-4">
          <table class="table table-bordered table-dark" role="table" aria-labelledby="exemplo-tabela-label" aria-describedby="exemplo-tabela-desc">
            <caption id="exemplo-tabela-label" class="visually-hidden">Exemplo de tabela simples com informações de jogadores de futebol</caption>
            <p id="exemplo-tabela-desc" class="visually-hidden">Tabela com colunas para Nome e Posição.</p>
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Posição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lionel Messi</td>
                <td>Atacante</td>
              </tr>
              <tr>
                <td>Cristiano Ronaldo</td>
                <td>Atacante</td>
              </tr>
              <tr>
                <td>Neymar Jr.</td>
                <td>Atacante</td>
              </tr>
              <tr>
                <td>Lucas Paquetá</td>
                <td>Meio-campista</td>
              </tr>
              <tr>
                <td>Marquinhos</td>
                <td>Zagueiro</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="fs-5">Experimente navegar por essa tabela usando as setas do teclado (em computadores) ou os gestos de navegação (em dispositivos móveis) para ver como o leitor de telas anuncia cada célula com o contexto correto.</p>
        
        <h3 id="secao-tabela-periodica" class="mb-3 pb-2 border-bottom border-light border-opacity-25">O que é a tabela periódica dos elementos químicos?</h3>

        <p class="fs-5">A tabela periódica dos elementos químicos organiza os elementos, como oxigênio, hidrogênio, ouro, ferro entre outros. Ela não apenas lista os elementos, mas os organiza de uma forma que você pode entender as características de cada um só pela sua posição.</p>

        <p class="fs-5">A estrutura dela segue a mesma lógica de linhas e colunas que já foi mostrada:</p>

        <ul>
          <li class="fs-5 mb-4"><strong>Linhas (Períodos):</strong>
            <p class="fs-5 mt-4">
              As linhas são chamadas de Períodos. Existem 7 delas. Elas organizam os elementos em ordem crescente de número atômico (o número de prótons em cada átomo). Começando pelo Hidrogênio, que tem 1 próton, e seguindo da esquerda para a direita, o número atômico vai aumentando.
            </p>
            <p class="fs-5 mt-4">
              A posição horizontal de um elemento, ou seja, o seu período, indica quantas camadas eletrônicas ele tem. Quanto mais para baixo na tabela, mais camadas de elétrons o elemento tem. Isso afeta o tamanho do átomo e o quão longe os elétrons mais externos estão do núcleo. Por exemplo, os elementos do Período 2 (segunda linha) são menores que os do Período 4 (quarta linha).
            </p>
          </li>
          <li class="fs-5 mb-4"><strong>Colunas (Grupos):</strong>
            <p class="fs-5 mt-4">
              As colunas são chamadas de Grupos. Existem 18 delas. Elementos que estão na mesma coluna, ou seja, no mesmo grupo, têm propriedades químicas parecidas. É como se todos os "parentes" estivessem juntos. Por exemplo, o grupo 18 é dos "Gases Nobres", que quase não reagem com outros elementos. 
            </p>
            <p class="fs-5 mt-4">
              A posição vertical, ou o grupo, agrupa os elementos com a mesma quantidade de elétrons na camada mais externa (elétrons de valência). Isso é o mais importante! A quantidade de elétrons de valência determina as propriedades químicas de um elemento, como a forma que ele se liga a outros átomos e se reage fácil ou não. É por isso que todos os elementos em um mesmo grupo, como o Lítio e o Sódio, reagem de forma parecida.
            </p>      
          </li>
        </ul>

        <p class="fs-5">A tabela periódica não é apenas uma forma de organizar os elementos químicos de maneira estética; ela traz consigo um padrão de repetição chamado periodicidade, que permite prever várias propriedades dos elementos com base em sua posição. É por isso que são chamadas de propriedades "periódicas".</p>
        <figure class="text-center my-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Periodic_trends_-_pt_edition.svg/600px-Periodic_trends_-_pt_edition.svg.png" style="max-width: 100%;" aria-hidden="true" />
        </figure>
        <ol>
          <li class="fs-5 mb-4">
            <strong>Quando se caminha da esquerda para a direita em uma mesma linha (período):</strong>
            <ul class="mt-4">
              <li>
                <strong>Afinidade eletrônica e energia de ionização aumentam:</strong> isso significa que, à medida que avançamos em um período, os elementos passam a atrair elétrons com mais facilidade e também se torna mais difícil remover um elétron de seus átomos. Ou seja, eles têm núcleos mais carregados positivamente, o que exerce maior atração sobre os elétrons.
              </li>
              <li>
                <strong>Características não metálicas aumentam:</strong> elementos no lado direito dos períodos tendem a ganhar elétrons e formar íons negativos, comportando-se como não-metais típicos. Assim, substâncias como gases e halogênios aparecem nessa região.
              </li>
              <li>
                <strong>Características metálicas diminuem:</strong> os elementos no lado esquerdo (como os metais alcalinos) têm forte tendência a perder elétrons e formar íons positivos. Porém, conforme avançamos para a direita, essa tendência diminui, reduzindo o caráter metálico.
              </li>
            </ul>
          </li>
          <li class="fs-5 mb-4">
            <strong>Quando se caminha de cima para baixo em uma mesma coluna (grupo):</strong>
            <ul class="mt-4">
              <li>
                <strong>Raio atômico aumenta:</strong> os átomos ficam maiores porque, a cada nova linha da tabela, adiciona-se uma camada extra de elétrons ao redor do núcleo. Isso faz com que os elétrons mais externos fiquem progressivamente mais afastados.
              </li>
              <li>
                <strong> Afinidade eletrônica e energia de ionização diminuem:</strong> como os elétrons mais externos estão cada vez mais distantes do núcleo, é mais fácil removê-los e mais difícil que o átomo atraia novos elétrons. Portanto, os átomos no topo da coluna costumam atrair elétrons com mais força do que os da parte inferior.
              </li>
              </ul>
          </li>
        </ol>

        <p class="fs-5">
          Esse padrão mostra que a posição de cada elemento na tabela periódica funciona como uma espécie de "código de barras", revelando características fundamentais como tamanho do átomo, facilidade em perder ou ganhar elétrons e se o elemento terá comportamento mais metálico ou não metálico.
        </p>

        <p class="fs-5">
          Essa lógica de organização permite que, mesmo sem decorar cada propriedade isolada, seja possível deduzi-las a partir da posição do elemento na tabela.
        </p>
        <h3 id="secao-como-funciona" class="mb-3 pb-2 border-bottom border-light border-opacity-25">Como funciona a tabela periódica acessível?</h3>

        <p class="fs-5">
          Em uma tabela periódica tradicional, a organização visual é fixa, com todos os elementos dispostos em uma única grande tabela. Isso funciona bem em telas maiores, como as de computadores de mesa, mas pode ser um desafio para dispositivos móveis, onde a tela é pequena e a pessoa precisa dar zoom, arrastar a tela horizontalmente (o chamado "swipe" ou "scroll").
        </p>

        <p class="fs-5">
          Esses movimentos podem ser cansativos e dificultar a navegação, especialmente para pessoas com deficiências motoras ou visuais. Isso acontece porque a pessoa precisa fazer muitos movimentos para encontrar o que procura, o que pode dificultar o uso da tabela.
        </p>

        <p class="fs-5">
          Esta aplicação se diferencia por não exibir a tabela completa de uma vez, optando por uma visualização mais modular.
        </p>

        <p class="fs-5">
          Em vez de uma única tabela grande, a interface é adaptada para exibir os elementos de três formas principais, acessíveis através de botões.
        </p>

        <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/fa712b1a-0440-4eb2-911f-c2d6b1ad5c00/public" aria-hidden="true" style="max-width: 100%; height: auto;" />

        <h4 class="fs-5 mt-4 mb-3 pb-2 border-bottom border-light border-opacity-25">
          <strong>Visualização por Períodos</strong>
        </h4>

        <p class="fs-5">
          Os elementos são dispostos em seções que correspondem aos períodos (as linhas horizontais da tabela). Isso quebra a tabela grande em partes menores e mais gerenciáveis, ideais para telas de smartphones, onde o conteúdo é apresentado de forma vertical.
        </p>

        <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/6f7c129b-9d6e-4a40-d20b-7cbb1d7bdb00/public" style="max-width: 100%; height: auto;" alt="A imagem exibe um recorte da tabela periódica. No primeiro período, vemos dois elementos. O hidrogênio em um quadrado branco e, à sua direita, o hélio, em um quadrado azul. Já no segundo período, logo abaixo, há quatro elementos: o lítio, em um quadrado roxo, seguido pelo berílio, em cinza, o boro em vermelho, e o carbono em verde. Todos os quadrados contêm o nome e o símbolo do elemento, além da indicação do período e da coluna." />

        <h4 class="fs-5 mt-4 mb-3 pb-2 border-bottom border-light border-opacity-25">
          <strong>Visualização por Grupos</strong>
        </h4>

        <p class="fs-5">
          Os elementos são organizados por grupos (as colunas verticais). Essa visualização permite que o usuário explore os elementos por suas propriedades químicas semelhantes, o que também é uma forma de navegação mais amigável para telas pequenas.
        </p>

        <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/550b29eb-4641-4cb6-59b9-6d4c77df1000/public" style="max-width: 100%; height: auto;" alt="A imagem exibe um recorte da tabela periódica, mostrando elementos de dois grupos. No Grupo 3, vemos dois elementos: o escândio, no Período 4 e Coluna 3, em um quadrado laranja e, à sua direita, o ítrio, no Período 5 e Coluna 3, também em um quadrado laranja. Já no Grupo 4, logo abaixo, há quatro elementos, todos em quadrados laranja: o titânio, no Período 4 e Coluna 4, seguido pelo zircônio, no Período 5 e Coluna 4, o háfnio, no Período 6 e Coluna 4, e o rutherfórdio, no Período 7 e Coluna 4. Todos os quadrados contêm o nome e o símbolo do elemento, além da indicação do período e da coluna." />

        <h4 class="fs-5 mt-4 mb-3 pb-2 border-bottom border-light border-opacity-25">
          <strong>Visualização por Categorias</strong>
        </h4>

        <p class="fs-5">
          Os elementos são agrupados por suas categorias químicas, organizados em quatro grandes grupos principais:
        </p>

        <ul>
          <li class="fs-5 mb-4"> Metais</li>
          <li class="fs-5 mb-4"> Semimetais</li>
          <li class="fs-5 mb-4"> Não Metais</li>
          <li class="fs-5 mb-4"> Outros (Hidrogênio)</li>
        </ul>

        <p class="fs-5">
        Essa forma de visualização agrupa os elementos com características químicas semelhantes, facilitando a compreensão de suas propriedades e comportamentos.
        </p>

        <p class="fs-5">
          Por exemplo, dentro da categoria "Metais", você encontrará subcategorias como Metais Alcalinos, Metais Alcalinoterrosos, Metais de Transição, Lantanídeos, Actinídeos e Outros Metais.
        </p>

        <p class="fs-5">
          Já em "Não Metais", estão agrupados os Não Metais propriamente ditos, os Halogênios e os Gases Nobres. O Hidrogênio, por ser único, tem sua própria categoria em "Outros".
        </p>

        <p class="fs-5">
           Essa organização permite que o usuário explore a tabela periódica de uma forma mais didática, compreendendo as relações entre os elementos e suas classificações químicas.
        </p>

        <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/00bf013e-2494-4376-ba30-04a57a056c00/public" style="max-width: 100%; height: auto;" alt="A imagem exibe uma representação visual dos Semimetais, com sete elementos destacados em quadrados vermelhos. Estão incluídos: Boro,  Período 2, Grupo 13; Silício, Período 3, Grupo 14; Germânio, Período 4, Grupo 14; Arsênio, Período 4, Grupo 15; Antimônio, Período 5, Grupo 15; Telúrio, Período 5, Grupo 16; e Polônio, Período 6, Grupo 16." />

        <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/74c6cb47-115f-4972-7e14-266316dd8600/public" style="max-width: 100%; height: auto;" alt="A imagem exibe uma representação visual dos Não Metais, com seis elementos destacados em quadrados verdes-musgo. Estão incluídos: Carbono, Período 2, Grupo 14; Nitrogênio, Período 2, Grupo 15; Oxigênio, Período 2, Grupo 16; Fósforo, Período 3, Grupo 15; Enxofre, Período 3, Grupo 16; e Selênio, Período 4, Grupo 16." />

        <p class="fs-5">
          Essa abordagem de usar botões e seções menores é fundamental para garantir a responsividade da aplicação. Em vez de forçar a adaptação de uma tabela grande a uma tela pequena, o design já foi pensado para o mobile.
        </p>

        <h4 class="fs-5 mt-4 mb-3 pb-2 border-bottom border-light border-opacity-25">
          <strong>Painel de Controle</strong>
        </h4>

        <p class="fs-5">
          Existe um painel de controle fixo na parte superior da janela onde é possível alternar entre a visualização por períodos, por grupos e por categorias, além de ser possível ativar ou desativar as cores na tabela.
        </p>

        <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/afcad38c-2abe-484b-6d3e-942882041c00/public" style="max-width: 100%; height: auto;" aria-hidden="true" />

        <p class="fs-5">
          Quando a visualização por períodos está ativada o painel de controle exibe uma seção chamada <strong>Navegue pelos períodos da tabela</strong>, com botões para cada um dos 7 períodos, além dos botões para os lantanídeos e actinídeos. Pressionando um desses botões, a pessoa é levada diretamente para a seção correspondente na página.
        </p>

        <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/08252ef4-b9e3-4c16-73c0-491563db6c00/public" style="max-width: 100%; height: auto;" aria-hidden="true" />

        <p class="fs-5">
          Já quando a visualização por grupos está ativada, o painel de controle exibe uma seção chamada <strong>Navegue pelos grupos da tabela</strong>, com botões para cada um dos 18 grupos, além dos botões para os lantanídeos e actinídeos. Pressionando um desses botões, a pessoa é levada diretamente para a seção correspondente na página.
        </p>

        <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/dee30e7b-9132-4219-ab2d-07521b680600/public" style="max-width: 100%; height: auto;" aria-hidden="true" />

        <p class="fs-5">
          E quando a visualização por categorias está ativada, o painel de controle exibe uma seção chamada <strong>Navegue pelas categorias da tabela</strong>, com botões organizados hierarquicamente pelas quatro grandes categorias: Metais (com subcategorias como Alcalinos, Alcalinoterrosos, Transição, etc.), Semimetais, Não Metais (incluindo Halogênios e Gases Nobres) e Outros (Hidrogênio). Pressionando um desses botões, a pessoa é levada diretamente para a categoria ou subcategoria correspondente na página, facilitando a navegação por tipo de elemento químico.
        </p>

        <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/a6cf2451-92d0-4f8e-b17b-1d10bfae7000/public" style="max-width: 100%; height: auto;" aria-hidden="true" />

        <h4 class="fs-5 mt-4 mb-3 pb-2 border-bottom border-light border-opacity-25">
          <strong>Cartões de Elementos Químicos</strong>
        </h4>

        <p class="fs-5">
          Cada elemento químico é apresentado em um cartão individual, que exibe informações essenciais como o símbolo, o nome e a posição que ocupa na tabela (no caso o período e a coluna).
        </p>

        <figure class="text-center">
          <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/22f300fb-5e4d-45ea-3131-3f47f6848d00/public" style="max-width: 100%; height: auto;" aria-hidden="true" />
          <figcaption class="visually-hidden">
          Exemplo de cartão de elemento químico. O cartão é um quadrado com bordas arredondadas. O elemento do exemplo é o Boro, no cartão está sendo exibido o símbolo (B), o nome (Boro), o período (2) e a coluna (13) que é onde ele está localizado na tabela periódica.
          </figcaption>
        </figure>

        <p class="fs-5">
          Esses cartões são interativos: ao clicar com o mouse, tocar na tela touch ou pressionar <kbd>Enter</kbd> sobre eles, uma janela modal se abre, fornecendo informações detalhadas sobre o elemento, como Símbolo, Nome, Número Atômico, Número de Massa (massa atômica) e Configuração eletrônica.
        </p>

        <h4 class="fs-5 mt-4 mb-3 pb-2 border-bottom border-light border-opacity-25">
          <strong>Modal de Detalhes do Elemento</strong>
        </h4>
        
        <p class="fs-5">
          Quando você acessa um cartão de elemento, seja clicando, tocando ou pressionando <kbd>Enter</kbd>, uma janela modal é aberta com informações detalhadas.
        </p>

        <p class="fs-5">
          <strong>Gerenciamento de foco:</strong> Ao abrir a modal, o foco é automaticamente direcionado para o primeiro elemento interativo (geralmente o botão de fechar no canto superior direito). Isso garante que pessoas que navegam por teclado ou usam leitores de tela saibam imediatamente onde estão e possam fechar a janela facilmente se desejarem.
        </p>
        
        <p class="fs-5">
          Quando você fecha a modal, o foco retorna automaticamente para o cartão do elemento que você havia clicado. Isso evita que a pessoa se perca na página e precise procurar novamente onde estava antes de abrir a janela.
        </p>
        
        <p class="fs-5">
          <strong>Estrutura semântica:</strong> A modal usa elementos HTML semânticos apropriados, com atributos ARIA <code class="text-white-50">role="dialog"</code> e <code class="text-white-50">aria-modal="true"</code>. Isso informa aos leitores de tela que uma janela de diálogo foi aberta, alterando o modo de navegação.
        </p>
        
        <p class="fs-5">
          <strong>Rotulagem acessível:</strong> Cada modal possui um título claro (o nome do elemento) que é anunciado quando a janela abre. As informações são organizadas hierarquicamente com títulos (<code class="text-white-50">&lt;h2&gt;</code>, <code class="text-white-50">&lt;h3&gt;</code>) que permitem navegação rápida por marcos de referência.
        </p>
        
        <h5 class="fs-5 mt-4 mb-3">Informações apresentadas na modal</h5>
        
        <p class="fs-5">
          A janela modal de cada elemento apresenta as seguintes informações:
        </p>
        
        <ul>
          <li class="fs-5 mb-4">
            <strong>Nome do elemento:</strong> Apresentado como título principal da modal, é a primeira informação anunciada pelos leitores de tela.
          </li>
          <li class="fs-5 mb-4">
            <strong>Ilustração do elemento:</strong> Uma imagem que mostra como o elemento aparece ou é utilizado no dia a dia. Por exemplo, para o carbono, pode aparecer uma ilustração de grafite ou diamante; para o oxigênio, uma representação de bolhas de ar.
          </li>
          <li class="fs-5 mb-4">
            <strong>Grupo:</strong> Informa a qual família de elementos pertence (por exemplo: "Metais Alcalinos", "Halogênios", "Gases Nobres"). Esta informação é fundamental para entender as propriedades químicas do elemento.
          </li>
          <li class="fs-5 mb-4">
            <strong>Símbolo:</strong> A abreviatura química do elemento (por exemplo: H para Hidrogênio, O para Oxigênio, Au para Ouro). É apresentado de forma clara e acessível.
          </li>
          <li class="fs-5 mb-4">
            <strong>Número atômico:</strong> Indica quantos prótons existem no núcleo do átomo. Este número define a identidade do elemento e sua posição na tabela periódica.
          </li>
          <li class="fs-5 mb-4">
            <strong>Número de massa (massa atômica):</strong> Representa a soma de prótons e nêutrons no núcleo, indicando a massa aproximada do átomo.
          </li>
          <li class="fs-5 mb-4">
            <strong>Distribuição eletrônica:</strong> Esta é apresentada de duas formas complementares para garantir acessibilidade total:
            <ul class="mt-3">
              <li class="fs-5 mb-3">
                <strong>Visual:</strong> Um diagrama ilustrativo mostrando o núcleo do átomo no centro e as camadas eletrônicas ao redor, com os elétrons distribuídos em suas respectivas posições. Esta representação visual ajuda quem enxerga a ter uma compreensão espacial de como os elétrons estão organizados.
                <br/>
                <div class="text-center my-3">
                  <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/c7c023b7-c298-4a7a-772f-9005930f1100/public" style="max-width: 100%; height: auto;" aria-hidden="true" />
                </div>
              </li>
              <li class="fs-5">
                <strong>Linear (textual):</strong> A notação científica padrão da distribuição eletrônica, apresentada em formato de texto sequencial. Por exemplo:
                <br/>
              <div class="bg-dark bg-opacity-50 p-3 rounded my-3 text-center">
                <div class="d-flex">
                  <span><strong>Camada 1:</strong>&ThinSpace;</span>
                  <p aria-roledescription="subnível eletrônico">&ThinSpace; 1s</p>
                  <p style="position: relative; top: -0.5em;" aria-roledescription="elétrons.">
                    1
                  </p>
                </div>
              </div>
              A leitura dessa notação é direta, sequencial e construída usando atributos ARIA para garantir que leitores de tela anunciem corretamente cada parte da configuração eletrônica.
              </li>
            </ul>
          </li>
        </ul>

        <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/6dc29fb6-d403-40e4-1dea-0017e6efd300/public" style="max-width: 100%; height: auto;" alt="A imagem mostra uma janela pop-up de informações para o elemento Boro símbolo B. A janela exibe o símbolo B, o número atômico 5 e uma ilustração de equipamentos esportivos, raquetes e bola que representam o uso do Boro no dia a dia. As informações listadas são Grupo que é Semimetal; Símbolo: B; Número atômico: 5; Número de massa: 10,81. Abaixo, há um diagrama de distribuição eletrônica com duas camadas K e L, mostrando o núcleo e os elétrons, e o detalhamento das subcamadas: Camada 1 subnível s 2 elétrons., camada 2 subnível s 2 elétrons e ainda na camada 2 subnível p 1 elétron." />

        <p class="fs-5">
          Essa combinação de recursos garante que um maior número de pessoas, independentemente de como acessa a informação (visual, auditiva, tátil), consiga compreender completamente as propriedades de cada elemento químico, respeitando as diferenças individuais e promovendo a inclusão no aprendizado de Química.
        </p>
      </div>

      <div class="modal-footer border-light border-opacity-25">
        <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>

<!-- Seção da tabela -->
<section id="secao-periodos" class="text-white pt-2 position-relative" aria-labelledby="tabela-titulo">
  <div class="container px-4 my-2">
  <!-- Os elementos serão colocados aqui -->
  </div>
</section>

<!-- JS de terceiros: Bootstrap -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

<!-- Script principal (acessibilidade e comportamento) -->
<script>
  // Animações base injetadas por CSSOM
  const styleSheet = document.createElement('style');
  styleSheet.innerHTML = `
    @keyframes gradientBackground { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
    @keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg); } 25% { transform: translateY(-20px) rotate(5deg) scale(1.05); } 50% { transform: translateY(0) rotate(10deg) scale(1); } 75% { transform: translateY(20px) rotate(5deg) scale(0.95); } }
    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  `;
  document.head.appendChild(styleSheet);

  document.addEventListener('DOMContentLoaded', function () {
    // Marcar elementos puramente decorativos
    document.querySelectorAll('.header-particles, .particle, .atom-animation').forEach(function (el) {
      el.setAttribute('aria-hidden', 'true');
      el.setAttribute('role', 'presentation');
    });

        // Configuramos um announcer para acessibilidade
    let announcer = document.getElementById('a11y-announcer');
    if (!announcer) {
      announcer = document.createElement('div');
      announcer.id = 'a11y-announcer';
      announcer.className = 'visually-hidden';
      announcer.setAttribute('aria-live', 'assertive');
      document.body.appendChild(announcer);
    }

    // Modal "Saiba mais": atualizar aria-expanded e devolver foco
    const modalSobre = document.getElementById('modal-sobre');
    const btnSaibaMais = document.getElementById('btn-saiba-mais');
    if (modalSobre && btnSaibaMais) {
      modalSobre.addEventListener('shown.bs.modal', function () {
        btnSaibaMais.setAttribute('aria-expanded', 'true');
        const primeiro = modalSobre.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (primeiro) primeiro.focus();
      });
      modalSobre.addEventListener('hidden.bs.modal', function () {
        // Interromper a reprodução do vídeo quando a modal for fechada
        const videoFrame = document.getElementById('panda-037a4eaa-cf8a-4189-b090-31bb5a0c2924');
        if (videoFrame) {
          try {
            // Método 1: Usando a API do Panda Video
            videoFrame.contentWindow.postMessage(JSON.stringify({
              event: 'command',
              func: 'pauseVideo'
            }), '*');
            
            // Método 2: Recarregar o iframe para garantir que o vídeo pare
            // (backup caso o método 1 não funcione)
            const videoSrc = videoFrame.src;
            videoFrame.src = videoSrc;
          } catch (e) {
            console.log('Erro ao pausar o vídeo:', e);
          }
        }
        
        btnSaibaMais.setAttribute('aria-expanded', 'false');
        btnSaibaMais.focus();
      });
    }
    
    // Modal "Como funciona": atualizar aria-expanded e devolver foco
    const modalComoFunciona = document.getElementById('modal-como-funciona');
    const btnComoFunciona = document.getElementById('btn-como-funciona');
    if (modalComoFunciona && btnComoFunciona) {
      modalComoFunciona.addEventListener('shown.bs.modal', function () {
        btnComoFunciona.setAttribute('aria-expanded', 'true');
        const primeiro = modalComoFunciona.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (primeiro) primeiro.focus();
      });
      modalComoFunciona.addEventListener('hidden.bs.modal', function () {
        btnComoFunciona.setAttribute('aria-expanded', 'false');
        btnComoFunciona.focus();
      });
    }

    // Corrige a navegação para Lantanídeos e Actinídeos nos links de períodos
    document.querySelectorAll('a[href="#periodo-lantanideos"], a[href="#periodo-actinideos"]').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Primeiro verificamos se estamos no modo de visualização por períodos
        const isPeriodView = document.getElementById('btn-view-by-period').getAttribute('aria-pressed') === 'true';
        
        // Se não estamos no modo de visualização por períodos, ativamos esse modo primeiro
        if (!isPeriodView) {
          document.getElementById('btn-view-by-period').click();
        }
        
        // Esperamos um momento para garantir que a DOM foi atualizada
        setTimeout(() => {
          // Obtém o ID diretamente do href
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            // Define o foco no elemento para acessibilidade
            setTimeout(() => {
              targetElement.setAttribute('tabindex', '-1');
              targetElement.focus();
            }, 500);
          } else {
            console.warn('Elemento alvo não encontrado:', targetId);
          }
        }, 100); // Pequeno atraso para garantir que a DOM foi atualizada
      });
    });
    
    // Adiciona um listener para depurar o carregamento das imagens dos modais
    document.addEventListener('show.bs.modal', function(event) {
      const modal = event.target;
      const symbol = modal.getAttribute('data-element-symbol');
      const images = modal.querySelectorAll('img');
      
      if (images.length === 0) {
        console.log(`Modal do elemento ${symbol}: Nenhuma imagem encontrada`);
      } else {
        images.forEach((img, index) => {
          console.log(`Modal do elemento ${symbol}: Imagem ${index+1} - URL: ${img.src}`);
          
          // Adiciona listener para verificar o carregamento da imagem
          img.addEventListener('load', () => {
            console.log(`Modal do elemento ${symbol}: Imagem ${index+1} carregada com sucesso`);
          });
          
          img.addEventListener('error', () => {
            console.log(`Modal do elemento ${symbol}: ERRO ao carregar imagem ${index+1} - URL: ${img.src}`);
          });
        });
      }
    });
  });
</script>

<!-- Script da Tabela Periódica (injetará os elementos no #tabela-container) -->
<script src="/assets/js/tabela-periodica.js"></script>
<script src="/assets/js/tabela-periodica-grupos.js"></script>
<script src="/assets/js/tabela-periodica-categorias.js"></script>
<script src="/assets/js/tabela-periodica-colors.js"></script>

<!-- Script de alternância entre visualizações -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Alternar entre visualização por períodos, grupos e categorias
    const btnViewByPeriod = document.getElementById('btn-view-by-period');
    const btnViewByGroup = document.getElementById('btn-view-by-group');
    const btnViewByCategory = document.getElementById('btn-view-by-category');
    const periodoNavContainer = document.getElementById('periodo-nav-container');
    const grupoNavContainer = document.getElementById('grupo-nav-container');
    const categoriaNavContainer = document.getElementById('categoria-nav-container');
    
    // Criamos um elemento para anúncios de acessibilidade
    const visualAnnouncer = document.createElement('div');
    visualAnnouncer.setAttribute('aria-live', 'polite');
    visualAnnouncer.classList.add('visually-hidden');
    document.body.appendChild(visualAnnouncer);
    
    // Função para mostrar visualização por períodos
    function showPeriodView() {
      btnViewByPeriod.classList.add('btn-primary');
      btnViewByPeriod.classList.remove('btn-outline-light');
      btnViewByPeriod.setAttribute('aria-pressed', 'true');
      
      btnViewByGroup.classList.remove('btn-primary');
      btnViewByGroup.classList.add('btn-outline-light');
      btnViewByGroup.setAttribute('aria-pressed', 'false');
      
      btnViewByCategory.classList.remove('btn-primary');
      btnViewByCategory.classList.add('btn-outline-light');
      btnViewByCategory.setAttribute('aria-pressed', 'false');
      
      periodoNavContainer.style.display = 'block';
      grupoNavContainer.style.display = 'none';
      categoriaNavContainer.style.display = 'none';
      
      // Anunciar para leitores de tela
      visualAnnouncer.textContent = 'Visualização por períodos ativada';
      
      // Garantir que o container esteja limpo antes de gerar a visualização
      const container = document.querySelector("#secao-periodos .container");
      if (container) {
        container.innerHTML = '';
      }
      
      // Gerar a visualização por períodos
      generatePeriodSections();
    }
    
    // Função para mostrar visualização por grupos
    function showGroupView() {
      btnViewByGroup.classList.add('btn-primary');
      btnViewByGroup.classList.remove('btn-outline-light');
      btnViewByGroup.setAttribute('aria-pressed', 'true');
      
      btnViewByPeriod.classList.remove('btn-primary');
      btnViewByPeriod.classList.add('btn-outline-light');
      btnViewByPeriod.setAttribute('aria-pressed', 'false');
      
      btnViewByCategory.classList.remove('btn-primary');
      btnViewByCategory.classList.add('btn-outline-light');
      btnViewByCategory.setAttribute('aria-pressed', 'false');
      
      periodoNavContainer.style.display = 'none';
      grupoNavContainer.style.display = 'block';
      categoriaNavContainer.style.display = 'none';
      
      // Anunciar para leitores de tela
      visualAnnouncer.textContent = 'Visualização por grupos ativada';
      
      // Garantir que o container esteja limpo antes de gerar a visualização
      const container = document.querySelector("#secao-grupos .container");
      if (container) {
        container.innerHTML = '';
      }
      
      // Gerar a visualização por grupos
      generateColumnSections();
    }
    
    // Função para mostrar visualização por categorias
    function showCategoryView() {
      btnViewByPeriod.classList.remove('btn-primary');
      btnViewByPeriod.classList.add('btn-outline-light');
      btnViewByPeriod.setAttribute('aria-pressed', 'false');
      
      btnViewByGroup.classList.remove('btn-primary');
      btnViewByGroup.classList.add('btn-outline-light');
      btnViewByGroup.setAttribute('aria-pressed', 'false');
      
      btnViewByCategory.classList.add('btn-primary');
      btnViewByCategory.classList.remove('btn-outline-light');
      btnViewByCategory.setAttribute('aria-pressed', 'true');
      
      periodoNavContainer.style.display = 'none';
      grupoNavContainer.style.display = 'none';
      categoriaNavContainer.style.display = 'block';
      
      // Anunciar para leitores de tela
      visualAnnouncer.textContent = 'Visualização por categorias ativada';
      
      // Garantir que o container esteja limpo antes de gerar a visualização
      const container = document.querySelector("#secao-periodos .container");
      if (container) {
        container.innerHTML = '';
      }
      
      // Gerar a visualização por categorias
      generateCategorySections();
    }
    
    // Adicionar event listeners para os botões de alternância de visualização
    if (btnViewByPeriod && btnViewByGroup && btnViewByCategory) {
      btnViewByPeriod.addEventListener('click', showPeriodView);
      btnViewByGroup.addEventListener('click', showGroupView);
      btnViewByCategory.addEventListener('click', showCategoryView);
    }
    
    // Corrige a navegação para Lantanídeos e Actinídeos nos links de grupo
    document.querySelectorAll('a[href="#grupo-lantanideos"], a[href="#grupo-actinideos"]').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Primeiro verificamos se estamos no modo de visualização por grupos
        const isGroupView = document.getElementById('btn-view-by-group').getAttribute('aria-pressed') === 'true';
        
        // Se não estamos no modo de visualização por grupos, ativamos esse modo primeiro
        if (!isGroupView) {
          document.getElementById('btn-view-by-group').click();
        }
        
        // Esperamos um momento para garantir que a DOM foi atualizada
        setTimeout(() => {
          const targetId = link.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            targetElement.focus();
          } else {
            console.warn('Elemento alvo não encontrado:', targetId);
          }
        }, 100); // Pequeno atraso para garantir que a DOM foi atualizada
      });
    });
  });
</script>

<!-- Script para controle específico do vídeo -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Função para observar e lidar com o fechamento de modais que contenham vídeos do Panda Video
    function configurarPausaDeVideoEmModalFechada() {
      // Cria um handler genérico para qualquer modal com vídeos do Panda
      document.addEventListener('hidden.bs.modal', function(event) {
        const modal = event.target;
        // Procura iframes do Panda Video dentro da modal
        const pandaVideos = modal.querySelectorAll('iframe[id^="panda-"]');
        
        if (pandaVideos.length > 0) {
          console.log(`Modal fechada: Pausando ${pandaVideos.length} vídeo(s)`);
          
          pandaVideos.forEach((videoFrame, index) => {
            try {
              // Tenta pausar usando a API do Panda
              videoFrame.contentWindow.postMessage(JSON.stringify({
                event: 'command',
                func: 'pauseVideo'
              }), '*');
              
              // Método de backup: recarregar o iframe
              const videoSrc = videoFrame.src;
              videoFrame.src = videoSrc;
              
              console.log(`Vídeo ${index + 1} pausado com sucesso`);
            } catch (error) {
              console.error(`Erro ao pausar vídeo ${index + 1}:`, error);
            }
          });
        }
      });
    }
    
    // Inicializar o controle de vídeo
    configurarPausaDeVideoEmModalFechada();
  });
</script>