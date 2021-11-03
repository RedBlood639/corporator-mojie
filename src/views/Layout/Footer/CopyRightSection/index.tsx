import React from 'react'
//  styled component
import {
  CopyRightSectionWrapper,
} from './CopyRightSection.style'
// Componnent
import { Row, Col } from 'components/Layout'
//
import { getThisYear } from 'utils/helper-date'
// Generted Component
// ----------------------------------------
export default function CopyRightSection(){
  return (
    <CopyRightSectionWrapper>
      <Row alignItems="center" justifyContent="space-between">
        <Col>@{getThisYear()} Betheme by Muffin group | All Rights Reserved | Powered by Li Haoming</Col>
      </Row>
    </CopyRightSectionWrapper>
  )
}