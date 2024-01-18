/// <reference types="react" />
export type ReactSSRProps = React.HTMLAttributes<HTMLDivElement> & {
    content: string;
    innerStyle?: React.CSSProperties;
};
export declare function ReactSSR({ innerStyle, content, ...wrapperProps }: ReactSSRProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ReactSSR.d.ts.map