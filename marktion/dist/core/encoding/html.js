import { HtmlSerializer } from './ssr-serialize';
import { schema } from '..';
const defaultOptions = {
    codeHighlight: true
};
export function html(markdown, options = defaultOptions) {
    return new HtmlSerializer(schema).serialize(markdown);
}
