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
export declare const get: (q: any, e?: Document) => any[];
