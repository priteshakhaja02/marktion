import { RawCommands } from '../types.js';
declare global {
    interface Commands<ReturnType> {
        toggleBulletList: {
            /**
             * Wrap a node in a list.
             */
            toggleBulletList: () => ReturnType;
        };
    }
}
export declare const toggleBulletList: RawCommands['toggleBulletList'];
//# sourceMappingURL=toggleBulletList.d.ts.map