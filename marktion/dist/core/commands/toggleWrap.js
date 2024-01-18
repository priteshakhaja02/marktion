import { isNodeActive, getNodeType } from '../helpers';
export const toggleWrap = (typeOrName, attributes = {}) => ({ state, commands }) => {
    const type = getNodeType(typeOrName, state.schema);
    const isActive = isNodeActive(state, type, attributes);
    if (isActive) {
        return commands.lift(type);
    }
    return commands.wrapIn(type, attributes);
};
