/**
 * Curry the given function.
 * 
 * @param {Function} f Function to be curried.
 * @param {...any} A Arguments.
 * @exports cry
 * @returns {Function} Curried function.
 * 
 * @example
 * const add = (a, b) => a + b;
 * const curriedAdd = cry(add);
 * const addTwo = curriedAdd(2);
 * 
 * curriedAdd(1)(2); // Returns 3
 * addTwo(3); // Returns 5
 */
export const cry=(f:Function,...A:any[])=>(A.length>=f.length)?f(...A):(...n:any[])=>cry(f.bind(f,...A),...n);
