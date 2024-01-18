import { jsx as _jsx } from "react/jsx-runtime";
import { Heading1, Heading2, Heading3, ListIcon, ListChecksIcon, ListOrderedIcon, TextIcon, Code2Icon, QuoteIcon, ImageIcon, TableIcon } from 'lucide-react';
import { handleUpload } from '../../plugin-upload';
import { SlashItemKey } from './constants';
export const getDefaultSlashItems = () => {
    return [
        // {
        //   title: 'Continue writing',
        //   description: 'Use AI to expand your thoughts.',
        //   searchTerms: ['gpt']
        //   // icon: <Magic className="w-7 text-black" />,
        // },
        {
            key: SlashItemKey.TodoList,
            title: 'Todo List',
            description: 'Track tasks with a todo list.',
            syntax: '"[]"+Space',
            searchTerms: ['todo', 'task', 'list', 'check', 'checkbox'],
            icon: _jsx(ListChecksIcon, { style: { width: 16, height: 16 } }),
            command: (editor, range) => {
                editor.chain().focus().deleteRange(range).toggleTaskList().run();
            }
        },
        {
            key: SlashItemKey.BulletList,
            title: 'Bullet List',
            description: 'Create a simple bullet list.',
            syntax: '"-"+Space',
            searchTerms: ['unordered', 'point'],
            icon: _jsx(ListIcon, { style: { width: 16, height: 16 } }),
            command: (editor, range) => {
                editor.chain().focus().deleteRange(range).toggleBulletList().run();
            }
        },
        {
            key: SlashItemKey.NumberedList,
            title: 'Numbered List',
            description: 'Create a list with numbering.',
            syntax: '"1."+Space',
            searchTerms: ['ordered'],
            icon: _jsx(ListOrderedIcon, { style: { width: 16, height: 16 } }),
            command: (editor, range) => {
                editor.chain().focus().deleteRange(range).toggleOrderedList().run();
            }
        },
        {
            key: SlashItemKey.Quote,
            title: 'Quote',
            syntax: '">"+Space',
            description: 'Capture a quote.',
            searchTerms: ['blockquote'],
            icon: _jsx(QuoteIcon, { style: { width: 16, height: 16 } }),
            command: (editor, range) => {
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .toggleNode('paragraph', 'paragraph')
                    .toggleBlockquote()
                    .run();
            }
        },
        {
            key: SlashItemKey.Code,
            title: 'Code',
            syntax: '"```"+Space',
            description: 'Capture a code snippet.',
            searchTerms: ['codeblock'],
            icon: _jsx(Code2Icon, { style: { width: 16, height: 16 } }),
            command: (editor, range) => {
                editor.chain().focus().deleteRange(range).toggleCodeBlock().run();
            }
        },
        {
            key: SlashItemKey.Image,
            title: 'Image',
            description: 'Upload an image from your computer.',
            syntax: '"![](uri)"+Space',
            searchTerms: ['photo', 'picture', 'media'],
            icon: _jsx(ImageIcon, { style: { width: 16, height: 16 } }),
            command: (editor, range) => {
                editor.chain().focus().deleteRange(range).run();
                // upload image
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'image/*';
                input.onchange = event => {
                    const files = input.files;
                    if (files) {
                        handleUpload(editor.view, files, event, editor.props.uploadOptions);
                    }
                };
                input.click();
            }
        },
        {
            key: SlashItemKey.Table,
            title: 'Table',
            description: 'Simple powerfull table.',
            syntax: '"|2x3|"+Space',
            searchTerms: ['table'],
            icon: _jsx(TableIcon, { style: { width: 16, height: 16 } }),
            command: (editor, range) => {
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
                    .run();
            }
        },
        {
            key: SlashItemKey.Heading1,
            title: 'Heading 1',
            description: 'Big section heading.',
            syntax: '"#"+Space',
            searchTerms: ['title', 'big', 'large'],
            icon: _jsx(Heading1, { style: { width: 16, height: 16 } }),
            command: (editor, range) => {
                editor.chain().focus().deleteRange(range).setNode('heading', { level: 1 }).run();
            }
        },
        {
            key: SlashItemKey.Heading2,
            title: 'Heading 2',
            description: 'Medium section heading.',
            syntax: '"##"+Space',
            searchTerms: ['subtitle', 'medium'],
            icon: _jsx(Heading2, { style: { width: 16, height: 16 } }),
            command: (editor, range) => {
                editor.chain().focus().deleteRange(range).setNode('heading', { level: 2 }).run();
            }
        },
        {
            key: SlashItemKey.Heading3,
            title: 'Heading 3',
            description: 'Small section heading.',
            syntax: '"###"+Space',
            searchTerms: ['subtitle', 'small'],
            icon: _jsx(Heading3, { style: { width: 16, height: 16 } }),
            command: (editor, range) => {
                editor.chain().focus().deleteRange(range).setNode('heading', { level: 3 }).run();
            }
        },
        {
            key: SlashItemKey.Text,
            title: 'Text',
            description: 'Just start typing with plain text.',
            searchTerms: ['p', 'paragraph'],
            icon: _jsx(TextIcon, { style: { width: 16, height: 16 } }),
            command: (editor, range) => {
                editor.chain().focus().deleteRange(range).toggleNode('paragraph', 'paragraph').run();
            }
        }
    ];
};
