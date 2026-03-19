document.addEventListener('DOMContentLoaded', function() {
  var CF_BASE = 'https://customer-n8imyf4ea5hvxexl.cloudflarestream.com';
  var totalEl = document.getElementById('lesson-total');
  var total = totalEl ? parseInt(totalEl.textContent, 10) : 0;
  var currentIndex = 0;

  var modalEl      = document.getElementById('course-modal');
  var iframe       = document.getElementById('course-iframe');
  var titleEl      = document.getElementById('course-modal-label');
  var progressEl   = modalEl.querySelector('.lesson-progress');
  var transcriptEl = document.getElementById('course-transcript');
  var detailsEl    = modalEl.querySelector('.video-transcript');
  var bodyEl       = modalEl.querySelector('.modal-body');
  var btnPrev      = document.getElementById('btn-prev-lesson');
  var btnNext      = document.getElementById('btn-next-lesson');
  var footerProgress = modalEl.querySelector('.lesson-progress-footer');

  function loadLesson(index) {
    var btn = document.querySelector('[data-lesson-index="' + index + '"]');
    if (!btn) return;
    currentIndex = index;

    var lessonId     = btn.dataset.lessonId;
    var lessonNumber = btn.dataset.lessonNumber;
    var lessonTitle  = btn.dataset.lessonTitle;

    // Título
    titleEl.textContent = 'Aula ' + lessonNumber + ' \u2014 ' + lessonTitle;

    // Vídeo
    var poster = encodeURIComponent(
      CF_BASE + '/' + lessonId + '/thumbnails/thumbnail.jpg?time=1s&height=600'
    );
    iframe.src   = CF_BASE + '/' + lessonId + '/iframe?poster=' + poster + '&controls=false';
    iframe.title = 'Vídeo: Aula ' + lessonNumber + ' - ' + lessonTitle;

    // Reinicializa o player acessível com controles em pt-BR
    var playerContainer = document.getElementById('course-player');
    if (playerContainer && typeof window.reinitCfPlayer === 'function') {
      // Pequeno delay para garantir que o iframe carregou
      setTimeout(function() { window.reinitCfPlayer(playerContainer); }, 300);
    }

    // Transcrição (via <template> renderizado pelo Jekyll)
    var tmpl = document.getElementById('transcript-' + lessonId);
    transcriptEl.innerHTML = tmpl ? tmpl.innerHTML : '';
    detailsEl.open = true;
    bodyEl.scrollTop = 0;

    // Botões de navegação e progresso
    btnPrev.disabled = (index === 0);
    btnNext.disabled = (index === total - 1);
    var progressText = (index + 1) + ' de ' + total;
    progressEl.textContent = progressText;
    if (footerProgress) footerProgress.textContent = progressText;
  }

  // Carrega os dados antes do Bootstrap abrir a modal
  // (listeners diretos nos elementos executam antes da delegação no document)
  document.querySelectorAll('.video-card-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      loadLesson(parseInt(this.dataset.lessonIndex, 10));
    });
  });

  // Navegação entre aulas (modal permanece aberta)
  btnPrev.addEventListener('click', function() {
    if (currentIndex > 0) loadLesson(currentIndex - 1);
  });

  btnNext.addEventListener('click', function() {
    if (currentIndex < total - 1) loadLesson(currentIndex + 1);
  });

  // Para o vídeo ao fechar a modal e limpa controles do player
  modalEl.addEventListener('hidden.bs.modal', function() {
    iframe.src = '';
    var playerContainer = document.getElementById('course-player');
    if (playerContainer) {
      var oldControls = playerContainer.querySelector('.cf-controls');
      var oldOverlay = playerContainer.querySelector('.cf-play-overlay');
      if (oldControls) oldControls.remove();
      if (oldOverlay) oldOverlay.remove();
      playerContainer.dataset.cfInit = '';
    }
  });
});
