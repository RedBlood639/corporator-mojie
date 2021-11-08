import React from "react";
// type
import { MenuContainerProps, MenuItemProps } from "types/components/Menu";
import { DesktopMenuItem } from "components/Menu";
// styled components
import { MenuContainerWrapper } from "./MenuContainer.style";

// --------------------------------------------------------------

interface MenuProps extends MenuContainerProps {
  onShow?: Function;
}

const MenuContainer: React.FC<MenuProps> = ({
  data = [],
  onShow,
  fDirection = "none",
}) => {
  return (
    <MenuContainerWrapper>
      {data.map((item: MenuItemProps, index) => (
        <DesktopMenuItem
          onShow={onShow}
          fDirection={fDirection}
          title={item.title}
          href={item.href}
          key={`menu-item-${index}`}
        />
      ))}
    </MenuContainerWrapper>
  );
};
export default MenuContainer;
