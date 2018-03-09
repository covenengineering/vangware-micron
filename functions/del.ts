/* TypeScript patch (It doesn't infer from JSDocs). */
let del:(E:HTMLElement|HTMLElement[])=>HTMLElement[];

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
del=E=>(Array.isArray(E)?E:[E]).map(e=>(e.parentElement?e.parentElement.removeChild(e):void 0,e));

export { del };
