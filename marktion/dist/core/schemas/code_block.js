export const code_block = {
    content: 'text*',
    group: 'block',
    code: true,
    defining: true,
    marks: '',
    attrs: { language: { default: '' } },
    parseDOM: [
        {
            tag: 'pre',
            preserveWhitespace: 'full',
            getAttrs: node => ({ params: node.getAttribute('data-params') || '' })
        }
    ],
    toDOM(node) {
        return [
            'pre',
            node.attrs.language ? { 'data-language': node.attrs.language } : {},
            ['code', 0]
        ];
    }
};
