import { Fragment, Node as ProseMirrorNode, ParseOptions, Schema } from 'prosemirror-model';
import { Content } from '../types.js';
export type CreateNodeFromContentOptions = {
    slice?: boolean;
    parseOptions?: ParseOptions;
};
export declare function createNodeFromContent(content: Content, schema: Schema, options?: CreateNodeFromContentOptions): ProseMirrorNode | Fragment;
//# sourceMappingURL=createNodeFromContent.d.ts.map