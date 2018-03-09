"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* TypeScript patch (It doesn't infer from JSDocs). */
let get;
exports.get = get;
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
exports.get = get = (q, e = document) => Array.from(e.querySelectorAll(q));
