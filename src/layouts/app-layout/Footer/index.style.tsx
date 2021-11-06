//  styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

//  -------------------------------------------------

export const FooterWrapper = styled.div`
  border-top: 1px solid ${themeGet("colors.gray.300")};
`;

export const CopyRightSection = styled.div`
  background: ${themeGet("colors.primary.regular")};
`;
export const LinkSection = styled.div`
  background: ${themeGet("colors.primary.regular")};
`;
