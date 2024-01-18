import { TextSelection } from 'prosemirror-state';
import isObject from 'lodash/isObject';
/**
 * Predicate checking whether the selection is a `TextSelection`.
 *
 * @param value - the value to check
 */
export function isTextSelection(value) {
    return isObject(value) && value instanceof TextSelection;
}
