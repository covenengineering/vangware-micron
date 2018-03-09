"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Listen to several events on an element or a group of elements.
 *
 * @param {(HTMLElement|HTMLElement[])} E DOM Element or Array of DOM Elements with event.
 * @param {Object.<string,EventListener>} V List of events and callbacks in Object format.
 * @exports ael
 * @returns {HTMLElement[]} DOM Element or Array of DOM Elements with event.
 *
 * @example
 * // <a id="id">Link</a>
 * ael(get("#id"), {
 *   click: event => {
 *     event.preventDefault();
 *     console.log("#id element clicked");
 *   }
 * });
 */
exports.ael = (E, V) => (Array.isArray(E) ? E : [E]).map(e => Object.keys(V).map(v => (e.addEventListener(v, V[v]), e))[0]);
