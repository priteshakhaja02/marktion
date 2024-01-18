export declare function escapeForRegEx(string: string): string;
export declare function minMax(value?: number, min?: number, max?: number): number;
export declare function isRegExp(value: any): value is RegExp;
/**
 * Check if object1 includes object2
 * @param object1 Object
 * @param object2 Object
 */
export declare function objectIncludes(object1: Record<string, any>, object2: Record<string, any>, options?: {
    strict: boolean;
}): boolean;
export declare function elementFromString(value: string): HTMLElement;
//# sourceMappingURL=utilities.d.ts.map