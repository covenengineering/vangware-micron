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
export const mrx=(s,m)=>s.replace(new RegExp(Object.keys(m).map(c=>c.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")).join("|"),"g"),c=>m[c]);
