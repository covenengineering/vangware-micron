/**
 * Takes a string and an object and makes a regex map replace
 *
 * @example
 * mrx("abc", {"a":1,"b":2,"c":3}); // Returns "123"
 *
 * @param  {string} s String.
 * @param  {Object} m Map with format { "string to be replaced": "replacing string" }.
 * @exports mrx
 * @returns {string} String with replaced elements from map.
 */
export declare const mrx: (s: any, m: any) => any;
