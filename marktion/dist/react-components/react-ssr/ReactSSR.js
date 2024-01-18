import { jsx as _jsx } from "react/jsx-runtime";
import cls from 'classnames';
import { html } from '../../core/encoding';
export function ReactSSR({ innerStyle, content, ...wrapperProps }) {
    return (_jsx("div", { ...wrapperProps, "data-accent-color": "violet", className: cls('marktion-themes', wrapperProps.className), children: _jsx("div", { className: "wysiwyg-editor", children: _jsx("div", { className: "ProseMirror", dangerouslySetInnerHTML: { __html: html(content, { codeHighlight: true }) }, style: innerStyle }) }) }));
}
