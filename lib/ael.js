/**
 * Listen to several events on an element or a group of elements.
 *
 * @template {HTMLElement} ElementType
 * @param {ElementType | ElementType[]} E DOM Element or Array of DOM Elements with event.
 * @param {Object.<string, EventListener>} V List of events and callbacks in Object format.
 * @exports ael
 * @returns {ElementType[]} DOM Element or Array of DOM Elements with new attributes.
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
export const ael=(E,V)=>(Array.isArray(E)?E:[E]).map(e=>Object.keys(V).map(v=>(e.addEventListener(v,V[v]),e))[0]);
