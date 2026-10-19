const THEMES = {
  coral: {
    '--primary': '#ff6b5b',
    '--primary-dark': '#e05545',
    '--secondary': '#ffd93d',
    '--primary-rgb': '255, 107, 91',
    '--secondary-rgb': '255, 217, 61'
  },
  yellow: {
    '--primary': '#ffd93d',
    '--primary-dark': '#e0b82a',
    '--secondary': '#ff6b5b',
    '--primary-rgb': '255, 217, 61',
    '--secondary-rgb': '255, 107, 91'
  }
};

const ACCENT_KEY = 'robo-accent';
const MODE_KEY = 'robo-mode';

function applyAccent(name) {
  const theme = THEMES[name] || THEMES.coral;
  Object.entries(theme).forEach(([k, v]) => {
    document.documentElement.style.setProperty(k, v);
  });
  document.querySelectorAll('.swatch[data-theme]').forEach(s => {
    s.classList.toggle('is-active', s.dataset.theme === name);
  });
}

function applyMode(name) {
  document.documentElement.setAttribute('data-mode', name);
  document.querySelectorAll('.mode-btn').forEach(b => {
    b.classList.toggle('is-active', b.dataset.mode === name);
  });
}

function initTheme() {
  const accent = localStorage.getItem(ACCENT_KEY) || 'coral';
  const mode = localStorage.getItem(MODE_KEY) || 'dark';
  applyAccent(accent);
  applyMode(mode);
}

function setAccent(name) {
  localStorage.setItem(ACCENT_KEY, name);
  applyAccent(name);
}

function setMode(name) {
  localStorage.setItem(MODE_KEY, name);
  applyMode(name);
}