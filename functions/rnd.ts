/**
 * Random string generator (up to 10 characters).
 * Credit: https://github.com/Jacob-Friesen/obscurejs/blob/master/2015/oneLineRandomText.js
 *
 * @param {number} l Length of the random string.
 * @exports rnd
 * @returns {string} A random string.
 */
export const rnd=(l=10)=>Math.random().toString(36).substr(2,l>10?10:l<1?1:l);
