import { DOMParser, Fragment } from 'prosemirror-model';
import { elementFromString } from '../utils';
export function createNodeFromContent(content, schema, options) {
    options = {
        slice: true,
        parseOptions: {},
        ...options
    };
    if (typeof content === 'object' && content !== null) {
        try {
            if (Array.isArray(content) && content.length > 0) {
                return Fragment.fromArray(content.map(item => schema.nodeFromJSON(item)));
            }
            return schema.nodeFromJSON(content);
        }
        catch (error) {
            console.warn('[marktion warn]: Invalid content.', 'Passed value:', content, 'Error:', error);
            return createNodeFromContent('', schema, options);
        }
    }
    if (typeof content === 'string') {
        const parser = DOMParser.fromSchema(schema);
        return options.slice
            ? parser.parseSlice(elementFromString(content), options.parseOptions).content
            : parser.parse(elementFromString(content), options.parseOptions);
    }
    return createNodeFromContent('', schema, options);
}
