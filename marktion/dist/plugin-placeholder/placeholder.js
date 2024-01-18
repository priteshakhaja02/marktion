import { Plugin, PluginKey } from 'prosemirror-state';
import { Decoration, DecorationSet } from 'prosemirror-view';
import { getEditable } from '../core/meta';
const PlaceholderPluginKey = new PluginKey('plugin-placeholder');
const defaultOptions = {
    emptyEditorClass: 'is-editor-empty',
    emptyNodeClass: 'is-empty',
    placeholder: 'Write something …',
    showOnlyWhenEditable: true,
    considerAnyAsEmpty: false,
    showOnlyCurrent: true,
    includeChildren: false
};
export function placeholder(options = {}) {
    options = {
        ...defaultOptions,
        ...options
    };
    return new Plugin({
        key: PlaceholderPluginKey,
        props: {
            decorations: ({ doc, selection, tr }) => {
                const active = getEditable(tr) || !options.showOnlyWhenEditable;
                const { anchor } = selection;
                const decorations = [];
                if (!active) {
                    return null;
                }
                // only calculate isEmpty once due to its performance impacts (see issue #3360)
                const { firstChild } = doc.content;
                const isLeaf = firstChild && firstChild.type.isLeaf;
                const isAtom = firstChild && firstChild.isAtom;
                const isValidNode = options.considerAnyAsEmpty
                    ? true
                    : firstChild && firstChild.type.name === doc.type.contentMatch.defaultType?.name;
                const isEmptyDoc = doc.content.childCount <= 1 &&
                    firstChild &&
                    isValidNode &&
                    firstChild.nodeSize <= 2 &&
                    (!isLeaf || !isAtom);
                doc.descendants((node, pos) => {
                    const hasAnchor = anchor >= pos && anchor <= pos + node.nodeSize;
                    const isEmpty = !node.isLeaf && !node.childCount;
                    if ((hasAnchor || !options.showOnlyCurrent) && isEmpty) {
                        const classes = [options.emptyNodeClass];
                        if (isEmptyDoc) {
                            classes.push(options.emptyEditorClass);
                        }
                        const decoration = Decoration.node(pos, pos + node.nodeSize, {
                            class: classes.join(' '),
                            'data-placeholder': typeof options.placeholder === 'function'
                                ? options.placeholder({
                                    node,
                                    pos,
                                    hasAnchor
                                })
                                : options.placeholder
                        });
                        decorations.push(decoration);
                    }
                    return options.includeChildren;
                });
                return DecorationSet.create(doc, decorations);
            }
        }
    });
}
