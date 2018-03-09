/* TypeScript patch (It doesn't infer from JSDocs). */
let get:(q:string,e?:HTMLElement|Document)=>HTMLElement[];

/**
 * Alias for querySelectorAll in an array.
 *
 * @param {string} q CSS Query.
 * @param {HTMLElement|Document} [e=document] Base element.
 * @exports get
 * @returns {HTMLElement[]} Array of elements.
 *
 * @example
 * // <a id="id">Link</a>
 * get("#id"); // Above element gets returned
 */
get=(q,e=document)=>Array.from(e.querySelectorAll(q));

export { get };
