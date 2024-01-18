import { NodeType } from 'prosemirror-model';
import { Command } from 'prosemirror-state';
import { ProsemirrorAttributes } from '../../core/utils/types';
interface CodeblockAttributes extends ProsemirrorAttributes {
    language?: string;
}
export declare function updateCodeblock(type: NodeType, attrs: CodeblockAttributes): Command;
export {};
//# sourceMappingURL=commands.d.ts.map