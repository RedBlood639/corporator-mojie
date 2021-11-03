import React from 'react'

//styled system
import styled from 'styled-components'

// type
import { LayoutRowProps } from 'types/components/Layout'

// -------------------------------------

//

const RowWrapper = styled.div<LayoutRowProps>`
  display: flex;
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  padding: ${({ padding }) => padding || '0'};
  width: 100%;
  ${({ flexDirection, gap }) => {
    if (flexDirection == 'column') {
      return `
        height: 100%;
        & > *:not(:last-child) {
           margin-bottom: ${gap}px;
        }
      `
    }
    if (flexDirection == 'column-reverse') {
      return `
        height: 100%;
        & > *:not(:first-child) {
           margin-bottom: ${gap}px;
        }
      `
    }
    if (flexDirection == 'row') {
      return `
        & > *:not(:last-child) {
           margin-right: ${gap}px;
        }
      `
    }
    if (flexDirection == 'row-reverse') {
      return `
        & > *:not(:first-child) {
           margin-right: ${gap}px;
        }
      `
    }
  }}
`

const Row: React.FC<LayoutRowProps> = ({
  children,
  padding,
  flexDirection = 'row',
  alignItems = 'initial',
  justifyContent = 'initial',
  gap = 0,
  flexWrap = 'nowrap',
}) => {
  return (
    <RowWrapper
      padding={padding}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      gap={gap}
      flexWrap={flexWrap}
    >
      {children}
    </RowWrapper>
  )
}

export default Row
