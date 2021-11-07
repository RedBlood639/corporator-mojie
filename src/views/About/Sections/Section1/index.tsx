import React from "react";

import { SectionWrapper } from "./index.style";

//
import { Row, Col } from "components/Layout";
import { Image } from "components/Image";
//
import photo1 from "assets/images/business4-budget-pic1.jpg";
import { Text } from "components/Text";
const Section1: React.FC = () => {
  return (
    <SectionWrapper>
      <Row
        gap={40}
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
              About us
            </Text>
          </Col>
          <Col padding="10px 0 0 0">
            <Text
              fSize={65}
              fWeight={700}
              lHeight={70}
              responsive={{
                1024: { fSize: 50, lHeight: 55 },
                768: { tAlign: "center", padding: "0 0 30px 0" },
                425: { fSize: 30, lHeight: 35 },
              }}
            >
              Changing The World Through Live Shopping
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
    </SectionWrapper>
  );
};

export default Section1;
