/**
 * Parse string into DOM.
 *
 * @example
 * dom("<a>Hello world</a>"); // Returns document object with that link on the body
 *
 * @param {string} S String to be parsed.
 * @exports dom
 * @returns {Document} Parsed DOM.
 */
export const dom=S=>(new DOMParser).parseFromString(S,"text/html");
