import { EditorState, Plugin, PluginKey, Transaction } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { SuggestionMatch } from './findSuggestionMatch.js';
import { Range } from '../core';
export interface SuggestionOptions {
    pluginKey?: PluginKey;
    char?: string;
    allowSpaces?: boolean;
    allowedPrefixes?: string[] | null;
    startOfLine?: boolean;
    decorationTag?: string;
    decorationClass?: string;
    allow?: (props: {
        transaction: Transaction;
        state: EditorState;
        match: SuggestionMatch;
    }) => boolean;
    onAttach?: (protal: HTMLElement) => void;
    onChange?: (open: boolean, props: SuggestionProps, state?: EditorState) => void;
    onKeyDown?: (props: SuggestionKeyDownProps) => boolean;
}
export interface SuggestionProps {
    state: EditorState;
    range: Range;
    query: string;
    text: string;
}
export interface SuggestionKeyDownProps {
    view: EditorView;
    event: KeyboardEvent;
    range: Range;
}
export type SuggestionPluginState = {
    active: boolean;
    range: Range;
    query: null | string;
    text: null | string;
    composing: boolean;
    decorationId?: string | null;
};
export declare const SuggestionPluginKey: PluginKey<SuggestionPluginState>;
export declare const defaultAllow: SuggestionOptions['allow'];
export declare function suggestion({ pluginKey, char, allowSpaces, allowedPrefixes, startOfLine, decorationTag, decorationClass, allow, onAttach, onChange, onKeyDown }: SuggestionOptions): Plugin<SuggestionPluginState>;
//# sourceMappingURL=suggestion.d.ts.map