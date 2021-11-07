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
      <Row
        gap={45}
        justifyContent="center"
        alignItems="center"
        responsive={{
          768: {
            gap: 10,
            flexDirection: "column",
            justifyContent: "center",
          },
        }}
      >
        <Col item={12} responsive={{ 768: { item: 24 } }}>
          <Col>
            <Text fSize={16} fWeight={700} fColor="orange.light">
              Connect With Us
            </Text>
          </Col>
          <Col padding="10px 0 0 0">
            <Text
              fSize={40}
              fWeight={700}
              lHeight={45}
              responsive={{
                1024: { fSize: 50, lHeight: 55 },
                768: { tAlign: "center", padding: "0 0 30px 0" },
                425: { fSize: 30, lHeight: 35 },
              }}
            >
              We are here to hear from you, answer your questions, listen to
              your feedback, and start a new partnership with you.
            </Text>
          </Col>
        </Col>
        <Col
          item={12}
          responsive={{
            768: { item: 22 },
            425: { item: 24 },
          }}
        >
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
