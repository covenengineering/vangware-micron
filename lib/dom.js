/**
 * Parse string into DOM.
 *
 * @param {string} s String to be parsed.
 * @exports dom
 * @returns {Document[]} Parsed DOM.
 *
 * @example
 * dom("<a>Hello world</a>"); // Returns document object with that link on the body
 */
export const dom=s=>[(new DOMParser).parseFromString(s,"text/html")];
