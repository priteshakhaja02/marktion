var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PortalSetState_portalMap, _PortalSetState_view, _PortalSetState_rootEl;
import { PluginKey } from 'prosemirror-state';
import { getPluginKey } from '../core';
export const PortalSetPluginKey = new PluginKey('plugin-portal-set');
export const defaultPortalSetOptions = {
    classname: 'marktion-portal-set'
};
export class PortalSetState {
    constructor(options) {
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: options
        });
        _PortalSetState_portalMap.set(this, new Map());
        _PortalSetState_view.set(this, void 0);
        _PortalSetState_rootEl.set(this, void 0);
    }
    static create(options) {
        return new PortalSetState({
            ...defaultPortalSetOptions,
            ...options
        });
    }
    init(view) {
        __classPrivateFieldSet(this, _PortalSetState_view, view, "f");
        __classPrivateFieldSet(this, _PortalSetState_rootEl, __classPrivateFieldGet(this, _PortalSetState_view, "f").dom.ownerDocument.createElement('div'), "f");
        __classPrivateFieldGet(this, _PortalSetState_rootEl, "f").classList.add(this.options.classname);
        __classPrivateFieldGet(this, _PortalSetState_view, "f").dom.parentNode?.appendChild(__classPrivateFieldGet(this, _PortalSetState_rootEl, "f"));
    }
    createPortal(keyOrPlugin) {
        const key = getPluginKey(keyOrPlugin);
        if (__classPrivateFieldGet(this, _PortalSetState_portalMap, "f").has(key)) {
            return __classPrivateFieldGet(this, _PortalSetState_portalMap, "f").get(key);
        }
        const el = __classPrivateFieldGet(this, _PortalSetState_view, "f").dom.ownerDocument.createElement('div');
        el.classList.add(`portal-${key.slice(0, -1)}`);
        el.classList.add('plugin-portal-item');
        __classPrivateFieldGet(this, _PortalSetState_rootEl, "f").appendChild(el);
        __classPrivateFieldGet(this, _PortalSetState_portalMap, "f").set(key, el);
        return el;
    }
    getPortal(keyOrPlugin) {
        const key = getPluginKey(keyOrPlugin);
        return __classPrivateFieldGet(this, _PortalSetState_portalMap, "f").get(key);
    }
    getPortalMap() {
        return __classPrivateFieldGet(this, _PortalSetState_portalMap, "f");
    }
    getPortalRoot() {
        return __classPrivateFieldGet(this, _PortalSetState_rootEl, "f");
    }
}
_PortalSetState_portalMap = new WeakMap(), _PortalSetState_view = new WeakMap(), _PortalSetState_rootEl = new WeakMap();
