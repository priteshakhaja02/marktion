import { createNodeFromContent } from './createNodeFromContent';
export function createDocument(content, schema, parseOptions = {}) {
    return createNodeFromContent(content, schema, { slice: false, parseOptions });
}
