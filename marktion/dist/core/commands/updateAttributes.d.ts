import { MarkType, NodeType } from 'prosemirror-model';
import { RawCommands } from '../types.js';
declare global {
    interface Commands<ReturnType> {
        updateAttributes: {
            /**
             * Update attributes of a node or mark.
             */
            updateAttributes: (typeOrName: string | NodeType | MarkType, attributes: Record<string, any>) => ReturnType;
        };
    }
}
export declare const updateAttributes: RawCommands['updateAttributes'];
//# sourceMappingURL=updateAttributes.d.ts.map