import { ParseOptions } from 'prosemirror-model';
import { Content, RawCommands } from '../types.js';
declare global {
    interface Commands<ReturnType> {
        setContent: {
            /**
             * Replace the whole document with new content.
             */
            setContent: (content: Content, emitUpdate?: boolean, parseOptions?: ParseOptions) => ReturnType;
        };
    }
}
export declare const setContent: RawCommands['setContent'];
//# sourceMappingURL=setContent.d.ts.map