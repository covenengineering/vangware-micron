/**
 * Creates a new element.
 *
 * @param {string} t Element tag.
 * @param {Object.<string,any>} [P={}] Element properties.
 * @exports cne
 * @returns {HTMLElement} New element with properties set.
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
 */
export declare const cne: (t: string, P?: {
    [propertyName: string]: any;
}) => HTMLElement & {
    [propertyName: string]: any;
};
