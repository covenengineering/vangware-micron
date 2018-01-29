/**
 * Creates a clean object with a forEach method.
 *
 * @example
 * obj({ a: 1, b: 2, c: 3}).__proto__ === void 0; // true, because is a clean object
 *
 * @param {...Object} o Objects to use.
 * @exports obj
 * @returns {Object} New clean object.
 */
export const obj=(...o)=>(O=>(O.defineProperty(O.assign(O.create(null),...o),"forEach",{value(c){O.keys(this).map(k=>c(this[k],k,this))}})))(Object);
