import { NodeType } from 'prosemirror-model';
import { RawCommands } from '../types.js';
declare global {
    interface Commands<ReturnType> {
        wrapInList: {
            /**
             * Wrap a node in a list.
             */
            wrapInList: (typeOrName: string | NodeType, attributes?: Record<string, any>) => ReturnType;
        };
    }
}
export declare const wrapInList: RawCommands['wrapInList'];
//# sourceMappingURL=wrapInList.d.ts.map