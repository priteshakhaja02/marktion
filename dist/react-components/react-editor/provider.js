import { jsx as _jsx } from "react/jsx-runtime";
import { ConfigProvider, theme } from 'antd';
import { MarktionContext } from '../../react-hooks';
import { getPortalRoot } from '../../plugin-portal';
export function ReactEditorProvider({ editor, dark, children }) {
    return (_jsx(ConfigProvider, { getPopupContainer: () => getPortalRoot(editor.pmRenderer.state) || document.body, theme: {
            token: {
                colorPrimary: '#722ed1'
            },
            algorithm: dark ? theme.darkAlgorithm : theme.defaultAlgorithm
        }, children: _jsx(MarktionContext.Provider, { value: editor, children: children }) }));
}
