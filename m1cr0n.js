/** 
 * @file m1cr0n.js - Standalone helper functions in 1 line.
 * @version 1.1.0
 * @author Lucas M. Ciruzzi <lucasmciruzzi@live.com>
 */

/*jshint asi: true, forin: false */

/**
 * Set several styles of an element or a group of elements.
 *
 * @param {(Element|Element[])} E - DOM Element or Array of DOM Elements to set styles.
 * @param {Object} S - List of styles in Object format.
 * @returns {(Element|Element[])} E - DOM Element or Array of DOM Elements with new styles.
 * @example css(document.body, {
 *     backgroundColor: "#000",
 *     color: "#FFF"
 * });
 * css(get(".important"), {
 *     color: "#F00"
 * });
 */
function css(E,S){if(E instanceof Array)E.forEach(function(e){css(e,S)});else for(var s in S) E.style[s]=S[s];return E}

/**
 * Listen to an event on an element or a group of elements.
 *
 * @param {(Element|Element[])} E - DOM Element or Array of DOM Elements with event.
 * @param {string} v - Event name.
 * @param {Function} c - Callback Function.
 * @returns {(Element|Element[])} E - DOM Element or Array of DOM Elements with event.
 * @example ael(window, "blur", function () {
 *     console.log("Window has lost focus");
 * });
 * ael(get("a"), "click", function () {
 *     console.log("Anchor clicked");
 * });
 */
function ael(E,v,c){if(E instanceof Array){E.forEach(function(e){ael(e,v,c)})}else{E.addEventListener(v,c)}return E}

/**
 * Parse an object into URL format for XHR.
 *
 * @param {Object} o - List of input data for ajax in Object format.
 * @returns {string} u - URL formated string.
 * @example url({
 *     greet: "hello",
 *     dismiss: "goodbye"
 * }); // This will return "greet=hello&dismiss=goodbye"
 */
function url(o){var u="",p;for(p in o)u+=((!u.length)?u:"&")+p+"="+encodeURIComponent(o[p]);return u}

/**
 * Alias for querySelectorAll, but returning an array instead of a nodeList.
 *
 * @param {string} q - CSS Query.
 * @param {Element} [e=document] - Base element.
 * @returns {Array} a - Array of elements.
 * @example get(".menu_link"); // This will return an array of elements with "menu_link" class
 * get(".menu_link", get("header")[0]); // Same as before, but inside the first header on the document.
 */
function get(q,e){var n=(e||document).querySelectorAll(q),a=[],i=n.length;while(i--){a.unshift(n[i])}return a}

/**
 * Remove an element or a group of elements from the DOM.
 *
 * @param {(Element|Element[])} E - DOM Element or Array of DOM Elements to remove from DOM
 * @returns {(Element|Element[])} E - DOM Element or Array of DOM Elements removed from DOM
 * @example del(document.body.firstChild); // This will return the first element (after remove it from the DOM)
 * del(get("div.remove")); // This will return an array of divs with remove class (after remove them from the DOM)
 */
function del(E){if(E instanceof Array)E.forEach(function(e){del(e)});else E.parentElement.removeChild(E);return E}

/**
 * Alias for new XMLHttpRequest, with ajax header and GET method by default.
 *
 * @param {string} u - URL.
 * @param {string} [m=GET] - Method.
 * @returns {XMLHttpRequest} x - The opened XML HTTP Request.
 * @example var getXhr = xhr("http://someurl.com"), // getXhr now has a XMLHttpRequest opened in GET mode for http://someurl.com
 *     postXhr = xhr("http://someurl.com", "POST"); // Same as before, but in POST mode
 */
function xhr(u,m){var x=new XMLHttpRequest();x.open(m||"GET",u,!0);x.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=UTF-8");return x}