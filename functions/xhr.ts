/* TypeScript patch (It doesn't infer from JSDocs). */
let xhr:(u:string,m?:string)=>XMLHttpRequest;

/**
 * Alias for new XMLHttpRequest, with GET method by default.
 *
 * @param {string} u URL.
 * @param {string} [m=GET] Method.
 * @exports xhr
 * @returns {XMLHttpRequest} The opened XML HTTP Request.
 *
 * @example
 * xhr("/api").send(); // Sends request to /api
 */
xhr=(u,m="GET")=>{let x=new XMLHttpRequest;return x.open(m,u),x};

export { xhr };
