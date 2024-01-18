import { DropDownProps } from 'antd';
import { SuggestionProps } from '../../plugin-suggestion';
export type SlashProps = {
    detail: SuggestionProps | null;
} & Omit<DropDownProps, 'menu'>;
export declare function Slash(props: SlashProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=slash.d.ts.map