/**
 * Curry the given function.
 *
 * @example
 * const add = (a, b) => a + b;
 * const curryedAdd = cry(add);
 * const addTwo = curryedAdd(2);
 *
 * curryedAdd(1)(2); // Returns 3
 * addTwo(3); // Returns 5
 *
 * @param {Function} f Function to be curried.
 * @param {any[]} A Arguments.
 * @exports cry
 * @returns {Function} Curried function.
 */
export declare const cry: (f: any, ...A: any[]) => any;
