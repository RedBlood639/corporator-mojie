import React from "react";
import { SectionWrapper } from "./index.style";
import { Row } from "components/Layout";
import photo from "assets/images/business4-home-pic6.png";
import { Image } from "components/Image";
const Section3_3: React.FC = () => {
  return (
    <SectionWrapper>
      <Row justifyContent="center" alignItems="center">
        <Image src={photo} width={528} height={223.11} />
      </Row>
    </SectionWrapper>
  );
};

export default Section3_3;
