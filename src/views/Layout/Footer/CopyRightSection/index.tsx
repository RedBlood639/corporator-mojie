import React from "react";
//  styled component
import { CopyRightSectionWrapper } from "./CopyRightSection.style";
// Componnent
import { Row, Col } from "components/Layout";
import { WithContainer } from "components/Container";
//
import { getThisYear } from "utils/helper-date";
// Generted Component
// ----------------------------------------

const FooterContent: React.FC = () => {
  return (
    <Row alignItems="center" justifyContent="space-between">
      <Col>
        @{getThisYear()} Betheme by Muffin group | All Rights Reserved | Powered
        by Li Haoming
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
