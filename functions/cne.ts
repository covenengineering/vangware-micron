/**
 * Creates a new element.
 *
 * @example
 * cne("div"); // Returns <div></div>
 * cne("div", {
 *   width: 100,
 *   height: 100,
 *   style: {
 *     backgroundColor: "#000"
 *   }
 * }); // Returns <div width="100" height="100" style="background-color:#000"></div>
 *
 * @param {string} t Element tag.
 * @param {any} [P={}] Element properties.
 * @exports cne
 * @returns {HTMLElement} New element with properties set.
 */
export const cne=(t,P={})=>Object.assign(document.createElement(t),P);
