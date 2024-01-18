import { Node as ProsemirrorNode } from 'prosemirror-model';
import { LanguageDescription } from '@codemirror/language';
export type SettingViewContext = {
    wrapperEl: HTMLElement;
    update: (node: ProsemirrorNode) => void;
    destory: () => void;
};
export declare const Settings: {
    name: string;
}[];
type CreateSettingViewOptions = {
    langs: LanguageDescription[];
    onLangChange: (lang: string) => void;
};
export declare function createSettingView(options: CreateSettingViewOptions): SettingViewContext;
export declare function renderSetting(): void;
export {};
//# sourceMappingURL=view-setting.d.ts.map