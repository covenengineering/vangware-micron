/* TypeScript patch (It doesn't infer from JSDocs). */
let dom:(s:string)=>Document;

/**
 * Parse string into DOM.
 *
 * @param {string} s String to be parsed.
 * @exports dom
 * @returns {Document} Parsed DOM.
 *
 * @example
 * dom("<a>Hello world</a>"); // Returns document object with that link on the body
 */
dom=s=>(new DOMParser).parseFromString(s,"text/html");

export { dom };
