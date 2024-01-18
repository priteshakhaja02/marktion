import { jsx as _jsx } from "react/jsx-runtime";
import { Dropdown } from 'antd';
export var ChatMenuKey;
(function (ChatMenuKey) {
    ChatMenuKey["InsertToContent"] = "InsertToContent";
})(ChatMenuKey || (ChatMenuKey = {}));
export function ChatMenu({ onSelectMenu, children, ...dropdownProps }) {
    return (_jsx(Dropdown, { forceRender: true, trigger: ['click'], overlayStyle: {
            minWidth: 0
        }, ...dropdownProps, menu: {
            onClick(e) {
                onSelectMenu(e.key);
            },
            items: [
                {
                    key: ChatMenuKey.InsertToContent,
                    label: 'Insert'
                }
            ]
        }, children: children }));
}
