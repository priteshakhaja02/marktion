import { lift as originalLift } from 'prosemirror-commands';
import { isNodeActive, getNodeType } from '../helpers';
export const lift = (typeOrName, attributes = {}) => ({ state, dispatch }) => {
    const type = getNodeType(typeOrName, state.schema);
    const isActive = isNodeActive(state, type, attributes);
    if (!isActive) {
        return false;
    }
    return originalLift(state, dispatch);
};
