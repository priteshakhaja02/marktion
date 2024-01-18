import { isActive } from '../../core';
import { getDefaultSlashItems } from './getDefaultSlashItems';
import { getTableSlashItems } from './getTableSlashItems';
export const getSlashItems = (query, state) => {
    if (!query || !state) {
        return getDefaultSlashItems();
    }
    const isTableActive = isActive(state, 'table');
    const suggestions = isTableActive ? getTableSlashItems() : getDefaultSlashItems();
    query = query.slice(1);
    return suggestions.filter(item => {
        if (typeof query === 'string' && query.length > 0) {
            const search = query.toLowerCase();
            return (item.title.toLowerCase().includes(search) ||
                item.description.toLowerCase().includes(search) ||
                (item.searchTerms && item.searchTerms.some((term) => term.includes(search))));
        }
        return true;
    });
};
export const SlashItemMap = (() => {
    const items = getDefaultSlashItems();
    const tableItems = getTableSlashItems();
    const map = {};
    items.forEach(item => {
        map[item.key] = item;
    });
    tableItems.forEach(item => {
        map[item.key] = item;
    });
    return map;
})();
