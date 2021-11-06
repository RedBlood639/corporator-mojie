import React from "react";

// import Section2_1 from "./Section2_1";
// import Section2_2 from "./Section2_2";
// import Section2_3 from "./Section2_3";
// import Section2_4 from "./Section2_4";
// import Section2_5 from "./Section2_5";
import Section2_6 from "./Section2_6";
import Section2_7 from "./Section2_7";

//
import { WithContainer } from "components/Container";
const Section2: React.FC = () => {
  return (
    <>
      {/* <WithContainer SectionView={Section2_1} mode="default" />
      <WithContainer SectionView={Section2_2} />
      <WithContainer SectionView={Section2_3} />
      <WithContainer SectionView={Section2_4} />
      <WithContainer SectionView={Section2_5} /> */}
      <WithContainer SectionView={Section2_6} cColor="gray.normal" />
      <WithContainer SectionView={Section2_7} cColor="gray.normal" />
    </>
  );
};

export default Section2;
