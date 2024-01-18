import React from 'react';
import { Marktion, MarktionOptions } from '../../marktion';
export type ReactEditorProps = React.PropsWithChildren<Partial<MarktionOptions> & {
    prefix?: React.ReactNode;
    className?: string;
    dark?: boolean;
}>;
export type ReactEditorRef = {
    editor: Marktion;
};
export declare const ReactEditor: React.ForwardRefExoticComponent<Partial<MarktionOptions> & {
    prefix?: React.ReactNode;
    className?: string | undefined;
    dark?: boolean | undefined;
} & {
    children?: React.ReactNode;
} & React.RefAttributes<ReactEditorRef>>;
//# sourceMappingURL=react-editor.d.ts.map