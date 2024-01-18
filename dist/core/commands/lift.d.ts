import { NodeType } from 'prosemirror-model';
import { RawCommands } from '../types';
declare global {
    interface Commands<ReturnType> {
        lift: {
            /**
             * Removes an existing wrap.
             */
            lift: (typeOrName: string | NodeType, attributes?: Record<string, any>) => ReturnType;
        };
    }
}
export declare const lift: RawCommands['lift'];
//# sourceMappingURL=lift.d.ts.map