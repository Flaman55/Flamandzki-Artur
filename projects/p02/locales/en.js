(function () {
  window.i18nData = window.i18nData || {};
  window.i18nData['en'] = window.i18nData['en'] || {};
  const existing = window.i18nData['en'].page || {};
  window.i18nData['en'].page = Object.assign({}, existing, {
    title:      '#02 — TODO — Artur Flamandzki',
    hero_tag:   'PORTFOLIO R&D — PROJEKT #02',
    hero_title: 'TODO',
    hero_sub:   'TODO',
    date:       'TODO',
    summary:    '<p>TODO</p>',
    nav_prev:   '← #01',
    nav_next:   '#03 →',
    body:       '<p>TODO</p>'
  });
})();
