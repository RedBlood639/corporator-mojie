import React from "react";

import { WithContainer } from "components/Container";
//  views
import { Section1 } from "./Sections";

const Career: React.FC = () => {
  return (
    <>
      <WithContainer SectionView={Section1} />
    </>
  );
};

export default Career;
