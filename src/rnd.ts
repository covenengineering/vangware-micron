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
export const rnd=(l:number=10)=>Math.random().toString(36).substr(2,l>10?10:l<1?1:l);
