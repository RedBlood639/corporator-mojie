import React from "react";

import { WithContainer } from "components/Container";

import { Section1, Section2 } from "./Sections";

const Contact: React.FC = () => {
  return (
    <>
      <WithContainer
        SectionView={Section1}
        mode="default"
        cColor="black.regular"
      />
      <WithContainer SectionView={Section2} mode="default" />
    </>
  );
};

export default Contact;
