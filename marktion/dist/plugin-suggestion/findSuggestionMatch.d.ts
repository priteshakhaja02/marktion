import { ResolvedPos } from 'prosemirror-model';
import { Range } from '../core';
export interface Trigger {
    char: string;
    allowSpaces: boolean;
    allowedPrefixes: string[] | null;
    startOfLine: boolean;
    $position: ResolvedPos;
}
export type SuggestionMatch = {
    range: Range;
    query: string;
    text: string;
} | null;
export declare function findSuggestionMatch(config: Trigger): SuggestionMatch;
//# sourceMappingURL=findSuggestionMatch.d.ts.map