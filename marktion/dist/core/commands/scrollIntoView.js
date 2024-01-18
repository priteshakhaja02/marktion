export const scrollIntoView = () => ({ tr, dispatch }) => {
    if (dispatch) {
        tr.scrollIntoView();
    }
    return true;
};
