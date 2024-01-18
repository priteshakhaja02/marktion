export function createTable(schema, r = 3, c = 3) {
    const cells = Array(c)
        .fill(0)
        .map(() => schema.nodes.table_cell.createAndFill());
    const headerCells = Array(c)
        .fill(0)
        .map(() => schema.nodes.table_header.createAndFill());
    const rows = Array(r)
        .fill(0)
        .map((_, index) => schema.nodes.table_row.create(null, index === 0 ? headerCells : cells));
    return schema.nodes.table.create(null, rows);
}
