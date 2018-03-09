"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a clean object.
 *
 * @param {...Object} o Objects to use.
 * @exports obj
 * @returns {Object} New clean object.
 *
 * @example
 * obj({ a: 1, b: 2, c: 3}).__proto__ === void 0; // true, because is a clean object
 */
exports.obj = (...o) => Object.assign(Object.create(null), ...o);
