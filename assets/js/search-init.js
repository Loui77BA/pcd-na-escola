/**
 * Pagefind Search — Inicialização lazy para modal e página de busca.
 * Carrega Pagefind somente quando necessário.
 * Funciona apenas em produção (após build com Pagefind).
 */
(function () {
  'use strict';

  var pagefind = null;
  var pagefindFailed = false;
  var debounceTimer = null;
  var DEBOUNCE_MS = 300;
  var MAX_MODAL_RESULTS = 5;

  /**
   * Detecta o caminho base do site (suporta baseurl do Jekyll).
   */
  function getBasePath() {
    var base = document.querySelector('meta[name="pagefind-base"]');
    if (base) return base.getAttribute('content');
    // Tenta inferir do <link rel="canonical"> ou usa raiz
    return '';
  }

  /**
   * Carrega o Pagefind sob demanda.
   */
  async function loadPagefind() {
    if (pagefind) return pagefind;
    if (pagefindFailed) return null;

    var basePath = getBasePath();
    var paths = [
      basePath + '/pagefind/pagefind.js',
      '/pagefind/pagefind.js'
    ];

    for (var i = 0; i < paths.length; i++) {
      try {
        pagefind = await import(paths[i]);
        await pagefind.init();
        return pagefind;
      } catch (e) {
        // Tenta o próximo caminho
      }
    }

    pagefindFailed = true;
    console.warn('Pagefind não disponível. Execute "npx pagefind --site _site" para gerar o índice de busca.');
    return null;
  }

  /**
   * Executa a busca e renderiza resultados.
   */
  async function performSearch(query, resultsContainer, maxResults) {
    if (!query || query.length < 2) {
      resultsContainer.innerHTML = '';
      return;
    }

    var pf = await loadPagefind();
    if (!pf) {
      resultsContainer.innerHTML =
        '<div class="text-center py-4" role="status">' +
        '<i class="material-icons d-block fs-1 mb-2 text-muted-custom" aria-hidden="true">cloud_off</i>' +
        '<p class="text-muted-custom">A busca está disponível apenas no site publicado.<br>' +
        '<small>Em desenvolvimento local, execute: <code>npx pagefind --site _site</code></small></p>' +
        '</div>';
      return;
    }

    var search = await pf.search(query);

    if (search.results.length === 0) {
      resultsContainer.innerHTML =
        '<div class="text-center py-4" role="status">' +
        '<i class="material-icons d-block fs-1 mb-2 text-muted-custom" aria-hidden="true">search_off</i>' +
        '<p class="text-muted-custom">Nenhum resultado encontrado para "<strong>' +
        escapeHtml(query) + '</strong>"</p>' +
        '</div>';
      return;
    }

    var sliced = maxResults ? search.results.slice(0, maxResults) : search.results;
    var results = await Promise.all(sliced.map(function (r) { return r.data(); }));

    var totalCount = search.results.length;
    var html = '<div class="visually-hidden" role="status">' +
      totalCount + ' resultado' + (totalCount !== 1 ? 's' : '') +
      ' encontrado' + (totalCount !== 1 ? 's' : '') +
      ' para ' + escapeHtml(query) +
      '</div>';

    html += '<div class="search-results-list">';
    results.forEach(function (result) {
      var title = result.meta && result.meta.title ? result.meta.title : 'Sem título';
      html +=
        '<a href="' + escapeAttr(result.url) + '" class="search-result-item">' +
        '<h3 class="search-result-title">' + escapeHtml(title) + '</h3>' +
        '<p class="search-result-excerpt">' + (result.excerpt || '') + '</p>' +
        '</a>';
    });
    html += '</div>';

    if (maxResults && totalCount > maxResults) {
      html +=
        '<div class="text-center mt-3">' +
        '<a href="/busca/?q=' + encodeURIComponent(query) +
        '" class="btn btn-outline-custom btn-sm rounded-pill px-3">' +
        'Ver todos os ' + totalCount + ' resultados' +
        ' <i class="material-icons align-middle fs-6 ms-1" aria-hidden="true">arrow_forward</i>' +
        '</a></div>';
    }

    resultsContainer.innerHTML = html;
  }

  /**
   * Escapa texto para evitar XSS em conteúdo HTML.
   */
  function escapeHtml(text) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  }

  /**
   * Escapa texto para uso em atributos HTML.
   */
  function escapeAttr(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  /**
   * Liga um input a um container de resultados com debounce.
   */
  function bindSearch(input, resultsContainer, maxResults) {
    if (!input || !resultsContainer) return;

    input.addEventListener('input', function () {
      var query = input.value.trim();
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
        performSearch(query, resultsContainer, maxResults);
      }, DEBOUNCE_MS);
    });

    // Permite buscar pressionando Enter (para consistência)
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        clearTimeout(debounceTimer);
        performSearch(input.value.trim(), resultsContainer, maxResults);
      }
    });
  }

  /**
   * Inicialização ao carregar a página.
   */
  document.addEventListener('DOMContentLoaded', function () {
    // --- Modal de busca ---
    var modalEl = document.getElementById('searchModal');
    var modalInput = document.getElementById('search-input-modal');
    var modalResults = document.getElementById('search-results-modal');

    if (modalEl && modalInput) {
      bindSearch(modalInput, modalResults, MAX_MODAL_RESULTS);

      var searchTrigger = null;

      modalEl.addEventListener('show.bs.modal', function (e) {
        searchTrigger = e.relatedTarget || document.activeElement;
      });

      modalEl.addEventListener('shown.bs.modal', function () {
        modalInput.focus();
        loadPagefind(); // Pré-carrega enquanto o usuário digita
      });

      modalEl.addEventListener('hidden.bs.modal', function () {
        modalInput.value = '';
        if (modalResults) modalResults.innerHTML = '';
        if (searchTrigger) {
          searchTrigger.focus();
          searchTrigger = null;
        }
      });
    }

    // --- Página de busca (/busca) ---
    var pageInput = document.getElementById('search-input-page');
    var pageResults = document.getElementById('search-results-page');

    if (pageInput && pageResults) {
      bindSearch(pageInput, pageResults, null);

      // Lê query string (?q=...)
      var params = new URLSearchParams(window.location.search);
      var q = params.get('q');
      if (q) {
        pageInput.value = q;
        performSearch(q, pageResults, null);
      }

      pageInput.focus();
    }
  });
})();
