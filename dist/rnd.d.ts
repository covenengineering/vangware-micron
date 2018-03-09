/**
 * Random string generator (up to 10 characters).
 * Credit: https://github.com/Jacob-Friesen/obscurejs/blob/master/2015/oneLineRandomText.js
 *
 * @param {number} l Length of the random string.
 * @exports rnd
 * @returns {string} A random string.
 *
 * @example
 * rnd(); // Random string of 10 characters, like: "oosjghfusv".
 * rnd(5); // Random string of 5 characters, like: "fz5ik".
 */
export declare const rnd: (l?: number) => string;
