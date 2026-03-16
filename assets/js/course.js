document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.modal').forEach(function(modal) {
    modal.addEventListener('hidden.bs.modal', function() {
      const iframe = modal.querySelector('iframe');
      if (iframe) {
        const src = iframe.src;
        iframe.src = '';
        iframe.src = src;
      }
    });
  });
});
