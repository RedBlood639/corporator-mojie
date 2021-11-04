// types
import { ComponentType } from "react";

// --------------------------------------------------

export interface WithContainerProps extends ColorContainerProps {
  SectionView: ComponentType;
}


export interface ColorContainerProps {
  cColor?: string;
  mode?:'normal'|'default'
}
