"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.dom = S => (new DOMParser).parseFromString(S, "text/html");
