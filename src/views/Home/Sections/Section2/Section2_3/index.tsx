import React from "react";

import { Image } from "components/Image";
import { Row } from "components/Layout";
import { StyledWrapper } from "./index.style";
//  import image
import photo from "assets/images/business4-section-bg2.png";
const Section2_3: React.FC = () => {
  return (
    <StyledWrapper>
      <Row flexDirection="row">
        <Image src={photo} mode="intrinsic" />
      </Row>
    </StyledWrapper>
  );
};

export default Section2_3;
