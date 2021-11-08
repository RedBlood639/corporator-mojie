import React from "react";
//  import component
// import styled component
import { SectionWrapper } from "./index.style";

const Section1: React.FC = () => {
  return (
    <SectionWrapper>
      <video
        src={"video.mp4"}
        autoPlay={true}
        width="100%"
        muted={true}
        loop={true}
      />
    </SectionWrapper>
  );
};

export default Section1;
