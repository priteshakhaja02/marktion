import { EditorState, Plugin, PluginKey } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
export declare const BubblePluginKey: PluginKey<BubblePluginState>;
export type BubblePluginState = {
    open: boolean;
};
export type BubbleChangeState = {
    view: EditorView;
    state: EditorState;
    prevState?: EditorState;
    from: number;
    to: number;
};
export type BubbleOptions = {
    delay?: number;
    onOpenChange?: (open: boolean, changeState?: BubbleChangeState) => void;
    onAttach?: (protal: HTMLElement) => void;
};
export declare function getBubbleState(state: EditorState): BubblePluginState | undefined;
export declare const bubble: (options?: BubbleOptions) => Plugin<BubblePluginState>;
//# sourceMappingURL=bubble.d.ts.map