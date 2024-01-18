import { EditorState, Selection, Plugin, PluginKey } from 'prosemirror-state';
export type AIOptions = {
    disable?: boolean;
    enableQuickContinueWriting?: boolean;
    enableQuickQuestion?: boolean;
    enableAIChat?: boolean;
    onAIChatOpenChange?: (open: boolean, selection?: Selection) => void;
    onAttachAIChat?: (protal: HTMLElement) => void;
};
export declare const AIPluginKey: PluginKey<any>;
export declare function AI(options?: AIOptions): Plugin<any>;
export declare const getPrevText: (state: EditorState, { chars, offset }: {
    chars: number;
    offset?: number | undefined;
}) => string;
//# sourceMappingURL=ai.d.ts.map