import { schema } from '../schemas/index.js';
export const setImage = options => ({ commands }) => {
    return commands.insertContent({
        type: schema.nodes.image.name,
        attrs: options
    });
};
