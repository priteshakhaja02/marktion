import { EditorState, Selection } from 'prosemirror-state';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import get from 'lodash/get';
import { minMax } from './utilities';
export function replaceNodeAtPosition({ pos, tr, content }) {
    const node = tr.doc.nodeAt(pos);
    if (node) {
        tr.replaceWith(pos, pos + node.nodeSize, content);
    }
    return tr;
}
/**
 * Checks if the type a given `node` has a given `nodeType`.
 */
export function isNodeOfType(props) {
    const { types, node } = props;
    if (!node) {
        return false;
    }
    const matches = (type) => type === node.type || type === node.type.name;
    if (isArray(types)) {
        return types.some(matches);
    }
    return matches(types);
}
/**
 * Checks to see if the passed value is a Prosemirror Editor State
 *
 * @param value - the value to check
 */
export function isEditorState(value) {
    return isObject(value) && value instanceof EditorState;
}
/**
 * Predicate checking whether the value is a Selection
 *
 * @param value - the value to check
 */
export function isSelection(value) {
    return isObject(value) && value instanceof Selection;
}
export function getPluginKey(key) {
    return typeof key == 'string' ? key : get(key, 'key');
}
export function posToDOMRect(view, from, to) {
    const minPos = 0;
    const maxPos = view.state.doc.content.size;
    const resolvedFrom = minMax(from, minPos, maxPos);
    const resolvedEnd = minMax(to, minPos, maxPos);
    const start = view.coordsAtPos(resolvedFrom);
    const end = view.coordsAtPos(resolvedEnd, -1);
    const top = Math.min(start.top, end.top);
    const bottom = Math.max(start.bottom, end.bottom);
    const left = Math.min(start.left, end.left);
    const right = Math.max(start.right, end.right);
    const width = right - left;
    const height = bottom - top;
    const x = left;
    const y = top;
    const data = {
        top,
        bottom,
        left,
        right,
        width,
        height,
        x,
        y
    };
    return {
        ...data,
        toJSON: () => data
    };
}
export function posToOffsetRect(view, from, to) {
    const rect = posToDOMRect(view, from, to);
    const parent = view.dom;
    const parentRect = parent.getBoundingClientRect();
    const x = rect.left - parentRect.left + parent.scrollLeft;
    const y = rect.top - parentRect.top + parent.scrollTop;
    return new DOMRect(x, y, rect.width, rect.height);
}
