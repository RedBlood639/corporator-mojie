import React from "react";
import { themeGet } from "@styled-system/theme-get";
import styled from "styled-components";
// import type
import { BorderContainerProps } from "types/components/Border";

const BorderWrapper = styled.div<BorderContainerProps>`
  border: ${({ bSize }) => bSize}px solid;
  border-color: ${({ bColor }) => themeGet(`colors.${bColor}`)};
  /* border: ; */
`;
//
const Border: React.FC<BorderContainerProps> = ({
  bColor,
  bSize,
  children,
}) => {
  return (
    <BorderWrapper bColor={bColor} bSize={bSize}>
      {children}
    </BorderWrapper>
  );
};

export default Border;
