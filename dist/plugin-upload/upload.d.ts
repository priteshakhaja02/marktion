import { EditorView } from 'prosemirror-view';
import { Plugin, PluginKey } from 'prosemirror-state';
import { DecorationSet } from 'prosemirror-view';
import { Fragment, Node } from 'prosemirror-model';
export type UploadPluginState = DecorationSet;
export declare const UploadPluginPluginKey: PluginKey<DecorationSet>;
export type UploadOptions = {
    enableHtmlFileUploader?: boolean;
    uploader?: (files: FileList, event: ClipboardEvent | DragEvent | Event, view: EditorView) => Promise<Fragment | Node | Node[]>;
};
export declare const upload: (options?: UploadOptions) => Plugin<DecorationSet>;
export declare function handleUpload(view: EditorView, files: FileList | undefined, event: ClipboardEvent | DragEvent | Event, options?: UploadOptions): boolean;
//# sourceMappingURL=upload.d.ts.map