import React from "react";
//  import component
import { Col, Row } from "components/Layout";
// import styled component
import { SectionWrapper, Image_Wrapper } from "./index.style";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { FaMailBulk } from "react-icons/fa";
import { Image } from "components/Image";
//  import image
import photo from "assets/images/business4-section-bg6.png";
//  -   ----
const Section2_4: React.FC = () => {
  return (
    <SectionWrapper>
      <Row justifyContent="center" flexDirection="column" alignItems="center">
        <Col item={12}>
          <Text
            fColor="black.regular"
            fWeight={700}
            fSize={36}
            tAlign="center"
            lHeight={42}
          >
            Aptent per netus accumsan maecenas quis euismod
          </Text>
        </Col>
        <Col padding="50px 0 0 0">
          <Button icon={<FaMailBulk />}>CONTACT US</Button>
        </Col>
      </Row>
      <Image_Wrapper>
        <Image src={photo} mode="intrinsic" />
      </Image_Wrapper>
    </SectionWrapper>
  );
};
export default Section2_4;
