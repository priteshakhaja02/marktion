export var SystemShortcutKey;
(function (SystemShortcutKey) {
    SystemShortcutKey[SystemShortcutKey["ToggleSourceMode"] = 0] = "ToggleSourceMode";
    SystemShortcutKey[SystemShortcutKey["AIChat"] = 1] = "AIChat";
})(SystemShortcutKey || (SystemShortcutKey = {}));
export const SystemShortcuts = [
    {
        key: SystemShortcutKey.AIChat,
        title: 'Ask AI(at the line beginning)',
        description: 'Ask AI',
        syntax: 'Space'
    },
    {
        key: SystemShortcutKey.ToggleSourceMode,
        title: 'Toggle source mode',
        description: 'Switch to source mode or WYSIWYG mode',
        syntax: 'Ctrl + /'
    }
];
export const SystemShortcutMap = (() => {
    const map = {};
    SystemShortcuts.forEach(item => {
        map[item.key] = item;
    });
    return map;
})();
