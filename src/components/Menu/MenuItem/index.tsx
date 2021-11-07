import React from "react";
// styled components
import { MenuItemWrapper, HeaderText } from "./MenuItem.style";
// type
import { MenuItemProps } from "types/components/Menu";
import { useLinkItem } from "components/LinkItem";

const LinkItem = useLinkItem(HeaderText);
// --------------------------------------------------------------

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  href,
  fDirection = "none",
}) => {
  return (
    <MenuItemWrapper fDirection={fDirection}>
      <HeaderText fSize={16} fWeight={700}>
        <LinkItem title={title} href={href} />
      </HeaderText>
    </MenuItemWrapper>
  );
};
export default MenuItem;
