"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** 
 * @file Standalone helper arrow functions (ES6) in 1 line.
 * @version 2.3.0
 * @author Vangware - https://vangware.com
 */

/* jshint asi: true, forin: false, strict: false, curly: false, -W058: true, esnext: true */
/* exported ael, atr, cks, css, del, dom, get, mrx, obj, rnd, url, xhr */

/**
 * Listen to several events on an element or a group of elements.
 *
 * @example
 * // <a id="id">Link</a>
 * ael(get("#id"), {
 *   click: event => {
 *     event.preventDefault();
 *     console.log("#id element clicked");
 *   }
 * });
 *
 * @param {(HTMLElement|HTMLElement[])} E DOM Element or Array of DOM Elements with event.
 * @param {Object} V List of events and callbacks in Object format.
 * @returns {HTMLElement[]} DOM Element or Array of DOM Elements with event.
 */
var ael = function ael(E, V) {
  return (E.length ? E : [E]).map(function (e) {
    return Object.keys(V).map(function (v) {
      return e.addEventListener(v, V[v]), e;
    })[0];
  });
};

/**
 * Set several attributes of an element or a group of elements.
 *
 * @example
 * // <a id="id">Link</a>
 * atr(get("#id"), {
 *   class: "a-class"
 * });
 * // <a id="id" class="a-class">Link</a>
 *
 * @param {(HTMLElement|HTMLElement[])} E DOM Element or Array of DOM Elements with event.
 * @param {Object} A List of attributes in Object format.
 * @returns {HTMLElement[]} DOM Element or Array of DOM Elements with new attributes.
 */
var atr = function atr(E, A) {
  return (E.length ? E : [E]).map(function (e) {
    return Object.keys(A).map(function (a) {
      return e.setAttribute(a, A[a]), e;
    })[0];
  });
};

/**
 * Get the current document cookies in object form.
 *
 * @returns {Object} The document cookies object.
 */
var cks = function cks() {
  return decodeURIComponent(document.cookie).split("; ").map(function (c) {
    return c.split(/=(.+)?/);
  }).map(function (c) {
    return _defineProperty({}, c[0], function (s) {
      try {
        return JSON.parse(s);
      } catch (e) {
        return !1;
      }
    }(c[1]) || c[1]);
  }).reduce(function (o, c) {
    return Object.assign(o, c);
  });
};

/**
 * Set several styles of an element or a group of elements.
 *
 * @example
 * // <a id="id">Link</a>
 * css(get("#id"), {
 *   fontWeight: 700
 * });
 * // <a id="id" style="font-weight:700">Link</a>
 *
 * @param {(HTMLElement|HTMLElement[])} E DOM Element or Array of DOM Elements to set styles.
 * @param {Object} S List of styles in Object format.
 * @returns {HTMLElement[]} DOM Element or Array of DOM Elements with new styles.
 */
var css = function css(E, S) {
  return (E.length ? E : [E]).map(function (e) {
    return Object.assign(e.style, S), e;
  });
};

/**
 * Remove an element or a group of elements from the DOM.
 *
 * @example
 * // <a id="id">Link</a>
 * del(get("#id")); // Element gets removed from the DOM and returned
 *
 * @param {(HTMLElement|HTMLElement[])} E DOM Element or Array of DOM Elements to remove from DOM.
 * @returns {HTMLElement[]} DOM Element or Array of DOM Elements removed from DOM.
 */
var del = function del(E) {
  return (E.length ? E : [E]).map(function (e) {
    return e.parentElement.removeChild(e);
  });
};

/**
 * Parse string into DOM.
 *
 * @example
 * dom("<a>Hello world</a>"); // Returns document object with that link on the body
 *
 * @param {string} S String to be parsed.
 * @returns {Document} Parsed DOM.
 */
var dom = function dom(S) {
  return new DOMParser().parseFromString(S, "text/html");
};

/**
 * Alias for querySelectorAll, but returning an array instead of a nodeList.
 *
 * @example
 * // <a id="id">Link</a>
 * get("#id"); // Above element gets returned
 *
 * @param {string} q CSS Query.
 * @param {HTMLElement} [e=document] Base element.
 * @returns {HTMLElement[]} Array of elements.
 */
var get = function get(q) {
  var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return Array.from(e.querySelectorAll(q));
};

/**
 * Takes a string and an object and makes a regex map replace
 *
 * @example
 * mrx("abc", {"a":1,"b":2,"c":3}); // Returns "123"
 *
 * @param  {string} s String.
 * @param  {Object} m Map with format { "string to be replaced": "replacing string" }.
 * @returns {string} String with replaced elements from map.
 */
var mrx = function mrx(s, m) {
  return s.replace(new RegExp(Object.keys(m).map(function (c) {
    return c.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }).join("|"), "g"), function (c) {
    return m[c];
  });
};

/**
 * Creates a clean object with a forEach method.
 *
 * @example
 * obj({ a: 1, b: 2, c: 3}).__proto__ === void 0; // true, because is a clean object
 *
 * @param {...Object} o Objects to use.
 * @returns {Object} New clean object.
 */
var obj = function obj() {
  for (var _len = arguments.length, o = Array(_len), _key = 0; _key < _len; _key++) {
    o[_key] = arguments[_key];
  }

  return function (O) {
    return O.defineProperty(O.assign.apply(O, [O.create(null)].concat(o)), "forEach", {
      value: function value(c) {
        var _this = this;

        O.keys(this).map(function (k) {
          return c(_this[k], k, _this);
        });
      }
    });
  }(Object);
};

/**
 * Random string generator (up to 16 characters).
 * Credit: https://github.com/Jacob-Friesen/obscurejs/blob/master/2015/oneLineRandomText.js
 *
 * @param {number} l Length of the random string.
 */
var rnd = function rnd(l) {
  return (Math.random() + 1).toString(36).substr(2, l);
};

/**
 * Parse an object into a simple string in URL format for XHR.
 *
 * @example
 * url({ a: 1, b: 2, c: 3 }); // Returns "a=1&b=2&c=3"
 * url({ a: [1, 2, 3], b: { c: 1, d: 2 } }) // Returns "a[0]=1&a[1]=2&a[2]=3&b[c]=1&b[d]=2"
 *
 * @param {Object} o List of input data for ajax in Object format.
 * @returns {string} URL formated string.
 */
var url = function url(o) {
  return Object.keys(o).map(function (p) {
    return Array.isArray(o[p]) ? o[p].map(function (r, q) {
      return url(_defineProperty({}, p + ("[" + q + "]"), r));
    }).join("&") : _typeof(o[p]) === "object" && o[p] !== null ? url(Object.keys(o[p]).reduce(function (r, q) {
      return Object.assign(r, _defineProperty({}, p + ("[" + q + "]"), o[p][q]));
    }, {})) : p + "=" + encodeURIComponent(o[p]);
  }).join("&");
};

/**
 * Alias for new XMLHttpRequest, with GET method by default.
 *
 * @example
 * xhr("/api").send(); // Sends request to /api
 *
 * @param {string} u URL.
 * @param {string} [m=GET] Method.
 * @returns {XMLHttpRequest} The opened XML HTTP Request.
 */
var xhr = function xhr(u) {
  var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "GET";
  var x = new XMLHttpRequest();return x.open(m, u), x;
};

/**
 * CommonJS export.
 */
if (module && module.exports) {
  module.exports = { ael: ael, atr: atr, cks: cks, css: css, del: del, dom: dom, get: get, mrx: mrx, obj: obj, rnd: rnd, url: url, xhr: xhr };
}