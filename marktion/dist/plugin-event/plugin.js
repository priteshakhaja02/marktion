import mitt from 'mitt';
import { Plugin, PluginKey } from 'prosemirror-state';
import debounce from 'lodash/debounce';
export const EventPluginKey = new PluginKey('plugin-event');
export function getEventEmitter(state) {
    return EventPluginKey.getState(state)?.emitter;
}
export const event = () => {
    const emitter = mitt();
    const debounceTransactionChange = debounce(onTransationChange, 200);
    const plugin = new Plugin({
        key: EventPluginKey,
        props: {
            handleDOMEvents: {
                focus: (view, event) => {
                    emitter.emit('focus', {
                        view,
                        event
                    });
                    return false;
                },
                blur: (view, event) => {
                    emitter.emit('blur', {
                        view,
                        event
                    });
                    return false;
                }
            }
        },
        state: {
            // Initialize the state
            init: () => {
                return {
                    emitter
                };
            },
            apply(tr, value) {
                if (tr.docChanged) {
                    debounceTransactionChange(tr, value);
                }
                return value;
            }
        },
        view(view) {
            emitter.emit('mounted', view);
            return {
                update(view, prevState) {
                    emitter.emit('viewUpdate', {
                        view,
                        prevState
                    });
                },
                destroy() {
                    emitter.emit('destory', view);
                }
            };
        }
    });
    return plugin;
};
function onTransationChange(tr, state) {
    state.emitter.emit('transaction', tr);
}
