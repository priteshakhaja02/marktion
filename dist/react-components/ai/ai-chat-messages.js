import { jsx as _jsx } from "react/jsx-runtime";
import { List, Avatar, theme } from 'antd';
import { UserIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { OpenAIIcon } from './icon-openai';
import { ReactSSR } from '../react-ssr';
export function ChatMessages({ messages }) {
    const root = useRef(null);
    const { token } = theme.useToken();
    useEffect(() => {
        root.current?.scrollTo({
            top: root.current.scrollHeight
        });
    }, [messages]);
    return (_jsx("div", { style: {
            maxHeight: 300,
            padding: token.paddingXS,
            overflow: 'auto'
        }, ref: root, children: _jsx(List, { itemLayout: "horizontal", dataSource: messages, renderItem: item => {
                if (item.role === 'assistant') {
                    return (_jsx(List.Item, { id: item.id, children: _jsx(List.Item.Meta, { style: {
                                alignItems: 'center'
                            }, avatar: _jsx(Avatar, { size: "small", style: { backgroundColor: 'transparent', fill: token.colorText }, icon: _jsx(OpenAIIcon, { style: { width: '100%', height: '100%' } }) }), description: renderContent(item.content) }) }, item.id));
                }
                else {
                    return (_jsx(List.Item, { children: _jsx(List.Item.Meta, { avatar: _jsx(UserIcon, { style: {
                                    width: '100%',
                                    height: '100%'
                                } }), description: item.content }) }, item.id));
                }
            } }) }));
}
function renderContent(str) {
     try {
        str = JSON?.parse(str)?.content || str;
      } catch (error) {}
    return (_jsx(ReactSSR, { content: str, className: "plugin-ai-inline-message-content", "data-scaling": "90%", innerStyle: { fontSize: 14 } }));
}
