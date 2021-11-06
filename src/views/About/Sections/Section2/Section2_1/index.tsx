import React from "react";

import { SectionWrapper } from "./index.style";
//
import { Row, Col } from "components/Layout";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { SimpleCard } from "components/Card";
import { Border } from "components/Border";
//
import photo1 from "assets/images/business4-wrap-bg3.jpg";
import photo2 from "assets/icon/lamp-icon.jpg";
const Section2_1: React.FC = () => {
  return (
    <SectionWrapper>
      <Row gap={80} alignItems="center">
        <Col item={12}>
          <Image src={photo1} mode="intrinsic" />
        </Col>

        <Col item={8}>
          <Col>
            <Text fWeight={700} fSize={24} fColor="black.regular">
              Sed tempus turpis.
            </Text>
          </Col>
          <Col padding="20px 0 0 0">
            <Text fWeight={700} fSize={50} lHeight={55} fColor="black.regular">
              Curabitur aenean mi nullam etiam ante.
            </Text>
          </Col>
          <Col padding="50px 0 0 0">
            <Text fColor="black.regular">
              Blandit primis curabitur justo eget nam habitasse egestas sociosqu
              sociosqu mi curabitur neque mauris torquent congue.
            </Text>
          </Col>
          <Col padding="50px 0 0 0">
            <Border bSize={1} bColor="gray.regular" />
            <SimpleCard
              width={80}
              height={80}
              image={photo2}
              color="white"
              description="Euismod praesent elit ipsum vehicula convallis cursus pharetra imperdiet enim himenaeos quisque amet consequat gravida metus."
            />
          </Col>
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default Section2_1;
