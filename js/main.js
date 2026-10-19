function initAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach((el, i) => {
    el.style.animationDelay = (i * 0.1) + 's';
    observer.observe(el);
  });

  const statValues = document.querySelectorAll('.stat__value');
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = Math.floor(current).toLocaleString('ru-RU');
        }, 25);
        statObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statValues.forEach(el => statObserver.observe(el));
}

function initToTop() {
  const toTop = document.getElementById('toTop');
  if (!toTop) return;

  window.addEventListener('scroll', () => {
    toTop.classList.toggle('is-visible', window.scrollY > 300);
  });

  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initOnline() {
  const el = document.getElementById('onlineCount');
  if (!el) return;

  const { min, max, interval } = SITE_CONFIG.online;
  const update = () => {
    el.textContent = Math.floor(Math.random() * (max - min)) + min;
  };
  update();
  setInterval(update, interval);
}

function initParallax() {
  const bg = document.getElementById('parallaxBg');
  if (!bg) return;

  if (window.innerWidth <= 768) return;

  window.addEventListener('scroll', () => {
    bg.style.transform = `translateY(${window.scrollY * 0.5}px)`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderPage();
  initMenu();
  initProgress();
  initAnimations();
  initToTop();
  initOnline();
  initParallax();
});