import React from "react";
// components
import { Row } from "components/Layout";

import { HeaderWrapper } from "./index.style";
import { MenuView } from "views/Layout/Header/Menu";

const DesktopHeader: React.FC = () => {
  return (
    <HeaderWrapper>
      <MenuView />
    </HeaderWrapper>
  );
};

export default DesktopHeader;
