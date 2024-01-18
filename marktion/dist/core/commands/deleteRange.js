export const deleteRange = range => ({ tr, dispatch }) => {
    const { from, to } = range;
    if (dispatch) {
        tr.delete(from, to);
    }
    return true;
};
