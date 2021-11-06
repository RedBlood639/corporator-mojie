import React from "react";

import { WithContainer } from "components/Container";
//  views
import { Section1, Section2, Section3, Section4 } from "views/Home/Sections";

const Home: React.FC = () => {
  return (
    <>
      <WithContainer SectionView={Section1} mode="default" />
      <WithContainer
        cColor="primary.regular"
        SectionView={Section2}
        mode="default"
      />
      {/* <WithContainer cColor="gray.normal" SectionView={Section3} /> */}
      {/* <WithContainer cColor="white" SectionView={Section4} /> */}
    </>
  );
};

export default Home;
