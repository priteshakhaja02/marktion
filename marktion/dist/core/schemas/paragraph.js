export const paragraph = {
    content: 'inline*',
    group: 'block',
    parseDOM: [{ tag: 'p' }],
    toDOM() {
        return ['p', 0];
    }
};
