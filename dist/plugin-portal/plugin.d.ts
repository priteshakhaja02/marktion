import { EditorState, Plugin, PluginKey } from 'prosemirror-state';
import { PortalSetOptions, PortalSetState } from './state';
export declare function createPortalSet(options?: PortalSetOptions): Plugin<PortalSetState>;
export declare function getPortalSet(state: EditorState): PortalSetState;
export declare function createPortal(state: EditorState, key: string | Plugin | PluginKey): HTMLElement;
export declare function getPortal(state: EditorState, key: string | Plugin | PluginKey): HTMLElement | undefined;
export declare function getPortalMap(state: EditorState): Map<string, HTMLElement>;
export declare function getPortalRoot(state: EditorState): HTMLDivElement;
//# sourceMappingURL=plugin.d.ts.map