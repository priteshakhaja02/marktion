import { RawCommands } from '../types.js';
declare global {
    interface Commands<ReturnType> {
        link: {
            /**
             * Set a link mark
             */
            setLink: (attributes: {
                href: string;
                target?: string | null;
                rel?: string | null;
                class?: string | null;
            }) => ReturnType;
            /**
             * Toggle a link mark
             */
            toggleLink: (attributes: {
                href: string;
                target?: string | null;
                rel?: string | null;
                class?: string | null;
            }) => ReturnType;
            /**
             * Unset a link mark
             */
            unsetLink: () => ReturnType;
        };
    }
}
export declare const setLink: RawCommands['setLink'];
export declare const toggleLink: RawCommands['toggleLink'];
export declare const unsetLink: RawCommands['unsetLink'];
//# sourceMappingURL=link.d.ts.map