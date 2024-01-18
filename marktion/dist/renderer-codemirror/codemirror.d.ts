import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import type { SourceRenderer, RendererProps } from '../renderer';
import { RendererEnum, Theme } from '../types';
export declare class CodemirrorRenderer implements SourceRenderer {
    props: RendererProps;
    view: EditorView;
    state: EditorState;
    type: RendererEnum;
    constructor(props: RendererProps);
    getProps(): RendererProps;
    setProps(props: Partial<RendererProps>): RendererProps;
    getTheme(): Theme;
    setTheme(theme: Theme): RendererProps;
    setContent(content: string): void;
    getContent(): string;
    focus(): void;
    hasFocus(): boolean;
    attach(root: HTMLElement, props: Partial<RendererProps>): RendererProps;
    destroy(): void;
}
//# sourceMappingURL=codemirror.d.ts.map