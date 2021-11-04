import React from "react";
//  styled component
import styled from "styled-components";

// type
type Props = {
  children: React.ReactNode;
};

// ------------------------------

const ContainerWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
`;

const Container: React.FC<Props> = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
