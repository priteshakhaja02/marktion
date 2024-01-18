import { schema } from '../schemas/index.js';
export const setLink = attributes => ({ chain }) => {
    return chain().setMark(schema.marks.link, attributes).setMeta('preventAutolink', true).run();
};
export const toggleLink = attributes => ({ chain }) => {
    return chain()
        .toggleMark(schema.marks.link, attributes, { extendEmptyMarkRange: true })
        .setMeta('preventAutolink', true)
        .run();
};
export const unsetLink = () => ({ chain }) => {
    return chain()
        .unsetMark(schema.marks.link, { extendEmptyMarkRange: true })
        .setMeta('preventAutolink', true)
        .run();
};
