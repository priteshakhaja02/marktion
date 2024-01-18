/// <reference types="react" />
import { PopoverProps } from 'antd';
export declare function Bubble(props: Omit<PopoverProps, 'content'>): import("react/jsx-runtime").JSX.Element;
export declare function useBubble(): {
    plugin: import("prosemirror-state").Plugin<import("../../plugin-bubble").BubblePluginState>;
    element: import("react").ReactPortal | null;
};
//# sourceMappingURL=buble.d.ts.map