import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import { Formatter } from './formatter';
import { schema } from '../schemas';
export function parse(source) {
    const u = unifiedParse(source);
    return toProseMirrorDoc(u)[0];
}
function unifiedParse(source) {
    const process = unified().use(remarkParse).use(remarkGfm);
    const parsed = process.parse(source);
    return process.runSync(parsed);
}
function toProseMirrorDoc(node, context = { paths: [] }) {
    const impl = Formatter.get(node.type);
    if (!impl) {
        console.warn('Couldn\'t find any way to convert unist node of type "' +
            node.type +
            '" to a ProseMirror node.');
        return [];
    }
    context.paths.push(node);
    let children = [];
    if (unistNodeIsParent(node)) {
        children = children.concat(...node.children.map(item => toProseMirrorDoc(item, context)));
    }
    context.paths.pop();
    return impl.parse(node, schema, children, context);
}
function unistNodeIsParent(node) {
    return 'children' in node;
}
