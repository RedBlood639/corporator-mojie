//  styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
//  type
import { StyledProps } from "types/components/Menu";
// ---------------------------------

export const MenuItemWrapper = styled.div<StyledProps>`
  padding: 0 21px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const HeaderText = styled.div`
  text-transform: uppercase;
  transition: color 200ms ease-out-out, background-color 200ms ease-out-out;
  :hover {
    color: ${themeGet("colors.orange.regular")};
  }
`;
