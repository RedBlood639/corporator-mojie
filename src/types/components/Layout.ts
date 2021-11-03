import { ReactNode } from 'react'

// type
import { InitialProps } from './Common'

export interface FlexLayoutProps extends InitialProps {
  children?: ReactNode
}

export interface LayourColProps extends FlexLayoutProps {
  item?: number
}

export interface LayoutRowProps extends FlexLayoutProps {
  gap?: string | number
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  flexWrap?: 'nowrap' | 'wrap'
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'initial'
    | 'space-around'
    | 'space-between'
    | 'stretch'
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'initial' | 'stretch'
}
