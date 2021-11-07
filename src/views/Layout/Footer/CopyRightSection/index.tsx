import React from "react";
//  styled component
import { CopyRightSectionWrapper } from "./CopyRightSection.style";
// Componnent
import { Text } from "components/Text";
import { Row, Col } from "components/Layout";
import { WithContainer } from "components/Container";
//
import { getThisYear } from "utils/helper-date";
import { Hidden } from "components/Hidden";
// Generted Component
// ----------------------------------------

const FooterContent: React.FC = () => {
  return (
    <Row alignItems="center" justifyContent="space-between">
      <Col>
        <Text responsive={{ 1024: { tAlign: "center", fSize: 15 } }}>
          @{getThisYear()} Betheme by Muffin group | All Rights Reserved |
          Powered by Li Haoming
        </Text>
      </Col>
    </Row>
  );
};

export default function CopyRightSection() {
  return (
    <CopyRightSectionWrapper>
      <WithContainer SectionView={FooterContent} cColor="primary.regular" />
    </CopyRightSectionWrapper>
  );
}
