document.addEventListener('DOMContentLoaded', function() {
  var CF_BASE = 'https://customer-n8imyf4ea5hvxexl.cloudflarestream.com';
  var total = courseLessons.length;
  var currentIndex = 0;

  var modalEl      = document.getElementById('course-modal');
  var iframe       = document.getElementById('course-iframe');
  var titleEl      = document.getElementById('course-modal-label');
  var progressEl   = modalEl.querySelector('.lesson-progress');
  var transcriptEl = document.getElementById('course-transcript');
  var detailsEl    = modalEl.querySelector('.video-transcript');
  var btnPrev      = document.getElementById('btn-prev-lesson');
  var btnNext      = document.getElementById('btn-next-lesson');

  function loadLesson(index) {
    var lesson = courseLessons[index];
    currentIndex = index;

    // Título e progresso
    titleEl.textContent = 'Aula ' + lesson.number + ' — ' + lesson.title;
    progressEl.textContent = (index + 1) + ' de ' + total;

    // Vídeo
    var poster = encodeURIComponent(
      CF_BASE + '/' + lesson.id + '/thumbnails/thumbnail.jpg?time=1s&height=600'
    );
    iframe.src = CF_BASE + '/' + lesson.id + '/iframe?poster=' + poster;
    iframe.title = 'Vídeo: Aula ' + lesson.number + ' - ' + lesson.title;

    // Transcrição
    transcriptEl.innerHTML = lesson.transcript;
    detailsEl.open = true;

    // Botões de navegação
    btnPrev.disabled = (index === 0);
    btnNext.disabled = (index === total - 1);
  }

  // Abre a modal ao clicar no card
  document.querySelectorAll('.video-card-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      loadLesson(parseInt(this.dataset.lessonIndex, 10));
      bootstrap.Modal.getOrCreateInstance(modalEl).show();
    });
  });

  // Navegação entre aulas
  btnPrev.addEventListener('click', function() {
    if (currentIndex > 0) loadLesson(currentIndex - 1);
  });

  btnNext.addEventListener('click', function() {
    if (currentIndex < total - 1) loadLesson(currentIndex + 1);
  });

  // Para o vídeo ao fechar a modal
  modalEl.addEventListener('hidden.bs.modal', function() {
    iframe.src = '';
  });
});
