import React from "react";

import DesktopHeader from "./Desktop";
import MobileHeader from "./Mobile";
import { Hidden } from "components/Hidden";

const Header: React.FC = () => {
  return (
    <>
      <Hidden wHide={[1024]}>
        <DesktopHeader />
      </Hidden>
      <Hidden wShow={[1024]}>
        <MobileHeader />
      </Hidden>
    </>
  );
};

export default Header;
