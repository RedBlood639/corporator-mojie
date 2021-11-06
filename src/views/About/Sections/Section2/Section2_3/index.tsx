import React from "react";
//  import styled component
import { SectionWrapper } from "./index.style";
//  import component
import { Row, Col } from "components/Layout";
import { Image } from "components/Image";
// import image
import photo1 from "assets/images/business4-qa-pic1.jpg";
import { Text } from "components/Text";

const Section2_3: React.FC = () => {
  return (
    <SectionWrapper>
      <Row justifyContent="center" alignItems="center" gap={55}>
        <Col item={13}>
          <Image src={photo1} />
        </Col>
        <Col item={11}>
          <Col>
            <Text fSize={36} fWeight={700} fColor="black.regular" lHeight={42}>
              You have questions? We've got answers.
            </Text>
          </Col>
          <Col padding="20px 0 0 0">
            <Text fColor="black.regular">
              Magna, at ipsum pede, molestie mauris. Aenean tincidunt in, magna.
              Integer lorem lorem id rutrum molestie, neque tristique senectus
              et ipsum. Vestibulum tempus arcu. In malesuada elit porta laoreet.
              Nam ipsum. Nam nunc justo vel laoreet sapien. Sed justo at sem.
            </Text>
          </Col>
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default Section2_3;
