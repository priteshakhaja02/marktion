import { EditorState, Plugin, PluginKey } from 'prosemirror-state';
import { Range } from '../core';
export type LinkBubbleState = {
    range: Range;
} | null;
export declare const LinkBubblePluginKey: PluginKey<LinkBubbleState>;
export type LinkBubbleOptions = {
    delay?: number;
    onAttach?: (protal: HTMLElement) => void;
    onOpenChange?: (open: boolean, changeState?: LinkBubbleState) => void;
};
export declare function linkBubble(options?: LinkBubbleOptions): Plugin<LinkBubbleState>;
export declare function getLinkBubbleState(state: EditorState): Range | null;
//# sourceMappingURL=linkBubble.d.ts.map