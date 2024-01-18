import { Plugin, PluginKey } from 'prosemirror-state';
import { createPortal, getPortal } from '../plugin-portal';
import { getMarkRange, getMarkType, isActive, isTextSelection, posToOffsetRect } from '../core';
export const LinkBubblePluginKey = new PluginKey('plugin-link-bubble');
export function linkBubble(options = {}) {
    return new Plugin({
        key: LinkBubblePluginKey,
        view(view) {
            const portal = createPortal(view.state, LinkBubblePluginKey);
            options.onAttach?.(portal);
            return {
                update(view) {
                    const linkBubbleState = LinkBubblePluginKey.getState(view.state);
                    const portal = getPortal(view.state, LinkBubblePluginKey);
                    if (!portal) {
                        return;
                    }
                    if (!linkBubbleState?.range) {
                        portal.style.display = 'none';
                        return options.onOpenChange?.(false);
                    }
                    const rect = posToOffsetRect(view, linkBubbleState.range.from, linkBubbleState.range.to);
                    portal.style.display = 'block';
                    portal.style.top = rect.y + 'px';
                    portal.style.left = rect.x + 'px';
                    portal.style.width = rect.width + 'px';
                    portal.style.height = rect.height + 'px';
                    options.onOpenChange?.(true, linkBubbleState);
                }
            };
        },
        state: {
            init() {
                return null;
            },
            apply(tr, value, oldState, newState) {
                const selectionChanged = !oldState.selection.eq(newState.selection);
                const docChanged = !oldState.doc.eq(newState.doc);
                if (!selectionChanged || docChanged) {
                    return null;
                }
                const range = getLinkBubbleState(newState);
                if (range) {
                    return {
                        range
                    };
                }
                return null;
            }
        }
    });
}
export function getLinkBubbleState(state) {
    const selection = state.selection;
    if (!isActive(state, 'link')) {
        return null;
    }
    if (isTextSelection(selection)) {
        const range = getMarkRange(selection.$cursor, getMarkType('link', state.schema));
        return range || null;
    }
    return null;
}
