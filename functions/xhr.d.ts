/**
 * Alias for new XMLHttpRequest, with GET method by default.
 *
 * @example
 * xhr("/api").send(); // Sends request to /api
 *
 * @param {string} u URL.
 * @param {string} [m=GET] Method.
 * @exports xhr
 * @returns {XMLHttpRequest} The opened XML HTTP Request.
 */
export declare const xhr: (u: any, m?: string) => XMLHttpRequest;
