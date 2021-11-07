import React from "react";
// Styled component

import styled from "styled-components";

// type
interface Props {
  children: React.ReactNode;
}

interface ContainerProps extends Props {
  mode?: "default" | "normal";
}

//  ----------------------------

const ContainerContent = styled.div<ContainerProps>`
  padding: ${(props) => (props.mode == "normal" ? "0 130px;" : "0")};
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    padding: ${(props) => (props.mode == "normal" ? "0 55px;" : "0")};
  }
  @media screen and (max-width: 580px) {
    padding: ${(props) => (props.mode == "normal" ? "0 35px;" : "0")};
  }
  @media screen and (max-width: 420px) {
    padding: ${(props) => (props.mode == "normal" ? "0 15px;" : "0")};
  }
`;

const Container: React.FC<ContainerProps> = ({ children, mode = "normal" }) => {
  return <ContainerContent mode={mode}>{children}</ContainerContent>;
};

export default Container;
