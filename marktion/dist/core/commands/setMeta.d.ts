import { RawCommands } from '../types.js';
declare global {
    interface Commands<ReturnType> {
        setMeta: {
            /**
             * Store a metadata property in the current transaction.
             */
            setMeta: (key: string, value: any) => ReturnType;
        };
    }
}
export declare const setMeta: RawCommands['setMeta'];
//# sourceMappingURL=setMeta.d.ts.map