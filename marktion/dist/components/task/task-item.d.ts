import { NodeType, ResolvedPos } from 'prosemirror-model';
import { NodeViewConstructor } from 'prosemirror-view';
import { Command } from 'prosemirror-state';
export declare const taskItem: NodeViewConstructor;
export declare function toggleCheckboxChecked(type: NodeType, props?: {
    checked?: boolean;
    $pos?: ResolvedPos;
} | boolean): Command;
//# sourceMappingURL=task-item.d.ts.map