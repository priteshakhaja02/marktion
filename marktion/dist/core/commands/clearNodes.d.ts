import { RawCommands } from '../types.js';
declare global {
    interface Commands<ReturnType> {
        clearNodes: {
            /**
             * Normalize nodes to a simple paragraph.
             */
            clearNodes: () => ReturnType;
        };
    }
}
export declare const clearNodes: RawCommands['clearNodes'];
//# sourceMappingURL=clearNodes.d.ts.map