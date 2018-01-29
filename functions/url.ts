/**
 * Parse an object into a simple string in URL format for XHR.
 *
 * @example
 * url({ a: 1, b: 2, c: 3 }); // Returns "a=1&b=2&c=3"
 * url({ a: [1, 2, 3], b: { c: 1, d: 2 } }) // Returns "a[0]=1&a[1]=2&a[2]=3&b[c]=1&b[d]=2"
 *
 * @param {Object} o List of input data for ajax in Object format.
 * @exports url
 * @returns {string} URL formated string.
 */
export const url=o=>Object.keys(o).map(p=>Array.isArray(o[p])?o[p].map((r,q)=>url({[p+`[${q}]`]:r})).join("&"):(typeof o[p]==="object"&&o[p]!==null)?url(Object.keys(o[p]).reduce((r,q)=>Object.assign(r,{[p+`[${q}]`]:o[p][q]}),{})):p+"="+encodeURIComponent(o[p])).join("&");
