import { InputRule } from 'prosemirror-inputrules';
export function markTypeInputRule(regexp, markType, updateCaptured = a => a, getAttributes) {
    return new InputRule(regexp, (state, match, start, end) => {
        const { tr } = state;
        const captured = updateCaptured({
            fullMatch: match[0],
            captureGroup: match[1],
            start,
            end
        });
        const attrs = getAttributes?.(captured, match);
        let { fullMatch, captureGroup, start: markStart, end: markEnd } = captured;
        if (captureGroup) {
            const startSpaces = fullMatch.search(/\S/);
            const textStart = markStart + fullMatch.indexOf(captureGroup);
            const textEnd = textStart + captureGroup.length;
            if (textEnd < markEnd) {
                tr.delete(textEnd, markEnd);
            }
            if (textStart > markStart) {
                tr.delete(markStart + startSpaces, textStart);
            }
            markEnd = markStart + startSpaces + captureGroup.length;
            return tr.addMark(markStart, markEnd, markType.create(attrs));
        }
        return null;
    });
}
