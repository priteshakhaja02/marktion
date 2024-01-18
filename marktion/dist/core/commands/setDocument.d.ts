import { Node } from 'prosemirror-model';
import { RawCommands } from '../types.js';
declare global {
    interface Commands<ReturnType> {
        setDocument: {
            /**
             * Replace the whole document with new content.
             */
            setDocument: (document: Node, emitUpdate?: boolean) => ReturnType;
        };
    }
}
export declare const setDocument: RawCommands['setDocument'];
//# sourceMappingURL=setDocument.d.ts.map