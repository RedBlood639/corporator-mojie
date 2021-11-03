import React, { ComponentType } from 'react'
//  component
import { Container } from 'components/Container'
//  styled component
import { FooterWrapper, LinkSection, CopyRightSection } from './index.style'
//  views
import {CopyRightView, LinkSectionView} from "views/Layout/Footer"

//  WithContainer
interface WithContainerProps {
  SectionContainer: ComponentType
  SectionView: ComponentType
}

const WithContainer = ({
  SectionContainer,
  SectionView,
}: WithContainerProps) => {
  return (
    <SectionContainer>
      <Container>
        <SectionView />
      </Container>
    </SectionContainer>
  )
}

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <WithContainer
        SectionContainer={LinkSection}
        SectionView={LinkSectionView}
      ></WithContainer>
      <WithContainer
        SectionContainer={CopyRightSection}
        SectionView={CopyRightView}
      ></WithContainer>
    </FooterWrapper>
  )
}

export default Footer
