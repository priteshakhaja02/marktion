import { InputRule } from 'prosemirror-inputrules';
import { Attrs, MarkType } from 'prosemirror-model';
export declare function markTypeInputRule(regexp: RegExp, markType: MarkType, updateCaptured?: UpdateCaptured, getAttributes?: (captured: UpdateCaptureTextProps, match: RegExpMatchArray) => Attrs): InputRule;
type UpdateCaptured = (captured: UpdateCaptureTextProps) => UpdateCaptureTextProps;
type UpdateCaptureTextProps = {
    /**
     * The first capture group from the matching input rule.
     */
    captureGroup: string | undefined;
    /**
     * The text of the full match which was received.
     */
    fullMatch: string;
    /**
     * The starting position of the match relative to the `doc`.
     */
    start: number;
    /**
     * The end position of the match relative to the `doc`.
     */
    end: number;
};
export {};
//# sourceMappingURL=markTypeInputRule.d.ts.map