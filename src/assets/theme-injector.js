if (Storage) {
  let settings = localStorage.getItem('_themeTest');
  if (settings) {
    settings = JSON.parse(settings);
    let link = /** @type {HTMLLinkElement} */ (document.createElement('link'));
    link.rel = 'import';
    link.href = settings.url;
    link.setAttribute('import-href', '');
    document.head.appendChild(link);
  }
}

