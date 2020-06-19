export function mrx(m: Record<string, string>): CurriedMRX;
/**
 * Curried string replacer.
 */
export type CurriedMRX = (s: string) => string;
