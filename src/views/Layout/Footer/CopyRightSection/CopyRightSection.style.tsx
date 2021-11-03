// styled system
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

// ---------------------------------
export const CopyRightSectionWrapper = styled.div`
  padding: 30px 0 30px 0;
  font-size: 17px;
  border-top: 1px solid ${themeGet('colors.gray.300')};
  color: ${themeGet('colors.white')};

`
export const StyledLinkItem = styled.div`
  cursor: pointer;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;
  :hover {
    color: ${themeGet('colors.white')};
  }
`
