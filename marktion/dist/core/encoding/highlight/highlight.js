import { unified } from 'unified';
import rehypeStringify from 'rehype-stringify';
import { createLowlight, all } from 'lowlight';
export const lowlight = createLowlight(all);
export function highlight(language, value, parser = lowlight) {
    const tree = parser.highlight(language, value);
    return toString(tree);
}
export function toString(tree) {
    const u = unified()
        .use(function () {
        const parser = () => {
            return tree;
        };
        Object.assign(this, {
            Parser: parser
        });
    })
        .use(rehypeStringify);
    const result = u.processSync();
    return String(result);
}
