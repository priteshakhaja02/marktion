import { Selection } from 'prosemirror-state';
import { Message } from 'ai/react';
import { ProseMirrorRenderer } from '../../renderer-prosemirror';
export declare function insertMessages(pm: ProseMirrorRenderer, messages: Message[], selection: Selection | null): void;
export declare function messagesToMarkdown(messages: Message[]): string;
//# sourceMappingURL=helper.d.ts.map