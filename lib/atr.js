/**
 * @callback CurriedATR Curried attribute setter.
 * @param {HTMLElement[]} E Array of DOM Elements with event.
 * @returns {HTMLElement[]} Array of DOM Elements with new attributes.
 */

/**
 * Set several attributes of an element or a group of elements.
 *
 * @param {Record<string, string>} A List of attributes in Object format.
 * @exports atr
 * @returns {CurriedATR}
 *
 * @example
 * ```typescript
 * // <a id="id">Link</a>
 * atr({
 * 	class: "a-class"
 * })(get("#id"));
 * // <a id="id" class="a-class">Link</a>
 * ```
 */
export const atr=A=>E=>E.map(e=>Object.keys(A).map(a=>(e.setAttribute(a,A[a]),e))[0]);
