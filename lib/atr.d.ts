export function atr(A: Record<string, string>): CurriedATR;
/**
 * Curried attribute setter.
 */
export type CurriedATR = (E: HTMLElement[]) => HTMLElement[];
