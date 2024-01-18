import { NodeType } from 'prosemirror-model';
import { RawCommands } from '../types.js';
declare global {
    interface Commands<ReturnType> {
        sinkListItem: {
            /**
             * Sink the list item down into an inner list.
             */
            sinkListItem: (typeOrName: string | NodeType) => ReturnType;
        };
    }
}
export declare const sinkListItem: RawCommands['sinkListItem'];
//# sourceMappingURL=sinkListItem.d.ts.map