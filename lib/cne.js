/**
 * @callback CurriedCNE Curried element creation.
 * @param {HTMLElement} [P] Element properties.
 * @returns {HTMLElement[]} New element with properties set.
 */

/**
 * Creates a new element.
 *
 * @param {string} t Element tag.
 * @exports cne
 * @returns {CurriedCNE}
 *
 * @example
 * ```typescript
 * cne("div")(); // Returns <div></div>
 * cne("div")({
 * 	width: "100",
 * 	height: "100",
 * 	style: {
 * 		backgroundColor: "#000"
 * 	}
 * }); // Returns <div width="100" height="100" style="background-color:#000"></div>
 * ```
 */
export const cne=t=>P=>[Object.assign(document.createElement(t),P??{})];
