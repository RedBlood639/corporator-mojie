import React from "react";

import Section2_1 from "./Section2_1";

//
import { WithContainer } from "components/Container";
const Section2: React.FC = () => {
  return (
    <>
      <WithContainer SectionView={Section2_1} mode="default" />
    </>
  );
};

export default Section2;
