import { Command } from 'prosemirror-state';
import { MarkdownSchema } from '../schemas';
export declare function KeymapPlugin(schema: MarkdownSchema, mapKeys?: {
    [key: string]: false | string;
}): import("prosemirror-state").Plugin<any>;
export declare function buildKeymap(schema: MarkdownSchema, mapKeys?: {
    [key: string]: false | string;
}): {
    [key: string]: Command;
};
//# sourceMappingURL=KeymapPlugin.d.ts.map