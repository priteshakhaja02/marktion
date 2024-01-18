import { NodeType } from 'prosemirror-model';
import { RawCommands } from '../types.js';
declare global {
    interface Commands<ReturnType> {
        liftListItem: {
            /**
             * Lift the list item into a wrapping list.
             */
            liftListItem: (typeOrName: string | NodeType) => ReturnType;
        };
    }
}
export declare const liftListItem: RawCommands['liftListItem'];
//# sourceMappingURL=liftListItem.d.ts.map