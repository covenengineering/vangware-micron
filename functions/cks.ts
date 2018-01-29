/**
 * Get the current document cookies in object form.
 *
 * @exports cks
 * @returns {Object} The document cookies object.
 */
export const cks=()=>decodeURIComponent(document.cookie).split("; ").map(c=>c.split(/=(.+)?/)).map(c=>({[c[0]]:(s=>{try{return JSON.parse(s)}catch(e){return !1}})(c[1])||c[1]})).reduce((o,c)=>Object.assign(o,c));
