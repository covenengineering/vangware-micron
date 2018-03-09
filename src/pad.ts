/**
 * Add padding zeros to passed number.
 *
 * @param {number|string} n Number to be padded.
 * @param {number} [l=2] Total length of resulting number.
 * @exports pad
 * @returns {string} Padded number.
 *
 * @example
 * pad(1); // Returns "01"
 * pad(2, 5); // Returns "00002"
 */
export const pad=(n:number|string,l:number=2):string=>(`${n}`.length<l)?pad(`0${n}`,l):`${n}`;
