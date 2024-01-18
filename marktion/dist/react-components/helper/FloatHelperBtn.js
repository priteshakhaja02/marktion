import { jsx as _jsx } from "react/jsx-runtime";
import { FloatButton } from 'antd';
import { HelpCircleIcon } from 'lucide-react';
import { HelperMenu } from './HelperMenu';
export function FloatHelperBtn() {
    return (_jsx(FloatButton.Group, { shape: "square", children: _jsx(HelperMenu, { children: _jsx(FloatButton, { style: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }, onClick: () => console.log('onClick'), icon: _jsx(HelpCircleIcon, { size: 18 }) }) }) }));
}
