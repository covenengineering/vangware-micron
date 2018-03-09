/**
 * Set several attributes of an element or a group of elements.
 *
 * @param {(HTMLElement|HTMLElement[])} E DOM Element or Array of DOM Elements with event.
 * @param {Object.<string,any>} A List of attributes in Object format.
 * @exports atr
 * @returns {HTMLElement[]} DOM Element or Array of DOM Elements with new attributes.
 *
 * @example
 * // <a id="id">Link</a>
 * atr(get("#id"), {
 *   class: "a-class"
 * });
 * // <a id="id" class="a-class">Link</a>
 */
export declare const atr: (E: HTMLElement | HTMLElement[], A: {
    [attributeName: string]: any;
}) => HTMLElement[];
