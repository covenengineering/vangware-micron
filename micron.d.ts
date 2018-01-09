/**
 * @file Standalone helper arrow functions (ES6) in 1 line.
 * @version 3.2.5
 * @author Vangware <https://vangware.com>
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
 * @exports ael
 * @returns {HTMLElement[]} DOM Element or Array of DOM Elements with event.
 */
declare const ael: (E: any, V: any) => any;
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
 * @exports atr
 * @returns {HTMLElement[]} DOM Element or Array of DOM Elements with new attributes.
 */
declare const atr: (E: any, A: any) => any;
/**
 * Get the current document cookies in object form.
 *
 * @exports cks
 * @returns {Object} The document cookies object.
 */
declare const cks: () => {
    [x: string]: any;
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
 * @exports css
 * @returns {HTMLElement[]} DOM Element or Array of DOM Elements with new styles.
 */
declare const css: (E: any, S: any) => any;
/**
 * Remove an element or a group of elements from the DOM.
 *
 * @example
 * // <a id="id">Link</a>
 * del(get("#id")); // Element gets removed from the DOM and returned
 *
 * @param {(HTMLElement|HTMLElement[])} E DOM Element or Array of DOM Elements to remove from DOM.
 * @exports del
 * @returns {HTMLElement[]} DOM Element or Array of DOM Elements removed from DOM.
 */
declare const del: (E: any) => any;
/**
 * Parse string into DOM.
 *
 * @example
 * dom("<a>Hello world</a>"); // Returns document object with that link on the body
 *
 * @param {string} S String to be parsed.
 * @exports dom
 * @returns {Document} Parsed DOM.
 */
declare const dom: (S: any) => Document;
/**
 * Alias for querySelectorAll, but returning an array instead of a nodeList.
 *
 * @example
 * // <a id="id">Link</a>
 * get("#id"); // Above element gets returned
 *
 * @param {string} q CSS Query.
 * @param {HTMLElement} [e=document] Base element.
 * @exports get
 * @returns {HTMLElement[]} Array of elements.
 */
declare const get: (q: any, e?: Document) => {}[];
/**
 * Takes a string and an object and makes a regex map replace
 *
 * @example
 * mrx("abc", {"a":1,"b":2,"c":3}); // Returns "123"
 *
 * @param  {string} s String.
 * @param  {Object} m Map with format { "string to be replaced": "replacing string" }.
 * @exports mrx
 * @returns {string} String with replaced elements from map.
 */
declare const mrx: (s: any, m: any) => any;
/**
 * Creates a clean object with a forEach method.
 *
 * @example
 * obj({ a: 1, b: 2, c: 3}).__proto__ === void 0; // true, because is a clean object
 *
 * @param {...Object} o Objects to use.
 * @exports obj
 * @returns {Object} New clean object.
 */
declare const obj: (...o: any[]) => any;
/**
 * Add padding zeros to passed number.
 *
 * @example
 * pad(1); // Returns "01"
 * pad(2, 5); // Returns "00002"
 *
 * @param {number} n Number to be padded.
 * @param {number} [l=2] Total length of resulting number.
 * @exports pad
 * @returns {string} Padded number.
 */
declare const pad: (n: any, l?: number) => any;
/**
 * Random string generator (up to 10 characters).
 * Credit: https://github.com/Jacob-Friesen/obscurejs/blob/master/2015/oneLineRandomText.js
 *
 * @param {number} l Length of the random string.
 * @exports rnd
 * @returns {string} A random string.
 */
declare const rnd: (l?: number) => string;
/**
 * Timestamp string hash generator (up to 8 characters).
 *
 * @param {number} l Length of the random string (8 max).
 * @exports tsh
 * @returns {string} A timestamp hash.
 */
declare const tsh: (l?: number) => string;
/**
 * Parse an object into a simple string in URL format for XHR.
 *
 * @example
 * url({ a: 1, b: 2, c: 3 }); // Returns "a=1&b=2&c=3"
 * url({ a: [1, 2, 3], b: { c: 1, d: 2 } }) // Returns "a[0]=1&a[1]=2&a[2]=3&b[c]=1&b[d]=2"
 *
 * @param {Object} o List of input data for ajax in Object format.
 * @exports url
 * @returns {string} URL formated string.
 */
declare const url: (o: any) => any;
/**
 * Alias for new XMLHttpRequest, with GET method by default.
 *
 * @example
 * xhr("/api").send(); // Sends request to /api
 *
 * @param {string} u URL.
 * @param {string} [m=GET] Method.
 * @exports xhr
 * @returns {XMLHttpRequest} The opened XML HTTP Request.
 */
declare const xhr: (u: any, m?: string) => XMLHttpRequest;
export { ael, atr, cks, css, del, dom, get, mrx, obj, pad, rnd, tsh, url, xhr };
