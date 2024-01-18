export function createProseMirrorNode(nodeName, schema, children, attrs = {}) {
    if (nodeName === null) {
        return [];
    }
    const proseMirrorNode = schema.nodes[nodeName].createAndFill(attrs, children);
    if (proseMirrorNode === null) {
        return [];
    }
    return [proseMirrorNode];
}
