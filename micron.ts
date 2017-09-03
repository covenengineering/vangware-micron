/** 
 * @file Standalone helper arrow functions (ES6) in 1 line.
 * @version 3.0.0
 * @author Vangware - https://vangware.com
 */

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
 * @exports
 * @returns {HTMLElement[]} DOM Element or Array of DOM Elements with event.
 */
const ael=(E,V)=>(E.length?E:[E]).map(e=>Object.keys(V).map(v=>(e.addEventListener(v,V[v]),e))[0]);

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
 * @exports
 * @returns {HTMLElement[]} DOM Element or Array of DOM Elements with new attributes.
 */
const atr=(E,A)=>(E.length?E:[E]).map(e=>Object.keys(A).map(a=>(e.setAttribute(a,A[a]),e))[0]);

/**
 * Get the current document cookies in object form.
 *
 * @exports
 * @returns {Object} The document cookies object.
 */
const cks=()=>decodeURIComponent(document.cookie).split("; ").map(c=>c.split(/=(.+)?/)).map(c=>({[c[0]]:(s=>{try{return JSON.parse(s)}catch(e){return !1}})(c[1])||c[1]})).reduce((o,c)=>Object.assign(o,c));

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
 * @exports
 * @returns {HTMLElement[]} DOM Element or Array of DOM Elements with new styles.
 */
const css=(E,S)=>(E.length?E:[E]).map(e=>(Object.assign(e.style,S),e));

/**
 * Remove an element or a group of elements from the DOM.
 *
 * @example
 * // <a id="id">Link</a>
 * del(get("#id")); // Element gets removed from the DOM and returned
 *
 * @param {(HTMLElement|HTMLElement[])} E DOM Element or Array of DOM Elements to remove from DOM.
 * @exports
 * @returns {HTMLElement[]} DOM Element or Array of DOM Elements removed from DOM.
 */
const del=E=>(E.length?E:[E]).map(e=>e.parentElement.removeChild(e));

/**
 * Parse string into DOM.
 *
 * @example
 * dom("<a>Hello world</a>"); // Returns document object with that link on the body
 *
 * @param {string} S String to be parsed.
 * @exports
 * @returns {Document} Parsed DOM.
 */
const dom=S=>(new DOMParser).parseFromString(S,"text/html");

/**
 * Alias for querySelectorAll, but returning an array instead of a nodeList.
 *
 * @example
 * // <a id="id">Link</a>
 * get("#id"); // Above element gets returned
 *
 * @param {string} q CSS Query.
 * @param {HTMLElement} [e=document] Base element.
 * @exports
 * @returns {HTMLElement[]} Array of elements.
 */
const get=(q,e=document)=>Array.from(e.querySelectorAll(q));

/**
 * Takes a string and an object and makes a regex map replace
 *
 * @example
 * mrx("abc", {"a":1,"b":2,"c":3}); // Returns "123"
 *
 * @param  {string} s String.
 * @param  {Object} m Map with format { "string to be replaced": "replacing string" }.
 * @exports
 * @returns {string} String with replaced elements from map.
 */
const mrx=(s,m)=>s.replace(new RegExp(Object.keys(m).map(c=>c.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")).join("|"),"g"),c=>m[c]);

/**
 * Creates a clean object with a forEach method.
 *
 * @example
 * obj({ a: 1, b: 2, c: 3}).__proto__ === void 0; // true, because is a clean object
 *
 * @param {...Object} o Objects to use.
 * @exports
 * @returns {Object} New clean object.
 */
const obj=(...o)=>(O=>(O.defineProperty(O.assign(O.create(null),...o),"forEach",{value(c){O.keys(this).map(k=>c(this[k],k,this))}})))(Object);

/**
 * Add padding zeros to passed number.
 *
 * @example
 * pad(1); // Returns "01"
 * pad(2, 5); // Returns "00002"
 *
 * @param {number} n Number to be padded.
 * @param {number} [l=2] Total length of resulting number.
 * @exports
 * @returns {string} Padded number.
 */
const pad=(n,l=2)=>(`${n}`.length<l)?pad(`0${n}`,l):`${n}`;

/**
 * Random string generator (up to 16 characters).
 * Credit: https://github.com/Jacob-Friesen/obscurejs/blob/master/2015/oneLineRandomText.js
 *
 * @param {number} l Length of the random string.
 * @exports
 * @returns {string} A random string.
 */
const rnd=l=>(Math.random()+1).toString(36).substr(2,l);

/**
 * Parse an object into a simple string in URL format for XHR.
 *
 * @example
 * url({ a: 1, b: 2, c: 3 }); // Returns "a=1&b=2&c=3"
 * url({ a: [1, 2, 3], b: { c: 1, d: 2 } }) // Returns "a[0]=1&a[1]=2&a[2]=3&b[c]=1&b[d]=2"
 *
 * @param {Object} o List of input data for ajax in Object format.
 * @exports
 * @returns {string} URL formated string.
 */
const url=o=>Object.keys(o).map(p=>Array.isArray(o[p])?o[p].map((r,q)=>url({[p+`[${q}]`]:r})).join("&"):(typeof o[p]==="object"&&o[p]!==null)?url(Object.keys(o[p]).reduce((r,q)=>Object.assign(r,{[p+`[${q}]`]:o[p][q]}),{})):p+"="+encodeURIComponent(o[p])).join("&");

/**
 * Alias for new XMLHttpRequest, with GET method by default.
 *
 * @example
 * xhr("/api").send(); // Sends request to /api
 *
 * @param {string} u URL.
 * @param {string} [m=GET] Method.
 * @exports
 * @returns {XMLHttpRequest} The opened XML HTTP Request.
 */
const xhr=(u,m="GET")=>{let x=new XMLHttpRequest;return x.open(m,u),x};

export { ael, atr, cks, css, del, dom, get, mrx, obj, pad, rnd, url, xhr }
