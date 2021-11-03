import React from 'react'
// Styled component

import styled from 'styled-components'

// type
type Props = {
  children: React.ReactNode
}

//  ----------------------------

const ContainerContent = styled.div`
  padding: 0 82px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    padding: 0 55px;
  }
  @media screen and (max-width: 580px) {
    padding: 0 35px;
  }
  @media screen and (max-width: 420px) {
    padding: 0 15px;
  }
`

const Container: React.FC<Props> = ({ children }) => {
  return <ContainerContent>{children}</ContainerContent>
}

export default Container
