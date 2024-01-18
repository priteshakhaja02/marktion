export const bullet_list = {
    content: 'list_item+',
    group: 'block',
    attrs: { tight: { default: false } },
    parseDOM: [
        { tag: 'ul', getAttrs: dom => ({ tight: dom.hasAttribute('data-tight') }) }
    ],
    toDOM(node) {
        return ['ul', { 'data-tight': node.attrs.tight ? 'true' : null }, 0];
    }
};
