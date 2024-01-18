import { unified } from 'unified';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { Formatter } from './formatter';
export const PM_TO_AST_NAME_MAP = {
    // node
    doc: 'root',
    paragraph: 'paragraph',
    blockquote: 'blockquote',
    hard_break: 'break',
    code_block: 'code',
    heading: 'heading',
    horizontal_rule: 'thematicBreak',
    image: 'image',
    task_list: 'list',
    task_item: 'listItem',
    ordered_list: 'list',
    bullet_list: 'list',
    list_item: 'listItem',
    table: 'table',
    table_row: 'tableRow',
    table_cell: 'tableCell',
    table_header: 'tableCell',
    // mark
    text: 'text',
    strong: 'strong',
    code: 'inlineCode',
    em: 'emphasis',
    strike: 'delete',
    link: 'link'
};
export function serialize(node) {
    const ast = toASTNode(node);
    const processor = unified().use(remarkParse).use(remarkGfm).use(remarkStringify, {
        fences: true,
        bullet: '-',
        listItemIndent: 'one'
    });
    return processor.stringify(ast[0]);
}
function toASTNode(node, context = { paths: [], getMarkSerialize: getSerializer }) {
    const serializer = getSerializer(node.type.name);
    const children = [];
    context.paths.push(node);
    for (let i = 0, len = node.childCount; i < len; i++) {
        children.push(...toASTNode(node.child(i), context));
    }
    context.paths.pop();
    const nodes = serializer.serialize(node, children, context);
    return nodes;
}
function getSerializer(name) {
    const impl = Formatter.get(PM_TO_AST_NAME_MAP[name]);
    if (!impl) {
        console.warn('Couldn\'t find any way to convert ProseMirror node of type "' + name + '" to a unist node.');
    }
    return impl;
}
