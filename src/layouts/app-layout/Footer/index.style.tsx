//  styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import photo from "assets/images/business4-footer-bg.png";

//  -------------------------------------------------

export const FooterWrapper = styled.div`
  width: 100%;
  background-image: url(${photo.src});
  background-repeat: no-repeat;
  background-position: center bottom;
  /* & > div {
    z-index: -1;
    position: relative;
  } */
`;

export const CopyRightSection = styled.div`
  background: ${themeGet("colors.primary.regular")};
`;
export const LinkSection = styled.div`
  background: ${themeGet("colors.primary.regular")};
`;
