"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get the current document cookies in object form.
 *
 * @example
 * cks(); // If document.cookie is "a=1; b=2", this returns { a: 1, b: 2 }
 * cks(); // If document.cookie is empty, this returns {}
 *
 * @exports cks
 * @returns {Object} The document cookies object.
 */
exports.cks = () => (C => C === "" ? {} : decodeURIComponent(C).split("; ").map(c => c.split(/=(.+)?/)).map(c => ({ [c[0]]: (s => { try {
        return JSON.parse(s);
    }
    catch (e) {
        return !1;
    } })(c[1]) || c[1] })).reduce((o, c) => Object.assign(o, c)))(document.cookie);
