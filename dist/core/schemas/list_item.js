export const list_item = {
    attrs: {
        label: {
            default: '•'
        },
        listType: {
            default: 'bullet'
        },
        spread: {
            default: 'true'
        }
    },
    content: 'paragraph block*',
    defining: true,
    parseDOM: [{ tag: 'li' }],
    toDOM() {
        return ['li', 0];
    }
};
