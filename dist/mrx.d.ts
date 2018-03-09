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
export declare const mrx: (s: string, m: {
    [target: string]: string;
}) => string;
