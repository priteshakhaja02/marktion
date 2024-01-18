import { sinkListItem as originalSinkListItem } from 'prosemirror-schema-list';
import { getNodeType } from '../helpers/getNodeType.js';
export const sinkListItem = typeOrName => ({ state, dispatch }) => {
    const type = getNodeType(typeOrName, state.schema);
    return originalSinkListItem(type)(state, dispatch);
};
