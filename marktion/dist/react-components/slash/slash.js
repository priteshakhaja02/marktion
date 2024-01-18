import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dropdown, Tag } from 'antd';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getSlashItems } from './getSlashItems';
import { usePMRenderer } from '../../react-hooks';
export function Slash(props) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const pmRenderer = usePMRenderer();
    const items = useMemo(() => getSlashItems(props.detail?.text, props.detail?.state), [props.detail?.text, props.detail?.state]);
    const onSelectItem = useCallback((index) => {
        const item = items[index];
        if (item) {
            item.command(pmRenderer, props.detail?.range);
            setSelectedIndex(0);
        }
    }, [props.detail, items]);
    useEffect(function resetSelectedIndexOnClose() {
        if (!props.open) {
            setSelectedIndex(0);
        }
    }, [props.open]);
    useEffect(() => {
        if (!props.open)
            return;
        const navigationKeys = ['ArrowUp', 'ArrowDown', 'Enter'];
        const onKeyDown = (e) => {
            if (navigationKeys.includes(e.key)) {
                e.preventDefault();
                if (e.key === 'ArrowUp') {
                    setSelectedIndex((selectedIndex + items.length - 1) % items.length);
                    return true;
                }
                if (e.key === 'ArrowDown') {
                    setSelectedIndex((selectedIndex + 1) % items.length);
                    return true;
                }
                if (e.key === 'Enter') {
                    onSelectItem(selectedIndex);
                    return true;
                }
                return false;
            }
        };
        document.addEventListener('keydown', onKeyDown, {
            capture: true
        });
        return () => {
            document.removeEventListener('keydown', onKeyDown, {
                capture: true
            });
        };
    }, [props.open, items, selectedIndex, setSelectedIndex, onSelectItem]);
    const open = items.length > 0 ? props.open : false;
    return (_jsx(Dropdown, { placement: "bottomLeft", trigger: ['click'], menu: {
            style: {
                minWidth: 200
            },
            activeKey: items[selectedIndex]?.key,
            onSelect({ key }) {
                const index = items.findIndex(item => item.title === key);
                onSelectItem(index);
            },
            onKeyDown: e => {
                e.preventDefault();
                e.stopPropagation();
            },
            items: items.map((item, index) => {
                return {
                    icon: (_jsx("div", { className: "slash-item-icon", onClick: () => onSelectItem(index), children: item.icon })),
                    key: item.key,
                    label: (_jsxs("div", { className: "slash-item-caption", onClick: () => onSelectItem(index), children: [_jsxs("div", { className: "slash-item-caption-title", children: [item.title, item.syntax && (_jsx(Tag, { className: "slash-item-caption-syntax", bordered: false, children: item.syntax }))] }), _jsx("div", { className: "slash-item-caption-description", children: item.description })] }))
                };
            })
        }, ...props, open: open, children: _jsx("div", { style: { height: '100%' } }) }));
}
