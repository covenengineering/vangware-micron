"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Timestamp string hash generator (up to 8 characters).
 *
 * @param {number} l Length of the random string (8 max).
 * @exports tsh
 * @returns {string} A timestamp hash.
 */
exports.tsh = (l = 8) => Date.now().toString(36).slice(0, l > 8 ? 8 : l < 1 ? 1 : l);
