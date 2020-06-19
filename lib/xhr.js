/**
 * @callback CurriedXHR Curried XMLHttpRequest
 * @param {string} u URL to make the request to.
 * @returns {XMLHttpRequest} DOM Element or Array of DOM Elements with new attributes.
 */

/**
 * Alias for new XMLHttpRequest, with GET method by default.
 *
 * @param {string} m Method (GET/PUT/POST/PATCH/DELETE).
 * @exports xhr
 * @returns {CurriedXHR} Curried function that returns the opened XML HTTP Request.
 *
 * @example
 * ```typescript
 * xhr("GET")("/api").send(); // Sends request to /api
 * ```
 */
export const xhr=m=>u=>(x=>(x.open(m,u),x))(new XMLHttpRequest);
