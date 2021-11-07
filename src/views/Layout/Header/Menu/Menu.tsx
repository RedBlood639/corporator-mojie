import React from "react";
// components
import { MenuContainer } from "components/Menu";
import { ContainerWrapper } from "components/Container";
// type
import { MenuItemProps } from "types/components/Menu";
// styled components
import { MenuWrapper, MenuInner } from "./Menu.style";
import { Col, Row } from "components/Layout";

// ------------------------------------------------

export default function Menu() {
  // menu data
  const menuData: Array<MenuItemProps> = [
    { title: "CAREER", href: "/career" },
    { title: "CONTACT", href: "/contact" },
    { title: "ABOUT US", href: "/about" },
    { title: "HOME", href: "/" },
  ];

  return (
    <MenuWrapper>
      <ContainerWrapper>
        <MenuInner>
          <Row>
            <Col item={24}>
              <MenuContainer data={menuData} />
            </Col>
          </Row>
        </MenuInner>
      </ContainerWrapper>
    </MenuWrapper>
  );
}
