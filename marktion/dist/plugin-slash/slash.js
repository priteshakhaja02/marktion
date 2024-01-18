import { PluginKey } from 'prosemirror-state';
import { suggestion } from '../plugin-suggestion';
export const SlashPluginKey = new PluginKey('plugin-slash');
export function slash(options) {
    return suggestion({
        ...options,
        pluginKey: SlashPluginKey
    });
}
