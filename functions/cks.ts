/* TypeScript patch (It doesn't infer from JSDocs). */
let cks:()=>({}|{[cookieName:string]:string});

/**
 * Get the current document cookies in object form.
 *
 * @exports cks
 * @returns {{}|Object.<string,string>} The document cookies object.
 * 
 * @example
 * cks(); // If document.cookie is "a=1; b=2", returns { a: 1, b: 2 }
 * cks(); // If document.cookie is empty, returns {}
 */
cks=()=>(C=>C===""?{}:decodeURIComponent(C).split("; ").map(c=>c.split(/=(.+)?/)).map(c=>({[c[0]]:(s=>{try{return JSON.parse(s)}catch(e){return !1}})(c[1])||c[1]})).reduce((o,c)=>Object.assign(o,c)))(document.cookie);

export { cks };
