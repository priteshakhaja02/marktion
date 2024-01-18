import { RawCommands } from '../types.js';
declare global {
    interface Commands<ReturnType> {
        image: {
            /**
             * Add an image
             */
            setImage: (options: {
                src: string;
                alt?: string;
                title?: string;
            }) => ReturnType;
        };
    }
}
export declare const setImage: RawCommands['setImage'];
//# sourceMappingURL=image.d.ts.map