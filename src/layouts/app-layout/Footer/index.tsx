import React from "react";
//  component
import { WithContainer } from "components/Container";
//  styled component
import { FooterWrapper } from "./index.style";
//  views
import { CopyRightView, LinkSectionView } from "views/Layout/Footer";
const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <WithContainer
        SectionView={LinkSectionView}
        cColor="primary.regular"
      ></WithContainer>
      <WithContainer
        SectionView={CopyRightView}
        cColor="primary.regular"
        mode="default"
      ></WithContainer>
    </FooterWrapper>
  );
};

export default Footer;
