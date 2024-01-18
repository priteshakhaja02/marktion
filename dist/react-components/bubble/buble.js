import { jsx as _jsx } from "react/jsx-runtime";
import { Popover } from 'antd';
import { createPortal } from 'react-dom';
import { useMemo, useState } from 'react';
import { bubble } from '../../plugin-bubble';
import { InlineTools } from './inline-tools';
const defaultPopoverAlign = { offset: [0, -10] };
export function Bubble(props) {
    return (_jsx(Popover, { trigger: "click", arrow: false, content: _jsx(InlineTools, {}), align: defaultPopoverAlign, ...props, children: _jsx("div", { style: { height: '100%' } }) }));
}
export function useBubble() {
    const [open, setOpen] = useState(false);
    const [portalEl, setPortalEl] = useState(null);
    const element = portalEl ? createPortal(_jsx(Bubble, { open: open }), portalEl) : null;
    const plugin = useMemo(() => {
        return bubble({
            onAttach(portal) {
                setPortalEl(portal);
            },
            onOpenChange(open, changeState) {
                setOpen(open);
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
