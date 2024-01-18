import { NodeType } from 'prosemirror-model';
import { RawCommands } from '../types.js';
declare global {
    interface Commands<ReturnType> {
        toggleList: {
            /**
             * Toggle between different list types.
             */
            toggleList: (listTypeOrName: string | NodeType, itemTypeOrName: string | NodeType, keepMarks?: boolean, attributes?: Record<string, any>) => ReturnType;
        };
    }
}
export declare const toggleList: RawCommands['toggleList'];
//# sourceMappingURL=toggleList.d.ts.map