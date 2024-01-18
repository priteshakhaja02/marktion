import { getNodeType } from './getNodeType';
export function getNodeAttributes(state, typeOrName) {
    const type = getNodeType(typeOrName, state.schema);
    const { from, to } = state.selection;
    const nodes = [];
    state.doc.nodesBetween(from, to, node => {
        nodes.push(node);
    });
    const node = nodes.reverse().find(nodeItem => nodeItem.type.name === type.name);
    if (!node) {
        return {};
    }
    return { ...node.attrs };
}
