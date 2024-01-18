export const setDocument = (document, emitUpdate = false) => ({ tr, dispatch, view }) => {
    const { doc } = tr;
    if (dispatch) {
        tr.replaceWith(0, doc.content.size, document).setMeta('preventUpdate', !emitUpdate);
    }
    return true;
};
