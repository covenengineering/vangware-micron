[![[Vangware logo]](http://vangware.github.io/micron/assets/img/logo.min.svg)](https://vangware.com)

micron v1.9.0 [![[Build Status]](https://img.shields.io/travis/vangware/micron.svg?style=flat-square)](https://travis-ci.org/vangware/micron)
----

Standalone helper arrow functions (ES6) in 1 line. Useful for code injection, bookmarklets, debugging, etc.

```
ael - Listen to several events on an element or a group of elements.
atr - Set several attributes of an element or a group of elements.
cks - Get the current document cookies in object form.
css - Set several styles of an element or a group of elements.
del - Remove an element or a group of elements from the DOM.
get - Alias for querySelectorAll, but returning an array instead of a nodeList.
mrx - Takes a string and an object and makes a regex map replace.
rnd - Random string generator (up to 16 characters).
url - Parse an object into a simple string in URL format for XHR.
xhr - Alias for new XMLHttpRequest, with GET method by default.
```

### To use this on Chrome
Got to ...
````
chrome://flags/#enable-javascript-harmony
````
... and "Enable Experimental JavaScript". Restart the browser and you are done.

### To use this on Browsers with ES5

Install [Babel](https://github.com/babel/babel) or [TypeScript](https://github.com/Microsoft/TypeScript), and compile this code. Something like...
````sh
npm i -g babel typescript
babel micron.js > micron.es5.js
# or
mv micron.js micron.ts && tsc micron.ts --target es5 --out m1cron.es5.js
````
