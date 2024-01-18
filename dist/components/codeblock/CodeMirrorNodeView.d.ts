import { EditorView, NodeView } from 'prosemirror-view';
import { Node as ProsemirrorNode } from 'prosemirror-model';
import type { LanguageSupport } from '@codemirror/language';
import { Extension as CodeMirrorExtension } from '@codemirror/state';
type LoadLanguage = (lang: string) => Promise<LanguageSupport> | LanguageSupport | void;
export declare class CodeMirrorNodeView implements NodeView {
    dom: HTMLElement;
    private node;
    private readonly view;
    private readonly getPos;
    private readonly schema;
    private readonly cm;
    private updating;
    private readonly loadLanguage;
    private readonly languageConf;
    private languageName;
    private readonly toggleName;
    private settingViewContext;
    constructor({ node, view, getPos, extensions, loadLanguage, toggleName }: {
        node: ProsemirrorNode;
        view: EditorView;
        getPos: () => number;
        extensions: CodeMirrorExtension[] | null;
        loadLanguage: LoadLanguage;
        toggleName: string;
    });
    update(node: ProsemirrorNode): boolean;
    private updateLanguage;
    private setLanguage;
    /**
     * Synchronize the selections from ProseMirror to CodeMirrror
     */
    setSelection(anchor: number, head: number): void;
    selectNode(): void;
    focus(): void;
    stopEvent(): boolean;
    destroy(): void;
    /**
     * When the code editor is focused, we can keep the selection of the outer
     * editor synchronized with the inner one, so that any commands executed on
     * the outer editor see an accurate selection.
     */
    private forwardSelection;
    /**
     * This helper function translates from a CodeMirror selection to a
     * ProseMirror selection.
     */
    private asProseMirrorSelection;
    /**
     * A somewhat tricky aspect of nesting editor like this is handling cursor
     * motion across the edges of the inner editor. This node view will have to
     * take care of allowing the user to move the selection out of the code
     * editor. For that purpose, it binds the arrow keys to handlers that check if
     * further motion would ‘escape’ the editor, and if so, return the selection
     * and focus to the outer editor.
     *
     * The keymap also binds ctrl-enter, which, in ProseMirror's base keymap,
     * creates a  new paragraph after a code block.
     */
    private codeMirrorKeymap;
    /**
     * When the actual content of the code editor is changed, the event handler
     * registered in the node view's constructor calls this method. It'll compare
     * the code block node's current value to the value in the editor, and
     * dispatch a transaction if there is a difference.
     */
    private valueChanged;
    private maybeEscape;
}
export {};
//# sourceMappingURL=CodeMirrorNodeView.d.ts.map