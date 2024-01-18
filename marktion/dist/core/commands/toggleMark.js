import { getMarkType } from '../helpers';
import { isMarkActive } from '../helpers';
export const toggleMark = (typeOrName, attributes = {}, options = {}) => ({ state, commands }) => {
    const { extendEmptyMarkRange = false } = options;
    const type = getMarkType(typeOrName, state.schema);
    const isActive = isMarkActive(state, type, attributes);
    if (isActive) {
        return commands.unsetMark(type, { extendEmptyMarkRange });
    }
    return commands.setMark(type, attributes);
};
export const toggleStrong = () => ({ commands }) => {
    return commands.toggleMark('strong');
};
export const toggleEm = () => ({ commands }) => {
    return commands.toggleMark('em');
};
export const toggleCode = () => ({ commands }) => {
    return commands.toggleMark('code');
};
export const toggleStrike = () => ({ commands }) => {
    return commands.toggleMark('strike');
};
