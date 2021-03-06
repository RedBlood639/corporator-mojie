import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
//  ----------------

export const LinkSectionWrapper = styled.div`
  padding: 70px 0;
  @media screen and (max-width: 530px) {
    padding: 30px 0;
  }
`;
export const CategoryItemHeader = styled.div`
  color: ${themeGet("colors.orange.regular")};
  margin-bottom: 15px;
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
  letter-spacing: 0px;
`;
export const CategoryItem = styled.div`
  cursor: pointer;
  margin-bottom: 5px;
  transition: color 300ms ease-out-out, background-color 300ms ease-out-out;
  color: ${themeGet("colors.white")};
  :hover {
    color: ${themeGet("colors.orange.regular")};
    text-decoration: underline;
  }
  @media screen and (max-width: 530px) {
    text-align: center;
  }
`;
