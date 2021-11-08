import React, { useState } from "react";
// components
import { MobileMenuContainer } from "components/Menu";
import { ContainerWrapper } from "components/Container";
import { Col, Row } from "components/Layout";
import { TiThMenu } from "react-icons/ti";
import { Image } from "components/Image";
// type
import { MenuItemProps } from "types/components/Menu";
// styled components
import {
  MenuWrapper,
  MenuInner,
  Icon_wrapper,
  Navbar_wrapper,
  Content_wrapper,
} from "./MobileMenu.style";
// import imagge
import photo from "assets/images/retina-business4.png";
// ------------------------------------------------
// menu data
const menuData: Array<MenuItemProps> = [
  { title: "CAREER", href: "/career" },
  { title: "CONTACT", href: "/contact" },
  { title: "ABOUT US", href: "/about" },
  { title: "HOME", href: "/" },
];
export default function NobileMenu() {
  const [show, setShow] = useState<boolean>(false);
  const onShow = () => {
    setShow(!show);
  };
  return (
    <MenuWrapper>
      <ContainerWrapper>
        <MenuInner show={show}>
          <Row flexDirection="column">
            <Col padding="12px 0">
              <Icon_wrapper>
                <TiThMenu size={25} onClick={onShow} />
                <Image src={photo} mode="intrinsic" width={197} height={55} />
              </Icon_wrapper>
            </Col>
          </Row>
        </MenuInner>
      </ContainerWrapper>
      <Navbar_wrapper show={show}>
        <Row flexDirection="column" alignItems="center" padding="30px 0 0 0">
          <Col>
            <Image src={photo} mode="intrinsic" width={197} height={55} />
          </Col>
          <Col padding="10px 0 0 0" item={18}>
            <MobileMenuContainer data={menuData} onShow={onShow} />
          </Col>
        </Row>
      </Navbar_wrapper>
      <Content_wrapper onClick={onShow} show={show} />
    </MenuWrapper>
  );
}
