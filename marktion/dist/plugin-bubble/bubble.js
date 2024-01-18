import { AllSelection, Plugin, PluginKey } from 'prosemirror-state';
import debounce from 'lodash/debounce';
import { createPortal, getPortal } from '../plugin-portal';
import { isActive, posToOffsetRect } from '../core';
export const BubblePluginKey = new PluginKey('plugin-bubble');
export function getBubbleState(state) {
    return BubblePluginKey.getState(state);
}
export const bubble = (options = {}) => {
    const bubbleState = {
        open: false
    };
    const debounceChange = debounce((view, changeState) => {
        const portal = getPortal(view.state, BubblePluginKey);
        if (!portal) {
            return;
        }
        if (changeState.state.selection.$from.node() !== changeState.state.selection.$to.node()) {
            options.onOpenChange?.(false);
            return null;
        }
        const rect = posToOffsetRect(view, changeState.from, changeState.to);
        portal.style.display = 'block';
        portal.style.top = rect.y + 'px';
        portal.style.left = rect.x + 'px';
        portal.style.width = rect.width + 'px';
        portal.style.height = rect.height + 'px';
        bubbleState.open = true;
        options.onOpenChange?.(true, changeState);
    }, options.delay || 200);
    const close = (view) => {
        const portal = getPortal(view.state, BubblePluginKey);
        if (!portal) {
            return;
        }
        portal.style.display = 'none';
        options.onOpenChange?.(false);
    };
    return new Plugin({
        key: BubblePluginKey,
        props: {
            handleDOMEvents: {
                blur(view) {
                    // be friendly to the blur event of outside click behavior, such as bubble btn;
                    setTimeout(() => {
                        if (!view.hasFocus()) {
                            close(view);
                        }
                    }, 200);
                }
            }
        },
        state: {
            init() {
                return bubbleState;
            },
            apply(tr, value) {
                return value;
            }
        },
        view(view) {
            const portal = createPortal(view.state, BubblePluginKey);
            options.onAttach?.(portal);
            return {
                update(view, prevState) {
                    const changeState = getBubbleChangeState(view, prevState);
                    if (changeState) {
                        debounceChange(view, changeState);
                    }
                    else {
                        close(view);
                    }
                }
            };
        }
    });
};
function getBubbleChangeState(view, prevState) {
    const hasValidSelection = view.state.selection.$from.pos !== view.state.selection.$to.pos;
    if (view.state.selection instanceof AllSelection) {
        return null;
    }
    if (!hasValidSelection) {
        return null;
    }
    const selectionChanged = !prevState?.selection.eq(view.state.selection);
    const docChanged = !prevState?.doc.eq(view.state.doc);
    if (!selectionChanged && !docChanged) {
        return null;
    }
    const { state, composing } = view;
    const { selection } = state;
    const isSame = !selectionChanged && !docChanged;
    if (composing || isSame) {
        return null;
    }
    if (isActive(view.state, 'image')) {
        return null;
    }
    if (isActive(view.state, 'code_block')) {
        return null;
    }
    if (selection.content().size <= 0) {
        return null;
    }
    // support for CellSelections
    const { ranges } = selection;
    const from = Math.min(...ranges.map(range => range.$from.pos));
    const to = Math.max(...ranges.map(range => range.$to.pos));
    if (from === to) {
        return null;
    }
    return {
        view,
        state,
        prevState,
        from,
        to
    };
}
