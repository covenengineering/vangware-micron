/* TypeScript patch (It doesn't infer from JSDocs). */
let obj:(...o:Object[])=>Object;

/**
 * Creates a clean object.
 *
 * @param {...Object} o Objects to use.
 * @exports obj
 * @returns {Object} New clean object.
 *
 * @example
 * obj({ a: 1, b: 2, c: 3}).__proto__ === void 0; // true, because is a clean object
 */
obj=(...o)=>Object.assign(Object.create(null),...o);

export { obj };
