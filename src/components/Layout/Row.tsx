import React from "react";
// styled system
import styled from "styled-components";
// type
import { ResponsivedLayoutRowProps } from "types/components/Layout";

// ----------------------------------------------------------

// ********** flex-box 24 items ********** //

const RowWrapper = styled.div<ResponsivedLayoutRowProps>`
  display: ${({ display }) => display};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  padding: ${({ padding }) => padding || "0"};
  width: 100%;
  grid-template-columns: ${({ templateCol }) => templateCol || "0"};
  grid-template-rows: ${({ templateRow }) => templateRow || "0"};
  ${({ zIndex }) => (zIndex ? `z-index: ${zIndex}` : "")};
  position: relative;
  ${({ flexDirection, gap, display }) => {
    return getGap(flexDirection, gap, display);
  }}
  ${({ responsive }) => responsive && getResponsive(responsive)}
`;
// func getter for responsive
const getResponsive = (responsive) => {
  let resStyle = "";
  const resData = Object.keys(responsive).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );
  resData.forEach((itemSize) => {
    const item = responsive[itemSize];
    resStyle += `@media screen and (max-width:${itemSize}px){
      ${item.display ? `display: ${item.display};` : ""}
      ${item.flexWrap ? `flex-wrap: ${item.flexWrap};` : ""}
      ${item.flexDirection ? `flex-direction: ${item.flexDirection};` : ""}
      ${item.justifyContent ? `justify-content: ${item.justifyContent};` : ""}
      ${item.alignItems ? `align-items: ${item.alignItems};` : ""}
      ${item.padding ? `padding: ${item.padding};` : ""}
      ${item.templateCol ? `grid-template-columns: ${item.templateCol};` : ""}
      ${item.templateRow ? `grid-template-rows: ${item.templateRow};` : ""}
      ${item.zIndex ? `z-index: ${item.zIndex};` : ""}
      ${item.gap ? getGap(item.flexDirection, item.gap, item.display) : ""}
    }`;
  });
  return resStyle;
};
// func getter for gap
const getGap = (flexDirection, gap, display) => {
  if (display === "grid") {
    return `
     gap: ${gap}px;
    `;
  }
  return `
     gap: ${gap}px;
    `;
  if (flexDirection === "column") {
    return `
      height: 100%;
      & > *:not(:last-child) {
         margin-right: 0px;
         margin-bottom: ${gap}px;
      }
    `;
  } else if (flexDirection === "column-reverse") {
    return `
      height: 100%;
      & > *:not(:first-child) {
         margin-right: 0px;
         margin-bottom: ${gap}px;
      }
    `;
  } else if (flexDirection === "row") {
    return `
      & > *:not(:last-child) {
         margin-bottom: 0px;
         margin-right: ${gap}px;
      }
    `;
  } else if (flexDirection === "row-reverse") {
    return `
      & > *:not(:first-child) {
         margin-bottom: 0px;
         margin-right: ${gap}px;
      }
    `;
  }
};

const Row = ({
  children,
  padding,
  flexDirection = "row",
  alignItems = "initial",
  justifyContent = "initial",
  gap = 0,
  flexWrap = "nowrap",
  display = "flex",
  templateCol = "auto",
  templateRow = "auto",
  zIndex,
  responsive,
  className,
}: ResponsivedLayoutRowProps) => {
  return (
    <RowWrapper
      display={display}
      padding={padding}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      gap={gap}
      flexWrap={flexWrap}
      templateCol={templateCol}
      templateRow={templateRow}
      zIndex={zIndex}
      responsive={responsive}
      className={className}
    >
      {children}
    </RowWrapper>
  );
};
export default Row;
