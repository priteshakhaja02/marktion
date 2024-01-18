/**
 * Assert the value is `truthy`. Good for defensive programming, especially
 * after enabling `noUncheckedIndexedAccess` in the tsconfig `compilerOptions`.
 */
export declare function assert(testValue: unknown, message?: string): asserts testValue;
/**
 * Creates an object with the null prototype.
 *
 * @param value - the object to create
 */
export declare function object<Type extends object>(value?: Type): Type;
/**
 * Sorts an array while retaining the original order when the compare method
 * identifies the items as equal.
 *
 * `Array.prototype.sort()` is unstable and so values that are the same will
 * jump around in a non deterministic manner. Here I'm using the index as a
 * fallback. If two elements have the same priority the element with the lower
 * index is placed first hence retaining the original order.
 *
 * @param array - the array to sort
 * @param compareFn - compare the two value arguments `a` and `z` - return 0 for
 *                  equal - return number > 0 for a > z - return number < 0 for
 *                  z > a
 */
export declare function sort<Type>(array: Type[], compareFn: (a: Type, z: Type) => number): Type[];
/**
 * Finds all the regex matches for a string
 *
 * @param text - the text to check against
 * @param regexp - the regex (which should include a 'g' flag)
 *
 */
export declare function findMatches(text: string, regexp: RegExp, runWhile?: (match: RegExpExecArray | null) => boolean): RegExpExecArray[];
//# sourceMappingURL=helpers.d.ts.map