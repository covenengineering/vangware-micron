/**
 * Alias for querySelectorAll in an array.
 *
 * @template {HTMLElement} ElementType
 * @param {string} q CSS Query.
 * @param {ElementType | Document} [e=document] Base element.
 * @exports get
 * @returns {ElementType[]} Array of elements.
 *
 * @example
 * // <a id="id">Link</a>
 * get("#id"); // Above element gets returned
 */
export const get=(q,e=document)=>Array.from(e.querySelectorAll(q));
