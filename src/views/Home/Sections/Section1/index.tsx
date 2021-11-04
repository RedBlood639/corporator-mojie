import React from "react";

import { SectionWrapper } from "./index.style";
//
import photo from "assets/images/business4-slider-bg.jpg";
import { Image } from "components/Image";
const Section1: React.FC = () => {
  return (
    <SectionWrapper>
      <Image src={photo} />
    </SectionWrapper>
  );
};

export default Section1;
