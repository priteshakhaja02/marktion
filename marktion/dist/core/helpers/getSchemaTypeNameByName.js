export function getSchemaTypeNameByName(name, schema) {
    if (schema.nodes[name]) {
        return 'node';
    }
    if (schema.marks[name]) {
        return 'mark';
    }
    return null;
}
