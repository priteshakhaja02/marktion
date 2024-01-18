import { Range, RawCommands } from '../types';
declare global {
    interface Commands<ReturnType> {
        markdown: {
            setMarkdwon: (content: string, emitUpdate?: boolean) => ReturnType;
            insertMarkdownAt: (position: number | Range, value: string) => ReturnType;
        };
    }
}
export declare const insertMarkdownAt: RawCommands['insertMarkdownAt'];
//# sourceMappingURL=markdown.d.ts.map