import { parse } from '../encoding';
export const insertMarkdownAt = (range, content) => ({ tr, dispatch }) => {
    const doc = parse(content);
    if (dispatch) {
        const from = typeof range === 'number' ? range : range.from;
        const to = typeof range === 'number' ? range : range.to;
        tr.replaceWith(from, to, doc);
    }
    return true;
};
