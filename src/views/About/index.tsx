import React from "react";

import { WithContainer } from "components/Container";
//  views
import { Section1, Section2 } from "views/About/Sections";

const Home: React.FC = () => {
  return (
    <>
      {" "}
      <WithContainer SectionView={Section1} cColor="primary.regular" />
      <WithContainer SectionView={Section2} mode="default" />
    </>
  );
};

export default Home;
