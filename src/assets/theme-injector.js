  if (Storage) {
    // alert('has storage, will check for theme');

    let settings = localStorage.getItem('_themeTest');
    if (settings) {
      settings = JSON.parse(settings);

      // alert('...injecting theme: ' + settings.name + '\n' + settings.url);
      // document.write('<link id="elf-theme-loader" rel="import" href="' + settings.url + '">');
      // let themeLoader = document.getElementById('elf-theme-loader');
      // themeLoader.addEventListener('load', function () {
      //   alert('loaded theme: ' + settings.name);
      // });
      let link = /** @type {HTMLLinkElement} */ (document.createElement('link'));
      link.rel = 'import';
      link.href = settings.url;
      link.setAttribute('import-href', '');
      link.addEventListener('load', function () {
        // alert('loaded theme: ' + settings.name);
        // if (window['ShadyCSS'] !== undefined) {
        //   window['ShadyCSS'].styleDocument();
        // }
      });


      document.head.appendChild(link);
    }
  }

