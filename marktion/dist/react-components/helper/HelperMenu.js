import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dropdown, Tag } from 'antd';
import { SystemShortcuts } from './constants';
import { getDefaultSlashItems } from '../slash';
const defaultSlashItems = getDefaultSlashItems().filter(item => item.syntax);
const items = [
    {
        key: 'system-syntax',
        type: 'group',
        label: 'System Shortcut',
        children: SystemShortcuts.map(getSystemMenuItem)
    },
    {
        key: '2',
        type: 'group',
        label: 'Markdown Syntax',
        children: defaultSlashItems.map(getMarkdownShortcurMenuItem)
    }
];
export function HelperMenu(props) {
    const placement = 'leftBottom';
    return (_jsx(Dropdown, { menu: { items }, trigger: ['click'], placement: placement, ...props, children: props.children }));
}
function getSystemMenuItem(item) {
    return {
        key: item.key,
        label: (_jsxs("div", { children: [_jsx(Tag, { bordered: false, children: item.syntax }), item.title] }))
    };
}
function getMarkdownShortcurMenuItem(item) {
    return {
        key: item.key,
        label: (_jsxs("div", { style: { display: 'flex', justifyContent: 'space-between' }, children: [_jsx(Tag, { bordered: false, children: item.syntax }), item.title] }))
    };
}
