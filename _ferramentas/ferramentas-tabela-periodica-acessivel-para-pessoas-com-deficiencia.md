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
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
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
  body.colors-active .btn-elemento { background: #f3f3f3 !important; color: #000 !important; }
  body.colors-active .btn-elemento * { color: #000 !important; }

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
  /* ponte visual com o header */
  .section-bridge { position: absolute; inset: 0 0 auto 0; height: 70px; translate: 0 -70px; background: linear-gradient(180deg, rgba(33,37,41,0) 0%, rgba(33,37,41,.9) 70%, rgba(14,14,20,1) 100%); pointer-events: none; }

  /* container de elementos (mais legível) */
  #tabela-container {
    position: relative;
    border: 1px solid rgba(255,255,255,.12);
    background: linear-gradient(180deg, rgba(21,21,32,.6), rgba(16,16,24,.7));
    border-radius: 1rem;
    padding: 1.5rem;
    min-height: 280px;
  }
  #tabela-status { position: absolute; clip: rect(0 0 0 0); clip-path: inset(50%); height: 1px; width: 1px; overflow: hidden; white-space: nowrap; }
</style>

<!-- Link "Pular para o conteúdo" -->
<a id="skip-link" class="btn btn-primary" href="#secao-periodos">Pular para o conteúdo principal</a>

<header class="bg-dark text-white py-5 position-relative overflow-hidden" role="banner">
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

  <!-- Gradiente animado (decorativo) -->
  <div class="decorative-overlay" style="background: linear-gradient(135deg, #1e3c72, #2a5298, #2c3e50, #4b6cb7); background-size: 300% 300%; animation: gradientBackground 15s ease infinite;" aria-hidden="true" role="presentation"></div>

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

        <!-- Cards de recursos -->
        <div class="row justify-content-center mt-5 mb-4">
          <div class="col-md-4 mb-4">
            <div class="feature-card h-100" tabindex="0" aria-label="Acessibilidade: compatível com tecnologias assistivas">
              <span class="material-symbols-outlined d-block mb-2" aria-hidden="true">accessibility_new</span>
              <h5 class="mb-1">Acessibilidade</h5>
              <p class="small mb-0">Compatível com tecnologias assistivas e leitores de tela</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="feature-card h-100" tabindex="0" aria-label="Interatividade: exploração dinâmica dos elementos">
              <span class="material-symbols-outlined d-block mb-2" aria-hidden="true">science</span>
              <h5 class="mb-1">Interatividade</h5>
              <p class="small mb-0">Explore os elementos químicos de maneira dinâmica e educativa</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="feature-card h-100" tabindex="0" aria-label="Educacional: informações científicas precisas">
              <span class="material-symbols-outlined d-block mb-2" aria-hidden="true">school</span>
              <h5 class="mb-1">Educacional</h5>
              <p class="small mb-0">Informações científicas precisas para aprendizado eficiente</p>
            </div>
          </div>
        </div>

        <!-- Ações principais -->
        <div class="d-flex justify-content-center gap-3 position-relative mb-5">
          <a href="#secao-periodos" class="btn btn-primary px-4 py-2 rounded-pill d-flex align-items-center" role="button" aria-label="Ver tabela periódica" title="Ir para a tabela periódica">
            <span class="material-symbols-outlined me-2" aria-hidden="true">table_chart</span>
            <span>Ver tabela</span>
          </a>
          <button id="btn-saiba-mais" type="button" class="btn btn-outline-light px-4 py-2 rounded-pill d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-sobre" aria-haspopup="dialog" aria-expanded="false" aria-label="Saiba mais sobre a tabela periódica acessível" title="Abrir informações detalhadas">
            <span class="material-symbols-outlined me-2" aria-hidden="true">info</span>
            <span>Saiba mais</span>
          </button>
        </div>

        <!-- Painel de Controle -->
        <div class="mt-4 mb-2">
          <div class="position-relative rounded-4 bg-dark bg-opacity-50 p-4 border border-light border-opacity-10">
            <h2 id="titulo-painel" class="h4 text-center mb-4 fw-bold position-relative">
              <span class="material-symbols-outlined d-inline-block align-middle me-2" aria-hidden="true">tune</span>
              Painel de Controle
            </h2>

            <!-- Configuração visual -->
            <div class="bg-dark bg-opacity-50 p-3 rounded-4 mb-4">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <span class="material-symbols-outlined me-2" aria-hidden="true" role="presentation">palette</span>
                  <span class="fw-semibold text-white" id="config-visual-label">Configuração visual</span>
                </div>
                <button id="toggle-cores" class="btn btn-outline-light btn-sm rounded-pill px-3" type="button" aria-pressed="false" aria-labelledby="config-visual-label" aria-describedby="toggle-cores-desc" title="Alternar visualização por cores nas famílias químicas">
                  <span class="material-symbols-outlined me-1 align-middle" aria-hidden="true">color_lens</span>
                  <span>Ativar cores</span>
                </button>
                <span id="toggle-cores-desc" class="visually-hidden">Alterna a visualização por cores nas famílias químicas.</span>
              </div>
            </div>

            <!-- Navegação por períodos (links âncora) -->
            <div class="bg-dark bg-opacity-50 p-3 rounded-4">
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
          </div>
        </div>

      </div>
    </div>
  </div>
</header>

<!-- Modal “Saiba mais” -->
<div class="modal fade" id="modal-sobre" tabindex="-1" aria-labelledby="modalSobreLabel" aria-hidden="true" role="dialog" aria-modal="true">
  <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
    <div class="modal-content bg-dark text-white border-light">
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
            <div class="text-center" tabindex="0" aria-label="Acessibilidade total: compatível com leitores de tela">
              <span class="material-symbols-outlined d-block mb-2" aria-hidden="true">accessibility</span>
              <h4 class="h6">Acessibilidade Total</h4>
              <p class="small">Compatível com leitores de tela e tecnologias assistivas</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="text-center" tabindex="0" aria-label="Interatividade: informações detalhadas por elemento">
              <span class="material-symbols-outlined d-block mb-2" aria-hidden="true">touch_app</span>
              <h4 class="h6">Interatividade</h4>
              <p class="small">Informações detalhadas sobre cada elemento químico</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="text-center" tabindex="0" aria-label="Responsividade: funciona em vários dispositivos">
              <span class="material-symbols-outlined d-block mb-2" aria-hidden="true">devices</span>
              <h4 class="h6">Responsividade</h4>
              <p class="small">Funciona em diversos dispositivos e tamanhos de tela</p>
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

<!-- Seção da tabela -->
<section id="secao-periodos" class="text-white pt-5 position-relative" aria-labelledby="tabela-titulo">

  <div class="container px-4 my-4" style="background: linear-gradient(180deg, rgba(21,21,32,.6), rgba(16,16,24,.7)); border: 1px solid rgba(255,255,255,.12); border-radius: 1rem; padding: 1.5rem; min-height: 280px; position: relative;">
    <!-- Ponte visual com o header -->
    <div class="section-bridge" aria-hidden="true" role="presentation"></div>
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

    // Foco no título da página (após breve delay para não "brigar" com a animação do header)
    setTimeout(function () {
      const pageTitle = document.getElementById('page-title');
      if (pageTitle) pageTitle.focus();
    }, 800);

    // Alternância de cores das famílias químicas
    const btnToggleCores = document.getElementById('toggle-cores');
    if (btnToggleCores) {
      const announcer = document.createElement('div');
      announcer.id = 'a11y-announcer';
      announcer.className = 'visually-hidden';
      announcer.setAttribute('aria-live', 'assertive');
      document.body.appendChild(announcer);

      btnToggleCores.addEventListener('click', function () {
        const ativo = document.body.classList.toggle('colors-active');
        btnToggleCores.setAttribute('aria-pressed', ativo ? 'true' : 'false');
        btnToggleCores.querySelector('span:last-child').textContent = ativo ? 'Desativar cores' : 'Ativar cores';
        announcer.textContent = ativo ? 'Cores ativadas.' : 'Cores desativadas.';
        setTimeout(() => announcer.textContent = '', 2000);
      });
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

    // Corrige a navegação para Lantanídeos e Actinídeos
    document.querySelectorAll('a[href="#periodo-lantanideos"], a[href="#periodo-actinideos"]').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Mapeia os links sem acento para os IDs com acento
        const idMap = {
          '#periodo-lantanideos': '#periodo-Lantanídeos',
          '#periodo-actinideos': '#periodo-Actinídeos'
        };
        
        const targetId = idMap[this.getAttribute('href')];
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          // Define o foco no elemento para acessibilidade
          setTimeout(() => {
            targetElement.setAttribute('tabindex', '-1');
            targetElement.focus();
          }, 500);
        }
      });
    });
  });
</script>

<!-- Script da Tabela Periódica (injetará os elementos no #tabela-container) -->
<script src="/assets/js/tabela-periodica.js"></script>
