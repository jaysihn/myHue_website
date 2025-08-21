
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Auto-load screenshots named shot-1..shot-12 with common extensions
  const grid = document.getElementById('gallery-grid');
  if (grid) {
    const base = 'assets/img/screenshots/shot-';
    const max = 12;
    const exts = ['jpg','png','jpeg','webp'];
    const found = [];
    function trySetCTA() {
      const ctaImg = document.getElementById('cta-shot');
      if (ctaImg && found.length > 0) ctaImg.src = found[0];
    }
    for (let i = 1; i <= max; i++) {
      for (const ext of exts) {
        const src = `${base}${i}.${ext}`;
        const test = new Image();
        test.onload = () => {
          const el = document.createElement('img');
          el.src = src;
          el.alt = `myHue screenshot ${i}`;
          grid.appendChild(el);
          found.push(src);
          trySetCTA();
        };
        test.onerror = () => {};
        test.src = src;
      }
    }
  }
});
