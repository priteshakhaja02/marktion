export function insertMessages(pm, messages, selection) {
    const markdown = messagesToMarkdown(messages);
    pm.chain()
        .focus()
        .insertMarkdownAt(selection || pm.state.selection, markdown)
        .run();
}
export function messagesToMarkdown(messages) {
    return messages
        .map(message => {
        if (message.role === 'assistant') {
            return message.content;
        }
        // return `**Q: ${message.content}**`;
    })
        .join('\n\n');
}
