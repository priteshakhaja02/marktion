import { schema } from '../schemas/index.js';
export const toggleTaskList = (keepMarks = false) => ({ commands }) => {
    return commands.toggleList(schema.nodes.task_list, schema.nodes.task_item, keepMarks);
};
