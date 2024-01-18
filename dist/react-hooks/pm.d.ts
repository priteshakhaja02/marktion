import { PluginKey } from 'prosemirror-state';
import { getPortal } from '../plugin-portal';
import { EventMap, Handler } from '../plugin-event';
export declare function usePMRenderer(): import("../renderer-prosemirror").ProseMirrorRenderer;
export declare function useEmitter<T extends keyof EventMap>(event: T, callback: Handler<EventMap[T]>): void;
export declare function useEditorState(watch?: boolean): import("prosemirror-state").EditorState;
export declare function usePortal(key: Parameters<typeof getPortal>[1]): HTMLElement | undefined;
export declare function usePlugin<T extends PluginKey>(pluginKey: T): NonNullable<ReturnType<T["getState"]>>;
export declare function useForceUpdate(): () => void;
//# sourceMappingURL=pm.d.ts.map