import React from "react";

import { WithContainer } from "components/Container";
//  views
import { Section1, Section2 } from "views/Home/Sections";

const Home: React.FC = () => {
  return (
    <>
      <WithContainer SectionView={Section1} mode="default" />
      <WithContainer
        cColor="primary.regular"
        SectionView={Section2}
        mode="default"
      />
    </>
  );
};

export default Home;
