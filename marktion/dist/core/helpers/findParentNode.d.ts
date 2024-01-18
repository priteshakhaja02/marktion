import { Predicate } from '../types';
import { ResolvedPos } from 'prosemirror-model';
export declare function findParentNode(predicate: Predicate): (pos: ResolvedPos) => {
    pos: number;
    start: number;
    depth: number;
    node: import("prosemirror-model").Node;
} | undefined;
//# sourceMappingURL=findParentNode.d.ts.map