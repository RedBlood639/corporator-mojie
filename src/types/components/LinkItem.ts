import { ReactNode } from 'react'

export interface LinkItemWrapperProps extends IconWrapperProps {
  title?: string
  href?: string
  icon?: ReactNode
  iconSlot?: 'start' | 'end'
  iconDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  iconGaping?: number
  [key: string]: unknown
}
export interface IconWrapperProps {
  iconWidth?: number
}
