import React from "react";
// import style component
import { SectionWrapper } from "./index.style";
// import component
//  - - - - - - - - - -
const Section2_3: React.FC = () => {
  return (
    <SectionWrapper>
      <iframe
        src="https://maps.google.com/maps?q=1555%20E%20Flamingo%20Dr%20Las%20Vegas,%20NV%2089119&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="600"
      ></iframe>
    </SectionWrapper>
  );
};

export default Section2_3;
