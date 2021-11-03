import React from "react";
//  component
import { Row,Col } from "components/Layout";
import {Text} from "components/Text"
// styled system
import {CategoryItem,CategoryItemHeader,LinkSectionWrapper} from "./LinkSection.style"

import { useLinkItem } from "components/LinkItem";
// Genterted Component
const LinkItem = useLinkItem(CategoryItem)


export default function LinkSection() {
    return (
      <LinkSectionWrapper>
        <Row>
          <Col item={9} />
          <Col item={4}>
            <Row flexDirection="column">
              <Col>
                <CategoryItemHeader>Useful links</CategoryItemHeader>
              </Col>
              <Col>
                <LinkItem title="Who we are?" />
                <LinkItem title="Our team" />
                <LinkItem title="Career" />
                <LinkItem title="Business Strategy" />
                <LinkItem title="Marketing Strategy" />
              </Col>
            </Row>
          </Col>
          <Col item={3} />
          <Col item={8}>
            <Row flexDirection="column">
              <Col>
                <CategoryItemHeader>Our address</CategoryItemHeader>
              </Col>
              <Col>
              <Text fSize = {17}>
                    Envato
                    Level 13,
                    2 Elizabeth,
                    Victoria 3000,
                    Australia
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </LinkSectionWrapper>
    );
  }
  