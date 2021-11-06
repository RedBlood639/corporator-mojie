import React from "react";
//  component
import { Row, Col } from "components/Layout";
import { Text } from "components/Text";
// styled system
import {
  CategoryItem,
  CategoryItemHeader,
  LinkSectionWrapper,
} from "./LinkSection.style";

// import component
import { useLinkItem } from "components/LinkItem";
import { Image } from "components/Image";
// import image
import photo1 from "assets/images/retina-business4.png";
// Genterted Component
const LinkItem = useLinkItem(CategoryItem);
//  - - - - --
export default function LinkSection() {
  return (
    <LinkSectionWrapper>
      <Row>
        <Col item={8} padding="40px 0 0 0">
          <Image src={photo1} mode="intrinsic" width={304.66} height={85.05} />
        </Col>

        <Col item={8} />
        <Col item={4}>
          <Row flexDirection="column">
            <Col>
              <CategoryItemHeader>Useful links</CategoryItemHeader>
            </Col>
            <Col>
              <LinkItem title="Home" />
              <LinkItem title="About us" />
              <LinkItem title="Contact Us" />
              <LinkItem title="Careers" />
            </Col>
          </Row>
        </Col>
        {/* <Col item={8}>
          <Row flexDirection="column">
            <Col>
              <CategoryItemHeader>Our address</CategoryItemHeader>
            </Col>
            <Col>
              <Text fSize={17}>
                Envato Level 13, 2 Elizabeth, Victoria 3000, Australia
              </Text>
            </Col>
          </Row>
        </Col> */}
      </Row>
    </LinkSectionWrapper>
  );
}
