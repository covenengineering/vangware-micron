"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* TypeScript patch (It doesn't infer from JSDocs). */
let mrx;
exports.mrx = mrx;
/**
 * Takes a string and an object and makes a regex map replace
 *
 * @param  {string} s String.
 * @param  {Object.<string,string>} m Map with format { "target": "replacing string" }.
 * @exports mrx
 * @returns {string} String with replaced elements from map.
 *
 * @example
 * mrx("abc", {"a":1,"b":2,"c":3}); // Returns "123"
 */
exports.mrx = mrx = (s, m) => s.replace(new RegExp(Object.keys(m).map(c => c.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")).join("|"), "g"), c => m[c]);
