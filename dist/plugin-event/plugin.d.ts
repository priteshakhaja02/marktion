import { Emitter, Handler } from 'mitt';
import { EditorView } from 'prosemirror-view';
import { EditorState, Plugin, PluginKey, Transaction } from 'prosemirror-state';
export type { Handler };
export type EventMap = {
    mounted: EditorView;
    destory: EditorView;
    transaction: Transaction;
    viewUpdate: {
        view: EditorView;
        prevState: EditorState;
    };
    focus: {
        view: EditorView;
        event: FocusEvent;
    };
    blur: {
        view: EditorView;
        event: FocusEvent;
    };
};
export type EventPluginState = {
    emitter: Emitter<EventMap>;
};
export declare const EventPluginKey: PluginKey<EventPluginState>;
export declare function getEventEmitter(state: EditorState): Emitter<EventMap> | undefined;
export declare const event: () => Plugin<EventPluginState>;
//# sourceMappingURL=plugin.d.ts.map