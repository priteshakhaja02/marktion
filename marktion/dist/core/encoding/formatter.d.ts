import { Root, Node, RootContent, PhrasingContent } from 'mdast';
import type { Node as PMNode, Mark } from 'prosemirror-model';
import type { MarkdownSchema } from '../schemas';
export type FormatMdNode = Root | RootContent | PhrasingContent;
export type ParseContext = {
    paths: FormatMdNode[];
    definitions?: Record<string, {
        url: string;
        title: string | null | undefined;
    }>;
    imageReference?: Record<string, PMNode>;
    linkReference?: Record<string, Mark>;
};
export type SerializeContext = {
    getMarkSerialize?: (name: string) => FormatterImpl<GetMdAstNode<string>>;
    paths: PMNode[];
};
export type FormatterImpl<T extends Node> = {
    parse: (node: T, schema: MarkdownSchema, children: PMNode[], context: ParseContext) => PMNode[];
    serialize: (node: PMNode, children: Extract<T, {
        children: any;
    }>['children'], context: SerializeContext) => T[];
};
export type GetMdAstNode<T> = Extract<FormatMdNode, {
    type: T;
}>;
export declare const Formatter: {
    impl<T extends "image" | "blockquote" | "code" | "html" | "link" | "strong" | "table" | "heading" | "text" | "paragraph" | "break" | "definition" | "delete" | "emphasis" | "footnoteDefinition" | "footnoteReference" | "imageReference" | "inlineCode" | "linkReference" | "list" | "listItem" | "tableCell" | "tableRow" | "thematicBreak" | "yaml" | "root">(type: T, impl: FormatterImpl<GetMdAstNode<T>>): void;
    get<T_1 extends string>(type: T_1): FormatterImpl<GetMdAstNode<T_1>>;
};
//# sourceMappingURL=formatter.d.ts.map