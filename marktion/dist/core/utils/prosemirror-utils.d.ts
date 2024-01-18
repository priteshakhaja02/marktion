import { EditorState, Selection } from 'prosemirror-state';
import type { Transaction, PluginKey, Plugin } from 'prosemirror-state';
import { Fragment, Node as ProsemirrorNode, NodeType } from 'prosemirror-model';
import { EditorView } from 'prosemirror-view';
export interface ProsemirrorNodeProps {
    /**
     * The prosemirror node
     */
    node: ProsemirrorNode;
}
export interface NodeTypesProps {
    /**
     * The prosemirror node types to use.
     */
    types: NodeType | string | Array<NodeType | string>;
}
export interface OptionalProsemirrorNodeProps {
    /**
     * The nullable prosemirror node which may or may not exist. Please note that
     * the `find` will fail if this does not exists.
     *
     * To prevent cryptic errors this should always be the `doc` node.
     */
    node: ProsemirrorNode | null | undefined;
}
interface NodeEqualsTypeProps extends NodeTypesProps, OptionalProsemirrorNodeProps {
}
export interface TransactionProps {
    /**
     * The prosemirror transaction
     */
    tr: Transaction;
}
export interface PosProps {
    /**
     * The position of the referenced prosemirror item.
     */
    pos: number;
}
interface RemoveNodeAtPositionProps extends TransactionProps, PosProps {
}
interface ReplaceNodeAtPositionProps extends RemoveNodeAtPositionProps {
    content: Fragment | ProsemirrorNode | ProsemirrorNode[];
}
export declare function replaceNodeAtPosition({ pos, tr, content }: ReplaceNodeAtPositionProps): Transaction;
export interface FindProsemirrorNodeResult extends ProsemirrorNodeProps {
    /**
     * The start position of the node.
     */
    start: number;
    /**
     * The end position of the node.
     */
    end: number;
    /**
     * Points to position directly before the node.
     */
    pos: number;
    /**
     * The depth the node. Equal to 0 if node is the root.
     */
    depth: number;
}
/**
 * Checks if the type a given `node` has a given `nodeType`.
 */
export declare function isNodeOfType(props: NodeEqualsTypeProps): boolean;
/**
 * Checks to see if the passed value is a Prosemirror Editor State
 *
 * @param value - the value to check
 */
export declare function isEditorState(value: unknown): value is EditorState | Readonly<EditorState>;
/**
 * Predicate checking whether the value is a Selection
 *
 * @param value - the value to check
 */
export declare function isSelection(value: unknown): value is Selection;
export declare function getPluginKey(key: string | Plugin | PluginKey): string;
export declare function posToDOMRect(view: EditorView, from: number, to: number): DOMRect;
export declare function posToOffsetRect(view: EditorView, from: number, to: number): DOMRect;
export {};
//# sourceMappingURL=prosemirror-utils.d.ts.map