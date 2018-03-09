"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.cry = (f, ...A) => (A.length >= f.length) ? f(...A) : (...n) => exports.cry(f.bind(f, ...A), ...n);
