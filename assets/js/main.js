// 4U.IA.BR Tech Blog Client Scripts, i18n & Instant Search System

function normalizeText(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

function matchesAllTokens(targetNormalized, queryNormalized) {
  if (!queryNormalized) return true;
  const tokens = queryNormalized.split(/\s+/).filter(Boolean);
  return tokens.every(token => targetNormalized.includes(token));
}

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

  // Update search placeholders dynamically
  const homeInput = document.getElementById('homeSearchInput');
  if (homeInput) {
    const ph = homeInput.getAttribute(`data-placeholder-${lang}`);
    if (ph) homeInput.placeholder = ph;
  }
  const modalInput = document.getElementById('modalSearchInput');
  if (modalInput) {
    const ph = modalInput.getAttribute(`data-placeholder-${lang}`);
    if (ph) modalInput.placeholder = ph;
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

  // ==========================================================================
  // 1. Homepage Interactive Live Search & Category Filtering
  // ==========================================================================
  const homeSearchInput = document.getElementById('homeSearchInput');
  const homeSearchClearBtn = document.getElementById('homeSearchClearBtn');
  const searchInfoBar = document.getElementById('searchInfoBar');
  const searchInfoText = document.getElementById('searchInfoText');
  const searchInfoReset = document.getElementById('searchInfoReset');
  const searchNoResults = document.getElementById('searchNoResults');
  const noResultsClearBtn = document.getElementById('noResultsClearBtn');
  const postsCountDisplay = document.getElementById('postsCountDisplay');
  const postsGrid = document.getElementById('postsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const postCards = document.querySelectorAll('.post-card');
  const searchChips = document.querySelectorAll('.search-chip');

  let activeCategory = 'all';
  let activeQuery = '';

  // Index card contents for fast client-side searching
  if (postCards.length > 0) {
    postCards.forEach(card => {
      const searchAttr = card.getAttribute('data-search') || '';
      card._searchIndex = normalizeText(searchAttr + ' ' + card.innerText);
    });
  }

  function applyFilters() {
    if (!postsGrid || postCards.length === 0) return;

    const normQuery = normalizeText(activeQuery);
    let visibleCount = 0;

    postCards.forEach(card => {
      const category = card.getAttribute('data-category');
      const matchesCategory = (activeCategory === 'all' || category === activeCategory);
      const matchesSearch = matchesAllTokens(card._searchIndex, normQuery);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Update post count
    if (postsCountDisplay) {
      postsCountDisplay.textContent = visibleCount;
    }

    // Toggle clear button inside input
    if (homeSearchClearBtn) {
      homeSearchClearBtn.style.display = activeQuery ? 'inline-flex' : 'none';
    }

    // Update search info bar below input
    if (searchInfoBar && searchInfoText) {
      if (activeQuery) {
        searchInfoBar.style.display = 'flex';
        const lang = document.documentElement.getAttribute('data-lang') || 'pt';
        if (lang === 'pt') {
          const plural = visibleCount === 1 ? 'artigo encontrado' : 'artigos encontrados';
          searchInfoText.textContent = `Exibindo ${visibleCount} de ${postCards.length} ${plural} para "${activeQuery}"`;
        } else {
          const plural = visibleCount === 1 ? 'article found' : 'articles found';
          searchInfoText.textContent = `Showing ${visibleCount} of ${postCards.length} ${plural} for "${activeQuery}"`;
        }
      } else {
        searchInfoBar.style.display = 'none';
      }
    }

    // Toggle empty results state
    if (searchNoResults && postsGrid) {
      if (visibleCount === 0) {
        searchNoResults.style.display = 'block';
        postsGrid.style.display = 'none';
      } else {
        searchNoResults.style.display = 'none';
        postsGrid.style.display = 'grid';
      }
    }
  }

  // Handle Home Search Input
  if (homeSearchInput) {
    homeSearchInput.addEventListener('input', (e) => {
      activeQuery = e.target.value.trim();
      applyFilters();
    });

    homeSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        homeSearchInput.value = '';
        activeQuery = '';
        applyFilters();
        homeSearchInput.blur();
      }
    });
  }

  // Handle Clear Buttons
  function clearHomeSearch() {
    if (homeSearchInput) {
      homeSearchInput.value = '';
      homeSearchInput.focus();
    }
    activeQuery = '';
    applyFilters();
  }

  function resetAllFilters() {
    if (homeSearchInput) homeSearchInput.value = '';
    activeQuery = '';
    activeCategory = 'all';

    filterBtns.forEach(btn => {
      if (btn.getAttribute('data-filter') === 'all') {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    applyFilters();
  }

  if (homeSearchClearBtn) homeSearchClearBtn.addEventListener('click', clearHomeSearch);
  if (searchInfoReset) searchInfoReset.addEventListener('click', clearHomeSearch);
  if (noResultsClearBtn) noResultsClearBtn.addEventListener('click', resetAllFilters);

  // Category Filtering
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-filter');
        applyFilters();
      });
    });
  }

  // Suggestion chips in empty state
  if (searchChips.length > 0) {
    searchChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const query = chip.getAttribute('data-search');
        if (homeSearchInput && query) {
          homeSearchInput.value = query;
          activeQuery = query;
          applyFilters();
          homeSearchInput.focus();
        }
      });
    });
  }

  // Check URL query param (e.g. ?q=concreto)
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const qParam = urlParams.get('q');
    if (qParam && homeSearchInput) {
      homeSearchInput.value = qParam;
      activeQuery = qParam;
      applyFilters();
    }
  } catch(e) {}

  // Update search info bar when language is toggled
  window.addEventListener('langchange', () => {
    if (activeQuery) applyFilters();
  });


  // ==========================================================================
  // 2. Global Search Modal (Command Palette / Header Search)
  // ==========================================================================
  const globalSearchTrigger = document.getElementById('globalSearchTrigger');
  const globalSearchModal = document.getElementById('globalSearchModal');
  const modalSearchInput = document.getElementById('modalSearchInput');
  const modalSearchCloseBtn = document.getElementById('modalSearchCloseBtn');
  const modalSearchResults = document.getElementById('modalSearchResults');
  const modalSearchEmpty = document.getElementById('modalSearchEmpty');
  const modalSearchInitial = document.getElementById('modalSearchInitial');
  const modalTagChips = document.querySelectorAll('.modal-tag-chip');

  let searchIndex = null;
  let isFetchingIndex = false;
  let activeResultIndex = -1;

  async function loadSearchIndex() {
    if (searchIndex) return searchIndex;
    if (isFetchingIndex) return [];
    isFetchingIndex = true;
    try {
      // Determine relative path to search.json based on site root
      const rootUrl = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '/';
      const parsedUrl = new URL(rootUrl, window.location.origin);
      const searchJsonUrl = parsedUrl.pathname.endsWith('/') 
        ? parsedUrl.pathname + 'search.json' 
        : parsedUrl.pathname.substring(0, parsedUrl.pathname.lastIndexOf('/') + 1) + 'search.json';

      const res = await fetch(searchJsonUrl);
      if (!res.ok) throw new Error('Failed to load search.json');
      const data = await res.json();
      searchIndex = data.map(item => ({
        ...item,
        _normalized: normalizeText(`${item.title} ${item.title_en} ${item.category} ${(item.tags || []).join(' ')} ${item.excerpt} ${item.excerpt_en}`)
      }));
    } catch (err) {
      console.error('Search index load error:', err);
      searchIndex = [];
    } finally {
      isFetchingIndex = false;
    }
    return searchIndex;
  }

  function openSearchModal(initialQuery = '') {
    if (!globalSearchModal) return;
    globalSearchModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Pre-load index
    loadSearchIndex();

    if (modalSearchInput) {
      modalSearchInput.value = initialQuery;
      modalSearchInput.focus();
      if (initialQuery) {
        runModalSearch(initialQuery);
      } else {
        if (modalSearchResults) modalSearchResults.innerHTML = '';
        if (modalSearchEmpty) modalSearchEmpty.style.display = 'none';
        if (modalSearchInitial) modalSearchInitial.style.display = 'block';
      }
    }
  }

  function closeSearchModal() {
    if (!globalSearchModal) return;
    globalSearchModal.style.display = 'none';
    document.body.style.overflow = '';
    if (modalSearchInput) modalSearchInput.value = '';
    if (modalSearchResults) modalSearchResults.innerHTML = '';
    activeResultIndex = -1;
  }

  async function runModalSearch(query) {
    const normQuery = normalizeText(query);
    if (!normQuery) {
      if (modalSearchResults) modalSearchResults.innerHTML = '';
      if (modalSearchEmpty) modalSearchEmpty.style.display = 'none';
      if (modalSearchInitial) modalSearchInitial.style.display = 'block';
      activeResultIndex = -1;
      return;
    }

    const index = await loadSearchIndex();
    const results = index.filter(item => matchesAllTokens(item._normalized, normQuery)).slice(0, 10);
    const lang = document.documentElement.getAttribute('data-lang') || 'pt';

    if (modalSearchInitial) modalSearchInitial.style.display = 'none';

    if (results.length === 0) {
      if (modalSearchResults) modalSearchResults.innerHTML = '';
      if (modalSearchEmpty) modalSearchEmpty.style.display = 'block';
      activeResultIndex = -1;
    } else {
      if (modalSearchEmpty) modalSearchEmpty.style.display = 'none';

      let html = '';
      results.forEach((item, idx) => {
        const title = (lang === 'en' && item.title_en) ? item.title_en : item.title;
        const excerpt = (lang === 'en' && item.excerpt_en) ? item.excerpt_en : item.excerpt;
        const dateStr = item.date_formatted ? (item.date_formatted[lang] || item.date) : item.date;

        const tagsHtml = (item.tags || []).slice(0, 3).map(t => `<span class="search-modal-tag">#${t}</span>`).join('');

        html += `
          <a href="${item.url}" class="search-modal-item ${idx === 0 ? 'active' : ''}" data-index="${idx}">
            <div class="search-modal-item-top">
              <span class="search-modal-item-title">
                <i class="fas fa-file-alt"></i>
                ${title}
              </span>
              <div style="display:flex; align-items:center; gap:8px; flex-shrink:0;">
                <span style="font-size:0.75rem; color:var(--text-dim); font-family:var(--font-mono);">${dateStr}</span>
                <span class="search-modal-item-category">${item.category}</span>
              </div>
            </div>
            <p class="search-modal-item-excerpt">${excerpt}</p>
            <div class="search-modal-item-tags">
              ${tagsHtml}
            </div>
          </a>
        `;
      });

      if (modalSearchResults) {
        modalSearchResults.innerHTML = html;
        activeResultIndex = 0;
      }
    }
  }

  if (globalSearchTrigger) {
    globalSearchTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      // If we are on homepage and viewport has homeSearchInput, we can focus it smoothly
      if (homeSearchInput && window.innerWidth > 768) {
        homeSearchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        homeSearchInput.focus();
      } else {
        openSearchModal();
      }
    });
  }

  if (modalSearchCloseBtn) {
    modalSearchCloseBtn.addEventListener('click', closeSearchModal);
  }

  if (globalSearchModal) {
    globalSearchModal.addEventListener('click', (e) => {
      if (e.target === globalSearchModal) closeSearchModal();
    });
  }

  if (modalSearchInput) {
    modalSearchInput.addEventListener('input', (e) => {
      runModalSearch(e.target.value);
    });

    modalSearchInput.addEventListener('keydown', (e) => {
      const items = modalSearchResults ? modalSearchResults.querySelectorAll('.search-modal-item') : [];
      if (items.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeResultIndex = (activeResultIndex + 1) % items.length;
        items.forEach((it, i) => it.classList.toggle('active', i === activeResultIndex));
        items[activeResultIndex]?.scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeResultIndex = (activeResultIndex - 1 + items.length) % items.length;
        items.forEach((it, i) => it.classList.toggle('active', i === activeResultIndex));
        items[activeResultIndex]?.scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (activeResultIndex >= 0 && items[activeResultIndex]) {
          window.location.href = items[activeResultIndex].getAttribute('href');
        }
      }
    });
  }

  // Modal tag chips click
  if (modalTagChips.length > 0) {
    modalTagChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const query = chip.getAttribute('data-search');
        if (modalSearchInput && query) {
          modalSearchInput.value = query;
          runModalSearch(query);
          modalSearchInput.focus();
        }
      });
    });
  }

  // Keyboard Shortcuts (Ctrl+K, Cmd+K, /, Esc)
  document.addEventListener('keydown', (e) => {
    // Ctrl+K or Cmd+K
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (globalSearchModal && globalSearchModal.style.display === 'flex') {
        closeSearchModal();
      } else {
        openSearchModal();
      }
      return;
    }

    // Escape closes modal
    if (e.key === 'Escape') {
      if (globalSearchModal && globalSearchModal.style.display === 'flex') {
        closeSearchModal();
        return;
      }
    }

    // Pressing '/' to focus home search (when not in an input/textarea)
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
      if (homeSearchInput) {
        e.preventDefault();
        homeSearchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        homeSearchInput.focus();
      } else if (globalSearchModal) {
        e.preventDefault();
        openSearchModal();
      }
    }
  });


  // ==========================================================================
  // 3. Code Block Copy Buttons
  // ==========================================================================
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

  // ==========================================================================
  // 4. Dark / Light Theme Ergonomics & Persistence
  // ==========================================================================
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIconSun = document.getElementById('themeIconSun');
  const themeIconMoon = document.getElementById('themeIconMoon');

  function updateThemeUI(theme) {
    if (themeIconSun && themeIconMoon) {
      if (theme === 'light') {
        themeIconSun.style.display = 'inline-block';
        themeIconMoon.style.display = 'none';
      } else {
        themeIconSun.style.display = 'none';
        themeIconMoon.style.display = 'inline-block';
      }
    }
  }

  // Get current active theme
  const initialTheme = document.documentElement.getAttribute('data-theme') || 
    (localStorage.getItem('4ulabs_theme') || 'dark');
  document.documentElement.setAttribute('data-theme', initialTheme);
  updateThemeUI(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      const newTheme = activeTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      try {
        localStorage.setItem('4ulabs_theme', newTheme);
      } catch (e) {}
      updateThemeUI(newTheme);
    });
  }

  // ==========================================================================
  // 5. Reading Progress Bar & Floating Back to Top Button
  // ==========================================================================
  const readingProgressFill = document.getElementById('readingProgressFill');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Progress Bar
    if (readingProgressFill && docHeight > 0) {
      const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      readingProgressFill.style.width = progress + '%';
    }

    // Back to Top Button
    if (backToTopBtn) {
      if (scrollTop > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================================================
  // 6. Article Reading Time Estimation
  // ==========================================================================
  const readingTimeValue = document.getElementById('readingTimeValue');
  const postBody = document.querySelector('.post-body');

  if (readingTimeValue && postBody) {
    const textContent = postBody.innerText || '';
    const words = textContent.trim().split(/\s+/).filter(w => w.length > 0).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    readingTimeValue.textContent = `${minutes} min`;
  }

  // ==========================================================================
  // 7. Automated Table of Contents (TOC)
  // ==========================================================================
  const postToc = document.getElementById('postToc');
  const tocBody = document.getElementById('tocBody');
  const tocToggleBtn = document.getElementById('tocToggleBtn');
  const tocHeader = document.getElementById('tocHeader');
  const tocChevron = document.getElementById('tocChevron');

  if (postToc && tocBody && postBody) {
    const headings = Array.from(postBody.querySelectorAll('h2, h3')).filter(h => {
      return !h.closest('.related-posts-section') && 
             !h.closest('.post-cta-box') && 
             !h.closest('.post-tags-section') &&
             !h.closest('#postToc');
    });

    if (headings.length >= 2) {
      const tocList = document.createElement('ul');
      tocList.className = 'toc-list';

      headings.forEach((heading, idx) => {
        if (!heading.id) {
          const slug = heading.textContent
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
          heading.id = slug || `section-${idx + 1}`;
        }

        const li = document.createElement('li');
        li.className = `toc-item toc-level-${heading.tagName.toLowerCase() === 'h3' ? '3' : '2'}`;

        const link = document.createElement('a');
        link.className = 'toc-link';
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent.trim();

        link.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.getElementById(heading.id);
          if (target) {
            const yOffset = -75;
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            history.pushState(null, '', `#${heading.id}`);
          }
        });

        li.appendChild(link);
        tocList.appendChild(li);
      });

      tocBody.appendChild(tocList);
      postToc.style.display = 'block';

      let isCollapsed = false;
      function toggleToc() {
        isCollapsed = !isCollapsed;
        tocBody.style.display = isCollapsed ? 'none' : 'block';
        if (tocChevron) {
          tocChevron.style.transform = isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)';
        }
      }

      if (tocToggleBtn) {
        tocToggleBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleToc();
        });
      }
      if (tocHeader) {
        tocHeader.addEventListener('click', toggleToc);
      }
    }
  }

  // ==========================================================================
  // 8. Custom Toast Notification & Copy Link Handler
  // ==========================================================================
  const toastPopup = document.getElementById('toastPopup');
  const toastText = document.getElementById('toastText');
  let toastTimer = null;

  function showToast(message) {
    if (!toastPopup) return;
    if (toastText) toastText.textContent = message;
    toastPopup.style.display = 'flex';

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastPopup.style.display = 'none';
    }, 2800);
  }

  const postCopyLinkBtn = document.getElementById('postCopyLinkBtn');
  if (postCopyLinkBtn) {
    postCopyLinkBtn.addEventListener('click', () => {
      const url = window.location.href;
      navigator.clipboard.writeText(url).then(() => {
        const lang = document.documentElement.getAttribute('data-lang') || 'pt';
        const msg = lang === 'en' ? 'Link copied to clipboard!' : 'Link copiado com sucesso!';
        showToast(msg);
      }).catch(() => {
        showToast('Erro ao copiar link.');
      });
    });
  }

  // ==========================================================================
  // 9. KaTeX Auto-Render Math Initialization
  // ==========================================================================
  function runKaTeX() {
    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false,
        ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
      });
    }
  }

  if (typeof renderMathInElement === 'function') {
    runKaTeX();
  } else {
    window.addEventListener('load', runKaTeX);
  }

  // ==========================================================================
  // 10. Direct Heading Anchors (#) with Copy & Smooth Scroll
  // ==========================================================================
  if (postBody) {
    postBody.querySelectorAll('h2, h3').forEach((heading) => {
      if (heading.closest('#postToc') || 
          heading.closest('.related-posts-section') || 
          heading.closest('.post-cta-box') || 
          heading.closest('.post-tags-section')) return;

      if (!heading.id) {
        const slug = heading.textContent
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        heading.id = slug;
      }

      const anchor = document.createElement('a');
      anchor.className = 'heading-anchor';
      anchor.href = `#${heading.id}`;
      anchor.innerHTML = '<i class="fas fa-hashtag"></i>';
      anchor.title = 'Copiar link desta seção';
      anchor.setAttribute('aria-label', 'Copiar link da seção');

      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const url = new URL(window.location.href);
        url.hash = heading.id;
        navigator.clipboard.writeText(url.toString()).then(() => {
          const lang = document.documentElement.getAttribute('data-lang') || 'pt';
          showToast(lang === 'en' ? 'Section link copied!' : 'Link da seção copiado!');
          history.pushState(null, '', `#${heading.id}`);
          const yOffset = -75;
          const y = heading.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        });
      });

      heading.appendChild(anchor);
    });
  }
});


