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
      <Row gap={40} justifyContent="center" alignItems="center">
        <Col item={11}>
          <Col>
            <Text fSize={16} fWeight={700} fColor="orange.light">
              About us
            </Text>
          </Col>
          <Col padding="10px 0 0 0">
            {" "}
            <Text fSize={70} fWeight={700} lHeight={75}>
              Double your income with us
            </Text>
          </Col>
          <Col padding="40px 0 0 0">
            {" "}
            <Text>
              Fames tincidunt magna habitant maecenas congue diam nisi ultricies
              nisl aenean tempor facilisis purus.
            </Text>
          </Col>
        </Col>
        <Col item={12}>
          <Image src={photo1} mode="intrinsic" />
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default Section1;
