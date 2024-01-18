import { schema } from '../schemas/index.js';
export const toggleBulletList = (keepMarks = false) => ({ commands }) => {
    return commands.toggleList(schema.nodes.bullet_list, schema.nodes.list_item, keepMarks);
};
