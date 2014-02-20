/** 
 * @file m1cr0n.js - Group of standalone helper functions in 1 line.
 * @version 1.0.13
 * @author Lucas M. Ciruzzi <lucasmciruzzi@live.com>
 */

/**
 * Change several styles of a DOM Element or a group of DOM Elements
 *
 * @param {(Element|Element[])} E - DOM Element or Array of DOM Elements to set styles.
 * @param {Object} S - List of styles in Object format.
 * @returns {(Element|Element[])} E - DOM Element or Array of DOM Elements with new styles.
 * @example cssSet(document.body, {
 *     backgroundColor: "#000",
 *     color: "#FFF"
 * });
 * cssSet(qryGet(".important"), {
 *     color: "#F00"
 * });
 */
function cssSet(E,S){if(E instanceof Array){E.forEach(function(e){cssSet(e,S)})}else{for(var s in S){E.style[s]=S[s]}}return E}

/**
 * addEventListener Alias
 *
 * @param {(Element|Element[])} E - DOM Element or Array of DOM Elements with event.
 * @param {string} v - Event name.
 * @param {Function} c - Callback Function.
 * @returns {(Element|Element[])} E - DOM Element or Array of DOM Elements with event.
 * @example listen(window, "blur", function () {
 *     console.log("Window has lost focus");
 * });
 * listen(qryGet("a"), "click", function () {
 *     console.log("Anchor clicked");
 * });
 */
function listen(E,v,c){if(E instanceof Array){E.forEach(function(e){listen(e,v,c)})}else{E.addEventListener(v,c)}return E}

/**
 * Parse object into string for ajax calls
 *
 * @param {Object} o - List of input data for ajax in Object format.
 * @returns {string} u - URL formated string.
 * @example objUrl({
 *     greet: "hello",
 *     dismiss: "goodbye"
 * }); // This will return "greet=hello&dismiss=goodbye"
 */
function objUrl(o){var u="",p;for(p in o){if(o.hasOwnProperty(p)){u+=((u.length>1)?"&":"")+p+"="+encodeURIComponent(o[p])}}return u}

/**
 * Query select elements and parse the nodeList into an array
 *
 * @param {string} q - CSS Query.
 * @param {Element} [e=document] - Base element.
 * @returns {Array} a - Array of elements.
 * @example qryGet(".menu_link"); // This will return an array of elements with "menu_link" class
 * qryGet(".menu_link", qryGet("header")[0]); // Same as before, but inside the first header on the document.
 */
function qryGet(q,e){var n=(e||document).querySelectorAll(q),a=[],i=n.length;for(;i--;a.unshift(n[i]));return a}

/**
 * Removes an element from the DOM
 *
 * @param {(Element|Element[])} E - DOM Element or Array of DOM Elements to remove from DOM
 * @returns {(Element|Element[])} E - DOM Element or Array of DOM Elements removed from DOM
 * @example remove(document.body.firstChild); // This will return the first element (after remove it from the DOM)
 * remove(qryGet("div.remove")); // This will return an array of divs with remove class (after remove them from the DOM)
 */
function remove(E){if(E instanceof Array){E.forEach(function(e){remove(e)})}else{E.parentElement.removeChild(E)}return E}

/**
 * Cretes a XML HTTP Request Element (with ajax header)
 *
 * @param {string} u - URL.
 * @param {string} [m=GET] - Method.
 * @returns {XMLHttpRequest} x - The opened XML HTTP Request.
 * @example var getXhr = setXhr("http://someurl.com"), // getXhr now has a XMLHttpRequest opened in GET mode for http://someurl.com
 *     postXhr = setXhr("http://someurl.com", "POST"); // Same as before, but in POST mode
 */
function setXhr(u,m){var x=new XMLHttpRequest();x.open(m||"GET",u,!0);x.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=UTF-8");return x}