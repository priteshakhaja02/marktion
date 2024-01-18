import { Plugin, PluginKey } from 'prosemirror-state';
import { DEFAULT_CONTINUE_WRITING, DEFAULT_GPT_PROMPT } from './constants';
import { getTextContentFromNodes, posToOffsetRect } from '../core';
import { getEditable } from '../core/meta';
import { createPortal, getPortal } from '../plugin-portal';
export const AIPluginKey = new PluginKey('plugin-ai');
const defaultAIOptions = {
    disable: false,
    enableAIChat: true
};
export function AI(options = defaultAIOptions) {
    const isAIContinueWriting = segments('+', 2);
    const isAIAsking = segments('?', 2);
    options = {
        ...defaultAIOptions,
        ...options
    };
    let editorView = null;
    return new Plugin({
        key: AIPluginKey,
        view(view) {
            editorView = view;
            const portal = createPortal(view.state, AIPluginKey);
            options.onAttachAIChat?.(portal);
            return {
                destroy() {
                    editorView = null;
                }
            };
        },
        props: {
            handleKeyDown(view, event) {
                if (options.enableAIChat && event.code === 'Space') {
                    const selection = view.state.selection;
                    const nodeText = getTextContentFromNodes(selection.$from);
                    if (nodeText.length === 0) {
                        const selection = view.state.selection;
                        const portal = getPortal(view.state, AIPluginKey);
                        if (!portal) {
                            return false;
                        }
                        const rect = posToOffsetRect(view, selection.from, selection.to);
                        portal.style.display = 'block';
                        portal.style.top = rect.y + 'px';
                        portal.style.left = rect.x + 'px';
                        portal.style.width = rect.width + 'px';
                        portal.style.height = rect.height + 'px';
                        options.onAIChatOpenChange?.(true, selection);
                        return true;
                    }
                    return false;
                }
            }
        },
        state: {
            init() { },
            apply(transaction, value, oldState, newState) {
                const active = getEditable(transaction);
                if (!transaction.docChanged || !active || !editorView) {
                    return;
                }
                if (options.enableQuickContinueWriting) {
                    const text = getPrevText(newState, { chars: 2 });
                    if (isAIContinueWriting(text[1]) && text === '++') {
                        const question = getPrevText(newState, {
                            chars: 5000
                        });
                        AIContinueWriting(editorView, question);
                    }
                }
                if (options.enableQuickQuestion) {
                    const text = getPrevText(newState, { chars: 2 });
                    if (isAIAsking(text[1]) && text === '??') {
                        const question = getPrevText(newState, {
                            chars: 5000
                        });
                        AIAsking(editorView, question);
                    }
                }
                return value;
            }
        }
    });
}
function AIContinueWriting(view, message, config) {
    dispathAICommand(view, message, {
        systemMessage: DEFAULT_CONTINUE_WRITING
    });
}
function AIAsking(view, message, config) {
    dispathAICommand(view, message, {
        systemMessage: DEFAULT_GPT_PROMPT
    });
}
function dispathAICommand(view, question, options) {
    // TODO
}
export const getPrevText = (state, { chars, offset = 0 }) => {
    return state.doc.textBetween(Math.max(0, state.selection.from - chars), state.selection.from - offset, '\n');
};
const segments = (token, count) => {
    let s = '';
    const reset = () => {
        s = '';
    };
    return (input) => {
        if (input !== token) {
            reset();
            return false;
        }
        s += input;
        if (s.length < count) {
            return false;
        }
        reset();
        return true;
    };
};
