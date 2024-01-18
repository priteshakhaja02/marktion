import { jsx as _jsx } from "react/jsx-runtime";
import { createPortal } from 'react-dom';
import { useMemo, useState } from 'react';
import { slash } from '../../plugin-slash';
import { Slash } from './slash';
export function useSlash() {
    const [open, setOpen] = useState(false);
    const [detail, setDetail] = useState(null);
    const [portalEl, setPortalEl] = useState(null);
    const element = portalEl
        ? createPortal(_jsx(Slash, { open: open, onOpenChange: setOpen, detail: detail }), portalEl)
        : null;
    const plugin = useMemo(() => {
        return slash({
            char: '/',
            onChange(open, props) {
                setOpen(open);
                setDetail(props);
            },
            onAttach(portal) {
                setPortalEl(portal);
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
