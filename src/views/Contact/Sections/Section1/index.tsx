import React from "react";

import { SectionWrapper, Content_wrapper, Image_wrapper } from "./index.style";

//
import { Row, Col } from "components/Layout";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { WithContainer } from "components/Container";
//
import photo1 from "assets/images/business4-contact-pic1.jpg";
import photo2 from "assets/images/business4-section-bg4.png";
// ------------------------

const Content: React.FC = () => {
  return (
    <>
      <Row gap={45} justifyContent="center" alignItems="center">
        <Col item={12}>
          <Col>
            <Text fSize={16} fWeight={700} fColor="orange.light">
              Connect With Us
            </Text>
          </Col>
          <Col padding="10px 0 0 0">
            <Text fSize={40} fWeight={700} lHeight={45}>
              We are here to hear from you, answer your questions, listen to
              your feedback, and start a new partnership with you.
            </Text>
          </Col>
          {/* <Col padding="40px 0 0 0">
            <Text>
              We are here to hear from you, answer your questions, listen to
              your feedback, and start a new partnership with you.
            </Text>
          </Col> */}
        </Col>
        <Col item={12}>
          <Image src={photo1} mode="intrinsic" />
        </Col>
      </Row>
    </>
  );
};

const Section1: React.FC = () => {
  return (
    <SectionWrapper>
      <Content_wrapper>
        <WithContainer SectionView={Content} cColor="primary.regular" />
      </Content_wrapper>
      <Image_wrapper>
        <Image src={photo2} mode="intrinsic" />
      </Image_wrapper>
    </SectionWrapper>
  );
};

export default Section1;
