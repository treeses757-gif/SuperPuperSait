const RENDERERS = {
  'page-head': (d) => `
    <div class="container">
      <div class="section__head">
        <h2 class="section__title">${d.title}</h2>
        <p class="section__sub">${d.sub}</p>
      </div>
    </div>`,

  hero: (d) => `
    <div class="hero">
      <div class="container hero__inner">
        <div class="hero__content">
          <span class="badge">${d.badge}</span>
          <h1 class="hero__title">${d.title}</h1>
          <p class="hero__subtitle">${d.subtitle}</p>
          <p class="hero__text">${d.text}</p>
          <div class="hero__actions">
            <button class="btn btn--primary" type="button">${d.primaryBtn}</button>
            <a class="btn btn--secondary" href="${d.secondaryHref}">${d.secondaryBtn}</a>
          </div>
        </div>
        <div class="hero__art">
          <div class="placeholder">Скриншот</div>
        </div>
      </div>
    </div>`,

  platforms: (d) => `
    <div class="container">
      <div class="platforms">
        ${d.items.map(i => `
          <div class="platform">
            <span class="platform__icon">${i.icon}</span>
            <span class="platform__name">${i.name}</span>
          </div>`).join('')}
      </div>
    </div>`,

  stats: (d) => `
    <div class="container">
      <div class="stats">
        ${d.items.map(i => `
          <div class="stat">
            <span class="stat__value" data-count="${i.value}">0</span>
            <span class="stat__label">${i.label}</span>
          </div>`).join('')}
      </div>
    </div>`,

  features: (d) => `
    <div class="container">
      <div class="section__head">
        <h2 class="section__title">${d.title}</h2>
        <p class="section__sub">${d.sub}</p>
      </div>
      <div class="features">
        ${d.items.map(i => `
          <article class="card">
            <span class="card__icon">${i.icon}</span>
            <h3 class="card__title">${i.title}</h3>
            <p class="card__text">${i.text}</p>
          </article>`).join('')}
      </div>
    </div>`,

  beta: (d) => `
    <div class="container" id="${d.id || ''}">
      <div class="beta">
        <div class="beta__content">
          <h2 class="section__title">${d.title}</h2>
          <p class="section__sub">${d.sub}</p>
          <ul class="list">
            ${d.list.map(li => `<li>${li}</li>`).join('')}
          </ul>
          <div class="beta__actions">
            <button class="btn btn--primary" type="button">${d.primaryBtn}</button>
            <button class="btn btn--secondary" type="button">${d.secondaryBtn}</button>
          </div>
        </div>
        <div class="placeholder placeholder--tall">Скриншот</div>
      </div>
    </div>`,

  progress: (d) => `
    <div class="container" id="${d.id || ''}">
      <div class="section__head">
        <h2 class="section__title">${d.title}</h2>
        <p class="section__sub">${d.sub}</p>
      </div>
      <div class="progress">
        <div class="progress__top">
          <span class="progress__value" id="progressValue">0 ₽</span>
          <span class="progress__goal">цель: <span id="progressGoal">0 ₽</span></span>
        </div>
        <div class="progress__track">
          <div class="progress__fill" id="progressFill"></div>
        </div>
        <div class="progress__bottom">
          <span>собрано <b id="progressPercent">0%</b></span>
          <span>${d.note}</span>
        </div>
      </div>
    </div>`,

  roadmap: (d) => `
    <div class="container">
      <div class="section__head">
        <h2 class="section__title">${d.title}</h2>
        <p class="section__sub">${d.sub}</p>
      </div>
      <div class="roadmap">
        ${d.items.map(i => `
          <div class="roadmap__item ${i.status ? 'is-' + i.status : ''}">
            <span class="roadmap__date">${i.date}</span>
            <h3 class="roadmap__title">${i.title}</h3>
            <p class="roadmap__text">${i.text}</p>
          </div>`).join('')}
      </div>
    </div>`,

  reviews: (d) => `
    <div class="container">
      <div class="section__head">
        <h2 class="section__title">${d.title}</h2>
        <p class="section__sub">${d.sub}</p>
      </div>
      <div class="reviews">
        ${d.items.map(r => `
          <blockquote class="review">
            <p class="review__text">«${r.text}»</p>
            <footer class="review__footer">
              <span class="review__author">${r.author}</span>
              <span class="review__role">${r.role}</span>
            </footer>
          </blockquote>`).join('')}
      </div>
    </div>`,

  shots: (d) => `
    <div class="container">
      <div class="section__head">
        <h2 class="section__title">${d.title}</h2>
        <p class="section__sub">${d.sub}</p>
      </div>
      <div class="shots">
        ${d.items.map(cap => `
          <div class="shot">
            <div class="placeholder">Скриншот</div>
            <span class="shot__caption">${cap}</span>
          </div>`).join('')}
      </div>
    </div>`,

  requirements: (d) => `
    <div class="container">
      <div class="section__head">
        <h2 class="section__title">${d.title}</h2>
        <p class="section__sub">${d.sub}</p>
      </div>
      <div class="requirements">
        ${d.columns.map(c => `
          <div class="requirements__col">
            <h3 class="requirements__title">${c.title}</h3>
            <ul class="requirements__list">
              ${c.items.map(i => `<li>${i}</li>`).join('')}
            </ul>
          </div>`).join('')}
      </div>
    </div>`,

  faq: (d) => `
    <div class="container">
      <div class="section__head">
        <h2 class="section__title">${d.title}</h2>
        <p class="section__sub">${d.sub}</p>
      </div>
      <div class="faq">
        ${d.items.map(i => `
          <details class="faq__item">
            <summary class="faq__question">${i.q}</summary>
            <p class="faq__answer">${i.a}</p>
          </details>`).join('')}
      </div>
    </div>`,

  newsletter: (d) => `
    <div class="container">
      <div class="newsletter">
        <div class="newsletter__content">
          <h2 class="newsletter__title">${d.title}</h2>
          <p class="newsletter__text">${d.sub}</p>
        </div>
        <form class="newsletter__form" onsubmit="event.preventDefault(); this.reset(); this.querySelector('.newsletter__input').placeholder='Спасибо!';">
          <input class="newsletter__input" type="email" placeholder="${d.placeholder}" required>
          <button class="btn btn--primary" type="submit">${d.buttonText}</button>
        </form>
      </div>
    </div>`,

  cta: (d) => `
    <div class="container">
      <div class="cta">
        <h2 class="cta__title">${d.title}</h2>
        <p class="cta__text">${d.text}</p>
        <div class="cta__actions">
          <button class="btn btn--primary" type="button">${d.primaryBtn}</button>
          <a class="btn btn--secondary" href="${d.secondaryHref}">${d.secondaryBtn}</a>
        </div>
      </div>
    </div>`,

  about: (d) => `
    <div class="container">
      <div class="about">
        <div class="about__avatar">
          <div class="placeholder placeholder--avatar">${d.avatar}</div>
        </div>
        <div class="about__content">
          <h3 class="about__name">${d.name}</h3>
          ${d.text.map(p => `<p class="about__text">${p}</p>`).join('')}
          <div class="about__stats">
            ${d.stats.map(s => `
              <div class="about__stat">
                <span class="about__stat-value">${s.value}</span>
                <span class="about__stat-label">${s.label}</span>
              </div>`).join('')}
          </div>
        </div>
      </div>
    </div>`,

  presskit: (d) => `
    <div class="container">
      <div class="section__head">
        <h2 class="section__title">${d.title}</h2>
        <p class="section__sub">${d.sub}</p>
      </div>
      <div class="presskit">
        ${d.items.map(i => `
          <a class="presskit__item" href="#">
            <span class="presskit__icon">↓</span>
            <div class="presskit__info">
              <span class="presskit__name">${i.name}</span>
              <span class="presskit__desc">${i.desc}</span>
            </div>
          </a>`).join('')}
      </div>
    </div>`,

  contacts: (d) => `
    <div class="container">
      <div class="contacts">
        ${d.items.map(i => `<a class="contact" href="#">${i}</a>`).join('')}
      </div>
    </div>`,

  'news-list': (d) => `
    <div class="container">
      <div class="news">
        ${d.items.map(n => `
          <article class="news__item">
            <span class="news__date">${n.date}</span>
            <h3 class="news__title">${n.title}</h3>
            <p class="news__text">${n.text}</p>
            <a class="news__link" href="#">Читать далее</a>
          </article>`).join('')}
      </div>
    </div>`,

  changelog: (d) => `
    <div class="container">
      <div class="section__head">
        <h2 class="section__title">${d.title}</h2>
        <p class="section__sub">${d.sub}</p>
      </div>
      <div class="changelog">
        ${d.items.map(v => `
          <div class="changelog__item">
            <div class="changelog__head">
              <span class="changelog__version">v${v.version}</span>
              <span class="changelog__date">${v.date}</span>
            </div>
            <ul class="changelog__list">
              ${v.changes.map(c => `<li>${c}</li>`).join('')}
            </ul>
          </div>`).join('')}
      </div>
    </div>`
};

