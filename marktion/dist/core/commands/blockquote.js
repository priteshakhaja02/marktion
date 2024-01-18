import { schema } from '../schemas/index.js';
export const setBlockquote = () => ({ commands }) => {
    return commands.wrapIn(schema.nodes.blockquote);
};
export const toggleBlockquote = () => ({ commands }) => {
    return commands.toggleWrap(schema.nodes.blockquote);
};
export const unsetBlockquote = () => ({ commands }) => {
    return commands.lift(schema.nodes.blockquote);
};
