export const strike = {
    parseDOM: [
        {
            tag: 's'
        },
        {
            tag: 'del'
        },
        {
            tag: 'strike'
        },
        {
            style: 'text-decoration',
            getAttrs: node => (node === 'line-through' ? {} : false)
        }
    ],
    toDOM: () => ['s', 0]
};
