/**
 * Alias for querySelectorAll in an array.
 *
 * @param {string} q CSS Query.
 * @exports get
 * @returns {HTMLElement[]} Array of elements.
 *
 * @example
 * ```typescript
 * // <a id="id">Link</a>
 * get("#id"); // Above element gets returned
 * ```
 */
export const get=q=>Array.from(document.querySelectorAll(q));
