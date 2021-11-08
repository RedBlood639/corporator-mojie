import React from "react";
import router from "next/router";
// styled components
import { MenuItemWrapper, HeaderText } from "./MenuItem.style";
// type
import { MenuItemProps } from "types/components/Menu";
import { useLinkItem } from "components/LinkItem";

const LinkItem = useLinkItem(HeaderText);
// --------------------------------------------------------------
interface MenuProps extends MenuItemProps {
  onShow?: Function;
}

const MenuItem: React.FC<MenuProps> = ({
  title,
  href,
  onShow,
  fDirection = "none",
}) => {
  const onClick = () => {
    onShow();
    router.push(href);
  };
  return (
    <MenuItemWrapper fDirection={fDirection} onClick={onClick}>
      <LinkItem title={title} />
    </MenuItemWrapper>
  );
};
export default MenuItem;
