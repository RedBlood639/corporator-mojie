import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const MenuWrapper = styled.div`
  background: ${themeGet("colors.primary.regular")};
  position: relative;
`;
export const MenuInner = styled.div<{ show: boolean }>`
  margin: 0 20px;
  display: ${(props) => (props.show ? "none" : "block")};
  transition: all 0.4s ease-out;
`;

export const Icon_wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    color: ${themeGet("colors.orange.dark")};
  }
`;

export const Navbar_wrapper = styled.div<{ show: boolean }>`
  left: ${(props) => (props.show ? "0" : "-300px")};
  top: 0;
  transition: all 0.4s ease-out;
  width: 300px;
  height: 100vh;
  position: absolute;
  border-right: 1px solid ${themeGet("colors.gray.300")};
  background: ${themeGet("colors.primary.regular")};
`;

export const Content_wrapper = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? "block" : "none")};

  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: -1;
  background: rgba(0, 0, 0, 0.6);
`;
