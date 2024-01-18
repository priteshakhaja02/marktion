import { RawCommands } from '../types.js';
declare global {
    interface Commands<ReturnType> {
        blockQuote: {
            /**
             * Set a blockquote node
             */
            setBlockquote: () => ReturnType;
            /**
             * Toggle a blockquote node
             */
            toggleBlockquote: () => ReturnType;
            /**
             * Unset a blockquote node
             */
            unsetBlockquote: () => ReturnType;
        };
    }
}
export declare const setBlockquote: RawCommands['setBlockquote'];
export declare const toggleBlockquote: RawCommands['toggleBlockquote'];
export declare const unsetBlockquote: RawCommands['unsetBlockquote'];
//# sourceMappingURL=blockquote.d.ts.map