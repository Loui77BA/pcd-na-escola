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
              <div class="d-flex justify-content-center mb-2 gap-2">
                <button id="btn-view-by-period" class="btn btn-primary rounded-pill text-nowrap active" aria-pressed="true" aria-label="Visualizar por períodos">
                  <span class="material-symbols-outlined me-1" aria-hidden="true">table_rows</span>
                  Por períodos
                </button>
                <button id="btn-view-by-group" class="btn btn-outline-light rounded-pill text-nowrap" aria-pressed="false" aria-label="Visualizar por grupos/colunas">
                  <span class="material-symbols-outlined me-1" aria-hidden="true">table_chart</span>
                  Por grupos
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
        <div class="row g-4 mb-4">
          <div class="col-lg-6">
            <figure>
              <img src="https://placekitten.com/600/400" class="img-fluid modal-about-image" alt="Ilustração representativa da Tabela Periódica Acessível com uma pessoa utilizando leitor de tela">
              <figcaption class="visually-hidden">Imagem representativa da Tabela Periódica Acessível em uso</figcaption>
            </figure>
          </div>
          <div class="col-lg-6">
            <h3 class="h5 mb-3 pb-2 border-bottom border-light border-opacity-25">O que é esta ferramenta?</h3>
            <p>A Tabela Periódica Acessível é uma ferramenta educacional desenvolvida para facilitar o aprendizado de química para pessoas com deficiência, especialmente quem utiliza tecnologias assistivas.</p>
            <p>O objetivo é democratizar o acesso ao conhecimento científico, tornando-o acessível para todas as pessoas.</p>
          </div>
        </div>
        <h3 class="h5 mb-3" id="principais-recursos-titulo">Principais recursos</h3>
        <div class="row g-4 mb-4" aria-labelledby="principais-recursos-titulo">
          <div class="col-md-4">
            <section class="text-center" role="region" aria-labelledby="modal-a11y-title" aria-describedby="modal-a11y-desc">
              <span class="material-symbols-outlined d-block mb-2" aria-hidden="true">accessibility</span>
              <h4 id="modal-a11y-title" class="h6">Acessibilidade Total</h4>
              <p id="modal-a11y-desc" class="small">Compatível com leitores de tela e tecnologias assistivas</p>
            </section>
          </div>
          <div class="col-md-4">
            <section class="text-center" role="region" aria-labelledby="modal-inter-title" aria-describedby="modal-inter-desc">
              <span class="material-symbols-outlined d-block mb-2" aria-hidden="true">touch_app</span>
              <h4 id="modal-inter-title" class="h6">Interatividade</h4>
              <p id="modal-inter-desc" class="small">Informações detalhadas sobre cada elemento químico</p>
            </section>
          </div>
          <div class="col-md-4">
            <section class="text-center" role="region" aria-labelledby="modal-resp-title" aria-describedby="modal-resp-desc">
              <span class="material-symbols-outlined d-block mb-2" aria-hidden="true">devices</span>
              <h4 id="modal-resp-title" class="h6">Responsividade</h4>
              <p id="modal-resp-desc" class="small">Funciona em diversos dispositivos e tamanhos de tela</p>
            </section>
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
        <div class="row g-4 mb-4">
          <div class="col-lg-6">
            <figure>
              <img src="https://placekitten.com/600/400" class="img-fluid modal-about-image" alt="Ilustração mostrando como utilizar a tabela periódica">
              <figcaption class="visually-hidden">Imagem representativa do uso da tabela periódica</figcaption>
            </figure>
          </div>
          <div class="col-lg-6">
            <h3 class="h5 mb-3 pb-2 border-bottom border-light border-opacity-25">Navegação básica</h3>
            <p>Para utilizar a Tabela Periódica Acessível, basta clicar ou tocar em qualquer elemento químico para abrir uma janela com informações detalhadas sobre ele.</p>
            <p>Use os botões de navegação rápida para saltar entre os diferentes períodos e grupos de elementos.</p>
          </div>
        </div>

        <h3 class="h5 mb-3 pb-2 border-bottom border-light border-opacity-25">Recursos de acessibilidade</h3>
        <ul class="list-unstyled">
          <li class="mb-2"><span class="material-symbols-outlined me-2 align-middle" aria-hidden="true">screen_reader</span> <strong>Leitores de tela:</strong> Toda a tabela é compatível com tecnologias assistivas.</li>
          <li class="mb-2"><span class="material-symbols-outlined me-2 align-middle" aria-hidden="true">keyboard</span> <strong>Navegação por teclado:</strong> Use Tab para navegar entre elementos e Enter para selecionar.</li>
          <li class="mb-2"><span class="material-symbols-outlined me-2 align-middle" aria-hidden="true">palette</span> <strong>Modo de cores:</strong> Ative/desative as cores para melhor contraste visual.</li>
        </ul>

        <h3 class="h5 mb-3 pb-2 border-bottom border-light border-opacity-25">Dicas de uso</h3>
        <ul>
          <li>Clique no botão "Ativar cores" para visualizar os elementos agrupados por categorias com cores específicas.</li>
          <li>Alterne entre visualizações "Por períodos" e "Por grupos" para explorar a tabela de diferentes maneiras.</li>
          <li>As informações detalhadas incluem número atômico, massa atômica e distribuição eletrônica.</li>
        </ul>
        
        <h3 class="h5 mb-3 pb-2 border-bottom border-light border-opacity-25">Significado das cores</h3>
        <ul>
          <li><span style="display:inline-block; width:20px; height:20px; background-color:#ffffff; vertical-align:middle; border-radius:3px;"></span> <strong>Branco:</strong> Hidrogênio</li>
          <li><span style="display:inline-block; width:20px; height:20px; background-color:#9d4edd; vertical-align:middle; border-radius:3px;"></span> <strong>Roxo:</strong> Metais alcalinos</li>
          <li><span style="display:inline-block; width:20px; height:20px; background-color:#748cab; vertical-align:middle; border-radius:3px;"></span> <strong>Cinza-azulado:</strong> Metais alcalino-terrosos</li>
          <li><span style="display:inline-block; width:20px; height:20px; background-color:#ffcc00; vertical-align:middle; border-radius:3px;"></span> <strong>Amarelo:</strong> Metais de transição</li>
          <li><span style="display:inline-block; width:20px; height:20px; background-color:#ff7f50; vertical-align:middle; border-radius:3px;"></span> <strong>Laranja:</strong> Lantanídeos</li>
          <li><span style="display:inline-block; width:20px; height:20px; background-color:#ffa07a; vertical-align:middle; border-radius:3px;"></span> <strong>Laranja claro:</strong> Actinídeos</li>
          <li><span style="display:inline-block; width:20px; height:20px; background-color:#6a994e; vertical-align:middle; border-radius:3px;"></span> <strong>Verde:</strong> Não metais</li>
          <li><span style="display:inline-block; width:20px; height:20px; background-color:#e63946; vertical-align:middle; border-radius:3px;"></span> <strong>Vermelho:</strong> Semimetais</li>
          <li><span style="display:inline-block; width:20px; height:20px; background-color:#ffe066; vertical-align:middle; border-radius:3px;"></span> <strong>Amarelo claro:</strong> Outros metais representativos</li>
          <li><span style="display:inline-block; width:20px; height:20px; background-color:#00b4d8; vertical-align:middle; border-radius:3px;"></span> <strong>Azul:</strong> Gases nobres</li>
        </ul>

        <div class="alert alert-info mt-4">
          <span class="material-symbols-outlined me-2 align-middle" aria-hidden="true">lightbulb</span>
          <strong>Dica:</strong> Para uma experiência ainda melhor, utilize um dispositivo com tela grande ou gire seu dispositivo móvel na horizontal.
        </div>
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
<script src="/assets/js/tabela-periodica-colors.js"></script>

<!-- Script de alternância entre visualizações -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Alternar entre visualização por períodos e por grupos
    const btnViewByPeriod = document.getElementById('btn-view-by-period');
    const btnViewByGroup = document.getElementById('btn-view-by-group');
    const periodoNavContainer = document.getElementById('periodo-nav-container');
    const grupoNavContainer = document.getElementById('grupo-nav-container');
    
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
      
      periodoNavContainer.style.display = 'block';
      grupoNavContainer.style.display = 'none';
      
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
      
      periodoNavContainer.style.display = 'none';
      grupoNavContainer.style.display = 'block';
      
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
    
    // Adicionar event listeners para os botões de alternância de visualização
    if (btnViewByPeriod && btnViewByGroup) {
      btnViewByPeriod.addEventListener('click', showPeriodView);
      btnViewByGroup.addEventListener('click', showGroupView);
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