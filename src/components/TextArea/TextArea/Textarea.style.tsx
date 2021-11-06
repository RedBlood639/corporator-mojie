// styled system
import styled from "styled-components";
// types
import { TextareaWrapperProps } from "types/components/Textarea";
import { themeGet } from "@styled-system/theme-get";

// -------------------------------------------------------
export const TextareaWrapper = styled.textarea<TextareaWrapperProps>`
  ${({ fSize }) => (fSize ? `font-size: ${fSize}px` : "")};
  ${({ fWeight }) => (fWeight ? `font-weight: ${fWeight}` : "")};
  ${({ tAlign }) => (tAlign ? `text-align: ${tAlign}` : "")};
  ${({ padding }) => (padding ? `padding: ${padding}` : "")};
  ${({ tTransForm }) => (tTransForm ? `text-transform: ${tTransForm}` : "")};
  ${({ lHeight }) => (lHeight ? `line-height: ${lHeight}px` : "")};
  ${({ tSpacing }) => (tSpacing ? `letter-spacing: ${tSpacing}px` : "")};
  ${({ mWidth }) => (mWidth ? `max-width: ${mWidth}px` : "")};
  color: ${({ fColor }) => themeGet(`colors.${fColor}`, "colors.black")};
  font-family: ${({ tFont }) => themeGet(`fonts.${tFont}`, "")};
`;
