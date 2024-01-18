import { EditorStateConfig } from 'prosemirror-state';
import { CodemirrorRenderer } from './renderer-codemirror';
import { ProseMirrorRenderer } from './renderer-prosemirror';
import { UploadOptions } from './plugin-upload';
export type MarktionOptions = {
    content: string;
    theme?: 'dark' | 'light';
    renderer: 'WYSIWYG' | 'SOURCE';
    uploadOptions?: UploadOptions;
    plugins?: EditorStateConfig['plugins'];
    onChange?: (editor: Marktion) => void;
};
export declare class Marktion {
    options: MarktionOptions;
    rootEl?: HTMLElement;
    renderer: MarktionOptions['renderer'];
    content: string;
    theme: NonNullable<MarktionOptions['theme']>;
    pmRenderer: ProseMirrorRenderer;
    cmRenderer: CodemirrorRenderer;
    constructor(options?: MarktionOptions);
    hasFocus(): boolean;
    getTheme(): NonNullable<"light" | "dark" | undefined>;
    setTheme(theme: Marktion['theme']): void;
    getContent(): string;
    setContent(content: string): void;
    getRenderer(): CodemirrorRenderer | ProseMirrorRenderer;
    setRenderer(renderer: MarktionOptions['renderer']): void;
    mount(root: HTMLElement): void;
}
//# sourceMappingURL=marktion.d.ts.map