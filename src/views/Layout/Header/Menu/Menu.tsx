import React from "react";
// components
import { MenuContainer } from "components/Menu";
import { ContainerWrapper } from "components/Container";
// type
import { MenuItemType } from "types/components/Menu";
// styled components
import { MenuWrapper, MenuInner } from "./Menu.style";
import { Col, Row } from "components/Layout";

// ------------------------------------------------

export default function Menu() {
  // menu data
  const menuData: Array<MenuItemType> = [
    { title: "BUY NOW" },
    { title: "CONTACT" },
    { title: "FAQ" },
    { title: "SERVICES" },
    { title: "ABOUT US" },
    { title: "HOME" },
  ];

  return (
    <MenuWrapper>
      <ContainerWrapper>
        <MenuInner>
          <Row>
            <Col item={12}></Col>
            <Col item={12}>
              <MenuContainer data={menuData} />
            </Col>
          </Row>
        </MenuInner>
      </ContainerWrapper>
    </MenuWrapper>
  );
}
