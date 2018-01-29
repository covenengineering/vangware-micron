"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.del = E => (E.length ? E : [E]).map(e => e.parentElement.removeChild(e));
