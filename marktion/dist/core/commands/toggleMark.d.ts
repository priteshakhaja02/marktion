import { MarkType } from 'prosemirror-model';
import { RawCommands } from '../types.js';
import { MarkdownMark } from '..';
declare global {
    interface Commands<ReturnType> {
        toggleMark: {
            /**
             * Toggle a mark on and off.
             */
            toggleMark: (typeOrName: MarkdownMark | MarkType, attributes?: Record<string, any>, options?: {
                /**
                 * Removes the mark even across the current selection. Defaults to `false`.
                 */
                extendEmptyMarkRange?: boolean;
            }) => ReturnType;
        };
        toggleStrong: {
            toggleStrong: () => ReturnType;
        };
        toggleEm: {
            toggleEm: () => ReturnType;
        };
        toggleCode: {
            toggleCode: () => ReturnType;
        };
        toggleStrike: {
            toggleStrike: () => ReturnType;
        };
    }
}
export declare const toggleMark: RawCommands['toggleMark'];
export declare const toggleStrong: RawCommands['toggleStrong'];
export declare const toggleEm: RawCommands['toggleEm'];
export declare const toggleCode: RawCommands['toggleCode'];
export declare const toggleStrike: RawCommands['toggleStrike'];
//# sourceMappingURL=toggleMark.d.ts.map