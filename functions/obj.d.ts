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
export declare const obj: (...o: any[]) => any;
