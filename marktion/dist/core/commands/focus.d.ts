import { FocusPosition, RawCommands } from '../types';
declare global {
    interface Commands<ReturnType> {
        focus: {
            /**
             * Focus the editor at the given position.
             */
            focus: (position?: FocusPosition, options?: {
                scrollIntoView?: boolean;
            }) => ReturnType;
        };
    }
}
export declare const focus: RawCommands['focus'];
//# sourceMappingURL=focus.d.ts.map