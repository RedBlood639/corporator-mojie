import { Col, Row } from "components/Layout";
import React from "react";

import { SectionWrapper } from "./index.style";
import { Text } from "components/Text";

const Secton3_1: React.FC = () => {
  return (
    <SectionWrapper>
      <Row flexDirection="column" justifyContent="center" alignItems="center">
        <Col>
          <Text fWeight={700} fSize={50} fColor="black.regular">
            Company philosophy and vision
          </Text>
        </Col>
        <Col>
          <Text fWeight={400} fColor="black.regular">
            Authenticity, Social, Dedicated, and Relationship-Oriented
          </Text>
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default Secton3_1;
