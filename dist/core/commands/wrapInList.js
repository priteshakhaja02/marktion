import { wrapInList as originalWrapInList } from 'prosemirror-schema-list';
import { getNodeType } from '../helpers/getNodeType.js';
export const wrapInList = (typeOrName, attributes = {}) => ({ state, dispatch }) => {
    const type = getNodeType(typeOrName, state.schema);
    return originalWrapInList(type, attributes)(state, dispatch);
};
