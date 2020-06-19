/**
 * @callback CurriedMRX Curried string replacer.
 * @param {string} s String.
 * @returns {string} String with replaced elements from map.
 */

/**
 * Takes a string and an object and makes a regex map replace
 *
 * @param {Record<string, string>} m Map with format `{ "target": "replacing string" }`.
 * @exports mrx
 * @returns {CurriedMRX}
 *
 * @example
 * ```typescript
 * mrx({"a":1,"b":2,"c":3})("abc"); // Returns "123"
 * ```
 */
export const mrx=m=>s=>s.replace(new RegExp(Object.keys(m).map(c=>c.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")).join("|"),"g"),c=>m[c]);
