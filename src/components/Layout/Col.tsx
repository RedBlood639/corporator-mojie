import React from "react";
// styled system
import styled from "styled-components";
// type
import { ResponsivedLayoutColProps } from "types/components/Layout";

// ----------------------------------------------------------

const ColWrapper = styled.div<ResponsivedLayoutColProps>`
  flex: ${({ flex }) => flex};
  width: ${({ item }) => getItem(item)};
  ${({ responsive }) => responsive && getResponsive(responsive)}
`;

// func item width
const getItem = (item) => {
  if (item <= 0) {
    return "auto";
  }
  if (item > 24) {
    item = 24;
  }
  return (item / 24) * 100 + "%";
};
// func getter for responsive
const getResponsive = (responsive) => {
  let resStyle = "";
  const resData = Object.keys(responsive).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );
  resData.forEach((itemSize) => {
    const item = responsive[itemSize];
    resStyle += `@media screen and (max-width:${itemSize}px){
      ${item.item ? `width: ${getItem(item.item)};` : ""}
      ${item.flex ? `flex: ${item.flex};` : ""}
    }`;
  });
  return resStyle;
};

const Col = ({ children, item = 0, ...props }: ResponsivedLayoutColProps) => {
  return (
    <ColWrapper item={item} {...props}>
      {children}
    </ColWrapper>
  );
};
export default Col;
