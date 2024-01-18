import { useCallback, useEffect, useState } from 'react';
import { useMarktion } from './useMarktion';
import { getPortal } from '../plugin-portal';
import { getEventEmitter } from '../plugin-event';
export function usePMRenderer() {
    return useMarktion().pmRenderer;
}
export function useEmitter(event, callback) {
    const state = usePMRenderer().getState();
    const emitter = getEventEmitter(state);
    useEffect(() => {
        emitter.on(event, callback);
        return () => {
            emitter.off(event, callback);
        };
    }, [event, callback, emitter]);
}
export function useEditorState(watch = false) {
    const forceUpdate = useForceUpdate();
    useEmitter('transaction', useCallback(() => {
        if (watch) {
            forceUpdate();
        }
    }, [watch]));
    return usePMRenderer().getState();
}
export function usePortal(key) {
    const state = useEditorState();
    return getPortal(state, key);
}
export function usePlugin(pluginKey) {
    const state = useEditorState();
    return pluginKey.getState(state);
}
// Fork from https://github.com/CharlesStover/use-force-update
export function useForceUpdate() {
    const [, dispatch] = useState(Object.create(null));
    // Turn dispatch(required_parameter) into dispatch().
    const memoizedDispatch = useCallback(() => {
        dispatch(Object.create(null));
    }, [dispatch]);
    return memoizedDispatch;
}
