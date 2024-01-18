export const link = {
    attrs: {
        href: {},
        target: {
            default: '__blank'
        },
        title: { default: null }
    },
    inclusive: false,
    parseDOM: [
        {
            tag: 'a[href]',
            getAttrs(dom) {
                return {
                    href: dom.getAttribute('href'),
                    title: dom.getAttribute('title')
                };
            }
        }
    ],
    toDOM(node) {
        return ['a', node.attrs];
    }
};
