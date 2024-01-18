import { schema } from '..';
const listSchemas = [
    schema.nodes.bullet_list.name,
    schema.nodes.ordered_list.name,
    schema.nodes.task_list.name
];
export function isList(name) {
    return listSchemas.includes(name);
}
