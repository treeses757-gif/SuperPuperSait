function initMenu() {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  const overlay = document.getElementById('overlay');
  const settingsBtn = document.getElementById('settingsBtn');
  const settingsPanel = document.getElementById('settingsPanel');

  if (!burger || !nav || !overlay) return;

  const closeMenu = () => {
    burger.classList.remove('is-active');
    nav.classList.remove('is-open');
    overlay.classList.remove('is-visible');
  };

  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-open');
    overlay.classList.toggle('is-visible');
  });

  overlay.addEventListener('click', () => {
    closeMenu();
    settingsPanel.classList.remove('is-open');
  });

  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  nav.querySelectorAll('.lang__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      nav.querySelectorAll('.lang__btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });

  if (settingsBtn && settingsPanel) {
    settingsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      settingsPanel.classList.toggle('is-open');
    });

    document.addEventListener('click', (e) => {
      if (!settingsPanel.contains(e.target) && e.target !== settingsBtn) {
        settingsPanel.classList.remove('is-open');
      }
    });

    settingsPanel.querySelectorAll('.swatch[data-theme]').forEach(sw => {
      sw.addEventListener('click', () => setAccent(sw.dataset.theme));
    });

    settingsPanel.querySelectorAll('.mode-btn').forEach(b => {
      b.addEventListener('click', () => setMode(b.dataset.mode));
    });
  }
}