//  styled system
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

//  -------------------------------------------------

export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`

export const CopyRightSection = styled.div`
  background: ${themeGet('colors.primary.regular')};
`
export const LinkSection = styled.div`
  background: ${themeGet('colors.primary.regular')};
`
