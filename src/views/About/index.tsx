import React from "react";

import { WithContainer } from "components/Container";
//  views
import { Section1, Section2 } from "views/About/Sections";

const About: React.FC = () => {
  return (
    <>
      {" "}
      <WithContainer SectionView={Section1} cColor="primary.regular" />
      <WithContainer
        SectionView={Section2}
        mode="default"
        cColor="gray.normal"
      />
    </>
  );
};

export default About;
