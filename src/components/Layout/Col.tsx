import React from "react";
// styled system
import styled from "styled-components";
// type
import { ResponsivedLayoutColProps } from "types/components/Layout";

// ----------------------------------------------------------

const ColWrapper = styled.div<ResponsivedLayoutColProps>`
  flex: ${({ flex }) => flex};
  width: ${({ item }) => getItem(item)};
  max-width: ${({ mWidth }) => mWidth}px;
  ${({ padding }) => (padding ? `padding: ${padding}` : "")};
  ${({ responsive }) => responsive && getResponsive(responsive)}
`;

// func item width
const getItem = (witem) => {
  if (witem === -2) {
    return "0%";
  }
  if (witem < 0) {
    return "auto";
  }
  if (witem > 24) {
    witem = 24;
  }
  return (witem / 24) * 100 + "%";
};
// func getter for responsive
const getResponsive = (responsive) => {
  let resStyle = "";
  const resData = Object.keys(responsive).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );
  resData.forEach((itemSize) => {
    const pointitem = responsive[itemSize];
    resStyle += `@media screen and (max-width:${itemSize}px){
      ${pointitem.item ? `width: ${getItem(pointitem.item)};` : ""}
      ${pointitem.flex ? `flex: ${pointitem.flex};` : ""}
      ${pointitem.mWidth ? `max-width: ${pointitem.mWidth}px;` : ""}
      ${pointitem.padding ? `padding: ${pointitem.padding};` : ""}

    }`;
  });
  return resStyle;
};

const Col = ({ children, item = -1, ...props }: ResponsivedLayoutColProps) => {
  return (
    <ColWrapper item={item} {...props}>
      {children}
    </ColWrapper>
  );
};
export default Col;
