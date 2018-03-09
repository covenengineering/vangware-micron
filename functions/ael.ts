/* TypeScript patch (It doesn't infer from JSDocs). */
let ael:(E:HTMLElement|HTMLElement[],V:{[eventName:string]:EventListener})=>HTMLElement[];

/**
 * Listen to several events on an element or a group of elements.
 *
 * @param {(HTMLElement|HTMLElement[])} E DOM Element or Array of DOM Elements with event.
 * @param {Object.<string,EventListener>} V List of events and callbacks in Object format.
 * @exports ael
 * @returns {HTMLElement[]} DOM Element or Array of DOM Elements with event.
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
ael=(E,V)=>(Array.isArray(E)?E:[E]).map(e=>Object.keys(V).map(v=>(e.addEventListener(v,V[v]),e))[0]);

export { ael };
