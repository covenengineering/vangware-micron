/**
 * Remove an element or a group of elements from the DOM.
 *
 * @param {(HTMLElement|HTMLElement[])} E DOM Element or Array of DOM Elements to remove from DOM.
 * @exports del
 * @returns {HTMLElement[]} DOM Element or Array of DOM Elements removed from DOM.
 *
 * @example
 * // <a id="id">Link</a>
 * del(get("#id")); // Element gets removed from the DOM and returned
 */
export declare const del: (E: HTMLElement | HTMLElement[]) => HTMLElement[];
