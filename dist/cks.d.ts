/**
 * Get the current document cookies in object form.
 *
 * @exports cks
 * @returns {{}|Object.<string,string>} The document cookies object.
 *
 * @example
 * cks(); // If document.cookie is "a=1; b=2", returns { a: 1, b: 2 }
 * cks(); // If document.cookie is empty, returns {}
 */
export declare const cks: () => {};
