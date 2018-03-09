"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* TypeScript patch (It doesn't infer from JSDocs). */
let pad;
exports.pad = pad;
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
exports.pad = pad = (n, l = 2) => (`${n}`.length < l) ? pad(`0${n}`, l) : `${n}`;
