export const ordered_list = {
    content: 'list_item+',
    group: 'block',
    attrs: { start: { default: 1 }, tight: { default: false } },
    parseDOM: [
        {
            tag: 'ol',
            getAttrs(dom) {
                return {
                    order: dom.hasAttribute('start')
                        ? +dom.getAttribute('start')
                        : 1,
                    tight: dom.hasAttribute('data-tight')
                };
            }
        }
    ],
    toDOM(node) {
        return [
            'ol',
            {
                start: node.attrs.start == 1 ? null : node.attrs.start,
                'data-tight': node.attrs.tight ? 'true' : null
            },
            0
        ];
    }
};
