/**
 * Add padding zeros to passed number.
 *
 * @example
 * pad(1); // Returns "01"
 * pad(2, 5); // Returns "00002"
 *
 * @param {number} n Number to be padded.
 * @param {number} [l=2] Total length of resulting number.
 * @exports pad
 * @returns {string} Padded number.
 */
export const pad=(n,l=2)=>(`${n}`.length<l)?pad(`0${n}`,l):`${n}`;
