import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LinkIcon } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useEffect, useMemo, useState } from 'react';
import { Popover, Button, Form, Input, Space } from 'antd';
import { linkBubble } from '../../plugin-link-bubble';
import { useEditorState, usePMRenderer } from '../../react-hooks';
const defaultPopoverAlign = { offset: [0, 10] };
export function useLinkBubble() {
    const [open, setOpen] = useState(false);
    const [portalEl, setPortalEl] = useState(null);
    const [changeState, setChangeState] = useState(null);
    const element = portalEl
        ? createPortal(_jsx(LinkBubble, { changeState: changeState, open: open }, changeState && changeState.range.from + '-' + changeState.range.to), portalEl)
        : null;
    const plugin = useMemo(() => {
        return linkBubble({
            onAttach(portal) {
                setPortalEl(portal);
            },
            onOpenChange(open, changeState) {
                setOpen(open);
                if (open) {
                    setChangeState(changeState);
                }
                else {
                    setChangeState(null);
                }
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
export function LinkBubble({ changeState, ...popoverProps }) {
    const pmRenderer = usePMRenderer();
    return (_jsx(Popover, { destroyTooltipOnHide: true, trigger: "click", placement: "bottom", arrow: false, content: _jsx(LinkBubbleContent, { onFinish: values => {
                pmRenderer
                    .chain()
                    .setTextSelection(changeState?.range)
                    .setLink({ href: values.url })
                    .run();
            } }), align: defaultPopoverAlign, ...popoverProps, children: _jsx("div", { style: { height: '100%' } }) }));
}
function LinkBubbleContent(props) {
    useEditorState(true);
    const pmRenderer = usePMRenderer();
    const [form] = Form.useForm();
    const link = pmRenderer.getAttributes('link');
    useEffect(() => {
        form.setFieldValue('url', link.href);
    }, [link]);
    return (_jsxs(Form, { form: form, initialValues: { url: link.href }, autoComplete: "off", size: "small", onFinish: props.onFinish, children: [_jsx(Form.Item, { label: "Url", name: "url", rules: [{ required: true, message: 'Please input url!' }], children: _jsx(Input, { suffix: _jsx("a", { href: link.href, target: "_blank", children: _jsx(LinkIcon, { width: 14, height: 14 }) }) }) }), _jsx(Form.Item, { style: { marginBottom: 0 }, children: _jsxs(Space, { children: [_jsx(Button, { size: "small", type: "primary", htmlType: "submit", children: "Confirm" }), _jsx(Button, { size: "small", onClick: () => {
                                pmRenderer.chain().focus().unsetLink().run();
                            }, children: "Remove link" })] }) })] }));
}
