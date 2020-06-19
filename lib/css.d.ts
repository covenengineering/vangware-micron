export function css(S: CSSStyleDeclaration): CurriedCSS;
/**
 * Curried style setter.
 */
export type CurriedCSS = (E: HTMLElement[]) => HTMLElement[];
