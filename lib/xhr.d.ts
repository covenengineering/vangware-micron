export function xhr(m: string): CurriedXHR;
/**
 * Curried XMLHttpRequest
 */
export type CurriedXHR = (u: string) => XMLHttpRequest;
