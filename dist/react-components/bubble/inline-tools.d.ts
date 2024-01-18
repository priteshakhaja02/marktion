/// <reference types="react" />
export interface BubbleMenuItem {
    name: string;
    isActive: () => boolean;
    command: () => void;
    icon: React.ReactNode;
}
export declare function InlineTools(props: {
    showAI?: boolean;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=inline-tools.d.ts.map