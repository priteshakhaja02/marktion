import { getNodeType } from '../helpers/getNodeType';
import { isNodeActive } from '../helpers/isNodeActive';
export const toggleNode = (typeOrName, toggleTypeOrName, attributes = {}) => ({ state, commands }) => {
    const type = getNodeType(typeOrName, state.schema);
    const toggleType = getNodeType(toggleTypeOrName, state.schema);
    const isActive = isNodeActive(state, type, attributes);
    if (isActive) {
        return commands.setNode(toggleType);
    }
    return commands.setNode(type, attributes);
};
