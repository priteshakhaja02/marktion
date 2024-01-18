import { liftListItem as originalLiftListItem } from 'prosemirror-schema-list';
import { getNodeType } from '../helpers/getNodeType.js';
export const liftListItem = typeOrName => ({ state, dispatch }) => {
    const type = getNodeType(typeOrName, state.schema);
    return originalLiftListItem(type)(state, dispatch);
};
