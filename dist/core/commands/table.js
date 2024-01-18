import { TextSelection } from 'prosemirror-state';
import * as Table from 'prosemirror-tables';
import { createTable } from '../helpers';
export const insertTable = ({ rows = 3, cols = 3, withHeaderRow = true } = {}) => ({ tr, dispatch, view }) => {
    const node = createTable(view.state.schema, rows, cols, withHeaderRow);
    if (dispatch) {
        const offset = tr.selection.anchor + 1;
        tr.replaceSelectionWith(node)
            .scrollIntoView()
            .setSelection(TextSelection.near(tr.doc.resolve(offset)));
    }
    return true;
};
export const addColumnBefore = () => ({ state, dispatch }) => {
    return Table.addColumnBefore(state, dispatch);
};
export const addColumnAfter = () => ({ state, dispatch }) => {
    return Table.addColumnAfter(state, dispatch);
};
export const deleteColumn = () => ({ state, dispatch }) => {
    return Table.deleteColumn(state, dispatch);
};
export const addRowBefore = () => ({ state, dispatch }) => {
    return Table.addRowBefore(state, dispatch);
};
export const addRowAfter = () => ({ state, dispatch }) => {
    return Table.addRowAfter(state, dispatch);
};
export const deleteRow = () => ({ state, dispatch }) => {
    return Table.deleteRow(state, dispatch);
};
export const deleteTable = () => ({ state, dispatch }) => {
    return Table.deleteTable(state, dispatch);
};
export const mergeCells = () => ({ state, dispatch }) => {
    return Table.mergeCells(state, dispatch);
};
export const splitCell = () => ({ state, dispatch }) => {
    return Table.splitCell(state, dispatch);
};
export const toggleHeaderColumn = () => ({ state, dispatch }) => {
    return Table.toggleHeader('column')(state, dispatch);
};
export const toggleHeaderRow = () => ({ state, dispatch }) => {
    return Table.toggleHeader('row')(state, dispatch);
};
export const toggleHeaderCell = () => ({ state, dispatch }) => {
    return Table.toggleHeaderCell(state, dispatch);
};
export const mergeOrSplit = () => ({ state, dispatch }) => {
    if (Table.mergeCells(state, dispatch)) {
        return true;
    }
    return Table.splitCell(state, dispatch);
};
export const setCellAttribute = (name, value) => ({ state, dispatch }) => {
    return Table.setCellAttr(name, value)(state, dispatch);
};
export const goToNextCell = () => ({ state, dispatch }) => {
    return Table.goToNextCell(1)(state, dispatch);
};
export const goToPreviousCell = () => ({ state, dispatch }) => {
    return Table.goToNextCell(-1)(state, dispatch);
};
export const fixTables = () => ({ state, dispatch }) => {
    if (dispatch) {
        Table.fixTables(state);
    }
    return true;
};
export const setCellSelection = position => ({ tr, dispatch }) => {
    if (dispatch) {
        const selection = Table.CellSelection.create(tr.doc, position.anchorCell, position.headCell);
        // @ts-ignore
        tr.setSelection(selection);
    }
    return true;
};
