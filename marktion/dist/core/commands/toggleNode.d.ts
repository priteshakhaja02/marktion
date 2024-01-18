import { NodeType } from 'prosemirror-model';
import { RawCommands } from '../types';
declare global {
    interface Commands<ReturnType> {
        toggleNode: {
            /**
             * Toggle a node with another node.
             */
            toggleNode: (typeOrName: string | NodeType, toggleTypeOrName: string | NodeType, attributes?: Record<string, any>) => ReturnType;
        };
    }
}
export declare const toggleNode: RawCommands['toggleNode'];
//# sourceMappingURL=toggleNode.d.ts.map