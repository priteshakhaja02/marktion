import { jsx as _jsx } from "react/jsx-runtime";
import { createPortal } from 'react-dom';
import { useMemo, useState } from 'react';
import { AI } from '../../plugin-ai';
import { AIChatPanel } from './ai-chat-panel';
export function useAI(gptConfig) {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState(null);
    const [portalEl, setPortalEl] = useState(null);
    const element = portalEl
        ? createPortal(_jsx(AIChatPanel, { open: open, onOpenChange: setOpen, gptConfig: gptConfig, selection: selection, children: _jsx("div", { style: { height: '100%' } }) }), portalEl)
        : null;
    const plugin = useMemo(() => {
        return AI({
            onAIChatOpenChange(open, selection) {
                setOpen(open);
                setSelection(selection || null);
            },
            onAttachAIChat(protal) {
                setPortalEl(protal);
            }
        });
    }, []);
    return useMemo(() => {
        return {
            plugin,
            element
        };
    }, [element]);
}
