import React from "react";

import { SectionWrapper } from "./index.style";
import { Col, Row } from "components/Layout";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";

import { IoLogoWindows } from "react-icons/io";
import photo1 from "assets/images/business4-slider-pic2.jpg";

const Section4_4: React.FC = () => {
  return (
    <SectionWrapper>
      <Row gap={60} alignItems="center">
        <Col item={14}>
          <Row flexDirection="column" alignItems="flex-end">
            <Col>
              <Text
                fColor="black.regular"
                fSize={50}
                fWeight={700}
                tAlign="right"
              >
                Aliquam erat volutpat
              </Text>
            </Col>
            <Col>
              <Text fColor="black.regular" tAlign="right">
                Phasellus tempor ac, pede. Mauris vitae velit eleifend lectus
                vulputate a, laoreet condimentumt
              </Text>
            </Col>
            <Col>
              <br />
              <Button bColor="primary" bSize="big" icon={<IoLogoWindows />}>
                READ ABOUT US
              </Button>
            </Col>
          </Row>
        </Col>
        <Col item={10}>
          <Image src={photo1} width={388.08} height={174.13} />
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default Section4_4;
