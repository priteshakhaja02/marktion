import isEqual from 'lodash/isEqual';
import { findParentNode } from '../../core';
export function updateCodeblock(type, attrs) {
    return (state, dispatch) => {
        const tr = state.tr;
        const parent = findParentNode(node => node.type === type)(tr.selection.$from);
        if (!parent || isEqual(attrs, parent.node.attrs)) {
            // Do nothing since the attrs are the same
            return false;
        }
        tr.setNodeMarkup(parent.pos, type, { ...parent.node.attrs, ...attrs });
        if (dispatch) {
            dispatch(tr);
        }
        return true;
    };
}
