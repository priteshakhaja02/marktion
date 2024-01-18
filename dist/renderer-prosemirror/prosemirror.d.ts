import { EditorView } from 'prosemirror-view';
import { EditorState } from 'prosemirror-state';
import { CommandManager } from '../core/CommandManager';
import { Attrs, MarkType, NodeType } from 'prosemirror-model';
import { WysiwygProps, WysiwygRenderer } from '../renderer';
import { RendererEnum, Theme } from '../types';
export declare class ProseMirrorRenderer implements WysiwygRenderer {
    props: WysiwygProps;
    view: EditorView;
    state: EditorState;
    cmdManager: CommandManager;
    type: RendererEnum;
    constructor(props: WysiwygProps);
    getProps(): WysiwygProps;
    setProps(props: Partial<WysiwygProps>): WysiwygProps;
    getTheme(): Theme;
    setTheme(theme: Theme): void;
    setContent(content: string): void;
    setEditable(editable: boolean): void;
    getEditable(): boolean;
    getAttributes(nameOrType: string | NodeType | MarkType): Attrs;
    getContent(): string;
    getState(): EditorState;
    chain(): import("../core").ChainedCommands;
    focus(): void;
    hasFocus(): boolean;
    attach(root: HTMLElement, props: Partial<WysiwygProps>): WysiwygProps;
    destroy(): void;
}
//# sourceMappingURL=prosemirror.d.ts.map