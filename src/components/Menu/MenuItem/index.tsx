import React from "react";
// styled components
import { MenuItemWrapper,HeaderText } from "./MenuItem.style";
// type
import { MenuItemProps } from "types/components/Menu";

// --------------------------------------------------------------

const MenuItem: React.FC<MenuItemProps> = ({
  title = "",
  fDirection = "none",
}) => {
  return <MenuItemWrapper fDirection={fDirection}>
      <HeaderText fSize = {16} fWeight = {700}>
        {title}
      </HeaderText>
    </MenuItemWrapper>;
};
export default MenuItem;
