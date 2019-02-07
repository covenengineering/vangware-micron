/**
 * Creates a clean object.
 *
 * @template ObjectType
 * @param {ObjectType} o Objects to use.
 * @exports obj
 * @returns {ObjectType} New clean object.
 *
 * @example
 * obj({ a: 1, b: 2, c: 3}).__proto__ === void 0; // true, because is a clean object
 */
export const obj=o=>Object.assign(Object.create(null),o);
