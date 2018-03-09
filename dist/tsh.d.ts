/**
 * Timestamp string hash generator (up to 8 characters).
 *
 * @param {number} l Length of the random string (8 max).
 * @exports tsh
 * @returns {string} A timestamp hash.
 *
 * @example
 * tsh(); // Timestamp hash of 8 characters, like: "km5ztiej".
 * tsh(4); // Timestamp hash of 4 characters, like: "ytbz".
 */
export declare const tsh: (l?: number) => string;
