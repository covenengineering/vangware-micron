"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* TypeScript patch (It doesn't infer from JSDocs). */
let dom;
exports.dom = dom;
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
exports.dom = dom = s => (new DOMParser).parseFromString(s, "text/html");
