import { Selection } from 'prosemirror-state';
import { PopoverProps } from 'antd';
import { GptConfig } from './type';
export type AIChatPanelProps = PopoverProps & {
    gptConfig?: GptConfig;
    selection: Selection | null;
};
export declare function AIChatPanel({ children, gptConfig, selection, ...popoverProps }: AIChatPanelProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ai-chat-panel.d.ts.map