import { visit } from 'unist-util-visit';
export function unwrapImage(ast) {
    return visit(ast, 'paragraph', (node, index, parent) => {
        if (node.children?.length !== 1)
            return;
        const firstChild = node.children?.[0];
        if (!firstChild || firstChild.type !== 'image')
            return;
        const { url, alt, title } = firstChild;
        const newNode = {
            type: 'image',
            url,
            alt,
            title
        };
        parent.children.splice(index, 1, newNode);
    });
}
