import React from "react";
// components

import { HeaderWrapper } from "./index.style";
import { MobileMenu } from "views/Layout/Header/MobileMenu";

const MobileHeader: React.FC = () => {
  return (
    <HeaderWrapper>
      <MobileMenu />
    </HeaderWrapper>
  );
};

export default MobileHeader;
