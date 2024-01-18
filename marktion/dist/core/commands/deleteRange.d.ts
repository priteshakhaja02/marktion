import { Range, RawCommands } from '../types';
declare global {
    interface Commands<ReturnType> {
        deleteRange: {
            /**
             * Delete a given range.
             */
            deleteRange: (range: Range) => ReturnType;
        };
    }
}
export declare const deleteRange: RawCommands['deleteRange'];
//# sourceMappingURL=deleteRange.d.ts.map