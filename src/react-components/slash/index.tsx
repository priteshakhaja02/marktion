import { DropDownProps, Dropdown } from 'antd';
import { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { slash } from '../../plugin-slash';

export function Slash(props: Omit<DropDownProps, 'menu'>) {
  return (
    <Dropdown
      placement="bottomLeft"
      menu={{
        items: [
          {
            key: 'blockquote',
            label: 'blockquote'
          },
          {
            key: 'heading',
            label: 'heading'
          }
        ]
      }}
      {...props}
    >
      <div style={{ height: '100%' }}></div>
    </Dropdown>
  );
}

export function useSlash() {
  const [open, setOpen] = useState(false);
  const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);

  const element = portalEl
    ? createPortal(<Slash open={open} onOpenChange={setOpen} />, portalEl)
    : null;

  const plugin = useMemo(() => {
    return slash({
      onAttach(portal) {
        setPortalEl(portal);
      },
      onOpenChange(open, changeState) {
        setOpen(open);
      }
    });
  }, []);

  return useMemo(() => {
    return {
      plugin,
      element
    };
  }, [element]);
}
