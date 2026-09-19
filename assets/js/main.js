// 4U.IA.BR Tech Blog Client Scripts & i18n
function getPreferredLanguage() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam === 'en' || langParam === 'pt') return langParam;

    const savedLang = localStorage.getItem('4ulabs_blog_lang');
    if (savedLang === 'en' || savedLang === 'pt') return savedLang;

    if (navigator.language && navigator.language.startsWith('en')) return 'en';
  } catch(e) {}
  return 'pt';
}

function setBlogLang(lang) {
  if (lang !== 'en' && lang !== 'pt') lang = 'pt';
  document.documentElement.setAttribute('data-lang', lang);
  try {
    localStorage.setItem('4ulabs_blog_lang', lang);
  } catch(e) {}

  // Update switcher buttons
  const btnPt = document.getElementById('btn-pt');
  const btnEn = document.getElementById('btn-en');
  if (btnPt && btnEn) {
    if (lang === 'pt') {
      btnPt.classList.add('active');
      btnEn.classList.remove('active');
    } else {
      btnEn.classList.add('active');
      btnPt.classList.remove('active');
    }
  }

  // Dispatch custom event if other components need to re-render
  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

// Initialise language immediately
(function() {
  const lang = getPreferredLanguage();
  document.documentElement.setAttribute('data-lang', lang);
})();

document.addEventListener('DOMContentLoaded', () => {
  // Sync buttons state on DOM ready
  const currentLang = document.documentElement.getAttribute('data-lang') || 'pt';
  setBlogLang(currentLang);

  // Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const postCards = document.querySelectorAll('.post-card');

  if (filterBtns.length > 0 && postCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        postCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Add copy button to code blocks
  document.querySelectorAll('pre').forEach((block) => {
    const button = document.createElement('button');
    button.className = 'copy-code-btn';
    button.innerHTML = '<i class="fas fa-copy"></i>';
    button.title = 'Copiar código';
    
    button.style.position = 'absolute';
    button.style.top = '10px';
    button.style.right = '10px';
    button.style.background = 'rgba(255, 255, 255, 0.1)';
    button.style.border = 'none';
    button.style.borderRadius = '4px';
    button.style.color = '#94a3b8';
    button.style.padding = '4px 8px';
    button.style.cursor = 'pointer';
    button.style.fontSize = '12px';

    block.style.position = 'relative';
    block.appendChild(button);

    button.addEventListener('click', () => {
      const code = block.querySelector('code') ? block.querySelector('code').innerText : block.innerText;
      navigator.clipboard.writeText(code).then(() => {
        button.innerHTML = '<i class="fas fa-check" style="color:#10b981"></i>';
        setTimeout(() => {
          button.innerHTML = '<i class="fas fa-copy"></i>';
        }, 2000);
      });
    });
  });
});
