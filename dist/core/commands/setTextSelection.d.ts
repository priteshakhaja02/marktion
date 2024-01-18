import { Range, RawCommands } from '../types.js';
declare global {
    interface Commands<ReturnType> {
        setTextSelection: {
            /**
             * Creates a TextSelection.
             */
            setTextSelection: (position: number | Range) => ReturnType;
        };
    }
}
export declare const setTextSelection: RawCommands['setTextSelection'];
//# sourceMappingURL=setTextSelection.d.ts.map