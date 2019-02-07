/**
 * Alias for new XMLHttpRequest, with GET method by default.
 *
 * @param {string} u URL.
 * @param {string} [m="GET"] Method.
 * @exports xhr
 * @returns {XMLHttpRequest} The opened XML HTTP Request.
 *
 * @example
 * xhr("/api").send(); // Sends request to /api
 */
export const xhr=(u,m="GET")=>{let x=new XMLHttpRequest;return x.open(m,u),x};
