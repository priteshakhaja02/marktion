/// <reference types="react" />
import { PopoverProps } from 'antd';
import { LinkBubbleState } from '../../plugin-link-bubble';
export declare function useLinkBubble(): {
    plugin: import("prosemirror-state").Plugin<LinkBubbleState>;
    element: import("react").ReactPortal | null;
};
type LinkBubbleProps = Omit<PopoverProps, 'content'> & {
    changeState: LinkBubbleState;
};
export declare function LinkBubble({ changeState, ...popoverProps }: LinkBubbleProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=link-bubble.d.ts.map