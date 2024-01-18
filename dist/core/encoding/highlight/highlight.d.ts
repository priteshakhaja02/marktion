/// <reference types=".pnpm/highlight.js@11.9.0/node_modules/highlight.js" />
export declare const lowlight: {
    highlight: (language: string, value: string, options?: Readonly<import("lowlight").Options> | null | undefined) => import("hast").Root;
    highlightAuto: (value: string, options?: Readonly<import("lowlight").AutoOptions> | null | undefined) => import("hast").Root;
    listLanguages: () => string[];
    register: {
        (grammars: Readonly<Record<string, import("highlight.js").LanguageFn>>): undefined;
        (name: string, grammar: import("highlight.js").LanguageFn): undefined;
    };
    registerAlias: {
        (aliases: Readonly<Record<string, string | readonly string[]>>): undefined;
        (language: string, alias: string | readonly string[]): undefined;
    };
    registered: (aliasOrName: string) => boolean;
};
export declare function highlight(language: string, value: string, parser?: {
    highlight: (language: string, value: string, options?: Readonly<import("lowlight").Options> | null | undefined) => import("hast").Root;
    highlightAuto: (value: string, options?: Readonly<import("lowlight").AutoOptions> | null | undefined) => import("hast").Root;
    listLanguages: () => string[];
    register: {
        (grammars: Readonly<Record<string, import("highlight.js").LanguageFn>>): undefined;
        (name: string, grammar: import("highlight.js").LanguageFn): undefined;
    };
    registerAlias: {
        (aliases: Readonly<Record<string, string | readonly string[]>>): undefined;
        (language: string, alias: string | readonly string[]): undefined;
    };
    registered: (aliasOrName: string) => boolean;
}): string;
type Root = ReturnType<(typeof lowlight)['highlight']>;
export declare function toString(tree: Root): string;
export {};
//# sourceMappingURL=highlight.d.ts.map