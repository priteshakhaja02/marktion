import { RawCommands } from '../types.js';
declare global {
    interface Commands<ReturnType> {
        codeBlock: {
            /**
             * Set a code block
             */
            setCodeBlock: (attributes?: {
                language: string;
            }) => ReturnType;
            /**
             * Toggle a code block
             */
            toggleCodeBlock: (attributes?: {
                language: string;
            }) => ReturnType;
        };
    }
}
export declare const toggleCodeBlock: RawCommands['toggleCodeBlock'];
export declare const setCodeBlock: RawCommands['setCodeBlock'];
//# sourceMappingURL=codeblock.d.ts.map