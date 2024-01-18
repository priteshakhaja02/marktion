import { jsx as _jsx } from "react/jsx-runtime";
import { BorderTopIcon, BorderBottomIcon, BorderLeftIcon, DividerVerticalIcon, DividerHorizontalIcon, BorderRightIcon } from '@radix-ui/react-icons';
import { SlashItemKey } from './constants';
export const getTableSlashItems = () => {
    return [
        {
            key: SlashItemKey.AddRowAfter,
            title: 'add row after',
            description: '',
            searchTerms: ['row', 'add', 'after'],
            command: editor => {
                editor.chain().focus().addRowAfter().run();
            },
            icon: _jsx(BorderBottomIcon, { style: { width: 14, height: 14 } })
        },
        {
            key: SlashItemKey.AddRowBefore,
            title: 'add row before',
            description: '',
            searchTerms: ['row', 'add', 'before'],
            command: editor => {
                editor.chain().focus().addRowBefore().run();
            },
            icon: _jsx(BorderTopIcon, { style: { width: 14, height: 14 } })
        },
        {
            key: SlashItemKey.AddColAfter,
            title: 'add col after',
            description: '',
            searchTerms: ['col', 'add', 'after'],
            command: editor => {
                editor.chain().focus().addColumnAfter().run();
            },
            icon: _jsx(BorderRightIcon, { style: { width: 14, height: 14 } })
        },
        {
            key: SlashItemKey.AddColBefore,
            title: 'add col before',
            description: '',
            searchTerms: ['col', 'add', 'before'],
            command: editor => {
                editor.chain().focus().addColumnBefore().run();
            },
            icon: _jsx(BorderLeftIcon, { style: { width: 14, height: 14 } })
        },
        {
            key: SlashItemKey.DelRow,
            title: 'delete row',
            description: '',
            searchTerms: ['row', 'delete'],
            command: editor => {
                editor.chain().focus().deleteRow().run();
            },
            icon: _jsx(DividerHorizontalIcon, { style: { width: 14, height: 14, color: 'red' } })
        },
        {
            key: SlashItemKey.DelCol,
            title: 'delete col',
            description: '',
            searchTerms: ['col', 'delete'],
            command: editor => {
                editor.chain().focus().deleteColumn().run();
            },
            icon: _jsx(DividerVerticalIcon, { style: { width: 14, height: 14, color: 'red' } })
        }
    ];
};
