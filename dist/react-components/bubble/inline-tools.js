import { jsx as _jsx } from "react/jsx-runtime";
import { Button, Space } from 'antd';
import { Code, BoldIcon, ItalicIcon, StrikethroughIcon, LinkIcon } from 'lucide-react';
import { isActive } from '../../core';
import { useEditorState, usePMRenderer } from '../../react-hooks';
export function InlineTools(props) {
    const editorState = useEditorState(true);
    const pmRenderer = usePMRenderer();
    const items = [
        {
            name: 'bold',
            isActive: () => isActive(editorState, 'strong'),
            command: () => pmRenderer.chain().focus().toggleStrong().run(),
            icon: _jsx(BoldIcon, { style: { width: 14, height: 14 } })
        },
        {
            name: 'italic',
            isActive: () => isActive(editorState, 'em'),
            command: () => pmRenderer.chain().focus().toggleEm().run(),
            icon: _jsx(ItalicIcon, { style: { width: 14, height: 14 } })
        },
        {
            name: 'strike',
            isActive: () => isActive(editorState, 'strike'),
            command: () => pmRenderer.chain().focus().toggleStrike().run(),
            icon: _jsx(StrikethroughIcon, { style: { width: 14, height: 14 } })
        },
        {
            name: 'code',
            isActive: () => isActive(editorState, 'code'),
            command: () => pmRenderer.chain().focus().toggleCode().run(),
            icon: _jsx(Code, { style: { width: 14, height: 14 } })
        },
        {
            name: 'link',
            isActive: () => isActive(editorState, 'link'),
            command: () => {
                const selection = pmRenderer.view.state.selection;
                pmRenderer.chain().focus().toggleLink({ href: '' }).run();
                setTimeout(() => {
                    pmRenderer
                        .chain()
                        .setTextSelection(Math.ceil(selection.from + selection.to) / 2)
                        .run();
                }, 200);
            },
            icon: _jsx(LinkIcon, { style: { width: 14, height: 14 } })
        }
    ];
    return (_jsx(Space, { children: items.map(item => {
            return (_jsx(Button, { type: item.isActive() ? 'primary' : 'text', onClick: item.command, children: _jsx("div", { style: { display: 'flex', alignItems: 'center' }, children: item.icon }) }, item.name));
        }) }));
}
