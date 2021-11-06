import React from "react";

import { Button } from "components/Button";
import { SimpleCard } from "components/Card";
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { FaBriefcase } from "react-icons/fa";
// import styled component
import { SectionWrapper } from "./index.stlye";
// import image
import photo1 from "assets/images/business4-icon10.png";
import photo2 from "assets/images/business4-budget-pic2.jpg";

import { Image } from "components/Image";

const Section2_2: React.FC = () => {
  return (
    <SectionWrapper>
      <Row justifyContent="center" alignItems="center">
        <Col item={12}>
          <Col>
            <Text fSize={36} fWeight={700} fColor="black.regular">
              Current budget
            </Text>
          </Col>
          <Col padding="50px 0 0 0">
            <Text fSize={36} fWeight={700} fColor="black.regular">
              Tasks completed
            </Text>
          </Col>
          <Col>
            <SimpleCard
              image={photo1}
              width={60}
              height={60}
              color="white"
              description="Sed vel urna molestie eleifend quisque metus consequat quis suscipit urna hendrerit."
            />
          </Col>
          <Col>
            <Button bColor="primary" bSize="big" icon={<FaBriefcase />}>
              OUR SERVICE
            </Button>
          </Col>
        </Col>
        <Col item={12}>
          <Image src={photo2} mode="intrinsic" width={539} height={733.17} />
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default Section2_2;
