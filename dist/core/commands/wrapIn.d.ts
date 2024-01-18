import { NodeType } from 'prosemirror-model';
import { RawCommands } from '../types';
declare global {
    interface Commands<ReturnType> {
        wrapIn: {
            /**
             * Wraps nodes in another node.
             */
            wrapIn: (typeOrName: string | NodeType, attributes?: Record<string, any>) => ReturnType;
        };
    }
}
export declare const wrapIn: RawCommands['wrapIn'];
//# sourceMappingURL=wrapIn.d.ts.map