import React from "react";

import { SectionWrapper } from "./index.style";
import { Col, Row } from "components/Layout";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";

import { IoLogoWindows } from "react-icons/io";
import photo1 from "assets/images/business4-slider-pic2.jpg";

const Section1: React.FC = () => {
  return (
    <SectionWrapper>
      <Row
        gap={60}
        alignItems="center"
        responsive={{
          768: {
            flexDirection: "column-reverse",
            gap: 30,
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Col
          item={14}
          responsive={{
            768: {
              item: 24,
            },
          }}
        >
          <Row
            flexDirection="column"
            alignItems="flex-end"
            gap={20}
            responsive={{
              1024: {
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
                flexDirection: "column",
              },
            }}
          >
            <Col>
              <Text
                fColor="black.regular"
                fSize={50}
                fWeight={700}
                tAlign="right"
                responsive={{
                  1024: { fSize: 40, tAlign: "center" },
                  768: { fSize: 30 },
                }}
              >
                Develop your career
              </Text>
            </Col>
            <Col>
              <Text
                fColor="black.regular"
                tAlign="right"
                responsive={{ 1024: { fSize: 15, tAlign: "center" } }}
              >
                Work at Mojie. See where you can fit in with your next role.
              </Text>
            </Col>
            <Col padding="20px 0 0 0">
              <Button bColor="primary" bSize="big" icon={<IoLogoWindows />}>
                Contact Us
              </Button>
            </Col>
          </Row>
        </Col>
        <Col
          item={10}
          responsive={{
            768: {
              item: 24,
            },
          }}
        >
          <Row justifyContent="center">
            <Image src={photo1} width={388.08} height={174.13} />
          </Row>
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default Section1;
