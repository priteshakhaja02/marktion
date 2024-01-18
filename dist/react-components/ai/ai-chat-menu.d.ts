import { type DropDownProps } from 'antd';
export type ChatMenuProps = DropDownProps & {
    onSelectMenu: (key: ChatMenuKey) => void;
};
export declare enum ChatMenuKey {
    InsertToContent = "InsertToContent"
}
export declare function ChatMenu({ onSelectMenu, children, ...dropdownProps }: ChatMenuProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ai-chat-menu.d.ts.map