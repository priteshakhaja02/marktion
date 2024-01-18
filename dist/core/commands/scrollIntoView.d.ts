import { RawCommands } from '../types.js';
declare global {
    interface Commands<ReturnType> {
        scrollIntoView: {
            /**
             * Scroll the selection into view.
             */
            scrollIntoView: () => ReturnType;
        };
    }
}
export declare const scrollIntoView: RawCommands['scrollIntoView'];
//# sourceMappingURL=scrollIntoView.d.ts.map