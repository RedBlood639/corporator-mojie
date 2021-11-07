import { Col, Row } from "components/Layout";
import React from "react";

import { SectionWrapper } from "./index.style";
import { Text } from "components/Text";

const Secton2_6: React.FC = () => {
  return (
    <SectionWrapper>
      <Row flexDirection="column" justifyContent="center" alignItems="center">
        <Col>
          <Text
            fWeight={700}
            fSize={50}
            fColor="black.regular"
            tAlign="center"
            responsive={{ 1024: { fSize: 30 } }}
          >
            Company philosophy and vision
          </Text>
        </Col>
        <Col>
          <Text
            fWeight={400}
            tAlign="center"
            fColor="black.regular"
            responsive={{ 1024: { fSize: 15 } }}
          >
            Authenticity, Social, Dedicated, and Relationship-Oriented
          </Text>
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default Secton2_6;
