export declare enum SystemShortcutKey {
    ToggleSourceMode = 0,
    AIChat = 1
}
export type SystemShortcutType = {
    key: SystemShortcutKey;
    title: string;
    description: string;
    syntax: string;
};
export declare const SystemShortcuts: SystemShortcutType[];
export declare const SystemShortcutMap: Record<SystemShortcutKey, SystemShortcutType>;
//# sourceMappingURL=constants.d.ts.map