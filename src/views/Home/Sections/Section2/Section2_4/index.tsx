import React from "react";

// import styled componenet
import { StyledWrapper } from "./index.style";
// import component
import { Row, Col } from "components/Layout";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { SimpleCard } from "components/Card";
import { Button } from "components/Button";
import { FaRegCommentDots } from "react-icons/fa";
// import image
import photo1 from "assets/images/business4-home-pic5.jpg";
import photo2 from "assets/icon/business4-icon1.png";
const Section2_4: React.FC = () => {
  return (
    <StyledWrapper>
      <Row>
        <Col item={11}>
          <Row flexDirection="column">
            <Col>
              <Text fWeight={700} fSize={24}>
                Justo vel bibendum sapien
              </Text>
            </Col>
            <Col>
              <Text fWeight={700} fSize={50} lHeight={55}>
                Quisque lorem tortor fringilla sed
              </Text>
            </Col>
            <Col padding="50px 0 0 0">
              <Text>
                Consectetur viverra habitasse nostra potenti pretium eu et elit
                platea semper at ad eleifend sapien semper nulla vehicula.
                Viverra nulla ornare praesent augue sit habitant erat lectus.
              </Text>
            </Col>
            <Col padding="50px 0 0 0">
              <Button bColor="primary" bSize="big" icon={<FaRegCommentDots />}>
                READ MORE
              </Button>
            </Col>
            <Col padding="50px 0 0 0">
              <SimpleCard
                description="Cubilia phasellus lacus morbi duis inceptos torquent interdum libero nisl augue faucibus."
                image={photo2}
                height={60}
                width={60}
              />
            </Col>
          </Row>
        </Col>
        <Col item={2} />
        <Col item={11}>
          <Image src={photo1} width={495.88} height={725.38} mode="intrinsic" />
        </Col>
      </Row>
    </StyledWrapper>
  );
};

export default Section2_4;
