import React from "react";

import { SectionWrapper } from "./index.style";
import { Col, Row } from "components/Layout";
import { Image } from "components/Image";
import { Text } from "components/Text";
import business1 from "assets/images/business4-clients-pic1.png";
import business2 from "assets/images/business4-clients-pic2.png";
import business3 from "assets/images/business4-clients-pic3.png";

const Section4_1: React.FC = () => {
  return (
    <SectionWrapper>
      <Row flexDirection="column" alignItems="center" gap={60}>
        <Col>
          <Text fColor="black.regular" fSize={43} fWeight={700}>
            We cooperate with
          </Text>
        </Col>
        <Col item={24}>
          <Row justifyContent="space-around">
            <Image src={business1} height={61} width={106} />
            <Image src={business2} height={61} width={106} />
            <Image src={business3} height={61} width={106} />
          </Row>
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default Section4_1;
