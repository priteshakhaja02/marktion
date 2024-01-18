/**
 * Forked from https://github.com/remirror/remirror/blob/main/packages/remirror__extension-list/src/list-item-node-view.ts
 * Modified by youking-lib
 */
export function createCustomMarkListItemNodeView({ node, mark }) {
    const dom = document.createElement('li');
    const contentDOM = document.createElement('div');
    const markContainer = document.createElement('label');
    markContainer.contentEditable = 'false';
    markContainer.setAttribute('role', 'task-item-label');
    markContainer.append(mark);
    dom.setAttribute('role', 'task-item');
    dom.append(markContainer);
    dom.append(contentDOM);
    const update = (newNode) => {
        if (newNode.type !== node.type) {
            return false;
        }
        node = newNode;
        updateDOM(node, dom);
        updateMark(node, mark);
        return true;
    };
    update(node);
    return { dom, contentDOM, update };
}
function updateDOM(node, dom) {
    if (node.attrs.checked) {
        dom.setAttribute('data-checked', 'true');
    }
    else {
        dom.removeAttribute('data-checked');
    }
    node.attrs.closed
        ? dom.classList.add('COLLAPSIBLE_LIST_ITEM_CLOSED')
        : dom.classList.remove('COLLAPSIBLE_LIST_ITEM_CLOSED');
}
function updateMark(node, mark) {
    node.childCount <= 1 ? mark.classList.add('disabled') : mark.classList.remove('disabled');
}
