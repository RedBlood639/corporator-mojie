import React from "react";

import Section2_1 from "./Section2_1";
import Section2_2 from "./Section2_2";
import Section2_3 from "./Section2_3";
import Section2_4 from "./Section2_4";
import { WithContainer } from "components/Container";
const Section4: React.FC = () => {
  return (
    <>
      <Section2_1 />
      {/* <WithContainer SectionView={Section2_2} cColor="primary.regular" /> */}
      {/* <Section2_3 /> */}
      {/* <WithContainer SectionView={Section2_4} cColor="primary.regular" /> */}
    </>
  );
};

export default Section4;
