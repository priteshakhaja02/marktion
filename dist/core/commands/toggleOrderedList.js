import { schema } from '../schemas';
export const toggleOrderedList = (keepMarks = false) => ({ commands }) => {
    return commands.toggleList(schema.nodes.ordered_list, schema.nodes.list_item, keepMarks);
};
