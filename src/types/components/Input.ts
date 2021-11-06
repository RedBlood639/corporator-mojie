import { ComponentType, ReactNode } from "react";

interface InputProps {
  children?: ReactNode;
  [key: string]: unknown;
}
export interface StyledProps extends InputProps {
  disabled?: boolean;
}

export interface InputItemProps extends StyledProps {
  loading?: boolean;
  icon?: any;
  placeholder?: string;
}

export interface InputContainerProps extends InputProps {
  iColor?: "primary";
  iSize?: "big" | "small" | "medium";
  iFont?: "bold" |  "medium" | "smbold";
}
export interface InputHocProps extends InputContainerProps {
  Inputicon?: ComponentType;
}
