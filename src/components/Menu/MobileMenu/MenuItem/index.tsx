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
      <LinkItem title={title} href={href} />
    </MenuItemWrapper>
  );
};
export default MenuItem;
