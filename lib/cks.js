/**
 * Get the current document cookies in object form.
 *
 * @exports cks
 * @param {string} [C] Cookie string (default to document.cookie).
 * @returns {Record<string, string>} The document cookies object.
 *
 * @example
 * ```typescript
 * cks(); // If document.cookie is "a=1; b=2", returns { a: 1, b: 2 }
 * cks(); // If document.cookie is empty, returns {}
 * ```
 */
export const cks=(C=document.cookie)=>C===""?{}:decodeURIComponent(C).split("; ").map(c=>c.split(/=(.+)?/)).map(c=>({[c[0]]:(s=>{try{return JSON.parse(s)}catch(e){return !1}})(c[1])||c[1]})).reduce((o,c)=>({...o,...c}));
