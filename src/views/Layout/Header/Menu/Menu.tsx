import React from "react";
// components
import { DesktopMenuContainer } from "components/Menu";
import { ContainerWrapper } from "components/Container";
// type
import { MenuItemProps } from "types/components/Menu";
// styled components
import { MenuWrapper, MenuInner } from "./Menu.style";
import { Col, Row } from "components/Layout";
//  import photo
import photo from "assets/images/retina-business4.png";
import { Image } from "components/Image";
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
          <Row justifyContent="center" alignItems="center">
            <Col>
              <Image src={photo} width={197} height={55} />
            </Col>
            <Col item={24}>
              <DesktopMenuContainer data={menuData} />
            </Col>
          </Row>
        </MenuInner>
      </ContainerWrapper>
    </MenuWrapper>
  );
}
