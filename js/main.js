/* ═══════════════════════════════════════════════════════════════
   Portfolio R&D — Artur Flamandzki
   main.js  ·  i18n engine + navigation + accordion
   ═══════════════════════════════════════════════════════════════

   HOW THE i18n SYSTEM WORKS
   ─────────────────────────
   Locale files (locales/en.js, locales/pl.js, …) register themselves
   into window.i18nData[langCode] before this script runs.

   main.js reads window.i18nData, builds the language switcher
   buttons automatically, then applies the stored/default language.

   To add a new language:
     1. Create locales/XX.js  (copy en.js, translate values, set _langName)
     2. Add  <script src="locales/XX.js"></script>  in index.html
        before <script src="js/main.js"></script>
   That's all — the switcher appears automatically.
   ═══════════════════════════════════════════════════════════════ */

'use strict';

/* ── i18n core ───────────────────────────────────────────────── */
const i18n = (function () {
  const DEFAULT_LANG = 'en';
  const LS_KEY       = 'af_lang';
  let   _trans       = {};

  /** Resolve a dot-notation key against the loaded translations */
  function t(key) {
    const val = key.split('.').reduce((o, k) => (o != null ? o[k] : undefined), _trans);
    return val !== undefined ? val : key;
  }

  /** Apply translations to every [data-i18n] and [data-i18n-html] element */
  function _applyDOM() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = t(el.dataset.i18n);
      if (typeof val === 'string') el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const val = t(el.dataset.i18nHtml);
      if (typeof val === 'string') el.innerHTML = val;
    });
    // Update sticky nav titles when language changes
    const lang = document.documentElement.lang || 'en';
    document.querySelectorAll('[data-pns-num]').forEach(el => {
      const num = el.dataset.pnsNum;
      el.textContent = (PROJECT_TITLES[num] || {})[lang] || '';
    });
  }

  /** Switch to a language; persists choice in localStorage */
  function setLang(lang) {
    const data = window.i18nData || {};
    if (!data[lang]) lang = DEFAULT_LANG;
    _trans = data[lang] || {};

    // Page meta
    const title = t('page.title');
    if (title !== 'page.title') document.title = title;
    const desc = document.querySelector('meta[name="description"]');
    const descVal = t('page.description');
    if (desc && descVal !== 'page.description') desc.content = descVal;

    document.documentElement.lang = lang;
    localStorage.setItem(LS_KEY, lang);
    _applyDOM();
    _updateSwitcherState(lang);
  }

  /** Build language switcher buttons from all registered locales */
  function buildSwitcher() {
    const container = document.getElementById('langSwitcher');
    if (!container) return;

    const data = window.i18nData || {};
    const savedLang = localStorage.getItem(LS_KEY) || DEFAULT_LANG;

    Object.entries(data).forEach(([code, trans]) => {
      const btn = document.createElement('button');
      btn.className  = 'lang-btn' + (code === savedLang ? ' active' : '');
      btn.textContent = trans._langName || code.toUpperCase();
      btn.dataset.lang = code;
      btn.setAttribute('aria-label', 'Switch language to ' + (trans._langName || code));
      btn.addEventListener('click', () => setLang(code));
      container.appendChild(btn);
    });
  }

  function _updateSwitcherState(activeLang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === activeLang);
    });
  }

  function init() {
    buildSwitcher();
    const saved = localStorage.getItem(LS_KEY) || DEFAULT_LANG;
    setLang(saved);
  }

  return { init, setLang, t };
})();


/* ── Sticky nav: highlight active section ────────────────────── */
(function initActiveNav() {
  const links    = document.querySelectorAll('.nav-links a');
  const sections = Array.from(document.querySelectorAll('section[id]'));
  if (!links.length || !sections.length) return;

  const NAV_H = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '64'
  );

  function setActive() {
    const scrollY = window.scrollY + NAV_H + 24;
    let current = '';
    for (const sec of sections) {
      if (sec.offsetTop <= scrollY) current = sec.id;
    }
    links.forEach(a => {
      const href = a.getAttribute('href');
      a.classList.toggle('active', href === '#' + current);
    });
  }

  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
})();


/* ── Mobile hamburger menu ───────────────────────────────────── */
(function initMobileMenu() {
  const toggle  = document.getElementById('navToggle');
  const navList = document.getElementById('navLinks');
  if (!toggle || !navList) return;

  toggle.addEventListener('click', () => {
    const open = navList.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  navList.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navList.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();


/* ── Accordion ───────────────────────────────────────────────── */
(function initAccordion() {
  const items = document.querySelectorAll('.accordion-item');
  if (!items.length) return;

  items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    if (!header) return;
    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      items.forEach(i => {
        i.classList.remove('open');
        const h = i.querySelector('.accordion-header');
        if (h) h.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();


/* ── Smooth scroll fallback ──────────────────────────────────── */
(function initSmoothScroll() {
  if ('scrollBehavior' in document.documentElement.style) return;
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const NAV_H = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '64'
      );
      window.scrollTo({ top: target.offsetTop - NAV_H - 12, behavior: 'smooth' });
    });
  });
})();


/* ── Project filter ──────────────────────────────────────────── */
function initProjectFilter() {
  const filterGroup = document.getElementById('projectFilter');
  if (!filterGroup) return;
  const rows = document.querySelectorAll('tbody tr[data-cat]');
  filterGroup.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    filterGroup.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    rows.forEach(row => {
      row.classList.toggle('filter-hidden', filter !== 'all' && row.dataset.cat !== filter);
    });
  });
}


/* ── Image lightbox ──────────────────────────────────────────── */
function initLightbox() {
  const overlay = document.createElement('div');
  overlay.id = 'lightbox';
  overlay.innerHTML = '<img id="lightbox-img" />';
  document.body.appendChild(overlay);

  overlay.addEventListener('click', () => overlay.classList.remove('open'));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') overlay.classList.remove('open');
  });

  document.addEventListener('click', e => {
    const el = e.target;
    if (el.tagName !== 'IMG') return;
    if (!el.closest('.proj-figure') && !el.closest('.proj-figure-row')) return;
    e.preventDefault();
    document.getElementById('lightbox-img').src = el.src;
    overlay.classList.add('open');
  });
}

