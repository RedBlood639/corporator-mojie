// styled system
import styled from "styled-components";
// types
import { TextWrapperProps } from "types/components/Text";
// -------------------------

export const TextWrapper = styled.p<TextWrapperProps>`
  ${({ fSize }) => (fSize ? `font-size: ${fSize}px` : "")};
  ${({ fWeight }) => (fWeight ? `font-weight: ${fWeight}` : "")};
  ${({ tAlign }) => (tAlign ? `text-align: ${tAlign}` : "")};
  ${({ padding }) => (padding ? `padding: ${padding}` : "")};
`;
export const TextSpanWrapper = styled.span<TextWrapperProps>`
  ${({ fSize }) => (fSize ? `font-size: ${fSize}px` : "")};
  ${({ fWeight }) => (fWeight ? `font-weight: ${fWeight}` : "")};
  ${({ tAlign }) => (tAlign ? `text-align: ${tAlign}` : "")};
  ${({ padding }) => (padding ? `padding: ${padding}` : "")};
`;
