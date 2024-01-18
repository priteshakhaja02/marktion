/// <reference types="react" />
import { ProseMirrorRenderer } from '../../renderer-prosemirror';
import { SlashItemKey } from './constants';
export type SlashItem = {
    title: string;
    key: SlashItemKey;
    command: (editor: ProseMirrorRenderer, range: {
        from: number;
        to: number;
    }) => void;
    description: string;
    searchTerms: string[];
    icon: React.ReactNode;
    syntax?: string;
};
export declare const getDefaultSlashItems: () => SlashItem[];
//# sourceMappingURL=getDefaultSlashItems.d.ts.map