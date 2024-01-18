import { Plugin } from 'prosemirror-state';
import { PortalSetPluginKey, PortalSetState } from './state';
export function createPortalSet(options) {
    const portalSetState = PortalSetState.create(options);
    const plugin = new Plugin({
        key: PortalSetPluginKey,
        state: {
            // Initialize the state
            init: () => portalSetState,
            apply(tr, value) {
                return value;
            }
        },
        view(view) {
            portalSetState.init(view);
            return {};
        }
    });
    return plugin;
}
export function getPortalSet(state) {
    const portalSet = PortalSetPluginKey.getState(state);
    if (!portalSet) {
        throw new Error('No PortalSet exists.');
    }
    return portalSet;
}
export function createPortal(state, key) {
    return getPortalSet(state).createPortal(key);
}
export function getPortal(state, key) {
    return getPortalSet(state).getPortal(key);
}
export function getPortalMap(state) {
    return getPortalSet(state).getPortalMap();
}
export function getPortalRoot(state) {
    return getPortalSet(state).getPortalRoot();
}
