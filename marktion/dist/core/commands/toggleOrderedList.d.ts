import { RawCommands } from '../types.js';
declare global {
    interface Commands<ReturnType> {
        toggleOrderedList: {
            /**
             * Wrap a node in a list.
             */
            toggleOrderedList: () => ReturnType;
        };
    }
}
export declare const toggleOrderedList: RawCommands['toggleOrderedList'];
//# sourceMappingURL=toggleOrderedList.d.ts.map