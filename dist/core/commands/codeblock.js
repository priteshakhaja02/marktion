import { schema } from '../schemas/index.js';
export const toggleCodeBlock = attributes => ({ commands }) => {
    return commands.toggleNode(schema.nodes.code_block, 'paragraph', attributes);
};
export const setCodeBlock = attributes => ({ commands }) => {
    return commands.setNode(schema.nodes.code_block, attributes);
};
