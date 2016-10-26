[![[Micron logo]](https://cdn.rawgit.com/vangware/micron/master/logo.svg)](https://vangware.com) **v2.2.0**

[![[Build Status]](https://img.shields.io/travis/vangware/micron.svg?style=flat-square)](https://travis-ci.org/vangware/micron)

Standalone helper arrow functions (ES6) in 1 line. Useful for code injection, bookmarklets, debugging, etc.

```
ael - Listen to several events on an element or a group of elements.
atr - Set several attributes of an element or a group of elements.
cks - Get the current document cookies in object form.
css - Set several styles of an element or a group of elements.
del - Remove an element or a group of elements from the DOM.
get - Alias for querySelectorAll, but returning an array instead of a nodeList.
mrx - Takes a string and an object and makes a regex map replace.
obj - Creates a clean object with a forEach method.
rnd - Random string generator (up to 16 characters).
url - Parse an object into a simple string in URL format for XHR.
xhr - Alias for new XMLHttpRequest, with GET method by default.
```

### Is this production ready?

Nope. Obviously. This is just a personal experiment to achieve useful functions in one line with the smallest size.
I use this functions to make code injection when I'm messing with the front-end of someone.

### To use this on Browsers with ES5

Install [Babel](https://github.com/babel/babel) or [TypeScript](https://github.com/Microsoft/TypeScript), and compile this code. Something like...
````sh
npm i -g babel typescript
babel micron.js > micron.es5.js
# or
mv micron.js micron.ts && tsc micron.ts --target es5 --out m1cron.es5.js
````
