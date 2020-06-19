/**
 * @callback CurriedCSS Curried style setter.
 * @param {HTMLElement[]} E Array of DOM Elements to set styles.
 * @returns {HTMLElement[]} Array of DOM Elements with new styles.
 */

/**
 * Set several styles of an element or a group of elements.
 *
 * @param {CSSStyleDeclaration} S List of styles in Object format.
 * @exports css
 * @returns {CurriedCSS}
 *
 * @example
 * ```typescript
 * // <a id="id">Link</a>
 * css({
 * 	fontWeight: 700
 * })(get("#id"));
 * // <a id="id" style="font-weight:700">Link</a>
 * ```
 */
export const css=S=>E=>E.map(e=>(Object.assign(e.style,S),e));
