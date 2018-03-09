/**
 * Parse an object into a simple string in URL format for XHR.
 *
 * @param {Object} o List of input data for ajax in Object format.
 * @exports url
 * @returns {string} URL formated string.
 *
 * @example
 * url({ a: 1, b: 2, c: 3 }); // Returns "a=1&b=2&c=3"
 * url({ a: [1, 2, 3], b: { c: 1, d: 2 } }) // Returns "a[0]=1&a[1]=2&a[2]=3&b[c]=1&b[d]=2"
 */
export declare const url: (o: {
    [property: string]: any;
}) => string;
