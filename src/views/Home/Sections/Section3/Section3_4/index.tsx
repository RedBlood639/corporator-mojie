import React from "react";
import { SectionWrapper } from "./index.style";
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { FaHandsHelping } from "react-icons/fa";
import { Image } from "components/Image";
import photo from "assets/images/product_info.png";
const Section3_4: React.FC = () => {
  return (
    <SectionWrapper>
      <Row gap={30} alignItems="center">
        <Col item={12}>
          <Row flexDirection="column">
            <Col>
              <Text fWeight={700} fSize={36} fColor="black.regular">
                Curae pharetra conubia arcu dolor nullam quam
              </Text>
            </Col>
            <Col>
              <br />
              <Button bColor="primary" bSize="big" icon={<FaHandsHelping />}>
                SEE ALL SUPPORT
              </Button>
            </Col>
          </Row>
        </Col>
        <Col item={12}>
          <Image src={photo} width={500} height={300} />
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default Section3_4;
