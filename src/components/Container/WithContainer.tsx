import React from "react";
// component
import { ColorContainer } from "components/Container";
import ContainerContent from "./ContainerContent";
import ContainerWrapper from "./ContainerWrapper";
// types
import { WithContainerProps } from "types/components/Container";

// -------------------------------------------------------------
const WithContainer = ({
  cColor = "white",
  SectionView,
  mode = "normal",
}: WithContainerProps) => {
  return (
    <ColorContainer cColor={cColor}>
      <ContainerWrapper>
        <ContainerContent mode={mode}>
          <SectionView />
        </ContainerContent>
      </ContainerWrapper>
    </ColorContainer>
  );
};

export default WithContainer;
