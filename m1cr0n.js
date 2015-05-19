/** 
 * @file m1cr0n.js - Standalone helper arrow functions (ES6) in 1 line.
 * @version 1.7.1
 * @author Vangware - http://vangware.com
 */

/* jshint asi: true, forin: false, strict: false, curly: false, -W058: true, esnext: true */
/* exported ael, atr, css, del, get, url, xhr */

/**
 * Listen to several events on an element or a group of elements.
 *
 * @param {(Element|Element[])} E - DOM Element or Array of DOM Elements with event.
 * @param {Object} V - List of events and callbacks in Object format.
 * @param {Function} c - Callback Function.
 * @returns {(Element|Element[])} E - DOM Element or Array of DOM Elements with event.
 */
var ael=(E,V)=>((E instanceof Array?E:[E]).forEach(e=>{for(let v in V)e.addEventListener(v,V[v])}),E);

/**
 * Set several attributes of an element or a group of elements.
 *
 * @param {(Element|Element[])} E - DOM Element or Array of DOM Elements with event.
 * @param {Object} A - List of attributes in Object format.
 * @returns {(Element|Element[])} E - DOM Element or Array of DOM Elements with new attributes.
 */
var atr=(E,A)=>((E instanceof Array?E:[E]).forEach(e=>{for(let a in A)e.setAttribute(a,A[a])}),E);

/**
 * Get the current document cookies in object form
 *
 * @returns {Object} o - The document cookies object
 */
var cks=()=>JSON.parse(`{"${(document.cookie).split("; ").map(c=>c.replace(/"/g, "\\\"").replace("=", `":"`)).join(`","`)}"}`);

/**
 * Set several styles of an element or a group of elements.
 *
 * @param {(Element|Element[])} E - DOM Element or Array of DOM Elements to set styles.
 * @param {Object} S - List of styles in Object format.
 * @returns {(Element|Element[])} E - DOM Element or Array of DOM Elements with new styles.
 */
var css=(E,S)=>((E instanceof Array?E:[E]).forEach(e=>{for(let s in S)e.style[s]=S[s]}),E);

/**
 * Remove an element or a group of elements from the DOM.
 *
 * @param {(Element|Element[])} E - DOM Element or Array of DOM Elements to remove from DOM
 * @returns {(Element|Element[])} E - DOM Element or Array of DOM Elements removed from DOM
 */
var del=E=>((E instanceof Array?E:[E]).forEach(e=>{e.parentElement.removeChild(e)}),E);

/**
 * Alias for querySelectorAll, but returning an array instead of a nodeList.
 *
 * @param {string} q - CSS Query.
 * @param {Element} [e=document] - Base element.
 * @returns {Array} a - Array of elements.
 */
var get=(q,e)=>{let a=[];a.forEach.call((e||document).querySelectorAll(q),(n,i)=>{a[i]=n});return a};

/**
 * Parse an object into URL format for XHR.
 *
 * @param {Object} o - List of input data for ajax in Object format.
 * @returns {string} u - URL formated string.
 */
var url=o=>{let p,u="";for(p in o)u+=(u.length?"&":u)+p+"="+encodeURIComponent(o[p]);return u};

/**
 * Alias for new XMLHttpRequest
 *
 * @param {string} u - URL.
 * @param {string} [m=GET] - Method.
 * @returns {XMLHttpRequest} x - The opened XML HTTP Request.
 */
var xhr=(u,m)=>{let x=new XMLHttpRequest;return x.open(m||"GET",u),x};