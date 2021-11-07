import React from "react";
//  component
import { Row, Col } from "components/Layout";
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

//  --------------------------------------------------
export default function LinkSection() {
  return (
    <LinkSectionWrapper>
      <Row
        justifyContent="space-between"
        responsive={{
          530: { flexDirection: "column", alignItems: "center", gap: 30 },
        }}
      >
        <Col item={8} padding="40px 0 0 0" responsive={{ 530: { item: 12 } }}>
          <Image src={photo1} mode="intrinsic" width={304.66} height={85.05} />
        </Col>

        <Col item={8} responsive={{ 530: { item: 24 } }}>
          <Row
            flexDirection="column"
            responsive={{ 530: { alignItems: "center" } }}
          >
            <Col>
              <CategoryItemHeader>Useful links</CategoryItemHeader>
            </Col>
            <Col>
              <LinkItem title="Home" href="/" />
              <LinkItem title="About us" href="/about" />
              <LinkItem title="Contact Us" href="/contact" />
              <LinkItem title="Careers" href="/career" />
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
