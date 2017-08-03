# ShadyCSS + dynamic theme + Polymer 2 + Angular 4 + IE11


## Intention

To have theming dynamically applied, ie a theme is stored in session/local storage and added dynamically in browser - à la switching css files.

## Method

 - `theme-injector.js` in header detecting theme from local storage
 - `theme-injector.js` injects link element with theme href into head
 
 Changing theme
 
 - `theme-switcher.html` stores the theme details in local storage and triggers `location.reload`.

This works in Chrome etc and in non Angular Projects, IE11

## To use

If you don't have a server installed, ` npm install http-server -g`

`npm i`

`bower i`

`npm run build`

`cd build/es5-bundled/dist`

`http-server -o`

## However...

IE11 doesn't apply the theme when used with Angular.



This will work without modification in Chrome etc - for IE there is a conflict. To get this to run in IE you need to modify the index file in the resulting build (`build/es5-bundled/dist/index.html`).

Comment out or remove the angular scripts at the bottom

```html
<script type="text/javascript" src="inline.bundle.js"></script>
<script type="text/javascript" src="polyfills.bundle.js"></script>
<script type="text/javascript" src="styles.bundle.js"></script>
<script type="text/javascript" src="vendor.bundle.js"></script>
<script type="text/javascript" src="main.bundle.js"></script>
```

And uncomment the script injector

```js
document.addEventListener('WebComponentsReady', function () {

  var arr = [
    'inline.bundle.js',
    'polyfills.bundle.js',
    'styles.bundle.js',
    'vendor.bundle.js',
    'main.bundle.js'
  ];
  arr.forEach(function (ref) {
    var i = document.createElement('script');
    i.src = ref;
    i.async = false;
    i.type = 'text/javascript';
    document.body.appendChild(i);
  });
});
```

## Issues

Not sure this is the best approach, and appreciate it might be working around the capabilities of ShadyCSS.

 - Ideally I'd like to use importHref and Polymer/ShadyCSS APIs
 
 - Would like to avoid using `location.reload`
 
 - Even without Angular, using importHref didn't reliably load the theme. Content within another element or slot would randomly be styled or not (calling `Polymer.updateStyles()`/`ShadyCSS.styleDocument()` after theme load had little to no effect).
 
 

Just to note, if the theme is statically in index.html, it works without issue.
 

