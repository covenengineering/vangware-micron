/**
 * @callback CurriedAEL Curried Event listener
 * @param {HTMLElement[]} E Array of DOM Elements with event.
 * @returns {HTMLElement[]} Array of DOM Elements with new attributes.
 */

/**
 * Listen to several events on an element or a group of elements.
 *
 * @param {Record<string, EventListener>} V List of events and callbacks in Object format.
 * @exports ael
 * @returns {CurriedAEL}
 *
 * @example
 * ```typescript
 * // <a id="id">Link</a>
 * ael({
 * 	click: event => {
 * 		event.preventDefault();
 * 		console.log("#id element clicked");
 * 	}
 * })(get("#id"));
 * ```
 */
export const ael=V=>E=>E.map(e=>Object.keys(V).map(v=>(e.addEventListener(v,V[v]),e))[0]);
