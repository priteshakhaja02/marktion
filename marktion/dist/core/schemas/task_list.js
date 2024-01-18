export const task_list = {
    content: 'task_item+',
    group: 'block',
    parseDOM: [{ tag: 'ul[data-task-list]' }],
    // toDOM: node => ['ul', { 'data-task-list': '' }, 0],
    toDOM(node) {
        return ['ul', { 'data-task-list': '', role: 'task-list' }, 0];
    }
};
