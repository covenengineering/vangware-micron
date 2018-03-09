/* TypeScript patch (It doesn't infer from JSDocs). */
let cry:(f:Function,...A:any[])=>((...A:any[])=>any);

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
cry=(f,...A)=>(A.length>=f.length)?f(...A):(...n)=>cry(f.bind(f,...A),...n);

export { cry };
