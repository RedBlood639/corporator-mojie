import React from 'react'
// styled system
import styled from 'styled-components'
// type
import { LayourColProps } from 'types/components/Layout'

// -----------------------

const ColWrapper = styled.div<LayourColProps>`
  width: ${({ item }) => {
    if (item <= 0) {
      return 'auto'
    }
    if (item > 24) {
      item = 24
    }
    return (item / 24) * 100 + '%'
  }};
`
export default function Col({ children, item = 0, ...props }: LayourColProps) {
  return (
    <ColWrapper item={item} {...props}>
      {children}
    </ColWrapper>
  )
}
