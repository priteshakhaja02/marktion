import { isUndefined } from 'lodash';
export function getEditable(tr, defaultValue = true) {
    const editable = tr.getMeta('editable');
    if (isUndefined(editable)) {
        return defaultValue;
    }
    return editable;
}
export function setEditable(tr, editable) {
    return tr.setMeta('editable', editable);
}
