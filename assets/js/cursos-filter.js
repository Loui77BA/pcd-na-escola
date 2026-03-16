document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.category-trigger');
  const courses = document.querySelectorAll('.course-item');
  const noResultsMsg = document.getElementById('no-results');

  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('role', 'status');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.classList.add('visually-hidden-focusable');
  document.body.appendChild(liveRegion);

  buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const selectedCategory = this.dataset.category;
      const categoryName = this.dataset.name || 'Todos os cursos';
      let visibleCount = 0;

      courses.forEach(function(course) {
        const shouldShow = (selectedCategory === 'all' || course.dataset.category === selectedCategory);

        if (shouldShow) {
          course.classList.remove('d-none');
          course.style.animation = 'none';
          void course.offsetWidth; // força reflow para reiniciar animação
          course.style.animation = 'fadeIn 0.4s ease both';
          visibleCount++;
        } else {
          course.classList.add('d-none');
        }
      });

      buttons.forEach(function(b) {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      this.classList.add('active');
      this.setAttribute('aria-pressed', 'true');

      if (visibleCount === 0) {
        noResultsMsg.classList.remove('d-none');
      } else {
        noResultsMsg.classList.add('d-none');
      }

      const message = selectedCategory === 'all'
        ? 'Mostrando todos os ' + visibleCount + ' cursos'
        : 'Mostrando ' + visibleCount + ' curso' + (visibleCount !== 1 ? 's' : '') + ' na categoria ' + categoryName;

      setTimeout(function() {
        liveRegion.textContent = message;
      }, 100);
    });
  });
});
