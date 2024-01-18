import { wrapIn as originalWrapIn } from 'prosemirror-commands';
import { getNodeType } from '../helpers';
export const wrapIn = (typeOrName, attributes = {}) => ({ state, dispatch }) => {
    const type = getNodeType(typeOrName, state.schema);
    return originalWrapIn(type, attributes)(state, dispatch);
};