function renderHeader() {
  document.getElementById('logoMark').textContent = SITE_CONFIG.logoMark;
  document.getElementById('logoText').textContent = SITE_CONFIG.name;

  const currentPage = document.body.dataset.page || 'index';
  const nav = document.getElementById('nav');
  nav.innerHTML = SITE_CONFIG.nav.map(l => `
    <a class="nav__link ${l.page === currentPage ? 'is-active' : ''}" href="${l.href}">${l.label}</a>
  `).join('') + `
    <div class="lang">
      <button class="lang__btn is-active" type="button">RU</button>
      <button class="lang__btn" type="button">EN</button>
    </div>`;
}

function renderFooter() {
  const footer = document.getElementById('footer');
  footer.innerHTML = `
    <div class="container footer__inner">
      <span class="footer__copy">${SITE_CONFIG.copyright}</span>
      <div class="footer__links">
        ${SITE_CONFIG.footerLinks.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
      </div>
    </div>`;
}

function renderPage() {
  const page = document.body.dataset.page || 'index';
  const sections = CONTENT[page] || [];
  const app = document.getElementById('app');

  app.innerHTML = sections.map(s => {
    const render = RENDERERS[s.type];
    if (!render) return '';
    const isFullWidth = ['hero'].includes(s.type);
    const cls = isFullWidth ? 'reveal' : 'section reveal';
    return `<section class="${cls}">${render(s)}</section>`;
  }).join('');

  renderHeader();
  renderFooter();
}