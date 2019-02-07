/**
 * Curry the given function.
 * Loosely typed because typing curry is hell.
 * 
 * @param {Function} f Function to be curried.
 * @param {...any} A Arguments.
 * @exports cry
 * @returns {any} Curried function or function output.
 * 
 * @example
 * const add = (a, b) => a + b;
 * const curriedAdd = cry(add);
 * const addTwo = curriedAdd(2);
 * 
 * curriedAdd(1)(2); // Returns 3
 * addTwo(3); // Returns 5
 */
export const cry=(f,...A)=>(A.length>=f.length)?f(...A):/** @param {...any} n */(...n)=>cry(f.bind(f,...A),...n);
