/**
 * Player de vídeo acessível para Cloudflare Stream
 * Controles em Português do Brasil para leitores de tela
 *
 * Uso: envolva o iframe em <div class="cf-player"> e adicione
 * &controls=false à URL do iframe. O script inicializa automaticamente.
 *
 * Para iframes dinâmicos, chame window.initCfPlayer(containerElement)
 * após definir o src do iframe.
 */
(function () {
  'use strict';

  // SVGs dos ícones
  var ICON = {
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>',
    mute: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>',
    unmute: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>',
    fullscreen: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>',
    exitFs: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>'
  };

  function fmt(sec) {
    if (!sec || isNaN(sec)) return '0:00';
    var m = Math.floor(sec / 60);
    var s = Math.floor(sec % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function buildControls() {
    var el = document.createElement('div');
    el.className = 'cf-controls';
    el.setAttribute('role', 'group');
    el.setAttribute('aria-label', 'Controles do vídeo');

    el.innerHTML =
      '<button type="button" class="cf-btn-play" aria-label="Reproduzir">' + ICON.play + '</button>' +
      '<div class="cf-progress-wrap">' +
        '<input type="range" class="cf-progress" min="0" max="1000" value="0" step="1" ' +
        'aria-label="Progresso do vídeo" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-valuetext="0:00 de 0:00">' +
      '</div>' +
      '<span class="cf-time" aria-hidden="true">0:00 / 0:00</span>' +
      '<button type="button" class="cf-btn-mute" aria-label="Silenciar">' + ICON.unmute + '</button>' +
      '<button type="button" class="cf-btn-fs" aria-label="Tela cheia">' + ICON.fullscreen + '</button>';

    return el;
  }

  function buildOverlay() {
    var el = document.createElement('div');
    el.className = 'cf-play-overlay';
    el.innerHTML = '<button type="button" aria-label="Reproduzir vídeo">' + ICON.play + '</button>';
    return el;
  }

  function initPlayer(container) {
    var iframe = container.querySelector('iframe');
    if (!iframe || container.dataset.cfInit === '1') return;
    container.dataset.cfInit = '1';

    // Garante que controls=false está na URL
    if (iframe.src && iframe.src.indexOf('controls=false') === -1) {
      var sep = iframe.src.indexOf('?') === -1 ? '?' : '&';
      iframe.src = iframe.src + sep + 'controls=false';
    }

    // Verifica se o SDK está disponível
    if (typeof Stream === 'undefined') {
      // Sem SDK, deixa controles nativos
      if (iframe.src) {
        iframe.src = iframe.src.replace('controls=false', 'controls=true');
      }
      return;
    }

    var player;
    try {
      player = Stream(iframe);
    } catch (e) {
      // Se falhar, restaura controles nativos
      if (iframe.src) {
        iframe.src = iframe.src.replace('controls=false', 'controls=true');
      }
      return;
    }

    // Adiciona overlay de play e controles
    var videoWrap = iframe.parentElement;
    var overlay = buildOverlay();
    videoWrap.style.position = 'relative';
    videoWrap.appendChild(overlay);

    var controls = buildControls();
    // Insere controles logo após o wrapper do vídeo
    if (videoWrap.nextSibling) {
      videoWrap.parentNode.insertBefore(controls, videoWrap.nextSibling);
    } else {
      videoWrap.parentNode.appendChild(controls);
    }

    // Referências dos controles
    var btnPlay = controls.querySelector('.cf-btn-play');
    var btnMute = controls.querySelector('.cf-btn-mute');
    var btnFs = controls.querySelector('.cf-btn-fs');
    var progress = controls.querySelector('.cf-progress');
    var timeDisplay = controls.querySelector('.cf-time');
    var overlayBtn = overlay.querySelector('button');

    var seeking = false;

    // Play / Pause
    function togglePlay() {
      if (player.paused) {
        player.play();
      } else {
        player.pause();
      }
    }

    btnPlay.addEventListener('click', togglePlay);
    overlayBtn.addEventListener('click', togglePlay);

    player.addEventListener('play', function () {
      btnPlay.innerHTML = ICON.pause;
      btnPlay.setAttribute('aria-label', 'Pausar');
      overlay.setAttribute('hidden', '');
    });

    player.addEventListener('pause', function () {
      btnPlay.innerHTML = ICON.play;
      btnPlay.setAttribute('aria-label', 'Reproduzir');
      overlay.removeAttribute('hidden');
    });

    player.addEventListener('ended', function () {
      btnPlay.innerHTML = ICON.play;
      btnPlay.setAttribute('aria-label', 'Reproduzir');
      overlay.removeAttribute('hidden');
    });

    // Progresso
    player.addEventListener('timeupdate', function () {
      if (seeking) return;
      var dur = player.duration || 0;
      var cur = player.currentTime || 0;
      var pct = dur > 0 ? (cur / dur) * 1000 : 0;
      progress.value = Math.round(pct);
      progress.setAttribute('aria-valuenow', Math.round((cur / dur) * 100) || 0);
      progress.setAttribute('aria-valuetext', fmt(cur) + ' de ' + fmt(dur));
      timeDisplay.textContent = fmt(cur) + ' / ' + fmt(dur);
    });

    progress.addEventListener('input', function () {
      seeking = true;
      var dur = player.duration || 0;
      var target = (parseFloat(this.value) / 1000) * dur;
      timeDisplay.textContent = fmt(target) + ' / ' + fmt(dur);
    });

    progress.addEventListener('change', function () {
      var dur = player.duration || 0;
      player.currentTime = (parseFloat(this.value) / 1000) * dur;
      seeking = false;
    });

    // Mute
    btnMute.addEventListener('click', function () {
      player.muted = !player.muted;
    });

    player.addEventListener('volumechange', function () {
      if (player.muted || player.volume === 0) {
        btnMute.innerHTML = ICON.mute;
        btnMute.setAttribute('aria-label', 'Ativar som');
      } else {
        btnMute.innerHTML = ICON.unmute;
        btnMute.setAttribute('aria-label', 'Silenciar');
      }
    });

    // Fullscreen
    btnFs.addEventListener('click', function () {
      var fsEl = container;
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else if (fsEl.requestFullscreen) {
        fsEl.requestFullscreen();
      } else if (fsEl.webkitRequestFullscreen) {
        fsEl.webkitRequestFullscreen();
      }
    });

    document.addEventListener('fullscreenchange', function () {
      if (document.fullscreenElement === container) {
        btnFs.innerHTML = ICON.exitFs;
        btnFs.setAttribute('aria-label', 'Sair da tela cheia');
      } else {
        btnFs.innerHTML = ICON.fullscreen;
        btnFs.setAttribute('aria-label', 'Tela cheia');
      }
    });
  }

  // Reinicializa um player dinâmico (ex.: iframe de curso com src alterado)
  function reinitPlayer(container) {
    // Remove controles e overlay antigos
    var oldControls = container.querySelector('.cf-controls');
    var oldOverlay = container.querySelector('.cf-play-overlay');
    if (oldControls) oldControls.remove();
    if (oldOverlay) oldOverlay.remove();
    container.dataset.cfInit = '';
    initPlayer(container);
  }

  // Inicializa todos os players estáticos
  document.addEventListener('DOMContentLoaded', function () {
    var players = document.querySelectorAll('.cf-player');
    players.forEach(function (p) {
      initPlayer(p);
    });
  });

  // API pública
  window.initCfPlayer = initPlayer;
  window.reinitCfPlayer = reinitPlayer;
})();
