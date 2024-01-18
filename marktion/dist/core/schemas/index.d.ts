import { Schema, MarkSpec } from 'prosemirror-model';
export declare const nodes: {
    heading: import("prosemirror-model").NodeSpec;
    code_block: import("prosemirror-model").NodeSpec;
    task_item: import("prosemirror-model").NodeSpec;
    task_list: import("prosemirror-model").NodeSpec;
    ordered_list: import("prosemirror-model").NodeSpec;
    bullet_list: import("prosemirror-model").NodeSpec;
    list_item: import("prosemirror-model").NodeSpec;
    text: {
        group: string;
    };
    image: import("prosemirror-model").NodeSpec;
    hard_break: import("prosemirror-model").NodeSpec;
    table: import("prosemirror-model").NodeSpec;
    table_row: import("prosemirror-model").NodeSpec;
    table_cell: import("prosemirror-model").NodeSpec;
    table_header: import("prosemirror-model").NodeSpec;
    doc: {
        content: string;
    };
    paragraph: import("prosemirror-model").NodeSpec;
    blockquote: import("prosemirror-model").NodeSpec;
    horizontal_rule: import("prosemirror-model").NodeSpec;
};
export declare const marks: {
    em: MarkSpec;
    strong: MarkSpec;
    link: MarkSpec;
    code: MarkSpec;
    strike: MarkSpec;
};
export declare const schema: Schema<"image" | "blockquote" | "table" | "doc" | "table_row" | "table_cell" | "table_header" | "heading" | "code_block" | "task_item" | "task_list" | "ordered_list" | "bullet_list" | "list_item" | "text" | "hard_break" | "paragraph" | "horizontal_rule", "code" | "em" | "link" | "strong" | "strike">;
export type MarkdownSchema = typeof schema;
export type MarkdownMark = MarkdownSchema extends Schema<infer N, infer M> ? M : never;
export type MarkdownNode = MarkdownSchema extends Schema<infer N, infer M> ? N : never;
//# sourceMappingURL=index.d.ts.map