import { InputRule } from 'prosemirror-inputrules';
import { NodeType, MarkType } from 'prosemirror-model';
import { MarkdownSchema } from '../schemas';
export declare function blockQuoteRule(nodeType: NodeType): InputRule;
export declare function orderedListRule(nodeType: NodeType): InputRule;
export declare function bulletListRule(nodeType: NodeType): InputRule;
export declare function codeBlockRule(nodeType: NodeType): InputRule;
export declare function headingRule(nodeType: NodeType, maxLevel: number): InputRule;
export declare function insertTaskRule(nodeType: NodeType): InputRule[];
export declare function insertTableInputRule(schema: MarkdownSchema): InputRule;
export declare function insertHrInputRule(nodeType: NodeType): InputRule;
export declare function insertImageRule(nodeType: NodeType): InputRule;
export declare function markStrong(markType: MarkType): InputRule;
export declare function markEm(markType: MarkType): InputRule[];
export declare const LEAF_NODE_REPLACING_CHARACTER = "\uFFFC";
export declare function markCode(markType: MarkType): InputRule;
export declare function markStrike(markType: MarkType): InputRule;
export declare function insertLinkRule(markType: MarkType): InputRule;
export declare function InputRulesPlugin(schema: MarkdownSchema): import("prosemirror-state").Plugin<{
    transform: import("prosemirror-state").Transaction;
    from: number;
    to: number;
    text: string;
} | null>;
//# sourceMappingURL=InputRulesPlugin.d.ts.map