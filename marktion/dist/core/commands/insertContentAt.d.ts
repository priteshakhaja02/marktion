import { ParseOptions } from 'prosemirror-model';
import { Content, Range, RawCommands } from '../types';
declare global {
    interface Commands<ReturnType> {
        insertContentAt: {
            /**
             * Insert a node or string of HTML at a specific position.
             */
            insertContentAt: (position: number | Range, value: Content, options?: {
                parseOptions?: ParseOptions;
                updateSelection?: boolean;
            }) => ReturnType;
        };
    }
}
export declare const insertContentAt: RawCommands['insertContentAt'];
//# sourceMappingURL=insertContentAt.d.ts.map