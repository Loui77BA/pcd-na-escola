document.addEventListener('DOMContentLoaded', function() {
  const html = document.documentElement;
  const body = document.body;
  const $ = (id) => document.getElementById(id);
  const live = $('a11yLive');

  // Ajusta posicionamento com base no VLibras
  function adjustAccessibilityPosition() {
    const vlibrasBtnRect = document.querySelector('[vw-access-button]')?.getBoundingClientRect();
    const a11yBtn = document.getElementById('a11yToggle');

    if (vlibrasBtnRect && a11yBtn) {
      const vlibrasBottom = vlibrasBtnRect.bottom;
      a11yBtn.style.top = (vlibrasBottom + 20) + 'px';
      a11yBtn.style.right = '15px';
    }
  }

  window.addEventListener('resize', adjustAccessibilityPosition);
  setTimeout(adjustAccessibilityPosition, 300);
  setTimeout(adjustAccessibilityPosition, 800);
  setTimeout(adjustAccessibilityPosition, 1500);

  const state = {
    fontScale: 1,
    contrast: false,
    negative: false,
    grayscale: false,
    underline: false,
    readable: false
  };

  const load = () => {
    try {
      const saved = JSON.parse(localStorage.getItem('a11yPrefs') || '{}');
      Object.assign(state, saved);
    } catch {}
  };
  const save = () => localStorage.setItem('a11yPrefs', JSON.stringify(state));

  const apply = () => {
    html.style.setProperty('--a11y-fontscale', state.fontScale);
    if (state.fontScale !== 1) html.setAttribute('data-a11y-fontscale', '');
    else html.removeAttribute('data-a11y-fontscale');

    body.classList.toggle('a11y-contrast', state.contrast);
    html.classList.toggle('a11y-negative', state.negative);
    html.classList.toggle('a11y-grayscale', state.grayscale);
    body.classList.toggle('a11y-underline', state.underline);
    body.classList.toggle('a11y-readable', state.readable);

    $('a11yHC').setAttribute('aria-pressed', String(state.contrast));
    $('a11yNeg').setAttribute('aria-pressed', String(state.negative));
    $('a11yGray').setAttribute('aria-pressed', String(state.grayscale));
    $('a11yUnder').setAttribute('aria-pressed', String(state.underline));
    $('a11yRead').setAttribute('aria-pressed', String(state.readable));
  };

  const announce = (msg) => { live.textContent = ''; setTimeout(() => live.textContent = msg, 0); };

  $('a11yInc').addEventListener('click', () => {
    state.fontScale = Math.min(2.0, +(state.fontScale + 0.1).toFixed(2));
    apply(); save(); announce('Texto aumentado');
  });
  $('a11yDec').addEventListener('click', () => {
    state.fontScale = Math.max(0.75, +(state.fontScale - 0.1).toFixed(2));
    apply(); save(); announce('Texto diminuído');
  });
  $('a11yHC').addEventListener('click', () => {
    state.contrast = !state.contrast;
    if (state.contrast) state.negative = false;
    apply(); save(); announce(state.contrast ? 'Alto contraste ativado' : 'Alto contraste desativado');
  });
  $('a11yNeg').addEventListener('click', () => {
    state.negative = !state.negative;
    if (state.negative) state.contrast = false;
    apply(); save(); announce(state.negative ? 'Contraste negativo ativado' : 'Contraste negativo desativado');
  });
  $('a11yGray').addEventListener('click', () => {
    state.grayscale = !state.grayscale;
    apply(); save(); announce(state.grayscale ? 'Escala de cinza ativada' : 'Escala de cinza desativada');
  });
  $('a11yUnder').addEventListener('click', () => {
    state.underline = !state.underline;
    apply(); save(); announce(state.underline ? 'Links sublinhados' : 'Links sem sublinhado');
  });
  $('a11yRead').addEventListener('click', () => {
    state.readable = !state.readable;
    apply(); save(); announce(state.readable ? 'Fonte legível ativada' : 'Fonte padrão restaurada');
  });
  $('a11yReset').addEventListener('click', () => {
    Object.assign(state, { fontScale: 1, contrast: false, negative: false, grayscale: false, underline: false, readable: false });
    apply(); save(); announce('Ajustes redefinidos');
  });

  const toggle = $('a11yToggle');
  const toolbar = $('a11yToolbar');

  toggle.addEventListener('click', function(event) {
    event.stopPropagation();
    toolbar.classList.toggle('active');
    const isActive = toolbar.classList.contains('active');
    toggle.setAttribute('aria-expanded', String(isActive));
  });

  document.addEventListener('click', (event) => {
    if (toolbar.classList.contains('active') &&
        !toolbar.contains(event.target) &&
        event.target !== toggle &&
        !toggle.contains(event.target)) {
      toolbar.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  load(); apply();
});
