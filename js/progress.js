function initProgress() {
  const fill = document.getElementById('progressFill');
  const valueEl = document.getElementById('progressValue');
  const percentEl = document.getElementById('progressPercent');
  const goalEl = document.getElementById('progressGoal');

  if (!fill || !valueEl || !percentEl || !goalEl) return;

  const target = SITE_CONFIG.donate.current;
  const goal = SITE_CONFIG.donate.goal;
  const cur = SITE_CONFIG.donate.currency;

  goalEl.textContent = goal.toLocaleString('ru-RU') + ' ' + cur;

  let current = 0;
  const duration = 1500;
  const start = performance.now();

  const animate = (time) => {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    current = Math.floor(eased * target);
    fill.style.width = (current / goal) * 100 + '%';
    valueEl.textContent = current.toLocaleString('ru-RU') + ' ' + cur;
    percentEl.textContent = Math.round((current / goal) * 100) + '%';
    if (progress < 1) requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
}