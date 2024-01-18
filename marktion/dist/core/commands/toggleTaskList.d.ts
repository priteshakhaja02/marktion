import { RawCommands } from '../types.js';
declare global {
    interface Commands<ReturnType> {
        toggleTaskList: {
            /**
             * Wrap a node in a list.
             */
            toggleTaskList: () => ReturnType;
        };
    }
}
export declare const toggleTaskList: RawCommands['toggleTaskList'];
//# sourceMappingURL=toggleTaskList.d.ts.map