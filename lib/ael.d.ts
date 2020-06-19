export function ael(V: Record<string, EventListener>): CurriedAEL;
/**
 * Curried Event listener
 */
export type CurriedAEL = (E: HTMLElement[]) => HTMLElement[];
