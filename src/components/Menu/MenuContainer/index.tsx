import React from "react";
// type
import { MenuContainerProps, MenuItemProps } from "types/components/Menu";
import { MenuItem } from "components/Menu";
// styled components
import { MenuContainerWrapper } from "./MenuContainer.style";

// --------------------------------------------------------------

const MenuContainer: React.FC<MenuContainerProps> = ({
  data = [],
  fDirection = "none",
}) => {
  return (
    <MenuContainerWrapper>
      {data.map((item: MenuItemProps, index) => (
        <MenuItem
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
