import { VNode } from 'snabbdom';
import { VNodeChildren } from 'snabbdom/build/h';
import { DOMOutputSpec, Schema, Fragment, Node, Mark } from 'prosemirror-model';
export type StoreComponent = Record<string, (node: Node, children: VNodeChildren, serializer: HtmlSerializer) => VNodeChildren>;
export declare class HtmlSerializer {
    schema: Schema;
    storeComponent: StoreComponent;
    static renderSpec(structure: DOMOutputSpec, wraps?: VNodeChildren): VNodeChildren;
    constructor(schema: Schema, storeComponent?: StoreComponent);
    serialize(markdown: string): string;
    fragment(content: Fragment): VNode;
    node(node: Node): VNodeChildren;
    mark(mark: Mark, inline: boolean, children: VNodeChildren): VNodeChildren;
}
export declare const defaultStoreCompent: StoreComponent;
//# sourceMappingURL=ssr-serialize.d.ts.map