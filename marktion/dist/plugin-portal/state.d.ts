import { EditorView } from 'prosemirror-view';
import { Plugin, PluginKey } from 'prosemirror-state';
import { PickPartial } from '../core/utils/types';
export declare const PortalSetPluginKey: PluginKey<PortalSetState>;
export type PortalSetOptions = {
    classname?: string;
};
export declare const defaultPortalSetOptions: {
    classname: string;
};
export declare class PortalSetState {
    #private;
    options: PickPartial<PortalSetOptions>;
    constructor(options: PickPartial<PortalSetOptions>);
    static create(options?: PortalSetOptions): PortalSetState;
    init(view: EditorView): void;
    createPortal(keyOrPlugin: string | Plugin | PluginKey): HTMLElement;
    getPortal(keyOrPlugin: string | Plugin | PluginKey): HTMLElement | undefined;
    getPortalMap(): Map<string, HTMLElement>;
    getPortalRoot(): HTMLDivElement;
}
//# sourceMappingURL=state.d.ts.map