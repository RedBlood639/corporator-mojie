import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
//
export const SectionWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${themeGet("colors.primary.regular")};
  padding-top: 72px;
`;

export const Content_Inner = styled.div`
  position: absolute;
  top: 150px;
  @media screen and (max-width: 550px) {
    top: 100px;
  }
`;
