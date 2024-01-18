import { createDocument } from '../helpers/';
export const setContent = (content, emitUpdate = false, parseOptions = {}) => ({ tr, dispatch, view }) => {
    const { doc } = tr;
    const document = createDocument(content, view.state.schema, parseOptions);
    if (dispatch) {
        tr.replaceWith(0, doc.content.size, document).setMeta('preventUpdate', !emitUpdate);
    }
    return true;
};