/* ── Bilingual project title lookup for sticky nav ───────────── */
const PROJECT_TITLES = {
  '01': { en: 'Boiler Controller',              pl: 'Sterownik Pieca CO' },
  '02': { en: 'Battery Speaker',                pl: 'Głośnik Bateryjny' },
  '03': { en: 'LPG Injector Calibrator',        pl: 'Kalibrator Wtryskiwaczy LPG' },
  '04': { en: 'Car Voltmeter WST',              pl: 'Woltomierz Samochodowy WST' },
  '05': { en: 'DELFI Racing: Timing System',    pl: 'DELFI Racing: Pomiar Czasu' },
  '06': { en: 'LX-DK: Password Reset',          pl: 'LX-DK: Reset Haseł' },
  '07': { en: 'LX-GT01: Code Generator',        pl: 'LX-GT01: Generator Kodów' },
  '08': { en: 'LX-EMI01: EEPROM Editor',        pl: 'LX-EMI01: Edytor EEPROM' },
  '09': { en: 'Divisor Algorithm',              pl: 'Algorytm Dzielników' },
  '10': { en: 'Boiler Thermometer',             pl: 'Termometr Pieca CO' },
  '11': { en: 'ACŁ Timing System',              pl: 'System Pomiaru Czasu ACŁ' },
  '12': { en: 'USB-RS232 Converter',            pl: 'Konwerter USB-RS232' },
  '13': { en: 'BAGRAMET Controller',            pl: 'Sterownik BAGRAMET' },
  '14': { en: 'RGB LED Fun',                    pl: 'RGB LED Fun' },
  '15': { en: 'CO₂ Laser',                      pl: 'Laser CO₂' },
  '16': { en: 'TrueSynth: Trig Library',        pl: 'TrueSynth: Bibl. Trygonometryczna' },
  '17': { en: 'Relational Mathematics',         pl: 'Matematyka Relacyjna' },
  '18': { en: 'Resona: Trajectory Model',       pl: 'Resona: Model Trajektorowy' },
  '19': { en: 'FochBot: AI Assistant',          pl: 'FochBot: Asystent AI' },
  '20': { en: 'MR-AI: Rhythmic Framework',      pl: 'MR-AI: Framework Rytmiczny' },
  '21': { en: 'HPC Factorisation',              pl: 'HPC Faktoryzacja' },
  '22': { en: 'Smart Home',                     pl: 'Inteligentny Dom' },
};

/* ── Shared project footer (injected) ────────────────────────── */
function renderProjectFooter() {
  const footer = document.querySelector('footer.site-footer');
  if (!footer) return;

  const prev    = footer.dataset.prev || '';
  const next    = footer.dataset.next || '';
  const prevNum = (prev.match(/p(\d+)/) || [])[1] || '';
  const nextNum = (next.match(/p(\d+)/) || [])[1] || '';

  footer.innerHTML =
    '<div class="container footer-inner">' +
      '<div class="footer-links">' +
        '<a href="mailto:flamandzki.artur@gmail.com">✉ flamandzki.artur@gmail.com</a>' +
        '<a href="https://millenniumchecked.org" target="_blank" rel="noopener">millenniumchecked.org</a>' +
        '<a href="https://relationalmathematics.org" target="_blank" rel="noopener">relationalmathematics.org</a>' +
        '<a href="https://zenodo.org/search?q=Flamandzki" target="_blank" rel="noopener">Zenodo</a>' +
        '<a href="https://github.com/Flaman55/RelMathApps" target="_blank" rel="noopener">GitHub</a>' +
        '<a href="https://www.linkedin.com/in/artur-flamandzki-74046918b/" target="_blank" rel="noopener">LinkedIn</a>' +
      '</div>' +
      '<p data-i18n-html="footer.text"></p>' +
      '<p style="margin-top:.4rem"><a href="../../index.html" class="footer-back">← Portfolio R&amp;D</a></p>' +
    '</div>';

  if (!prev && !next) return;

  const bar = document.createElement('div');
  bar.className = 'proj-nav-sticky';
  bar.innerHTML =
    (prev
      ? '<a href="' + prev + '" class="proj-nav-sticky-btn">' +
          '<span class="pns-arrow">←</span>' +
          '<span class="pns-label">#' + prevNum + '</span>' +
          '<span class="pns-title" data-pns-num="' + prevNum + '"></span>' +
        '</a>'
      : '<span></span>') +
    '<a href="../../index.html" class="pns-home" title="Portfolio">⌂</a>' +
    (next
      ? '<a href="' + next + '" class="proj-nav-sticky-btn">' +
          '<span class="pns-title" data-pns-num="' + nextNum + '"></span>' +
          '<span class="pns-label">#' + nextNum + '</span>' +
          '<span class="pns-arrow">→</span>' +
        '</a>'
      : '<span></span>');
  document.body.appendChild(bar);
  document.body.classList.add('has-sticky-nav');
}

/* ── Boot ────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderProjectFooter();
  i18n.init();
  initProjectFilter();
  initLightbox();
});
