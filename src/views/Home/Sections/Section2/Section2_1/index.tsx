import { Col, Row } from "components/Layout";
import React from "react";

import { SectionWrapper } from "./index.style";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { FaCommentDollar } from "react-icons/fa";
import { Image } from "components/Image";

// import photo
import photo1 from "assets/images/business4-home-pic4.jpg";

const Secton2_1: React.FC = () => {
  return (
    <SectionWrapper>
      <Row gap={60} alignItems="center">
        <Col item={11}>
          <Image src={photo1} width={674.5} height={452.63} />
        </Col>
        <Col item={10}>
          <Row flexDirection="column">
            <Col padding="0 0 50px 0">
              <Text fSize={50} fWeight={700} lHeight={55}>
                Who we are
              </Text>
            </Col>
            <Col padding="0 0 30px 0">
              <Text>
                Mojie incorporates user-generated content into eCommerce to
                create a groundbreaking interactive experience for buyers and
                sellers alike.
              </Text>
            </Col>
            <Col>
              <br />
              <Button bColor="primary" bSize="big" icon={<FaCommentDollar />}>
                READ ABOUT US
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default Secton2_1;
