import { MarkType } from 'prosemirror-model';
import { RawCommands } from '../types';
declare global {
    interface Commands<ReturnType> {
        setMark: {
            /**
             * Add a mark with new attributes.
             */
            setMark: (typeOrName: string | MarkType, attributes?: Record<string, any>) => ReturnType;
        };
    }
}
export declare const setMark: RawCommands['setMark'];
//# sourceMappingURL=setMark.d.ts.map